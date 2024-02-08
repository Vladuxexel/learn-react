import { useContext, useReducer } from 'react';
import { Button } from '../button/component';
import styles from './styles.module.scss';
import { Action, ReviewFormData } from '@models';
import { UserContext } from '../../contexts/user-context';

const INITIAL_VALUE: ReviewFormData = {
    name: '',
    text: '',
    rating: 0
};

const reducer = (state: ReviewFormData, { type, payload }: Action<number | string>): ReviewFormData => {
    switch (type) {
        case 'setText':
            return { ...state, text: String(payload) };
        case 'setRating':
            return { ...state, rating: Number(payload) };
        default:
            return state;
    }
};

export const ReviewForm = ({ onReviewSent }: { onReviewSent: (review: ReviewFormData) => void }) => {
    const [form, dispatch] = useReducer(reducer, INITIAL_VALUE);
    const user = useContext(UserContext);

    return (
        <div className={styles.form}>
            <span className={styles['form__user-name']}>{user?.name}:</span>
            <label htmlFor="text">
                Text:
                <input
                    className={styles.field}
                    id="text"
                    type="text"
                    value={form.text}
                    onChange={(event) => dispatch({ type: 'setText', payload: event.target.value })}
                />
            </label>
            <label htmlFor="rating">
                Rating:
                <input
                    className={styles.field}
                    id="rating"
                    type="number"
                    min="0"
                    max="5"
                    value={form.rating}
                    onChange={(event) => dispatch({ type: 'setRating', payload: event.target.value })}
                />
            </label>
            <Button onClick={() => onReviewSent({ ...form, name: user?.name || '' })}>Отправить</Button>
        </div>
    );
};
