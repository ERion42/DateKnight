import React from 'react';


function Dashboard() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    You are logged in :)
                </p>
                <a
                    className="App-link"
                    href={"/auth/logout"}
                >
                    Logout
                </a>
            </header>
        </div>
    );
}

export default Dashboard;
