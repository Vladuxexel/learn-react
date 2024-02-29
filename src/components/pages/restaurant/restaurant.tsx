import { useEffect, useState } from 'react';
import { Filter } from '../../filters/component';
import { Restaurant } from '../../restaurant/component';
import styles from './styles.module.scss';
import { useGetRestaurantsQuery, useGetUsersQuery } from '../../../redux/services/api';

export const RestaurantPage = () => {
    const { isLoading: restaurantsLoading, data: restaurants } = useGetRestaurantsQuery();
    const { isLoading: usersLoading } = useGetUsersQuery();
    const [restaurantId, setRestaurantId] = useState<string>();

    useEffect(() => {
        const firstRestaurantId = restaurants ? restaurants[0].id : null;
        if (firstRestaurantId && !restaurantId) {
            setRestaurantId(firstRestaurantId);
        }
    }, [restaurants, restaurantId]);

    if (restaurantsLoading || usersLoading || !restaurantId || !restaurants) {
        return <span>Loading...</span>;
    }

    return (
        <>
            <Filter
                items={restaurants}
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
