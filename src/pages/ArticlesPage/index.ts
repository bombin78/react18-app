// Внутри модуля пути должны быть относительными, чтобы
// его можно было переносить без дополнительных правок
export {
    ArticlesPageAsync as ArticlesPage,
} from './ui/ArticlesPage/ArticlesPage.async';

export type { ArticlesPageSchema } from './model/types/articlesPageSchema';
