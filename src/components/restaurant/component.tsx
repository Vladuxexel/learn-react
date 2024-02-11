import { Restaurant as TRestaurant } from '@models';
import styles from './styles.module.scss';
import { Menu } from '../menu/component';
import { Rating } from '../rating/component';
import classNames from 'classnames';
import { ReviewForm } from '../review-form/component';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user-context';

export const Restaurant = ({ restaurant, className }: { restaurant: TRestaurant; className: string }) => {
    const { contextUser } = useContext(UserContext);

    return (
        <div className={classNames(styles.restaurant, className)}>
            <h1>{restaurant.name}</h1>
            <Menu menu={restaurant.menu} />
            <Rating reviews={restaurant.reviews} />
            {contextUser && <ReviewForm onReviewSent={(review) => console.log(review)} />}
        </div>
    );
};
