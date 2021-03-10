/*
- Ducks 패턴을 사용하여 액션타입, 액션 생성 함수, 리듀서를 작성한 코드를 '모듈'이라고 한다.
- 액션타입은 대문자로 정의하고 문자열 내용은 '모듈이름/액션이름'과 같은 형태로 작성함.
*/

//우선 액션 타입 정의
const INCREASE="counter/INCREASE";
const DECREASE="counter/DECREASE";



//액션 생성함수
export const increase=()=>({type:INCREASE});
export const decrease=()=>({type:DECREASE});

const initialState={
    number:0
};


/*리듀서 함수(변화를 일으키는 함수/액션을 만들어서 발생시키면 리듀서가 현재 상태와 전달받은 액션 객체를 파라미터로
받아온다. 그리고 두 값을 참고하여 새로운 상태를 만들어서 반환해줌)생성*/
function counter(state=initialState, action){
    switch(action.type){
        case INCREASE:
            return{
                number:state.number+1
            };
        case DECREASE:
            return{
                number:state.number-1
            };
        default:
            return state;
    }
}

export default counter;