import React from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './components/modal';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section className="content">
          <div onClick={this.toggleModal}>
            Open the modal
          </div>
          <Modal 
            show={this.state.isOpen} 
            close={this.toggleModal} 
            modalSize="small" 
            headline="My Modal" 
            footer="Copyright"
          >
            <div>
              Hi
            </div>
          </Modal>
        </section>
        <footer className="App-footer">
          (c) Copyright - Mike Ludemann
        </footer>
      </div>
    );
  }

}

export default App;
