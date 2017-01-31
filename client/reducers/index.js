import {combineReducers} from 'redux';
import TableReducer from './reducer_table';
import StationReducer from './reducer_station';

const rootReducer = combineReducers({
  table: TableReducer,
  station: StationReducer
});

export default rootReducer;
