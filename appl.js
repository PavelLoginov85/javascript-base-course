const products = [
{id:1, title:'Notebook', price: 2000, img:"img/39.jpg"},
{id:2, title:'Mose', price: 20,img:"img/7.jpg"},
{id:3, title:'Keyboard', price: 200,img:"img/50.jpg"},
{id:4, title:'Gemapad', price: 2000,img:"img/8.jpg"},
];

//Самостоятельно убрать запятые не смог. Сам только нашел метод "join".
// Аптимизацию тоже содрал, пока даётся очень трудно. Сам сделал вёртску и добавил картинки.

const renderProduct = (product) =>{

    return `
    <div class ="product-items">
    <img class = "photo" src="${product.img}">
    <h3 class="text_title">${product.title}</h3>
    <p class="text_price">${product.price}</p>
    <button class="btn1-cart" type="button">Купить</button>
    </div>`
};

    const renderPage = list =>{
        document.querySelector('.products').innerHTML = productsList = list.map(item =>renderProduct(item)).join('');
        

    };
    renderPage(products);