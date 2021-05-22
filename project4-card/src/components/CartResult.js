import React, {Component} from 'react';


class  CartResult extends Component {
  showTotal = (cart) =>{
      var total= 0 ;
      if(cart.length > 0 ){
          for( var i = 0 ; i<cart.length ; i++){
                total +=cart[i].product.price * cart[i].quantity ;
          }
      }
      return total;
  }
  render(){
      var {cart} =this.props;
  return (
    <tr>
        <td colSpan="3"></td>
        <td>
            <h4>
                <strong>Tổng Tiền</strong>
            </h4>
        </td>
        <td>
            <h4>
                <strong>{this.showTotal(cart)}$</strong>
            </h4>
        </td>
        <td colSpan="3">
            <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                <i className="fa fa-angle-right right"></i>
            </button>
        </td>
    </tr>
  );
}
}

export default CartResult;
