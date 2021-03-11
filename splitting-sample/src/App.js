import React,{useState,Suspense,Component} from 'react';
import logo from './logo.svg';
import './App.css';
import loadable from '@loadable/component';

const SplitMe=loadable(()=>import('./SplitMe'),{
  fallback:<div>loading...</div>
});

const onMouseOver=()=>{
  SplitMe.preload();
};

/*
<code splitting>
-자바스크립트 함수 비동기 로딩
-React.lazy와 Suspense를 통한 컴포넌트 비동기 렌더링(code splitting을 위해 state를 따로 선언안해도됨.)
-Loadable Components를 통한 컴포넌트 비동기 렌더링(다른거랑 달리 서버 사이드 렌더링을 지원할수 있음.
  => 서버 사이드 렌더링을 사용하면 웹 서비스의 초기 렌더링을 사용자의 브라우저가 아닌 서버쪽에서 처리한다.)
*/

function App() {
  const[visible,setVisible]=useState(false);
  const onClick=()=>{
    setVisible(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <p onClick={onClick} onMouseOver={onMouseOver}>Hello React!</p>
         
           {visible &&<SplitMe/>}
       
      </header>
    </div>
  );
}


export default App;
