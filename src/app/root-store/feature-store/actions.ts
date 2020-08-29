import { Action } from "@ngrx/store";
import { Feature } from "./models/feature.model";
import { HttpErrorResponse } from '@angular/common/http';

export enum ActionTypes {
  FetchFeature = '[FEATURE] Fetching',
  FetchFeatureSuccess = '[FEATURE] Fetching Success',
  FetchFeatureError = '[FEATURE] Fetching Error'
}

export class FetchFeature implements Action {
  readonly type = ActionTypes.FetchFeature;

}

export class FetchFeatureSuccess implements Action {
  readonly type = ActionTypes.FetchFeatureSuccess;

  constructor(public payload: Feature[]) {}
}

export class FetchFeatureError implements Action {
  readonly type = ActionTypes.FetchFeatureError;

  constructor(public payload: HttpErrorResponse) {}
}


export type Actions = FetchFeature|FetchFeatureSuccess|FetchFeatureError;
