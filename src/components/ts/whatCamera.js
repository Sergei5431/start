// import Cards from "../../index.js";

//  class WhatCamera extends Cards{
class WhatCamera {

    howManyCamera() {
        const arrAllCamera = [1, 2, 3]
        const localHow = JSON.parse(localStorage.getItem('localHow'))
        console.log(localHow)
        try {
            if (localHow.length === 0) {
                arrAllCamera.forEach(el => {
                    document.querySelectorAll(`[data-cameraThis="${el}"]`).forEach(e => {
                        e.parentNode.parentNode.style.display = 'flex'
                    })
                })

            } else {

                arrAllCamera.forEach(el => {
                    document.querySelectorAll(`[data-cameraThis="${el}"]`).forEach(e => {
                        e.parentNode.parentNode.style.display = 'flex'
                    })
                })

                for (let i = 0; i < localHow.length; i++) {
                    for (let j = 0; j < arrAllCamera.length; j++) {
                        if (localHow[i] === arrAllCamera[j]) {
                            arrAllCamera.splice(arrAllCamera.indexOf(localHow[i]), 1)
                        }
                    }
                }

                arrAllCamera.forEach(el => {
                    document.querySelectorAll(`[data-cameraThis="${el}"]`).forEach(e => {
                        e.parentNode.parentNode.style.display = 'none'
                    })
                })
            }
        } catch (err) {
            console.log(`Возникла ошибка!`)
        }
    }

    click() {
        document.addEventListener('DOMContentLoaded', this.howManyCamera(), false);
        const how = document.querySelectorAll('.how-camera')
        let arrHowCamera
        if (typeof localStorage.getItem('localHow') === 'object') {
            arrHowCamera = []
        } else {
            arrHowCamera = [].concat(JSON.parse(localStorage.getItem('localHow')))
            try {
                arrHowCamera.forEach(el => {
                    document.querySelector(`[data-how='${el}']`).style.background = 'blue'
                })
            } catch (err) {
                console.log('туту ошибка');
            }
        }

        how.forEach(el => {
            el.addEventListener('click', () => {
                const element = +el.dataset.how
                if (el.style.background !== 'blue') {
                    el.style.background = 'blue'
                    arrHowCamera.push(+el.dataset.how)
                    localStorage.setItem('localHow', JSON.stringify(arrHowCamera))
                    this.howManyCamera()
                } else {
                    el.style.background = 'transparent'
                    arrHowCamera.splice(arrHowCamera.indexOf(element), 1)
                    localStorage.setItem('localHow', JSON.stringify(arrHowCamera))
                    this.howManyCamera()
                }
            })
        })
    }

}


// const ooo = new WhatCamera()


// ooo.logWhatCamera()
// console.log('eeeeeee');
export default WhatCamera
// location.reload()
// document.location.reload();