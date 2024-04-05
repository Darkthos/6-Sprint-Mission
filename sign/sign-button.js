// 버튼 input 에 빈 값이 있거나 에러 메세지가 있으면  ‘로그인’ 버튼은 비활성화.Input 에 유효한 값을 입력하면  ‘로그인' 버튼이 활성화
const signButtonstatus = (e) => {
  if (
    emailInput.className !== "error-input" &&
    emailInput.value.includes("@") &&
    emailInput.value.includes(".") &&
    passwordInput.className !== "error-input" &&
    passwordInput.value.length > 7 &&
    (nickNameInput === null || nickNameInput.value.length > 0) && // signin에서는 닉네임이 없으니 조건평가x
    (repasswordInput === null || repasswordInput.value === passwordInput.value)
  ) {
    signButton.classList.add("active");
    signButton.classList.remove("passive");
    signButton.href.remove();
  } else {
    signButton.classList.add("passive");
    signButton.classList.remove("active");
    signButton.removeAttribute("href");
  }
};

// 활성화된 로그인 버튼을 누르면 signin에서 item이동 함수
const moveSigninToItem = (e) => {
  if (signButton.classList.contains("active") && nickNameInput === null) {
    e.target.setAttribute("href", "../items.html");
  }
};

//활성화된 로그인 버튼을 누르면 signup에서 signin이동 함수
const moveSignupToSignin = (e) => {
  if (signButton.classList.contains("active") && nickNameInput !== null) {
    e.target.setAttribute("href", "./signin.html");
  }
};

signButton.addEventListener("click", moveSignupToSignin);
signButton.addEventListener("click", moveSigninToItem);
emailInput.addEventListener("keyup", signButtonstatus);
passwordInput.addEventListener("keyup", signButtonstatus);
nickNameInput.addEventListener("keyup", signButtonstatus);
repasswordInput.addEventListener("keyup", signButtonstatus);
