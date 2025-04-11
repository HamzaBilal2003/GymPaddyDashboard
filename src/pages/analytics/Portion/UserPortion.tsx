import React from 'react'
import CardPopulation from '../components/CardPopulation';

interface props {
    data?: any
}

const UserPortion: React.FC<props> = ({ data }) => {
    console.log(data);
    return (
        <div className='space-y-4'>
            <h1 className='capitalize text-2xl'>Users Statistics</h1>
            <div className='mt-8'>
                <CardPopulation data={data} />
            </div>
        </div>
    )
}

export default UserPortion;