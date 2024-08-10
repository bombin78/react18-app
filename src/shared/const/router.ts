export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'articleDetails',
    ARTICLE_CREATE = 'articleCreate',
    ARTICLE_EDIT = 'articleEdit',
    ADMIN_PANEL = 'adminPanel',
    FORBIDDEN = 'forbidden',
    // Last in order (последний по порядку)
    NOT_FOUND = 'notFound',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/', // + :id
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + :id
    [AppRoutes.ARTICLE_CREATE]: '/articles/new',
    [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
    [AppRoutes.ADMIN_PANEL]: '/admin',
    [AppRoutes.FORBIDDEN]: '/forbidden',
    //  Last in order (последний по порядку)
    [AppRoutes.NOT_FOUND]: '*',
};
