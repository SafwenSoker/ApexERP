import { createAction, props } from "@ngrx/store";

export const SET_LOADDING_ACTION = '[shared state] set loading spinner';
export const SET_ERROR_MESSAGE = '[shared state] set error message';

export const setLoadingSpinner = createAction(SET_LOADDING_ACTION, props<{ status: boolean }>());
export const setErrorMessage = createAction(SET_ERROR_MESSAGE, props<{payload: {message: string, statusCode: number}}>());
