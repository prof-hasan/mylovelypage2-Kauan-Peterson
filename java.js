function animarContador(id, valorFinal, duracao) {
  const elemento = document.getElementById(id);
  let valorAtual = 0;
  const incremento = valorFinal / (duracao / 50);
  const intervalo = setInterval(() => {
    valorAtual += incremento;
    if (valorAtual >= valorFinal) {
      valorAtual = valorFinal;
      clearInterval(intervalo);
    }
    elemento.textContent = Math.floor(valorAtual);
  }, 50);
}

window.onload = function() {
  animarContador('contador-titulos', 3, 3200);
};