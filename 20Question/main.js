const shoppingCart=['Milk','Coffee','Tea','Honey'];
//added Meat
shoppingCart.unshift('Meat');
//added Sugar
shoppingCart.push('Sugar');
console.log(shoppingCart);
//Removed Honey
const index=shoppingCart.indexOf('Honey');
const x=shoppingCart.splice(index,1);
console.log(shoppingCart);
//modifyed Tea
shoppingCart[3]='Green Tea';
console.log(shoppingCart);