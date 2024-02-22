import styles from './styles.module.scss';
import { Counter } from '../counter/component';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { selectDishById } from '../../redux/entities/dish/selectors';
import { decrement, increment, selectDishAmountById } from '../../redux/ui/cart';

export const Dish = ({ id }: { id: string }) => {
    const dish = useSelector((state: RootState) => selectDishById(state, id));
    const dishesCount = useSelector((state: RootState) => selectDishAmountById(state, id));
    const dispatch = useDispatch();

    if (!dish) {
        return null;
    }

    return (
        <div className={styles['dish']}>
            <span>
                {dish.name} <b>{dish.price}$</b>
            </span>
            <span>Ingredients: {dish.ingredients.join(', ')}</span>
            <Counter
                key={dish.id}
                initialValue={dishesCount}
                minValue={0}
                maxValue={5}
                onChange={(_, type) => {
                    const action = type === 'increment' ? increment : decrement;
                    dispatch(action(id));
                }}
            />
        </div>
    );
};
