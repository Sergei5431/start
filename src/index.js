// import './global.css';
import arr from './components/ts/arr.js';

class Card {

    setCard() {
        for (let i = 0; i < arr.length; i++) {
            let card = document.createElement('div');
            card.classList.add('card-phone');
            card.setAttribute('data-number', `${i+1}`)
            card.setAttribute('data-letter', `${i}`)
            card.insertAdjacentHTML('afterbegin',
                `
            <h4 class="text-h4">${arr[i].name}</h4>
            <div class="img-wrapper">
                <img src="./components/assets/${i + 1}.png" alt="png" width="100">
            </div>
            <ul>
                <li class="funcshion">Количеств: ${arr[i].amount}</li>
                <li class="funcshion">Год выхода: ${arr[i].age}</li>
                <li class="funcshion">Производитель: ${arr[i].madeIn}</li>
                <li class="funcshion">Цвет: ${arr[i].color}</li>
                <li class="funcshion">Количество камер: ${arr[i].camera}</li>
                <li class="funcshion">Популярный: ${arr[i].popular}</li>
            </ul>
            `)
            document.querySelector('.container-card').append(card)
        }
    }
}

let allCard = new Card(arr)
allCard.setCard()

const containerCard = document.querySelector('.container-card')
const cart = document.querySelector('.cart-number')

// --------------------------------------------------------------
let readAmounsPhone = localStorage.getItem('amoundPhone')
let cartNum 

if(typeof readAmounsPhone==='object'){
    cartNum= 0
   
}else{
    cartNum= (JSON.parse(readAmounsPhone))
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
if(typeof readLoc==='object'){
     arrLocalRibbon= []
    }else{
     arrLocalRibbon= [].concat(JSON.parse(readLoc))
    }
// ------------------------------------------------------------
console.log(arrLocalRibbon)
const whereClick = (e)=>{
    if (e.currentTarget.className == 'card-phone') {
        if (e.currentTarget.querySelector('.ribbon')) {
            e.currentTarget.querySelector('.ribbon').classList.remove('ribbon')
            let localRibbon = e.currentTarget.dataset.number
            arrLocalRibbon.splice(arrLocalRibbon.indexOf(+localRibbon),1)
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
cardDivs.forEach(el =>{el.addEventListener('click', whereClick)})

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
function addRibbon(e){
    // console.log(e.length)
    console.log(typeof e)
    // if(typeof e !=='object'){
        for(let i=0; i<e.length;i++){
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
const deleteOptions = ()=>{
    localStorage.removeItem('arrLocalRibbon')
    localStorage.removeItem('amoundPhone')
    document.location.reload();

}
resetOptions.addEventListener('click', deleteOptions)
// ------------------------------------------------------------------
const sortingA = document.querySelector('.sortingA')
const sortingZ = document.querySelector('.sortingZ')

const sortA =()=>{
    let nav = document.querySelector('.container-card')
    for(let i =0; i<nav.children.length;i++){
        for(let j = i; j<nav.children.length;j++){
            if(+nav.children[i].getAttribute('data-letter') < +nav.children[j].getAttribute('data-letter')){
                let replaceNode = nav.replaceChild(nav.children[j], nav.children[i])
                insertAfter(replaceNode, nav.children[i])
                            }
        }
    }
}

const sortZ =()=>{
    let nav = document.querySelector('.container-card')
    for(let i =0; i<nav.children.length;i++){
        for(let j = i; j<nav.children.length;j++){
            if(+nav.children[i].getAttribute('data-letter') > +nav.children[j].getAttribute('data-letter')){
                               let replaceNode = nav.replaceChild(nav.children[j], nav.children[i])
                insertAfter(replaceNode, nav.children[i])
            }
        }
    }
}

function insertAfter(elem, refElem){
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling)
}

sortingA.addEventListener('click', sortA)
sortingZ.addEventListener('click', sortZ)

// ----------------------------------------------------------------------

