import {Request, Response} from 'express';
import {CATEGORIES, VARIETIES} from "./db-data";
import {setTimeout} from "timers";

export function searchVarieties(req: Request, res: Response) {

    const queryParams = req.query;

    const categoryUrl = queryParams.categoryUrl,
          filter = queryParams.filter || '',
          sortOrder = queryParams.sortOrder || 'asc',
          pageNumber = parseInt(queryParams.pageNumber) || 0,
          pageSize = parseInt(queryParams.pageSize) || 3;

  const categorys: any = Object.values(CATEGORIES);

  const category = categorys.find(category => category.url == categoryUrl);

  let varieties;

    if (categoryUrl) {
     varieties = Object.values(VARIETIES)
       .filter((variety) => variety.categoryId == category.id)
       .sort((l1, l2) => l1.id - l2.id);
    }
    else {
        varieties = Object.values(VARIETIES);
    }

    if (filter) {
       varieties = varieties.filter(
         (variety) =>
           variety.description
             .trim()
             .toLowerCase()
             .search(filter.toLowerCase()) >= 0
       );
    }

    if (sortOrder == "desc") {
        varieties = varieties.reverse();
    }

    const initialPos = pageNumber * pageSize;

    const varietiesPage = varieties
      .slice(initialPos, initialPos + pageSize)
      .map((variety) => {
        const newVariety = { ...variety };
        delete newVariety.videoId;
        return newVariety;
      });

    setTimeout(() => {
        res.status(200).json({ payload: varietiesPage });
    },400);


}
