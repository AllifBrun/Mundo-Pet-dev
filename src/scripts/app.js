export function initEventListeners(){



const botao = document.querySelector("#botao")
const fechar = document.querySelector("#fechar")
const book = document.querySelector("#book")
const main = document.querySelector("main")

botao.addEventListener("click", (e)=>{
    e.preventDefault()

    book.style.display = "flex"
    console.log("clicado")
    main.classList.add("blur")


    fechar.addEventListener('click', (e)=>{
        e.preventDefault()

        book.style.display = "none"
        main.classList.remove("blur")

    })

})



}