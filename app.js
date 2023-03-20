const headerButtom = document.querySelector('.headerButtom');
const bgModal = document.querySelector('.bg-modal');
const inputName = document.querySelector('#modal__name');
const inputValue = document.querySelector('#modal__value');
const entradaButtom = document.querySelector('.green__bnt');
const saidaButtom = document.querySelector('.red__bnt');
const ul = document.querySelector('ul');

let entrada = 0;
let saida = 0;
let totalBank = 0;
let count = 0;

headerButtom.addEventListener('click', () => {
    bgModal.style.display = 'flex';
});

entradaButtom.addEventListener('click',getValues);
saidaButtom.addEventListener('click',valueOut);
document.querySelector('.can__bnt').addEventListener('click', (e)=> {
    e.preventDefault();
    bgModal.style.display = 'none';
   
});

function getValues(e){
    e.preventDefault();
    let nameEx = inputName.value;
    entrada += parseFloat(inputValue.value);
    count +=  parseFloat(inputValue.value);
    totalBank = count;
    document.querySelector('.total').innerText = `R$ ${totalBank.toFixed(2).replace('.',',')}`;
    document.querySelector('.saldo__p').innerText = `R$ ${entrada.toFixed(2).replace('.',',')}`;
    extrato(nameEx,entrada,'green');
}

function valueOut(e){
    e.preventDefault();
    let nameEx = inputName.value;
    saida += parseFloat(inputValue.value);
    count =  parseFloat(totalBank) - saida;
    totalBank = count;
    document.querySelector('.total').innerText = `R$ ${totalBank.toFixed(2).replace('.',',')}`;
    document.querySelector('.saldo__n').innerText = `R$ ${saida.toFixed(2).replace('.',',')}`;

    extrato(nameEx,saida, 'red');
}

function extrato(name, value,color) {
    let li = document.createElement('li');
    let divName = document.createElement('div');
    let divValue = document.createElement('div');

    li.classList.add(color)
    divName.innerText = name;
    divValue.innerText = `R$ ${value.toFixed(2)}`;

    inputName.value = '';
    inputValue.value = '';

    li.appendChild(divName);
    li.appendChild(divValue);
    ul.appendChild(li);
}