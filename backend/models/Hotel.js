const HotelSchema = new mongoose.Schema({
    name: String,
    location: String,
    price: Number,
    images: [String],
    description: String,
    availableRooms: Number
  });
  module.exports = mongoose.model('Hotel', HotelSchema);