import React from 'react';
import Login from './Login';



export const metadata = {
  title: "Login | Care.io",
  description: "Log in to your Care.io account to access personalized caregiving services and manage your bookings.",
  robots: {
    index: true,
    follow: true,
  },
};
const page = () => {

    
    return <Login></Login>
      
  
};

export default page;