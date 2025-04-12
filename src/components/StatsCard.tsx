import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';
import type { StatsCardProps } from '../constants/Data';

const StatsCard: React.FC<StatsCardProps> = ({
    icon,
    heading,
    subHeading,
    IconColor,
    value,
    changeStatus,
    subDetail,
}) => {

    return (
        <div className="bg-white rounded-lg shadow-md p-6 w-full  border border-gray-200">
            <div className="flex items-center gap-4 mb-4">
                <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: IconColor }}
                >
                    <img src={icon} alt={subHeading} className={`w-8 h-8 ${!icon.includes('revenue') && 'invert'}`}  />
                </div>
                <div>
                    <h2 className="text-sm font-medium text-black/50">{heading}</h2>
                    <p className="text-lg font-medium">{subHeading}</p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-gray-900">
                    {value.toLocaleString()}
                </span>
                <div className={`flex border-2 p-1 rounded-lg items-center ${changeStatus === 'up' ? 'text-green-500' : 'text-red-500'
                    }`}>
                    {changeStatus === 'up' ? (
                        <ArrowUpIcon className="w-5 h-5" />
                    ) : (
                        <ArrowDownIcon className="w-5 h-5" />
                    )}
                </div>
            </div>

            {subDetail.length > 0 && (
                <div className="grid grid-cols-4 gap-2 pt-6 border-t border-gray-100">
                    {subDetail.map((detail, index) => (
                        <div key={index}>
                            <div className='flex items-center gap-1'>
                                <img src={detail.icon} alt={detail.name} className='size-5' />
                                <p className="text-[12px] text-gray-500">{detail.name}</p>
                            </div>
                            <p className="text-lg font-semibold text-gray-900">
                                {detail.value.toLocaleString()}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default StatsCard