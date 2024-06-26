import { NgModule } from '@angular/core';
import { CountDownModule } from '@delon/abc/count-down';
import { OnboardingModule } from '@delon/abc/onboarding';
import { QuickMenuModule } from '@delon/abc/quick-menu';
import { G2BarModule } from '@delon/chart/bar';
import { G2CardModule } from '@delon/chart/card';
import { G2GaugeModule } from '@delon/chart/gauge';
import { G2MiniAreaModule } from '@delon/chart/mini-area';
import { G2MiniBarModule } from '@delon/chart/mini-bar';
import { G2MiniProgressModule } from '@delon/chart/mini-progress';
import { NumberInfoModule } from '@delon/chart/number-info';
import { G2PieModule } from '@delon/chart/pie';
import { G2RadarModule } from '@delon/chart/radar';
import { G2SingleBarModule } from '@delon/chart/single-bar';
import { G2TagCloudModule } from '@delon/chart/tag-cloud';
import { G2TimelineModule } from '@delon/chart/timeline';
import { TrendModule } from '@delon/chart/trend';
import { G2WaterWaveModule } from '@delon/chart/water-wave';
import { SharedModule } from '@shared';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { CountdownModule } from 'ngx-countdown';

import { AnalysisComponent } from './analysis/analysis.component';
import { DashboardRoutingModule } from './dashboard-routes';
import { FormComponent } from './form/form.component';
import { Step1Component } from './form/step1.component';
import { Step2Component } from './form/step2.component';
import { Step3Component } from './form/step3.component';

const COMPONENTS = [AnalysisComponent, FormComponent, Step1Component, Step2Component, Step3Component];
@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule,
    CountDownModule,
    OnboardingModule,
    QuickMenuModule,
    G2BarModule,
    G2CardModule,
    G2GaugeModule,
    G2MiniAreaModule,
    G2MiniBarModule,
    G2MiniProgressModule,
    NumberInfoModule,
    G2PieModule,
    G2RadarModule,
    G2SingleBarModule,
    G2TagCloudModule,
    G2TimelineModule,
    TrendModule,
    G2WaterWaveModule,
    CountdownModule,
    NzCarouselModule,
    NzPaginationModule,
    NzStepsModule
  ],
  declarations: [...COMPONENTS]
})
export class DashboardModule {}
