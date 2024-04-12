import { sharedReducer } from './state/shared.reducer';
import { SHARED_STATE_NAME } from './state/shared.selector';
import { SharedState } from './state/shared.state';

export interface AppState {
  
  [SHARED_STATE_NAME]: SharedState;
}

export const appReducer = { 
  [SHARED_STATE_NAME]: sharedReducer
 };
