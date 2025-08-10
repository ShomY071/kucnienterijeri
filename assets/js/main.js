
$(document).ready(function () {
  renderNavigation();
  renderInfo();
  renderServices();
  renderComments();
  renderMeals();
  renderTeam();
  renderQuestions();
  renderFooter();
  renderAuthor();
  renderForm();

  // Funkcija za renderovanje navigacije
  function renderNavigation() {
    let nizMeni = [
      ["index.html", "Početna"],
      ["index.html#about", "O nama"],
      ["index.html#meals", "Nameštaj"],
      ["index.html#contact", 'Kontakt']
    ];

    var Nav = document.getElementsByTagName('nav');
    let ispis = "<ul>"
    for (let i = 0; i < nizMeni.length; i++) {
      ispis += ` <li><a href="${nizMeni[i][0]}">${nizMeni[i][1]}</a></li>`
    }
    ispis += "</ul>"
    for (let i = 0; i < Nav.length; i++) {
      Nav[i].innerHTML += ispis;
    }
    if ($('.nav-menu').length) {
      var mobile_nav = $('.nav-menu').clone();

      mobile_nav.removeClass('nav-menu d-none d-lg-block').addClass('mobile-nav d-lg-none');
      $('.head').append(mobile_nav);
      $('.head').prepend(`<button type="button" class="mobile-nav-toggle d-lg-none"> <i class="icofont-navigation-menu"></i></button>`);
      $('.head').append('<div class="mobile-nav-overly"></div>');
      $(document).on('click', '.mobile-nav-toggle', function (e) {
        $('.head').toggleClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        $('.mobile-nav-overly').toggle();
      });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
      $(".mobile-nav, .mobile-nav-toggle").hide();
    }
  }

  // Funkcija za prikaz sekcije koja govori vise o salonu
  function renderInfo() {
    let Naslov = ["Ukratko o nama"];
    let Opisnaslova = ["Kucni enterijer je sinonim za kvalitet i idealna prilika da opremite Vaš dom modernim nameštajem po Vašem ukusu"];

    let TextAbout = [
      ["Besprekoran dizajn", "Besprekoran dizajn podrazumeva pažljivo osmišljene detalje koji se harmonično uklapaju, stvarajući savršenstvo koje oduzima dah."],
      ["Kvalitet", "Kvalitet je  kamen temeljac naše firme koji ne poznaje kompromise. Svaki komad nameštaja je pažljivo izrađen od najfinijih materijala i sa izuzetnom preciznošću u izradi."],
      ["Brza isporuka", "Brza isporuka garantuje da će željeni proizvod stići do vas u rekordnom roku, pružajući vam zadovoljstvo i praktičnost."]
    ];

    let divabout = document.createElement('div');
    divabout.classList.add('container');
    let divred = document.createElement('div');
    divred.classList.add('row');


    let divslike = document.createElement('div');
    divslike.classList.add('col-xl-6', 'col-lg-7');
    divslike.innerHTML = `<img src="assets/img/about-img.jpg" class="img-fluid" alt="aboutslika">`

    let divpodaci = document.createElement('div');
    divpodaci.classList.add('col-xl-6', 'col-lg-5', 'pt-5', 'pt-lg-0');

    divpodaci.innerHTML = `<h3>${Naslov}</h3> <p>${Opisnaslova}</p>`

    for (let i = 0; i < TextAbout.length; i++) {
      divpodaci.innerHTML += ` 
          <div class="icon-box" >
            <i class="bx bx-redo"></i>
            <h4>${TextAbout[i][0]}</h4>
            <p>${TextAbout[i][1]}</p>
          </div>`
    }
    divred.append(divpodaci);
    divred.prepend(divslike);
    divabout.append(divred);

    if ($('.about').length) {
      let Divaboutmain = document.querySelector('.about');
      Divaboutmain.append(divabout);
    }
  }

  // Funkcija za prikaz usluga koje se pruzaju
  function renderServices() {
    let Naslov = ["Services"];

    let TextAbout = [
      ['Dining', 'Spent some time with your friends and family in our luxurious restaurant.'],
      ['Delivery', 'We can always delivery your meal on your doorstep.'],
      ['Take out', 'Take out warm meal on your way home.'],
      ['Rent for party', 'You can always rent a luxurious space for your special occasions.']
    ];
    let Bojaicone = ['pink', 'cyan', 'green', 'blue'];
    let Nazivicone = ['dish', 'package', 'shopping-bag', 'cake'];

    let divred = document.createElement('div');
    divred.classList.add('row');

    let divnaslov = document.createElement('div');
    divnaslov.classList.add('section-title');
    divnaslov.innerHTML = ` <h2>${Naslov}</h2>`

    for (let i = 0; i < TextAbout.length; i++) {
      divred.innerHTML += `
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" >
            <div class="icon-box icon-box-${Bojaicone[i]}">
              <div class="icon"><i class="bx bx-${Nazivicone[i]}"></i></div>
              <h4 class="title"><a href="">${TextAbout[i][0]}</a></h4>
              <p class="description">${TextAbout[i][1]}</p>
            </div>
          </div>`
    }
    if ($('.services').length) {
      let Divservisi = document.querySelector('.services >.container');
      Divservisi.append(divnaslov);
      Divservisi.append(divred);
    }
  }

  // Funkcija koja prikazuje utiske nasih korisnika 
  function renderComments() {
    if ($('#testimonials').length) {
      let Naslov = ["Utisci zadovoljnih mušterija"];
      let Opisnaslova = ["Ono što su naši kupci rekli o nama, shvatamo kao naš ponos i daje nam vetar u leđa da radimo punom parom..."];
      let KomentariDesc = [
        `Kucni enterijer je zaista ispunio sva naša očekivanja. Njihov nameštaj je visokog kvaliteta i odlično se uklapa u naš dom. Takođe brzina izrade nameštaja me je jako iznenadila.`,
        `Kupovina nameštaja kod Kucnog enterijera bila je prava odluka, jer su nam pružili izvanrednu uslugu i savršeno dizajnirane komade nameštaja baš po našim merama. `,
        `Moje iskustvo sa Kucnim enterijerom je besprekorno, profesionalnost i pažnja prema detaljima kao i kvalitet usluge čine ih pravim liderima u industriji nameštaja.`,
        `Zahvaljujući Kucnom enterijeru, naš dom sada izgleda prelepo i udobno, njihov nameštaj je prava umetnost, a odnos prema mušterijama je na zavidnom nivou.`,
        `Kucni enterijer je definitivno moja prva opcija kada je u pitanju nameštaj. Njihov asortiman je raznovrstan, a kvalitet je bez premca. `
      ];

      let ImeKorisnika = ['Sara Jelič', 'Miloš Ivanović', 'Vladimir Savić', 'Sofija Avramović', 'Igor Lazarević'];

      let divnaslov = document.querySelector('#testimonials .section-title')
      divnaslov.innerHTML += ` <h2>${Naslov}</h2> <p>${Opisnaslova}</p>`

      let divcontrols = document.querySelector('.controls');
      divcontrols.innerHTML += `
        <div class="controls-top d-flex justify-content-center">
          <a class="btn-floating btn-lg arrowColor" href="#multi-item-example" data-slide="prev"><i class="bx bx-left-arrow"></i></a>
          <a class="btn-floating btn-lg arrowColor" href="#multi-item-example" data-slide="next"><i class="bx bx-right-arrow"></i></a>
        </div>`

      let divindicators = document.querySelector('.indicators');
      divindicators.innerHTML += ` 
        <ol class="carousel-indicators">
          <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
          <li data-target="#multi-item-example" data-slide-to="1"></li>
          <li data-target="#multi-item-example" data-slide-to="2"></li>
        </ol>`

      let divprviRed = document.querySelector('.divprvi .row');
      for (let index = 0; index < 3; index++) {
        divprviRed.innerHTML += `
            <div class="col-md-4">
              <div class="card mb-2">
                <div class="testimonial-item">
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>${KomentariDesc[index]}
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src="assets/img/testimonials/testimonials-${index}.jpg" class="testimonial-img" alt="">
                  <h3>${ImeKorisnika[index]}</h3>
                </div>
              </div>
            </div>`
      }

      let divdrugiRed = document.querySelector('.divdrugi .row');

      for (let index = 3; index < 5; index++) {
        divdrugiRed.innerHTML += `
            <div class="col-md-4">
              <div class="card mb-2">
                <div class="testimonial-item">
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>${KomentariDesc[index]}<i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src="assets/img/testimonials/testimonials-${index}.jpg" class="testimonial-img" alt="">
                  <h3>${ImeKorisnika[index]}</h3>
                </div>
              </div>
            </div>`
      }
    }
  }

  // Funkcija koja prikazuje namestaj
  function renderMeals() {
    let Naslov = ["Sve iz naše ponude nameštaja"];
    let Opisnaslova = [
      `Evo naše kolekcije proizvoda koje smo napravili i isporučili našim kupcima. Ovde su prikazani samo najprodavaniji proizvodi iz naše bogate ponude. Naravno to nije sve, u koliko imate druge želje mi pravimo nameštaj baš za Vas...`
    ];

    let OpisSlike = ['Ležajevi', 'Garniture', 'Garniture', 'Kuhinja', 'Stolovi', 'Komode i police', 'Garniture', 'Kuhinja', 'Ležajevi', 'Komode i police', 'Stolovi', 'Ležajevi', 'Kuhinja', 'Garniture', 'Stolovi', 'Kuhinja', 'Garniture', 'Ležajevi', 'Kuhinja', 'Stolovi', 'Garniture', 'Komode i police', 'Kuhinja'];
    let NazivSlike = ['Trosed', 'Ugaona garnitura', 'Ugaona garnitura', 'Kuhinja', 'Sto sa mestom za ostavljanje stvari', 'Komoda za TV i police za knjige', 'Ugaona garnitura', 'Kuhinja', 'Krevet na sprat sa fiokom', 'Komoda za TV', 'Sto za dnevni boravak', 'Bračni krevet', 'Kuhinja', 'Ugaona garnitura', 'Trpezarijski sto', 'Kuhinja', 'Ugaona garnitura', 'Krevet za jednu osobu ', 'Kuhinja', 'Trpezarijski sto', 'Ugaona garnitura', 'Komoda za TV i police za knjige', 'Kuhinja'];
    let Fliterw = ['web', 'app', 'app', 'kuh', 'card', 'pol', 'app', 'kuh', 'web', 'pol', 'card', 'web', 'kuh', 'app', 'card', 'kuh', 'app', 'web', 'kuh', 'card', 'app', 'pol', 'kuh'];
    let SifraArtikla = ['LEZ001', 'UG001', 'UG002', 'KUH001', 'ST001', 'KIP001', 'UG003', 'KUH002', 'LEZ002', 'KIP002', 'ST002', 'LEZ003', 'KUH003', 'UG004', 'ST003', 'KUH004', 'UG005', 'LEZ004', 'KUH005', 'ST004', 'UG006', 'KIP003', 'KUH006'];

    let divnaslov = document.createElement('div');
    divnaslov.classList.add('section-title');
    divnaslov.innerHTML = ` <h2>${Naslov}</h2> <p>${Opisnaslova}</p>`

    let Buttons = document.createElement('div');
    Buttons.classList.add('row');
    Buttons.innerHTML += `
        <div class="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li data-filter="all" class="filter-active">Sve</li>
            <li data-filter="app">Garniture</li>
            <li data-filter="card">Stolovi</li>
            <li data-filter="web">Ležajevi</li>
            <li data-filter="pol">Komode i police</li> 
            <li data-filter="kuh">Kuhinja</li>
          </ul>
        </div>`

    let Portfoliomain = document.createElement('div');
    Portfoliomain.classList.add('row');
    Portfoliomain.classList.add('portfolio-container');
    for (let index = 0; index < Fliterw.length; index++) {
      Portfoliomain.innerHTML += `
          <div class="col-lg-4 col-md-6 portfolio-item ${Fliterw[index]} ">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-${index + 1}.jpg" class="img-fluid"
              alt="port.slika${index + 1}">
              <div class="portfolio-info">
                <h4>${NazivSlike[index]}</h4>
                <p>${OpisSlike[index]}</p>
                <p> Šifra artikla: <b class='sifraArtiklaColor'>${SifraArtikla[index]}</b></p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-${index + 1}.jpg" data-gall="portfolioGallery" class="venobox" title="${NazivSlike[index]}"><i class="bx bx-zoom-in"></i></a>
                </div>
              </div>
            </div>
          </div>`
    }
    if ($('.portfolio').length) {
      let Portfoliocontainer = document.querySelector('.portfolio >.container');
      Portfoliocontainer.appendChild(divnaslov);
      Portfoliocontainer.appendChild(Buttons);
      Portfoliocontainer.appendChild(Portfoliomain);
    }
  }

  function renderTeam(){
    if($('.team').length){    
      let Naslov= ["Meet our team "];
      let Opisnaslova = ["Yours truly are here.."];
      let TeamImena=['Uberto Parenti','Gemma Nucci','Loris Boccio','Nicolò Busa'];
      let TeamZanimanja=['Chef','Bartender','Waiter','Assistant cook'];
      let NaslovTeam = document.querySelector('.team>.container>.section-title');
      for (let i= 0; i < Naslov.length; i++) {
        NaslovTeam.innerHTML+=`<h2>${Naslov[i]}</h2> <p>${Opisnaslova[i]}</p>`
      }
      let Teamred = document.querySelector('.team>.container>.row');
      for (let i = 0; i < TeamImena.length; i++) {
        Teamred.innerHTML+=`
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="member">
              <img src="assets/img/team/team-${i+1}.jpg" class="img-fluid" alt="member${i+1}">
              <div class="member-info">
                <div class="member-info-content">
                  <h4>${TeamImena[i]}</h4>
                  <span>${TeamZanimanja[i]}</span>
                </div>
                <div class="social">
                  <a href="https://twitter.com/?lang=sr"><i class="icofont-twitter"></i></a>
                  <a href="https://www.facebook.com"><i class="icofont-facebook"></i></a>
                  <a href="https://www.instagram.com"><i class="icofont-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>`
      }
    }
  }

  // Funkcija za prikaz cesto postavljanih pitanja
  function renderQuestions() {
    if ($('.faq').length) {

      let Naslov = "F.A.Q";
      let Opisnaslova = "Ako se Vaše pitanje ne nalazi na listi najčešćih pitanja kontaktirajte nas...";
      let Pitanje = [
        `Da li je potrebno dati određeni depozit pri porudžbini?`,
        `Da li ima obezbeđen transport nameštaja do moje adrese?`,
        `Koje je očekivano vreme za izradu nameštaja?`,
        `Način plaćanja?`,
        `Koja je cena same montaže nameštaja?`
      ];
      let Odgovornapitanje = [
        `U slučaju da se radi o porudžbini većih razmera potrebno je dati određeni avans.`,
        `Ima obezbeđen transport do Vaše lokacije i cena transporta je uračunata u celokupnu cenu.`,
        `Očekivano vreme za samu izradu zavisi od porudžbine i obima posla.`,
        `Možete platiti u gotovini kao i elektronskim putem tj uplatom na račun.`,
        `Cena same montaže je uračunata u početnu cenu i zavisi od obima posla.`
      ];
      let Dnaslov = document.querySelector('.faq>.container>.section-title');
      Dnaslov.innerHTML = `<h3>${Naslov}</h3><p>${Opisnaslova}</p>`
      let Dlista = document.querySelector('.faq>.container>.faq-list');
      let ul = document.createElement('ul');
      for (let i = 0; i < Pitanje.length; i++) {
        ul.innerHTML += ` 
            <li>
              <i class="bx bx-help-circle icon-help"></i> 
              <a data-toggle="collapse" class="collapse" href="#faq-list-${i}">
                ${Pitanje[i]}
                <i class="bx bx-chevron-down icon-show"></i>
                <i class="bx bx-chevron-up icon-close"></i>
              </a>
              <div id="faq-list-${i}" class="collapse" data-parent=".faq-list">
                <p>${Odgovornapitanje[i]}</p>
              </div>
            </li>`
      }
      Dlista.appendChild(ul);
      let Prvi = document.querySelector('#faq-list-0');
      Prvi.classList.add("show");
    }
  }

  // Funkcija za prikazivanje futera
  function renderFooter() {
    if ($('#footer').length) {
      let Smedia = ['instagram','facebook','twitter', 'youtube'];
      let SmediaLinks = ['https://www.instagram.com', 'https://www.facebook.com','https://www.twitter.com','https://www.youtube.com']
      let Links1 = ['O nama', 'Nameštaj', 'Kontakt'];
      let Links1Href = ['index.html#about', 'index.html#meals', 'index.html#contact'];
      let Links2 = ['Trosedi i dvosedi', 'Ugaone garniture', 'Ležajevi', 'Komode i police', 'Stolovi', 'Kuhinja'];
      let sociallinks = document.querySelector('.footer-info>.social-links');
      for (let index = 0; index < Smedia.length; index++) {
        sociallinks.innerHTML += `
            <a href="${SmediaLinks[index]}" target="blank_" class="${Smedia[index]}"><i class="bx bxl-${Smedia[index]}"></i></a>`

        
      }

      let usefullinks = document.querySelector('.useful-links>ul');
      for (let index = 0; index < Links1.length; index++) {
        usefullinks.innerHTML += `<li><i class="bx bx-chevron-right"></i> <a href="${Links1Href[index]}">${Links1[index]}</a></li>`
      }
       usefullinks.innerHTML+=` <li><i class="bx bx-chevron-right"></i> <a href="author.html">Autor</a></li> <li><i class="bx bx-chevron-right"></i> <a href="Dokumentacija.pdf">Dokumentacija</a></li>`
      let flinks = document.querySelector('.flinks>ul');
      for (let index = 0; index < Links2.length; index++) {
        flinks.innerHTML += `<li><i class="bx bx-chevron-right"></i>${Links2[index]}</a></li>`
      }
    }
  }

    // Sekcija o autoru sajta
    function renderAuthor(){
      if($('.author').length){
        let Opis=[
          `Zovem se Miloš Dešić, živim u Srbiji i trenutno pohađam visoku ICT školu na smeru internet tehnologije. 
          Težim ka tome da steknem što više znanja u svim oblastima programiranja kako bih ispunio svoj cilj a to je da postanem full-stack developer.
          `
        ];
  
        var Divautor= $('.author-inner');
        var divslike =document.createElement('div');
        divslike.classList.add('col-lg-6','col-sm-12','d-flex','justify-content-center');
        divslike.innerHTML=`<img class="img-fluid w-50  " src="assets/img/autor.jpg" alt="Author picture"/>`
        Divautor.append(divslike);
        var divopis =document.createElement('div');
        divopis.classList.add('col-lg-5','col-sm-12');
        divopis.innerHTML=`<p>${Opis}</p>`
        Divautor.append(divopis);
      }
    }

  $('#portfolio-flters>li').click(function () {
    $("#portfolio-flters>li").removeClass('filter-active');
    $(this).addClass('filter-active');

    let filter = $(this).attr('data-filter');
    if (filter == 'all') {
      $('.portfolio-item').show('1000');
    }
    else {
      $('.portfolio-item').hide('1000');
      $('.' + filter).show('1000');
    }
  });

  $(document).scroll(function () {
    if ($(document).scrollTop() > 200) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500);
    return false;
  });

  // Funkcija za prikaz forme
  function renderForm() {
    let podaciForme = [];
    let Dugme = $('#dugme');
    let Subscribe = $('#Subscribe');

    Dugme.on('click', function () {
      let ime = $('#name');
      let email = $('#email');
      let subject = $('#subject');
      let message = $('#message');
      let phone = $('#phone');

      let imeRe = /^[A-zČĆŠĐŽšđčćž]+(\s[A-zČĆŠĐŽšđčćž]+){1,3}$/; //   /^[A-Z]\w{1,9}$/;  Regularni izraz za ime   
      let emailRe = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // Regularni izraz za mejl
      let subjectRe = /^\w{2,15}(\s\w{2,20})*$/; // Regularni izraz za temu
      let phoneRe = /^(06)([0-9]){6,9}$/; // Regularni za telefon

      if (ime.val() == '') {
        ime.val("");
        ime.next().text('Polje za ime i prezime ne sme biti prazno.');
      }
      else if (!imeRe.test(ime.val())) {
        ime.val("");
        ime.next().text('Primer: Ime Prezime');
      } else {
        podaciForme.push(ime.val());
        ime.val("");
        ime.next().text('');
      }
      if (email.val() == '') {
        email.val("");
        email.next().text('Polje za mail ne sme biti prazno.');
      }
      else if (!emailRe.test(email.val())) {
        email.val("");
        email.next().text('Primer: mail@gmail.com');
      } else {
        podaciForme.push(email.val());
        email.val("");
        email.next().text('');
      }
      if (subject.val() == '') {
        subject.val("");
        subject.next().text('Polje za temu ne sme biti prazno.');
      }
      else if (!subjectRe.test(subject.val())) {
        subject.val("");
        subject.next().text('Primer: Naziv teme');
      } else {
        podaciForme.push(subject.val());
        subject.val("");
        subject.next().text('');
      }
      if (phone.val() == '') {
        phone.val("");
        phone.next().text('Polje za telefon ne sme biti prazno.');
      } else if (!phoneRe.test(phone.val())) {
        phone.val("");
        phone.next().text('Primer: 0612345678 ');
      } else {
        podaciForme.push(phone.val());
        phone.val("");
        phone.next().text('');
      }
      if (message.val() == '') {
        message.val("");
        message.next().text('Molimo napišite poruku za nas.');
      }
      else {
        podaciForme.push(message.val());
        message.val("");
        message.next().text('');
      }
    });
    Subscribe.on('click', function () {
      let email = $('#smail');
      let emailRe = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // Regularni izraz za mejl

      if (email.val() == '') {
        email.val("");
        email.next().text('Polje za mail ne sme biti prazno.');
      } else if (!emailRe.test(email.val())) {
        email.val("");
        email.next().text('Primer: mail@gmail.com');
      } else {
        podaciForme.push(email.val());
        email.val("");
        email.next().text('');
      }
    })
  }

  $('.tlt').textillate({
    loop: true,
    in: {
      effect: 'tada',
      delayScale: 2.0,
      delay: 50,
      sync: false,
      shuffle: false,
      reverse: false,
      callback: function () { }
    },

    out: {
      effect: 'flash',
      delayScale: 1.5,
      delay: 200,
      sync: false,
      shuffle: false,
      reverse: false,
      callback: function () { }
    }
  });
  $('.weltext').textillate({
    in: {
      effect: 'flash',
      delayScale: 1.5,
      delay: 50,
      sync: false,
      shuffle: false,
      reverse: false,
      callback: function () { }
    }
  });
});