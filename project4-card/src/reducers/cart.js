import * as type from '../constants/ActionType';
 var data =JSON.parse(localStorage.getItem('Cart'));
 var initialState = data ? data : [];

const cart = (state=initialState, action)=>{
    var {product,quantity} = action; 
    var index= -1;
    switch(action.type) {
        case type.ADD_TO_CART : 
            index =findProductInCart(state ,product) ; //state : product ,quantity
            if (index != -1){
                state[index].quantity += quantity;
            }
            else {
                state.push(
                    {product ,
                     quantity
                    });
            }
            localStorage.setItem('Cart' , JSON.stringify(state));
            
            return [...state];
        case type.DELETE_PRODUCT_IN_CART :
            index =findProductInCart(state ,product) ; //state : product ,quantity
            state.splice(index,1);
            localStorage.setItem('Cart' , JSON.stringify(state));
        case type.UPDATE_PRODUCT_IN_CART :
            index =findProductInCart(state ,product) ; //state : product ,quantity
            if (index !== -1){
                state[index].quantity = quantity;
            }
            localStorage.setItem('Cart' , JSON.stringify(state));


        default : return [...state];

    }
}
var findProductInCart = (cart, product)=>{
    var index= -1;
    if(cart.length > 0) {
        for(var i = 0; i< cart.length ; i++){
            if(cart[i].product.id === product.id){
                index =i;
                break;
            }
        }
    }
    return index ;

}

export default cart;