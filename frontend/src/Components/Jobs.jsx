import React, { useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import Navbar from './Navbar';
// import SearchBar from './Searchbar'
const Jobs = () => {
  const [keyword, setKeyword] = useState('');
  const [jobsInfo, setJobsInfo] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          keyword: keyword
        }),
      });
      const data = await response.json();
      setJobsInfo(data.jobsInfo);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <label>
          Enter your field of interest:
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
        {/* <div className='d-grid '><MDBBtn color='primary'><button type="submit">Submit</button></MDBBtn></div> */}
      </form>
      <div>
  
        {jobsInfo && jobsInfo.map((job, index) => (
          <div key={index}>
          <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>
            <a href={job.url}>{job.jobTitle}</a>
            </MDBCardTitle>
            {/* <a href={job.url}>{job.jobTitle}</a> */}
            {/* <p>{job.jobDescription}</p> */}
            <MDBCardText>
            <p>{job.jobDescription}</p>
            </MDBCardText>
            
          </MDBCardBody>
          </MDBCard>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;