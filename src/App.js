import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dropdownview: false
    }
  }

  toggleDropdown = () => {
    this.setState({dropdownVeiw: !this.state.dropdownView})
  }

  render(){
    return (
      <div className="App">
        
        <div>
          <header className="App-header">
            <div className='Logo'>Bootstrap</div>

              <nav className='desktop'>
                <span>About</span>
                <span>Projects</span>
                <span>Contact</span>
              </nav>

              <div className='dropdown' onClick={this.toggleDropdown}>MENU</div>
              { this.state.dropdownVeiw
                ? (
                  <nav className='mobile'>
                  <span>About</span>
                  <span>Projects</span>
                  <span>Contact</span>
                </nav>
                  
                 ) :  null}
          </header>
        </div>
            
            <section>
              <h1>GRAYSCALE</h1>
              <p>A free, responsive, one page Bootstrap </p>
              <p>theme created by Start Bootstrap.</p>
              <button>GET STARTED</button>
            </section>

            
      </div>
    );
  }
}

export default App;
