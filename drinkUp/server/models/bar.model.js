const mongoose = require("mongoose");
// mongoose is our mongo-library that we utilise with our mongodb

const BarSchema = new mongoose.Schema ( {

    barName: {
        type: String, 
        required: [true, "bar name is required"],
        minlength:[3, "Bar name must be at least 3 characters long"]
    },
    imageURL: {
        type: String,
        required: [true, "Bar image is required"]
    },
    addressStreet: {
        type: String,
        required: [true, "Street address is required"],
        minlength: [3,"Street address must be at least 3 characters long"]
    },
    addressCity: {
        type: String, 
        required: [true, "City address is required"],
        minlength: [3,"City address must be at least 3 characters long"]
    },
    barType: {
        type: String,
        required: [true, "Bar type is required"],
        enum: ["Standard Bar", "Cocktail Lounge", "Brewery", "Winery"]
    }, 
    ambience: {
        type: String, 
        required: [true, "Bar ambience is required"], 
        enum:["Casual", "Intimate","Good for Groups", "Classy", "Dancing"]
    },
    reservations: {
        type: Boolean,
        default: true,
        required:[true, "Accepts reservations"],
    },
    allowsKids: {
        type: Boolean,
        default: true,
        required:[true, "Allows children"],
    },
},
    {timestamps:true}
);

const Bar = mongoose.model("Bar", BarSchema);

module.exports = Bar;


