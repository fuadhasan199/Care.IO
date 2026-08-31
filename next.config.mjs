/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{ 
    remotePatterns:[
         {
           protocol:'https',
           hostname:'images.unsplash.com',
         } ,
          {
            protocol:'https',
            hostname:'i.ibb.co',
          },
          {
            protocol:'https',
            hostname:'i.ibb.co.com',
          } , 
          {
            protocol:'https',
            hostname:"lh3.googleusercontent.com"
          },
          {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
           

    ] ,
   
    
  } ,
    experimental: {
    serverActions: {
      bodySizeLimit: "5mb", 
    },
  },
};

export default nextConfig;
