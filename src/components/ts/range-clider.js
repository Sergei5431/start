const rangeSlider = document.querySelector('#slider')
console.log(rangeSlider)
if(rangeSlider){
    noUiSlider.create(rangeSlider, {
        start: [2018, 2022],
        connect: true,
        step: 1,
        range: {
            'min': [2018],
            'max': [2022]
        }
    });

    const btn0 = document.querySelector('#btn0')
    const btn1 = document.querySelector('#btn1')
    const btns=[btn0, btn1]

    rangeSlider.noUiSlider.on('update', function(values, handle){
console.log(values[0])
// console.log(handle)
        btns[handle].innerHTML = Math.round(values[handle])
        let valuesNum =[] 
        values.forEach(element => {
            valuesNum.push(Math.round(+element))
        });
        const allAge = document.querySelectorAll('[data-agethis]')
        const arrAllAge = [2018, 2019, 2020, 2021, 2022]
        
        let newArr= arrAllAge.slice(arrAllAge.lastIndexOf(valuesNum[0]),arrAllAge.lastIndexOf(valuesNum[1])+1)
        
        let arrMinus =[]
        for(let i=0; i<arrAllAge.length; i++){
            if(newArr.indexOf(arrAllAge[i])==-1){
                arrMinus.push(arrAllAge[i])
            }
        }
        
        arrMinus.forEach(el=>{
            document.querySelectorAll(`[data-agethis='${el}']`).forEach(e=>{
                
                e.parentNode.parentNode.style.display = 'none'
            })
            
        })
       
        newArr.forEach(el=>{
            document.querySelectorAll(`[data-agethis='${el}']`).forEach(e=>{
                
                e.parentNode.parentNode.style.display = 'flex'
            })
            
        })

        console.log(newArr)
        console.log(arrMinus)
        console.log(valuesNum)
    })

   

    
}