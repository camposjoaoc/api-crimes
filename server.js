import express from 'express';
import axios from "axios";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
const app = express();
const PORT = 3000;

// Swagger config
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Crimes API",
            version: "1.0.0",
            description: "A simple Express API to fetch crime data by city in Sweden.",
            contact: {
                name: "João Campos",
                email: "joaocanabarrocampos@gmail.com",
            },
        },
    },
    apis: ["./swagger.yaml"], 
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/crimes", async (req, res) => {
    try {
        const response = await axios.get("https://brottsplatskartan.se/api/events/?location=malmö&limit=5");
        res.json(response.data.data);

    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ err: 'Internal Server Error' });
    }
});

app.get("/crimes/locations", async (req, res) => {
    try {
        const response = await axios.get("https://brottsplatskartan.se/api/events/?location=malmö&limit=3");

        const APIData = response.data.data;

        const headline = APIData.map(data => data.headline);

        res.json(headline);

    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ err: 'Internal Server Error' });
    }
});

app.get("/crimes/search", async (req, res) => {
    try {
        const city = req.query.city;

        if (!city) {
            return res.status(400).json({ error: "Parameter 'city' is required." });
        }
        const url = `https://brottsplatskartan.se/api/events?city=${encodeURIComponent(city)}`;
        const response = await axios.get(url);
        res.json(response.data.data);

    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ err: 'Internal Server Error' });
    }
});

app.get("/crimes/latest", async (req, res) => {
    try {
        const response = await axios.get("https://brottsplatskartan.se/api/events/?area=Skåne län");

        const latest = response.data.data;

        if (latest === 0) {
            return res.status(404).json({ error: "No data found." });
        }

        res.json(latest[0]);

    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ err: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
