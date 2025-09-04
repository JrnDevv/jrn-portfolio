const frases = [
    "Gabriel Souza",
    "Desenvolvedor Full-Stack",
];

const typingElement = document.getElementById("typing");
let fraseIndex = 0;
let letraIndex = 0;

function digitar() {
  if (letraIndex < frases[fraseIndex].length) {
    typingElement.innerHTML += frases[fraseIndex].charAt(letraIndex);
    letraIndex++;
    setTimeout(digitar, 100);
  } else {
    setTimeout(apagar, 1500);
  }
}

function apagar() {
  if (letraIndex > 0) {
    typingElement.innerHTML = frases[fraseIndex].substring(0, letraIndex - 1);
    letraIndex--;
    setTimeout(apagar, 50);
  } else {
    fraseIndex = (fraseIndex + 1) % frases.length;
    setTimeout(digitar, 500);
  }
}

digitar();
