import React from 'react';
import { Link } from 'react-router-dom';


const Store = ({store}: any) => {
    const {img, description, id} = store;
    return (
        <div className="my-4">
     <Link to={`store/${id}`}>
     <div className="card bg-base-100 w-56 cursor-pointer hover:shadow-2xl rounded-none">
        <div className="">
          <figure>
            <img className="h-52" src={img} alt="Shoes" />

        
          </figure>
        </div>

        <div className="p-2 ">
          {/* <h2 class="card-title">
                        {name}!
                        <div class="badge badge-secondary">NEW</div>
                    </h2> */}
          <p className="">{description}</p>
          <div className="flex justify-between">
            <p className="text-red-500 font-medium text-xl">
              <span className="text-3xl">৳</span> 520
            </p>
            <p className="">
              <span className="line-through text-gray-500">
                <span className="text-2xl">৳</span> 700
              </span>{' '}
              <span className="text-gray-900">-57%</span>
            </p>
          </div>
          <button
              className=" btn btn-outline text-red-500 hover:bg-red-700 hover:border-red-700 btn-sm rounded-none my-2"
             
            >
              Add to Cart
            </button>
        </div>
      </div>
     </Link>

    </div>
    );
};

export default Store;