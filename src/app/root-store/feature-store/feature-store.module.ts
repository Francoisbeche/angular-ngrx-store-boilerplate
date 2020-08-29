import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {featureReducer} from './reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('feature', featureReducer),
    EffectsModule.forFeature([]),
  ]
})
export class FeatureStoreModule { }
