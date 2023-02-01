document.addEventListener('DOMContentLoaded', () => {
    const prestador = "heberto"
    const data = "23/10/2023"
    const hora = "20:20"
    const id1 = "1"
    const id2 = "2"

     const i = 1


    if (i == 1) {
        creatDiv(prestador,data,hora,id1)
        creatDiv(prestador, data, hora,id2)
        displayNone()
    }

})


function creatDiv(prestador,dia,hora,id) {

    //criando paragrafo  ---paragrafo 1 (Instalação)--- 
    const divNew = document.createElement("div")
    const paragrafo1 = document.createElement("p")
    const strong1 = document.createElement("strong")
    const a1 = document.createElement("a")
    const img1 = document.createElement("img")
    const texto1 = document.createTextNode("Instalação")
    const a2 = document.createElement("a")
    const img2 = document.createElement("img")


    //criando paragrafo ---paragrafo 2 (Prestador)---
    const paragrafo3 = document.createElement("p")
    const strong3 = document.createElement("strong")
    const texto3 = document.createTextNode("Prestador: ")
    const textoprestador = document.createTextNode(prestador)


    //criando paragrafo --- paragrafo 3 (dia)---
    const paragrafo4 = document.createElement("p")
    const strong4 = document.createElement("strong")
    const texto4 = document.createTextNode("Dia: ")
    const textodia = document.createTextNode(dia)

    //criando paragrafo --- paragrafo 3 (dia)---
    const paragrafo5 = document.createElement("p")
    const strong5 = document.createElement("strong")
    const texto5 = document.createTextNode("Hora: ")
    const textohora = document.createTextNode(hora)



    //logica --- paragrafo1 (Instalação) ---
    divNew.className = "alert alert-success div-agendamento"
    a1.href = "../index.html"
    a2.href = "../pages/minha-agenda.html"
    strong1.className = "a1"
    img1.className = "a1-img"
    img1.src = "../img/edit_square_FILL0_wght400_GRAD0_opsz48.png"
    img2.className = "a2-img"
    img2.src = "../img/delete_FILL0_wght400_GRAD0_opsz48.png"
    paragrafo1.className = "p-a4"
    paragrafo3.className = "p-a4"
    paragrafo4.className = "p-a4"
    paragrafo5.className = "p-a4"
    divNew.id = id
 
    //logica --- paragrafo2 (prestador)---
    strong3.appendChild(texto3)
    paragrafo3.appendChild(strong3)
    paragrafo3.appendChild(textoprestador)

    //paragrafo --- paragrafo 3 (dia)---
    strong4.appendChild(texto4)
    paragrafo4.appendChild(strong4)
    paragrafo4.appendChild(textodia)

    //paragrafo --- paragrafo 4 (hora)---
    strong5.appendChild(texto5)
    paragrafo5.appendChild(strong5)
    paragrafo5.appendChild(textohora)

    //appende ---instalação---
    strong1.appendChild(texto1)
    a1.appendChild(img1)
    a2.appendChild(img2)
    paragrafo1.appendChild(strong1)
    paragrafo1.appendChild(a1)
    paragrafo1.appendChild(a2)




    //append ---div---
    divNew.appendChild(paragrafo1)
    divNew.appendChild(paragrafo3)
    divNew.appendChild(paragrafo4)
    divNew.appendChild(paragrafo5)




    //    paragrafro ---istalação---
    document.getElementById("div-p").appendChild(divNew)
}
function displayNone(){

    const divDisplay = document.getElementById("div-p-alert")

    divDisplay.className = "display"
}