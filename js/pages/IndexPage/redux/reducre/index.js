import {initState} from '../../../../utils/asyncActionHandle'
import {get_news_list_success, get_news_list_fail} from '../action'

function onNewsListAction(state = initState, action) {
    switch(action.type) {
        case get_news_list_success:
            return {
                ...state,
                item: action.item
            }
        case get_news_list_fail:
            return {
                ...state
            } 
        default:
            return state
    }
}


export default {
    onNewsListAction
}
