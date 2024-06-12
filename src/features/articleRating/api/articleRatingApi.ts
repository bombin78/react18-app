import { rtkApi } from '@/shared/api/rtkApi';
import { type Rating } from '@/entities/Rating';

interface GetArticleRatingArg {
    userId: string;
    articleId: string;
}

interface RateArticleArg {
    userId: string;
    articleId: string;
    rate: number;
    feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        // в build.query<...> указываем тип того, что будет возвращаться и тип аргумента
        getArticleRating: build.query<Rating[], GetArticleRatingArg>({
            query: ({ userId, articleId }) => ({
                // Название эндпоинта (см.файл db.json)
                url: '/article-ratings',
                params: {
                    userId,
                    articleId,
                },
            }),
        }),
        rateArticle: build.mutation<void, RateArticleArg>({
            query: (arg) => ({
                // Название эндпоинта (см.файл db.json)
                url: '/article-ratings',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const useArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
