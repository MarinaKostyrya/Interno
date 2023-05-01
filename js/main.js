
// открытие модального окна при нажатии на кнопку
const openModalBtn = document.querySelector('.mybtn');
const openModalBtn2 = document.querySelector('.about__btn');
const modal = document.querySelector('#myModal');
const closeModalBtn = modal.querySelector('.close');
const submitBtn = modal.querySelector('.btn-submit');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});
openModalBtn2.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

submitBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});


// Плавная прокрутка ...............

$(document).ready(function() {
  $('.menu__link').click(function() {
    let sectionId = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionId).offset().top
    }, 1000);
    return false;
  });
});

// ..............Кнопка UP.........
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0.3 * $(this).height()) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });

  $('#back-to-top').click(function() {
    $('html, body').animate({scrollTop : 0},2000);
    return false;
  });
});




// Скрол Get Started

const button = document.querySelector('.banner__bnt');
const targetSection = document.querySelector('#scroll');

button.addEventListener('click', () => {
  targetSection.scrollIntoView({
    behavior: 'smooth'
  });
});