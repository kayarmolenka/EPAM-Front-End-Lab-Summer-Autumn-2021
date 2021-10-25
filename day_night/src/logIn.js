const modal = document.getElementById("modal-login");

function createModal() {
  modal.style.display = "block";

  function closeModal() {
    const span = document.getElementsByClassName("close")[0];
    document.addEventListener("click", (e) => {
      if (e.target === span || e.target === modal) {
        modal.style.display = "none";
      }
    });
  }
  closeModal();

  const btnRegistration = document.querySelector("#btn_registration");
  const input = document.querySelector("#field-login");
  const computedStyle = getComputedStyle(document.body);

  btnRegistration.addEventListener("click", () => {
    localStorage.setItem("Name", input.value);
    localStorage.setItem("Theme", computedStyle.backgroundColor);
  });
}

function logIn() {
  const btn = document.querySelector(".btn__btn--sign-in");

  btn.addEventListener("click", () => {
    if (btn.textContent === "Sign in") {
      createModal();
    }
    if (btn.textContent === "Sign out") {
      localStorage.removeItem("Name");
      window.location.reload();
    }
  });
}

export default logIn;
