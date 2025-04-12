import React from 'react'
import SiteStatisticsChart from '../../dashboard/components/SiteStatisticsChart';
import CardPopulation from '../components/CardPopulation';

interface props {
    data?: any
}

const AllPortion : React.FC<props> = ({data}) => {
    console.log(data);
    return (
        <div className='space-y-4'>
            <h1 className='capitalize text-2xl'>All Statistics</h1>
            <div className='shadow-md border border-gray-200 p-4 max-w-4xl rounded-lg h-[400px]'>
                <SiteStatisticsChart />
            </div>
            <div className='mt-8'>
                <CardPopulation data={data} />
            </div>
        </div>
    )
}

export default AllPortion