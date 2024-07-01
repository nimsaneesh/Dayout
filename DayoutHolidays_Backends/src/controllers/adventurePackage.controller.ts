import { Request, Response } from "express";
import AdventurePackageModel,{AdventurePackageDocument} from "../models/AdventurePackage.model";
export default class AdventurePackageController {
  async createAdventurePackage(req: Request, res: Response): Promise<void> {
    try {
      const adventurePackageData: AdventurePackageDocument = req.body;
      const files = req.file;
      let image="";

      
      if (req.file) {
        image = req.file.filename; // Get the uploaded image
      }

      adventurePackageData.imageUrl = image;

      const createdAdventurerPackage = await AdventurePackageModel.create(adventurePackageData);
      res.status(201).json(createdAdventurerPackage);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAdventurePackages(req: Request, res: Response): Promise<void> {
    try {
      const adventurerPackages = await AdventurePackageModel.find();
      res.status(200).json(adventurerPackages);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  async getAdventurePackageById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const adventurePackage = await AdventurePackageModel.findById(id);

      if (!adventurePackage) {
        res.status(404).json({ error: "Adventure Package not found" });
        return;
      }

      res.status(200).json(adventurePackage);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

}
