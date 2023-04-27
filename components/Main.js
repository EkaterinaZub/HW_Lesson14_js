class Main {
    constructor() {

    }

    createMain() {

        const main = document.createElement('main')
        main.className = 'main'

        this.main = main
        return this.main
        
    }

    initMain() {
        return this.createMain()

    }
    getTest (){ `
    <section>
    <a href="#/">Тут картинка товара </a>
    <h1>Home</h1>
    <p>This is just a test</p>
    </section>
    `
    }

}

export const main = new Main().initMain()
export const main1 = new Main().getTest()