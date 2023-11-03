import { Request, Response } from "npm:express@4.18.2";
import MonumentModel from "../db/Monument.ts";

/*
const getMonument = async (req: Request, res: Response) => {
  try {
    const monuments = await Promise.all(
        character.episode.map(async (episode) => {
          const response = await fetch(episode);
          if (response.status !== 200) {
            throw new Error(`Episode ${episode} not found`);
          }
          const episodeData = await response.json();
          return episodeData.name;
        })
      );
      res.send({
        monuments,
      });
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default getMonuments;
*/