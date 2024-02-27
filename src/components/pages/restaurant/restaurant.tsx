import { useEffect, useState } from 'react';
import { Filter } from '../../filters/component';
import { Restaurant } from '../../restaurant/component';
import styles from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurants } from '../../../redux/entities/restaurant/thunks/get-restaurants';
import { AppDispatch, RootState } from '../../../redux';
import { selectAllRestaurants } from '../../../redux/entities/restaurant/selectors';
import { selectIsLoading } from '../../../redux/ui/request';
import { getUsers } from '../../../redux/entities/user/thunks/get-users';

export const RestaurantPage = () => {
    const [requestIds, setRequestIds] = useState<string[]>([]);
    const isLoading = useSelector((state: RootState) =>
        requestIds.some((requestId) => requestId && selectIsLoading(state, requestId))
    );
    const allRestaurants = useSelector(selectAllRestaurants);
    const dispatch = useDispatch<AppDispatch>();
    const [restaurantId, setRestaurantId] = useState<string>();

    useEffect(() => {
        setRequestIds([dispatch(getRestaurants()).requestId, dispatch(getUsers()).requestId]);
    }, [dispatch]);

    useEffect(() => {
        const firstRestaurantId = allRestaurants[0]?.id;
        if (firstRestaurantId && !restaurantId) {
            setRestaurantId(firstRestaurantId);
        }
    }, [allRestaurants, restaurantId]);

    if (isLoading || !restaurantId) {
        return <span>Loading...</span>;
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
