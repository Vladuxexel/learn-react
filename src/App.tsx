import { useState } from 'react';
import { Layout } from './components/layout/component';
import { Restaurant } from './components/restaurant/component';
import { restaurants as data } from './constants/mock';
import { Filter } from './components/filters/component';

export const App = () => {
    const [restaurants, setRestaurants] = useState(data);

    return (
        <Layout>
            <Filter
                items={data}
                displayKey="name"
                selectKey="id"
                onSelected={(id) => {
                    const selectedItems = id ? data.filter((restaurant) => restaurant.id === id) : data;
                    setRestaurants(selectedItems);
                }}
            />
            {restaurants.map((restaurant) => (
                <Restaurant restaurant={restaurant} />
            ))}
        </Layout>
    );
};
