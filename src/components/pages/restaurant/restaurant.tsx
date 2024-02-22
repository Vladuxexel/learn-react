import { useEffect, useState } from 'react';
import { Filter } from '../../filters/component';
import { Restaurant } from '../../restaurant/component';
import styles from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurants } from '../../../redux/entities/restaurant/thunks/get-restaurants';
import { AppDispatch } from '../../../redux';
import { selectAllRestaurants } from '../../../redux/entities/restaurant/selectors';

export const RestaurantPage = () => {
    const allRestaurants = useSelector(selectAllRestaurants);
    const [restaurantId, setRestaurantId] = useState<string>(() => allRestaurants[0]?.id);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getRestaurants());
    }, [dispatch]);

    useEffect(() => {
        if (allRestaurants[0]?.id) {
            setRestaurantId(allRestaurants[0].id);
        }
    }, [allRestaurants]);

    if (!allRestaurants) {
        return null;
    }

    return (
        <>
            <Filter
                items={allRestaurants}
                displayKey="name"
                selectKey="id"
                initiallySelected={restaurantId}
                onSelected={setRestaurantId}
                className={styles['restaurants-filter']}
            />
            <Restaurant key={restaurantId} id={restaurantId} className={styles['restaurant-item']} />
        </>
    );
};
