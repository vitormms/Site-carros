let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator =document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');
let list = container.querySelector('.list');
let description = document.querySelector('.description');
let carInfo = document.querySelector('.car-information');
let h2 = document.querySelector('h2');


let active = 0;
let firstPosition = 0;
let lastPosition =  items.length -1
prevButton.onclick = () => {
    // alert("Botão Prev")
    // let itemOld = container.querySelector('.list .item.active');
    // itemOld.classList.remove('active');
    // list.style.setProperty('--calculation',-1);
    list.style.setProperty('--calculation', active === 0 ? '-1' : '-1');
    active = active - 1 < firstPosition ? lastPosition: active - 1;
    setSlider();
    // if (active - 1 < firstPosition) {
    //     active = lastPosition;
    // } else {
    //     active = active - 1;
    // }
    items[active].classList.add('active')

}

nextButton.onclick = () => {
    // console("Botão Next")
    // alert("Botão Prev")
    // list.style.setProperty('--calculation', '1');
    list.style.setProperty('--calculation', active === lastPosition ? '1' : '1');
    active = active + 1 > lastPosition ? 0: active + 1;
    setSlider();
    

    // active + 1 > lastPosition é maior que o lastPosition
    // ? se ele for maior que o eu volto ele pro Zero
    // se nao for maior que Zero eu coloco nele active + 1 
    // basicamente é um if e else resumido
    // if (active + 1 > lastPosition) {
    //     active = 0;
    // } else {
    //     active = active + 1;
    // }
    items[active].classList.add('active');
}

function setSlider() {
    let itemOld = container.querySelector('.list .item.active');
    itemOld.classList.remove('active');

    let dotsOld = indicator.querySelector('ul li.active');
    dotsOld.classList.remove('active');
    dots[active].classList.add('active');

    indicator.querySelector('.number').innerHTML = '0' + (active + 1);

    let cor1 = '#FFFFFF'; // cruz
    let cor2 = '#FFFFFF'; // mcqueen
    let cor3 = '#FFFFFF'; // storm

    // Seleciona o item ativo e seus elementos
    let activeItem = items[active];
    let activeDescription = activeItem.querySelector('.description');
    let activeCarInfo = activeItem.querySelector('.car-information');
    let activeH2 = activeItem.querySelector('h2');
    
    // Seleciona o li correspondente ao item ativo
    let activeLi = indicator.querySelectorAll('ul li')[active];

    // Reseta a cor de fundo dos itens da lista
    indicator.querySelectorAll('ul li').forEach((li) => {
        li.style.backgroundColor = ''; // Reseta para o padrão
    });

    if (active === 0) {
        container.style.backgroundImage = 'radial-gradient(circle, #6959CD, #000000)';
        activeDescription.style.color = cor1;
        activeCarInfo.style.color = cor1;
        activeH2.style.color = cor1;
        activeLi.style.backgroundColor = cor1; // Muda a cor de fundo do li ativo
    } else if (active === 1) {
        container.style.backgroundImage = 'radial-gradient(circle, #FFD700, #8B0000)';
        activeDescription.style.color = cor2;
        activeCarInfo.style.color = cor2;
        activeH2.style.color = cor2;
        activeLi.style.backgroundColor = cor2; // Muda a cor de fundo do li ativo
    } else if (active === 2) {
        container.style.backgroundImage = 'radial-gradient(circle, #ff0000, #ffff00)';
        activeDescription.style.color = cor3;
        activeCarInfo.style.color = cor3;
        activeH2.style.color = cor3;
        activeLi.style.backgroundColor = cor3; // Muda a cor de fundo do li ativo
    }

    items[active].classList.add('active');
}

// Inicializa o primeiro item como ativo
setSlider();

// galeria daqui pra baixo//
function openModal(src) {
    document.getElementById('modal').style.display = "block";
    document.getElementById('modal-img').src = src;
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}



console.log("script.js carregado corretamente");

// Inicializar o EmailJS com a sua chave de usuário (substitua pelo seu próprio usuário)
// script.js

// Inicializa o EmailJS com o seu User ID
(function(){
    emailjs.init("I_-6yPPzM_ZoA8yzS"); // Substitua "YOUR_USER_ID" pelo seu User ID do EmailJS
})();

// Evento do botão "Enviar"
document.getElementById("submit-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Obter valores do formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Verificar se todos os campos estão preenchidos
    if (name && email && message) {
        // Configurar os parâmetros do template
        const templateParams = {
            user_name: name,
            user_email: email,
            message: message
        };

        // Enviar o e-mail via EmailJS
        emailjs.send("service_p8op2zf", "template_3x9n5ok", templateParams)
            .then(function(response) {
                console.log("Mensagem enviada com sucesso:", response);
                alert("Mensagem enviada com sucesso!"); // Mostrar mensagem de sucesso
            }, function(error) {
                console.log("Erro ao enviar mensagem:", error);
                alert("Erro ao enviar a mensagem. Tente novamente mais tarde.");
            });
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});




