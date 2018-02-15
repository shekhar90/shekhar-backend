import * as async from "async";
import * as crypto from "crypto";
import { default as Question, QuestionModel } from "../models/Question";
import { Request, Response, NextFunction } from "express";
import { WriteError } from "mongodb";
const request = require("express-validator");


/**
 * GET /question
 * Question page.
 */
export let getQuestion = (req: Request, res: Response) => {
  res.render("question/question", {
    title: "Question"
  });
};

