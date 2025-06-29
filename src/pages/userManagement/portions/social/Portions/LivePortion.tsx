import React, { useEffect, useState } from 'react';
import Horizontal from '../../../../../components/alignments/Horizontal';
import ItemAlign from '../../../../../components/alignments/ItemAlign';
import Vertical from '../../../../../components/alignments/Vertical';
import Dropdown from '../../../../../components/Dropdown';
import { bulkFilter, dates } from '../../../../../constants/FiltersData';
import SearchFilter from '../../../../../components/SearchFilter';
import TableCan from '../../../../../components/TableCan';
import {  LivePostHeaders } from '../../../../../constants/Data';
import LivePostRow from '../components/LivePostRow';

interface props {
    data: any;
}

const LivePortion: React.FC<props> = ({ data }) => {
    console.log(data);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        let temp = [...data];

        // Search filter
        if (searchQuery.trim() !== '') {
            temp = temp.filter((item) =>
                item.status.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredData(temp);
    }, [searchQuery]);
    console.log("Filter data",filteredData)

    return (
        <Horizontal>
            <Vertical>
                <ItemAlign>
                    <Dropdown
                        options={dates}
                        onChange={() => { }} // You can integrate real date filtering later
                        placeholder="Date"
                        position="left-0"
                    />
                    <Dropdown
                        options={bulkFilter}
                        onChange={(val: string) => console.log(val)}
                        placeholder="Bulk Actions"
                        position="left-0"
                    />
                </ItemAlign>
                <SearchFilter
                    handleFunction={(val: string) => setSearchQuery(val)}
                />
            </Vertical>
            <TableCan
                headerTr={LivePostHeaders}
                dataTr={filteredData}
                TrName={LivePostRow}
            />
        </Horizontal>
    );
};

export default LivePortion;
