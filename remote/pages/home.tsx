'use client'
import React, { useEffect } from 'react';
const Home = () => {
  async function fetchData() {
    try {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div>
      <h1>This is the remote app</h1>
    </div>
  );
};

export default Home;
