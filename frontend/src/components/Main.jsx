import Form from './Form';

const Main = () => {
  return (
    <main className="flex flex-col justify-center items-center text-center mt-64M">
      <h1 className="font-bold text-2xl sm:text-4xl leading-xs-tight text-neutral-0 max-w-container-sm">
        Your Journey to Coding Conf 2025 Starts Here!
      </h1>

      <p className="text-lg sm:text-xl text-neutral-300 mt-16M mb-32M">
        Secure your spot at next year's biggest coding conference.
      </p>

      <Form />
    </main>
  );
};

export default Main;
