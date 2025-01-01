import Upload from './../images/icon-upload.svg';
import Info from './../images/icon-info.svg';

const Form = () => {
  return (
    <form className="flex flex-col justify-center items-center gap-6 max-w-container-xs">
      {/* Image Input */}
      <div className="mt-32M relative flex flex-col gap-2 text-lg min-w-container-200 w-[90vw] max-w-container-500">
        <label
          htmlFor="upload_avatar"
          className="absolute left-0 -top-32I text-neutral-0"
        >
          Upload Avatar
        </label>
        <label
          className="flex flex-col justify-center items-center input input-bordered flex items-center gap-2 h-144H
                 border-2 border-dashed border-neutral-500 py-16P"
        >
          <img src={Upload} alt="put an image" />
          <input
            id="upload_avatar"
            placeholder="Drag and drop or click to upload"
            type=""
            min={1}
            max={20}
            className="grow w-[260px]"
            required
          />
        </label>
        <p className="flex gap-2 text-xs text-neutral-300 mt-4M">
          <img src={Info} alt="info point" />
          Upload your photo (JPG or PNG, max size: 500KB).
        </p>
      </div>

      {/* Full Name */}
      <div className="mt-32M relative flex flex-col gap-2 text-lg min-w-container-200 w-[90vw] max-w-container-500">
        <label
          htmlFor="full_name"
          className="absolute left-0 -top-32I text-neutral-0"
        >
          Full Name
        </label>
        <label
          className="input input-bordered flex items-center gap-2
        border-2 border-solid border-neutral-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            id="full_name"
            type="text"
            min={1}
            max={20}
            className="grow"
            required
          />
        </label>
      </div>

      {/* Email */}
      <div className="mt-32M relative flex flex-col gap-2 text-lg min-w-container-200 w-[90vw] max-w-container-500">
        <label
          htmlFor="email"
          className="absolute left-0 -top-32I text-neutral-0"
        >
          Email Address
        </label>
        <label
          className="input input-bordered flex items-center gap-2
        border-2 border-solid border-neutral-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            id="email"
            type="email"
            min={1}
            max={20}
            className="grow"
            placeholder="example@email.com"
            required
          />
        </label>
      </div>

      {/* Github Username */}
      <div className="mt-32M relative flex flex-col gap-2 text-lg min-w-container-200 w-[90vw] max-w-container-500">
        <label
          htmlFor="github"
          className="absolute left-0 -top-32I text-neutral-0"
        >
          GitHub Username
        </label>
        <label
          className="input input-bordered flex items-center gap-2
        border-2 border-solid border-neutral-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.1 0 0 .67-.21 2.2.82a7.54 7.54 0 0 1 4.01 0c1.53-1.03 2.2-.82 2.2-.82.44 1.09.16 1.9.08 2.1.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.001 8.001 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          <input
            id="github"
            type="text"
            min={1}
            max={20}
            className="grow h-48H"
            placeholder="@yourusername"
            required
          />
        </label>
      </div>

      <button className="btn glass font-[800] text-neutral-900 text-lg min-w-container-200 w-[90vw] max-w-container-500 bg-orange-500 hover:bg-orange-700 rounded-10BR">
        Generate My Ticket
      </button>
    </form>
  );
};

export default Form;
