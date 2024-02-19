import { Dish, Review } from '.';

export interface Restaurant {
    id: string;
    name: string;
    menu: Dish[];
    reviews: Review[];
}

export interface NormalizedRestaurant {
    id: string;
    name: string;
    menu: string[];
    reviews: string[];
}
