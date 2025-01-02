import { useState } from 'react';
import Form from './Form';
import Card from './Card';

const Ticket = () => {
  const [userInfo, setUserInfo] = useState(null);

  const handleFormSubmit = (data) => {
    setUserInfo(data); // Save form data to state
  };

  return (
    <main className="flex flex-col justify-center items-center text-center gap-10 sm:gap-0 mt-64M">
      {!userInfo ? (
        <Form onSubmit={handleFormSubmit} />
      ) : (
        <>
          <h1 className="font-bold text-center text-2xl sm:text-4xl leading-xs-tight text-neutral-0 max-w-container-sm">
            Congrats, {userInfo.fullName}! Your ticket is ready.
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 mt-16M mb-64M mb-64M min-w-container-200 w-[90vw] max-w-container-800">
            We've emailed your ticket to{' '}
            <span className="text-orange-500">{userInfo.email}</span> and will
            send updates in the run up to the event.
          </p>

          <Card userInfo={userInfo} />
        </>
      )}
    </main>
  );
};

export default Ticket;
