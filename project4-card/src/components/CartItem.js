import React, {Component} from 'react';
import * as Message from '../constants/Message'

class  CartItem extends Component {
    
    onUpdateQuantity =(product, value) =>{
        if(value>0 ) {
            var {onUpdateProductInCart,onChangeMessage} = this.props;
            
            onUpdateProductInCart(product,value);
            onChangeMessage(Message.MESS_UPDATE_CART_SUCCESS);
        }

    }

    onDelete (product){
        var {onDeleteInCart,onChangeMessage} =this.props;

        onDeleteInCart(product);
        onChangeMessage(Message.MESS_DELETE_PRODUCT_IN_CART_SUCCESS);

    }
  render(){
      var {item} =this.props;
      var {quantity} =item;
      
  return (
    <tr>
        <th scope="row">
            <img src={item.product.image}
                 className="img-fluid z-depth-0" />
        </th>
        <td>
            <h5>
                <strong>{item.product.name}</strong>
            </h5>
        </td>
        <td>{item.product.price}</td>
        <td className="center-on-small-only">
            <span className="qty">{quantity}</span>
            <div className="btn-group radio-group" data-toggle="buttons">
                <label onClick={()=>this.onUpdateQuantity(item.product,item.quantity-1)} className="btn btn-sm btn-primary
                    btn-rounded waves-effect waves-light">
                    <a>—</a>
                </label>
                <label onClick={()=>this.onUpdateQuantity(item.product,item.quantity+1)} className="btn btn-sm btn-primary
                    btn-rounded waves-effect waves-light">
                    <a>+</a>
                </label>
            </div>
        </td>
        <td>{this.showTotal(item.product.price, item.quantity)}</td>
        <td>
            <button onClick={ () =>this.onDelete(item.product)} type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                title="" data-original-title="Remove item">
                X
            </button>
        </td>
    </tr>
  );
}
showTotal =(price, quantity)=>{
    return price * quantity;

}
}


export default CartItem;
