"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const questionSchema = new mongoose.Schema({
    id: String,
    questionType: String,
    difficulty: String,
    question: String,
    options: [String],
    answer: Number
});
const Question = mongoose.model("Question", questionSchema);
exports.default = Question;
//# sourceMappingURL=Question.js.map