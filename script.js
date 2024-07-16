let search = document.querySelector('.search-box');

document.querySelector('#serach-icon').onclick = () => {
  search.classList.toggle('active');
  cart.classList.remove('active');
  user.classList.remove('active');
}

let cart = document.querySelector('.cart');

document.querySelector('#cart-icon').onclick = () => {
  cart.classList.toggle('active');
  search.classList.remove('active');
  user.classList.remove('active');
  navbar.classList.remove('active');
}

let user = document.querySelector('.user');

document.querySelector('#user-icon').onclick = () => {
  user.classList.toggle('active');
  search.classList.remove('active');
  cart.classList.remove('active');
  navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
  navbar.classList.toggle('active');
  search.classList.remove('active');
  cart.classList.remove('active');
  user.classList.remove('active');
}

window.onscroll = () => {
  search.classList.remove('active');
  cart.classList.remove('active');
  user.classList.remove('active');
  navbar.classList.remove('active');
}

//Navbar Scroll
let header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});



var swiper = new Swiper(".new-arrival", {
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//Contact

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `fullName: ${fullName.value}<br> email: ${email.value}<br> phone: ${phone.value}<br> message: ${message.value}`;

  Email.send({
    SecureToken : "a61d3992-b9b1-4565-bee5-b33488f9a39a",
    //Host: "smtp.elasticemail.com",
    //Username: "oussamakhaidoune0@gmail.com",
    //Password: "2906F016A2AFF659ED0C446C588AFE2D0D4A",
    To: 'oussamakhaidoune0@gmail.com',
    From: "oussamakhaidoune0@gmail.com",
    Subject: subject.value,
    Body: bodyMessage
  }).then(
    message => {
      if (message == "OK") {
        Swal.fire({
          title: "Good job!",
          text: "Your message sent successfully!",
          icon: "success"
        });
      }
    }
  );
}

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if(items[1].value != "") {
      checkEmail();
    }

    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function checkEmail () {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const errorTxtEmail = document.querySelector(".error-text.email");

  if(!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if(email.value !="") {
      errorTxtEmail.innerHTML = "Enter a valid email adresse";
    }else{
      errorTxtEmail.innerHTML = "Email adresse can't be blank";
    }
  }
  else{
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if(!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error")) {
    sendEmail();

    form.reset();
    return false;
  }
});