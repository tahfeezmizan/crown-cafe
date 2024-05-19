const express = require("express");
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())


const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.7utjicv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const menuCollection = client.db("Crown-cafeDB").collection("menu")
        const reviewsCollection = client.db("Crown-cafeDB").collection("reviews")

        // get api
        app.get('/menu', async (req, res) => {
            try {
                const result = await menuCollection.find().toArray();
                res.send(result);
            } catch (error) {
                console.error("Error fetching queries:", error);
                res.status(500).send("Error fetching queries");
            }
        })

        // get reviews data 
        app.get("/reviews", async (req, res) => {
            try {
                const result = await reviewsCollection.find().toArray();
                res.send(result)
            } catch (error) {
                console.error("Error fetching queries:", error);
                res.status(500).send("Error fetching queries");
            }
        })


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Crown Cafe Server Is Running')
})

app.listen(port, () => {
    console.log(`Crown cafe running on ${port}`)
})