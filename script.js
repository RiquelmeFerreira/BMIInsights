var { createElement } = document.createElement

//Data
var data = [
    {
      min: 0,
      max: 18.4,
      classification: "<= 18.4",
      info: "Magreza",
      obesity: "0",
    },
    {
      min: 18.5,
      max: 24.9,
      classification:"=18.5 e <=24.9",
      info: "Peso Ideal",
      obesity: "0",
    },
    {
      min: 25,
      max: 29.9,
      classification:"=25 e <=29.9",
      info:"Sobrepeso",
      obesity:"I",
    },
    {
      min: 30,
      max: 39.9,
      classification: "=30 e <= 39.9",
      info:"Obesidade",
      obesity:"II",
    },
    {
      min:40,
      max:99,
      classification:">=40",
      info:"Obesidade grave",
      obesity:"III",
    },
];

//Seleção de Elemnetos

let imctable = document.querySelector("#imc-table")

let heightinput = document.querySelector("#height");
let weightinput = document.querySelector("#weight");
let calcbtn = document.querySelector("#calc-btn");
let calcclean = document.querySelector("#clean-btn");

//Funções

function createtable(data){
  data.forEach(element => {
    let div = createElement("div")
    div.classList.add("table-data")

    let classification = document.createElement("p");
    classification.innerText = item.classification;

    let info = document.createElement("p");
    info.innerText = item.info;

    let obesity = document.createElement("p");
    obesity.innerText = item.obesity;

    div.appendChild(classification);
    div.appendChild(info);
    div.appendChild(obesity);

    imctable.appendChild(div);

  });
}

//Inicialiazação
 createtable(data);
//Eventos

