import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import Navbar from './components/Navbar'; // Import Navbar

function App() {
  return (
    <Router>
      <Navbar /> {/* Always visible */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/students" element={<StudentList />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/edit/:id" element={<EditStudent />} />
      </Routes>
    </Router>
  );
}

export default App;
