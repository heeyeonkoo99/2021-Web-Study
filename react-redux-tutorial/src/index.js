import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import rootReducer from './modules';
import {composeWithDevTools} from 'redux-devtools-extension';


/*
-스토어를 만들고 리액트 애플리케이션에 리덕스를 적용하는 작업이 여기서 이루어짐.
-리액트 컴포넌트에서 스토어를 사용할수 있도록 App컴포넌트를 react-redux에서 제공하는 
Provider 컴포넌트로 감싸준다. 이 컴포넌트를 사용할 떄는 store를 props로 전달해준다. 
*/

//스토어 만들기
const store=createStore(rootReducer,composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

//serviceWorker.unregister();