const booksList = document.querySelector('#bookList')
const inputBuscar = document.querySelector('#input')
const filtro = document.querySelectorAll('#filtro')
let book = []
document.addEventListener('DOMContentLoaded', async() => {
    booksList.innerHTML = "<h1>Loading</h1>"
    const data = await fetchBook()
    book = data.data
    renderBooks(book)

})
input.addEventListener('keyup', (e) => {
    const newBooks = book.filter(book => book.title.toLowerCase().includes(input.value))
    renderBooks(newBooks)
})

//aca jesus debe hacer la coneccion es todo
const fetchBook = async() => {
    try {
        const response = await fetch('https://fakerapi.it/api/v1/books?_quantity=10')//aca cambias la cantidad de libros
        return await response.json()
    } catch (error) {
        console.error();
    }
}
const creatBooksItem = book => book.map(book => `
<div class="col-md-4">
                            <div class="card mb-4 product-wap rounded-0">
                                <div class="card rounded-0">
                                    <img class="card-img rounded-0 img-fluid" src="${book.image}" style="width:350px;">
                                    <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                        <ul class="list-unstyled">
                                            <li><a class="btn btn-success text-white" href="/tienda/producto.html"><i class="far fa-heart"></i></a></li>
                                            <li><a class="btn btn-success text-white mt-2" href="/tienda/producto.html"><i class="far fa-eye"></i></a></li>
                                            <li><a class="btn btn-success text-white mt-2" href="/tienda/producto.html"><i class="fas fa-cart-plus"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <a href="/tienda/producto.html" class="h3 text-decoration-none">${book.title}</a>
                                    <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
                                        <li>${book.author}</li>
                                        <li class="pt-2">
                                            <span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                            <span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                            <span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                            <span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                            <span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                        </li>
                                    </ul>
                                    <ul class="list-unstyled d-flex justify-content-center mb-1">
                                        <li>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-muted fa fa-star"></i>
                                            <i class="text-muted fa fa-star"></i>
                                        </li>
                                    </ul>
                                    <p class="text-center mb-0">${book.price}</p>
                                </div>
                            </div>
                        </div>
`).join(" ")

function renderBooks(book) {
    const itemBooks = creatBooksItem(book)
    booksList.innerHTML = itemBooks
}