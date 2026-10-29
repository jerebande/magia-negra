/* =====================================================================
   CARTA DE MAGIA NEGRA: acá se cambian productos, precios y textos.
   - Precios: el número de cada línea (ej. 50 = S/50).
   - Pizza nueva: copiar una línea de PIZZAS, y agregar su foto en
     img/pizzas/<nombre>.jpg y su descripción en inglés en PIZZA_EN.
   - EXTRA (al final): textos opcionales que aparecen solos cuando se
     completan (origen del nombre, info de Flamenco, proceso de las pizzas).
   ===================================================================== */
const SALSA=" y salsa Pizzagiola.";
const FY={calzone:70,'quattro-staggioni':86,sorrento:88,posilipo:86,italiana:76,marechiare:55,vesuvio:80,'la-rabiatta':82,margarita:86,'magia-negra':80,hawaiana:50,'al-ajo':50};
const PIZZA_EXT={hawaiana:'png','al-ajo':'png'}; /* foco vertical de cada foto (%) */
const PIZZAS=[
 ["Magia Negra","Mozzarella, champignones, pimentones, aceitunas, tocinos, chorizos"+SALSA,50,"Familiar","magia-negra"],
 ["Margarita","Mozzarella, pimentones, tomates, cebollas"+SALSA,50,"Familiar","margarita"],
 ["La Rabiatta","Mozzarella, chilis, cebollas, tomates"+SALSA,50,"Familiar","la-rabiatta"],
 ["Vesuvio","Mozzarella, champignones, espárragos"+SALSA,50,"Familiar","vesuvio"],
 ["Marechiare","Mozzarella, jamón"+SALSA,50,"Familiar","marechiare"],
 ["Hawaiana","Mozzarella, jamón, piñas, duraznos"+SALSA,50,"Familiar","hawaiana"],
 ["Italiana","Mozzarella, jamón, tocinos"+SALSA,50,"Familiar","italiana"],
 ["Posilipo","Mozzarella, jamón, champignones, chorizos"+SALSA,50,"Familiar","posilipo"],
 ["Sorrento","Mozzarella, champignones, espárragos, albahaca (en olio de oliva)"+SALSA,50,"Familiar","sorrento"],
 ["Quattro Staggioni","Cuatro estaciones en una: Magia Negra, Margarita, Hawaiana y Sorrento.",60,"Familiar","quattro-staggioni"],
 ["Calzone","Mozzarella, jamón, chorizos, tocinos"+SALSA,60,"Familiar","calzone"],
 ["Al Ajo","Crema de ajo con especias y queso mozzarella.",35,"Mediana","al-ajo"]
];
const DRINKS={
 "Cócteles y clásicos":[["Pisco Sour",30],["Chilcano de Pisco",20],["Algarrobina",30],["Mojito",30],["Caipirinha",30],["Piña Colada",30],["Tom Collins",30],["Blue Lady",30],["Laguna Azul","(Blue Lagoon)",30],["Campari Orange",35],["Martini Soda",30],["Negroni","Martini + Campari + Gin",35],["Spinetta Jade","Anís + menta",25],["Medias de Seda",25],["Long Island",35],["Tequila Sunrise",30],["Destornillador","Vodka Absolut + naranja + granadina",30]],
 "Destilados y combinados":[["Whisky Jack Daniels",40],["Whisky Black Label",40],["Fernet",30],["Cuba Libre Appleton Especial Rubio",20],["Cuba Libre Appleton Especial Estate",30],["Flor de Caña 5 años",25],["Flor de Caña 7 años",35],["Ima Animosky",20],["Vodka Tónic","Absolut",30],["Gin & Gin",30],["Gin Tónic","Burnetts",30],["Shot de Pisco",10],["Shot de Tequila",20],["Anís shot",15]],
 "Cerveza, vino y más":[["Cerveza artesanal Flamenco","330 ml · producción de Magia Negra",25],["Cerveza Cusqueña","310 ml",12],["Sangría jarra",65],["Vinos",75],["Té Macho","Té + pisco + miel + limón, caliente",20],["Limonada","1 litro",20],["Mates","Té, anís, manzanilla, hierba luisa, coca",5],["Gaseosas y agua",5]]
};

/* ----- Inglés (versión EN del sitio) ----- */
const SIZE_EN={"Familiar":"Family","Mediana":"Medium"};
const PIZZA_EN={
 "Magia Negra":"Mozzarella, mushrooms, bell peppers, olives, bacon and chorizo, with Pizzagiola sauce.",
 "Margarita":"Mozzarella, bell peppers, tomatoes and onions, with Pizzagiola sauce.",
 "La Rabiatta":"Mozzarella, chili peppers, onions and tomatoes, with Pizzagiola sauce.",
 "Vesuvio":"Mozzarella, mushrooms and asparagus, with Pizzagiola sauce.",
 "Marechiare":"Mozzarella and ham, with Pizzagiola sauce.",
 "Hawaiana":"Mozzarella, ham, pineapple and peaches, with Pizzagiola sauce.",
 "Italiana":"Mozzarella, ham and bacon, with Pizzagiola sauce.",
 "Posilipo":"Mozzarella, ham, mushrooms and chorizo, with Pizzagiola sauce.",
 "Sorrento":"Mozzarella, mushrooms, asparagus and basil (in olive oil), with Pizzagiola sauce.",
 "Quattro Staggioni":"Four seasons in one: Magia Negra, Margarita, Hawaiana and Sorrento.",
 "Calzone":"Mozzarella, ham, chorizo and bacon, with Pizzagiola sauce.",
 "Al Ajo":"Garlic cream with spices and mozzarella cheese."
};
const GRP_EN={"Cócteles y clásicos":"Cocktails & classics","Destilados y combinados":"Spirits & mixed drinks","Cerveza, vino y más":"Beer, wine & more"};
const ITEM_EN={"Cerveza artesanal Flamenco":"Flamenco craft beer","Cerveza Cusqueña":"Cusqueña beer","Sangría jarra":"Sangria pitcher","Vinos":"Wines","Limonada":"Lemonade","Mates":"Herbal teas","Gaseosas y agua":"Soft drinks & water","Destornillador":"Screwdriver","Shot de Pisco":"Pisco shot","Shot de Tequila":"Tequila shot","Anís shot":"Anise shot","Vodka Tónic":"Vodka Tonic","Gin Tónic":"Gin Tonic","Flor de Caña 5 años":"Flor de Caña 5 years","Flor de Caña 7 años":"Flor de Caña 7 years"};
const SUB_EN={"Anís + menta":"Anise + mint","Vodka Absolut + naranja + granadina":"Absolut vodka + orange + grenadine","330 ml · producción de Magia Negra":"330 ml · brewed by Magia Negra","Té + pisco + miel + limón, caliente":"Tea + pisco + honey + lemon, served hot","1 litro":"1 liter","Té, anís, manzanilla, hierba luisa, coca":"Tea, anise, chamomile, lemongrass, coca leaf"};

/* ----- Textos opcionales: se muestran solo si tienen contenido ----- */
const EXTRA={
 nombre:{es:"",en:""},    /* origen del nombre, va en Nuestra historia */
 flamenco:{es:"",en:""},  /* historia y variedades de Flamenco */
 proceso:{es:"",en:""}    /* insumos y proceso de las pizzas, va en la carta */
};

/* =====================================================================
   DATOS DE CONTACTO Y HORARIOS: se cambian acá y se actualiza todo el
   sitio (botones, mapa, pie de página, "Abierto ahora" y Google).
   Horarios: days = días (0 domingo, 1 lunes ... 6 sábado), hora 24 h.
   ===================================================================== */
const INFO={
 whatsapp:"51941278997",                 /* solo números, con código de país */
 phoneLabel:"+51 941 278 997",           /* como se ve en pantalla */
 waText:{es:"Hola Magia Negra, quisiera hacer un pedido",en:"Hi Magia Negra, I'd like to place an order"},
 instagram:"https://www.instagram.com/tabernamagianegra",
 facebook:"https://www.facebook.com/tabernamagianegra",
 address:{es:"Jirón Bellido N° 349, Ayacucho, Perú",en:"Jirón Bellido N° 349, Ayacucho, Peru"},
 mapQuery:"Jirón Bellido 349 Ayacucho Perú",
 hours:[
  {es:"Restaurante, lunes a jueves",en:"Restaurant, Monday to Thursday",days:[1,2,3,4],open:"18:00",close:"23:00"},
  {es:"Restaurante, viernes y sábado",en:"Restaurant, Friday and Saturday",days:[5,6],open:"18:00",close:"23:30"},
  {es:"Zona bar, lunes a viernes",en:"Bar area, Monday to Friday",days:[1,2,3,4,5],open:"18:00",close:"24:00"}
 ]
};

/* =====================================================================
   PRECIOS: con false no se muestra ningún precio en la página y se invita
   a consultar por WhatsApp (el delivery varía según la distancia).
   Con true vuelven los precios que figuran en PIZZAS y DRINKS.
   ===================================================================== */
const SHOW_PRICES=false;
INFO.waPriceText={es:"Hola Magia Negra, quisiera consultar precios y delivery",en:"Hi Magia Negra, I'd like to ask about prices and delivery"};