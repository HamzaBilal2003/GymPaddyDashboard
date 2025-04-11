import React, { useState, useMemo } from 'react'
import Horizontal from '../../components/alignments/Horizontal'
import Vertical from '../../components/alignments/Vertical'
import FilterTab from '../../components/FilterTab'
import Button from '../../components/Buttons/Button'
import ItemAlign from '../../components/alignments/ItemAlign'
import Dropdown from '../../components/Dropdown'
import { dates, notificationStatus } from '../../constants/FiltersData'
import NotificationCard from './Components/NotificationCard'
import { allnotification } from '../../constants/Data'
import NotificationModal from './Components/NotificationModal'

// Utility to convert human-readable time to Date
const parseTimeAgo = (time: string): Date => {
    const now = new Date()
    const lower = time.toLowerCase()

    if (lower.includes("just now")) return now
    if (lower.includes("minute")) {
        const min = parseInt(lower.split(" ")[0])
        return new Date(now.getTime() - min * 60000)
    }
    if (lower.includes("hour")) {
        const hr = parseInt(lower.split(" ")[0])
        return new Date(now.getTime() - hr * 60 * 60000)
    }
    if (lower.includes("day")) {
        const d = parseInt(lower.split(" ")[0])
        return new Date(now.getTime() - d * 24 * 60 * 60000)
    }
    return now
}

const Notification: React.FC = () => {
    const [IsModelOpen, setIsModelOpen] = useState(false)
    const tabs = [
        { name: 'all', value: 'all' },
        { name: 'socials', value: 'socials' },
        { name: 'connect', value: 'connect' },
        { name: 'market', value: 'market' },
        { name: 'gym hub', value: 'gym' } // match value to actual type
    ]

    const [activeTab, setActiveTab] = useState<string>('all')
    const [selectedDate, setSelectedDate] = useState<string>('today')
    const [selectedStatus, setSelectedStatus] = useState<string>('all')

    const handleFilterTab = (filter: string) => {
        setActiveTab(filter)
    }

    const handleDateFilter = (value: string) => {
        setSelectedDate(value)
    }

    const handleStatusFilter = (value: string) => {
        setSelectedStatus(value)
    }

    // Filtered notifications using useMemo for performance
    const filteredNotifications = useMemo(() => {
        return allnotification.filter((item) => {
            const matchesTab = activeTab === 'all' || item.type === activeTab
            const matchesStatus = selectedStatus === 'all' || item.status === selectedStatus

            const notificationDate = parseTimeAgo(item.time)
            const now = new Date()
            const daysDifference = (now.getTime() - notificationDate.getTime()) / (1000 * 60 * 60 * 24)

            const selectedDays = parseInt(selectedDate) || 0
            const matchesDate = selectedDate === 'today' ? daysDifference < 1 : daysDifference <= selectedDays

            return matchesTab && matchesStatus && matchesDate
        })
    }, [activeTab, selectedDate, selectedStatus])

    return (
        <Horizontal>
            <Vertical>
                <FilterTab
                    handleValue={handleFilterTab}
                    tabs={tabs}
                    activeTab={activeTab}
                />
                <Button handleFunction={() => setIsModelOpen(true)}>Send Notification</Button>
            </Vertical>

            <ItemAlign>
                <Dropdown
                    options={dates}
                    onChange={handleDateFilter}
                    placeholder="Bulk Actions"
                    position="left-0"
                />
                <Dropdown
                    options={notificationStatus}
                    onChange={handleStatusFilter}
                    placeholder="Status"
                    position="left-0"
                />
            </ItemAlign>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    filteredNotifications.length > 0 ? (
                        filteredNotifications.map((notificationItem, index) => (
                            <NotificationCard key={index} {...notificationItem} />
                        ))
                    ) : (
                        <div className="col-span-3 text-center text-gray-500">No notifications found.</div>
                    )
                }
            </div>

            <NotificationModal
                isOpen={IsModelOpen}
                onClose={() => setIsModelOpen(false)}
            />
        </Horizontal>
    )
}

export default Notification
