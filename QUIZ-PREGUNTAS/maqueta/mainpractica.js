const root = document.getElementById('root')
    // root.innerHTML=crearImputRadio()
//creamos el elemento form
const form = document.createElement('form')
const divQ = document.createElement('div')
form.appendChild(divQ)
//agregamos el form a root
root.appendChild(form)

const data = {
    q: "Pregunta",
    a1: 'A)',
    a2: 'B)',
    a3: 'C)',
    a4: 'D)'
}

function crearQuestion(data){
    const inputRadio = `
    <p>${data.q}</p>
<div>
<label for='q1a'>${data.a1}</label>
<input id='q1a' name='q1' type='radio'>
</div>
<div>
<label for='q1b'>${data.a2}</label>
<input id='q1b' name='q1' type='radio' checked>
</div>
<div>
<label for='q1c'>${data.a3}</label>
<input id='q1c' name='q1' type='radio'>
</div>
<div>
<label for='q1d'>${data.a4}</label>
    <input id='q1d' name='q1' type='radio'>
</div>
`
return inputRadio
}

divQ.innerHTML=crearQuestion(data)