var step = 1
var name;
var age;
var area;
var message;

$('form').submit(function(e) {
  e.preventDefault()


  if (step < 3) {
    message = $('#message-input').val();
  } else {
    message = $('#select-input').val();
  }

  if (step == 1) {
    name = message;
  } else if (step == 2) {
    age = message;
  } else if (step == 3) {
    area = message;
  }

  $('.chatbot').append(`
    <div class="message-box user-message">
      <div class="message grey lighten-5">${message}</div>
      <div class="user">${name}</div>
    </div>
  `)
  
  step++;

  if (step == 2) {
    setTimeout(() => {
      $('.chatbot').append(`
      <div class="message-box bot-message">
        <div class="message light-blue lighten-5">Olá ${name}</div>
        <div class="user">Bot</div>
      </div>
      <div class="message-box bot-message">
        <div class="message light-blue lighten-5">Qual sua idade?</div>
        <div class="user">Bot</div>
      </div>
    `)
    }, 300);
  }

  if (step == 3) {
    $('#message-input').hide()
    $('#select-input').show()
    setTimeout(() => {
      $('.chatbot').append(`
      <div class="message-box bot-message">
        <div class="message light-blue lighten-5">Qual é sua área?</div>
        <div class="user">Bot</div>
      </div>
    `)
    }, 300);
  }

  if (step == 4) {
    $('#message-input').show()
    $('#select-input').hide()
    setTimeout(() => {
      $('.chatbot').append(`
      <div class="message-box bot-message">
        <div class="message light-blue lighten-5">Legal! Vou te direcionar para o site e usar suas informações para personalizar sua experiência! (;</div>
        <div class="user">Bot</div>
      </div>
    `)
    }, 300);

    setTimeout(() => {
      $('.container').html(`
        <h1>Seus Dados</h1>
        <p>
          <strong>Nome: </strong><br>
          <span>${name}</span><br>
          <br>
          <strong>Idade: </strong><br>
          <span>${age}</span><br>
          <br>
          <strong>Área: </strong><br>
          <span>${area}</span><br>
        </p>
      `)
    }, 1000);
  }

  $('#message-input').val('')
})