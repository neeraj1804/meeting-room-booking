import React, {useState, lazy, Suspense} from 'react';
import './App.css';
const Login = lazy(() => import("./view/login/Login"));
const MeetingRoom = lazy(() => import("./view/meeting-room/MeetingRoom"));


function App() {
  const [emailId, setEmailId] = useState("");
  let component = null;
  if(emailId) {
    component = <MeetingRoom emailId={emailId} />
  }else {
    component = <Login setEmailId={setEmailId} emailId={emailId} />
  }
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        {component}
      </Suspense>
    </div>
  );
}

export default App;
