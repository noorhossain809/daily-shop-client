import axios from 'axios';
import React, { useState } from 'react';

const UploadedImage = () => {
  const [imageSelected, setImageSelected] = useState('');

  const handleFileInputChange = (e: any) => {
    const file = e.target.files[0];
    setImageSelected(file);
  };

  const handleImageSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', imageSelected);
    formData.append('upload_preset', 'flri9ujh');

    axios
      .post('https://api.cloudinary.com/v1_1/dmwv7v4so/image/upload', formData)
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <div className="container mx-28 my-16">
      <div className="card w-96 bg-base-100 shadow-xl">
        <form onSubmit={handleImageSubmit}>
          <div className="flex items-center space-x-6 p-3">
            <div className="shrink-0">
              <img
                className="h-16 w-16 object-cover rounded-full"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                alt="Current profile photo"
              />
            </div>
            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input
                type="file"
                onChange={handleFileInputChange}
                className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
              />
            </label>
          </div>
          <button className="btn btn-active btn-secondary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadedImage;
