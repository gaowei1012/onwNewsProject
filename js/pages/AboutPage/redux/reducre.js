import {
    get_register_success,
    get_register_fail,
    login_fail,
    login_success
} from './action'
import {initState} from '../../../utils/asyncActionHandle'

function registerAction(state = initState, action) {
    switch(action.type) {
        case get_register_success:
            return {
                ...state,
                item: action.item
            }
        case get_register_fail:
            return {
                ...state
            }
        default:
            return state
    }
}

function loginAction(state = initState, action) {
    switch(action.type) {
        case login_success:
            return {
                ...state,
                item: action.item
            }
        case login_fail:
            return {
                ...state
            }
        default:
            return state
    }
}

export {
    registerAction,
    loginAction,
}
