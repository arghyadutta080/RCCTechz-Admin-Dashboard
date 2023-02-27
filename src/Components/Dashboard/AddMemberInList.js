import React from 'react'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Config/Firebase"


// FIREBASE CODE

const addMember = async (name, college_email, personal_email, img_url, club_role, designation, skills, github, linkedin, instagram, details) => {
  await addDoc(collection(db, "Members"), {
    Name: name,
    College_Email: college_email,
    Personal_Email: personal_email,
    Img_Url: img_url,
    club_Role: club_role,
    Designation: designation,
    Skills: skills,
    GitHub : github,
    LinkedIn: linkedin,
    Instagram: instagram,
    About_Yourself: details
  });
}

// FIREBASE CODE


const schema = yup.object().shape({
  name: yup.string().required('This is a required field'),
  college_email: yup.string().email().required('This is a required field'),
  personal_email: yup.string().email().required('This is a required field'),
  img_url: yup.string().required('This is a required field'),
  club_role: yup.string().required('This is a required field'),
  designation: yup.string().required('This is a required field'),
  skills: yup.string().required('This is a required field'),
  github: yup.string().required('This is a required field'),
  linkedin: yup.string().required('This is a required field'),
  instagram: yup.string().required('This is a required field'),
  details: yup.string().required('This is a required field')
}).required();


function AddMemberInList() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <div className="col mb-4">
        <div className="card shadow-sm">
          <img src="https://rcctechz22.netlify.app/static/media/RT%20Logo.4c2fa9b42757427f5f59.png" alt="" />

          <div className="card-body d-flex flex-column align-items-center">
            <p className="card-text"><h4> Click the button below to add club members details in the member section</h4></p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#AddMember">Add Member Details</button>
                {/* <!-- Modal --> */}
                <div className="modal fade" id="AddMember" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">RCCTechz Member Information Collection</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <form onSubmit={handleSubmit((d) => {
                          console.log(d);
                          addMember(d.name, d.college_email, d.personal_email, d.img_url, d.club_role, d.designation, d.skills, d.github, d.linkedin, d.instagram, d.details);
                          alert("Members details are collected");
                          })}>
                          <img className="mb-4" src="https://rcctechz22.netlify.app/static/media/RT%20Logo.4c2fa9b42757427f5f59.png" alt="" width="72" height="57" />
                          <h1 className="h3 mb-3 fw-normal">Add Details about the club-member here</h1>
                          <div className="form-floating mt-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" {...register('name')} />
                            <label htmlFor="floatingInput">Full Name</label>
                            <p>{errors.name?.message}</p>
                          </div>
                          <div className="form-floating mt-3">
                            <input type="e-mail" className="form-control" id="floatingTimeAndDate" placeholder="Password" {...register('college_email')} />
                            <label htmlFor="floatingPassword">College E-mail ID</label>
                            <p>{errors.college_email?.message}</p>
                          </div>
                          <div className="form-floating mt-3">
                            <input type="e-mail" className="form-control" id="floatingTimeAndDate" placeholder="Password" {...register('personal_email')} />
                            <label htmlFor="floatingPassword">Personal E-mail ID</label>
                            <p>{errors.personal_email?.message}</p>
                          </div>
                          <div className="form-floating mt-3">
                            <input type="text" className="form-control" id="floatingTimeAndDate" placeholder="Password" {...register('img_url')} />
                            <label htmlFor="floatingPassword">Image URL</label>
                            <p>{errors.img_url?.message}</p>
                          </div>
                          <div className="form-floating mt-3">
                            <input type="text" className="form-control" id="floatingPlatform" placeholder="Password" {...register('club_role')} />
                            <label htmlFor="floatingPassword">Club Role</label>
                            <p>{errors.club_role?.message}</p>
                          </div>
                          <div className="form-floating mt-3">
                            <input type="text" className="form-control" id="floatingPlatform" placeholder="Password" {...register('designation')} />
                            <label htmlFor="floatingPassword">Designation(Eg: Competitive Coder, UI/UX Designer, Web Developer)</label>
                            <p>{errors.designation?.message}</p>
                          </div>
                          <div className="form-floating mt-3">
                            <input type="text" className="form-control" id="floatingPlatform" placeholder="Password" {...register('skills')} />
                            <label htmlFor="floatingPassword">Your top 3 - 5 skills (separated by ", " )</label>
                            <p>{errors.skills?.message}</p>
                          </div>
                          <div className="form-floating mt-3">
                            <input type="text" className="form-control" id="floatingTimeAndDate" placeholder="Password" {...register('github')} />
                            <label htmlFor="floatingPassword">GitHub profile URL</label>
                            <p>{errors.github?.message}</p>
                          </div>
                          <div className="form-floating mt-3">
                            <input type="text" className="form-control" id="floatingTimeAndDate" placeholder="Password" {...register('linkedin')} />
                            <label htmlFor="floatingPassword">LinkedIn profile URL</label>
                            <p>{errors.linkedin?.message}</p>
                          </div>
                          <div className="form-floating mt-3">
                            <input type="text" className="form-control" id="floatingTimeAndDate" placeholder="Password" {...register('instagram')} />
                            <label htmlFor="floatingPassword">Instagram profile URL</label>
                            <p>{errors.instagram?.message}</p>
                          </div>
                          <div className="form-floating mt-3">
                            <textarea rows="20" type="text" className="form-control" id="floatingDetails" placeholder="Password" {...register('details')}></textarea>
                            <label htmlFor="floatingPassword">Write about yourself</label>
                            <p>{errors.details?.message}</p>
                          </div>
                          <div className="mt-4 mb-3 d-flex flex-row align-items-center justify-content-center">
                            <button className="w-50 btn btn-lg btn-primary" type="submit">Add Member details</button>
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

export default AddMemberInList
