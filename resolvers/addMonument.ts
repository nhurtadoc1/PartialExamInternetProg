import { Request, Response } from "npm:express@4.18.2";
import MonumentModel from "../db/Monument.ts";

const addMonument = async (req: Request, res: Response) => {
  try {
    const { name, description, postalcode, iso } = req.query;
    if (!name || !description || !postalcode || !iso) {
      res.status(500).send("Name, description, postal code, and ISO code are required");
      return;
    }

    const alreadyExists = await MonumentModel.findOne({ name, iso }).exec();
    if (alreadyExists) {
      res.status(400).send("Monument already exists");
      return;
    }

    const newMonument = new MonumentModel({ name, description, postalcode, iso });
    await newMonument.save();

    res.status(200).send({
      name: newMonument.name,
      description: newMonument.description,
      postalcode: newMonument.postalcode,
      iso: newMonument.iso,
      id: newMonument._id.toString(),
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default addMonument;