import {combineReducers} from 'redux';
import tableReduce from './tableReduce';
export const rootReducer=combineReducers({
   table:tableReduce
});