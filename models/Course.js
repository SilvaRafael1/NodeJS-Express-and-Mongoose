const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate-v2");

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

CourseSchema.plugin(mongoosePaginate)

mongoose.model("Course", CourseSchema)