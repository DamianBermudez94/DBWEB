function menu() {
  // Animacion del menu
  let btnMenu = document.querySelector("#btn-menu");
  let menu = document.querySelector(".menu");

  let listMenu = document.querySelector(".list");
  let activador = true;

  btnMenu.addEventListener("click", function () {
    document.querySelector("#btn-menu i").classList.toggle("fa-times");

    if (activador) {
      menu.style.left = "0";
      menu.style.transition = "0.6s";
      activador = false;
    } else {
      activador = false;
      menu.style.left = "-100%";
      menu.style.transition = "0.6s";
      activador = true;
    }
  });

  const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");

        const menuLink = document.querySelector(`.menu a[href="#${id}"]`);

        if (entry.isIntersecting) {
          document.querySelector(".menu a.active").classList.remove("active");
          console.log("soy la entry", entry);
          menuLink.classList.add("active");
        }
      });
    },
    { rootMargin: "-30% 0px -70% 0px" }
  );

  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", () => {
      document.querySelector("#btn-menu i").classList.toggle("fa-times");

      if (activador) {
        menu.style.left = "0";
        menu.style.transition = "0.6s";
        activador = false;
      } else {
        activador = false;
        menu.style.left = "-100%";
        menu.style.transition = "0.6s";
        activador = true;
      }

      //listMenu.classList.remove("menu_opened");
    });

    const hash = menuLink.getAttribute("href");

    const target = document.querySelector(hash);
    if (target) {
      observer.observe(target);
    }
  });
}

// Efecto Scroll
function scrolTop() {
  let containerMenu = document.querySelector(".menu-container");
  // window = accedemos a toda la ventana del navegador
  //pageYOffset = devuelve el valor en pixeles del scroll
  let goTop = document.querySelector(".go-top");
  let prevScrollPos = window.pageYOffset;
  window.onscroll = () => {
    let currenScrolPos = window.pageYOffset;
    // Mostrar y ocultar menu
    if (prevScrollPos > currenScrolPos) {
      containerMenu.style.top = "0";
      containerMenu.style.transition = "0.5s";
    } else {
      containerMenu.style.top = "-80px";
      containerMenu.style.transition = "0.5s";
    }

    prevScrollPos = currenScrolPos;

    // Mostrar y ocultar estilos del menu

    let arriba = window.pageYOffset;

    if (arriba <= 600) {
      containerMenu.style.borderBottom = "none";
      containerMenu.style.boxShadow = "none";
      goTop.style.right = "-100%";
    } else {
      containerMenu.style.borderBottom = "3px solid #ff2e63";
      containerMenu.style.boxShadow = "5px 0 25px rgb(0 ,0 ,0 , 0.6)";
      goTop.style.right = "0";
      goTop.style.transition = "0.6s";
    }
  };

  // Boton de arriba y abajo

  goTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  let verAbajo = document.querySelector("#abajo");
  verAbajo.addEventListener("click", () => {
    document.body.scrollTop = 600;
    document.documentElement.scrollTop = 600;
  });
}

// Slider-Proyects
function slider() {
  const slider = document.querySelector("#slider");
  let sliderSection = document.querySelectorAll(".slider_section");
  let sliderSectionLast = sliderSection[sliderSection.length - 1];

  const btnRight = document.querySelector("#btn-right");
  const btnLeft = document.querySelector("#btn-left");

  slider.insertAdjacentElement("afterbegin", sliderSectionLast);

  function nextRight() {
    let sliderSectionFirts = document.querySelectorAll(".slider_section")[0];

    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.3s";
    setTimeout(function () {
      slider.style.transition = "none";
      slider.insertAdjacentElement("beforeend", sliderSectionFirts);
      slider.style.marginLeft = "-100%";
    }, 500);
  }
  function Prev() {
    let sliderSection = document.querySelectorAll(".slider_section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";

    setTimeout(function () {
      slider.style.transition = "none";
      slider.insertAdjacentElement("afterbegin", sliderSectionLast);
      slider.style.marginLeft = "-100%";
    }, 500);
  }
  btnLeft.addEventListener("click", function () {
    Prev();
  });

  btnRight.addEventListener("click", function () {
    nextRight();
  });

  /*setInterval(function () {
      nextRight();
    }, 5000);*/
}

function main() {
  menu();
  scrolTop();
  slider();
}
main();
