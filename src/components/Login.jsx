// import React from "react";
// import { SignIn } from "@clerk/clerk-react";

// const Login = () => {
//   return (
//     <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
//       <SignIn />
//     </div>
//   );
// };

// export default Login;


import { SignIn } from "@clerk/clerk-react";

export function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <SignIn 
          routing="path" 
          path="/sign-in" 
          appearance={{
            elements: {
              formButtonPrimary: 'bg-blue-500 hover:bg-blue-600',
              card: 'shadow-lg'
            }
          }} 
        />
      </div>
    </div>
  );
}

export default SignInPage
