// 전역 액션 타입 정의 모듈 파일에서 필요한 액션 타입 이름 상수를 불러온다.
import {
  CHANGE_INPUT,
  INSERT_USER,
  LOGIN_USER,
  INSERT_USER_INIT,
} from "../../constants/actionTypes";

// Account Reducer에서 관리하는 전역 데이터 구조 정의 및 데이터 초기화
const initialState = {
  isLogin: false, // 로그인 상태 여부
  user: { userId: "", userPassword: "", userName: "", userEmail: "" }, // 신규 사용자 정보 바인딩 관리를 위한 객체
  loginUser: {}, // 로그인이 완료된 후 해당 로그인 한 사용자의 정보
  userList: [
    {
      userId: "test1",
      userPassword: "test1",
      userName: "test1",
      userEmail: "test1@test.com",
    },
    {
      userId: "test2",
      userPassword: "test2",
      userName: "test2",
      userEmail: "test2@test.com",
    },
    {
      userId: "test3",
      userPassword: "test3",
      userName: "test3",
      userEmail: "test3@test.com",
    },
  ], // 등록된 사용자 정보
};

// 리듀서 함수 고유명으로 정의 후 export 처리
// Account 리듀서 함수를 정의한다.
function Account(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      // CHANGE_INPUT 액션의 경우 사용자가 입력 중인 텍스트 값만
      // action 객체에서 추가로 전달하는 input 값으로
      // 리듀서 함수에서 전역으로 관리하는 데이터 구조인
      // initialState에 정의된 데이터의 다른 데이터는 그대로 사용하고
      // input 속성만 action 객체에서 추가 전달된 input 값으로 변경 후
      // 최종 변경된 데이터 구조를 반환한다.

      // 전역 데이터 속성 중 user 속성을 액션 생성 함수에서 전달된 현재 입력중인 input 요소의
      // name과 value 값으로 해당 state.user의 각 속성
      return {
        ...state,
        user: { ...state.user, [action.input.name]: action.input.value },
      };
    case INSERT_USER:
      // state 내 할 일 목록을 관리하는 속성인 todos 속성에
      // action 객체 추가 값으로 전달되는 신규 할 일 아이템을 추가한 후
      // 그 최종 변경된 state 값을 반환한다.
      return {
        ...state,
        userList: state.userList.concat(action.user),
      };
    case LOGIN_USER:
      // state 내 할 일 목록을 관리하는 속성인 todos 속성에
      // action 객체 추가 값으로 전달되는 신규 할 일 아이템을 추가한 후
      // 그 최종 변경된 state 값을 반환한다.

      // action.user 객체는 actions.js userLogin 액션 함수의 user 객채에서 전달된 값이다.
      console.log("로그인정보:", action.user);

      //로그인 처리
      const filterUser = state.userList.filter(
        (user) =>
          user.userId === action.user.userId &&
          user.userPassword === action.user.userPassword
      );

      //axios 로그인 처리
      // 로그인된 사용자 정보로 전역 데이터의 loginUser 값을 갱신하고 로그인 상태 속성 isLogin을 true로 변환한다
      return { ...state, isLogin: true, loginUser: filterUser };
    default:
      return state;
  }
}

// Account 리듀서 함수 출력
export default Account;
