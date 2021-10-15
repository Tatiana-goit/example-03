import './App.scss';
import { Component } from 'react';
import Form from './components/Form/Form';
import { ProductList } from './components/Products/ProductList';
import {Modal} from "./components/Modal/Modal"

class App extends Component {
  state = {
    counter: 0,
    isOpen: false,
    allProducts: [],
    showModal: false,
  };

  componentDidMount() {
    console.log('MOUNT');
    const localProducts = localStorage.getItem('products');
    const parseProduct = JSON.parse(localProducts);
    this.setState ({allProducts: parseProduct})
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('UPDATE');
    if (prevState.allProducts !== this.state.allProducts) {
      localStorage.setItem('products', JSON.stringify(this.state.allProducts))
    }
  }

  // componentWillUpdate() {
  //   console.log('UNMOUNT');
  // }


  addNewProduct = obj =>
    this.setState(prevState => ({
      allProducts: [...prevState.allProducts, obj],
    }));

  deleteProduct = id =>
    this.setState(prev => ({
      allProducts: prev.allProducts.filter(prod => prod.id !== id),
    }));


  render() {
    console.log('RENDER');
    return (
      <div className="App">
        <h1> Exemple Alexandri</h1>
        {this.state.showModal && (
          <Modal>
            <Form addNewProduct={this.addNewProduct} />
          </Modal>
        )}
        
        
        <ProductList
          products={this.state.allProducts}
          onDeleteProduct={this.deleteProduct}
        />
      </div>
    );
  }
}
export default App;
