import { Review } from '../review/component';
import styles from './styles.module.scss';

export const Rating = ({ reviewIds }: { reviewIds: string[] }) => {
    return (
        <div className={styles.rating}>
            <h3>Reviews:</h3>
            <ul>
                {reviewIds.map((id) => (
                    <li>
                        <Review id={id} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
