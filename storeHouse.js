'use strict';
import {
    BaseException,
    InvalidAccessConstructorException,
    EmptyValueException,
    InvalidValueException,
    AbstractClassException
} from './exceptions.js';
import { Product, Television, PS5, Router } from './products.js';
import { Category } from './category.js';
import { Store } from './store.js';
import { Coords } from './coords.js';
let coordsDef = new Coords(-15555, 555);
let tiendaDef = new Store("18548484A", "La tiendita 2", "C/Toledo, 28, Ciudad Real", 658455141, coordsDef);

let StoreHouse = (function () {
    let instantiated;

    function init() {
        class StoreHouse {
            #name = "La tiendita";
            #products = new Map();
            #categories = [];
            #shops = new Map();
            #stock = [];
            #catDefault = new Category("Informática", "Productos de electrónica");
            #shopDefault = new Map();

            constructor() {
                if (!new.target) throw new InvalidAccessConstructorException();
            }

            //Dado un product, devuelve la posición de ese product en el carrito o -1 si no lo encontramos.
            get name() {
                return this.#name;
            }
            set name(value) {
                if (!value) throw new EmptyValueException("name");
                this.#name = value;
            }
            get catDefault() {
                return this.#catDefault;
            }
            get shopDefault() {
                this.#shopDefault.set(tiendaDef.cif, []);
                return this.#shopDefault;
            }
            //Devuelve un iterator de los products del carrito
            get products() {
                let nextIndex = 0;
				// referencia para habilitar el closure en el objeto
				let array = this.#products;
				return {
					* [Symbol.iterator](){
						for (let quantity of array){
							yield quantity;
						}
					}
				}            }

            get categories() {
                return this.#categories[Symbol.iterator]();
            }

            //Devuelve un iterator de las cantidades del carrito
            get shops() {
                return this.#shops[Symbol.iterator]();

            }

            addCategory(category) {
                if (!(category)) throw new Error("El objecto Category no es una instacia de category");
                if (this.#categories.indexOf(category.title) >= 0) throw new Error("La categoria ya está introducida");
                this.#categories.push(category.title);
                return this.#categories.length;
            }

            removeCategory(category) {
                if (this.#categories.indexOf(category.title) === -1) throw new Error("La categoria no está introducida");
                let index = this.#categories.indexOf(category.title);
                this.#categories.splice(index, 1);
                let catDefault = this.#catDefault.title;
                this.#products.forEach(function (value, key) {
                    index = value.indexOf(category);
                    if (index !== -1) value.splice(index, 1), value.push(catDefault);
                });
                return this.#categories.length;
            }

            addProduct(product, category) {
                if (!(product instanceof Product)) throw new EmptyValueException("producto");
                let arr = new Array();
                if (!(Array.isArray(category))) { arr.push(category) } else { arr = category };
                if (!this.#products.has(product)) {
                    this.#products.set(product, arr);
                } else {
                    this.#products.forEach(function (value, key) {
                        if (value.indexOf(category) != -1) {
                            value.push(category);
                        }
                    });
                }
                return this.#products.size;
            }

            removeProduct(product) {
                if (!(product instanceof Product)) throw new Error("El objecto Producto no es una instacia de producto");
                if (!this.#products.has(product)) throw new Error("El producto no estaba introducido");
                this.#products.delete(product);
                return this.#products.size;
            }

            addShop(shop) {
                if (!(shop instanceof Store)) throw new Error("El objecto Producto no es una instacia de producto");
                if (this.#shops.has(shop)) throw new Error("La tienda ya esta introducida");
                this.#shops.set(shop.cif, new Map());
                return this.#shops.size;
            }

            removeShop(shop) {
                if (!(shop instanceof Store)) throw new Error("El objecto Producto no es una instacia de producto");
                if (!(this.#shops.has(shop.cif))) throw new Error("La tienda no esta introducida");
                let shopdef = this.#shopDefault;
                this.#shops.forEach(function (value, key) {
                    if (key === shop) {
                        for (let product of value) {
                            let index = shopdef.indexOf(product);
                            if (index != -1) shopdef.push(product);
                        }
                    }
                });
                this.#shopDefault = shopdef;
                this.#shops.delete(shop.cif);
                return this.#shops.size;
            }

            addProductInShop(product, shop, units) {
                if (!(this.#products.has(product))) throw new Error("El producto no existe");
                if (!this.#shops.has(shop.cif)) throw new Error("La tienda no existe");
                if (units <= 0) throw new InvalidValueException("unidad", units);
                let index;
                this.#shops.forEach(function (value, key) {
                    value.set(product, units);
                    index = value.size;
                });
                return index;
            }

            addQuantityProductInShop(product, shop, stock) {
                if (!(this.#products.has(product))) throw new Error("El producto no existe");
                if (!this.#shops.has(shop.cif)) throw new Error("La tienda no existe");
                if (stock <= 0) throw new InvalidValueException("stock", stock);
                let index;
                this.#shops.forEach(function (value, key) {
                    value.forEach(function (unit, prod) {
                        if (prod === product) unit += stock, index = unit, value.set(prod, unit);
                    });
                });
                return index;
            }

            getCategoryProducts(category) {
                if (this.#categories.indexOf(category.title) === -1) throw new Error("La categoria no existe");
                let arrProd = new Array();
                this.#products.forEach(function (value, key) {
                    if (value.indexOf(category.title) >= 0) arrProd.push(key);
                })

                let mapa = new Map();
                this.#shops.forEach(function (value, key) {
                    value.forEach(function (unit, prod) {
                        if (arrProd.indexOf(prod)>=0) mapa.set(prod, unit);
                    });
                });
                return mapa[Symbol.iterator]();
            }

            getShopProducts(shop, type) {
                if (this.#shops.has(shop)) throw new Error("La tienda no existe");
                let mapa = new Map();
                this.#shops.forEach(function (value, key) {
                    value.forEach(function (unit, prod) {
                        if (prod instanceof type) mapa.set(prod, unit);
                    });
                })
                /*return mapa;*/
                return mapa[Symbol.iterator]();
            }
        }
        Object.defineProperty(StoreHouse.prototype, "products", { enumerable: true });
        Object.defineProperty(StoreHouse.prototype, "categories", { enumerable: true });
        Object.defineProperty(StoreHouse.prototype, "shops", { enumerable: true });
        Object.defineProperty(StoreHouse.prototype, "catDefault", { enumerable: true });
        Object.defineProperty(StoreHouse.prototype, "shopDefault", { enumerable: true });
        let sth = new StoreHouse();//Devolvemos el objeto ShoppingCart para que sea una instancia única.
        Object.freeze(sth);
        return sth;
    } //Fin inicialización del Singleton
    return {
        // Devuelve un objeto con el método getInstance
        getInstance: function () {
            if (!instantiated) { //Si la variable instantiated es undefined, priemera ejecución, ejecuta init.
                instantiated = init(); //instantiated contiene el objeto único
            }
            return instantiated; //Si ya está asignado devuelve la asignación.
        }
    };
})();

export { StoreHouse };