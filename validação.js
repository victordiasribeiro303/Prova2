document.getElementById('form-contato').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = this.nome.value.trim();
  const email = this.email.value.trim();
  const assunto = this.assunto.value.trim();
  const mensagem = this.mensagem.value.trim();
  const feedback = document.getElementById('feedback');

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nome || !email || !assunto || !mensagem) {
    feedback.textContent = 'Por favor, preencha todos os campos.';
    feedback.style.color = 'red';
    return;
  }

  if (!emailValido.test(email)) {
    feedback.textContent = 'Email inválido.';
    feedback.style.color = 'red';
    return;
  }

  if (mensagem.length < 20) {
    feedback.textContent = 'A mensagem deve ter no mínimo 20 caracteres.';
    feedback.style.color = 'red';
    return;
  }

  feedback.textContent = 'Mensagem enviada com sucesso!';
  feedback.style.color = 'green';
  this.reset();
});
