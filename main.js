const form = document.getElementById('Formulario');

function Calcula(NumberA, NumberB){
    return (NumberB > NumberA)
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputA = document.getElementById('nA');
    const inputB = document.getElementById('nB');
    const button = document.getElementById('btn')


    if (Calcula(inputA.value, inputB.value)) {
        alert("B é maior que A")
    } else{
        alert("B não é maior que A")
    }

})