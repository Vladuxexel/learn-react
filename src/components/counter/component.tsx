import { useState } from 'react';
import { Button } from '../button/component';
import styles from './styles.module.scss';

export const Counter = ({ minValue, maxValue }: { minValue?: number; maxValue?: number }) => {
    const [value, setValue] = useState(0);

    return (
        <div className={styles.counter}>
            <Button
                disabled={minValue !== undefined && value <= minValue}
                onClick={() => {
                    if (minValue === undefined) {
                        setValue(value - 1);
                        return;
                    }

                    if (value > minValue) {
                        setValue(value - 1);
                    }
                }}>
                -
            </Button>
            {value}
            <Button
                disabled={maxValue !== undefined && value >= maxValue}
                onClick={() => {
                    if (maxValue === undefined) {
                        setValue(value + 1);
                        return;
                    }

                    if (value < maxValue) {
                        setValue(value + 1);
                    }
                }}>
                +
            </Button>
        </div>
    );
};
