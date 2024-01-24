import { Restaurant as TRestaurant } from "@models";
import { MenuItem } from "../menu-item/component";
import { Review } from "../review/component";
import styles from "./styles.module.scss"

export const Restaurant = ({ restaurant }: { restaurant: TRestaurant }) => {
    return (
        <div className={styles.restaurant}>
            <h1>{restaurant.name}</h1>
            <div className={styles.menu}>
                <h3>Menu:</h3>
                <ul>
                    {restaurant.menu.map((menuItem) => <li><MenuItem menuItem={menuItem} /></li>)}
                </ul>
            </div>
            <div className={styles.rating}>
                <h3>Reviews:</h3>
                <ul>
                    {restaurant.reviews.map((review) => <li><Review review={review} /></li>)}
                </ul>
            </div>
        </div>
    );
}