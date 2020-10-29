import React from 'react';
import {
    FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar,
} from 'react-icons/fa';
import { useSelectedProjectValue } from '../../context';




export const Sidebar = () => {
    const { setSelectedProject } = useSelectedProjectValue;
    const 
}

    return (
    <div className="sidebar" data-testid="sidebar">
        <ul className="sidebar__generic">
            <li data-testid="inbox" className="inbox">
                <span><FaInbox /></span>
                <span>Inbox</span>
            </li>
            <li data-testid="today" className="today">
                <span><FaRegCalendar /></span>
                <span>Today</span>
            </li>
            <li data-testid="next_7" className="next_7">
                <span><FaRegCalendarAlt /></span>
                <span>Next 7 Days</span>
            </li>
        </ul>

        <div className="siderbar__middle">
            <span><FaChevronDown /></span>
            <h2>Projects</h2>
        </div>

        <ul className="siderbar__projects">Projects will be here soon!</ul>
    
        Add Project Component Here!
    </div>
);


