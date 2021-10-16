import './App.scss';
import { Component } from 'react';
import Form from './components/Form/Form';
import { ProductList } from './components/Products/ProductList';
import { Modal } from './components/Modal/Modal';

class App extends Component {
  state = {
    counter: 0,
    isOpen: false,
    allProducts: [],
    showModal: false,
  };

  componentDidMount() {
    const localProducts = localStorage.getItem('products');
    const parseProduct = JSON.parse(localProducts);
    if (parseProduct) {
      this.setState({ allProducts: parseProduct });
    }    
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.allProducts !== this.state.allProducts) {
      localStorage.setItem('products', JSON.stringify(this.state.allProducts));
    }
  }

  // componentWillUpdate() {
  // }

  addNewProduct = obj =>
    this.setState(prevState => ({
      allProducts: [...prevState.allProducts, obj],
    }));

  deleteProduct = id =>
    this.setState(prev => ({
      allProducts: prev.allProducts.filter(prod => prod.id !== id),
    }));

  // toogleModal = () => {
  //   this.setState({ showModal: !this.state.showModul });
  // };
  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  render() {
     return (
      <div className="App">
         {this.state.showModal && (
          <Modal toggleModal={this.toggleModal}>
            <Form addNewProduct={this.addNewProduct} />
          </Modal>
        )}
        <h1> Exemple Alexandri</h1>
        <button type="button" onClick={this.toggleModal}>
          Add product
        </button>
       
        <ProductList
          products={this.state.allProducts}
          onDeleteProduct={this.deleteProduct}
        />
      </div>
    );
  }
}
export default App;
