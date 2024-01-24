import { Layout } from "./components/layout/component"
import { Restaurant } from "./components/restaurant/component";
import { restaurants } from "./constants/mock";

export const App = () => {
    return (
        <Layout>
            {restaurants.map((restaurant) => <Restaurant restaurant={restaurant} />)}
        </Layout>
    );
}