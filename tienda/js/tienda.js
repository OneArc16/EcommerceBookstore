//----------------------CONSTANTES ---------------------- //
const añadirAlCarrito = document.querySelectorAll('.añadir')

añadirAlCarrito.forEach(añadirCarrito => {
    añadirCarrito.addEventListener('click', añadirLibro)
})

function añadirLibro(event) {
    const button = event.target
    const Card = button.closest('.Card')

    const bookName = Card.querySelector('.Card-Name').textContent
    const bookPrice = Card.querySelector('.Card-Price').textContent
    const bookAutor = Card.querySelector('.Card-Autor').textContent
    const bookImg = Card.querySelector('.imgCard').src

    console.log(bookName, bookPrice, bookAutor, bookImg)
}

// /*TIENDA*/
// window.addEventListener("scroll", function(){
//     var header = document.querySelector("header");
// 		header.classList.toggle("abajo",window.scrollY>0);
// })
