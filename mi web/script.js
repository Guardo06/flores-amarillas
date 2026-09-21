/* =====================================
   ELEMENTOS
===================================== */

const botonSorpresa =
    document.getElementById("botonSorpresa");

const botonCarta =
    document.getElementById("botonCarta");

const botonMomentos =
    document.getElementById("botonMomentos");

const botonFinal =
    document.getElementById("botonFinal");


const inicio =
    document.getElementById("inicio");

const sorpresa =
    document.getElementById("sorpresa");

const carta =
    document.getElementById("carta");

const momentos =
    document.getElementById("momentos");

const final =
    document.getElementById("final");


const textoCarta =
    document.getElementById("textoCarta");

const firma =
    document.querySelector(".firma");

const contenedorPetalos =
    document.getElementById("petalos");


let petalosIniciados = false;



/* =====================================
   INICIO → FLORES
===================================== */

botonSorpresa.addEventListener(
    "click",
    function () {

        inicio.classList.remove(
            "activa"
        );

        sorpresa.classList.add(
            "activa"
        );

        iniciarPetalos();

    }
);



/* =====================================
   FLORES → CARTA
===================================== */

botonCarta.addEventListener(
    "click",
    function () {

        sorpresa.classList.remove(
            "activa"
        );

        carta.classList.add(
            "activa"
        );

        escribirCarta();

    }
);



/* =====================================
   ESCRIBIR CARTA
===================================== */

function escribirCarta() {

    const mensaje = `Mi bebé ❤️‍🩹,

Hoy quise hacer algo diferente para ti.

No quería simplemente regalarte unas flores amarillas.
Quería crear algo que tuviera un poquito de mí,
algo que pudieras guardar como un pequeño recuerdo
de todo lo que significas para mí.

Eres una persona demasiado especial para mí.

Y hay algo que quizás no te digo lo suficiente...

Gracias a ti volvió a salir ese niño que llevo dentro.
Ese niño que se ríe por cualquier cosa,
que disfruta los pequeños momentos,
que vuelve a emocionarse,
que puede ser él mismo sin miedo.

Contigo puedo volver a ser ese niño,
puedo jugar, reír, molestar, hacer locuras
y disfrutar cada momento como si fuera algo nuevo.

Y eso es algo que valoro muchísimo de ti.

Gracias por llegar a mi vida,
por hacerme sonreír,
por compartir tus momentos conmigo
y simplemente por ser tú.

Por eso estas flores amarillas
no son solamente flores.

Son un pequeño detalle para recordarte
lo especial que eres para mí.

Espero que cada vez que veas una flor amarilla,
recuerdes que existe alguien que piensa en ti,
que sonríe gracias a ti
y que se siente muy feliz de poder llamarte:

Mi bebé. 🌻❤️

Te quiero muchísimo. ❤️`;


    let indice = 0;


    textoCarta.textContent = "";

    firma.classList.remove(
        "visible"
    );

    botonMomentos.classList.remove(
        "visible"
    );


    const velocidad = 28;


    function escribir() {

        if (
            indice <
            mensaje.length
        ) {

            textoCarta.textContent +=
                mensaje.charAt(indice);

            indice++;

            setTimeout(
                escribir,
                velocidad
            );

        }

        else {

            firma.classList.add(
                "visible"
            );


            setTimeout(
                function () {

                    botonMomentos.classList.add(
                        "visible"
                    );

                },
                1000
            );

        }

    }


    escribir();

}



/* =====================================
   CARTA → TARJETAS
===================================== */

botonMomentos.addEventListener(
    "click",
    function () {

        carta.classList.remove(
            "activa"
        );

        momentos.classList.add(
            "activa"
        );

    }
);



/* =====================================
   TARJETAS → FINAL
===================================== */

botonFinal.addEventListener(
    "click",
    function () {

        momentos.classList.remove(
            "activa"
        );

        final.classList.add(
            "activa"
        );

        explosionFinal();

    }
);



/* =====================================
   PÉTALOS
===================================== */

function iniciarPetalos() {

    if (
        petalosIniciados
    ) {

        return;

    }


    petalosIniciados = true;


    setInterval(
        function () {

            crearPetalo();

        },
        300
    );

}



function crearPetalo() {

    const petalo =
        document.createElement(
            "div"
        );


    petalo.classList.add(
        "petalo"
    );


    const simbolos = [

        "🌼",

        "🌻",

        "❤️‍🩹"

    ];


    petalo.textContent =
        simbolos[
            Math.floor(
                Math.random()
                *
                simbolos.length
            )
        ];


    petalo.style.left =
        Math.random()
        *
        100
        +
        "vw";


    petalo.style.fontSize =
        (
            15
            +
            Math.random()
            *
            20
        )
        +
        "px";


    petalo.style.animationDuration =
        (
            4
            +
            Math.random()
            *
            5
        )
        +
        "s";


    contenedorPetalos.appendChild(
        petalo
    );


    setTimeout(
        function () {

            petalo.remove();

        },
        9000
    );

}



/* =====================================
   EXPLOSIÓN FINAL
===================================== */

function explosionFinal() {

    const simbolos = [

        "❤️",

        "💛",

        "💖",

        "💕",

        "🌻"

    ];


    for (
        let i = 0;
        i < 45;
        i++
    ) {

        const elemento =
            document.createElement(
                "div"
            );


        elemento.classList.add(
            "petalo"
        );


        elemento.textContent =
            simbolos[
                Math.floor(
                    Math.random()
                    *
                    simbolos.length
                )
            ];


        elemento.style.left =
            Math.random()
            *
            100
            +
            "vw";


        elemento.style.fontSize =
            (
                18
                +
                Math.random()
                *
                25
            )
            +
            "px";


        elemento.style.animationDuration =
            (
                3
                +
                Math.random()
                *
                4
            )
            +
            "s";


        contenedorPetalos.appendChild(
            elemento
        );


        setTimeout(
            function () {

                elemento.remove();

            },
            8000
        );

    }

}