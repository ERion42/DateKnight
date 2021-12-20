import React, { useState } from 'react';
import Auth from '../utils/auth';
import HomePage from '../Pages/Home';
import Dashboard from '../Pages/Dashboard';

export default function SiteContainer() {
    const [currentPage, setCurrentPage] = useState('LandingPage');

    // Check to see the value of 'currentPage', then returns component to render
    const renderPage = () => {
        if (Auth.loggedIn()) {
            return <Dashboard />;

        } else {
            return <HomePage/>;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <main>
            
            <div className="container">
                {renderPage()}
            </div>
        </main>
    )


}