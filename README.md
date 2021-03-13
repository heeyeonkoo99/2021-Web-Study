# Web_study
💻 To study javascript including react.js
# -----------------------------------------
[헷갈리는 개념 정리 in React.js]    

-기존의 최상위 컴포넌트에서 여러 컴포넌트를 거쳐 props로 원하는 상태와 함수를 전달하는 방식말고 Context API를 사용하면 Context를 만들어 단 한번에 원하는 값을 받아와서
사용할수 있다.  

    => 새 Context를 만들때는 createContext함수를 사용하고 주로 Provider와 Consumer함수를 사용함.  
    => 리덕스라는 상태관리 라이브러리는 Context API를 기반으로 만들어졋으면 마찬가지로 전역 상태관리를 도와줌.  
  
-"액션객체(type필드를 반드시 가져야함)+액션 생성함수+초깃값 설정+리듀서(변화를 일으키는 함수/ 액션을 만들어서 발생시키면 리듀서가 현재 상태와 전달받은 액션 객체를 파라미터로 받아오며
두 값을 참고하여 새로운 상태를 만들어서 반환해줌)"는 일단 필요하고 한개의 프로젝트는 한개의 store(store.dispatch/store.subscribe)를 가지는데 이를 react-redux라는
라이브러리를 사용하여 스토어의 상태가 업데이트 될떄마다 컴포넌트를 리렌더링해줄수 있음.  

-앞서 바닐라 js환경에서 리덕스를 사용할때 스토어의 내장함수인 store.dispatch와 store.subscribe함수를 사용했었다. 리액트 애플리케이션에서 리덕스를 사용할때는 store인스턴스를 직접 사용하기보다는
react-redux 라이브러리에서 제공하는 유틸함수(connect)와 컴포넌트(Provider)를 사용하여 리덕스 관련 작업을 처리한다.   

    => 순서상) 액션타입정의하고 액션생성함수 만들기->초기상태 및 리듀서 함수 만들기->루트 리듀서 만들기-> (리덕스적용 준비시작) index.js에다가 스토어 생성-> Provider 컴포넌트를 사용하여 프로젝트에 리덕스 적용하기->container 컴포넌트 만들기(리덕스 스토어와 연동된 컴포넌트를 container 컴포넌트라고 함/여기서 컴포넌트를 redux와 연동시키려면 react-rdeux에서 제공하는 connect함수를 사용해야한다 such as 'connet(mapStateToProps,mapDispatchToProps)(연동할 컴포넌트)'/mapStateToProps는 리덕스 스토어안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수이고 mapDispatchToProps는 액션 생성함수를 컴포넌트의 props로 넘겨주기위해 사용함)->END!!!!!
  
  * 여기서 더 편하게 사용하려면 redux-actions(createAction,handleActions)와 immer를 사용할수 있다.   
  * 리덕스 스토어와 연동된 컨테이너 컴포넌트를 만들때 connect함수를 사용하는 대신 react-redux에서 제공하는 Hooks를 사용할수도 있다. 예를 들어서 useSelector,useDispatch..  
  * Hooks를 사용할때의 차이점을 비교해보자면, connect함수를 사용하여 컨테이너 컴포넌트를 만들었을 경우, 해당 컨테이너 컴포넌트의 부모 컴포넌트가 리렌더링될때 해당 컨테이너 컴포넌트의
  props가 바뀌지 않았다면 리렌더링이 자동으로 방지되어 성능이 최적화된다. 반면 useSelector를 사용하여 리덕스 상태를 조회했을때는 이 최적화 작업이 자동으로 이뤄지지 않으므로
  성능 최적화를 위해서는 React.memo를 컨테이너 컴포넌트에 사용해줘야한다.
  
-리액트 프로젝트에서 리덕스를 사용하고 있으며 비동기 작업을 관리해야 한다면 middleware를 사용하면 매우 효율적임.    
  * redux middleware는 액션을 디스패치했을때 리듀서에서 이를 처리하기에 앞서 사전에 지정된 작업들을 실행하며 middleware는 액션과 리듀서 사이의 중간자라고 볼수있음.    
  (액션=>미들웨어=>리듀서=>스토어)  
  * middleware는 결국 함수를 반환하는 함수를 반환하는 함수를 말함.순서상으로 "액션->(store.dispatch를 실행하면 첫번째 미들웨어부터 다시 처리함)->미들웨어1->next->미들웨어2->next->리듀서->스토어"  
  * redux-logger,redux-thunk,redux-saga등의 middleware를 사용할수 있다.  


-백엔드 프로젝트를 진행중..
   *koa 미들웨어 사용함. koa의 미들웨어 함수는 두개의 파라미터를 받음(ctx와 next).ctx는 Context의 줄임말로 웹 요청과 응답에 관한 정보를 지니며, next는 현재 처리중인 미들웨어를 호출하는 함수이다. 그렇기에 미들웨어를 등록하고 next함수를 호출하지 않으면, 그다음 미들웨어는 처리하지 않는다. next함수는 Promise를 반환하며 koa는 async/await를 정식으로 지원한다.
