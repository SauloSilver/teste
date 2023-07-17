// JavaScript Document

//var meusTextos = document.getElementsByClassName("meuTexto");

//for (var i = 0; i < meusTextos.length; i++) {
//  meusTextos[i].addEventListener("mouseover", function() {
//    this.style.backgroundColor = "lightgray"; // Defina a cor de fundo desejada ao passar o mouse
//  });

//  meusTextos[i].addEventListener("mouseout", function() {
//    this.style.backgroundColor = "gray"; // Volte ao background original ao mover o mouse para fora
//  });
//}

// como já tinha outra classe no p vamos ter que utilizar o atributo data.

//var meusTextos = document.querySelectorAll('p[data-meuTexto]');

//for (var i = 0; i < meusTextos.length; i++) {
//  meusTextos[i].addEventListener("mouseover", function() {
//    this.style.backgroundColor = "lightgray"; // Defina a cor de fundo desejada ao passar o mouse
//  });

//  meusTextos[i].addEventListener("mouseout", function() {
//    this.style.backgroundColor = "gray"; // Volte ao background original ao mover o mouse para fora
//  });
//}

//var meuTexto = document.querySelectorAll("[data-meuTexto]");

//for (var i = 0; i < meuTexto.length; i++) {
//  meuTexto[i].addEventListener("mouseover", function() {
//    this.style.backgroundColor = "lightgray"; // Defina a cor de fundo desejada ao passar o //mouse
//  });

//  meuTexto[i].addEventListener("mouseout", function() {
//    this.style.backgroundColor = "gray"; // Volte ao background original ao mover o mouse //para fora
//  });
//}

var meuTexto = document.querySelectorAll(".menu__my-div");

for (var i = 0; i < meuTexto.length; i++) {
  meuTexto[i].addEventListener("mouseover", function() {
    this.style.backgroundColor = "lightgray"; // Defina a cor de fundo desejada ao passar o mouse
  });

  meuTexto[i].addEventListener("mouseout", function() {
    this.style.backgroundColor = "gray"; // Volte ao background original ao mover o mouse para fora
  });
}


//Formulário de e-mail

//const functions = require('firebase-functions');
//const nodemailer = require('nodemailer');

// Configurações do transporte de e-mail
//const transporter = nodemailer.createTransport({
//  service: 'gmail',
//  auth: {
//    user: 'seu-email@gmail.com',
//    pass: 'sua-senha'
//  }
//});

// Função acionada pelo formulário de contato
//exports.sendContactEmail = functions.https.onRequest((req, res) => {
// Extrai os dados do formulário
//  const { name, email, subject, message } = req.body;

// Configura o e-mail a ser enviado
//  const mailOptions = {
//    from: 'seu-email@gmail.com',
//    to: 'destinatario@gmail.com',
//    subject: `Novo contato: ${subject}`,
//    text: `
//      Nome: ${name}
//      E-mail: ${email}
//      Mensagem: ${message}

//  };

//  // Envia o e-mail
//  transporter.sendMail(mailOptions, (error, info) => {
//    if (error) {
//      console.error('Erro ao enviar e-mail:', error);
//      res.status(500).send('Erro ao enviar e-mail');
//    } else {
//      console.log('E-mail enviado com sucesso:', info.response);
//      res.status(200).send('E-mail enviado com sucesso');
//    }
//  });
//});

//FORMULÁRIO DE E-MAIL

// Initialize Firebase
var config = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
};

firebase.initializeApp(config);

// Reference to the contact form
var contactForm = document.getElementById('contact-form');

// Listen for form submission
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting normally

  // Get form data
  var formData = new FormData(contactForm);

  // Create a Firebase Cloud Functions callable function
  var sendEmail = firebase.functions().httpsCallable('sendEmail');

  // Call the 'sendEmail' function with the form data
  sendEmail(formData)
    .then(function(result) {
      // Email sent successfully
      console.log(result);
      // Reset the form
      contactForm.reset();
    })
    .catch(function(error) {
      // Error sending email
      console.error(error);
    });
});

//Certifique-se de substituir 'YOUR_API_KEY', 'YOUR_AUTH_DOMAIN' e 'YOUR_PROJECT_ID' pelas informações corretas do seu projeto Firebase. Além disso, você precisará criar a função Cloud Function no Firebase para processar o envio do e-mail. Certifique-se de configurar corretamente a função para enviar o e-mail usando o serviço de e-mail de sua escolha, como SendGrid ou Nodemailer.

//Lembre-se de incluir o SDK do Firebase (firebase-app.js) e o SDK do Firebase Cloud Functions (firebase-functions.js) no seu arquivo HTML antes do script.js para garantir que as dependências sejam carregadas corretamente.