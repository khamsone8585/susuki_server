"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const distributorClient_1 = __importDefault(require("../controller/distributorClient"));
const router = express_1.Router();
router.route('/show-distributor-client')
    .get(distributorClient_1.default.showDistributor);
router.route('/find-distributor-client/:id')
    .get(distributorClient_1.default.findIdProducts);
exports.default = router;
