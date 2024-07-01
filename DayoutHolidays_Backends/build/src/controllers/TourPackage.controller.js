"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TourPackage_model_1 = __importDefault(require("../models/TourPackage.model"));
class TourPackageController {
    createTourPackage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tourPackageData = req.body;
                const files = req.file;
                let image = "";
                if (req.file) {
                    image = req.file.filename; // Get the uploaded image
                }
                tourPackageData.imageUrl = image;
                const createdTourPackage = yield TourPackage_model_1.default.create(tourPackageData);
                res.status(201).json(createdTourPackage);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: "Internal Server Error" });
            }
        });
    }
    getTourPackages(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tourPackages = yield TourPackage_model_1.default.find();
                res.status(200).json(tourPackages);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: "Internal Server Error" });
            }
        });
    }
}
exports.default = new TourPackageController();
