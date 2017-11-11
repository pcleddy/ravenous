import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp';

let m_business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const m_businesses = [ m_business, m_business, m_business, m_business, m_business, m_business ];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { businesses: [] };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    console.log(`Searching Yelp by ${term}, ${location}, ${sortBy}`);
    Yelp.search(term, location, sortBy).then(
        businesses => {
          this.setState( {businesses: businesses} )
          //this.setState( {businesses: [ m_business, m_business, m_business, m_business, m_business, m_business ]} )
        }
    )
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={m_businesses} />
        <h1>END</h1>
      </div>
    );
  }
}

export default App;
