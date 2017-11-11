const clientId = 'WZyPW32NqyJNocfn2y1KjA';
const secret = 'UQDA4nJqnKT0Qbw7dpGulvEwQ1WiizT2JP9K9JBK3FcZZ1bmokfjxT7GVxy5u01E';
const accessToken = '';

let Yelp = {
  getAccessToken: function() {
    if ( accessToken ) {
      console.log(accessToken);
      return new Promise(
        resolve => {
          resolve(accessToken);
        }
      );
    }
    let m_url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${secret}`;
    console.log(m_url);
    //return fetch( m_url, {method: 'POST'} ).then( response => response.json() ).then(jsonResponse => { return jsonResponse.accessToken });
    let m_promise = fetch( m_url, {method: 'POST'} ).then( response => response.json() ).then(jsonResponse => { return jsonResponse.accessToken });
    console.log(accessToken);
    return m_promise;
  },
  search: function(term, location, sortBy) {
    return Yelp.getAccessToken().then(
      () => {
        console.log(accessToken);
        fetch(
          `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
          {
            headers: {Authorization: `Bearer ${accessToken}`}
          }
        ).then(
          jsonResponse => {
            console.log(jsonResponse);
            if (jsonResponse.businesses) {
              jsonResponse.businesses.map(
                business => {
                  return {
                  id: business.id,
                  imageSrc: business.imageSrc,
                  // name address city state zipCode category rating reviewCount
                  }
                }
              )
            }
          }
        )
      }
    )
  }
}

//module.exports = Yelp;
export default Yelp;
