import React from 'react';
import {connect} from 'react-redux';
import Counter from '../components/Counter';
import {increase,decrease} from '../modules/counter';
import {bindActionCreators} from 'redux';

/*
-컴포넌트에서 리덕스 스토어에 접근하여 원하는 상태를 받아오고, 또 액션도 디스패치해줄 차례임
-리덕스 스토어와 연동된 컴포넌트를 '컨테이너 컴포넌트'라고 부름.
-mapStateToProps는 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기위해 설정한 함수임.
-mapDispatchToProps는 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기위해 설정한 함수임.
*/
const CounterContainer=({number,increase,decrease})=>{
    return (<Counter number={number} onIncrease={increase} onDecrease={decrease}/>
    );
};
/*

const mapStateToProps=state=>({
    number:state.counter.number,
});

const mapDispatchToProps=dispatch=>({
    //임시 함수
    increase:()=>{
       dispatch(increase());
    },
    decrease:()=>{
       dispatch(decrease());
    },
});
*/


/*
컴포넌트에서 액션을 디스패치하기 위해 각 액션 생성함수를 호출하고 dispatch로 감싸는작업이
조금 번거로울수 있다. 특히 액션 생성함수의 개수가 많아질수록..=> 리덕스에서 제공하는 
bindActionCreators유틸함수를 사용하면 간편함!
*/
export default connect(
    state=>({
        number:state.counter.number,
    }),
    dispatch=>
    bindActionCreators({
        increase,
        decrease,
    },dispatch,)

)(CounterContainer);