import { AuthAction } from './../actions/authAction';
import { ActionTypes } from "redux/actionTypes";

interface IAuthState {
    data : IAuthData | null;
    status : 'idle' | 'pending' | 'success' | 'error';
    error : null | string
    
}

const initialState : IAuthState = {
    data : null,
    status : 'idle',
    error : null

}

const authReducer = (
    state : IAuthState = initialState, 
    action : AuthAction 
    ): IAuthState | null => {
    switch(action.type){
        case ActionTypes.LOGIN_PENDING:
            return {
                data : null,
                status: 'pending',
                error: null
            };
        case ActionTypes.LOGIN_SUCCESS:
            return {
                data : action.payload,
                status: 'success',
                error: null
            };
        case ActionTypes.LOGIN_ERROR:
            return {
                data : null,
                status: 'error',
                error: action.payload
            };
        case ActionTypes.LOGOUT:
            return initialState

        default:
            return state
    }
}
export default authReducer;