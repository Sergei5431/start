// import './global.css';
import arr from './components/ts/arr.js';

class Card {

    setCard() {
        for (let i = 0; i < arr.length; i++) {
            let card = document.createElement('div');
            card.classList.add('card-phone')
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
let cartNum = 0
containerCard.addEventListener('click', e => {

    if (e.target.className == 'card-phone') {
        if (e.target.querySelector('.ribbon')) {
            e.target.querySelector('.ribbon').classList.remove('ribbon')
            cartNum--
            localStorage.setItem('amoundPhone', JSON.stringify(cartNum))
            let local = localStorage.getItem('amoundPhone')
            cart.innerHTML = +local
                    } else {
            let ribbon = document.createElement('div');
            ribbon.classList.add('ribbon')
            e.target.append(ribbon)
            cartNum++
            localStorage.setItem('amoundPhone', JSON.stringify(cartNum))
            let local = localStorage.getItem('amoundPhone')
            cart.innerHTML = +local
        }
    }
})

console.log(localStorage.getItem('amoundPhone'))

let q = localStorage.getItem('amoundPhone')
cart.innerHTML = +q

