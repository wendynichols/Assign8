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


    var page = '<ul class= "box">' + picture + title + shopname + currency + price + '</ul>';
    container.append(page);
});





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
