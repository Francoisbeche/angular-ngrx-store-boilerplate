import { Actions, ActionTypes } from './actions';
import { featureAdapter, initialState, State } from './state';
import { RequestStatus } from '../enums/requestStatus';


export function featureReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.FetchFeature:
      return {...state, fetchStatus: RequestStatus.LOADING, fetchError:null};
    case ActionTypes.FetchFeatureError:
      return { ...state,fetchStatus:RequestStatus.ERROR, fetchError: action.payload }
    case ActionTypes.FetchFeatureSuccess:
      return featureAdapter.setAll(action.payload, {
        ...state,
        fetchStatus: RequestStatus.SUCCESS,
        fetchError: null,
      });
    default: {
      return state;
    }
  }
}
