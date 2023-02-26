import React from 'react'
import AddEventsInList from './AddEventsInList'
import AddMemberInList from './AddMemberInList'
import AddProjectsInList from './AddProjectsInList'

function DashboardPage() {
    return (
        <div>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-4">
                    <AddEventsInList/>
                    <AddMemberInList/>
                    <AddProjectsInList/>
                </div>
                <div>
                    {/* <button className='btn btn-danger btn-lg mt-4'>Sign Out</button> */}
                </div>
            </div>
        </div>
    )
}

export default DashboardPage
