import React, {Component} from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import MessageContainer from './containers/MessageContainer';
import CartContainer from './containers/CartContainer';
import ProductContainer from './containers/ProductContainer';


class  App extends Component {
  render(){
  return (
    <div className="App">
      <div>
       
        <Header />
        <main id="mainContainer">
            <div className="container">
                
                <ProductContainer />
               
                <MessageContainer/>
                
                <CartContainer />
            </div>
        </main>
       {/* Foooter */}
        <Footer />
    </div>
    </div>
  );
}
}

export default App;
