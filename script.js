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
    } else if (imc >= 18.5 && imc <= 24.5){
        description = 'Parabéns! Peso ideal';
    } else if (imc > 25 && imc <= 30){
        description = 'Cuidado! você com Sobrepeso';
    } else if (imc > 30 && imc <= 35){
        description = 'Cuidado! você está com Obesidade moderada';
    } else if (imc > 35 && imc <= 40){
        description = 'Cuidado! Você está com Obesidade severa';
    } else{
        description = 'Cuidado! Você está com Obesidade Morbida';
    }


    value.textContent = imc.replace('.',',');
    document.getElementById('description').textContent = 'description';

});