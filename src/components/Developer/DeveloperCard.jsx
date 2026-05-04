import { Card } from '@heroui/react';
import React from 'react';

const DeveloperCard = ({dev}) => {
    console.log(dev)
    return (
        <Card>
            <Card.Title className='text-red-500 dark:text-green-500'>
               Name: {dev.name}
            </Card.Title>
            <Card.Title>
              Roll:  {dev.roll}
            </Card.Title>
            <Card.Title>
              Skil:  {dev.role}
            </Card.Title>
            
        </Card>
    );
};

export default DeveloperCard;