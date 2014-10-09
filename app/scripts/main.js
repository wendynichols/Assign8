console.log('The Iron yard rocks')


 var container = $('#etsyList'),
 title, shopname, price, picture, currency, page;

etsyList.results.forEach(function(et) {


    title = "<p class= 'truncate'>" + et.title + "</p>";

    shopname = "<p class= 'sn'>" + et.Shop.shop_name + "</p>";

    price = "<p class= 'pr'>" + et.price + "</p>";

    currency = "<p class='cc'>" + et.currency_code + "</p>";

    et.Images.forEach(function (x) {
      picture = '<img src="' + x.url_170x135 + '">';
    });


    var page = '<li class= "everything">' + picture + title + shopname + currency + price + '</li>';

    container.append(page);
});


    //Hover Buttons

box = "<img class='box' src='" + 'https://raw.githubusercontent.com/tiy-atlanta-js/Assignments/master/Assignment%2008/assets/hamburger.png' + "' />"+"<img class='box2' src='" + 'https://raw.githubusercontent.com/tiy-atlanta-js/Assignments/master/Assignment%2008/assets/heart.png' + "' />";


$('li').hover(
  function(){
    $(this).toggleClass('showButtons');
  }
);




//ORIGINAL WORK
// var shopname = etsyList.results.forEach(function (sh) {
//   console.log(sh.Shop.shop_name)
// });
//
// var price = etsyList.results.forEach(function (p) {
//   price = p.price;
//   console.log(price);
// });
//
// var currency = etsyList.results.forEach(function (cc) {
//   currency = cc.currency_code;
//   console.log(currency);
// })
//
//   etsyList.results.forEach(function(x) {
//     x.Images.forEach(function (y) {
//       var picture = y.url
//     })
//   })
