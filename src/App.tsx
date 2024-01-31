import { useState } from 'react';
import { Layout } from './components/layout/component';
import { restaurants as data } from './constants/mock';
import { Filter } from './components/filters/component';
import { Restaurant as TRestaurant } from '@models';
import { RestaurantsContainer } from './components/restaurants-container/component';
import styles from './styles/app.styles.module.scss';

export const App = () => {
    const [restaurant, setRestaurant] = useState<TRestaurant | undefined>();

    return (
        <Layout>
            <Filter
                items={data}
                displayKey="name"
                selectKey="id"
                onSelected={(id) => {
                    const selectedItem = data.find((restaurant) => restaurant.id === id);
                    setRestaurant(selectedItem);
                }}
                className={styles['restaurants-filter']}
            />
            <RestaurantsContainer content={restaurant ?? data} className={styles['restaurants-container']} />
        </Layout>
    );
};
