import { NextFunction, Request, Response, Router } from "express";
import * as questionController from "../controllers/question";
const router = Router();

router.post("/create", async (req: Request, res: Response) => {
      try {
        const returnStatus = await questionController.postCreateQuestion(req, res);
        res.json(returnStatus);
      } catch (error) {
        res.status(500).json(error);
      }
    }
  );
  router.get("/getQuestion", async (req: Request, res: Response) => {
    try {
      const returnStatus = await questionController.getQuestionById(req, res);
      res.json(returnStatus);
    } catch (error) {
      res.status(500).json(error);
    }
  }
);
export default router;