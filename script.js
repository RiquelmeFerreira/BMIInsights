const form = document.getElementsByName('imc');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    const imc = (peso / (altura * altura)). toFixed(2);
    let description = '';

    document.getElementById('infos').classListist.remove('hidden');

    if (imc < 18.5){
        description = 'Abaixo do peso'
    }
    value.textContent = imc.replace('.',',');
    document.getElementById('description').textContent = 'description';

});