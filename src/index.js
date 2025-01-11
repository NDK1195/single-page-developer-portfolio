const form = document.getElementById("form");
const inputContainer = document.querySelectorAll(".input-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  inputContainer.forEach((input) => {
    const inputElement = input.children[0];
    const errorIcon = input.children[1];
    let errorMessage = input.children[2];

    if (inputElement.value.trim() === "") {
      inputElement.classList.remove("border-white");
      inputElement.classList.add("border-[#FF6F5B]");
      errorIcon.classList.remove("hidden");
      errorMessage.textContent = "This field is required";
    }

    if (inputElement.id === "input-email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(inputElement.value)) {
        inputElement.classList.remove("border-white");
        inputElement.classList.add("border-[#FF6F5B]");
        errorIcon.classList.remove("hidden");
        errorMessage.textContent = "Sorry, invalid format here";
      }
    }
  });
});

inputContainer.forEach((input) => {
  const inputElement = input.children[0];
  const errorIcon = input.children[1];
  let errorMessage = input.children[2];

  inputElement.addEventListener("focus", () => {
    inputElement.classList.remove("border-[#FF6F5B]");
    inputElement.classList.add("border-white");
    errorIcon.classList.add("hidden");
    errorMessage.textContent = "";
  });
});
