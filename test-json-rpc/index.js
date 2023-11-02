const axios = require('axios');

async function recursiveHttpPost(url, data, depth) {
    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (depth > 0) {
            const recursiveResponse = await recursiveHttpPost(url, data, depth - 1);
            return recursiveResponse;
        } else {
            return response.data;
        }
    } catch (error) {
        console.error(error);
        throw new Error('HTTP POST request failed');
    }
}

const url = 'http://10.0.20.8:10002';
const requestData = {
    jsonrpc: '2.0',
    method: 'eth_getBlockByNumber',
    params: ['latest', true],
    id: 1,
};
const depth = 3; // Set the depth for recursive calls
const interval = 250; // Time interval in milliseconds

// Function to make calls continuously at the specified interval
function makeCallsContinuously() {
    recursiveHttpPost(url, requestData, depth)
        .then((result) => {
            if (result.result.trasactions) {
                console.log(result);                
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

// Start making calls continuously at the specified interval
setInterval(makeCallsContinuously, interval);
