import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { createStore } from 'redux';
import { Provider } from 'react-redux';
// if we use only 1 file of reducer
//********************************************************************************** */
// import reducer from './store/reducer';

//const store = createStore(reducer);

//*************************************************************************************/
// but if we use more than 1 file of reducer..
import counterReducer from './store/reducer/counter';
import resultReducer from './store/reducer/result';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}> <App /></Provider>, document.getElementById('root'));
