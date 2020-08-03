
import {THEME_CHANGE} from '../../action/theme';

const defauleState = {
  theme: '#69ADC2'
}

export default function onAction(state = defauleState, action) {
  switch(action.type) {
    case THEME_CHANGE:
      return {
        ...state,
        theme: action.theme
      }
    default:
      return state;
  }
}
