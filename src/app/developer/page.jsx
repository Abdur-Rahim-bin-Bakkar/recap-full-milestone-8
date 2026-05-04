import React from 'react';
import data from '@/lib/data.json'
import DeveloperCard from '@/components/Developer/DeveloperCard';

const DeveloperPage = () => {
    console.log(data)
    return (
        <div>
            <h1>this is developer Page</h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    data.map(dev=> <DeveloperCard key={dev.id} dev={dev}/>)
                }
            </div>
        </div>
    );
};

export default DeveloperPage;