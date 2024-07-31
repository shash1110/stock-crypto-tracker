# Stock-Crypto-Tracker

A mini-website to collect and display real-time price data for stocks or cryptocurrencies. Built using Next.js, TypeScript, Redux, and MongoDB.

## Features

- Fetches real-time price data for stocks or cryptocurrencies every few seconds.
- Stores the fetched data in a MongoDB database.
- Displays the most recent 20 real-time data entries in a dynamic table.
- Updates the table in real-time as new data arrives.
- Allows users to switch between different stocks or cryptocurrencies.

## Technologies Used

- **Frontend**: Next.js, TypeScript, Redux
- **Backend**: Express.js
- **Database**: MongoDB
- **API**: Custom API for fetching real-time data

## Setup

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running (or use MongoDB Atlas)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/stock-crypto-tracker.git
   cd stock-crypto-tracker
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Setup Environment Variables**

   Create a `.env` file in the root directory with the following content:

   ```
   MONGO_URI=mongodb://localhost:27017/stockCryptoTracker
   ```

   Replace `mongodb://localhost:27017/stockCryptoTracker` with your MongoDB connection string if using MongoDB Atlas.

4. **Start the Express Server**

   ```bash
   ts-node server/index.ts
   ```

5. **Start the Next.js Application**

   ```bash
   npm run dev
   ```

   Open your browser and navigate to `http://localhost:3000` to view the application.

## File Structure

- `server/`
  - `index.ts`: Main server file that fetches real-time data and sets up the API endpoints.
  - `models/`
    - `price.ts`: Mongoose schema for storing price data in MongoDB.
- `pages/`
  - `index.tsx`: Main page displaying the data and allowing users to switch stocks/cryptos.
  - `api/`
    - `prices.ts`: API route for fetching data from the MongoDB database.
- `store/`
  - `store.ts`: Redux store setup with actions and reducers.

## API

- **GET /api/prices/:symbol**

  Fetches the most recent 20 price entries for a given stock or cryptocurrency symbol.

  **Example Request:**

  ```
  GET /api/prices/GOOG
  ```

  **Response:**

  ```json
  [
    {
      "symbol": "GOOG",
      "price": 2800.00,
      "timestamp": "2024-07-31T12:00:00Z"
    },
    ...
  ]
  ```

## Notes

- The real-time data fetching interval is set to 5 seconds. Adjust this interval in `server/index.ts` if needed.
- Modify the API endpoint and data parsing logic based on the actual API you choose for fetching real-time data.

## Contributing

Feel free to open issues and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT License](LICENSE)

```

This `README.md` provides an overview of the project, setup instructions, and details about the file structure and API. Adjust the content as needed to match the specifics of your project or to include any additional details.
