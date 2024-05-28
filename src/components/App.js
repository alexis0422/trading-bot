import React, { Component } from 'react';
import Header from './Hearder/header.js'
import Footer from './Footer/footer.js';
import Display from './Display/Display.jsx';
import WalletList from './WalletList.jsx';
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Display />
        <Footer />
      </div>
    );
  }
}
export default App;