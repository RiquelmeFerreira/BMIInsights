let form = document.getElementsByName('imc');

form.addEventListener('submit', function(event){
    event.preventDefault();

    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;

    let imc = (peso / (altura * altura)). toFixed(2);
});