let isPasswordVisible = true;
let isConfirmPasswordVisible = true; // 불리언 변수 선언이름은 is를 붙여야함

// 눈 모양 변경 및 비밀번호 인풋 타입 바꾸는 함수
const invisibleToggle = (e) => {
  const imageSrc = isPasswordVisible ? "visible" : "invisible"; // attribute들 쓰는것보다 짧아서 .src나 .type씀. attribute는 속성 새로 만드는데 의의가 있음
  e.target.src = ("src", `./image/icon/${imageSrc}.svg`);
  passwordInput.type = isPasswordVisible ? "text" : "password";
  isPasswordVisible = !isPasswordVisible;
};

// 눈 모양 변경 및 비밀번호재확인 인풋 타입 바꾸는 함수
const reinvisibleToggle = (e) => {
  const imageSrc = isPasswordVisible ? "visible" : "invisible"; // 복붙.
  e.target.src = ("src", `./image/icon/${imageSrc}.svg`);
  repasswordInput.type = isConfirmPasswordVisible ? "text" : "password";
  isConfirmPasswordVisible = !isConfirmPasswordVisible;
};

invisible.addEventListener("click", invisibleToggle);
reinvisible.addEventListener("click", reinvisibleToggle);
