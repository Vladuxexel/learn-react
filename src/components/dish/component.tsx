import styles from './styles.module.scss';
import { Counter } from '../counter/component';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { selectDishById } from '../../redux/entities/dish/selectors';

export const Dish = ({ id }: { id: string }) => {
    const dish = useSelector((state: RootState) => selectDishById(state, id));

    return (
        <div className={styles['dish']}>
            <span>
                {dish.name} <b>{dish.price}$</b>
            </span>
            <span>Ingredients: {dish.ingredients.join(', ')}</span>
            <Counter key={dish.id} minValue={0} maxValue={5} />
        </div>
    );
};
