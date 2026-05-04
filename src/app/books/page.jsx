import BookCard from '@/components/Books/BookCard';
import React from 'react';

const BooksPage = async () => {
    const res = await fetch('http://localhost:3001/books')
    const Books = await res.json()
    // console.log(data)
    return (
        <div>
            <h1>this is books page</h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4'>
                {
                    Books.map(book => <BookCard key={book.id} book={book} />)
                }
            </div>
        </div>
    );
};

export default BooksPage;