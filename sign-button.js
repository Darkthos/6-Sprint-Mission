// 버튼 input 에 빈 값이 있거나 에러 메세지가 있으면  ‘로그인’ 버튼은 비활성화.Input 에 유효한 값을 입력하면  ‘로그인' 버튼이 활성화
const signButtonstatus = (e) => {
  if (
    emailInput.className !== "error-input" &&
    emailInput.value.includes("@") &&
    emailInput.value.includes(".") &&
    passwordInput.className !== "error-input" &&
    passwordInput.value.length > 7 &&
    (nickNameInput === null || nickNameInput.value.length > 0) &&
    (repasswordInput === null || repasswordInput.value === passwordInput.value)
  ) {
    signButton.classList.add("active");
    signButton.classList.remove("passive");
  } else {
    signButton.classList.add("passive");
    signButton.classList.remove("active");
  }
};

emailInput.addEventListener("keyup", signButtonstatus);
passwordInput.addEventListener("keyup", signButtonstatus);
nickNameInput.addEventListener("keyup", signButtonstatus);
repasswordInput.addEventListener("keyup", signButtonstatus);
