import React from 'react';
import './Business.css';

class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img src={this.props.a_business.imageSrc} alt=''/>
          </div>
            <h2>{this.props.a_business.name}</h2>
            <div className="Business-information">
            <div className="Business-address">
              <p>{this.props.a_business.address}</p>
              <p>{this.props.a_business.city}</p>
              <p>{this.props.a_business.state} {this.props.a_business.zip}</p>
            </div>
            <div className="Business-reviews">
              <h3>{this.props.a_business.category}</h3>
              <h3 className="rating">{this.props.a_business.rating} stars</h3>
              <p>{this.props.a_business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Business;