"use strict";
{
    const book1 = {
        title: "Sample Book",
        author: "John Doe",
        publishedYear: 2022,
    };
    const isRecentBook = (book) => {
        const currentYear = new Date().getFullYear();
        return currentYear - book.publishedYear <= 5;
    };
    const result = isRecentBook(book1);
    console.log(result);
}
