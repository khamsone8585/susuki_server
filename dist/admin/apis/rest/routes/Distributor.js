"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const distributorController_1 = __importDefault(require("../controllers/distributorController"));
const router = express_1.Router();
router.route('/create-distributor')
    .post(distributorController_1.default.addDistributor);
router.route('/show-distributor')
    .get(distributorController_1.default.getDistributor);
router.route('/update-distributor')
    .put(distributorController_1.default.updateDistributor);
router.route('/delete-distributor/:id')
    .delete(distributorController_1.default.deleteDistributor);
exports.default = router;
