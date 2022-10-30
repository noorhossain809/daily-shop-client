import qrScreen from '../../assets/images/RvD5XHwVYap7YXHVjsfKZsgxGVLHQ1CW1R0fLsqY.png';
import ApplePlayStore from '../../svg/ApplePlayStore';
import GooglePlayStore from '../../svg/GooglePlayStore';
import logo from '../../assets/images/logo_200x200-removebg-preview.png';

const Footer = () => {
  return (
    <div className="bg-[#111723]">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-4 text-white p-4">
          <div className="">
            <img className="h-32" src={logo} alt="" />
          </div>
          <div>
            <h2 className="mb-2 text-xl  border-b w-[85px] py-1 border-b-[#eb5525] border-b-2">
              Company
            </h2>
            <div>
              <p className="text-[#6c757d] cursor-pointer hover:text-white">
                Seller Registration
              </p>
              <p className="text-[#6c757d] cursor-pointer hover:text-white">
                Order Track
              </p>
            </div>
            <p className="mb-2 text-xl border-b w-[50px] py-1 border-b-[#eb5525] border-b-2">
              Legal
            </p>
            <p className="text-[#6c757d] cursor-pointer hover:text-white text-base">
              {' '}
              Privacy & Policy
            </p>
            <p className="text-[#6c757d] cursor-pointer hover:text-white">
              Terms & Conditions
            </p>
            <p className="text-[#6c757d] cursor-pointer hover:text-white">
              Return & Refunds Policy
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-xl border-b w-36 py-1 border-b-[#eb5525] border-b-2">
              Customer Care
            </h2>
            <p className="text-[#6c757d] cursor-pointer hover:text-white">
              Return & Refunds
            </p>
            <p className="text-[#6c757d] cursor-pointer hover:text-white">
              Terms & Conditions
            </p>
            <p className="text-[#6c757d] cursor-pointer hover:text-white">
              Call Us: 01967-227733, 01958-182833
            </p>
            <p className="text-[#6c757d] cursor-pointer hover:text-white">
              Email Us: cs@monarchmart.com
            </p>
          </div>
          <div className="bg-[#6c757d] p-4 rounded-lg">
            <h3 className="text-2xl font-semibold leading-relaxed text-[#eb5525]">
              Download Android App
            </h3>
            <div className="flex">
              <div className="bg-white rounded-lg">
                <img className="p-2" src={qrScreen} alt="" />
              </div>
              <div className="p-2 ">
                <GooglePlayStore></GooglePlayStore>
                <ApplePlayStore></ApplePlayStore>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
