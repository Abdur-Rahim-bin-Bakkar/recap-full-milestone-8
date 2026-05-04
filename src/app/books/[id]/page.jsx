import React from 'react';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';

const BookDetailsPage = async ({ params }) => {
    const { id } = await params
    const res = await fetch('http://localhost:3001/books')
    const Books = await res.json()

    const currentBook = Books.find(book => book.id == id)
    console.log(currentBook)
    return (
        <div>
            <h1>this is book detail page {id}</h1>
            <Card className='flex md:flex-row'>
                <Image className=' min-h-60 max-h-[80vh] object-cover' src={currentBook.image_url} alt='book image' height={300} width={400} />
                <div className='flex-1 space-y-4 md:pt-10'>

                    <Card.Title className='text-2xl font-bold'>{currentBook.title}</Card.Title>
                    <Card.Description className='line-clamp-2'>{currentBook.author}</Card.Description>
                    <Card.Description className='line-clamp-2'>Available quantity {currentBook.available_quantity
                    }</Card.Description>
                    <Card.Description className='line-clamp-2'>{currentBook.description}</Card.Description>
                    <Link href={'/books'}>
                        <Button>Go Back</Button>
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default BookDetailsPage;