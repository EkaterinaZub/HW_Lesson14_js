import {setCookie, getCookie} from "/components/Cookie.js"
// import {getCookie} from "/components/Cookie.js"

class CreateCards {
    constructor() {
       

    }


    getcards() {
        // console.log(this.element)

        const local = localStorage.getItem('data')
        const localData = JSON.parse(local)
        // console.log(localData, typeof localData)
        localData.forEach(element => {
            // console.log(element)

            const card = document.createElement('div')
            card.className = 'card'
            card.setAttribute('id', element.id)
            const main = document.querySelector('.main')
            //   console.log(main)
            main.append(card)

            const ACard = document.createElement('a')
            ACard.className = 'a__card'
            ACard.setAttribute('href', `#/product/${element.id}`)
            // console.log(element.image)
            card.append(ACard)

            const imgCard = document.createElement('img')
            imgCard.className = 'img__card'
            imgCard.setAttribute('src', element.image)
            // console.log(element.image)
            ACard.append(imgCard)

            const category = document.createElement('h4')
            category.className = 'category'
            category.innerHTML = element.category

            card.prepend(category)

            const title = document.createElement('span')
            title.className = 'title'
            title.innerHTML = element.title
            card.append(title)


            const price = document.createElement('span')
            price.className = 'price'
            price.innerHTML = `${element.price} $`

            card.append(price)

            const button = document.createElement('button')
            button.className = 'button'
            button.innerHTML = 'BUY'

            card.append(button)

            
            button.addEventListener('click', function (event) {
                const cartcount = document.querySelector('.cart__count')
                console.log(cartcount)
                cartcount.innerText = ++cartcount.innerText 
                const cartSum = document.querySelector('.cart__sum')
                console.log(parseInt(cartSum.innerText))
                cartSum.innerText = parseInt(cartSum.innerText) + element.price +`  $`
                console.log(cartSum.innerText)

                setCookie(element.id, JSON.stringify(element));
                
            })

            // console.log(getCookie(element.id))

            // setCookie()

            button.addEventListener('click', function (event) {
                

                

                const productInfo = {
                    id: card.id,
                    img: card.querySelector('.img__card').getAttribute('src'),
                    title: card.querySelector('.title').innerText,
                    price: card.querySelector('.price').innerText
                }
                // console.log(productInfo)

                const cart = document.createElement('div')
                cart.className = 'cart__list'
                main.after(cart)

                const cartItem = document.createElement('div')
                cartItem.className = 'cart__item'
                cartItem.setAttribute('id', element.id)
               
                // console.log(cart)
                cart.append(cartItem)

                const cartImg = document.createElement('img')
                cartImg.className = 'img__cart'
                cartImg.setAttribute('src', element.image)
                // cartImg.innerHTML = productInfo.img
                cartItem.append(cartImg)

                const cartTitle = document.createElement('span')
                cartTitle.className = 'title__cart'
                cartTitle.innerHTML = productInfo.title
                cartItem.append(cartTitle)

                const cartPrice = document.createElement('span')
                cartPrice.className = 'title__price'
                cartPrice.innerHTML = productInfo.price
                cartItem.append(cartPrice)

            

                const counter = document.createElement('div')
                counter.className = 'counter'
                cartItem.append(counter)
                // console.log(cartItem)

                const minus = document.createElement('div')
                minus.className = 'items__control'
                minus.innerHTML = '-'
                counter.append(minus)

                const current = document.createElement('div')
                current.className = 'items__current'
                current.innerHTML = '1'
                counter.append(current)

                const plus = document.createElement('div')
                plus.className = 'items__control'
                plus.innerHTML = '+'
                counter.append(plus)


                const buttonDelete = document.createElement('button')
                buttonDelete.className = 'button__delete'
                buttonDelete.innerHTML = 'DELETE'

                cartItem.append(buttonDelete)

               



                minus.addEventListener('click', function (event) {
                    
                    const currentId = event.target.closest('.cart__item')
                    const current1 = currentId.querySelector('.items__current')
                    
                    if (parseInt(current1.innerText) > 1) {
                        current1.innerText = --current1.innerText;

                        
                    }
                    

                    let totalPrice = 0
                    
                    
                    console.log(event.target)
                    const priceEl = element.price
                    
                    console.log(priceEl)

                    const currentPrice = parseInt(current1.innerText) * parseFloat(priceEl)
                    console.log(currentPrice)
                    totalPrice = totalPrice + currentPrice
                    console.log(totalPrice)

                    cartPrice.innerText = totalPrice.toFixed(2)
                


                })
               
                plus.addEventListener('click', function (event) {
                  
                    const currentId = event.target.closest('.cart__item')
                    const current1 = currentId.querySelector('.items__current')

                    current1.innerText = ++current1.innerText;


                    let totalPrice = 0
                    
                    
                    console.log(event.target)
                    const priceEl = element.price
                    
                    console.log(priceEl)

                    const currentPrice = parseInt(current1.innerText) * parseFloat(priceEl)
                    console.log(currentPrice)
                    totalPrice = totalPrice + currentPrice
                    console.log(totalPrice)

                    cartPrice.innerText = totalPrice.toFixed(2)
                    

                })
                // setCookie(element.id, JSON.stringify(element));
                // console.log(JSON.parse.getCookie(element.id))
                




                buttonDelete.addEventListener('click', function (event) {

                    if (event.target === card.id) {

                    }
                    cartItem.remove()

                })
                           

            })
           
            
           
        })
       
        
    }
    
    

}

export const createCards = new CreateCards()
// export const createCards = new CreateCards()


