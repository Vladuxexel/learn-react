import { Dish, Review } from '.';

export interface Restaurant {
    id: string;
    name: string;
    menu: Dish[];
    reviews: Review[];
}
