import React, {Component} from 'react';
import {connect} from'react-redux';
import Cart from '../components/Cart';
import PropTypes from 'prop-types';
import * as Message from '../constants/Message';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import {actChangeMessage, actDeleteProductInCart, actUpdateProductInCart} from '../actions/index';
class  CartContainer extends Component {
  
    render(){
        var {cart,onDeleteInCart} =this.props;
        return (
            <Cart> 
              {this.showCartItem(cart)}
              {this.showTotal(cart)}
             </Cart>
        );
    }
    showCartItem = (cart) => {
      var result = <tr><td>{Message.MESS_CART_EMPTY}</td></tr>;
      var {onDeleteInCart,onChangeMessage,onUpdateProductInCart} =this.props;
      if(cart.length > 0 ){
        result= cart.map((item ,index)=>{
            return (<CartItem  key={index} item={item} index={index} onUpdateProductInCart={onUpdateProductInCart} onDeleteInCart={onDeleteInCart} onChangeMessage={onChangeMessage} />
            );
        })
      }
      return result;
    
    }
    showTotal =(cart) => {
      var result = null;
      if(cart.length > 0 ){
        result = <CartResult cart={cart}/>
        
      }
      return result;
    }
    
}
CartContainer.propTypes ={
    cart : PropTypes.arrayOf(
        PropTypes.shape({
          product : PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            descript : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired

        }).isRequired,
        quantity : PropTypes.number.isRequired
      })).isRequired
}

const mapStateToProps = (state) =>{
  return {
    cart : state.cart
  }
}
const mapDispatchToProps = (dispatch, drops) =>{
  return {
    onDeleteInCart : (product)=>{ //onDeleteInCart la props
      dispatch(actDeleteProductInCart(product)); // dispatch action actDeleteProductInCart thanh prop co ten la onDeleteInCart

    },
    onChangeMessage : (message) =>{
      dispatch(actChangeMessage(message));
    },
    onUpdateProductInCart : (product ,quantity)=>{
      dispatch(actUpdateProductInCart(product,quantity));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
