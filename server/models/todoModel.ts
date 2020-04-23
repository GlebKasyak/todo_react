import { Schema, model, Model } from "mongoose";
import { ITodoDocument } from "../typescript/todoTypes";

const todoSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
});

export default model<ITodoDocument, Model<ITodoDocument>>("todo", todoSchema);