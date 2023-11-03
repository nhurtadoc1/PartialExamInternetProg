import { Request, Response } from "npm:express@4.18.2";
import MonumentModel from "../db/Monument.ts";

const getMonument = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const monument = await MonumentModel.findOne({ id }).exec();
    if (!monument) {
      res.status(404).send("Monument not found");
      return;
    }
    res.status(200).send({
      name: monument.name,
      description: monument.description,
      postalcode: monument.postalcode,
      iso: monument.iso,
      id: monument._id.toString(),
    });
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default getMonument;