import { Restaurant as TRestaurant } from '@models';
import { Restaurant } from '../restaurant/component';
import styles from './styles.module.scss';

export const RestaurantsContainer = ({
    content,
    className
}: {
    content: TRestaurant | TRestaurant[];
    className: string;
}) => {
    return (
        <div className={className}>
            {Array.isArray(content) ? (
                content.map((item) => <Restaurant restaurant={item} className={styles['restaurant-item']} />)
            ) : (
                <Restaurant restaurant={content} className={styles['restaurant-item']} />
            )}
        </div>
    );
};
