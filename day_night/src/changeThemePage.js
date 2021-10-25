function changeTheme() {
  document.body.classList.toggle("dark-theme");
  const computedStyle = getComputedStyle(document.body);
  localStorage.setItem("Theme", computedStyle.backgroundColor);
}

function changeThemePage() {
  const btnChangeTheme = document.querySelector(".btn__btn--changeTheme");

  btnChangeTheme.addEventListener("click", () => changeTheme());
}

export default changeThemePage;
