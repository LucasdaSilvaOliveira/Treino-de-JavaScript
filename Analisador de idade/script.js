var num= document.getElementById('numero')
var sel= document.getElementById('seleção')
var r= document.getElementById('res')
var maior= Number(num.value) >= 18
var menor= Number(num.value) <= 17
var valoresma= []
var valoresme= []

function adicionar() {
    r.innerHTML= ''
    if (num.value.length == 0) {
        window.alert('Adicione uma idade.')
        num.value= ''
        num.focus()
    } else if(Number(num.value) >= 18 && Number(num.value) <= 110) {
        valoresma.push(maior)
        var item= document.createElement('option')   
        sel.appendChild(item)
        item.text= `${num.value} anos.`
        num.value= ''
        num.focus()
    } else if(Number(num.value) <= 17){
        valoresme.push(menor)
        var item= document.createElement('option')   
        sel.appendChild(item)
        item.text= `${num.value} anos.`
        num.value= ''
        num.focus()
    } else if(num.value >= 110) {
        window.alert('Uma pessoa não vive tanto tempo assim !')
        num.value= ''
        num.focus()
    }
}
function verificar() {
    if(seleção.length == 0) {
        window.alert('Adicione algum item antes de verificar.')
    } else {
        var totma = valoresma.length
        var totme = valoresme.length
        r.innerHTML= `<p>Temos ${totma} pessoas maior de idade.</p>`
        r.innerHTML+= `<p>Temos ${totme} pessoas menor de idade.</p>`
    }
}
