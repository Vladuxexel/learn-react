import { Restaurant as TRestaurant } from "@models";
import { Review } from "../review/component";
import styles from "./styles.module.scss"
import { Menu } from "../menu/component";

export const Restaurant = ({ restaurant }: { restaurant: TRestaurant }) => {
    return (
        <div className={styles.restaurant}>
            <h1>{restaurant.name}</h1>
            <Menu menu={restaurant.menu} />
            <div className={styles.rating}>
                <h3>Reviews:</h3>
                <ul>
                    {restaurant.reviews.map((review) => <li><Review review={review} /></li>)}
                </ul>
            </div>
        </div>
    );
}