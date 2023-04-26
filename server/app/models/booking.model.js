module.exports = mongoose => {
    var schema = mongoose.Schema(
    {
        tent: Number,
        twoBed: Number,
        threeBed: Number,
        fourBed: Number,
        fiveBed: Number,
    },
    { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Booking = mongoose.model("booking", schema);
    return Booking;
};
