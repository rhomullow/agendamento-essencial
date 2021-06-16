import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { CardModule } from 'src/app/shared/components/card/card.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    CardModule
  ],
  declarations: [ HomeComponent ],

})
export class HomeModule { }
