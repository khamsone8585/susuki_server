"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const datasetupController_1 = __importDefault(require("../controllers/datasetupController"));
const router = express_1.Router();
router.route('/create-datasets')
    .post(datasetupController_1.default.addDatasets);
router.route('/show-datasets')
    .get(datasetupController_1.default.getDatasets);
router.route('/update-datasets')
    .put(datasetupController_1.default.updateDatasets);
router.route('/delete-datasets/:id')
    .delete(datasetupController_1.default.deleteDatasets);
exports.default = router;
