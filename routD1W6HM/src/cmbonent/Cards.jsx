import React from 'react';
import { Link } from 'react-router-dom';

function Cards({ backgroundImage, title, paragraph }) {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col justify-center items-center px-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
  
      <div className="absolute inset-0 bg-black opacity-50"></div>

  
      <div className="relative z-10 text-center text-white mb-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          {title}
        </h1>
        <div className='flex justify-center'>
          <p className="text-sm md:text-lg w-[50%] font-medium">
            {paragraph}
          </p>
        </div>
      </div>

      
      <div className="relative z-10 grid grid-cols-2 md:flex md:justify-center gap-4">
        <div className="card w-full md:w-40 bg-white shadow-xl">
          <div className="card-body">
            <Link to={`/sea`}><h2 className="card-title justify-center">Sea</h2></Link>
          </div>
        </div>
        <div className="card w-full md:w-40 bg-white shadow-xl">
          <div className="card-body">
            <Link to={`/desert`}> <h2 className="card-title justify-center">Desert</h2></Link>
          </div>
        </div>
        <div className="card w-full md:w-40 bg-white shadow-xl">
          <div className="card-body">
            <Link to={`/ice`}>  <h2 className="card-title justify-center">Ice</h2></Link>
          </div>
        </div>
        <div className="card w-full md:w-40 bg-white shadow-xl">
          <div className="card-body">
            <Link to={`/forest`}><h2 className="card-title justify-center">Forest</h2></Link>
          </div>
        </div>
        <div className="card w-full md:w-40 bg-white shadow-xl col-span-2 md:col-span-1">
          <div className="card-body">
            <Link to={`/mountains`}><h2 className="card-title justify-center">Mountains</h2></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
