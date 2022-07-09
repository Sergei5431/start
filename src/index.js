if (e.currentTarget.className == 'card-phone') {
    if (e.currentTarget.querySelector('.ribbon')) {
        e.currentTarget.querySelector('.ribbon').classList.remove('ribbon')
        cartNum--
        localStorage.setItem('amoundPhone', JSON.stringify(cartNum))
        let local = localStorage.getItem('amoundPhone')
        cart.innerHTML = +local
                } else {
        let ribbon = document.createElement('div');
        ribbon.classList.add('ribbon')
        e.currentTarget.append(ribbon)
        cartNum++
        localStorage.setItem('amoundPhone', JSON.stringify(cartNum))
        let local = localStorage.getItem('amoundPhone')
        cart.innerHTML = +local
    }
}