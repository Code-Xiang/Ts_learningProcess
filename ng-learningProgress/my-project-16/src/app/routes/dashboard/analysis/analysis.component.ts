import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Inject, OnInit, TrackByFunction } from '@angular/core';
import { I18NService } from '@core';
import { ALAIN_I18N_TOKEN, _HttpClient } from '@delon/theme';
import { getTimeDistance } from '@delon/util/date-time';
import { deepCopy } from '@delon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.less']
})
export class AnalysisComponent {
  trackByIndex: TrackByFunction<number> | undefined;
  constructor(
    public msg: NzMessageService,
    private http: _HttpClient,
    private cdr: ChangeDetectorRef,
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService
  ) {}
  data: any = {};
  loading = true;
  salesPieData: any;
  salesType = 'all';
  salesTotal = 0;
  saleTabs: Array<{ key: string; show?: boolean }> = [{ key: 'sales', show: true }, { key: 'visits' }];
  dateRangeTypes = ['today', 'week', 'month', 'year'];
  dateRangeType = this.dateRangeTypes[0];
  dateRange: Date[] = [];
  array = [1, 2, 3, 4];
  effect = 'scrollx';
  rankingListData: Array<{ title: string; total: number }> = Array(7)
    .fill({}) // 使用一个空对象 {} 填充整个数组。这是为了确保数组中的每个位置都已初始化
    .map((_, i) => {
      // _ 代表原数组的元素（这里是空对象）
      // 而 i 是当前元素的索引（从0到6）
      return {
        title: this.i18n.fanyi('app.analysis.test', { no: i }),
        total: 323234
      };
    });
  ngOnInit(): void {
    this.http.get('/chart').subscribe(res => {
      res.offlineData.forEach((item: any, idx: number) => {
        item.show = idx === 0; // 这使得第一个元素设置为true，其他的都是false
        item.chart = deepCopy(res.offlineChartData);
      });
      this.data = res;
      this.loading = false;
      this.changeSaleType();
    });
  }
  changeSaleType(): void {
    this.salesPieData =
      this.salesType === 'all'
        ? this.data.salesTypeData
        : this.salesType === 'online'
          ? this.data.salesTypeDataOnline
          : this.data.salesTypeDataOffline;
    if (this.salesPieData) {
      this.salesTotal = this.salesPieData.reduce((pre: number, now: { y: number }) => now.y + pre, 0);
      // 使用 reduce 方法计算 salesPieData 中所有元素的 y 属性的总和。
      // 这里，pre 是累积总和，now 是当前遍历的元素，now.y 是当前元素的 y 值，表示销售额。，这里的0是初始值
      // reduce原理： 它接受一个回调函数和一个可选的初始值。
      // 回调函数接受两个参数：pre（累加器）和 now（数组中当前正在处理的元素）。
      // 在第一次调用回调函数时，如果提供了初始值，pre 将被设置为这个初始值，now 将是数组的第一个元素。
      // 如果没有提供初始值，pre 将是数组的第一个元素，而 now 将是数组的第二个元素。
    }
    this.cdr.detectChanges();
  }
  salesChange(idx: number): void {
    if (this.saleTabs[idx].show !== true) {
      this.saleTabs[idx].show = true;
      this.cdr.detectChanges();
    }
  }
  setDate(type: string): void {
    this.dateRange = getTimeDistance(type as NzSafeAny);
    // NzSafeAny 是一个类型，通常在 Angular 项目中使用，可能被定义为任何类型的别名，
    // 通常用于避免 TypeScript 的严格类型检查。这意味着即使 type 的实际类型未知或更复杂，
    // 我们也告诉 TypeScript 把它当作任何类型处理。
    this.dateRangeType = type;
    setTimeout(() => this.cdr.detectChanges());
    // 通过将 cdr.detectChanges() 放在 setTimeout 中，
    // 我们延迟变更检测的执行，从而允许任何前面的状态变更（如 this.dateRange 和 this.dateRangeType 的更新）首先完成。
    // 这有助于避免在变更检测周期中遇到不一致状态或其他更新问题，同时也可以解决因直接数据变更后未能即时更新界面的问题。
  }
}
