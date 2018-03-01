import { Router } from "express";
import questionRouter from "./question.route";

const router: Router = Router();
router.use("/questions", questionRouter);

export default router;
