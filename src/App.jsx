import './App.css'
import AssignorChangeMentor from "../Components/AssignorChangeToMentor"
import AssignStudentsToMentor from "../Components/AssignStudentsToMentor"
import MentorForm from "../Components/MentorForm"
import MentorTable from "../Components/MentorForm"
import ShowMentorStudents from "../Components/ShowMentorStudents"
import StudentForm from "../Components/StudentForm"
import StudentTable from '../Components/StudentTable';
import { AssignMentorProvider } from "../Context/AssignMentors"

function App() {


  return (
    <div className="container">
    <h2 style={{textAlign:"center",marginBottom:"2rem"}}>Mentor and Student</h2>
    <AssignMentorProvider>
      <div className="row">
        <div className="col-md-5 col-sm-12">
          <MentorForm />
          <StudentForm />
          <AssignorChangeMentor />
          <AssignStudentsToMentor />
          <ShowMentorStudents /> 
        </div>
        <div className="col-md-7 col-sm-12">
          <MentorTable />
          <StudentTable />
        </div>
      </div>
    </AssignMentorProvider>
  </div>
   
   
  )
}

export default App