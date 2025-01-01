import { useState } from 'react';
import Upload from './../images/icon-upload.svg';
import Info from './../images/icon-info.svg';
import InfoError from './../images/icon-info-error.svg';

const Form = () => {
  const [isHoveredImage, setIsHoveredImage] = useState(false);

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
        {/* SET BACKEND NEXT ERROR FOR NOT PUTTING VALID IMAGES */}
        <label
          onMouseOver={() => setIsHoveredImage(!isHoveredImage)}
          onMouseOut={() => setIsHoveredImage(!isHoveredImage)}
          className={`flex flex-col justify-center items-center input input-bordered h-144H
            gap-4     border-2 border-dashed border-neutral-500 cursor-pointer
            ${isHoveredImage && 'bg-neutral-700'}`}
        >
          <div
            className={`${
              isHoveredImage &&
              'p-8P bg-neutral-700 rounded-10BR border-2 border-neutral-500'
            }`}
          >
            <img src={Upload} alt="put an image" />
          </div>
          <p className={`${isHoveredImage && 'relative bottom-8I'}`}>
            Drag and drop or click to upload
          </p>
        </label>
        <p className="peer-invalid:hidden flex gap-2 text-xs text-neutral-300 mt-4M">
          <img src={Info} alt="info point for uploading" />
          Upload your photo (JPG or PNG, max size: 500KB).
        </p>
        <p className="peer-invalid:flex hidden gap-2 text-xs text-neutral-300 mt-4M">
          <img src={Info} alt="info point for uploading" />
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
        <input
          id="full_name"
          type="text"
          min={1}
          max={20}
          className="peer grow input input-bordered border-2 border-neutral-500 focus:invalid:border-orange-700 invalid:text-orange-700 cursor-pointer hover:bg-neutral-700"
          required
        />
      </div>

      {/* Email */}
      <div className="mt-32M relative flex flex-col gap-2 text-lg min-w-container-200 w-[90vw] max-w-container-500">
        <label
          htmlFor="email"
          className="absolute left-0 -top-32I text-neutral-0"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          min={1}
          max={20}
          className="peer grow input input-bordered border-2 border-neutral-500 focus:invalid:border-orange-700 invalid:text-orange-700 cursor-pointer hover:bg-neutral-700"
          placeholder="example@email.com"
          required
        />
        <div className="peer-invalid:flex hidden justify-start items-center gap-2 text-orange-700">
          <img src={InfoError} alt="info point for email" />
          <p>Please enter a valid email address</p>
        </div>
      </div>

      {/* Github Username */}
      <div className="mt-32M relative flex flex-col gap-2 text-lg min-w-container-200 w-[90vw] max-w-container-500">
        <label
          htmlFor="github"
          className="absolute left-0 -top-32I text-neutral-0"
        >
          GitHub Username
        </label>
        <input
          id="github"
          type="text"
          min={1}
          max={20}
          className="peer grow input input-bordered border-2 border-neutral-500 focus:invalid:border-orange-700 invalid:text-orange-700 cursor-pointer hover:bg-neutral-700"
          placeholder="@yourusername"
          required
        />
      </div>

      <button className="btn glass font-[800] text-neutral-900 text-lg min-w-container-200 w-[90vw] max-w-container-500 bg-orange-500 hover:bg-orange-700 rounded-10BR">
        Generate My Ticket
      </button>
    </form>
  );
};

export default Form;
