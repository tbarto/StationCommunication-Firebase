import {combineReducers} from 'redux';
import ButtonsReducer from './reducer_buttons';
import StationReducer from './reducer_station';

const rootReducer = combineReducers({
  table: ButtonsReducer,
  station: StationReducer
});

export default rootReducer;
