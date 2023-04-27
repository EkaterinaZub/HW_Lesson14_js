 class Nav {
    constructor() {
        
    }

     createNav() {
       
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
       
    }

    initNav() {
        return this.createNav()
       
    }

}

export const nav = new Nav().initNav()