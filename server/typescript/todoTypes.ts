import { Document } from "mongoose";

export interface ITodoDocument extends Document {
    title: string,
    completed: boolean
}