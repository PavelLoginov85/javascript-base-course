const goodsItem = [
    {id:1 , title: 'Notebook', price: 1500},
    {id:2 , title: 'Mouse', price: 20},
    {id:3 , title: 'Keybord', price: 90},
    {id:4 , title: 'Computer', price: 2200}
];

const insertData = (goodsItem, img = 'http:via.placeholder.com/200x150') => 
    `<div class = "goodsList">
    <img src="${img}">
    <h3 class = "title_good">${goodsItem.title}</h3>
    <p class = "price_good">${goodsItem.price}</p>
    <button class="button_buy">Купить</button>
</div>
`;


    let sumAllgoods = 0;
    goodsItem.forEach(item => {
    sumAllgoods += item.price})
    alert(`Сумма заказа ${sumAllgoods}`)
    
 

const renderPage = goodsItem => {
const Pagegoods = goodsItem.map(item => insertData(item));
//console.log(Pagegoods);
//document.querySelector('.goods').innerHTML = Pagegoods.join("");
document.querySelector('.goods').innerHTML = (goodsItem.map(item => insertData(item))).join('');

};

renderPage(goodsItem);