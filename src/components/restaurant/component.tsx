import { Restaurant as TRestaurant } from '@models';
import styles from './styles.module.scss';
import { Menu } from '../menu/component';
import { Rating } from '../rating/component';
import classNames from 'classnames';
import { ReviewForm } from '../review-form/component';

export const Restaurant = ({ restaurant, className }: { restaurant: TRestaurant; className: string }) => {
    return (
        <div className={classNames(styles.restaurant, className)}>
            <h1>{restaurant.name}</h1>
            <Menu menu={restaurant.menu} />
            <Rating reviews={restaurant.reviews} />
            <ReviewForm onReviewSent={(review) => console.log(review)} />
        </div>
    );
};
