let app = document.getElementById('app');
let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .pauseFor(1000)
    .typeString('Claudia Dimas')
    .pauseFor(300)
    .deleteChars(10)

    //   .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
    //   .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
    .pauseFor(1000)
    .start();



let frase = document.getElementById('frase');
let typewriterFrase = new Typewriter(frase, {
    loop: true,
    delay: 75,
});

typewriterFrase
    .pauseFor(1000)
    .typeString('Ingeniera Mecatrónica muy resiliente, honesta, respetuosa, muy proactiva, con capacidad de crear y encontrar soluciones a cualquier problema, y ​​una persona que considera fundamental el trabajo en equipo y la buena convivencia.Aprendo de una manera rápida y estoy muy motivada para superarme día a día.')
    .pauseFor(300)
    .deleteChars(10)

    //   .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
    //   .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
    .pauseFor(1000)
    .start();