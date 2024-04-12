export interface SharedState {
    showLoading: boolean;
    error: {statusCode: number, message: string};

}

export const initialState: SharedState = {
    showLoading: false,
    error: {
        statusCode: 200,
        message: ''
    }
}
