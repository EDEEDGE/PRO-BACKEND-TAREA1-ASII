//pruebas javascript

document.querySelectorAll('.menu a').forEach(function(link){
    link.addEventListener('click', function(event){
        alert('¡Has hecho click en ' + link.textContent + '!');
    });
});

document.addEventListener('DOMContentLoaded', function(){
    document.body.style.backgroundColor = "#f0f0f0";
});


document.querySelectorAll('.clase').forEach(function(article){
    article.addEventListener('mouseover', function(){
        const nombreClase = article.querySelector('h3').textContent;

        //actualizar el contenido del div del id del mensaje
        const mensajeDiv = document.getElementById('mensaje-clase');
        mensajeDiv.textContent = 'Estas viendo: ' + nombreClase;
    });
});