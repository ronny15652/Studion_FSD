$(document).ready(() => {
  const slickOptions = {
    dots: false,
    autoplay: true,
    prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>',
    nextArrow: '<button type="button" class="slick-next slider__next-arrow">Next</button>'
  };
  $('.slider').slick(slickOptions);
  $('.footer__button').on('click', () => {
    const email = $('#email').val();
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "ronnysilva1029@gmail.com",
      Password: "99A1CECBB8C12297BBE48F2312D951FF39AE",
      To: "ronnysilva1029@gmail.com",
      From: email,
      Subject: "Por Favor, me adicione na newsletter!",
      Body: ` Olá,
      Eu gostaria de ser adicionado na newsletter do site.
      Meu email é ${email}.
      obrigado!`
    }).then(
      message => alert(message)
    );
  })
});