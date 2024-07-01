import { Request, Response } from "express";
import TourPackageModel,{TourPackageDocument} from "../models/TourPackage.model";
class TourPackageController {
  async createTourPackage(req: Request, res: Response): Promise<void> {
    try {
      const tourPackageData: TourPackageDocument = req.body;
      const files = req.file;
      let image="";

      
      if (req.file) {
        image = req.file.filename; // Get the uploaded image
      }

      tourPackageData.imageUrl = image;

      const createdTourPackage = await TourPackageModel.create(tourPackageData);
      res.status(201).json(createdTourPackage);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getTourPackages(req: Request, res: Response): Promise<void> {
    try {
      const tourPackages = await TourPackageModel.find();
      res.status(200).json(tourPackages);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }


}
export default new TourPackageController();