import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/Select/Select';
import { SortOrder } from '@/shared/types';
import { ArticleSortField } from '../../model/consts/articleConsts';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        sort,
        order,
        onChangeOrder,
        onChangeSort,
    } = props;
    const { t } = useTranslation();

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('creation date'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('title'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('views'),
        },
    ], [t]);

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('ascending order'),
        },
        {
            value: 'desc',
            content: t('descending order'),
        },
    ], [t]);

    return (
        <div className={classNames(cls.articleSortSelector, {}, [className])}>
            {/* Компонент с дженерик типом */}
            <Select<ArticleSortField>
                options={sortFieldOptions}
                label={t('Sort by')}
                value={sort}
                onChange={onChangeSort}
            />
            {/* Компонент с дженерик типом */}
            <Select<SortOrder>
                className={cls.order}
                options={orderOptions}
                label={t('by')}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );
});
