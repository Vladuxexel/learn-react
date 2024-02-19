import { useState } from 'react';
import { Layout } from './components/layout/component';
import { Filter } from './components/filters/component';
import { User } from '@models';
import styles from './styles/app.styles.module.scss';
import { UserContext } from './contexts/user-context';
import { Provider } from 'react-redux';
import { store } from './redux';
import { normalizedRestaurants } from './constants/normalized-mock';
import { Restaurant } from './components/restaurant/component';

export const App = () => {
    const [restaurantId, setRestaurantId] = useState<string>(normalizedRestaurants[0].id);
    const [contextUser, setContextUser] = useState<User | null>(null);

    return (
        <Provider store={store}>
            <UserContext.Provider value={{ contextUser, setContextUser }}>
                <Layout>
                    <Filter
                        items={normalizedRestaurants}
                        displayKey="name"
                        selectKey="id"
                        initiallySelected={normalizedRestaurants[0].id}
                        onSelected={setRestaurantId}
                        className={styles['restaurants-filter']}
                    />
                    <Restaurant key={restaurantId} id={restaurantId} className={styles['restaurant-item']} />
                </Layout>
            </UserContext.Provider>
        </Provider>
    );
};
