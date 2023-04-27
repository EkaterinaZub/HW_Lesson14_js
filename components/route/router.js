
import { openbasket } from "/components/Cart.js"
import {createCards} from "/components/CreateCards.js"
import {App} from "/components/App.js"
import { CreateProduct } from "/components/Product.js"



const routes =()=> [
    
    {path: '/', component: createCards},
    {path: '/shop', component: createCards},
    {path : '/cart', component : openbasket},
    // {path : '/product/1', component : CreateProduct},
]

console.log(routes())

export const router = () => {
    console.log(location)
    const parseLocation = ()=>location.hash.slice(1).toLowerCase() || '/'
    
    // console.log(parseLocation())
    const path = parseLocation().match(/\/([^/]*)/i)[0]
    console.log(path)
    // const id = parseLocation().split('/')[2]
    // console.log(id)

    const findComponent = (path, routes) => routes.find(rout => rout.path === path) || undefined
    // console.log(findComponent())
    const {component } = findComponent(path, routes()) || {}
    console.log({component })
    // console.log(document.querySelector('.cart__list'))
    document.querySelector('#app').append = component();
    // document.querySelector('#app').append = (id) ? component(id): component()



    console.log(location)
}

window.addEventListener('load', router)
window.addEventListener("hashchange", router)








// export const routere = document.addEventListener('click', even =>{
//    console.log (even.target.tagName)
//    if (even.target.tagName ==='IMG'){
//    route(even)
//    }
//    even.preventDefault()
// })

// const route = (even) => {
//     window.history.pushState({}, '', even.target.href)
//     handleLocation()
// }
// window.route = route

// const routers ={
//     '#/cart': `App`
// }

// const handleLocation = async ()=> {
//     const path = window.location.pathname;
//     console.log(path)
    // const html = await fetch(routers[path]).then((data)=> data.text())
    // console.log(html)
    // document.querySelector('#app').innerHTML = html
// }