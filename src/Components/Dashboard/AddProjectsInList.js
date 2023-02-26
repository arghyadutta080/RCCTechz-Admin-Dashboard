import React from 'react'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { collection, addDoc } from "firebase/firestore";
import { db } from "../Config/Firebase"


// FIREBASE CODE

const addProjects = async (project_name, team, github, details) => {
  await addDoc(collection(db, "Projects"), {
    Project_Name: project_name,
    Team: team,
    GitHub_Repository: github,
    Project_Description: details
  });
}

// FIREBASE CODE



const schema = yup.object().shape({
  project_name: yup.string().required('This is a required field'),
  team: yup.string().required('This is a required field'),
  github: yup.string().required('This is a required field'),
  details: yup.string().required('This is a required field')
}).required();



function AddProjectsInList() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <div className="col">
        <div className="card shadow-sm">
          <img src="https://rcctechz22.netlify.app/static/media/RT%20Logo.4c2fa9b42757427f5f59.png" alt="" />

          <div className="card-body d-flex flex-column align-items-center">
            <p className="card-text"><h4> Click the button below to add Project details in the Project list section</h4></p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-success btn-lg" data-bs-toggle="modal" data-bs-target="#AddProjects">Add Project Details</button>
                {/* <!-- Modal --> */}
                <div className="modal fade" id="AddProjects" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">RCCTechz Project Information Collection</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <form onSubmit={handleSubmit((d) => {
                          console.log(d);
                          addProjects(d.project_name, d.team, d.github, d.details);
                          alert("Project details are collected");
                          })}>
                          <img className="mb-4" src="https://rcctechz22.netlify.app/static/media/RT%20Logo.4c2fa9b42757427f5f59.png" alt="" width="72" height="57" />
                          <h1 className="h3 mb-3 fw-normal">Add Details about the club-Project here</h1>
                          <div className="form-floating mt-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" {...register('project_name')} />
                            <label htmlFor="floatingInput">Project Name</label>
                            <p>{errors.project_name?.message}</p>
                          </div>
                          <div className="form-floating mt-3">
                            <input type="text" className="form-control" id="floatingPlatform" placeholder="Password" {...register('team')} />
                            <label htmlFor="floatingPassword">Team members (separated by ", " )</label>
                            <p>{errors.team?.message}</p>
                          </div>
                          <div className="form-floating mt-3">
                            <input type="text" className="form-control" id="floatingTimeAndDate" placeholder="Password" {...register('github')} />
                            <label htmlFor="floatingPassword">GitHub repository link</label>
                            <p>{errors.github?.message}</p>
                          </div>
                          <div className="form-floating mt-3">
                            <textarea rows="20" type="text" className="form-control" id="floatingDetails" placeholder="Password" {...register('details')}></textarea>
                            <label htmlFor="floatingPassword">Write about the project</label>
                            <p>{errors.details?.message}</p>
                          </div>
                          <div className="mt-4 mb-3 d-flex flex-row align-items-center justify-content-center">
                            <button className="w-50 btn btn-lg btn-primary" type="submit">Add Project details</button>
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

export default AddProjectsInList
