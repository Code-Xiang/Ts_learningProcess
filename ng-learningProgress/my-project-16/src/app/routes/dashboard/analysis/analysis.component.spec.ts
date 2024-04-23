// 引入Angular核心的测试工具包
import { ComponentFixture, TestBed } from '@angular/core/testing';

// 引入需要测试的组件AnalysisComponent
import { AnalysisComponent } from './analysis.component';

// 使用describe定义一个测试套件，名称为'AnalysisComponent'
describe('AnalysisComponent', () => {
  // 定义component变量用于访问组件实例
  let component: AnalysisComponent;
  // 定义fixture变量用于获取组件的测试环境
  let fixture: ComponentFixture<AnalysisComponent>;

  // beforeEach是在本测试套件的每个测试前执行的设置函数
  beforeEach(() => {
    // 使用TestBed配置当前的测试模块
    TestBed.configureTestingModule({
      declarations: [AnalysisComponent] // 声明测试模块中包含的组件
    });
    // 创建AnalysisComponent的实例
    fixture = TestBed.createComponent(AnalysisComponent);
    // 获取组件实例
    component = fixture.componentInstance;
    // 执行变更检测，完成组件初始化
    fixture.detectChanges();
  });

  // it定义一个具体的测试用例，这里的测试用例名称为'should create'
  it('should create', () => {
    // 使用expect进行断言，判断组件实例是否被成功创建
    expect(component).toBeTruthy();
  });
});
