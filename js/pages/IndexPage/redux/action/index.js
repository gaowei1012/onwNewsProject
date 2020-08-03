
import {handleData, handleErrorData} from '../../../../utils/asyncActionHandle'
import axios from 'axios'

export const get_news_list_success = 'get_news_list_success';
export const get_news_list_fail = 'get_news_list_fail';

function getNewsData(method, url) {
    return dispatch => {
        // request(method, url)
        //     .then(result => {
        //         const data = result.data;
        //         handleData(dispatch, data, get_news_list_success)
        //     })
        //     .catch(err => {
        //         handleErrorData(dispatch, err, get_news_list_fail)
        //     })
        axios({
            url: url,
            method: method
        }).then(result => {
            const data = result.data.result;
            handleData(dispatch, data, get_news_list_success)
        }).catch(err => {
            handleErrorData(dispatch, err, get_news_list_fail)
        })
    }
}

export default {
    getNewsData
}
