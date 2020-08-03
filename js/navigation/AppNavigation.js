import {
    createStackNavigator,
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';
import { connect } from 'react-redux';
import {
    createReactNavigationReduxMiddleware,
    reduxifyNavigator,
} from 'react-navigation-redux-helpers';

import WelcomPage from '../pages/WelcomPage/WelcomPage';
import IndexPage from '../pages/IndexPage/IndexPage';
import AboutPage from '../pages/AboutPage/AboutPage';
import HomePage from '../pages/HomePage/HomePage';

export const rootCom = 'Init';

const InitNavigator = createStackNavigator({
    WelcomPage: {
        screen: WelcomPage,
        navigationOptions: {
            header: null,
        },
    },
});

const MainNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            header: null
        }
    },
    IndexPage: {
        screen: IndexPage,
        navigationOptions: {
            header: null,
        },
    },
    AboutPage: {
        screen: AboutPage,
        navigationOptions: {
            header: null
        }
    }
});

export const RootNavigation = createAppContainer(
    createSwitchNavigator(
        {
            Init: InitNavigator,
            Main: MainNavigator,
        },
        {
            navigationOptions: {
                header: null,
            },
        },
    ),
);

export const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav,
);


const AppWithNavigationState = reduxifyNavigator(RootNavigation, 'root');

const mapStateToProps = state => ({
    state: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);