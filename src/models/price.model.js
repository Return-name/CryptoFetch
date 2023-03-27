module.exports = mongoose => {
    const Price = mongoose.model(
      "price",
      mongoose.Schema(
        {
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