var nom= document.getElementById('nome')
var alt= document.getElementById('altura')
var sexm= document.getElementById('masc')
var sexf= document.getElementById('fem')
var sex= document.getElementsByName('input#radsex')
var r= document.getElementById('res')
var sel= document.getElementById('seleção')
var qntsexm= []
var qntsexf= []

function adicionar () {
    if(nom.length == 0 || alt.value.length == 0) {
        window.alert('Adicione nos espaços em branco')
    } else if(sexm.checked) {
        qntsexm.push(sexm)
        var item= document.createElement('option')
        sel.appendChild(item)
        item.text= `${nom.value} possui ${alt.value} de altura e é do sexo Masculino.`
        nom.value= ''
        alt.value= ''
        nom.focus()
    } else if(sexf.checked){
        qntsexf.push(sexf)
        var item= document.createElement('option')
        sel.appendChild(item)
        item.text= `${nom.value} possui ${alt.value} de altura e é do sexo Feminino.`
        nom.value= ''
        alt.value= ''
        nom.focus()
    }
}
function verificar(){
        if (seleção.length == 0){
            window.alert('Adicione dados antes de verificar.')
        } else {
        var sexomasc= qntsexm.length
        var sexofem= qntsexf.length
        r.innerHTML= `Temos ${sexomasc} pessoas do gênero masculino e ${sexofem} do gênero feminino.`
    }
}