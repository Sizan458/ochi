import React, { useEffect, useState } from 'react'

function Loader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const handleLoad = () => {
        setLoading(false);
      };
  
      // Event listener for when the entire website has loaded
      window.addEventListener('load', handleLoad);
  
      // Cleanup function
      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }, []);
  
  
  const Loaders = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-red-200 h-20 w-20"></div>
      </div>
    );
  };

  return [loading, Loaders];
}

export default Loader