import React, {Component} from 'react';
import {connect} from'react-redux';
import Product from '../components/Product';
import Products from '../components/Products';
import PropTypes from 'prop-types';
import {actAddToCart,actChangeMessage} from '../actions/index';

class  ProductContainer extends Component {
  
    render(){
        var {products} =this.props;
        return (
            <Products >
                {this.showProduct(products)}
            </Products>
        )
    }
    showProduct (products){
      var {onAddToCart ,onChangeMessage} =this.props;
        var result = null;
        if(products.length > 0) {
          result = products.map( (product ,index) =>{
            return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage}/>
          })
        }
        return result;
      }
}
ProductContainer.propTypes ={
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            descript : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
        })     
    ).isRequired,
    onChangeMessage : PropTypes.func.isRequired

}
const mapStateToProps = state => {
  return {
    products :state.products

  }
}
const mapDispatchToProps = (dispatch,props) =>{
  return {
    onAddToCart : (product)=>{
      dispatch(actAddToCart(product,1));

    },
    onChangeMessage : (message) => {
      dispatch(actChangeMessage(message));

    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
