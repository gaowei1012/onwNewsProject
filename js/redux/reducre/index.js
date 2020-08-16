import { combineReducers } from 'redux';
import { rootCom, RootNavigation } from '../../navigation/AppNavigation';
import theme from './theme/index';
import news from '../../pages/IndexPage/redux/reducre'
import { registerAction, loginAction } from '../../pages/AboutPage/redux/reducre'

const navState = RootNavigation.router.getStateForAction(
    RootNavigation.router.getActionForPathAndParams(rootCom),
);

const navReducer = (state = navState, action) => {
    const nextState = RootNavigation.router.getStateForAction(action, state);
    return nextState || state;
};

const root = combineReducers({
    nav: navReducer,
    theme: theme,
    news: news.onNewsListAction,
    login: loginAction,
    register: registerAction
});

export default root;