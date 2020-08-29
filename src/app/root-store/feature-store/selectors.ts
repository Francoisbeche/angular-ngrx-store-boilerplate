import { MemoizedSelector, createFeatureSelector, createSelector } from "@ngrx/store";
import { featureAdapter, State } from "./state";
import { Feature } from "./models/feature.model";
import { HttpErrorResponse } from "@angular/common/http";
import { RequestStatus } from "../enums/requestStatus";


const getFetchFeatureError = (state: State): HttpErrorResponse => state.fetchError;

const getFetchFeatureStatus = (state: State): RequestStatus => state.fetchStatus;

export const selectMyFeatureState: MemoizedSelector<object, State> = createFeatureSelector<State>('feature');

export const selectFeatureList: (state: object) => Feature[] = featureAdapter.getSelectors(selectMyFeatureState).selectAll;

export const selectFeatureById = (id: string) =>
  createSelector(selectFeatureList, (allMyFeatures: Feature[]) => {
    if (allMyFeatures) {
      return allMyFeatures.find((p) => p.id === id);
    } else {
      return null;
    }
  });

  export const selectFetchError: MemoizedSelector<object, HttpErrorResponse> = createSelector(
    selectMyFeatureState,
    getFetchFeatureError
  );

  export const selectFetchStatus: MemoizedSelector<object, RequestStatus> = createSelector(
    selectMyFeatureState,
    getFetchFeatureStatus
  );
