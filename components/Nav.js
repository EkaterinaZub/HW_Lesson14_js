export class Nav {
    constructor() {
        this.initNav()
    }

    static createNav() {
       
        const nav = document.createElement('nav')
        nav.className = 'nav'
        this.nav = nav

        const navFurniture = document.createElement('div')
        navFurniture.className = 'nav__furniture'
       
        nav.append(navFurniture)
        const spanFurniture = document.createElement('span')
        spanFurniture.className =  'furniture__text'
        spanFurniture.innerHTML = 'CATALOG'
        navFurniture.append(spanFurniture)

        return this.nav
        // this.element.append(this.header)
    }

    static initNav() {
        return this.createNav()
       
    }

}