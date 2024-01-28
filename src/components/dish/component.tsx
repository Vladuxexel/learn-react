import { Dish as TDish } from '@models';
import styles from './styles.module.scss';

export const Dish = ({ dish }: { dish: TDish }) => {
    return (
        <div className={styles['dish']}>
            <span>
                {dish.name} <b>{dish.price}$</b>
            </span>
            <span>Ingredients: {dish.ingredients.join(', ')}</span>
        </div>
    );
};
