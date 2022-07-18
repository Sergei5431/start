export class Range{

    showConect(){
        console.log((localStorage.getItem('rangeNumber')))
        console.log('e'.length)
        const num = JSON.parse(localStorage.getItem('rangeNumber'))
        const amount = document.querySelectorAll('[data-amountthis]')
        
        try{
            if(num.length ){
            console.log(num.length !==0)
            console.log(num)
            console.log(num.length)
            amount.forEach(el=>{
                if(el.dataset.amountthis !== num){
                    el.parentNode.parentNode.style.display = 'none'
                    document.querySelector('.range-wrap-num').innerHTML = num
                    document.querySelector('.range-wrap-num').style.left = (num-1)*56 + 'px'
                    document.querySelector('.range-number').value = num
                    // document.querySelector('.range-number').innerHTML = num
                    
                }else{
                    el.parentNode.parentNode.style.display = 'flex'
                }
            })
        }
    }catch(err){
        console.log('ошибка количества на складе')
    }
    }

    connect(){
        document.addEventListener('DOMContentLoaded', this.showConect(), false);

        let range = document.querySelector('.range-number')
        let rangeWrapNum = document.querySelector('.range-wrap-num')
        range.oninput = function(){
            console.log(this.value)
            rangeWrapNum.style.left = (this.value-1)*56 + 'px'
            rangeWrapNum.innerHTML = this.value
            
            const amount = document.querySelectorAll('[data-amountthis]')
            



            amount.forEach(el=>{
                if(el.dataset.amountthis !== this.value){
                    el.parentNode.parentNode.style.display = 'none'
                    localStorage.setItem('rangeNumber', JSON.stringify(this.value))
                }else{
                    el.parentNode.parentNode.style.display = 'flex'
                }
            })
            console.log(JSON.parse(localStorage.getItem('rangeNumber')))
        }
    }
}