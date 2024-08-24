export interface Book {
	id: number;
	title: string;
	author: string;
	description?: string;
	image?: string;
	score?: number;
	review?: string;
	genre: BookGenre[];
	status: BookStatus;
	titleFont: string;
}
