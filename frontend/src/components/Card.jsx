import Circles from './../images/logo-mark.svg';
// import Jonatan from './../images/image-avatar.jpg';
import Github from './../images/icon-github.svg';

const Card = ({ userInfo }) => {
  return (
    <section
      className="flex justify-between items-center relative transform -rotate-90 sm:rotate-0 my-96M sm:my-0"
      style={{
        background:
          'linear-gradient(to left, hsl(7, 86%, 67%), hsl(0, 0%, 100%))',
        padding: '0.1rem',
        borderRadius: '1rem', // Optional, for rounded borders
      }}
    >
      <div className="flex justify-between items-center gap-4 bg-neutral-900 min-w-container-500 w-[100vw] max-w-container-600 h-[17.5rem] p-16P rounded-[1rem]">
        <div className="flex flex-col justify-between items-start">
          <div className="flex justify-start items-start gap-4">
            <img src={Circles} className="mt-3" alt="Coding Conf Circles" />
            <div className="flex flex-col justify-start items-start">
              <h2 className="font-bold text-neutral-0 text-2xl mb-1">
                Coding Conf
              </h2>
              <p>Jan 31, 2025 / Austin, TX</p>
            </div>
          </div>

          <div className="flex justify-start items-center gap-4">
            <img
              src={userInfo.image}
              className="w-48W w-[100vw] max-w-container-100 mt-3 rounded-10BR"
              alt={`${userInfo.fullName}'s Avatar`}
            />
            <div className="flex flex-col justify-start items-start">
              <h2 className="text-neutral-0 text-2xl mb-1">
                {userInfo.fullName}
              </h2>
              <p className="flex gap-2">
                <img src={Github} alt="Github" />
                {userInfo.github}
              </p>
            </div>
          </div>
        </div>

        {/* Number of Ticket */}
        <div className="relative bg-neutral-900">
          <div className="z-0 border-l-2 border-dashed bg-neutral-900 w-16 h-[17.5rem]"></div>

          <p className="absolute top-[40%] left-[20%] transform rotate-90 text-neutral-500 text-xl z-50">
            #{Math.ceil(Math.random() * 100000)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Card;
