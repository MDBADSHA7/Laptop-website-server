const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, MongoCursorInUseError } = require('mongodb');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

// Midlewere
app.use(cors());
app.use(express.json());

// Node mongodb CURD

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.nh5ax.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const laptopCollection = client.db('Werehouse-Laptop').collection('laptop')
        app.get('/laptop', async (req, res) => {
            const query = {};
            const cursor = laptopCollection.find(query);
            const laptops = await cursor.toArray();
            res.send(laptops)
            // Load Item
            app.get('/user', async (req, res) => {
                const query = {}
                const cursor = laptopCollection.find(query);
                const users = await cursor.toArray();
                res.send(users);
            })
            // Post laptop (Add new laptop)
            app.post('/user', async (req, res) => {
                const newUser = req.body;
                console.log('new', newUser);
                const result = await laptopCollection.insertOne(newUser);
                res.send(result);
            })
        })
    }
    finally {

    }
}
run().catch(console.dir)

app.get('/', (req, res) => {
    res.send('Laptop werehouse server running')
});

app.listen(port, () => {
    console.log('code is running', 5000)
})
