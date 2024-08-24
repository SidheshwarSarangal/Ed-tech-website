const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({

    sectionName: {
        typr:String,
    },
    subSection:[
        {
            type:mongoose.Schema.Types.objectId,
            required:true,
            ref:"SubSection",
        }
    ]
});

module.exports = mongoose.model("Section", sectionSchema);