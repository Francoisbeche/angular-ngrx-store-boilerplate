import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule} from '@ngrx/store';
import { EffectsModule} from '@ngrx/effects';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';
import { FeatureStoreModule } from './feature-store/feature-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    StoreModule.forRoot({},{
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    FeatureStoreModule,
  ]
})
export class RootStoreModule { }
