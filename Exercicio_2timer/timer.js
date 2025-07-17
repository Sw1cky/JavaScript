// 1. Função para calcular o tempo restante até uma data futura
function calcularTempoRestante(dataFutura) {
  const agora = new Date();
  const diferenca = dataFutura - agora;

  if (diferenca <= 0) {
    return {
      dias: 0,
      horas: 0,
      minutos: 0,
      segundos: 0
    };
  }

  const segundosTotais = Math.floor(diferenca / 1000);
  const dias = Math.floor(segundosTotais / 86400);
  const horas = Math.floor((segundosTotais % 86400) / 3600);
  const minutos = Math.floor((segundosTotais % 3600) / 60);
  const segundos = segundosTotais % 60;

  return { dias, horas, minutos, segundos };
}

// 2. Função para atualizar o temporizador na tela
function atualizarTemporizador() {
  const tempo = calcularTempoRestante(dataAlvo);

  document.getElementById('dias').textContent = tempo.dias;
  document.getElementById('horas').textContent = tempo.horas;
  document.getElementById('minutos').textContent = tempo.minutos;
  document.getElementById('segundos').textContent = tempo.segundos;
}

// 3. Define a data futura (exemplo: 31 de dezembro de 2025)
const dataAlvo = new Date('2025-12-31T23:59:59');

// 4. Atualiza a cada segundo
setInterval(atualizarTemporizador, 1000);

// Atualiza imediatamente ao carregar
atualizarTemporizador();
