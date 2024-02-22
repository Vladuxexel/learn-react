import { useEffect, useState } from 'react';
import { Button } from '../button/component';
import styles from './styles.module.scss';
import classNames from 'classnames';

export const Filter = <T, K extends keyof T>({
    items,
    displayKey,
    selectKey,
    className,
    initiallySelected = '',
    onSelected
}: {
    items: T[];
    displayKey: K;
    selectKey: K;
    className: string;
    initiallySelected?: T[K] | '';
    onSelected: (value: T[K] | '') => void;
}) => {
    const [selectedItemKey, setSelectedItemKey] = useState<T[K] | ''>(initiallySelected);

    useEffect(() => {
        if (initiallySelected !== undefined) {
            setSelectedItemKey(initiallySelected);
        }
    }, [initiallySelected]);

    return (
        <div className={classNames(styles.filter, className)}>
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
        </div>
    );
};
