export const cart=[];

export function addToCart(productId){
   const exsistingItem=cart.find(cartItem => cartItem.productId===productId);

      if(exsistingItem){
         exsistingItem.quantity++;
      }
      else{
         cart.push({
         productId:productId,
         quantity:1
         });
      }
}
