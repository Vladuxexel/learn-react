import { NormalizedReview } from '../../models/review';
import { Review } from '../review/component';
import styles from './styles.module.scss';

export const Rating = ({ reviews }: { reviews: NormalizedReview[] }) => {
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
