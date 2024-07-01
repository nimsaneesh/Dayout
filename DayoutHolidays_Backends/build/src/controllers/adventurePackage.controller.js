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
const AdventurePackage_model_1 = __importDefault(require("../models/AdventurePackage.model"));
class AdventurePackageController {
    createAdventurePackage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const adventurePackageData = req.body;
                const files = req.file;
                let image = "";
                if (req.file) {
                    image = req.file.filename; // Get the uploaded image
                }
                adventurePackageData.imageUrl = image;
                const createdAdventurerPackage = yield AdventurePackage_model_1.default.create(adventurePackageData);
                res.status(201).json(createdAdventurerPackage);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: "Internal Server Error" });
            }
        });
    }
    getAdventurePackages(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const adventurerPackages = yield AdventurePackage_model_1.default.find();
                res.status(200).json(adventurerPackages);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: "Internal Server Error" });
            }
        });
    }
    getAdventurePackageById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const adventurePackage = yield AdventurePackage_model_1.default.findById(id);
                if (!adventurePackage) {
                    res.status(404).json({ error: "Adventure Package not found" });
                    return;
                }
                res.status(200).json(adventurePackage);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: "Internal Server Error" });
            }
        });
    }
}
exports.default = AdventurePackageController;
