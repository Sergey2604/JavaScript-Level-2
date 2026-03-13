// const goods = [
//     { title: 'Shirt', price: 150 },
//     { title: 'Socks', price: 50 },
//     { title: 'Jacket', price: 350 },
//     { title: 'Shoes', price: 250 },
// ];

// const $goodsList = document.querySelector('.goods-list');
  
// const renderGoodsItem = ({ title, price }) => {
//     return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
// };
  
// const renderGoodsList = (list = goods) => {
//     let goodsList = list.map(
//             (item) =>  {
//                 return renderGoodsItem(item)
//             }
//         ).join('');

//     $goodsList.insertAdjacentHTML('beforeend', goodsList);
// }
  
// renderGoodsList();


class GoodsItem {               //элемент корзины
    constructor(title, price) {
      this.title = title;
      this.price = price;
    }

    render() {
      return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}

class GoodsList {                       // корзина
    constructor() {
      this.goods = [];
    }

    fetchGoods() {
        this.goods = [
          { title: 'Shirt', price: 150 },
          { title: 'Socks', price: 50 },
          { title: 'Jacket', price: 350 },
          { title: 'Shoes', price: 250 },
        ];
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
          const goodItem = new GoodsItem(good.title, good.price);
          listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    summa() {                                   //Сложение цен
        let result = this.goods.map(map => map.price);
        const sum = result.reduce(function (a, b) {
            return a + b
        }) ;
        console.log(result)
        console.log(sum)
    }
}  

const list = new GoodsList();
list.fetchGoods();
list.render();
list.summa()