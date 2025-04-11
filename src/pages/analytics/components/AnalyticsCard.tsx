import React from 'react'

interface props {
    label: string;
    value: string;
}

const AnalyticsCard: React.FC<props> = ({label,value}) => {
    return (
        <div className='p-4 shadow-md border border-gray-200 rounded-lg'>
            <h1 className='text-sm text-black/50'>{label}</h1>
            <h1 className='text-2xl font-medium'>{value}</h1>
        </div>
    )
}

export default AnalyticsCard