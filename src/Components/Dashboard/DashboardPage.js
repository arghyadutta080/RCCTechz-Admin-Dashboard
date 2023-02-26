import React from 'react'
import AddEventsInList from './AddEventsInList'
import AddMemberInList from './AddMemberInList'
import AddProjectsInList from './AddProjectsInList'

import { getAuth, signOut } from "firebase/auth";
import { app } from '../Config/Firebase';


function DashboardPage(props) {
    

    // FIREBASE CODE

    const auth = getAuth(app);
    const signOutPage = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            props.authentic(false);
        })
    }

    // FIREBASE CODE

    

    return (
        <div>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-4">
                    <AddEventsInList />
                    <AddMemberInList />
                    <AddProjectsInList />
                </div>
                <div>
                    <button className='btn btn-danger btn-lg mt-5' onClick={signOutPage}>Sign Out</button>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage
