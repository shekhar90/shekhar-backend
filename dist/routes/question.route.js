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
const express_1 = require("express");
const questionController = require("../controllers/question");
const router = express_1.Router();
router.post("/create", (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const returnStatus = yield questionController.postCreateQuestion(req, res);
        res.json(returnStatus);
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
router.get("/getQuestion", (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const returnStatus = yield questionController.getQuestionById(req, res);
        res.json(returnStatus);
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
exports.default = router;
//# sourceMappingURL=question.route.js.map