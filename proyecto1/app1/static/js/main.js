
//Botón para arriba//
window.onscroll= function(){
    if(document.documentElement.scrollTop> 100){
        document.querySelector('.go-top-container') .classList.add('show');
    }else{
        document.querySelector('.go-top-container') .classList.remove('show');
    }
}
document.querySelector('.go-top-container') .addEventListener('click', () =>{
    window.scrollTo({ 
        top: 0,
        behavior: 'smooth'
    });

});

//Modo Oscuro//
const botonTema = document.getElementById("tema-btn");

botonTema.addEventListener("click", function () {

    document.body.classList.toggle("modo-oscuro");

    if (document.body.classList.contains("modo-oscuro")) {
        botonTema.textContent = "🌙";
    } else {
        botonTema.textContent = "☀️";
    }

});

//Validación de Formulario//

const formConsulta = document.getElementById("formConsulta");
const alertaForm = document.getElementById("alertaForm");

if (formConsulta) {
    formConsulta.addEventListener("submit", function (e) {
        e.preventDefault(); 

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        alertaForm.classList.remove("d-none", "alert-danger", "alert-success");

        if (nombre === "" || email === "" || mensaje === "") {
            alertaForm.textContent = "Por favor, completa todos los campos.";
            alertaForm.classList.add("alert-danger");
            return;
        }

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            alertaForm.textContent = "Por favor, ingresa un correo electrónico válido.";
            alertaForm.classList.add("alert-danger");
            return;
        }

        alertaForm.textContent = "¡Mensaje enviado con éxito! Gracias por tu opinión. 💛";
        alertaForm.classList.add("alert-success");
        
        formConsulta.reset();
    });
}