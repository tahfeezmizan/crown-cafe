const express = require("express");
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

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

        const userCollection = client.db("Crown-cafeDB").collection("users");
        const menuCollection = client.db("Crown-cafeDB").collection("menu");
        const reviewsCollection = client.db("Crown-cafeDB").collection("reviews");
        const cartCollection = client.db("Crown-cafeDB").collection("carts");

        // jwt releted api
        app.post('/jwt', async(req, res) => {
            const user = req.body;
            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '2h',
            });
            res.send({token})
        })


        //users api
        app.get('/users', async (req, res) => {
            try {
                console.log(req.headers);
                const result = await userCollection.find().toArray();
                res.send(result);
            } catch (error) {
                console.error("Error fetching queries:", error);
                res.status(500).send("Error fetching queries");
            }
        })

        // post single user data on batabase
        app.post('/users', async (req, res) => {
            try {
                const user = req.body;
                // check user email already exists
                const query = { email: user.email };
                const existingUser = await userCollection.findOne(query);
                if (existingUser) {
                    return res.send({ message: 'user already exists', insertedId: null })
                }

                const result = await userCollection.insertOne(user)
                res.send(result)
            } catch (error) {
                console.error("Error fetching queries:", error);
                res.status(500).send("Error fetching queries");
            }
        });


        // create user role api
        app.patch('/users/admin/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const filter = { _id: new ObjectId(id) };
                const updatedDoc = {
                    $set: {
                        role: 'admin'
                    }
                }
                const result = await userCollection.updateOne(filter, updatedDoc);
                res.send(result)
            } catch (error) {
                console.error("Error fetching queries:", error)
                res.status(5000).send("Error fetching queries")
            }
        })


        // user delete api 
        app.delete('/users/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const query = { _id: new ObjectId(id) };
                const result = await userCollection.deleteOne(query);
                res.send(result)
            } catch (error) {
                console.error("Error fetching queries:", error);
                res.status(500).send("Error fetching queries");
            }
        })

        // menu releted api 
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

        // get cart added product 
        app.get("/carts", async (req, res) => {
            try {
                const email = req.query.email;
                const query = { email: email }
                const result = await cartCollection.find(query).toArray();
                res.send(result)
            } catch (error) {
                console.error("Error fetching queries:", error);
                res.status(500).send("Error fetching queries");
            }

        })

        // product add on cart 
        app.post("/carts", async (req, res) => {
            try {
                const cartItem = req.body;
                const result = await cartCollection.insertOne(cartItem);
                res.send(result)
            } catch (error) {
                console.error("Error fetching queries:", error);
                res.status(500).send("Error fetching queries");
            }
        });


        //delete product from cart
        app.delete("/carts/:id", async (req, res) => {
            try {
                const id = req.params.id;
                const query = { _id: new ObjectId(id) };
                const result = await cartCollection.deleteOne(query)
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