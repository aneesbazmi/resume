import logo from './logo.svg';
import './App.css';
import ResumeBuilder from './components/resume';

function App() {
  let resume = {
    interests: ['Drawing', 'Photography', 'design', 'programming', 'computer science'],
    experience : [ { year:2012, company:'xyz', role:'something' }],
    education:[ ],
    skills : [ 'react js', 'node js'],
    extracurriculars : ['recycling club', 'gardening club', 'book club']
    }
  return (
    <div className="App">
      <ResumeBuilder {...resume} ></ResumeBuilder>
      </div>
  );
}

export default App;
