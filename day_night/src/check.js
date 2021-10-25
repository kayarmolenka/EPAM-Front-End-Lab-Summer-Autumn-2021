const data = localStorage.getItem("Name");

function check() {
  if (data) {
    const btnSigIn = document.querySelector(".btn__btn--sign-in");
    const content = document.querySelector(".content");

    btnSigIn.textContent = "Sign out";
    content.append(`Welcome ${data}`);
  }
}

export default check;
