"use stric";

window.addEventListener("load", function () {
  // Animacion del menu
  let btnMenu = document.querySelector("#btn-menu");
  let menu = document.querySelector(".container");
  let containerMenu = document.querySelector(".menu");
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
  /*
    btnMenu.addEventListener("click", function(){
        document.querySelector("#btn-menu i").classList.toggle("fa-times");
          if(activador){
              menu.style.right = "0";
              menu.style.transition = "0.6s"
              activador = false;
          }else{
              activador = false;
               menu.style.right = "0";
              menu.style.transition = "0.6s"
              activador = true;
    
          }
    
    
        });

*/

  // Intercalar la clase Active

  let enlaces = document.querySelectorAll(".list li a");

  enlaces.forEach((element) => {
    element.addEventListener("click", (event) => {
      enlaces.forEach((link) => {
        link.classList.remove("active");
      });
      event.target.classList.add("active");
    });
  });

  // Efecto Scroll

  // Variable = prevScrollPos

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
      containerMenu.style.top = "-60px";
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

  // Boton de Mas informacion

  let masInformacion = document.querySelector("#mas-informacion");
  masInformacion.addEventListener("click", () => {
    document.body.scrollTop = 3800;
    document.documentElement.scrollTop = 3800;
  });

  // Slider-Proyects

  const slider = document.querySelector("#slider");
  let sliderSection = document.querySelectorAll(".slider_section");
  let sliderSectionLast = sliderSection[sliderSection.length - 1];

  const btnRight = document.querySelector("#btn-right");
  const btnLeft = document.querySelector("#btn-left");

  slider.insertAdjacentElement("afterbegin", sliderSectionLast);

  function nextRight() {
    let sliderSectionFirts = document.querySelectorAll(".slider_section")[0];

    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
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

  /*setInterval(function(){
            nextRight();
        },5000);*/

  // Acerca de
  /*
    let acercademi = document.querySelectorAll("#acerca-de");
    acercademi.addEventListener("click", () =>{
        document.body.scrollTop =500;
        document.documentElement.scrollTop = 500;

    })
    
    /*acercademi.forEach((element) => {
        element.addEventListener("click", (event) => {
            enlaces.forEach((link) =>{
             link.classList.remove("active");
            
            document.body.scrollTop =500;
            document.documentElement.scrollTop = 500;

            });
            event.target.classList.add("active");
            
        });
        
    });*/

  // Proyectos
  /*
    let proyectos = document.querySelectorAll(".list li a");

    proyectos.forEach((element) => {
        element.addEventListener("click", (event) => {
            enlaces.forEach((link) =>{

             link.classList.remove("active");
           
            
            });

            if(proyectos >= 500){
                document.body.scrollTop = 500;
                document.documentElement.scrollTop = 500;
             }else{
                document.body.scrollTop =1300;
                document.documentElement.scrollTop = 1300;
             }
            event.target.classList.add("active");
            
        });
        
    });

    // Contacto
    /*
    let contacto = document.querySelectorAll(".list li a");
    contacto.forEach((element) => {
        element.addEventListener("click", (event) => {
            enlaces.forEach((link) =>{
             link.classList.remove("active");
             

            });
            event.target.classList.add("active");
           
        });
        
    });

    // JQuery
    /*
    $('.ancla').on('click', function(e){
        e.preventDefault();
        var strAncla = '#' + $(this).data('ancla');
        $('html,body').animate({scrollTop: $(strAncla).offset().top}, 2000);
        });*/
});
