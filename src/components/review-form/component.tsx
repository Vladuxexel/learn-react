import { useReducer } from 'react';
import { Button } from '../button/component';
import styles from './styles.module.scss';
import { Action, ReviewFormData } from '@models';

const INITIAL_VALUE: ReviewFormData = {
    name: '',
    text: '',
    rating: 0
};

const reducer = (state: ReviewFormData, { type, payload }: Action<number | string>): ReviewFormData => {
    const reducerMap: Map<string, ReviewFormData> = new Map([
        ['setName', { ...INITIAL_VALUE, name: String(payload) }],
        ['setText', { ...state, text: String(payload) }],
        ['setRating', { ...state, rating: Number(payload) }]
    ]);

    return reducerMap.get(type) ?? state;
};

export const ReviewForm = ({ onReviewSent }: { onReviewSent: (review: ReviewFormData) => void }) => {
    const [form, dispatch] = useReducer(reducer, INITIAL_VALUE);

    return (
        <div className={styles.form}>
            <label htmlFor="name">
                Name:
                <input
                    className={styles.field}
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(event) => dispatch({ type: 'setName', payload: event.target.value })}
                />
            </label>
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
            <Button onClick={() => onReviewSent(form)}>Отправить</Button>
        </div>
    );
};
