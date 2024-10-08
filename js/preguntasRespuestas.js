const preguntasYRespuestas = [
  {
    id: 0,
    pregunta: "¿Qué equipo gano la Copa Mundial del 2022?",
    opcion1: "Argentina",
    opcion2: "Brasil",
    opcion3: "Francia",
    opcion4: "España",
    respuestaCorrecta: "Argentina",
  },
  {
    id: 1,
    pregunta: "¿Cuál es la capital de Francia?",
    opcion1: "Londres",
    opcion2: "Madrid",
    opcion3: "París",
    opcion4: "Roma",
    respuestaCorrecta: "París",
  },
  {
    id: 2,
    pregunta: "¿Cuál es el planeta más cercano al sol?",
    opcion1: "Venus",
    opcion2: "Marte",
    opcion3: "Mercurio",
    opcion4: "Júpiter",
    respuestaCorrecta: "Mercurio",
  },
  {
    id: 3,
    pregunta: "¿Quién escribió 'Cien años de soledad'?",
    opcion1: "Gabriel García Márquez",
    opcion2: "Mario Vargas Llosa",
    opcion3: "Jorge Luis Borges",
    opcion4: "Julio Cortázar",
    respuestaCorrecta: "Gabriel García Márquez",
  },
  {
    id: 4,
    pregunta: "¿En qué año llegó el hombre a la luna?",
    opcion1: "1965",
    opcion2: "1969",
    opcion3: "1972",
    opcion4: "1968",
    respuestaCorrecta: "1969",
  },
  {
    id: 5,
    pregunta: "¿Cuál es el océano más grande del mundo?",
    opcion1: "Atlántico",
    opcion2: "Índico",
    opcion3: "Ártico",
    opcion4: "Pacífico",
    respuestaCorrecta: "Pacífico",
  },
  {
    id: 6,
    pregunta: "¿Cuál es el elemento químico con el símbolo 'O'?",
    opcion1: "Oxígeno",
    opcion2: "Oro",
    opcion3: "Osmio",
    opcion4: "Óxido",
    respuestaCorrecta: "Oxígeno",
  },
  {
    id: 7,
    pregunta: "¿Qué artista pintó la Mona Lisa?",
    opcion1: "Vincent van Gogh",
    opcion2: "Leonardo da Vinci",
    opcion3: "Pablo Picasso",
    opcion4: "Claude Monet",
    respuestaCorrecta: "Leonardo da Vinci",
  },
  {
    id: 8,
    pregunta: "¿Cuál es el idioma más hablado en el mundo?",
    opcion1: "Inglés",
    opcion2: "Chino Mandarín",
    opcion3: "Español",
    opcion4: "Hindú",
    respuestaCorrecta: "Chino Mandarín",
  },
  {
    id: 9,
    pregunta: "¿En qué continente se encuentra el desierto del Sahara?",
    opcion1: "Asia",
    opcion2: "América",
    opcion3: "África",
    opcion4: "Europa",
    respuestaCorrecta: "África",
  },
  {
    id: 10,
    pregunta: "¿Cuál es el número pi aproximado a dos decimales?",
    opcion1: "3.12",
    opcion2: "3.14",
    opcion3: "3.16",
    opcion4: "3.18",
    respuestaCorrecta: "3.14",
  },
  {
    id: 11,
    pregunta: "¿Cuál es el animal terrestre más rápido?",
    opcion1: "Guepardo",
    opcion2: "León",
    opcion3: "Tigre",
    opcion4: "Antílope",
    respuestaCorrecta: "Guepardo",
  },
  {
    id: 12,
    pregunta: "¿Cuál es el número atómico del helio?",
    opcion1: "1",
    opcion2: "2",
    opcion3: "3",
    opcion4: "4",
    respuestaCorrecta: "2",
  },
  {
    id: 13,
    pregunta: "¿Quién es el autor de 'Don Quijote de la Mancha'?",
    opcion1: "Miguel de Cervantes",
    opcion2: "Federico García Lorca",
    opcion3: "Luis de Góngora",
    opcion4: "Lope de Vega",
    respuestaCorrecta: "Miguel de Cervantes",
  },
  {
    id: 14,
    pregunta: "¿Qué país ganó la Copa Mundial de Fútbol en 2018?",
    opcion1: "Brasil",
    opcion2: "Alemania",
    opcion3: "Francia",
    opcion4: "Argentina",
    respuestaCorrecta: "Francia",
  },
  {
    id: 15,
    pregunta: "¿Cuál es la fórmula química del agua?",
    opcion1: "H2O",
    opcion2: "CO2",
    opcion3: "O2",
    opcion4: "H2SO4",
    respuestaCorrecta: "H2O",
  },
  {
    id: 16,
    pregunta: "¿En qué año comenzó la Primera Guerra Mundial?",
    opcion1: "1912",
    opcion2: "1914",
    opcion3: "1916",
    opcion4: "1918",
    respuestaCorrecta: "1914",
  },
  {
    id: 17,
    pregunta: "¿Cuál es el idioma oficial de Brasil?",
    opcion1: "Español",
    opcion2: "Portugués",
    opcion3: "Francés",
    opcion4: "Italiano",
    respuestaCorrecta: "Portugués",
  },
  {
    id: 18,
    pregunta: "¿Quién pintó el techo de la Capilla Sixtina?",
    opcion1: "Rafael",
    opcion2: "Miguel Ángel",
    opcion3: "Donatello",
    opcion4: "Leonardo da Vinci",
    respuestaCorrecta: "Miguel Ángel",
  },
  {
    id: 19,
    pregunta: "¿Cuál es la moneda oficial de Japón?",
    opcion1: "Yuan",
    opcion2: "Won",
    opcion3: "Yen",
    opcion4: "Dólar",
    respuestaCorrecta: "Yen",
  },
  {
    id: 20,
    pregunta:
      "¿Qué gas se encuentra en mayor proporción en la atmósfera terrestre?",
    opcion1: "Oxígeno",
    opcion2: "Hidrógeno",
    opcion3: "Nitrógeno",
    opcion4: "Dióxido de carbono",
    respuestaCorrecta: "Nitrógeno",
  },
  {
    id: 21,
    pregunta: "¿Cuál es el río más largo del mundo?",
    opcion1: "Amazonas",
    opcion2: "Nilo",
    opcion3: "Yangtsé",
    opcion4: "Misisipi",
    respuestaCorrecta: "Amazonas",
  },
  {
    id: 22,
    pregunta: "¿Qué elemento tiene el símbolo 'Fe' en la tabla periódica?",
    opcion1: "Fósforo",
    opcion2: "Hierro",
    opcion3: "Flúor",
    opcion4: "Francio",
    respuestaCorrecta: "Hierro",
  },
  {
    id: 23,
    pregunta: "¿En qué año cayó el muro de Berlín?",
    opcion1: "1987",
    opcion2: "1988",
    opcion3: "1989",
    opcion4: "1990",
    respuestaCorrecta: "1989",
  },
  {
    id: 24,
    pregunta: "¿Cuál es el país más grande del mundo por superficie?",
    opcion1: "Estados Unidos",
    opcion2: "China",
    opcion3: "Rusia",
    opcion4: "Canadá",
    respuestaCorrecta: "Rusia",
  },
  {
    id: 25,
    pregunta: "¿Quién compuso la Novena Sinfonía?",
    opcion1: "Johann Sebastian Bach",
    opcion2: "Ludwig van Beethoven",
    opcion3: "Wolfgang Amadeus Mozart",
    opcion4: "Franz Schubert",
    respuestaCorrecta: "Ludwig van Beethoven",
  },
  {
    id: 26,
    pregunta: "¿En qué continente se encuentra el monte Kilimanjaro?",
    opcion1: "Asia",
    opcion2: "África",
    opcion3: "América del Sur",
    opcion4: "Europa",
    respuestaCorrecta: "África",
  },
  {
    id: 27,
    pregunta: "¿Cuál es la capital de Australia?",
    opcion1: "Sídney",
    opcion2: "Melbourne",
    opcion3: "Canberra",
    opcion4: "Perth",
    respuestaCorrecta: "Canberra",
  },
  {
    id: 28,
    pregunta:
      "¿Qué inventor es conocido por la patente de la bombilla incandescente?",
    opcion1: "Nikola Tesla",
    opcion2: "Alexander Graham Bell",
    opcion3: "Thomas Edison",
    opcion4: "George Westinghouse",
    respuestaCorrecta: "Thomas Edison",
  },
  {
    id: 29,
    pregunta: "¿Cuál es la distancia media de la Tierra al Sol?",
    opcion1: "150,000 km",
    opcion2: "1,500,000 km",
    opcion3: "150,000,000 km",
    opcion4: "15,000,000 km",
    respuestaCorrecta: "150,000,000 km",
  },
  {
    id: 30,
    pregunta: "¿Qué océano baña las costas de California?",
    opcion1: "Atlántico",
    opcion2: "Pacífico",
    opcion3: "Índico",
    opcion4: "Ártico",
    respuestaCorrecta: "Pacífico",
  },
  {
    id: 31,
    pregunta: "¿Qué instrumento se utiliza para medir la presión atmosférica?",
    opcion1: "Termómetro",
    opcion2: "Barómetro",
    opcion3: "Anemómetro",
    opcion4: "Higrómetro",
    respuestaCorrecta: "Barómetro",
  },
  {
    id: 32,
    pregunta:
      "¿Qué planeta del sistema solar tiene un día más largo que un año?",
    opcion1: "Mercurio",
    opcion2: "Venus",
    opcion3: "Marte",
    opcion4: "Júpiter",
    respuestaCorrecta: "Venus",
  },
  {
    id: 33,
    pregunta: "¿En qué país se encuentra la Torre Eiffel?",
    opcion1: "Italia",
    opcion2: "España",
    opcion3: "Francia",
    opcion4: "Reino Unido",
    respuestaCorrecta: "Francia",
  },
  {
    id: 34,
    pregunta: "¿Qué pintor es famoso por su obra 'La Noche Estrellada'?",
    opcion1: "Claude Monet",
    opcion2: "Vincent van Gogh",
    opcion3: "Pablo Picasso",
    opcion4: "Salvador Dalí",
    respuestaCorrecta: "Vincent van Gogh",
  },
  {
    id: 35,
    pregunta: "¿Cuál es el sistema operativo más utilizado en el mundo?",
    opcion1: "Linux",
    opcion2: "macOS",
    opcion3: "Windows",
    opcion4: "Android",
    respuestaCorrecta: "Windows",
  },
  {
    id: 36,
    pregunta: "¿Qué país es conocido como la 'Tierra del Sol Naciente'?",
    opcion1: "Corea del Sur",
    opcion2: "China",
    opcion3: "Japón",
    opcion4: "Tailandia",
    respuestaCorrecta: "Japón",
  },
  {
    id: 37,
    pregunta: "¿Cuál es el nombre del satélite natural de la Tierra?",
    opcion1: "Luna",
    opcion2: "Europa",
    opcion3: "Titán",
    opcion4: "Io",
    respuestaCorrecta: "Luna",
  },
  {
    id: 38,
    pregunta: "¿Qué tipo de animal es la ballena?",
    opcion1: "Pez",
    opcion2: "Ave",
    opcion3: "Mamífero",
    opcion4: "Reptil",
    respuestaCorrecta: "Mamífero",
  },
  {
    id: 39,
    pregunta: "¿Qué país tiene la mayor cantidad de habitantes del mundo?",
    opcion1: "India",
    opcion2: "Estados Unidos",
    opcion3: "China",
    opcion4: "Rusia",
    respuestaCorrecta: "China",
  },
  {
    id: 40,
    pregunta: "¿Qué es el Bosón de Higgs?",
    opcion1: "Una partícula subatómica",
    opcion2: "Un tipo de estrella",
    opcion3: "Una galaxia",
    opcion4: "Una teoría matemática",
    respuestaCorrecta: "Una partícula subatómica",
  },
  {
    id: 41,
    pregunta:
      "¿En qué año se fundó la Organización de las Naciones Unidas (ONU)?",
    opcion1: "1945",
    opcion2: "1939",
    opcion3: "1950",
    opcion4: "1960",
    respuestaCorrecta: "1945",
  },
  {
    id: 42,
    pregunta: "¿Qué país se encuentra en dos continentes?",
    opcion1: "Egipto",
    opcion2: "Turquía",
    opcion3: "Australia",
    opcion4: "Brasil",
    respuestaCorrecta: "Turquía",
  },
  {
    id: 43,
    pregunta: "¿Cuál es la montaña más alta del mundo?",
    opcion1: "Monte Everest",
    opcion2: "K2",
    opcion3: "Kangchenjunga",
    opcion4: "Monte McKinley",
    respuestaCorrecta: "Monte Everest",
  },
  {
    id: 44,
    pregunta: "¿Qué es un año luz?",
    opcion1:
      "El tiempo que tarda la Tierra en dar una vuelta alrededor del Sol",
    opcion2: "La distancia que recorre la luz en un año",
    opcion3: "Una medida de tiempo",
    opcion4: "Una estrella",
    respuestaCorrecta: "La distancia que recorre la luz en un año",
  },
  {
    id: 45,
    pregunta: "¿Qué país inventó el papel?",
    opcion1: "Grecia",
    opcion2: "India",
    opcion3: "Egipto",
    opcion4: "China",
    respuestaCorrecta: "China",
  },
  {
    id: 46,
    pregunta: "¿Cuál es la capital de Canadá?",
    opcion1: "Toronto",
    opcion2: "Montreal",
    opcion3: "Vancouver",
    opcion4: "Ottawa",
    respuestaCorrecta: "Ottawa",
  },
  {
    id: 47,
    pregunta: "¿Qué metal es conocido como el 'metal de transición'?",
    opcion1: "Hierro",
    opcion2: "Cobre",
    opcion3: "Zinc",
    opcion4: "Titanio",
    respuestaCorrecta: "Titanio",
  },
  {
    id: 48,
    pregunta: "¿En qué año se lanzó el primer iPhone?",
    opcion1: "2005",
    opcion2: "2006",
    opcion3: "2007",
    opcion4: "2008",
    respuestaCorrecta: "2007",
  },
  {
    id: 49,
    pregunta: "¿Cuál es el país más pequeño del mundo?",
    opcion1: "Monaco",
    opcion2: "Nauru",
    opcion3: "San Marino",
    opcion4: "Ciudad del Vaticano",
    respuestaCorrecta: "Ciudad del Vaticano",
  },
  {
    id: 50,
    pregunta: "¿Qué científico propuso la teoría de la relatividad?",
    opcion1: "Isaac Newton",
    opcion2: "Galileo Galilei",
    opcion3: "Albert Einstein",
    opcion4: "Nikola Tesla",
    respuestaCorrecta: "Albert Einstein",
  },

  {
    id: 51,
    pregunta: "¿Qué país es conocido por el tango?",
    opcion1: "Brasil",
    opcion2: "Argentina",
    opcion3: "Chile",
    opcion4: "Uruguay",
    respuestaCorrecta: "Argentina",
  },
  {
    id: 52,
    pregunta: "¿Quién descubrió la penicilina?",
    opcion1: "Louis Pasteur",
    opcion2: "Alexander Fleming",
    opcion3: "Marie Curie",
    opcion4: "Robert Koch",
    respuestaCorrecta: "Alexander Fleming",
  },
  {
    id: 53,
    pregunta:
      "¿Cuál es el lenguaje de programación más utilizado para desarrollo web?",
    opcion1: "Python",
    opcion2: "JavaScript",
    opcion3: "C++",
    opcion4: "Ruby",
    respuestaCorrecta: "JavaScript",
  },
  {
    id: 54,
    pregunta: "¿Qué gas es necesario para la respiración humana?",
    opcion1: "Hidrógeno",
    opcion2: "Nitrógeno",
    opcion3: "Oxígeno",
    opcion4: "Helio",
    respuestaCorrecta: "Oxígeno",
  },
  {
    id: 55,
    pregunta: "¿En qué continente se encuentra la selva amazónica?",
    opcion1: "Asia",
    opcion2: "África",
    opcion3: "América del Sur",
    opcion4: "Oceanía",
    respuestaCorrecta: "América del Sur",
  },
  {
    id: 56,
    pregunta: "¿Quién es el autor de la teoría de la evolución?",
    opcion1: "Gregor Mendel",
    opcion2: "Charles Darwin",
    opcion3: "Isaac Newton",
    opcion4: "Galileo Galilei",
    respuestaCorrecta: "Charles Darwin",
  },
  {
    id: 57,
    pregunta: "¿Cuál es el metal más ligero?",
    opcion1: "Hierro",
    opcion2: "Oro",
    opcion3: "Litio",
    opcion4: "Plata",
    respuestaCorrecta: "Litio",
  },
  {
    id: 58,
    pregunta: "¿En qué año se inventó la imprenta?",
    opcion1: "1440",
    opcion2: "1450",
    opcion3: "1460",
    opcion4: "1470",
    respuestaCorrecta: "1450",
  },
  {
    id: 59,
    pregunta: "¿Qué instrumento mide la humedad?",
    opcion1: "Termómetro",
    opcion2: "Higrómetro",
    opcion3: "Barómetro",
    opcion4: "Anemómetro",
    respuestaCorrecta: "Higrómetro",
  },
  {
    id: 60,
    pregunta: "¿Cuál es el animal más grande del mundo?",
    opcion1: "Elefante africano",
    opcion2: "Ballena azul",
    opcion3: "Tiburón blanco",
    opcion4: "Rinoceronte",
    respuestaCorrecta: "Ballena azul",
  },
  {
    id: 61,
    pregunta:
      "¿Qué artista es famoso por su serie de pinturas 'Los Girasoles'?",
    opcion1: "Claude Monet",
    opcion2: "Vincent van Gogh",
    opcion3: "Pablo Picasso",
    opcion4: "Salvador Dalí",
    respuestaCorrecta: "Vincent van Gogh",
  },
  {
    id: 62,
    pregunta: "¿Cuál es el continente con más países?",
    opcion1: "Asia",
    opcion2: "África",
    opcion3: "Europa",
    opcion4: "América del Sur",
    respuestaCorrecta: "África",
  },
  {
    id: 63,
    pregunta: "¿En qué año comenzó la Segunda Guerra Mundial?",
    opcion1: "1935",
    opcion2: "1939",
    opcion3: "1941",
    opcion4: "1945",
    respuestaCorrecta: "1939",
  },
  {
    id: 64,
    pregunta: "¿Cuál es la moneda de México?",
    opcion1: "Dólar",
    opcion2: "Peso",
    opcion3: "Real",
    opcion4: "Colón",
    respuestaCorrecta: "Peso",
  },
  {
    id: 65,
    pregunta: "¿Qué planeta es conocido como el 'planeta rojo'?",
    opcion1: "Venus",
    opcion2: "Marte",
    opcion3: "Júpiter",
    opcion4: "Saturno",
    respuestaCorrecta: "Marte",
  },
  {
    id: 66,
    pregunta: "¿Cuál es el país más poblado de África?",
    opcion1: "Sudáfrica",
    opcion2: "Egipto",
    opcion3: "Nigeria",
    opcion4: "Etiopía",
    respuestaCorrecta: "Nigeria",
  },
  {
    id: 67,
    pregunta: "¿Qué significa la sigla 'www' en una dirección web?",
    opcion1: "World Wide Web",
    opcion2: "World Web Wide",
    opcion3: "Web Wide World",
    opcion4: "Wide World Web",
    respuestaCorrecta: "World Wide Web",
  },
  {
    id: 68,
    pregunta: "¿Quién es el autor de 'Romeo y Julieta'?",
    opcion1: "Christopher Marlowe",
    opcion2: "William Shakespeare",
    opcion3: "John Milton",
    opcion4: "Geoffrey Chaucer",
    respuestaCorrecta: "William Shakespeare",
  },
  {
    id: 69,
    pregunta: "¿Qué animal puede regenerar partes de su cuerpo?",
    opcion1: "Serpiente",
    opcion2: "Estrella de mar",
    opcion3: "Pez",
    opcion4: "Perro",
    respuestaCorrecta: "Estrella de mar",
  },
  {
    id: 70,
    pregunta: "¿Cuál es el hueso más largo del cuerpo humano?",
    opcion1: "Fémur",
    opcion2: "Húmero",
    opcion3: "Tibia",
    opcion4: "Radio",
    respuestaCorrecta: "Fémur",
  },
  {
    id: 71,
    pregunta: "¿Cuál es el software más utilizado para hojas de cálculo?",
    opcion1: "Microsoft Word",
    opcion2: "Microsoft Excel",
    opcion3: "Google Docs",
    opcion4: "Notepad",
    respuestaCorrecta: "Microsoft Excel",
  },
  {
    id: 72,
    pregunta: "¿Qué artista es conocido por el cuadro 'La Última Cena'?",
    opcion1: "Michelangelo",
    opcion2: "Leonardo da Vinci",
    opcion3: "Raphael",
    opcion4: "Donatello",
    respuestaCorrecta: "Leonardo da Vinci",
  },
  {
    id: 73,
    pregunta: "¿Cuál es la sustancia más dura conocida?",
    opcion1: "Oro",
    opcion2: "Diamante",
    opcion3: "Platino",
    opcion4: "Acero",
    respuestaCorrecta: "Diamante",
  },
  {
    id: 74,
    pregunta: "¿Cuál es la bebida nacional de Japón?",
    opcion1: "Tequila",
    opcion2: "Vodka",
    opcion3: "Sake",
    opcion4: "Whisky",
    respuestaCorrecta: "Sake",
  },
  {
    id: 75,
    pregunta: "¿Cuál es el lenguaje más hablado en Brasil?",
    opcion1: "Español",
    opcion2: "Portugués",
    opcion3: "Inglés",
    opcion4: "Francés",
    respuestaCorrecta: "Portugués",
  },
  {
    id: 76,
    pregunta: "¿En qué país se encuentran las ruinas de Machu Picchu?",
    opcion1: "Bolivia",
    opcion2: "Ecuador",
    opcion3: "Perú",
    opcion4: "Chile",
    respuestaCorrecta: "Perú",
  },
  {
    id: 77,
    pregunta: "¿Qué músculo es el más fuerte del cuerpo humano?",
    opcion1: "Cuádriceps",
    opcion2: "Tríceps",
    opcion3: "Glúteo",
    opcion4: "Masetero",
    respuestaCorrecta: "Masetero",
  },
  {
    id: 78,
    pregunta: "¿Cuál es el océano más pequeño del mundo?",
    opcion1: "Océano Atlántico",
    opcion2: "Océano Índico",
    opcion3: "Océano Ártico",
    opcion4: "Océano Pacífico",
    respuestaCorrecta: "Océano Ártico",
  },
  {
    id: 79,
    pregunta: "¿Qué planeta es conocido por sus anillos?",
    opcion1: "Urano",
    opcion2: "Saturno",
    opcion3: "Neptuno",
    opcion4: "Júpiter",
    respuestaCorrecta: "Saturno",
  },
  {
    id: 80,
    pregunta: "¿En qué país se encuentra el Taj Mahal?",
    opcion1: "Pakistán",
    opcion2: "India",
    opcion3: "Irán",
    opcion4: "Afganistán",
    respuestaCorrecta: "India",
  },
  {
    id: 81,
    pregunta: "¿Cuál es el deporte más popular en el mundo?",
    opcion1: "Baloncesto",
    opcion2: "Cricket",
    opcion3: "Fútbol",
    opcion4: "Tenis",
    respuestaCorrecta: "Fútbol",
  },
  {
    id: 82,
    pregunta: "¿Qué material es conocido como el 'oro negro'?",
    opcion1: "Carbón",
    opcion2: "Petróleo",
    opcion3: "Diamante",
    opcion4: "Uranio",
    respuestaCorrecta: "Petróleo",
  },
  {
    id: 83,
    pregunta: "¿Qué ciudad es conocida como 'La Gran Manzana'?",
    opcion1: "Los Ángeles",
    opcion2: "Chicago",
    opcion3: "Nueva York",
    opcion4: "San Francisco",
    respuestaCorrecta: "Nueva York",
  },
  {
    id: 84,
    pregunta: "¿Qué proteína se encuentra en el cabello y uñas?",
    opcion1: "Colágeno",
    opcion2: "Queratina",
    opcion3: "Elastina",
    opcion4: "Mioglobina",
    respuestaCorrecta: "Queratina",
  },
  {
    id: 85,
    pregunta: "¿Quién pintó la 'Capilla Sixtina'?",
    opcion1: "Raphael",
    opcion2: "Michelangelo",
    opcion3: "Leonardo da Vinci",
    opcion4: "Donatello",
    respuestaCorrecta: "Michelangelo",
  },
  {
    id: 86,
    pregunta: "¿Cuál es la velocidad de la luz?",
    opcion1: "100,000 km/s",
    opcion2: "200,000 km/s",
    opcion3: "300,000 km/s",
    opcion4: "400,000 km/s",
    respuestaCorrecta: "300,000 km/s",
  },
  {
    id: 87,
    pregunta: "¿Qué significa 'PIB'?",
    opcion1: "Producto Interno Bruto",
    opcion2: "Producto Industrial Básico",
    opcion3: "Producto Inverso Bruto",
    opcion4: "Plan Interno Básico",
    respuestaCorrecta: "Producto Interno Bruto",
  },
  {
    id: 88,
    pregunta: "¿Qué país inventó el sushi?",
    opcion1: "China",
    opcion2: "Japón",
    opcion3: "Corea del Sur",
    opcion4: "Tailandia",
    respuestaCorrecta: "Japón",
  },
  {
    id: 89,
    pregunta: "¿Qué es un agujero negro?",
    opcion1: "Un cráter en la Tierra",
    opcion2: "Una estrella colapsada con alta gravedad",
    opcion3: "Un planeta oscuro",
    opcion4: "Una galaxia",
    respuestaCorrecta: "Una estrella colapsada con alta gravedad",
  },
  {
    id: 90,
    pregunta: "¿Cuál es la capital de España?",
    opcion1: "Barcelona",
    opcion2: "Madrid",
    opcion3: "Valencia",
    opcion4: "Sevilla",
    respuestaCorrecta: "Madrid",
  },
  {
    id: 91,
    pregunta: "¿Qué país es conocido por su cerveza Guinness?",
    opcion1: "Escocia",
    opcion2: "Inglaterra",
    opcion3: "Irlanda",
    opcion4: "Australia",
    respuestaCorrecta: "Irlanda",
  },
  {
    id: 92,
    pregunta: "¿Quién escribió 'Cien años de soledad'?",
    opcion1: "Jorge Luis Borges",
    opcion2: "Pablo Neruda",
    opcion3: "Gabriel García Márquez",
    opcion4: "Mario Vargas Llosa",
    respuestaCorrecta: "Gabriel García Márquez",
  },
  {
    id: 93,
    pregunta: "¿Qué país tiene forma de bota?",
    opcion1: "España",
    opcion2: "Portugal",
    opcion3: "Italia",
    opcion4: "Grecia",
    respuestaCorrecta: "Italia",
  },
  {
    id: 94,
    pregunta: "¿Qué metal es líquido a temperatura ambiente?",
    opcion1: "Hierro",
    opcion2: "Mercurio",
    opcion3: "Aluminio",
    opcion4: "Plomo",
    respuestaCorrecta: "Mercurio",
  },
  {
    id: 95,
    pregunta: "¿Cuál es el idioma más hablado en el mundo?",
    opcion1: "Inglés",
    opcion2: "Español",
    opcion3: "Chino mandarín",
    opcion4: "Hindú",
    respuestaCorrecta: "Chino mandarín",
  },
  {
    id: 96,
    pregunta: "¿Qué país se asocia con los tulipanes?",
    opcion1: "Alemania",
    opcion2: "Bélgica",
    opcion3: "Países Bajos",
    opcion4: "Suiza",
    respuestaCorrecta: "Países Bajos",
  },
  {
    id: 97,
    pregunta: "¿Qué es un quark?",
    opcion1: "Un tipo de planeta",
    opcion2: "Una partícula subatómica",
    opcion3: "Una estrella",
    opcion4: "Un agujero negro",
    respuestaCorrecta: "Una partícula subatómica",
  },
  {
    id: 98,
    pregunta: "¿Cuál es el número atómico del hidrógeno?",
    opcion1: "1",
    opcion2: "2",
    opcion3: "3",
    opcion4: "4",
    respuestaCorrecta: "1",
  },
  {
    id: 99,
    pregunta: "¿Cuál es el idioma oficial de Egipto?",
    opcion1: "Árabe",
    opcion2: "Inglés",
    opcion3: "Francés",
    opcion4: "Hebreo",
    respuestaCorrecta: "Árabe",
  },
  {
    id: 100,
    pregunta: "¿Qué país inventó los fuegos artificiales?",
    opcion1: "Japón",
    opcion2: "India",
    opcion3: "China",
    opcion4: "Italia",
    respuestaCorrecta: "China",
  },
];
