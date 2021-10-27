
import { initialState } from "../types/types"
import { actions,actionTypes } from "../types/types"
export const reducer=(state=initialState,actions:actions)=>{
    switch (actions.type){
        case actionTypes.ChangeEmail:
           return {
            ...state,
            email: (state.email=actions.payload),
            }
        case actionTypes.ChangePassword:
            return{
                ...state,
            password: (state.password=actions.payload), 
        }
        case actionTypes.ChangeLoader:
            return{
                ...state,
                loader: (state.loader=actions.payload),
            }
        case actionTypes.ChangeAccessToken:
            return{
                ...state,
                accessToken: (state.accessToken=actions.payload),
            }
        case actionTypes.ChangeRefreshToken:
            return{
                ...state,
                refreshToken: (state.refreshToken=actions.payload),
            }
        case actionTypes.ChangeMessage:
            return{
                ...state,
                message: (state.message=actions.payload),
            }
        case actionTypes.ChangeRedirect:
            return{
                ...state,
                redirect: (state.redirect=actions.payload),
            }
        default: return state
    }

}