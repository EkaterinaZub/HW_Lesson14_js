export class Main {
    constructor() {
        this.initMain()
    }

    static createMain() {
       
        const main = document.createElement('main')
        main.className = 'main'
       
        this.main = main
        return this.main
        // this.element.append(this.header)
    }

    static initMain() {
        return this.createMain()
       
    }

}