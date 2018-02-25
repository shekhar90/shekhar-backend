import { default as Question, QuestionModel } from "../models/Question";
import { Request, Response, NextFunction } from "express";
import { WriteError } from "mongodb";
const request = require("express-validator");


export let postCreateQuestion = (req: Request, res: Response, next: NextFunction) => {
  const id = req.body.id;
  Question.findOne({"id": id}, function(err, existingQuestion) {
    if (err) {
      res.send("Error in validating for existing question");
      return;
    }
    if (existingQuestion) {
      res.send("Existing question");
      return;
    } else {
      const question = new Question({
        id: req.body.id,
        answer: req.body.answer,
        questionType: req.body.questionType,
        difficulty: req.body.difficulty,
        question: req.body.question,
        options: req.body.options,
      });
      question.save((err: WriteError) => {
        if (err) {
            console.log("Error in saving question");
          } else {
            console.log("Question saved: success");
            res.send(req.body);
          }
      });
    }
  });
};
export let getQuestionById = (req: Request, res: Response, next: NextFunction) => {
  const questionType = req.query.questionType;
  const difficulty = req.query.difficulty;
  Question.find({"questionType": questionType, "difficulty": difficulty}, function(err, question) {
    if (err) {
      console.log("Error in fetching question");
    } else {
      console.log("Questions fetched from db: success");
      res.send(JSON.stringify(question));
    }
  });
};
