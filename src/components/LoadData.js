const axios = require('axios');

async function loadData(type) {
    const response = await axios.get(`http://localhost:3002/${type}`)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            console.log(error)
        })

    return response
}

export default loadData;