import { request } from '../../../expand/request'
import { handleData, handleErrorData } from '../../../utils/asyncActionHandle'

export const get_register_success = 'get_register_success';
export const get_register_fail = 'get_register_fail'
export const login_success = 'login_success'
export const login_fail = 'login_fail'

function getRegister(url, method, data) {
    return dispatch => {
        request(url, method, data)
            .then(res => {
                const data = res.data
                handleData(dispatch, data, get_register_success)
            })
            .catch(err => {
                handleErrorData(dispatch, err, get_register_fail)
            })
    }
}

function getLogin(url, method, data) {
    return dispatch => {
        request(url, method, data)
            .then(res => {
                const data = res.data
                handleData(dispatch, data, login_success)
            })
            .catch(err => {
                handleErrorData(dispatch, err, login_fail)
            })
    }
}

export default {
    getRegister,
    getLogin
}
