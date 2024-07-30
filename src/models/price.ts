import mongoose from 'mongoose';

const PriceSchema = new mongoose.Schema({
  symbol: { type: String, required: true },
  price: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Price = mongoose.model('Price', PriceSchema);

export default Price;
