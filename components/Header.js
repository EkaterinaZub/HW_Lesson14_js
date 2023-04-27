// import {router} from "/components/route/router.js"
// console.log(this.element)
 class Header {
    constructor() {
        

    }

    createHeader() {

        const header = document.createElement('header')
        header.className = 'header'
        this.header = header

        const logo = document.createElement('div')
        logo.className = 'logo'
        header.prepend(logo)
        const img = document.createElement('img')
        img.className = 'logo__img'
        img.setAttribute('src', '/image/logo.png')
        img.setAttribute('alt', 'logo')
        logo.prepend(img)

        const menu = document.createElement('div')
        menu.className = 'menu'
        header.append(menu)
        const menuItem = document.createElement('a')
        menuItem.className = 'menu__item'
        menuItem.setAttribute('href', "#")
        menuItem.innerHTML = 'Home'
        menu.append(menuItem)
        const menuItem2 = document.createElement('a')
        menuItem2.className = 'menu__item'
        menuItem2.setAttribute('href', "#/shop")
        menuItem2.innerHTML = 'Shop'
        menu.append(menuItem2)
        const menuItem3 = document.createElement('a')
        menuItem3.className = 'menu__item'
        menuItem3.setAttribute('href', "#/contact")
        menuItem3.innerHTML = 'Contact'
        menu.append(menuItem3)

        const basket = document.createElement('div')
        basket.className = 'basket'
        header.append(basket)
        const basketA = document.createElement('a')
        basketA.setAttribute('href', "#/cart")
        basket.prepend(basketA)
        const imgBasket = document.createElement('img')
        imgBasket.className = 'basket__img'
        imgBasket.setAttribute('src', '/image/basket.svg')
        imgBasket.setAttribute('alt', 'basket')
        basketA.prepend(imgBasket)

        const cartCount = document.createElement('span')
        cartCount.className = 'cart__count'
        cartCount.innerHTML = '0'
        basket.append(cartCount)

        const cartSum = document.createElement('span')
        cartSum.className = 'cart__sum'
        cartSum.innerHTML = '0 $'
        basket.append(cartSum)
        // router();
        return this.header
        
    }

     initHeader() {
        
        return this.createHeader()
       

    }

    

}

export const header = new Header().initHeader()
export const header1 = new Header().createHeader()








