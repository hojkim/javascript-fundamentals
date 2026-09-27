const para = document.querySelector("#para");
console.log(`${para.innerHTML}`);
console.log(`${para.outerHTML}`);

const headerContainer = document.querySelector("div");
headerContainer.setAttribute("class", "main-header");
console.log(`${headerContainer.innerHTML}`);
console.log(`${headerContainer.outerHTML}`);
