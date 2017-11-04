import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {
          this.props.a_businesses.map(p_business => {
            return <Business a_business={p_business} />
          })
        }
      </div>
    )
  }
}

export default BusinessList;
