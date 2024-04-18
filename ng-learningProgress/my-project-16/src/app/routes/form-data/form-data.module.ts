import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';

import { FormDataRoutingModule } from './form-data-routing.module';

const COMPONENTS: Array<Type<void>> = [];

@NgModule({
  imports: [SharedModule, FormDataRoutingModule],
  declarations: COMPONENTS
})
export class FormDataModule {}
