import { useState } from 'react';
import { Button } from '../button/component';
import styles from './styles.module.scss';
import { Size } from '../../constants/size';

export const Counter = ({
    minValue,
    maxValue,
    initialValue,
    onChange
}: {
    minValue?: number;
    maxValue?: number;
    initialValue?: number;
    onChange: (value: number, type: 'increment' | 'decrement') => void;
}) => {
    const [value, setValue] = useState(initialValue ?? 0);

    return (
        <div className={styles.counter}>
            <Button
                size={Size.s}
                disabled={minValue !== undefined && value <= minValue}
                onClick={() => {
                    const newValue = value - 1;
                    if (minValue === undefined) {
                        setValue(newValue);
                        onChange(newValue, 'decrement');
                        return;
                    }

                    if (value > minValue) {
                        setValue(newValue);
                        onChange(newValue, 'decrement');
                    }
                }}>
                -
            </Button>
            {value}
            <Button
                size={Size.s}
                disabled={maxValue !== undefined && value >= maxValue}
                onClick={() => {
                    const newValue = value + 1;
                    if (maxValue === undefined) {
                        setValue(newValue);
                        onChange(newValue, 'increment');
                        return;
                    }

                    if (value < maxValue) {
                        setValue(newValue);
                        onChange(newValue, 'increment');
                    }
                }}>
                +
            </Button>
        </div>
    );
};
