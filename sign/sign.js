const emailInput = document.querySelector(`input[name="email"]`);
const passwordInput = document.querySelector(`input[name="password"]`);
const nickNameInput = document.querySelector(`input[name="nick-name"]`);
const repasswordInput = document.querySelector(`input[name="repassword"]`);
const signButton = document.querySelector(`a[class="sign-form__button"]`);
const invisible = document.querySelector(`img[id="toggle-password"]`);
const reinvisible = document.querySelector(`img[id="toggle-repassword"]`);

// 이메일 빈칸이거나 형식에 맞지않을시, 경고 텍스트 출력함수
const emailWarning = (e) => {
  const emailMessage = document.createElement("p");
  emailMessage.classList.add("error-text");

  if (emailInput.value === "" && e.target.parentElement.lastChild.tagName !== "P") {
    emailMessage.textContent = "이메일을 입력해주세요.";
    e.target.parentElement.appendChild(emailMessage);
    emailInput.classList.add("error-input");
  } else if (
    (!emailInput.value.includes("@") || !emailInput.value.includes(".")) &&
    e.target.parentElement.lastChild.tagName !== "P"
  ) {
    emailMessage.textContent = "잘못된 이메일 형식입니다.";
    e.target.parentElement.appendChild(emailMessage);
    emailInput.classList.add("error-input");
  }
};

// 이메일 빈칸 채우거나 형식 맞추면, 경고 텍스트 제거함수
const emailWarningDelete = (e) => {
  if (emailInput.value !== "" && e.target.parentElement.lastChild.textContent === "이메일을 입력해주세요.") {
    emailInput.parentElement.lastChild.remove();
    emailInput.classList.remove("error-input");
  } else if (emailInput.value === "" && e.target.parentElement.lastChild.textContent === "잘못된 이메일 형식입니다.") {
    emailInput.parentElement.lastChild.remove();
    emailInput.classList.remove("error-input");
  } else if (
    emailInput.value.includes("@") &&
    emailInput.value.includes(".") &&
    e.target.parentElement.lastChild.tagName === "P"
  ) {
    emailInput.parentElement.lastChild.remove();
    emailInput.classList.remove("error-input");
  }
};

// 비밀번호 8자미만일시, 경고 텍스트 출력함수
const passwordWarning = (e) => {
  const passwordMessage = document.createElement("p");
  passwordMessage.classList.add("error-text");

  if (
    passwordInput.value.length < 8 &&
    e.target.parentElement.lastChild.tagName !== "P" &&
    passwordInput.value !== ""
  ) {
    passwordMessage.textContent = "비밀번호를 8자 이상 입력해주세요.";
    e.target.parentElement.appendChild(passwordMessage);
    passwordInput.classList.add("error-input");
  } else if (passwordInput.value === "" && e.target.parentElement.lastChild.tagName !== "P") {
    passwordMessage.textContent = "비밀번호를 입력해주세요.";
    e.target.parentElement.appendChild(passwordMessage);
    passwordInput.classList.add("error-input");
  }
};

// 비밀번호 8자이상일시, 경고 텍스트 삭제함수
const passwordWarningDelete = (e) => {
  if (
    (passwordInput.value.length >= 8 || passwordInput.value === "") &&
    e.target.parentElement.lastChild.textContent === "비밀번호를 8자 이상 입력해주세요."
  ) {
    passwordInput.parentElement.lastChild.remove();
    passwordInput.classList.remove("error-input");
  } else if (
    passwordInput.value !== "" &&
    e.target.parentElement.lastChild.textContent === "비밀번호를 입력해주세요."
  ) {
    passwordInput.parentElement.lastChild.remove();
    passwordInput.classList.remove("error-input");
  }
};

// 닉네임 빈칸일시, 경고 텍스트 출력함수
const nickNameWarning = (e) => {
  const nickNameMessage = document.createElement("p");
  nickNameMessage.classList.add("error-text");

  if (nickNameInput.value === "" && e.target.parentElement.lastChild.textContent !== "닉네임을 입력해주세요.") {
    nickNameMessage.textContent = "닉네임을 입력해주세요.";
    e.target.parentElement.appendChild(nickNameMessage);
    nickNameInput.classList.add("error-input");
  }
};

// 닉네임 빈칸 채우면, 경고 텍스트 제거함수
const nickNameWarningDelete = (e) => {
  if (nickNameInput.value !== "" && e.target.parentElement.lastChild.textContent === "닉네임을 입력해주세요.") {
    nickNameInput.parentElement.lastChild.remove();
    nickNameInput.classList.remove("error-input");
  }
};

// 확인비밀번호 !== 비밀번호 일시 경고 텍스트 출력함수
const repasswordWarning = (e) => {
  const repasswordMessage = document.createElement("p");
  repasswordMessage.classList.add("error-text");

  if (
    repasswordInput.value !== passwordInput.value &&
    e.target.parentElement.lastChild.textContent !== "비밀번호가 일치하지 않습니다."
  ) {
    repasswordMessage.textContent = "비밀번호가 일치하지 않습니다.";
    e.target.parentElement.appendChild(repasswordMessage);
    repasswordInput.classList.add("error-input");
  }
};

// 확인비밀번호 === 비밀번호 일시 경고 텍스트 제거함수
const repasswordWarningDelete = (e) => {
  if (
    repasswordInput.value === passwordInput.value &&
    e.target.parentElement.lastChild.textContent === "비밀번호가 일치하지 않습니다."
  ) {
    repasswordInput.parentElement.lastChild.remove();
    repasswordInput.classList.remove("error-input");
  }
};

emailInput.addEventListener("focusout", emailWarning);
emailInput.addEventListener("keyup", emailWarningDelete); // keypress는 백스페이스를 감지하지않아 keydown으로 변경
passwordInput.addEventListener("focusout", passwordWarning); //  keydown은 누른즉시 감지해서 .@로 바로 경고창 못없애서 keyup으로 변경
passwordInput.addEventListener("keyup", passwordWarningDelete);
nickNameInput.addEventListener("focusout", nickNameWarning);
nickNameInput.addEventListener("keyup", nickNameWarningDelete);
repasswordInput.addEventListener("focusout", repasswordWarning);
repasswordInput.addEventListener("keyup", repasswordWarningDelete);
