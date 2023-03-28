module.exports = mongoose => {
    const Price = mongoose.model(
      "price",
      mongoose.Schema(
        {
            _id: {
              type: String,
              required: true
            },
            name: {
              type: String,
              required: true
            },
            price: {
              type: Number,
              required: true
            },
        },
        { timestamps: true }
      )
    );
  
    return Price;
  };