type DOM = any;
const getFormOfDom: DOM = document.querySelector('#formulario');

window.addEventListener('load', ()=>{

    getFormOfDom.addEventListener('submit', (e: any)=>{
        e.preventDefault();

        let getDataOfForm = new FormData(getFormOfDom);


        fetch('./post.php', {
            method: 'POST',
            body: getDataOfForm
        })      
        .then(res => res.json())
        .then(data =>{
            data.forEach((data: any)=>{
                console.log(data);
            })

        });

    });

});