"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const question_route_1 = require("./question.route");
const router = express_1.Router();
router.use("/questions", question_route_1.default);
exports.default = router;
//# sourceMappingURL=index.route.js.map