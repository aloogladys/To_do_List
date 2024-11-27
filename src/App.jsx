// import React from "react";
// import { BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom";
// import { ClerkLoaded, RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
// import ToDoList from "./ToDoList.jsx"
// import Login from './components/Login.jsx';

// function App(){
//   // return (<> <ToDoList /> </>)
//   return<>
//    <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/home" element={<ToDoList />} />
//       </Routes>
//     </Router>
    
//   </>
  
// }

// const LoginRedirect = () => {
//   const navigate = useNavigate();
//   React.useEffect(() => {
//     // Check if the user is signed in and redirect to /home
//     if (window.Clerk.user) {
//       navigate("/home"); // Redirect to the home page if logged in
//     }
//   }, [navigate]);

//   return <Login />;
// };


// export default App;


import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";
// import { Home } from './Home';
import ToDoList from './ToDoList';
import { SignInPage } from './Signin.jsx';
import { SignUpPage } from './Signup.jsx';

function Navigation() {
  const { user } = useUser();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        
        <div className="flex items-center space-x-4">
          
          <SignedOut>
            <Link to="/sign-in" className="text-white hover:text-gray-300">
              Sign In
            </Link>
            <Link to="/sign-up" className="text-white hover:text-gray-300">
              Sign Up
            </Link>
          </SignedOut>
          <SignedIn>
              {/* Redirect to the ToDoList page */}
              <Navigate to="/ToDoList" />
              <UserButton afterSignOutUrl="/" />

          </SignedIn>

          
          {/* <SignedIn> */}
          {/* <h1 className="text-black z-50 relative">i signed in</h1>            {/* <Link to="/ToDoList" className="text-white hover:text-gray-300"> */}
              {/* Dashboard */}
            {/* </Link> */} 
            {/* <UserButton afterSignOutUrl="/" /> */}
          {/* </SignedIn> */}
        </div>
      </div>
    </nav>
  );
}

function ProtectedRoute({ children }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <Navigate to="/sign-in" replace />
      </SignedOut>
    </>
  );
}

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/ToDoList" element={<ProtectedRoute><ToDoList /></ProtectedRoute>} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;