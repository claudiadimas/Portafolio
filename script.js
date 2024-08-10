let app = document.getElementById('app');
let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .pauseFor(1000)
    .typeString('Habilidades')
    .pauseFor(300)
    .deleteChars(10)

    //   .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
    //   .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
    .pauseFor(1000)
    .start();


    let app2 = document.getElementById('app2');
    let typewriter2 = new Typewriter(app2, {
        loop: true,
        delay: 75,
    });
    
    typewriter2
        .pauseFor(1000)
        .typeString('Proyectos')
        .pauseFor(300)
        .deleteChars(10)
    
        //   .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
        //   .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
        .pauseFor(1000)
        .start();


        let app3 = document.getElementById('app3');
        let typewriter3 = new Typewriter(app3, {
            loop: true,
            delay: 75,
        });
        
        typewriter3
            .pauseFor(1000)
            .typeString('Testimonios')
            .pauseFor(300)
            .deleteChars(10)
        
            //   .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
            //   .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
            .pauseFor(1000)
            .start();