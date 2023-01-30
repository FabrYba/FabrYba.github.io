const claro = document.getElementById('claro')
const body = document.querySelector('body')
const header = document.getElementById('head')
const cont = document.getElementById('cont')
const conte = document.getElementById('conte')


//const cont = document.getElementsByClassName('cont') 

claro.addEventListener('click', function(light)  {
    this.style.backgroundColor = '#45b1e8'
    if(this.style.backgroundColor = '#45b1e8') {
        oscuro.style.backgroundColor = '#2a2a2a';
        header.style.backgroundColor = '#05729D';
        body.style.backgroundColor = '#B1c2d5';
        body.style.color = '#2a2a2a';
        cont.style.backgroundColor = '#2a2a2a';
        conte.style.backgroundColor = '#2a2a2a';
    }
    else{}
})
oscuro.addEventListener('click', function(dark) {
    this.style.backgroundColor = '#c8c6c4'
    if(this.style.backgroundColor = '#c8c6c4') {
        claro.style.backgroundColor = '#2a2a2a';
        header.style.backgroundColor = '#797775';
        body.style.backgroundColor = '#201f1e';
        body.style.color = '#c8c6c4';
        cont.style.backgroundColor = '#c8c6c4';
        conte.style.backgroundColor = '#c8c6c4';
    }else{}
}
)
function def() {
    claro.style.backgroundColor = '#45b1e8';
    oscuro.style.backgroundColor = '#2a2a2a';
    header.style.backgroundColor = '#05729D';
    body.style.backgroundColor = '#B1c2d5';
    body.style.color = '#2a2a2a';
    cont.style.backgroundColor = '#2a2a2a';
    conte.style.backgroundColor = '#2a2a2a';
}
def()

function cel() {
    var copyText = '+5491113456789';
    navigator.clipboard.writeText(copyText).then(() => {
        alert("El numero telefono ha sido copiado");
    });
  }
  function mail() {
    var copyText = 'bruce.porter@example.com';
    navigator.clipboard.writeText(copyText).then(() => {
        alert("El correo electronico ha sido copiado");
    });
  }
