# 🚨 Crimes API - Sweden Edition 🇸🇪

Welcome to the **Crimes API** – a simple, no-drama Express.js app that fetches real-time crime data from Sweden using the [Brottsplatskartan API](https://brottsplatskartan.se). Whether you're a concerned citizen, a curious tourist, or just love organized crime data (pun intended), this API is for you! 😄

---

## 🔧 Tech Stack

- ⚙️ **Node.js**
- 🚂 **Express**
- 🌐 **Axios** for HTTP requests
- 📖 **Swagger** for API documentation
- 📦 **Swagger YAML** for route definitions

---

## 📦 Installation

```bash
git clone https://github.com/camposjoaoc/api-crimes.git
cd api-crimes
npm install
npm start
```

Then visit: [http://localhost:3000/api-docs](http://localhost:3000/api-docs) 🚀

---

## 📚 API Documentation

All endpoints are documented and ready to test at:

👉 **[http://localhost:3000/api-docs](http://localhost:3000/api-docs)** (Swagger UI)

---

## 🧭 Available Routes

### 🔎 GET `/crimes`
Returns the 5 most recent crime events in **Malmö**.

📍 Example:  
`GET http://localhost:3000/crimes`

---

### 🗺️ GET `/crimes/locations`
Returns only the **headlines** of the 3 most recent crime events in Malmö.

📍 Example:  
`GET http://localhost:3000/crimes/locations`

---

### 🏙️ GET `/crimes/search?city=cityName`
Searches for crimes based on a **query parameter** city.

📍 Example:  
`GET http://localhost:3000/crimes/search?city=stockholm`

Returns an array of crime data for the specified city.

---

### ⏱️ GET `/crimes/latest`
Returns **only the most recent crime event** in the **Skåne län** region.

📍 Example:  
`GET http://localhost:3000/crimes/latest`

---

## 💡 Example JSON Response (from `/crimes/search?city=malmo`)

```json
[
  {
    "id": 123456,
    "headline": "Traffic accident between several vehicles, Hofterup.",
    "description": "...",
    "date_human": "1 week ago"
  },
  ...
]
```

---

## 👨‍💻 Author

Made by [João Campos](mailto:joaocanabarrocampos@gmail.com)

---

## 📃 License

This project is open source and free to use ✌️

---

> _"Because crime never sleeps, and neither should your API."_ 😎
