import { useContext } from 'react';
import { NormalizedReview } from '../../models/review';
import { Review } from '../review/component';
import styles from './styles.module.scss';
import { UserContext } from '../../contexts/user-context';

export const Rating = ({ reviews }: { reviews: NormalizedReview[] }) => {
    const { contextUser } = useContext(UserContext);

    return (
        <div className={styles.rating}>
            <h3>Reviews:</h3>
            <ul>
                {reviews
                    .filter((review) => review.userId || contextUser)
                    .map((review) => (
                        <li>
                            <Review review={review} />
                        </li>
                    ))}
            </ul>
        </div>
    );
};
