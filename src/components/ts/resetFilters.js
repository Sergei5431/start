export class deleteFilter{
    resetFilter(){
        const btnDelete = document.querySelector('#filter')
        btnDelete.addEventListener('click', ()=>{
            localStorage.removeItem('localMadeIn')
            localStorage.removeItem('popular')
            localStorage.removeItem('localHow')
            localStorage.removeItem('rangeNumber')
            document.location.reload()
        })
        console.log(btnDelete)
    }
}