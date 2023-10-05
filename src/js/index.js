var $range = document.querySelector('#inpu'),
    $value = document.querySelector('.valuee');

$range.addEventListener('input', function() {
  $value.textContent = this.value;
});
const calculos = [];
function calculate() {
  var total = document.getElementById("valor_total").value;
  var porcetagem = document.getElementById("inpu").value;

  if (total === "" || porcetagem === "") {
    document.getElementById("text_area").innerText = "Cálculo invalido!";
    return;
  }
  
  let gorjeta = (Number(total) * Number(porcetagem)) / 100
  var calculo_Total = Number(total) + Number(gorjeta)
  let total_final = "total: R$ " + (calculo_Total) + "\ngorjeta: R$ " + gorjeta

  calculos.push(total_final);
  document.getElementById("text_area").innerText=total_final
    
}

function historico(){

  var historicoDiv = document.getElementById("text_area");
  historicoDiv.innerHTML = "";
  calculos.forEach(function (calculo, index) {
    var calculoDiv = document.createElement("div");
    calculoDiv.innerText = "Cálculo " + (index + 1) + ":\n" + calculo;
    historicoDiv.appendChild(calculoDiv);
  });

  document.getElementById("text_area").innerText=lis
}


