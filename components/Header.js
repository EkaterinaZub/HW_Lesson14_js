
// console.log(this.element)

export class Header {
    constructor() {
        this.initHeader()
        // this.header

    }

    static createHeader() {

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
        menuItem.setAttribute('href', '"#"')
        menuItem.innerHTML = 'Home'
        menu.append(menuItem)
        const menuItem2 = document.createElement('a')
        menuItem2.className = 'menu__item'
        menuItem2.setAttribute('href', '"#"')
        menuItem2.innerHTML = 'Shop'
        menu.append(menuItem2)
        const menuItem3 = document.createElement('a')
        menuItem3.className = 'menu__item'
        menuItem3.setAttribute('href', '"#"')
        menuItem3.innerHTML = 'Contact'
        menu.append(menuItem3)

        const basket = document.createElement('div')
        basket.className = 'basket'
        header.append(basket)
        const imgBasket = document.createElement('img')
        imgBasket.className = 'basket__img'
        imgBasket.setAttribute('src', '/image/basket.svg')
        imgBasket.setAttribute('alt', 'basket')
        basket.prepend(imgBasket)

        return this.header

    }

    static initHeader() {

        return this.createHeader()


    }

    

}








