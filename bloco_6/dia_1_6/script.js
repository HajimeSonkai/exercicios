const estados = ["Acre (AC)", " Alagoas (AL)", " Amapá (AP)", " Amazonas (AM)", " Bahia (BA)", " Ceará (CE)", " Distrito Federal (DF)", " Espírito Santo (ES)", " Goiás (GO)", " Maranhão (MA)", " Mato Grosso (MT)", " Mato Grosso do Sul (MS)", " Minas Gerais (MG)", " Pará (PA)", " Paraíba (PB)", " Paraná (PR)", " Pernambuco (PE)", " Piauí (PI)", " Rio de Janeiro (RJ)", " Rio Grande do Norte (RN)", " Rio Grande do Sul (RS)", " Rondônia (RO)", " Roraima (RR)", " Santa Catarina (SC)", " São Paulo (SP)", " Sergipe (SE)", " Tocantins (TO)"];
console.log(estados[1])


const opcoes = document.getElementById('opt-estado')
for (const states of estados) {
    var opt = document.createElement('option');
    opt.value = states;
    opt.innerHTML = states;
    opcoes.appendChild(opt);
}

//butão de salvar

const butSalvar = document.getElementById('salvar');

butSalvar.addEventListener('click', dataCerta);

//alert de data errada
var data = document.getElementById('data')

var date_regex = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19\d\d|20\d\d)$/;

function dataCerta() {
    var dataTest = data.value
    
    if (date_regex.test(dataTest)) {
            document.getElementById("message").innerHTML = "Date follows dd/mm/yy format";
        }
        else{
        
          document.getElementById("message").innerHTML = "Invalid date format";
        }
        console.log(dataTest)

}

function preventDef(event) {
    event.preventDefault();
  }