import { Review as TReview } from '@models';
import { Review } from '../review/component';
import styles from './styles.module.scss';

export const Rating = ({ reviews }: { reviews: TReview[] }) => {
    return (
        <div className={styles.rating}>
            <h3>Reviews:</h3>
            <ul>
                {reviews.map((review) => (
                    <li>
                        <Review review={review} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
