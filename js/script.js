'use strict'

const flexChildElements = document.querySelectorAll("div.flexChild");

window.addEventListener('resize', resizeWindowHandler)

function resizeWindowHandler(){console.log(flexChildElements);
  console.clear();
  for (const flexChild of flexChildElements) {
    console.log(flexChild.offsetWidth);
  }
}

// const flexItemWidth