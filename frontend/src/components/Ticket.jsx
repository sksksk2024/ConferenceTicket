import Card from './Card';

const Ticket = () => {
  return (
    <main className="flex flex-col justify-center items-center text-center gap-10 sm:gap-0 mt-64M">
      <h1 className="font-bold text-center text-2xl sm:text-4xl leading-xs-tight text-neutral-0 max-w-container-sm">
        Congrats, Alex! Your ticket is ready.
      </h1>

      <p className="text-lg sm:text-xl text-neutral-300 mt-16M mb-64M mb-64M min-w-container-200 w-[90vw] max-w-container-800">
        We've emailed your ticket to{' '}
        <span className="text-orange-500">sksksk2025@gmail.com</span> and will
        send updates in the run up to the event.
      </p>

      <Card />
    </main>
  );
};

export default Ticket;
