const toggleButton = document.getElementById("boton");
const navWrapper = document.getElementById("nav");

/* 
  cada ves que se haga click en el botón 
  agrega y quita las clases necesarias 
  para que el menú se muestre.
*/
toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("close");
    navWrapper.classList.toggle("show");
  });

  function MostrarEmail(){
    document.getElementById("email").style.display="inline";

  }
 

  function quiteremail(){
    document.getElementById("email").style.display="none";
  }

  
  /* 
    Cuándo se haga click fuera del contenedor de enlaces 
    el menú debe esconderse.
  */
  
  navWrapper.addEventListener("click", e => {
    if (e.target.id === "nav") {
      navWrapper.classList.remove("show");
      toggleButton.classList.remove("close");
    }
  });