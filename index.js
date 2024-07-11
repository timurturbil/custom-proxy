const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors())

//Check if the server is running
app.get('/', (req, res) => {
    res.status(200).send('Trendyol Proxy server is running');
});

//GET
app.get('/:url(*)', async (req, res) => {
    try {
        const url = req.params.url;
        const params = req.query;
        const headers = {
            "Content-Type": req.headers["content-type"],
            "Authorization": req.headers["authorization"],
            "User-Agent": req.headers["user-agent"]
        }

        const response = await axios.get(url, {params: params, headers: headers});
        res.status(200).send(response.data);
    } catch (error) {
        res.status(400).send(error);
    }
});

//POST
app.post('/:url(*)', async (req, res) => {
    try {
        const url = req.params.url;
        const body = req.body;
        const headers = {
            "Content-Type": req.headers["content-type"],
            "Authorization": req.headers["authorization"],
            "User-Agent": req.headers["user-agent"]
        }

        const response = await axios.post(url, body, {headers: headers});
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
        const headers = {
            "Content-Type": req.headers["content-type"],
            "Authorization": req.headers["authorization"],
            "User-Agent": req.headers["user-agent"]
        }

        const response = await axios.put(url, body, {headers: headers});
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
        const headers = {
            "Content-Type": req.headers["content-type"],
            "Authorization": req.headers["authorization"],
            "User-Agent": req.headers["user-agent"]
        }

        const response = await axios.patch(url, body, {headers: headers});
        res.status(200).send(response.data);
    } catch (error) {
        res.status(400).send(error);
    }
});

//DELETE
app.delete('/:url(*)', async (req, res) => {
    try {
        const url = req.params.url;
        const headers = {
            "Content-Type": req.headers["content-type"],
            "Authorization": req.headers["authorization"],
            "User-Agent": req.headers["user-agent"]
        }

        const response = await axios.delete(url, {headers: headers});
        res.status(200).send(response.data);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(PORT, () => {
  console.log(`Trendyol Proxy server running on port ${PORT}`);
});