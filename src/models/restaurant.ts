import { MenuItem, Review } from ".";

export interface Restaurant {
    id: string;
    name: string;
    menu: MenuItem[];
    reviews: Review[];
}