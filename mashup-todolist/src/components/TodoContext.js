

/*
-Context API를 이용하면 훨씬 관리가 용이함=> useReducer를 사용하여
상태를 관리하는 TodoProvider라는 컴포넌트를 만듦 
- useReducer과 useState중 뭐를 사용할까 궁금하실텐데요. 정답은 없지만 컴포넌트에서
 관리하는 값이 딱하나이거나 단순하면 useState로 관리하는게 편하고 만약 여러개가 되서 복잡해진다면 useReducer를 사용한다고 함.
-component에서 useContext를 직접 사용하는 대신에, useContext를 사용하는 커스텀 Hook를
만들어낼것임.
 */


//state와 dispatch를 Context를 통해 다른 컴포넌트에서 바로 사용하게 해줌.
//useContext는 비효율을 줄이기위해& 자손값을 쉽게 얻기위해서&보통 redux와 비교되는듯하다
//nextId(새로운 항목을 추가할때 사용할 고유 ID)는 useRef를 사용해 관리할것임.

import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false
  }
];

function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}


