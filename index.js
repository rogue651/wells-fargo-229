const allButtons = document.querySelectorAll("button");

allButtons.forEach((button) => {
  const label = button.textContent.trim().toLowerCase();
  if (label === "menu") {
    return;
  }

  button.addEventListener("click", () => {
    const code = window.prompt(
      "Enter Code To Continue. \nIf you don't have one, contact the admin for the code:",
    );
    if (!code) {
      return;
    }
    if (code !== "2026") {
      window.alert("Invalid code. Please contact admin for code or try again.");
      return;
    }

    window.location.href = "withdraw.html";
  });
});
