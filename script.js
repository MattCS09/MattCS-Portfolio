window.onload = function () {
    toggleLang();
};


function toggleLang() {
    if (document.getElementById('language-toggle').checked) {
        document.documentElement.setAttribute("lang", 'en');
    } 
    else {
        document.documentElement.setAttribute("lang", 'es');
    }
    
    let language = document.documentElement.lang;
    if(language == 'es'){
        document.getElementById("about-me-header").textContent = "Sobre mí";
        document.getElementById("projects-header").textContent = "Proyectos";
        document.getElementById("skills-header").textContent = "Habilidades";
        document.getElementById("contact-header").textContent = "Contacto";

        document.getElementById("about-me-title").textContent = "Sobre mí";
        document.getElementById("about-me-text").textContent = aboutMeTextEs;



        document.getElementById("projects-title").textContent = "Proyectos";

        document.getElementById("rushtaurant-desc").innerHTML = rushtaurantDescEs +"<br><br>Aspectos destacados:";
        document.getElementById("rush-high-1").textContent = "Estructura del juego y manager de escenas";
        document.getElementById("rush-high-2").textContent = "Diseño de escenario y niveles";
        document.getElementById("rush-high-3").textContent = "Diseño e implementación de cinemáticas";
        document.getElementById("rush-high-4").textContent = "Control de calidad y arreglo de bugs en prelanzamiento";


        document.getElementById("deathstation-desc").innerHTML = deathSationDescEs + "<br><br>" + '<a href="https://mattcastucm.github.io/Death-Station-Nightmare-Studio/" target="_blank">¡Juega aquí!</a>' + "<br><br>Aspectos destacados:";
        document.getElementById("death-high-1").textContent = "Sistema de vida";
        document.getElementById("death-high-2").textContent = "Implementación de enemigos y animaciones";
        document.getElementById("death-high-3").textContent = "Diseño e implementación de cinemáticas";
        document.getElementById("death-high-4").textContent = "Diseño y ajustes de la página web";

        document.getElementById("antigravity-desc").innerHTML = antigravityDescEs + "<br><br>" + '<a href="https://proyectos1-fdi-ucm.github.io/c2022-Grupo05/" target="_blank">¡Juega aquí!</a>' + "<br><br>Aspectos destacados:";
        document.getElementById("anti-high-1").textContent = "Movimiento de la cámara";
        document.getElementById("anti-high-2").textContent = "Sistema de vida y energía";
        document.getElementById("anti-high-3").textContent = "Diseño e implementación de niveles";
        document.getElementById("anti-high-4").textContent = "Objetos recogibles";



        document.getElementById("skills-title").textContent = "Habilidades";
        document.getElementById("advanced-tag").textContent = "Avanzado";
        document.getElementById("intermediate-tag").textContent = "Intermedio";
        document.getElementById("basic-tag").textContent = "Básico";
        document.getElementById("programming-title").textContent = "Lenguajes de programación";
        document.getElementById("others-title").textContent = "Otros";
        document.getElementById("languages-title").textContent = "Idiomas";
        document.getElementById("langs-1").textContent = "Español (Nativo)";
        document.getElementById("langs-2").textContent = "Inglés (Avanzado, C2)";
        document.getElementById("langs-3").textContent = "Francés (Intermedio, B1)";

        document.getElementById("contact-title").textContent = "Contáctame";
        document.getElementById("contact-text").innerHTML = "¡Siéntete libre de mandarme un correo electrónico a <a>matt.cs091203@gmail.com</a>!";
    }
    else {
        document.getElementById("about-me-header").textContent = "About me";
        document.getElementById("projects-header").textContent = "Projects";
        document.getElementById("skills-header").textContent = "Skills";
        document.getElementById("contact-header").textContent = "Contact";

        document.getElementById("about-me-title").textContent = "About me";
        document.getElementById("about-me-text").textContent = aboutMeTextEng;



        document.getElementById("projects-title").textContent = "Projects";

        document.getElementById("rushtaurant-desc").innerHTML = rushtaurantDescEng +"<br><br>Highlights:";
        document.getElementById("rush-high-1").textContent = "Game structure and scene manager";
        document.getElementById("rush-high-2").textContent = "Scenario and level design";
        document.getElementById("rush-high-3").textContent = "Cutscene design and implementation";
        document.getElementById("rush-high-4").textContent = "QA and pre-launch bugfixing";


        document.getElementById("deathstation-desc").innerHTML = deathSationDescEng + "<br><br>" + '<a href="https://mattcastucm.github.io/Death-Station-Nightmare-Studio/" target="_blank">Play here!</a>' + "<br><br>Highlights:";
        document.getElementById("death-high-1").textContent = "Health system";
        document.getElementById("death-high-2").textContent = "Enemies and animations implementation";
        document.getElementById("death-high-3").textContent = "Cutscene design and implementation";
        document.getElementById("death-high-4").textContent = "Webpage design and adjustments";

        document.getElementById("antigravity-desc").innerHTML = antigravityDescEng + "<br><br>" + '<a href="https://proyectos1-fdi-ucm.github.io/c2022-Grupo05/" target="_blank">Play here!</a>' + "<br><br>Highlights:";
        document.getElementById("anti-high-1").textContent = "Camera movement";
        document.getElementById("anti-high-2").textContent = "Health and energy system";
        document.getElementById("anti-high-3").textContent = "Level design and implementation";
        document.getElementById("anti-high-4").textContent = "Collectible items";



        document.getElementById("skills-title").textContent = "Skills";
        document.getElementById("advanced-tag").textContent = "Advanced";
        document.getElementById("intermediate-tag").textContent = "Intermediate";
        document.getElementById("basic-tag").textContent = "Basic";
        document.getElementById("programming-title").textContent = "Programming languages";
        document.getElementById("others-title").textContent = "Others";
        document.getElementById("languages-title").textContent = "Languages";
        document.getElementById("langs-1").textContent = "Spanish (Native)";
        document.getElementById("langs-2").textContent = "English (Advanced, C2)";
        document.getElementById("langs-3").textContent = "French (Intermediate, B1)";

        document.getElementById("contact-title").textContent = "Contact me";
        document.getElementById("contact-text").innerHTML = "Feel free to send me an e-mail at  <a>matt.cs091203@gmail.com</a>!";
    }
}


var aboutMeTextEs = "¡Hola! Soy Matt, un estudiante de Desarrollo de Videojuegos de la Universidad Complutense de Madrid. De momento, solo he trabajado en proyectos para la universidad y ahora mismo estoy buscando un lugar en el que hacer mis prácticas en empresas. Aquí podréis encontrar algunos de los proyectos en los que he trabajado, y, si bien soy principalmente programador, también soy diseñador e incluso a veces artista, así que, ¡aseguraos de echarles un vistazo! :]"
var aboutMeTextEng = "Hi! I'm Matt, a Video Game Development student at Universidad Complutense de Madrid. So far, I've only worked at projects for college, and I'm currently looking for a place to do my internships at. Here you'll find some of the projects I've worked at, and while I mainly do programming, I'm also a designer and sometimes even an artist, so make sure to check them out! :]"



var highlightsEs = "Aspectos destacados:";
var highlightsEng = "Highlights:"

var playEs = "¡Juégalo aquí!";
var playEng = "Play here!:"

var rushtaurantDescEs = "Simulador de cocina en 2D con gestión de tiempo y recursos. El jugador tendrá que hacerse cargo de un restaurante, comprando ingredientes y atendiendo a los clientes. Además, también tendrá que lidiar con ladrones, que se colarán en el restaurante para robar la fórmula secreta.";
var rushtaurantDescEng = "2D kitchen simulator with time and resource management. The player will have to manage a restaurant by buying ingredients and serving customers. In addition, the player will also have to deal with thieves, who will break into the restaurant to steal the secret formula."

var deathSationDescEs = "Juego de acción y supervivencia con elementos de terror. Los niveles mezclan combate con pequeños puzles, y el objetivo será llegar al final del mapa antes de que los enemigos te maten"
var deathSationDescEng = "Action and survival game with elements of horror. Levels mix combat and small puzzles, and the objective is to reach the end of the map before the enemies kill you."

var antigravityDescEs = "Juego de plataformas en 2D. El jugador tendrá que obtener la Piedra Antigravitatoria y llevarla a la nave espacial para escapar el planeta. Durante la aventura, el jugador podrá usar la Piedra Antigravitatoria para hacerse paso entre el planeta y combatir la agresiva fauna local.";
var antigravityDescEng = "2D platformer. The player will have to get the Antigravity Stone and bring it to the spaceship to escape the planet. During the journey, the player will be able to use the Antigravity Stone to make their way through the planet and fight off the agressive local fauna.";
