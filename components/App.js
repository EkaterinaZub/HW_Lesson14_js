import { Helpers } from "/components/Head.js"
import { Header } from "/components/Header.js"
import { Nav } from "/components/Nav.js"
import { Main} from "/components/Main.js"
import { Footer} from "/components/Footer.js"

export class App {
    constructor() {
        this.element
    
        this.init()
        
        
    }

    create() {
        const app = document.createElement('div');
        app.className = 'app';
        this.element = app;
        this.element.append(Header.initHeader(), Nav.initNav(), Main.initMain(), Footer.initFooter())
       

    }

    render() {
        document.body.prepend(this.element)
       

    }

    async init() {
        
        await this.getData()

        Helpers.createHeadAttributs()
        this.create();
        this.render();
        this.getcards ()

    }

    async getData() {
        if(!localStorage.getItem('data')) { await

        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                this.data = data
                localStorage.setItem('data', JSON.stringify(this.data))

                console.log(this.data)
            })
        }

    }

    getcards (){
        console.log(this.element)
        
        const local = localStorage.getItem('data')
        const localData = JSON.parse(local)
        console.log(localData, typeof localData)
        localData.forEach(element => {
            console.log(element)

            const card = document.createElement('div')
            card.className = 'card'
            const main = document.querySelector('.main')
              console.log(main)
            main.append(card)

            const imgCard = document.createElement('img')
            imgCard.className = 'img__card'
            imgCard.setAttribute('src', element.image)
            console.log(element.image)
            card.append(imgCard)

            const category = document.createElement('h4')
            category.className = 'category'
            category.innerHTML = element.category

            card.prepend(category)

            const title = document.createElement('span')
            title.className = 'title'
            title.innerHTML =  element.title
            card.append(title)


            const price = document.createElement('span')
            price.className = 'price'
            price.innerHTML = `$ ${element.price}`

            card.append(price)


           
        });
        
       


    } 









}

let app = new App() 
// app. getcards ()