// 전역 액션 타입 정의 모듈 파일에서 필요한 액션 타입 이름 상수를 불러온다.
import {
  CHANGE_INPUT,
  INSERT_USER,
  LOGIN_USER,
  INSERT_USER_INIT,
} from "../../constants/actionTypes";

// 액션 생성 함수 정의
// 사용자 입력한 신규 할 일 데이터가 변경될 때마다 관련 정보를 반영해주는 액션 생성 함수
// 회원 가입 시 또는 로그인 시 입력 요소의 값 변경을 관리할 때 사용
// 입력 요소의 onChange 이벤트 발생 시 해당 액션 생성 함수 이용 처리
// 컴포넌트로부터 HTML INPUT TAG  요소를 전달 받아서 전달 받은
// INPUT 요소를 관련 리듀서에 전달하여 입력 요소 값으로 데이터를 일괄 변경한다.
export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input, // input: input ES6 문법 적용하여 간략 표현 가능
});

// 사용자 정보 등록 액션 생성 함수
// 사용자가 회원가입 저장 버튼을 클릭 시 호출되며
// 상기 changeInput에 의해 전역 상태 데이터로 user에 저장된 데이터를
// 관련 리듀서에서 회원 가입 목록에 추가만 처리해주면 된다.
export const insertUser = () => ({
  type: INSERT_USER,
});

// 로그인 액션 생성 함수
// 로그인 버튼 클릭 시 호출되며 화면 상에 입력한 사용자 아이디와 암호값을
// 본 액션 생성 함수로 전달 받고 해당 아이디/암호를 관련 리듀서의 액션 파라미터로
// 사용자가 입력한 아이디/암호를 전달한다.₩
export const userLogin = ({ userId, userPassword }) => ({
  type: LOGIN_USER,
  user: {
    userId: userId,
    userPassword: userPassword,
  },
});
