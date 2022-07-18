

class MadeIn{

    showMadeIn(){
        // let localArrCompany = JSON.parse(localStorage.getItem('localMadeIn'))
        // let allCompany =  
        // if(localArrCompany.length===0){

        // }

        // console.log(arrCompany)

        // const arrAllCamera = [1, 2, 3]
        // const localHow = JSON.parse(localStorage.getItem('localHow'))

        const arrAllMadeIn = ['Samsung', 'Apple', 'Xiaomi']
        let localArrCompany = JSON.parse(localStorage.getItem('localMadeIn'))
        // console.log(localHow)
        try {
            if (localArrCompany.length === 0) {
                arrAllMadeIn.forEach(el => {
                    document.querySelectorAll(`[data-companythis="${el}"]`).forEach(e => {
                        e.parentNode.parentNode.classList.remove('anime')
                        e.parentNode.parentNode.classList.remove('hide')
                    })
                })

            } else {

                arrAllMadeIn.forEach(el => {
                    document.querySelectorAll(`[data-companythis="${el}"]`).forEach(e => {
                        e.parentNode.parentNode.classList.remove('anime')
                        e.parentNode.parentNode.classList.remove('hide')
                    })
                })

                for (let i = 0; i < localArrCompany.length; i++) {
                    for (let j = 0; j < arrAllMadeIn.length; j++) {
                        if (localArrCompany[i] === arrAllMadeIn[j]) {
                            arrAllMadeIn.splice(arrAllMadeIn.indexOf(localArrCompany[i]), 1)
                        }
                    }
                }

                arrAllMadeIn.forEach(el => {
                    document.querySelectorAll(`[data-companythis="${el}"]`).forEach(e => {
                        e.parentNode.parentNode.classList.add('anime')
                    })
                })
            }

            document.querySelectorAll('.card-phone').forEach(el => {
                el.ontransitionend = () => {
                    if (el.classList.contains('anime')) {
                        el.classList.add('hide')
                    }
        
                }
            })

        } catch (err) {
            console.log(`Возникла ошибка!`)
        }
    }

    clickMadeIn(){
        document.addEventListener('DOMContentLoaded', this.showMadeIn(), false);

        console.log(localStorage.getItem(('localMadeIn')));
        const company = document.querySelectorAll('.made')
        let arrCompany
        if(localStorage.getItem('localMadeIn')){
            arrCompany = JSON.parse(localStorage.getItem('localMadeIn'))
            arrCompany.forEach(el=>{
                document.querySelector(`[data-company="${el}"]`).classList.add('active')
            })
        }else{
            arrCompany = []
        }
         
        console.log(arrCompany)

        company.forEach(el=>{
            el.addEventListener('click', ()=>{
                                let company = el.dataset.company
                console.log(company)
                if(el.className !=='made active'){
                    el.classList.add('active')
                    // console.log(localStorage.getItem('localMadeIn'))
                    // console.log(!!localStorage.getItem('localMadeIn'))
                    arrCompany.push(company)
                    console.log(arrCompany)
                    localStorage.setItem('localMadeIn', JSON.stringify(arrCompany))
                    this.showMadeIn()
                }else{
                    el.classList.remove('active')
                    arrCompany.splice(arrCompany.indexOf(company),1)
                    console.log(arrCompany)
                    localStorage.setItem('localMadeIn', JSON.stringify(arrCompany))
                    this.showMadeIn()
                }
                  })
        })
    }
}

export default MadeIn