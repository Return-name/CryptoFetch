exports.fetchAll = async (userAddress) => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const requestParameters = {
        module: "account",
        action: "txlist",
        address: userAddress,
        startblock: 0,
        endblock: 99999999,
        page: 1,
        offset: 10000,
        sort: "asc",
        apikey: process.env.API_KEY
    }
    
    const transactions = await fetch('https://api.etherscan.io/api?' + new URLSearchParams(requestParameters), requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));

    return transactions;
}