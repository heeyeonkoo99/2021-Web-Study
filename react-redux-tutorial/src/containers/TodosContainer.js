import React, { useCallback } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import {changeInput, insert,toggle, remove} from '../modules/todos';
import Todos from '../components/Todos';


/*
-리덕스 스토어와 연동된 컨테이너 컴포넌트를 만들때 connect함수를 사용하는 대신
react-redux에서 제공하는 Hooks를 사용할수 있다.=>CounterContainer와는 달리 Hooks를 사용해서 해보자!
-TodosContainer를 connect함수 대신에 useSelector와 useDispatch Hooks를 사용하는 형태로 전환!
*/

const TodosContainer=()=>{
    const {input,todos}=useSelector(({todos})=>({
        input:todos.input,
        todos:todos.todos
    }));
    const dispatch=useDispatch();
    const onChangeInput=useCallback(input=>dispatch(changeInput(input)),[
        dispatch
    ]);
    const onInsert=useCallback(text=>dispatch(insert(text)),[dispatch]);
    const onToggle=useCallback(id=>dispatch(toggle(id)),[dispatch]);
    const onRemove=useCallback(id=>dispatch(remove(id)),[dispatch]);

    return(
        <Todos
        input={input}
        todos={todos}
        onChangeInput={onChangeInput}
        onInsert={onInsert}
        onToggle={onToggle}
        onRemove={onRemove}
        />
    );
};

export default TodosContainer;