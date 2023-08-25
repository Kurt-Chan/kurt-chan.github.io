import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { SharedModule } from '../shared/shared.module';

import { NgParticlesModule } from 'ng-particles';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, CartRoutingModule, SharedModule, NgParticlesModule]
})
export class CartModule {}
