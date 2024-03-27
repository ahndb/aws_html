const ID = "userIdentity";
const PASSWORD = "P!ssw0rd";
const EMAIL = "email@email.com";
const AUTH_NUMBER = "1010";

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

function onIdInputHandler(event) {
  const value = event.target.value;

  if (value) checkDuplicateButtonElement.className = "input-primary-button";
  else checkDuplicateButtonElement.className = "input-disable-button";
}

function onEmailInputHandler(event) {
  const value = event.target.value;

  if (value) checkEmailButtonElement.className = "input-primary-button";
  else checkEmailButtonElement.className = "input-disable-button";
}

function onAuthInputHandler(event) {
  const value = event.target.value;

  if (value) checkAuthNumberButtonElement.className = "input-primary-button";
  else checkAuthNumberButtonElement.className = "input-disable-button";
}

idInputElement.addEventListener("input", onIdInputHandler);
emailInputElement.addEventListener("input", onEmailInputHandler);
authInputElement.addEventListener("input", onAuthInputHandler);

function onCheckDuplicateClickHandler(event) {
  const idValue = idInputElement.value;
  if (!idValue) return; // 값이 없을 때 눌러지지 않게 함
  const isDuplicate = idValue === ID;

  if (isDuplicate) {
    idMessageElement.className = "input-message error";
    idMessageElement.textContent = "이미 사용중인 아이디 입니다.";
  } else {
    idMessageElement.className = "input-message primary";
    idMessageElement.textContent = "사용 가능한 아이디 입니다.";
  }
}

checkDuplicateButtonElement.addEventListener(
  "click",
  onCheckDuplicateClickHandler
);

function onCheckEmailClickHandler(event) {
  const emailValue = emailInputElement.value;
  const emailReg = /^[a-zA-Z0-9._-]*@[a-zA-Z0-9]*\.[a-zA-Z]{2,4}$/;
  const isEmail = emailReg.test(emailValue);

  if (!isEmail) {
    emailMessageElement.className = "input-message error";
    emailMessageElement.textContent = "이메일 형식이 아닙니다.";
    return;
  }

  const isDuplicateEmail = emailValue === EMAIL;
  if (isDuplicateEmail) {
    emailMessageElement.className = "input-message error";
    emailMessageElement.textContent = "이미 사용중인 이메일 입니다.";
    return;
  }
  emailMessageElement.className = "input-message primary";
  emailMessageElement.textContent = "인증번호가 전송되었습니다.";
}
checkEmailButtonElement.addEventListener("click", onCheckEmailClickHandler);