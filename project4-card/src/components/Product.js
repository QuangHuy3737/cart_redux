import React, {Component} from 'react';
import * as Message from './../constants/Message';

class  Product extends Component {
    showRating(rating){
        var result = [];            

        for (var i = 1 ;i<=rating ;i++){
            result.push(<i key={i} className="fa fa-star"></i>);
        }
        for (var i = 1 ;i<=(5-rating) ;i++){
            result.push(<i key={i+10} className="fa fa-star-o"></i>);
        }  
        return result;

    }
    onAddToCart =(product) => {
        this.props.onAddToCart(product);
        this.props.onChangeMessage(Message.MESS_ADD_TO_CART_SUCCESS);

    }
  render(){
      var{product} =this.props;
  return (
    <div className="col-lg-4 col-md-6 mb-r">
                            <div className="card text-center card-cascade narrower">
                                <div className="view overlay hm-white-slight z-depth-1">
                                    <img src={product.image}
                                        className="img-fluid" alt="" />
                                    <a>
                                        <div className="mask waves-light waves-effect waves-light"></div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <strong>
                                            <a>{product.name}</a>
                                        </strong>
                                    </h4>
                                    <ul className="rating">
                                        <li>
                                        {this.showRating(product.rating)}
                                        </li>
                                    </ul>
                                    <p className="card-text">
                                        {product.descript}
                                    </p>
                                    <div className="card-footer">
                                        <span className="left">{product.price}</span>
                                        <span className="right">
                                            <a onClick={()=>this.onAddToCart(product)} className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
  );
}

}

export default Product;
