"use strict";

// Selectors
const title = document.querySelector('title')





// Functions
function typeWriter(ele) {
  const text = ele.textContent
  const words = text.split(" ")
  let index = 0
  ele.textContent = '.'

  function animate() {
    ele.textContent += `${words[index]} `

    index++

    if (words.length < index) {
      index = 0
      ele.textContent = "."
    }
  }

  setInterval(() => animate(), 1000);
}





// Events
typeWriter(title)