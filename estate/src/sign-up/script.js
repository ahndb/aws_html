const ID = "userIdentity";
const PASSWORD = "P!ssw0rd";
const EMAIL = "email@email.com";
const AUTH_NUMBER = "1010";

let id = "",
  password = "",
  passwordCheck = "",
  email = "",
  authNumber = "";
let isDuplicate = false,
  isEmail = false,
  isDuplicateEmail = false,
  isCheckAuthNumber = false;

const idInputElement = document.getElementById("id");
const emailInputElement = document.getElementById("email");
const authInputElement = document.getElementById("auth-number");

const checkDuplicateButtonElement = document.getElementById(
  "check-duplication-button"
);
const checkEmailButtonElement = document.getElementById("check-email-button");
const checkAuthNumberButtonElement = document.getElementById(
  "check-auth-number-button"
);

const idMessageElement = document.getElementById("id-message");
const passwordMessageElement = document.getElementById("password-message");
const passwordCheckMessageElement = document.getElementById(
  "password-check-message"
);
const emailMessageElement = document.getElementById("email-message");
const authNumberMessageElement = document.getElementById("auth-number-message");

const signUpButtonElement = document.getElementById("sign-up-button");
const signInLinkElement = document.getElementById("sign-in-link");

function onIdInputHandler(event) {
  id = event.target.value;

  if (value) checkDuplicateButtonElement.className = "input-primary-button";
  else checkDuplicateButtonElement.className = "input-disable-button";
}

function onEmailInputHandler(event) {
  email = event.target.value;

  if (value) checkEmailButtonElement.className = "input-primary-button";
  else checkEmailButtonElement.className = "input-disable-button";
}

function onAuthInputHandler(event) {
  authNumber = event.target.value;

  if (value) checkAuthNumberButtonElement.className = "input-primary-button";
  else checkAuthNumberButtonElement.className = "input-disable-button";
}

idInputElement.addEventListener("input", function(event)) {
  onIdInputHandler(event)
  setSignUpButton();
}

emailInputElement.addEventListener("input", function(event)) {
  onEmailInputHandler(event);
  setSignUpButton();
} 

authInputElement.addEventListener("input", function(event)) {
  onAuthInputHandler(event);
  setSignUpButton();
}


function onCheckDuplicateClickHandler(event) {
  if (!id) return; // 값이 없을 때 눌러지지 않게 함

  isDuplicate = id === ID;
  if (isDuplicate) {
    idMessageElement.className = "input-message error";
    idMessageElement.textContent = "이미 사용중인 아이디 입니다.";
    return;
  }
  idMessageElement.className = "input-message primary";
  idMessageElement.textContent = "사용 가능한 아이디 입니다.";
}

function onCheckEmailClickHandler(event) {
  if (!email) return;
  const emailReg = /^[a-zA-Z0-9._-]*@([-.]?[a-zA-Z0-9])*\.[a-zA-Z]{2,4}$/;
  const isEmail = emailReg.test(email);

  if (!isEmail) {
    emailMessageElement.className = "input-message error";
    emailMessageElement.textContent = "이메일 형식이 아닙니다.";
    return;
  }

  isDuplicateEmail = email === EMAIL;
  if (isDuplicateEmail) {
    emailMessageElement.className = "input-message error";
    emailMessageElement.textContent = "이미 사용중인 이메일 입니다.";
    return; // 다시 실행을 하지 않기 위해 return 입력, else 입력시 return 불필요
  }
  emailMessageElement.className = "input-message primary";
  emailMessageElement.textContent = "인증번호가 전송되었습니다.";
}
checkEmailButtonElement.addEventListener("click", function (event)){
  onCheckEmailClickHandler(event);
  setSignUpButton();
}

function onCheckAuthNumberClickHandler(event) {
  if (!authNumber) return;
  const isCheckAuthNumber = authNumber === AUTH_NUMBER;

  if (isCheckAuthNumber) {
    authNumberMessageElement.className = "input-message primary";
    authNumberMessageElement.textContent = "인증번호가 확인되었습니다";
    return;
  }
  authNumberMessageElement.className = "input-message error";
  authNumberMessageElement.textContent = "인증번호가 일치하지 않습니다.";
}

checkAuthNumberButtonElement.addEventListener(
  "click", function(event)) {
    onCheckAuthNumberClickHandler(event)
    setSignUpButton();
  }

function onSignInLinkClickHandler(event) {
  window.location.href = "../sign-in";
}

signInLinkElement.addEventListener("click", function(event)) {
  onSignInLinkClickHandler(event);
  setSignUpButton();
} 

function setSignUpButton() {
  const isPrimaryButton =
    id &&
    password &&
    passwordCheck &&
    email &&
    authNumber &&
    !isDuplicate &&
    isEmail &&
    !isDuplicateEmail &&
    isCheckAuthNumber;

  if (isPrimaryButton)
    signUpButtonElement.className = "primary-button full-width";
  else signUpButtonElement.className = "disable-button full-width";
}

function onSignUpButtonHandler(event, handler) {
  handler (event);
  setSignUpButton();
}