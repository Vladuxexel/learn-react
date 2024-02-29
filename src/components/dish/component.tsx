import styles from './styles.module.scss';
import { Counter } from '../counter/component';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { decrement, increment, selectDishAmountById } from '../../redux/ui/cart';
import { useGetDishByIdQuery } from '../../redux/services/api';

export const Dish = ({ id }: { id: string }) => {
    const dishesCount = useSelector((state: RootState) => selectDishAmountById(state, id));
    const { isLoading, data: dish } = useGetDishByIdQuery(id);
    const dispatch = useDispatch();

    if (isLoading || !dish) {
        return <span>Loading...</span>;
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
