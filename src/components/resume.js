import "./resume.css"
function ResumeBuilder(props){
    return (<div>
        <div id="header"></div>
<div className="left"></div>
<div className="stuff">
<br />
<br />
  
  <h1>Resume</h1>
  <h2>Emily</h2>
  <br />
  <p className="head">Interests</p>
  <ul>
    <li>{props['interests'][0]}</li>
    <li>{props['interests'][1]}</li>
    <li>{props['interests'][2]}</li>
    <li>{props['interests'][3]}</li>
    <li>{props['interests'][4]}</li>
  </ul>
  <p className="head">Skills</p>
  <ul>
    <li>Web Design with HTML & CSS</li>
  </ul>
  <p className="head">Education</p>
  <ul>
    <a href="http://www.wiltonhighschool.org/pages/Wilton_High_School">
      <li>Wilton High School</li>
    </a>
    <a href="https://www.silvermineart.org/">
      <li>Silvermine School of Arts</li>
    </a>
    <li>Codeacademy</li>
  </ul>
  <p className="head">Experience</p>
  <ul>
    <li>Student Technology Intern for Wilton School District</li>
    <li>Babysitter</li>
  </ul>
  <p className="head">Extracurriculars</p>
  <ul>
    <li>Recycling Club</li>
    <li>Gardening Club</li>
    <li>Book Club</li>
  </ul>
</div>
<div className="right"></div>
<div id="footer">
  <h2 id="name">Emily</h2></div>
    </div>)

}



export default ResumeBuilder;