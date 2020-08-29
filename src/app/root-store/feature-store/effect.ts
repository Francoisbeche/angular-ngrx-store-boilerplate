import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Feature } from "./models/feature.model";
import * as featureActions from './actions';

@Injectable()
export class FeatureEffect {
  constructor(private actions$: Actions, private http: HttpClient) {}

  private ApiURL: string = '' //Bse Url FROM ENV


  @Effect() fetchFeature$ = this.actions$.pipe(
    ofType<featureActions.FetchFeature>(featureActions.ActionTypes.FetchFeature),
    switchMap((action) => {
      return this.http
        .get(`${this.ApiURL}/monApi`)
        .pipe(
          switchMap(
            (data: Feature[]) => {
              return [
                new featureActions.FetchFeatureSuccess(data),
              ];
            }
          ),
          catchError((error: HttpErrorResponse) => of(new featureActions.FetchFeatureError(error)))
        );
    })
  );
}
