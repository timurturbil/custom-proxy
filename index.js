const https = require('https');
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 8080;

const agent = new https.Agent({
  rejectUnauthorized: false
});

app.use(express.json());
app.use(cors())

//Check if the server is running
app.get('/', (req, res) => {
    res.status(200).send('Trendyol Proxy server is running');
});

//GET
app.get('/:url(*)', async (req, res) => {
//    try {
//        const url = req.params.url;
//        const params = req.query;
//        const headers = {
//            "Content-Type": req.headers["content-type"],
//            "Authorization": req.headers["authorization"]
//        }
//
//        console.log({url, params, headers})
//
//        const response = await axios.get(url, {params: params, headers: headers});
//        res.status(200).send(response.data);
//    } catch (error) {
//        res.status(400).send(error);
//    }

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://stageapi.trendyol.com/stagesapigw/suppliers/2738/orders',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic M3hBVENLNU9rUjZwOExCb2h2c2U6UXFmRlhpVWF0MXg4MkQ0dmRTYlM=',
        'Cookie': '__cf_bm=WEJ5TjAP.0U7H_YADk_.Iqk9ftwd8.ST0Im9ACnMljk-1720696571-1.0.1.1-gB.sBNgGPLPCkxDNzzZUMWXTTSTEZYVqc8OR8pXgaTutxhwQ01k7GJyxDg7JmPWAZyn8tofZPaxr7jCgG69H1w; _cfuvid=WHmKQhscCBx0XMQVqqaTYIdPWS0.rHHWZqTuu732LgM-1720693763790-0.0.1.1-604800000'
      }
    };

    axios.request(config)
    .then((response) => {
        console.log(response.data);
        res.status(200).send(response.data);
    })
    .catch((error) => {
        console.log(error);
        res.status(400).send(error);
    });

});

//POST
app.post('/:url(*)', async (req, res) => {
    try {
        const url = req.params.url;
        const body = req.body;
        const headers = req.headers;

        //remove host and content-length
        delete headers.host;
        delete headers['content-length'];

        const response = await axios.post(url, body, {headers: headers, httpsAgent: agent});
        res.status(200).send(response.data);
    } catch (error) {
        res.status(400).send(error);
    }
});

//PUT
app.put('/:url(*)', async (req, res) => {
    try {
        const url = req.params.url;
        const body = req.body;
        const headers = req.headers;

        //remove host and content-length
        delete headers.host;
        delete headers['content-length'];

        const response = await axios.put(url, body, {headers: headers, httpsAgent: agent});
        res.status(200).send(response.data);
    } catch (error) {
        res.status(400).send(error);
    }
});

//PATCH
app.patch('/:url(*)', async (req, res) => {
    try {
        const url = req.params.url;
        const body = req.body;
        const headers = req.headers;

        //remove host and content-length
        delete headers.host;
        delete headers['content-length'];

        const response = await axios.patch(url, body, {headers: headers, httpsAgent: agent});
        res.status(200).send(response.data);
    } catch (error) {
        res.status(400).send(error);
    }
});

//DELETE
app.delete('/:url(*)', async (req, res) => {
    try {
        const url = req.params.url;
        const headers = req.headers;

        //remove host and content-length
        delete headers.host;
        delete headers['content-length'];

        const response = await axios.delete(url, {headers: headers, httpsAgent: agent});
        res.status(200).send(response.data);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(PORT, () => {
  console.log(`Trendyol Proxy server running on port ${PORT}`);
});