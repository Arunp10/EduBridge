import React from 'react'
import Card from './Card'

import profileImage from './Assets/teacher1.png'
import profileImage2 from './Assets/teacher2.png'
import profileImage3 from './Assets/teacher3.png'
import Sidebar from './Sidebar'
export default function Dashboard() {
  return (
    <>
    <Sidebar />
    <div class="col main pt-5 mt-3">
         <nav aria-label="breadcrumb">
         <ol class="breadcrumb">
             <li class="breadcrumb-item"><a href="#">Home</a></li>
             <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
             <li class="breadcrumb-item active" aria-current="page">Student</li>
         </ol>
         </nav>
         <p class="lead d-none d-sm-block">Suggested Supervisor</p>
  
         <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                 <span aria-hidden="true">×</span>
                 <span class="sr-only">Close</span>
             </button>
             <strong>Data and Records</strong> Learn more about employee
         </div>

         <div class="d-flex justify-content-center">
             <Card image={profileImage} Name="Mr. Amir Ali" Domin="Machine Learning, Datascience" buttonText="Connect" ></Card>
             <Card image={profileImage2} Name="Ms. Sana Khan" Domin="Web Development, Framework Assets" buttonText="Connect" ></Card>
             <Card image={profileImage3} Name="Mr. Ahmed Ayub" Domin="Machine Learning, Datascience" buttonText="Connect" ></Card>
             {/* <div class="col-xl-3 col-sm-6 py-2">
                 <div class="card text-white bg-warning h-100">
                     <div class="card-body">
                         <div class="rotate">
                             <i class="fa fa-share fa-4x"></i>
                         </div>
                         <h6 class="text-uppercase">Shares</h6>
                         <h1 class="display-4">36</h1>
                     </div>
                 </div>
             </div> */}
             {/* <Card image={profileImage} Name="Mr. Amir Ali" Domin="Machine Learning, Datascience" buttonText="Connect" ></Card> */}
         </div> 
         <hr/>
 </div>
 </> 
 )
}