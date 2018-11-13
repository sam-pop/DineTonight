const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RestuarantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  cuisine: String,
  favorite: {
    type: Boolean,
    default: false
  },
  location: {
    address: String,
    latLng: { lat: Number, lng: Number }
  },
  notes: [{ body: String, date: Date }]
});

const Restuarant = mongoose.model("Restuarant", RestuarantSchema);

module.exports = Restuarant;
