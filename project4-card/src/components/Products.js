import React, {Component} from 'react';

import Product from './Product';
class  Products extends Component {
  
  render(){
    var {products} =this.props;
  return (
    <section className="section">
                    <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                    <div className="row">
                      {this.props.children}
                    </div>
                </section>
  );
}
}

export default Products;
