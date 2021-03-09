import {Request, Response} from "express";
import {CATEGORIES, VARIETIES} from "./db-data";

export function findVarietyDetail(req: Request, res: Response) {
  
  const categoryUrl = req.query["categoryUrl"];

  const varietySeqNo = parseInt(req.query['varietySeqNo']);
  const categories: any = Object.values(CATEGORIES);

  const category = categories.find(category => category.url == categoryUrl);

  const varieties = Object.values(VARIETIES).filter(
    variety => variety.categoryId == category.id
  );

  const varietyIndex = varieties.findIndex(
    variety => variety.seqNo == varietySeqNo
  );

  const variety = varieties[varietyIndex];

  variety['first'] = (varietyIndex == 0);
  variety['last'] = (varietyIndex == varieties.length - 1);

  setTimeout(() =>  res.status(200).json(variety), 400);

}
