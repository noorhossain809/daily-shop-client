import React from 'react';
import { useParams } from 'react-router-dom';
import shoes from 'assets/images/shoes1.avif';

const StoreView = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <div className="container mx-auto my-6">
        <div className="bg-white mx-28">
          <div className="grid grid-cols-3 gap-x-6 p-4">
            <div className="">
              <img src={shoes} alt="" className="object-center object-cover" />
            </div>
            <div className="col-span-2 ">
              <div className="border-b">
                <h4>Lenovo L01 Portable Bluetooth Waterproof Speaker</h4>
                <p>Brand : LenovoMore Audio from Lenovo</p>
              </div>
              <p className="text-red-500 font-normal text-3xl">
                <span className="text-4xl">৳ </span> 520
              </p>
              <p className="">
                <span className="line-through text-gray-500">
                  <span className="text-2xl">৳</span> 700
                </span>{' '}
                <span className="text-gray-900">-57%</span>
              </p>
              <p>Promotions 50% Get up to ৳ 50 off</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreView;
