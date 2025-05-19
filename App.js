
import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';




// main coponent

function App() {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [schoolName, setschoolName] = useState('');
const [studyTitle, setstudyTitle] = useState('');
const [studyDate, setstudyDate] = useState('');
const [companyName, setcompanyName] = useState('');
const [positionTitle, setpositionTitle] = useState('');
const [responsibilities, setresponsibilities] = useState('');
const [dateFrom, setdateFrom] = useState('');
const [dateUntil, setdateUntil] = useState('');
const [submitted, setSubmitted] = useState(false);

const handleChange = (e) => {
  const { name, value } = e.target;
  switch (name) {
    case 'fullName':
      setName(value);
      break;
    case 'emailNam':
      setEmail(value);
      break;
    case 'phoneNum':
      setPhone(value);
      break;
     case 'schoolName':
      setschoolName(value);
      break;
    case 'studyTitle':
      setstudyTitle(value);
      break;
    case 'studyDate':
      setstudyDate(value);
      break;
    case 'companyName':
      setcompanyName(value);
      break;
    case 'positionTitle':
      setpositionTitle(value);
      break;
    case 'responsibilities':
      setresponsibilities(value);
      break;
      case 'dateFrom':
      setdateFrom(value);
      break;
      case 'dateUntil':
      setdateUntil(value);
      break;
    default:
      break;
   
  }
  
  
};

// function for btn

  return (
    <div className="App">
       <h1>CV APP</h1>
    <div className="main-container">
      {!submitted ? (
        <>
          <GeneralInfo
        name={name}
        email={email}
        phone={phone}
        handleChange={handleChange}
       />
      <EducationalExperience
        schoolName={schoolName}
        studyTitle={studyTitle}
        studyDate={studyDate}
        handleChange={handleChange}
      />
      <PracticalExperience
        companyName={companyName}
        positionTitle={positionTitle}
        responsibilities={responsibilities}
        dateFrom={dateFrom}
        dateUntil={dateUntil}
        handleChange={handleChange} 
      />
        </>
      ) : (
        <SubmittedView
          name={name}
          email={email}
          phone={phone}
          schoolName={schoolName}
          studyTitle={studyTitle}
          studyDate={studyDate}
          companyName={companyName}
          positionTitle={positionTitle}
          responsibilities={responsibilities}
          dateFrom={dateFrom}
          dateUntil={dateUntil}
          setSubmitted={setSubmitted}
        />
      )}
    
      
      <div className='buttons'>
        <button  onClick={() => setSubmitted(false)}>Edit</button>
        <button onClick={() => setSubmitted(true)} >Submit</button>
      </div>
    </div>
    
    </div>
  );
}



// submitted view component

function SubmittedView({
  name,
  email,
  phone,
  schoolName,
  studyTitle,
  studyDate,
  companyName,
  positionTitle,
  responsibilities,
  dateFrom,
  dateUntil,
  setSubmitted
}){
  return(
<div className='submitted-view'>
    <h1>Your CV</h1>

    <div>
     <h3>General Information</h3>
    <p> <b>Name:</b>  {name}</p>
    <p><b>Email:</b> {email}</p>
    <p> <b>Phone:</b> {phone}</p>
    </div>
    <hr />
    <div>
      <h3>Educational Experience</h3>
      <p><b>School:</b> {schoolName}</p>
      <p><b>Title of study:</b> {studyTitle}</p>
      <p><b>Date of study:</b> {studyDate}</p>
    </div>
    <hr />
   <div>
<h3>Practical Experience</h3>
    <p><b>Company name:</b> {companyName}</p>
    <p><b>Position title:</b> {positionTitle}</p>
    <p><b>Main Responsibilities:</b> {responsibilities}</p>
    <p><b>Date from:</b> {dateFrom}</p>
    <p><b>Date until:</b> {dateUntil}</p>
   </div>
   <hr />
  </div>
  );
}
 

// general information coponent

function GeneralInfo({
  name,
  email,
  phone,
  handleChange
}) {




return (
  <div>
    <h2>General information</h2>
    <form action="">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} name="fullName" onChange={handleChange } />
      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} name="emailNam"   onChange={handleChange }/>
      <br />
      <label htmlFor="phone">Phone:</label>
      <input type="tel" id="phone" value={phone} name="phoneNum"  onChange={handleChange } />
      <br />
     
    </form>
  </div>
)

}

// educational experience component

function EducationalExperience({
  schoolName,
  studyTitle,
  studyDate,
  handleChange
}) {





return (
  <div>
    <h2>Educational Experience</h2>
    <form action="">
      <label htmlFor="name">School:</label>
      <input type="text" id="school-name" value={schoolName} name="schoolName" onChange={handleChange } />
      <br />
      <label htmlFor="Title of study">Title of study:</label>
      <input type="text" id="title-study" value={studyTitle} name="studyTitle"   onChange={handleChange }/>
      <br />
      <label htmlFor="Date of study">Date of study:</label>
      <input type="tel" id="study-date" value={studyDate} name="studyDate"  onChange={handleChange } />
      <br />
     
    </form>
  </div>
)

}


// practical experience component

function PracticalExperience({
  companyName,
  positionTitle,
  responsibilities,
  dateFrom,
  dateUntil,
  handleChange
}) {






return (
  <div>
    <h2>General information</h2>
    <form action="">
      <label htmlFor="company name">Company name:</label>
      <input type="text" id="company-name" value={companyName} name="companyName" onChange={handleChange } />
      <br />
      <label htmlFor="position title">Position title:</label>
      <input type="text" id="position-title" value={positionTitle} name="positionTitle" onChange={handleChange }/>
      <br />
      <label htmlFor="Responsibilities">Main Responsibilities:</label>
      <input type="text" id="responsibilities" value={responsibilities} name="responsibilities"  onChange={handleChange } />
      <br />
      <label htmlFor="date from">Date from:</label>
      <input type="text" id="start-date" value={dateFrom} name="dateFrom" onChange={handleChange }/>
      <br />
      <label htmlFor="date until">Date until:</label>
      <input type="text" id="end-date" value={dateUntil} name="dateUntil" onChange={handleChange }/>
      <br />
    </form>
  </div>
)

}


export default App;
