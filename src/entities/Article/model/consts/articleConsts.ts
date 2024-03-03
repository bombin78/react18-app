export enum ArticleSortField {
	VIEWS = 'views',
	TITLE = 'title',
	CREATED = 'createdAt',
}

export enum ArticleBlockType {
	CODE = 'CODE',
	IMAGE = 'IMAGE',
	TEXT = 'TEXT',
}

export enum ArticleType {
	ALL = 'ALL',
	IT = 'IT',
	SCIENCE = 'SCIENCE',
	ECONOMICS = 'ECONOMICS',
}

// В дальнейшем, если ни чего не поменяется, заменить на list и tail
export enum ArticleView {
	BIG = 'BIG',
	SMALL = 'SMALL',
}
