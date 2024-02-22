import { useState } from 'react';
import { Layout } from './components/layout/component';
import { User } from '@models';
import { UserContext } from './contexts/user-context';
import { Provider } from 'react-redux';
import { store } from './redux';
import { RestaurantPage } from './components/pages/restaurant/restaurant';

export const App = () => {
    const [contextUser, setContextUser] = useState<User | null>(null);

    return (
        <Provider store={store}>
            <UserContext.Provider value={{ contextUser, setContextUser }}>
                <Layout>
                    <RestaurantPage />
                </Layout>
            </UserContext.Provider>
        </Provider>
    );
};
