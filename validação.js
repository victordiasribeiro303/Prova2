document.getElementById('form-contato').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = this.nome.value.trim();
  const email = this.email.value.trim();
  const assunto = this.assunto.value.trim();
  const mensagem = this.mensagem.value.trim();
  const feedback = document.getElementById('feedback');


  const campos = ['nome', 'email', 'assunto', 'mensagem'];
  campos.forEach(campo => {
    this[campo].classList.remove('invalido');
  });

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nome || !email || !assunto || !mensagem) {
    feedback.textContent = 'Por favor, preencha todos os campos.';
    feedback.style.color = 'red';
    feedback.style.backgroundColor = '#ffeeee';
    
  
    if (!nome) this.nome.classList.add('invalido');
    if (!email) this.email.classList.add('invalido');
    if (!assunto) this.assunto.classList.add('invalido');
    if (!mensagem) this.mensagem.classList.add('invalido');
    
    return;
  }

  if (!emailValido.test(email)) {
    feedback.textContent = 'Por favor, insira um email válido.';
    feedback.style.color = 'red';
    feedback.style.backgroundColor = '#ffeeee';
    this.email.classList.add('invalido');
    return;
  }

  if (mensagem.length < 20) {
    feedback.textContent = 'A mensagem deve ter no mínimo 20 caracteres.';
    feedback.style.color = 'red';
    feedback.style.backgroundColor = '#ffeeee';
    this.mensagem.classList.add('invalido');
    return;
  }

  feedback.textContent = 'Mensagem enviada com sucesso! Em breve entraremos em contato.';
  feedback.style.color = 'green';
  feedback.style.backgroundColor = '#eeffee';
  this.reset();
});