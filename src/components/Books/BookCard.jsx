import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookCard = ({ book }) => {
    console.log(book)
    console.log(book.image_url)
    return (
        <Card>
            <div className='flex-1'>

                <Image className='w-full min-h-60 max-h-130 object-cover' src={book.image_url} alt='book image' height={300} width={400} />
                <Card.Title>{book.title}</Card.Title>
                <Card.Description className='line-clamp-2'>{book.description}</Card.Description>
            </div>
            <Link href={`/books/${book.id}`}>
                <Button className={'w-full'}>Go To Details</Button>
            </Link>

        </Card>
    );
};

export default BookCard;