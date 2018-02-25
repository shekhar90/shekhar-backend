import * as mongoose from "mongoose";

export type QuestionModel = mongoose.Document & {
  id: string;
  questionType: string;
  difficulty: string;
  question: string;
  options: string[];
  answer: number;
};
const questionSchema = new mongoose.Schema({
  id: String,
  questionType: String,
  difficulty: String,
  question: String,
  options: [String],
  answer: Number
});
const Question = mongoose.model("Question", questionSchema);
export default Question;