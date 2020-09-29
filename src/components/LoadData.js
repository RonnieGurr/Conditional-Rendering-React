const axios = require('axios');

async function loadData(type) {
    const response = await axios.get(`http://localhost:3002/${type}`)
        .then(function (response) {
            console.log(response.data)
            return response.data
        })
        .catch(function (error) {
            return 'Error'
        })

    return response
}

export default loadData;