import Slider from '../custom/Slider';

const Banner = () => {
  return (
    <div className="">
      <div className="grid md:grid-cols-4 md:mx-28 gap-4">
        <div className="bg-white p-2 cursor-pointer sm:hidden md:block">
          <h2>Category Items</h2>
          <h4 className="hover:underline">Electronic Devices</h4>
          <h4 className="hover:underline">Electronic Accessories</h4>
          <h4 className="hover:underline">TV & Home Appliances</h4>
          <h4 className="hover:underline">Health & Beauty</h4>
          <h4 className="hover:underline">Babies & Toys</h4>
          <h4 className="hover:underline">Groceries & Pets</h4>
          <h4 className="hover:underline">Home & Lifestyle</h4>
          <h4 className="hover:underline">Women's Fashion</h4>
          <h4 className="hover:underline">Men's Fashion</h4>
          <h4 className="hover:underline">Watches & Accessories</h4>
          <h4 className="hover:underline"> Sports & Outdoor</h4>
          <h4 className="hover:underline">Automotive & Motorbike</h4>
        </div>
        <div className="md:col-span-3">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Banner;
