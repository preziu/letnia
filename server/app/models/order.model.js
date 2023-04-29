module.exports = mongoose => {
    var schema = mongoose.Schema(
    {
        first_name: String,
        last_name: String,
        email: String,
        paid: Boolean,
        booking_type: String,
        variant: Number,
        price: Number,
        phone: Number,
    },
    { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Order = mongoose.model("order", schema);
    return Order;
};
