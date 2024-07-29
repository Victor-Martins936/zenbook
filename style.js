const toggleBtn = document.getElementById('toggle');
const body = document.body;

toggleBtn.addEventListener('click', function(){
    body.classList.toggle('dark-mode')
} )

function calcularConversao() {
    const real = document.getElementById('real').value;
    const resultado = real * (real** 0,5);

    document.getElementById('resultado').textContent = resultado.toFixed(1)
}

