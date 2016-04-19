import {combineReducers} from 'redux';
import gridReduce from './gridReduce';
export const rootReducer=combineReducers({
   grid:gridReduce
});