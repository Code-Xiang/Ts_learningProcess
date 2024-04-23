import { HttpClient } from '@angular/common/http'; // 引入HttpClient，用于进行HTTP请求
import { Injectable, Inject, inject } from '@angular/core'; // 引入Angular核心装饰器
import { Router } from '@angular/router'; // 引入Router，用于导航和路由控制
import { ACLService } from '@delon/acl'; // 引入Delon的ACL服务，用于访问控制
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth'; // 引入Delon的认证服务和token接口
import { ALAIN_I18N_TOKEN, MenuService, SettingsService, TitleService } from '@delon/theme'; // 引入Delon主题的一些服务
import type { NzSafeAny } from 'ng-zorro-antd/core/types'; // 引入类型定义，用于类型安全
import { NzIconService } from 'ng-zorro-antd/icon'; // 引入图标服务
import { Observable, zip, of, catchError, map } from 'rxjs'; // 引入RxJS的一些操作符和Observable类型

import { ICONS } from '../../../style-icons'; // 引入图标集
import { ICONS_AUTO } from '../../../style-icons-auto'; // 引入自动加载的图标集
import { I18NService } from '../i18n/i18n.service'; // 引入国际化服务

/**
 * Used for application startup
 * Generally used to get the basic data of the application, like: Menu Data, User Data, etc.
 */
@Injectable() // 定义这是一个可以被注入的服务
export class StartupService {
  // private i18n = inject<I18NService>(ALAIN_I18N_TOKEN); // 通过ALAIN_I18N_TOKEN注入国际化服务

  // 定义服务类
  constructor(
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService, // 通过ALAIN_I18N_TOKEN注入国际化服务
    iconSrv: NzIconService, // 注入图标服务
    private menuService: MenuService, // 注入菜单服务
    private settingService: SettingsService, // 注入设置服务
    private aclService: ACLService, // 注入访问控制服务
    private titleService: TitleService, // 注入标题服务
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService, // 注入Token服务
    private httpClient: HttpClient, // 注入HTTP客户端
    private router: Router // 注入路由器
  ) {
    iconSrv.addIcon(...ICONS_AUTO, ...ICONS); // 加载图标
  }
  private viaHttp(): Observable<void> {
    // 定义一个私有方法，通过HTTP加载数据
    return this.httpClient.get('assets/tmp/app-data.json').pipe(
      catchError((res: NzSafeAny) => {
        // 捕获错误
        // console.warn(`StartupService.load: Network request failed`, res); // 输出警告信息
        setTimeout(() => this.router.navigateByUrl(`/exception/500`)); // 路由到500错误页面
        return of({}); // 返回一个空对象的Observable
      }),
      map((res: NzSafeAny) => {
        // 处理响应数据
        // 应用信息：包括站点名称、描述、年份
        this.settingService.setApp(res.app);
        // 用户信息：包括姓名、头像、邮箱地址
        this.settingService.setUser(res.user);
        // ACL：设置完整权限，https://ng-alain.com/acl/getting-started
        this.aclService.setFull(true);
        // 菜单数据，https://ng-alain.com/theme/menu
        this.menuService.add(res.menu);
        // 设置页面后缀标题，https://ng-alain.com/theme/title
        this.titleService.suffix = res.app.name;
      })
    );
  }
  load1(): Observable<void> {
    // 定义load方法，用于加载初始化数据
    const defaultLang = this.i18n.defaultLang; // 获取默认语言设置
    // 合并两个异步操作的结果
    // debugger;
    return zip(this.i18n.loadLangData(defaultLang), this.httpClient.get('./assets/tmp/app-data.json')).pipe(
      catchError(res => {
        // 处理可能的错误
        console.warn(`StartupService.load: Network request failed`, res); // 记录错误警告
        setTimeout(() => this.router.navigateByUrl(`/exception/500`)); // 导航到500错误页面
        return []; // 返回空数组，继续执行流程
      }),
      map(([langData, appData]: [Record<string, string>, NzSafeAny]) => {
        // 处理返回数据
        // 设置语言数据
        this.i18n.use(defaultLang, langData);

        // 设置应用信息，如站点名、描述、年份
        this.settingService.setApp(appData.app);
        // 设置用户信息，如姓名、头像、邮箱地址
        this.settingService.setUser(appData.user);
        // 设置完整的访问控制权限
        this.aclService.setFull(true);
        // 初始化菜单数据
        this.menuService.add(appData.menu);
        // 设置页面标题后缀
        this.titleService.default = '';
        this.titleService.suffix = appData.app.name;
      })
    );
  }
  private viaMock(): Observable<void> {
    // 定义一个私有方法，通过模拟数据加载
    // mock应用信息和用户信息
    const app: any = {
      name: `ng-alain`,
      description: `Ng-zorro admin panel front-end framework`
    };
    const user: any = {
      name: 'Admin',
      avatar: './assets/tmp/img/avatar.jpg',
      email: 'cipchk@qq.com',
      token: '123456789'
    };
    // 设置应用、用户、权限和菜单
    this.settingService.setApp(app);
    this.settingService.setUser(user);
    this.aclService.setFull(true);
    this.menuService.add([
      {
        text: 'Main',
        group: true,
        children: [
          {
            text: 'Dashboard',
            link: '/dashboard',
            icon: { type: 'icon', value: 'appstore' }
          }
        ]
      }
    ]);
    this.titleService.suffix = app.name;
    return of(void 0); // 返回一个空的Observable
  }

  load(): Observable<void> {
    // 定义一个公共方法，用于加载数据
    // 返回通过模拟数据加载的Observable
    return this.load1();
  }
}
