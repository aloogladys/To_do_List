import { SignUp } from "@clerk/clerk-react";

export function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <SignUp 
          routing="path" 
          path="/sign-up" 
          appearance={{
            elements: {
              formButtonPrimary: 'bg-green-500 hover:bg-green-600',
              card: 'shadow-lg'
            }
          }} 
        />
      </div>
    </div>
  );
}

export default SignUpPage;
