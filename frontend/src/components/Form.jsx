import { useState } from 'react';
import Upload from './../images/icon-upload.svg';
import Info from './../images/icon-info.svg';
import InfoError from './../images/icon-info-error.svg';

const Form = ({ setIsFormComplete }) => {
  // Styling Image Input
  const [isHoveredImage, setIsHoveredImage] = useState(false);

  // Putting Image Functionality States
  const [uploadedImage, setUploadedImage] = useState(null);
  const [error, setError] = useState('');

  // Image Upload Function
  const handleImageUpload = (e) => {
    const file = e.target.files ? e.target.files[0] : e.dataTransfer.files[0];

    if (file) {
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
      const maxSize = 500 * 1024; // 500 Bytes * 1024 = 500 KiloBytes

      if (!validTypes.includes(file.type)) {
        setError('Invalid file type. Please upload a JPG or PNG image');
        return;
      }

      if (file.size > maxSize) {
        setError('File size exceeds 500KB. Please upload a smaller image.');
        return;
      }

      setUploadedImage(URL.createObjectURL(file));
      setError('');
    }
  };

  // Remove Image when is inserted
  const handleRemoveImage = () => {
    setUploadedImage(null);
  };

  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!uploadedImage) {
      setError('Please upload an avatar before submitting the form.');
      return;
    }

    setIsFormComplete(true);
  };

  return (
    <form
      className="flex flex-col justify-center items-center gap-6 max-w-container-xs"
      onSubmit={handleSubmit}
    >
      {/* Image Input */}
      <div className="mt-4 relative flex flex-col gap-2 text-lg w-full max-w-container-500">
        <label htmlFor="upload_avatar" className="text-neutral-0">
          Upload Avatar
        </label>
        <div
          onMouseOver={() => setIsHoveredImage(!isHoveredImage)}
          onMouseOut={() => setIsHoveredImage(!isHoveredImage)}
          className={`flex flex-col justify-center items-center input input-bordered h-144 border-2 border-dashed h-144H
            ${error ? 'border-red-500' : 'border-neutral-500'}
          ${
            isHoveredImage && !uploadedImage && 'cursor-pointer bg-neutral-700'
          }`}
          onDrop={handleImageUpload}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => document.getElementById('file_input').click()}
        >
          {uploadedImage ? (
            <>
              <img
                src={uploadedImage}
                alt="Uploaded Avatar"
                className="w-64W h-64H object-cover rounded-20BR border-2 border-neutral-500"
              />
              <div className="mt-4 flex gap-4">
                <button
                  type="button"
                  className="text-sm px-2 underline bg-neutral-700 rounded"
                  onClick={handleRemoveImage}
                >
                  Remove image
                </button>
                <button
                  type="button"
                  className="text-sm px-2 bg-neutral-700 rounded"
                  onClick={() => document.getElementById('file_input').click()}
                >
                  Change image
                </button>
              </div>
            </>
          ) : (
            <>
              <div
                className={`${
                  isHoveredImage
                    ? 'p-8P bg-neutral-700 rounded-10BR border-2 border-neutral-500'
                    : 'mt-10M'
                }`}
              >
                <img src={Upload} alt="Upload Icon" />
              </div>
              <p
                className={`
                ${isHoveredImage ? 'mt-12M' : 'mt-32M'}
                `}
              >
                Drag and drop or click to upload
              </p>
            </>
          )}
        </div>
        <input
          id="file_input"
          type="file"
          accept="image/jpeg, image/jpg, image/png"
          className="hidden"
          onChange={handleImageUpload}
        />
        {error && (
          <p className="text-xs text-red-500 mt-2">
            <img src={InfoError} alt="Error Info" className="inline-block" />
            {error}
          </p>
        )}
        {!error && !uploadedImage && (
          <p className="text-xs text-neutral-300 mt-2">
            <img src={Info} alt="Info" className="inline-block" />
            Upload your photo (JPG or PNG, max size: 500KB).
          </p>
        )}
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

      <button
        type="submit"
        className="btn glass font-[800] text-neutral-900 text-lg min-w-container-200 w-[90vw] max-w-container-500 bg-orange-500 hover:bg-orange-700 rounded-10BR"
      >
        Generate My Ticket
      </button>
    </form>
  );
};

export default Form;
