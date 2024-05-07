{
    type Book = {
      title: string;
      author: string;
      publishedYear: number;
    };

    const book1: Book = {
      title: "Sample Book",
      author: "John Doe",
      publishedYear: 2022,
    };

    const isRecentBook = (book: Book): boolean =>{

        const currentYear = new Date().getFullYear();

        return currentYear - book.publishedYear <= 5;
    }

    const result = isRecentBook(book1);
    console.log(result);
    
}
