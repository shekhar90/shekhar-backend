"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Question_1 = require("../models/Question");
const _ = require("lodash");
const request = require("express-validator");
exports.postCreateQuestion = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const id = req.body.id;
    yield Question_1.default.findOne({ "id": id }, function (err, existingQuestion) {
        if (err) {
            res.send("Error in validating for existing question");
            return;
        }
        if (existingQuestion) {
            res.send("Existing question");
            return;
        }
        else {
            const question = new Question_1.default({
                id: req.body.id,
                answer: req.body.answer,
                questionType: req.body.questionType,
                difficulty: req.body.difficulty,
                question: req.body.question,
                options: req.body.options,
            });
            question.save((err) => {
                if (err) {
                    console.log("Error in saving question");
                }
                else {
                    console.log("Question saved: success");
                    res.send(req.body);
                }
            });
        }
    });
});
exports.getQuestionById = (req, res) => __awaiter(this, void 0, void 0, function* () {
    // no string notation is needed when called from postman
    if (_.isEmpty(req.query)) {
        console.log("query parameter missing");
        throw new Error("query parameter missing");
    }
    else {
        const questionType = req.query.questionType;
        const difficulty = req.query.difficulty;
        yield Question_1.default.find({ "questionType": questionType, "difficulty": difficulty }, function (err, question) {
            if (err) {
                console.log("Error in fetching question");
            }
            else {
                console.log("Questions fetched from db: success");
                res.send(question);
            }
        });
    }
});
//# sourceMappingURL=question.js.map