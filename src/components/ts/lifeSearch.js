class LifeSearch{


    inputSearch(){
                const allName =  document.querySelectorAll('.text-h4')
                let theName = allName.forEach(el=>{
            let y= el.dataset.namethis
        })
        console.log(allName)
        console.log(theName)
        console.log(document.querySelector('#elastic').oninput)
        
        document.querySelector('#elastic').oninput = function(){
            let val = this.value.trim()
            console.log(val)
            if(val != ''){
                console.log(allName)
                allName.forEach(el=>{
                    if( ((el.dataset.namethis).toLowerCase()).search(val.toLowerCase())==-1){
                        el.parentNode.style.display = 'none'
                    }else{
                        el.parentNode.style.display = 'flex'
                        
                        }
                })
            }else{
                allName.forEach(el=>{
                    
                        el.parentNode.style.display = 'flex'
                    
                })
            }
        }
    }

}

export default LifeSearch