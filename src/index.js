// import './global.css';
import arr from './components/ts/arr.js';


// class Card {
//     // constructor(amount, age, madeIn, color, camera,popular){
//     // constructor(aamount){
//     //     this aamount = amount
//     // }
//     setCard() {
//         for (let i = 0; i < arr.length; i++) {
//             let card = document.createElement('div');
//             card.classList.add('card-phone');
//             card.setAttribute('data-number', `${i+1}`)
//             card.setAttribute('data-letter', `${i}`)
//             card.insertAdjacentHTML('afterbegin',
//                 `
//             <h4 class="text-h4">${arr[i].name}</h4>
//             <div class="img-wrapper">
//                 <img src="./components/assets/${i + 1}.png" alt="png" width="100">
//             </div>
//             <ul>
//                 <li class="funcshion amount" data-amountThis="${arr[i].amount}">Количеств: ${arr[i].amount}</li>
//                 <li class="funcshion age">Год выхода: ${arr[i].age}</li>
//                 <li class="funcshion madeIn">Производитель: ${arr[i].madeIn}</li>
//                 <li class="funcshion color" data-colorthis="${arr[i].color}">Цвет: ${arr[i].color}</li>
//                 <li class="funcshion cAmera">Количество камер: ${arr[i].camera}</li>
//                 <li class="funcshion popular">Популярный: ${arr[i].popular}</li>
//             </ul>
//             `)
//             document.querySelector('.container-card').append(card)
//         }
//     }
// }

// let allCard = new Card(arr)
// allCard.setCard()

// ====================================================

// как получить Card.name ???

class Card {
    constructor(name, amount, age, madeIn, color, camera, popular, id) {
        this.name = name
        this.amount = amount;
        this.age = age;
        this.madeIn = madeIn;
        this.color = color;
        this.camera = camera;
        this.popular = popular;
        this.id = id
    }
    setCard() {

        let card = document.createElement('div');
        card.classList.add('card-phone');
        card.setAttribute('data-number', `${this.id + 1}`)
        card.setAttribute('data-letter', `${this.id}`)
        card.insertAdjacentHTML('afterbegin',
            `
            <h4 class="text-h4">${this.name}</h4>
            <div class="img-wrapper">
                <img src="./components/assets/${this.id + 1}.png" alt="png" height="100">
            </div>
            <ul>
                <li class="funcshion amount" data-amountThis="${this.amount}">Количеств: ${this.amount}</li>
                <li class="funcshion age">Год выхода: ${this.age}</li>
                <li class="funcshion madeIn">Производитель: ${this.madeIn}</li>
                <li class="funcshion color" data-colorthis="${this.color}">Цвет: ${this.color}</li>
                <li class="funcshion cAmera">Количество камер: ${this.camera}</li>
                <li class="funcshion popular">Популярный: ${this.popular}</li>
            </ul>
            `)
        document.querySelector('.container-card').append(card)
    }

    log() {
        console.log('qq')
    }
}

class Cards extends Card {
    constructor(name, amount, age, madeIn, color, camera, popular, id) {
        super(name, amount, age, madeIn, color, camera, popular, id);
    }
    createCatalog() {
        arr.forEach(el => {
            const oneCard = new Card(...Object.values(el))
            oneCard.setCard()
            oneCard.age
        })
    }

    oo(){
        console.log(this.age)
        console.log(qq.age)
        // console.log(oneCard.age)
    }
}

const qq = new Cards()
qq.createCatalog()
qq.log()
qq.oo()

console.log(qq.age)


















// ========================================================

const containerCard = document.querySelector('.container-card')
const cart = document.querySelector('.cart-number')

// --------------------------------------------------------------
let readAmounsPhone = localStorage.getItem('amoundPhone')
let cartNum

if (typeof readAmounsPhone === 'object') {
    cartNum = 0

} else {
    cartNum = (JSON.parse(readAmounsPhone))
}
// ---------------------------------------------------------------
const cardDivs = document.querySelectorAll('.card-phone')
console.log(cardDivs)
// ---------------------------------------------------------------------
let readLoc = localStorage.getItem('arrLocalRibbon')
console.log(readLoc)
console.log(typeof readLoc)
// let arrLocalRibbon1=[]
let arrLocalRibbon
if (typeof readLoc === 'object') {
    arrLocalRibbon = []
} else {
    arrLocalRibbon = [].concat(JSON.parse(readLoc))
}
// ------------------------------------------------------------
console.log(arrLocalRibbon)
const whereClick = (e) => {
    if (e.currentTarget.className == 'card-phone') {
        if (e.currentTarget.querySelector('.ribbon')) {
            e.currentTarget.querySelector('.ribbon').classList.remove('ribbon')
            let localRibbon = e.currentTarget.dataset.number
            arrLocalRibbon.splice(arrLocalRibbon.indexOf(+localRibbon), 1)
            console.log(localRibbon)
            localStorage.setItem('arrLocalRibbon', JSON.stringify(arrLocalRibbon))
            cartNum--
            localStorage.setItem('amoundPhone', JSON.stringify(cartNum))
            let local = localStorage.getItem('amoundPhone')

            cart.innerHTML = +local
            console.log(arrLocalRibbon)
        } else {
            let ribbon = document.createElement('div');
            ribbon.classList.add('ribbon')
            e.currentTarget.append(ribbon)
            // let localRibbon = localStorage.setItem('localRibbon', JSON.stringify(e.currentTarget))
            let localRibbon = e.currentTarget.dataset.number
            arrLocalRibbon.push(+localRibbon)
            localStorage.setItem('arrLocalRibbon', JSON.stringify(arrLocalRibbon))
            cartNum++
            localStorage.setItem('amoundPhone', JSON.stringify(cartNum))
            let local = localStorage.getItem('amoundPhone')
            cart.innerHTML = +local
            console.log(localStorage.getItem('arrLocalRibbon'))
        }
    }
}
cardDivs.forEach(el => { el.addEventListener('click', whereClick) })

console.log(localStorage.getItem('arrLocalRibbon'))

let amoundPhone = localStorage.getItem('amoundPhone')
cart.innerHTML = +amoundPhone

// ---------------------------------------------------------------
let readArrLocalRibbon = localStorage.getItem('arrLocalRibbon')
// console.log(readArrLocalRibbon.length)
console.log(readArrLocalRibbon)
console.log(JSON.parse(readArrLocalRibbon))
// let element = document.querySelector(`[data-number=${localRibbon}]`)
// let element = document.querySelector(`[data-number='2']`)
// console.log(element)
function addRibbon(e) {
    // console.log(e.length)
    console.log(typeof e)
    // if(typeof e !=='object'){
    for (let i = 0; i < e.length; i++) {
        let ribbon = document.createElement('div');
        ribbon.classList.add('ribbon')
        document.querySelector(`[data-number='${e[i]}']`).append(ribbon)
        // }
    }
    // let ribbon = document.createElement('div');
    // ribbon.classList.add('ribbon')
    // e.append(ribbon)
}

addRibbon(JSON.parse(readArrLocalRibbon))

// localStorage.clear()

// localStorage.clear()
// cart.innerHTML = JSON.parse(readArrLocalRibbon).length
// -----------------------------------------------------------------
// кнопка сброс настроек 
const resetOptions = document.querySelector('#options')
// const resetOptions1 = document.querySelector('.card-phone')
console.log(resetOptions);
// console.log(resetOptions1)
const deleteOptions = () => {
    localStorage.removeItem('arrLocalRibbon')
    localStorage.removeItem('amoundPhone')
    document.location.reload();

}
resetOptions.addEventListener('click', deleteOptions)
// ------------------------------------------------------------------
const sortingA = document.querySelector('.sortingA')
const sortingZ = document.querySelector('.sortingZ')

const sortA = () => {
    let nav = document.querySelector('.container-card')
    for (let i = 0; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            if (+nav.children[i].getAttribute('data-letter') < +nav.children[j].getAttribute('data-letter')) {
                let replaceNode = nav.replaceChild(nav.children[j], nav.children[i])
                insertAfter(replaceNode, nav.children[i])
            }
        }
    }
}

const sortZ = () => {
    let nav = document.querySelector('.container-card')
    for (let i = 0; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            if (+nav.children[i].getAttribute('data-letter') > +nav.children[j].getAttribute('data-letter')) {
                let replaceNode = nav.replaceChild(nav.children[j], nav.children[i])
                insertAfter(replaceNode, nav.children[i])
            }
        }
    }
}

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling)
}

sortingA.addEventListener('click', sortA)
sortingZ.addEventListener('click', sortZ)

// ----------------------------------------------------------------------

function chooseColor() {
    const phones = document.querySelectorAll('.card-phone')
    const btnColor = document.querySelectorAll('.color-phone')
    const datasetColor = document.querySelectorAll('[data-colorthis]')

    function filter(currentColor, items) {
        items.forEach(item => {
            console.log(item.dataset)
            console.log(item.dataset.colorthis)
            console.log(currentColor);
            const isShowAll = currentColor === 'все'
            if (item.dataset.colorthis !== currentColor && !isShowAll) {
                item.parentNode.parentNode.classList.add('anime')
            }
            else {
                item.parentNode.parentNode.classList.remove('hide')
                item.parentNode.parentNode.classList.remove('anime')
            }
        })
    }



    btnColor.forEach(e => {
        e.addEventListener('click', () => {
            console.log(e.innerHTML.length);
            if (e.innerHTML.length === 0) {
                e.innerHTML = '&#10004'
                let currentColor = e.dataset.color
                filter(currentColor, datasetColor)
            } else {

                e.innerHTML = ''
                // if(e.dataset.colorthis==currentColor){
                //     e.parentNode.parentNode.classList.remove('hide')
                // e.parentNode.parentNode.classList.remove('anime')
                // }


            }
            // let currentColor = e.dataset.color
            // filter(currentColor, datasetColor)
            // console.log(e.dataset.color)
        })
    })

    phones.forEach(el => {
        el.ontransitionend = () => {
            if (el.classList.contains('anime')) {
                el.classList.add('hide')
            }

        }
    })
}

chooseColor()

export default Card


class WhatCamera extends Card {
    log() {
        console.log(oneCard)
        console.log('1111111111111111')
    }
}

// console.log(oneCard.log())
// oneCard.log()