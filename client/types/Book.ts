export interface Book {
	id: number;
	title: string;
	author: string;
	description?: string;
	image?: string;
	score?: number;
	review?: BookReview;
	genre: Array<
		| 'Fantasy'
		| 'Science Fiction'
		| 'Romance'
		| 'Adventure'
		| 'Horror'
		| 'Thriller'
		| 'Biography'
		| 'History'
		| 'Travel'
		| 'Food'
	>;
	status: 'reading' | 'finished' | 'to-read';
	titleFont: string;
	pages: number;
	needToBuy: boolean;
	isSeries: boolean;
	series?: BookSeries;
	cover: 'common' | 'hardcover';
	collectorEdition: boolean;
}
