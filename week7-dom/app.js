const para = document.querySelector("#para");
console.log(`${para.innerHTML}`);
console.log(`${para.outerHTML}`);

const headerContainer = document.querySelector("div");
headerContainer.setAttribute("class", "main-header");
console.log(`${headerContainer.innerHTML}`);
console.log(`${headerContainer.outerHTML}`);

const submitButton = document.querySelector("#submit-btn");
submitButton.addEventListener("click", () =>
   alert("Your form has been submitted."),
);

const mottoInput = document.querySelector("#motto");
mottoInput.addEventListener("input", () => console.log(mottoInput.value));
