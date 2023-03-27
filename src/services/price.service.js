exports.fetchPrice = async (nameOfCurrency) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };  
    
    const requestParameters = {
      ids: nameOfCurrency,
      vs_currencies: "inr"
    };
      
    const price = await fetch("https://api.coingecko.com/api/v3/simple/price?" + new URLSearchParams(requestParameters), requestOptions)
      .then(response => response.json())
      .catch(error => console.log('error', error));

    return price;
}