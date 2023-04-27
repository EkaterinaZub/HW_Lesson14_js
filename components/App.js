import { head } from "/components/Head.js"
import { header } from "/components/Header.js"
import { nav } from "/components/Nav.js"
import { main } from "/components/Main.js"
import { footer } from "./Footer.js"
// import { footer } from "/components/Footer.js"
import { createCards } from "/components/CreateCards.js"
import { openbasket } from "/components/Cart.js"
import { router } from"/components/route/router.js"
import { CreateProduct } from "/components/Product.js"



export class App {
    constructor() {
        this.element

        this.init()


    }

    create() {
        const app = document.createElement('div');
        app.className = 'app';
        this.element = app;
        this.element.append(header, nav, main, footer)
       


    }

    render() {
        document.body.prepend(this.element)
      

    }

    async init() {

        await this.getData()

        head.createHeadAttributs()
        this.create();
        this.render();
        // this.getcards()
        createCards.getcards()
        // createCards.calcPrice()
        openbasket()
        CreateProduct ()
        router()
    }

    async getData() {
        if (!localStorage.getItem('data')) {
            await

                fetch('https://fakestoreapi.com/products')
                    .then(response => response.json())
                    .then(data => {
                        this.data = data
                        localStorage.setItem('data', JSON.stringify(this.data))

                        console.log(this.data)
                    })
        }

    }

    setCookie(name, value, options = {}) {

        options = {
            path: '/',

            ...options
        };

        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }

        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }

        document.cookie = updatedCookie;
    }

  


}

let app = new App()
// export const app1 = new App.init()
