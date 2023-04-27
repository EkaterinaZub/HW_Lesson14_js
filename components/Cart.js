// import { router } from"/components/route/router.js"

export function openbasket (){

    // console.log('hello')
    const cart = document.querySelector('.basket')
    // console.log(cart)

    cart.addEventListener('click', function(event){
        // console.log(event)
        event.preventDefault()
        
        const main = document.querySelector('.main')
        if (main.style.display !== 'none'){
            main.style.display = 'none'
            const cartList = document.querySelectorAll('.cart__list')
        console.log(cartList)

        cartList.forEach(function(element){
            console.log(element)
            element.style.display = 'block'
        })
            
        }else {
            main.style.display = 'flex'
        }
        
    })

}

