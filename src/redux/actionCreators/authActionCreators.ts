import { Dispatch } from 'react';
import { AuthAction } from 'redux/actions/authAction';
import { ActionTypes } from 'redux/actionTypes';
import AuthService from 'services/AuthService';


export const login = (payload : {email : string, password : string}) : any => {

    return (dispatch : Dispatch<AuthAction> )  => {
        dispatch({
            type: ActionTypes.LOGIN_PENDING
        })
        AuthService.login(payload)
        .then((user) => {
            dispatch({
                    type: ActionTypes.LOGIN_SUCCESS,
                    payload : user
                })
        })
        .catch((err) => {
            dispatch({
                type: ActionTypes.LOGIN_ERROR,
                payload : err?.response?.data?.message
            })
        })
    }
    // return 
}
export const logout = (): AuthAction => {
    return {
      type: ActionTypes.LOGOUT,
    };
  };

