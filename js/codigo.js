const btnMonedas = document.getElementById('btnMonedas');
const btnCorredoras = document.getElementById('btnCorredoras');
const monedasTable = document.getElementById('monedasTable');
const corredorasTable = document.getElementById('corredorasTable');

btnMonedas.addEventListener('click', () =>{
    monedasTable.style.display = 'block';
    corredorasTable.style.display = 'none';
});

btnCorredoras.addEventListener('click', () =>{
    monedasTable.style.display = 'none';
    corredorasTable.style.display = 'block';
});