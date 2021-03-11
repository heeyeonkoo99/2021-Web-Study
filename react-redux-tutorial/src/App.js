import React from 'react';
import Counter from './components/Counter';
import Todos from './components/Todos';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';


/*
- 리액트 애플리케이션에서 리덕스를 사용하면, 상태 업데이트에 관한 로직을 모듈로 따로 분리하여
컴포넌트 파일과 별개로 관리할수 있으므로 코드를 유지보수하는데 도움이 된다. 또한 여러 컴포넌트에서
동일한 상태를 공유할때 매우 유용하며, 실제 업데이트가 필요한 컴포넌트만 리렌더링되도록 쉽게 최적화해줌.

- 리액트 애플리케이션에서 리덕스를 사용할때는 store인스턴스(ex. store.dispatch/store.subscribe)를 직접 사용하기보다
 주로 react-redux라는 라이브러리에서 제공하는 유틸함수(connect)와 컴포넌트(provider)를 사용하여 리덕스 관련 작업을 처리함.
*/

const App=()=>{
  return(
    <div>
      <CounterContainer/>
      <hr/>
      <TodosContainer/>
    </div>
  );
}

export default App;