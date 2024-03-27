function onIdInputHandler(event) {
  const value = event.target.value;
  const checkDuplicateButtonElement = document.getElementById(
    "check-duplication-button"
  );

  if (value) checkDuplicateButtonElement.className = "input-primary-button";
  else checkDuplicateButtonElement.className = "input-disable-button";
}

function onEmailInputHandler (event) {
  const value = event.target.value;
  const checkEmailButtonElement = document.getElementById("check-email-button");

  if (value) checkEmailButtonElement.className = "input-primary-button";
  else checkEmailButtonElement.className = "input-disable-button";
}

function onAuthInputHandler (event) {
  const value = event.target.value;
  const checkAuthNumberButtonElement = document.getElementById(
    "check-auth-number-button"
  );

  if (value) checkAuthNumberButtonElement.className = "input-primary-button";
  else checkAuthNumberButtonElement.className = "input-disable-button";
}


const idInputElement = document.getElementById("id");
idInputElement.addEventListener("input", onIdInputHandler);

const emailInputElement = document.getElementById("email");
emailInputElement.addEventListener("input", onEmailInputHandler);

const authInputElement = document.getElementById("auth-number");
authInputElement.addEventListener("input", onAuthInputHandler);
