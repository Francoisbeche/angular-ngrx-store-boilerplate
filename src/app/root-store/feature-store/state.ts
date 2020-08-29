import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Feature } from './models/feature.model';
import { RequestStatus } from '../enums/requestStatus';
import { HttpErrorResponse } from '@angular/common/http';

export const featureAdapter: EntityAdapter<Feature> = createEntityAdapter<Feature>({
  selectId: (model) => model.id,
});

export interface State extends EntityState<Feature> {
  fetchStatus:RequestStatus,
  fetchError: HttpErrorResponse
}

export const initialState: State = featureAdapter.getInitialState({
  fetchStatus:RequestStatus.NOT_FIRE,
  fetchError: null
})
