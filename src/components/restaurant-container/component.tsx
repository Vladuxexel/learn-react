import { Restaurant } from '../restaurant/component';
import styles from './styles.module.scss';

export const RestaurantContainer = ({ restaurantId, className }: { restaurantId: string; className: string }) => {
    return (
        <div className={className}>
            <Restaurant key={restaurantId} id={restaurantId} className={styles['restaurant-item']} />
        </div>
    );
};
