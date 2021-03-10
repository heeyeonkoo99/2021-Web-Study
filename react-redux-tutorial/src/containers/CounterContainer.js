import React from 'react';
import Counter from '../components/Counter';


/*
-컴포넌트에서 리덕스 스토어에 접근하여 원하는 상태를 받아오고, 또 액션도 디스패치해줄 차례임
-리덕스 스토어와 연동된 컴포넌트를 '컨테이너 컴포넌트'라고 부름.
*/
const CounterContainer=()=>{
    return <Counter/>
};

export default CounterContainer;