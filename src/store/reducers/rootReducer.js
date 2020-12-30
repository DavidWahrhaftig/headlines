import { combineReducers } from 'redux';
import headlines from './headlinesReducer';

const rootReducer = combineReducers({
    headlines
});

export default rootReducer;