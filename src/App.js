import React, {Component} from 'react';
import './App.css';

const productItemView = (product) =>
    <li style={{padding: "30px", listStyle: "none", border: "1px solid #000", margin: "5px"}}>
        <b>{product}</b> <br/>
        $ {(Math.random() * 100).toFixed(2)} <br/>
        <button>Buy</button>
    </li>

class App extends Component {
    render() {
        return (
            <section>
                <h2>Products</h2>
                <ul style={{display: 'flex', padding: '0'}}>
                    {['Rice', 'Beans', 'Fries', 'Steak'].map(productItemView)}
                </ul>
            </section>
        );
    }
}

export default App;
