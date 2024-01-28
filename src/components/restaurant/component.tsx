import { Restaurant as TRestaurant } from "@models";
import styles from "./styles.module.scss"
import { Menu } from "../menu/component";
import { Rating } from "../rating/component";

export const Restaurant = ({ restaurant }: { restaurant: TRestaurant }) => {
    return (
        <div className={styles.restaurant}>
            <h1>{restaurant.name}</h1>
            <Menu menu={restaurant.menu} />
            <Rating reviews={restaurant.reviews} />
        </div>
    );
}