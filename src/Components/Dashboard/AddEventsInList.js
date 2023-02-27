import React from 'react'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Config/Firebase"


// FIREBASE CODE

const addEvent = async (title, date_time, platform, details) => {
  await addDoc(collection(db, "Events"), {
    Title: title,
    Date_Time: date_time,
    Platform: platform,
    Details: details
  });
}

// FIREBASE CODE


const schema = yup.object().shape({
  event_title: yup.string().required('This is a required field'),
  date_time: yup.string().required('This is a required field'),
  platform: yup.string().required('This is a required field'),
  details: yup.string().required('This is a required field')
}).required();



function AddEventsInList() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <div className="col mb-4">
        <div className="card shadow-sm">
          <img src="https://rcctechz22.netlify.app/static/media/RT%20Logo.4c2fa9b42757427f5f59.png" alt="" />

          <div className="card-body d-flex flex-column align-items-center">
            <p className="card-text"><h4> Click the button below to add event details in the event list section</h4></p>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <button type="button" className="btn btn-warning btn-lg" data-bs-toggle="modal" data-bs-target="#AddEvent">Add Event Details</button>
                {/* <!-- Modal --> */}
                <div className="modal fade" id="AddEvent" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">RCCTechz Event Information Collection</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <form onSubmit={handleSubmit((d) => {
                          console.log(d);
                          addEvent(d.event_title, d.date_time, d.platform, d.details);
                          alert("Event details are collected");
                        })}>
                          <img className="mb-4" src="https://rcctechz22.netlify.app/static/media/RT%20Logo.4c2fa9b42757427f5f59.png" alt="" width="72" height="57" />
                          <h1 className="h3 mb-3 fw-normal">Add Details about the event here</h1>
                          <div className="form-floating mt-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" {...register('event_title')} />
                            <label htmlFor="floatingInput">Event Title</label>
                            <p>{errors.event_title?.message}</p>
                          </div>
                          <div className="form-floating mt-3">
                            <input type="text" className="form-control" id="floatingTimeAndDate" placeholder="Password" {...register('date_time')} />
                            <label htmlFor="floatingPassword">Time & Date</label>
                            <p>{errors.date_time?.message}</p>
                          </div>
                          <div className="form-floating mt-3">
                            <input type="text" className="form-control" id="floatingPlatform" placeholder="Password" {...register('platform')} />
                            <label htmlFor="floatingPassword">Event Platform</label>
                            <p>{errors.platform?.message}</p>
                          </div>
                          <div className="form-floating mt-3">
                            <textarea rows="20" type="text" className="form-control" id="floatingDetails" placeholder="Password" {...register('details')}></textarea>
                            <label htmlFor="floatingPassword">Event Details</label>
                            <p>{errors.details?.message}</p>
                          </div>
                          <div className="mt-4 mb-3 d-flex flex-row align-items-center justify-content-center">
                            <button className="w-50 btn btn-lg btn-primary" type="submit">Add Event details</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddEventsInList
