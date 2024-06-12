import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { useArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const {
        className,
        articleId,
    } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useArticleRating({
        articleId,
        // ?? '' - чтобы не ругался typescript, на деле,
        // до этой части кода выполнение ни когда не дойдет
        userId: userData?.id ?? '',
    });
    const [rateArticleMutation] = useRateArticle();

    const handleRatingArticle = useCallback((
        starsCount: number,
        feedback?: string,
    ) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? '',
                articleId,
                rate: starsCount,
                feedback,
            });
        } catch (e) {
            // handle error
            console.log(e);
        }
    }, [articleId, rateArticleMutation, userData?.id]);

    const onAccept = useCallback((
        starsCount: number,
        feedback?: string,
    ) => {
        handleRatingArticle(starsCount, feedback);
    }, [handleRatingArticle]);

    const onCancel = useCallback((
        starsCount: number,
    ) => {
        handleRatingArticle(starsCount);
    }, [handleRatingArticle]);

    // Обработка индикации загрузки
    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            onCancel={onCancel}
            onAccept={onAccept}
            rate={rating?.rate}
            className={className}
            title={t('Rate the article')}
            feedbackTitle={t('Leave your feedback about the article, it will help to improve the quality')}
            hasFeedback
        />
    );
});

export default ArticleRating;
