import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceiptRoutingModule } from './receipt-routing.module';
import { ReceiptComponent } from './receipt.component';
// import { SharedModule } from '../shared/shared.module';
import { NgParticlesModule } from 'ng-particles';

@NgModule({
  declarations: [ReceiptComponent],
  imports: [CommonModule, ReceiptRoutingModule, NgParticlesModule]
})
export class ReceiptModule {}
