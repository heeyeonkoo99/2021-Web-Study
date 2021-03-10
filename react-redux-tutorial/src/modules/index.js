import {combineReducers}from 'redux';
import counter from './counter';
import todos from './todos';


/* 
이번 프로젝트에선 리듀서를 여러개 만들었다=>사실 스토어를 만들때는 리듀서를 하나만 사용해야한다. 그렇기에 기존에 만들었던
리듀서를 하나로 합쳐주어야 한다. 이 작업은 리덕스에서 제공하는 combineReducer라는 유틸함수를 사용하면 쉽게 처리가능함.

-액션타입과 액션 생성 함수 정의=>초깃값 설정=> 리듀서 함수 정의=>스토어 만들기=> 스토어의 내장함수(subscribe/dispatch)를 이용하거나
 react-redux라이브러리(유틸함수 connect와 provider)를 사용하여 리덕스 관련 작업 처리!
*/

//루트 리듀서 만들기
const rootReducer=combineReducers({
    counter,
    todos,
});

export default rootReducer;