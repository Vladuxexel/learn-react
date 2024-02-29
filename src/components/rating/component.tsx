import { useContext } from 'react';
import { NormalizedReview } from '../../models/review';
import { Review } from '../review/component';
import styles from './styles.module.scss';
import { UserContext } from '../../contexts/user-context';
import { ReviewFormData } from '../../models/review-form-data';

export const Rating = ({
    reviews,
    onReviewEdited
}: {
    reviews: NormalizedReview[];
    onReviewEdited: (reviewId: string, review: ReviewFormData) => void;
}) => {
    const { contextUser } = useContext(UserContext);

    return (
        <div className={styles.rating}>
            <h3>Reviews:</h3>
            <ul>
                {reviews
                    .filter((review) => review.userId || contextUser)
                    .map((review) => (
                        <li>
                            <Review
                                review={review}
                                onReviewEdited={(editedReview) => onReviewEdited(review.id, editedReview)}
                            />
                        </li>
                    ))}
            </ul>
        </div>
    );
};
