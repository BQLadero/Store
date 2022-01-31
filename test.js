'use strict';
/*Importación de todas clases creadas anteriormente*/
import { Product, Television, PS5, Router } from './products.js';
import { Category } from './category.js';
import { Store } from './store.js';
import { Coords } from './coords.js';
import { StoreHouse } from './storeHouse.js';
let coordsDef = new Coords(-4555, 255);
//Productos creados para poder ser utilizados en los test que se puedan, para no tener que repetir su creacion
let product1 = new Router(1, "Tenda Pack AC10U Smart Dual Band Gigabit", 32.97, "WAN", "RJ-45", "Exteno", "350g");
let product2 = new PS5(2, "Sony PlayStation 5 Edición Digital Reacondicionado", 378, "x86-64-AMD Ryzen 'Zen 2'",
    "10,3 TFLOPS de potencia", "16 GB GDDR6", "SSD de 825 GB");
let product3 = new Television(3, "LG 43UP75006LF 43'' LED UltraHD 4K HDR10 Pro", 368.78, "4K UHD",
    "Tipo Blu: Directo", "4K Escalado", "20W (10W por canal)");
let product = new Product(0, "Producto 1", 5, "Producto creado para probarlo", 14, ["img.jpg", "img2.jpg"]);

function testProducts() {
    console.log("------------ TESTEO DE LA CLASE PRODUCT --------------");
    console.log("ID del producto -> " + product.serialNumber);
    product.serialNumber = 6;
    console.log("ID del producto modificado -> " + product.serialNumber);
    console.log("Nombre del producto -> " + product.name);
    product.name = "TV Cambiada";
    console.log("Nombre del producto modificado -> " + product.name);
    console.log("Precio del producto -> " + product.price);
    product.price = 299.99;
    console.log("Precio del producto modificado -> " + product.price);
    console.log("Descripción del producto -> " + product.description);
    product.description = "Producto descriptivo";
    console.log("Descripción del producto modificado -> " + product.description);
    console.log("Tax del producto -> " + product.tax);
    product.tax = 7;
    console.log("Tax del producto modificado -> " + product.tax);
    console.log("Imágenes del producto -> " + product.images2);
    product.images2 = ["img2.jpg"];
    console.log("Imágenes del producto modificado -> " + product.images2);
    try {//Error en el constuctor
        let product4 = Product();
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor serialNumber
        let product4 = new Product(-4, "Producto 1", 5, "Producto creado para probarlo", 14, ["img.jpg", "img2.jpg"]);
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor nombre
        let product4 = new Product(0, "", 5, "Producto creado para probarlo", 14, ["img.jpg", "img2.jpg"]);
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor price
        let product4 = new Product(0, "Producto 1", -5, "Producto creado para probarlo", 14, ["img.jpg", "img2.jpg"]);
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor description
        let product4 = new Product(0, "Producto 1", 5, "", 14, ["img.jpg", "img2.jpg"]);
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor tax
        let product4 = new Product(0, "Producto 1", 5, "Producto creado para probarlo", -14, ["img.jpg", "img2.jpg"]);
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor images
        let product4 = new Product(0, "Producto 1", 5, "Producto creado para probarlo", -14, "");
    } catch (error) {
        console.error(error);
    }
    try {//Error en el setter serialNumber
        product.serialNumber = "";
    } catch (error) {
        console.error(error);
    }
    try {//Error en el setter name
        product.name = "";
    } catch (error) {
        console.error(error);
    }
    try {//Error en el setter price
        product.price = "";
    } catch (error) {
        console.error(error);
    }
    try {//Error en el setter tax
        product.tax = -5;
    } catch (error) {
        console.error(error);
    }
    try {//Error en el setter images
        product.images2 = -5;
    } catch (error) {
        console.error(error);
    }
    console.log("------------ TESTEO DE LA CLASE PRODUCT | TV --------------");
    console.log("ID del producto -> " + product3.serialNumber);
    product3.serialNumber = 4;
    console.log("ID del producto modificado -> " + product3.serialNumber);
    console.log("Nombre del producto -> " + product3.name);
    product3.name = "TV Cambiada";
    console.log("Nombre del producto modificado -> " + product3.name);
    console.log("Precio del producto -> " + product3.price);
    product3.price = 299.99;
    console.log("Precio del producto modificado -> " + product3.price);
    console.log("Display del producto -> " + product3.display);
    product3.display = "Full HD";
    console.log("Display del producto modificado -> " + product3.display);
    console.log("Plataforma del producto -> " + product3.plataforma);
    product3.plataforma = "Tipo Blu: Indirecto";
    console.log("Plataforma del producto modificado -> " + product3.plataforma);
    console.log("Video del producto -> " + product3.video);
    product3.video = "Full HD Escalado";
    console.log("Video del producto modificado -> " + product3.video);
    console.log("Audio del producto -> " + product3.audio2);
    product3.audio2 = "15W (7W por canal)";
    console.log("Audio del producto modificado -> " + product3.audio2);
    console.log(product3.toString());
    console.log("------------ TESTEO ERRORES DE LA CLASE PRODUCT | TV --------------");
    try {//Error en el constuctor
        let product4 = Television();
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor serialNumber
        let product4 = new Television(-1, "LG 43UP75006LF 43'' LED UltraHD 4K HDR10 Pro", 368.78, "4K UHD",
            "Tipo Blu: Directo", "4K Escalado", "20W (10W por canal)");
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor nombre
        let product4 = new Television(4, "", 368.78, "4K UHD",
            "Tipo Blu: Directo", "4K Escalado", "20W (10W por canal)");
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor price
        let product4 = new Television(4, "LG 43UP75006LF 43'' LED UltraHD 4K HDR10 Pro", -1, "4K UHD",
            "Tipo Blu: Directo", "4K Escalado", "20W (10W por canal)");
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor display
        let product4 = new Television(4, "LG 43UP75006LF 43'' LED UltraHD 4K HDR10 Pro", 368.78, "",
            "Tipo Blu: Directo", "4K Escalado", "20W (10W por canal)");
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor plataforma
        let product4 = new Television(4, "LG 43UP75006LF 43'' LED UltraHD 4K HDR10 Pro", 368.78, "4K UHD",
            "", "4K Escalado", "20W (10W por canal)");
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor video
        let product4 = new Television(4, "LG 43UP75006LF 43'' LED UltraHD 4K HDR10 Pro", 368.78, "4K UHD",
            "Tipo Blu: Directo", "", "20W (10W por canal)");
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor audio
        let product4 = new Television(4, "LG 43UP75006LF 43'' LED UltraHD 4K HDR10 Pro", 368.78, "4K UHD",
            "Tipo Blu: Directo", "4K Escalado", "");
    } catch (error) {
        console.error(error);
    }
    try {//Error en el setter display
        product3.display = "";
    } catch (error) {
        console.error(error);
    }
    try {//Error en el setter plataforma
        product3.plataforma = "";
    } catch (error) {
        console.error(error);
    }
    try {//Error en el setter video
        product3.video = "";
    } catch (error) {
        console.error(error);
    }
    try {//Error en el setter audio
        product3.audio2 = "";
    } catch (error) {
        console.error(error);
    }

    console.log("------------ TESTEO DE LA CLASE PRODUCT | PS5 --------------");
    console.log("ID del producto -> " + product2.serialNumber);
    product2.serialNumber = 5;
    console.log("ID del producto modificado -> " + product2.serialNumber);
    console.log("Nombre del producto -> " + product2.name);
    product2.name = "TV Cambiada";
    console.log("Nombre del producto modificado -> " + product2.name);
    console.log("Precio del producto -> " + product2.price);
    product2.price = 399.99;
    console.log("Precio del producto modificado -> " + product2.price);
    console.log("CPU del producto -> " + product2.cpu);
    product2.cpu = "AMD";
    console.log("CPU del producto modificado -> " + product2.cpu);
    console.log("GPU del producto -> " + product2.gpu);
    product2.gpu = "14,3 TFLOPS de potencia";
    console.log("GPU del producto modificado -> " + product2.gpu);
    console.log("Memoria del producto -> " + product2.memoria);
    product2.memoria = "32GB GDDR5";
    console.log("Memoria del producto modificado -> " + product3.memoria);
    console.log("Disco del producto -> " + product2.disco2);
    product2.disco2 = "SSD de 1 TB";
    console.log("Disco del producto modificado -> " + product2.disco2);
    console.log(product2.toString());
    console.log("------------ TESTEO ERRORES DE LA CLASE PRODUCT | PS5 --------------");
    try {//Error en el constuctor
        let product4 = PS5();
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor serialNumber
        let product4 = new PS5(-1, "Sony PlayStation 5 Edición Digital Reacondicionado", 378, "x86-64-AMD Ryzen 'Zen 2'",
            "10,3 TFLOPS de potencia", "16 GB GDDR6", "SSD de 825 GB");
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor nombre
        let product4 = new PS5(4, "", 378, "x86-64-AMD Ryzen 'Zen 2'", "10,3 TFLOPS de potencia", "16 GB GDDR6",
            "SSD de 825 GB");
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor price
        let product4 = new PS5(4, "Sony PlayStation 5 Edición Digital Reacondicionado", -5, "x86-64-AMD Ryzen 'Zen 2'",
            "10,3 TFLOPS de potencia", "16 GB GDDR6", "SSD de 825 GB");
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor cpu
        let product4 = new PS5(4, "Sony PlayStation 5 Edición Digital Reacondicionado", 378, "",
            "10,3 TFLOPS de potencia", "16 GB GDDR6", "SSD de 825 GB");
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor gpu
        let product4 = new PS5(4, "Sony PlayStation 5 Edición Digital Reacondicionado", 378, "x86-64-AMD Ryzen 'Zen 2'",
            "", "4K Escalado", "SSD de 825 GB");
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor memoria
        let product4 = new PS5(4, "Sony PlayStation 5 Edición Digital Reacondicionado", 378, "x86-64-AMD Ryzen 'Zen 2'",
            "10,3 TFLOPS de potencia", "", "16 GB GDDR6");
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor disco
        let product4 = new PS5(4, "Sony PlayStation 5 Edición Digital Reacondicionado", 368.78, "4K UHD",
            "Tipo Blu: Directo", "4K Escalado", "");
    } catch (error) {
        console.error(error);
    }
    try {//Error en el setter cpu
        product2.cpu = "";
    } catch (error) {
        console.error(error);
    }
    try {//Error en el setter gpu
        product2.gpu = "";
    } catch (error) {
        console.error(error);
    }
    try {//Error en el setter memoria
        product2.memoria = "";
    } catch (error) {
        console.error(error);
    }
    try {//Error en el setter disco
        product2.disco2 = "";
    } catch (error) {
        console.error(error);
    }

    console.log("------------ TESTEO DE LA CLASE PRODUCT | ROUTER --------------");
    console.log("ID del producto -> " + product1.serialNumber);
    product1.serialNumber = 6;
    console.log("ID del producto modificado -> " + product1.serialNumber);
    console.log("Nombre del producto -> " + product1.name);
    product1.name = "TV Cambiada";
    console.log("Nombre del producto modificado -> " + product1.name);
    console.log("Precio del producto -> " + product1.price);
    product1.price = 399.99;
    console.log("Precio del producto modificado -> " + product1.price);
    console.log("Conexión del producto -> " + product1.conexion);
    product1.conexion = "AMD";
    console.log("Conexión del producto modificado -> " + product1.conexion);
    console.log("Puerto del producto -> " + product1.puerto);
    product1.puerto = "14,3 TFLOPS de potencia";
    console.log("Puerto del producto modificado -> " + product1.puerto);
    console.log("Antena del producto -> " + product1.antena);
    product1.antena = "32GB GDDR5";
    console.log("Antena del producto modificado -> " + product1.antena);
    console.log("Peso del producto -> " + product1.peso2);
    product1.peso2 = "SSD de 1 TB";
    console.log("Peso del producto modificado -> " + product1.peso2);
    console.log(product1.toString());
    console.log("------------ TESTEO ERRORES DE LA CLASE PRODUCT | ROUTER --------------");
    try {//Error en el constuctor
        let product4 = Router();
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor serialNumber
        let product4 = new Router(-1, "Tenda Pack AC10U Smart Dual Band Gigabit", 32.97, "WAN", "RJ-45", "Exteno", "350g");
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor nombre
        let product4 = new Router(1, "", 32.97, "WAN", "RJ-45", "Exteno", "350g");
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor price
        let product4 = new Router(1, "Tenda Pack AC10U Smart Dual Band Gigabit", -32.97, "WAN", "RJ-45", "Exteno", "350g");
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor conexion
        let product4 = new Router(1, "Tenda Pack AC10U Smart Dual Band Gigabit", 32.97, "", "RJ-45", "Exteno", "350g");
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor puerto
        let product4 = new Router(1, "Tenda Pack AC10U Smart Dual Band Gigabit", 32.97, "WAN", "", "Exteno", "350g");
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor antena
        let product4 = new Router(1, "Tenda Pack AC10U Smart Dual Band Gigabit", 32.97, "WAN", "RJ-45", "", "350g");
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor peso
        let product4 = new Router(1, "Tenda Pack AC10U Smart Dual Band Gigabit", 32.97, "WAN", "RJ-45", "Exteno", "");
    } catch (error) {
        console.error(error);
    }
    try {//Error en el setter conexion
        product1.conexion = "";
    } catch (error) {
        console.error(error);
    }
    try {//Error en el setter puerto
        product1.puerto = "";
    } catch (error) {
        console.error(error);
    }
    try {//Error en el setter antena
        product1.antena = "";
    } catch (error) {
        console.error(error);
    }
    try {//Error en el setter peso
        product1.peso2 = "";
    } catch (error) {
        console.error(error);
    }
}
testProducts();

let store1 = new Store("185788484A", "La tiendita 1", "C/Toledo, 28, Ciudad Real", 658455141, coordsDef);

function testStore() {
    console.log("------------ TESTEO DE LA CLASE STORE & COORDS --------------");
    console.log("CIF de la tienda -> " + store1.cif);
    store1.cif = "65545184A";
    console.log("CIF de la tienda modificado -> " + store1.cif);
    console.log("Nombre de la tienda -> " + store1.name);
    store1.name = "La tiendita 2";
    console.log("Nombre de la tienda modificado -> " + store1.name);
    console.log("Dirección de la tienda -> " + store1.address);
    store1.address = "C/Calatrava, 33";
    console.log("Dirección de la tienda modificado -> " + store1.address);
    console.log("Teléfono de la tienda -> " + store1.phone);
    store1.phone = 926934514;
    console.log("Teléfono de la tienda modificado -> " + store1.phone);
    console.log("Coordenadas | Latitud de la tienda-> " + store1.coords.latitude);
    console.log("Coordenadas | Longitud de la tienda-> " + store1.coords.longitude);
    store1.coords = coordsDef;
    console.log("Coordenadas | Latitud de la tienda modificado -> " + store1.coords.latitude);
    console.log("Coordenadas | Longitud de la tienda modificado -> " + store1.coords.longitude);
    console.log(store1.toString());

    console.log("------------ TESTEO ERRORES DE LA CLASE STORE & COORDS --------------");
    try {//Error en el constuctor
        let product4 = Store();
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor CIF
        let store2 = new Store("", "La tiendita 1", "C/Toledo, 28, Ciudad Real", 658455141, coordsDef);
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor nombre
        let store2 = new Store("185788484A", "", "C/Toledo, 28, Ciudad Real", 658455141, coordsDef);
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor address
        let store2 = new Store("185788484A", "La tiendita 1", "", 658455141, coordsDef);
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor phone
        let store2 = new Store("185788484A", "La tiendita 1", "C/Toledo, 28, Ciudad Real", 6584141, coordsDef);
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor coords
        let store2 = new Store("185788484A", "La tiendita 1", "C/Toledo, 28, Ciudad Real", 658455141, "");
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor latitude
        let coords2 = new Coords("", 555);
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor longitude
        let coords2 = new Coords(-15555, "");
    } catch (error) {
        console.error(error);
    }
    try {//Error en el setter cif
        store1.cif = "";
    } catch (error) {
        console.error(error);
    }
    try {//Error en el setter name
        store1.name = "";
    } catch (error) {
        console.error(error);
    }
    try {//Error en el setter address
        store1.address = "";
    } catch (error) {
        console.error(error);
    }
    try {//Error en el setter phone
        store1.phone = "";
    } catch (error) {
        console.error(error);
    }
    try {//Error en el setter coords
        store1.coords = product1;
    } catch (error) {
        console.error(error);
    }
    try {//Error en el setter latitude
        coordsDef.latitude = "";
    } catch (error) {
        console.error(error);
    }
    try {//Error en el setter longitude
        coordsDef.longitude = "";
    } catch (error) {
        console.error(error);
    }
}
testStore();
let category1 = new Category("Electrónica", "Categoría destinada a la electrónica");

function testCategory() {
    console.log("------------ TESTEO DE LA CLASE CATEGORY --------------");
    console.log("Título de la categoría -> " + category1.title);
    category1.title = "Cables";
    console.log("Título de la categoría modificado -> " + category1.title);
    console.log("Descripción de la categoría -> " + category1.description);
    category1.description = "Categoría de ejemplo";
    console.log("Descripción de la categoría modificado -> " + category1.description);

    console.log("------------ TESTEO ERRORES DE LA CLASE CATEGORY --------------");
    try {//Error en el constuctor
        let product4 = Category();
    } catch (error) {
        console.error(error);
    }
    try {//Error en el constuctor title
        let category2 = new Category("", "Categoría destinada a la electrónica");
    } catch (error) {
        console.error(error);
    }
    try {//Error en el setter title
        category1.title = "";
    } catch (error) {
        console.error(error);
    }
}
testCategory();

store1 = new Store("185788484A", "La tiendita 1", "C/Toledo, 28, Ciudad Real", 658455141, coordsDef);
category1 = new Category("Electrónica", "Categoría destinada a la electrónica");
product1 = new Router(1, "Tenda Pack AC10U Smart Dual Band Gigabit", 32.97, "WAN", "RJ-45", "Exteno", "350g");
product2 = new PS5(2, "Sony PlayStation 5 Edición Digital Reacondicionado", 378, "x86-64-AMD Ryzen 'Zen 2'",
    "10,3 TFLOPS de potencia", "16 GB GDDR6", "SSD de 825 GB");
product3 = new Television(3, "LG 43UP75006LF 43'' LED UltraHD 4K HDR10 Pro", 368.78, "4K UHD",
    "Tipo Blu: Directo", "4K Escalado", "20W (10W por canal)");
let sth = StoreHouse.getInstance();
function testStoreHouse() {
    console.log("------------ TESTEO DEL SINGLETÓN STORE HOUSE --------------");
    console.log("Nombre del almacen -> " + sth.name);
    sth.name = "El almacen";
    console.log("Nombre del almacen modificado -> " + sth.name);
    console.log("Categoría por defecto -> " + sth.catDefault.title);
    console.log("Longitud una vez añadida la categoria -> " + sth.addCategory(category1));
    let category2 = new Category("Redes", "Categoría destinada a la redes");
    console.log("Longitud una vez añadida la categoria -> " + sth.addCategory(category2));
    console.log("--- CATEGORÍAS AÑADIDAS ---")
    for (let category of sth.categories) {
        console.log(category);
    }

    console.log("Longitud una vez borrada la categoria -> " + sth.removeCategory(category2));
    sth.addCategory(category2);
    console.log("Longitud una vez añadido el producto -> " + sth.addProduct(product1, category1.title));
    console.log("Longitud una vez añadido el producto -> " + sth.addProduct(product2, [category1.title, category2.title]));
    console.log("---- PRODUCTOS AÑADIDOS ---");
    for (let [key, value] of sth.products) {
        console.log(key.name);
    }
    console.log("Longitud una vez eliminado el producto -> " + sth.removeProduct(product2));

    console.log("Longitud una vez añadida la tienda -> " + sth.addShop(store1));
    let store2 = new Store("185788441Z", "La tiendita 2", "C/Calatrava, 28, Toledo", 926864771, coordsDef);
    console.log("Longitud una vez añadida la tienda -> " + sth.addShop(store2));
    console.log("--- TIENDAS AÑADIDAS ---");
    for (let shop of sth.shops) {
        console.log(shop);
    }

    console.log("Longitud una vez eliminada la tienda -> " + sth.removeShop(store2));
    console.log("Nº de productos añadidos a la tienda -> " + sth.addProductInShop(product1, store1, 7));
    console.log("Longitud una vez borrada la categoria -> " + sth.removeCategory(category1));
    console.log("¿Una vez borrada la categoria, qué categoría tiene el producto?");
    console.log("La categoría es -> " + sth.catDefault.title);
    for (let product of sth.getCategoryProducts(sth.catDefault)) {
        console.log(product);
    }

    console.log("Longitud una vez añadida la categoria -> " + sth.addCategory(category1));
    sth.addProduct(product2, [category1.title, category2.title]);
    console.log("Nº de productos añadidos a la tienda -> " + sth.addProductInShop(product2, store1, 2));
    console.log("Stock del producto '" + product1.name + "' en la tienda -> " + sth.addQuantityProductInShop(product1, store1, 2));
    console.log("--- Productos que comparten la misma categoría --- ");
    console.log("La categoría es -> " + category1.title);
    for (let product of sth.getCategoryProducts(category1)) {
        console.log(product);
    }

    console.log("--- Productos que comparten el mismo tipo --- ");
    console.log("El tipo es -> Router");
    let product4 = new Router(4, "Asus RT-N19 Router Wifi N600", 56.05, "WAN", "RJ-45", "Exteno", "295g");
    sth.addProduct(product4, category1.title);
    sth.addProductInShop(product4, store1, 15);
    let hola = sth.getShopProducts(store1, Router);
    console.log(hola.next().value);
    console.log(hola.next().value);
    console.log("¿Se acabó el iterar? " + hola.next().done);

    console.log("------------ TESTEO ERRORES DEL SINGLETÓN STORE HOUSE --------------");
    try {//Error en el setter name
        sth.name = "";
    } catch (error) {
        console.error(error);
    }
    try {//Error en addCategory
        sth.addCategory("");
    } catch (error) {
        console.error(error);
    }
    try {//Error en removeCategory
        sth.removeCategory(Router);
    } catch (error) {
        console.error(error);
    }
    try {//Error en addProduct
        sth.addProduct("", category1);
    } catch (error) {
        console.error(error);
    }
    try {//Error en removeProduct
        sth.removeProduct(category1);
    } catch (error) {
        console.error(error);
    }
    try {//Error en removeProduct
        sth.removeProduct(product3);
    } catch (error) {
        console.error(error);
    }
    try {//Error en addShop
        sth.addShop(category1);
    } catch (error) {
        console.error(error);
    }
    try {//Error en addShop
        sth.addShop(store1);
    } catch (error) {
        console.error(error);
    }
    try {//Error en removeShop
        sth.removeShop(category1);
    } catch (error) {
        console.error(error);
    }
    try {//Error en removeShop
        sth.removeShop(store2);

    } catch (error) {
        console.error(error);
    }
    try {//Error en addProductInShop
        sth.addProductInShop(product3, store1, 4);
    } catch (error) {
        console.error(error);
    }
    try {//Error en addProductInShop
        sth.addProductInShop(product1, store2, 4);
    } catch (error) {
        console.error(error);
    }
    try {//Error en addProductInShop
        sth.addProductInShop(product1, store1, -4);

    } catch (error) {
        console.error(error);
    }
    try {//Error en addQuantityProductInShop
        sth.addQuantityProductInShop(product3, store1, 4);
    } catch (error) {
        console.error(error);
    }
    try {//Error en addQuantityProductInShop
        sth.addQuantityProductInShop(product1, store2, 4);
    } catch (error) {
        console.error(error);
    }
    try {//Error en addQuantityProductInShop
        sth.addQuantityProductInShop(product1, store1, -4);
    } catch (error) {
        console.error(error);
    }
    try {//Error en getShopProducts
        sth.getShopProducts(store2, Router);
    } catch (error) {
        console.error(error);
    }
    try {//Error en getShopProducts
        sth.getShopProducts(store1, "");
    } catch (error) {
        console.error(error);
    }
}

testStoreHouse();