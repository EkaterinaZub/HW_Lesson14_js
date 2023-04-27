// import {App} from "/components/App.js"
// import { router } from"/components/route/router.js"
export function CreateProduct() {
    console.log('hello')

    const Acart = document.querySelectorAll('.a__card')
    console.log(Acart)

   Acart.forEach(element=>{

        element.addEventListener('click', function (event) {
        console.log(event)
        event.preventDefault()

        const closest = element.closest('.card')
    console.log(closest)
    console.log(closest.id)

    const product = {
        id: closest.id,
        img: closest.querySelector('.img__card'),
       
        title: closest.querySelector('.title').innerText,
        price: closest.querySelector('.price').innerText
    }
        
        const Acard = document.createElement('div')
        Acard.className = 'card__product'
        Acard.setAttribute('id', product.id)
        const main = document.querySelector('.main')
        main.before(Acard)
        Acard.append(product.img)

        const title = document.createElement('span')
        title.className = 'title__product'
        title.innerHTML = product.title
        Acard.append(title)


        const price = document.createElement('span')
        price.className = 'price__product'
        price.innerHTML = product.price
        Acard.append(price)

      
        if (main.style.display !== 'none'){
            main.style.display = 'none'
           
        console.log(Acard)

        Acard.style.display = 'flex'
        }
            
       
    })
})
}

