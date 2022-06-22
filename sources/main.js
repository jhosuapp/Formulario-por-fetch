"use strict";
const getFormOfDom = document.querySelector('#formulario');
window.addEventListener('load', () => {
    getFormOfDom.addEventListener('submit', (e) => {
        e.preventDefault();
        let getDataOfForm = new FormData(getFormOfDom);
        fetch('./post.php', {
            method: 'POST',
            body: getDataOfForm
        })
            .then(res => res.json())
            .then(data => {
            data.forEach((data) => {
                console.log(data);
            });
        });
    });
});
