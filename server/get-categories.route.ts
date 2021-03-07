import {Request, Response} from 'express';
import {CATEGORIES} from './db-data';

export function getAllCategories(req: Request, res: Response) {
    setTimeout(() => {
        res.status(200).json({payload:Object.values(CATEGORIES)});
    }, 800);
}

export function getCategoryByUrl(req: Request, res: Response) {
    const categoryUrl = req.params["id"];
    const categories: any = Object.values(CATEGORIES);
    const category = categories.find((category) => category.url == categoryUrl);
    res.status(200).json(category);
}
