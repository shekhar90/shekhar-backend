import * as bcrypt from "bcrypt-nodejs";
import * as crypto from "crypto";
import * as mongoose from "mongoose";

export type QuestionModel = mongoose.Document & {
    question: string,
    options: string,
    answer: {
        o1: string,
        o2: string,
        o3: string,
        o4: string
    },
    description: string,
    correctOption: string,
    type: string
  };
  const questionSchema = new mongoose.Schema({
    question: String,
    options: String,
    answer: {
        o1: String,
        o2: String,
        o3: String,
        o4: String
    },
    description: String,
    correctOption: String,
    type: String
  });
  const Question = mongoose.model("Question", questionSchema);
  export default Question;