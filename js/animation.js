const aboutTitle = document.querySelector(".about-title");
const aboutImg = document.querySelector(".about-img");
const aboutTxt01 = document.querySelector(".about-text-01");
const aboutTxt02 = document.querySelector(".about-text-02");
const aboutTxt03 = document.querySelector(".about-text-03");
const aboutTxt04 = document.querySelector(".about-text-04");
const aboutBgImg = document.querySelector(".about-bg-img");
const businessTitle = document.querySelector('.business-title');
const business01Content = document.querySelector('.business-01-content');
const business01Img = document.querySelector('.business-01-img'); 
const business02Content = document.querySelector('.business-02-content');
const business02Img = document.querySelector('.business-02-img'); 
const business03Content = document.querySelector('.business-03-content');
const business03Img = document.querySelector('.business-03-img'); 


$(window).on("scroll", function () {
  var y = window.pageYOffset;
  console.log(y);
  if (y > 500) {
    aboutTitle.classList.add("showup");
    aboutTitle.classList.remove("noshow");
    aboutImg.classList.add("showup");
    aboutImg.classList.remove("noshow");
  } else {
    aboutTitle.classList.add("noshow");
    aboutTitle.classList.remove("showup");
    aboutImg.classList.add("noshow");
    aboutImg.classList.remove("showup");
  }

  if (y > 790) {
    aboutTxt01.classList.add("showup");
    aboutTxt01.classList.remove("noshow");
  } else {
    aboutTxt01.classList.add("noshow");
    aboutTxt01.classList.remove("showup");
  }
  if (y > 1010) {
    aboutTxt02.classList.add("showup");
    aboutTxt02.classList.remove("noshow");
  } else {
    aboutTxt02.classList.add("noshow");
    aboutTxt02.classList.remove("showup");
  }

  if (y > 1150) {
    aboutTxt03.classList.add("showup");
    aboutTxt03.classList.remove("noshow");
  } else {
    aboutTxt03.classList.add("noshow");
    aboutTxt03.classList.remove("showup");
  }

  if (y > 1380) {
    aboutTxt04.classList.add("showup");
    aboutTxt04.classList.remove("noshow");
  } else {
    aboutTxt04.classList.add("noshow");
    aboutTxt04.classList.remove("showup");
  }

  if (y > 1300) {
    aboutBgImg.classList.add("showleft");
    aboutBgImg.classList.remove("noshow");
  } else {
    aboutBgImg.classList.add("noshow");
    aboutBgImg.classList.remove("showleft");
  }

  if (y > 1600) {
    businessTitle.classList.add('showup');
    businessTitle.classList.remove('noshow');
  } else {
    businessTitle.classList.add('noshow');
    businessTitle.classList.remove('showup');
  }

  if (y > 1700) {
    business01Content.classList.add('showleft');
    business01Content.classList.remove('noshow');
  } else {
    business01Content.classList.add('noshow');
    business01Content.classList.remove('showleft');
  }
});
