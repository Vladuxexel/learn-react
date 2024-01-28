import { useState } from 'react';
import { Button } from '../button/component';
import styles from './styles.module.scss';

export const Filter = <T, K extends keyof T>({
    items,
    displayKey,
    selectKey,
    onSelected
}: {
    items: T[];
    displayKey: K;
    selectKey: K;
    onSelected: (value: T[K] | '') => void;
}) => {
    const [selectedItemKey, setSelectedItemKey] = useState<T[K] | ''>('');

    return (
        <div className={styles.filter}>
            {items.map((item) => (
                <Button
                    disabled={selectedItemKey === item[selectKey]}
                    onClick={() => {
                        setSelectedItemKey(item[selectKey]);
                        onSelected(item[selectKey]);
                    }}>
                    {item[displayKey]?.toString()}
                </Button>
            ))}
            <Button
                onClick={() => {
                    setSelectedItemKey('');
                    onSelected('');
                }}>
                X
            </Button>
        </div>
    );
};
