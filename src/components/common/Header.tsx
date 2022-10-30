import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

import { Search } from 'heroicons-react';
import { FiShoppingCart, FiShoppingBag } from 'react-icons/fi';
import { BiUser, BiLogOut } from 'react-icons/bi';
// import { MdOutlineClose } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
// import { IoMdNotificationsOutline } from 'react-icons/io';
import TopHeader from './TopHeader';
// import { useSelector } from 'react-redux';
// import { AppState } from 'redux/store';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'redux/store';
import { logout } from 'redux/actionCreators/authActionCreators';
// import { ThemeContext } from './themeContext';


const solutions = [
  {
    name: 'Analytics',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
  },
  {
    name: 'Security',
    description: "Your customers' data will be safe and secure.",
    href: '#',
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
  },
  {
    name: 'Automations',
    description:
      'Build strategic funnels that will drive your customers to convert',
    href: '#',
  },
];

const resources = [
  {
    name: 'Help Center',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
  },
  {
    name: 'Guides',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
  },
  {
    name: 'Events',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#',
  },
  {
    name: 'Security',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
  },
];

const Header = () => {
  const dispatch = useDispatch()
  // const cart : IProduct[] = useSelector((state : AppState) => state.cart)
  const {data} = useSelector((state : AppState) => state.auth)

  // const {theme, setTheme } = useContext(ThemeContext)

  return (
    <div>
      <TopHeader></TopHeader>
      <div className="">
        <Popover className="relative bg-white fixed">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center  border-gray-100 py-3 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1 gap-2">
                <GiHamburgerMenu className="w-6 h-6 cursor-pointer md:hidden" />
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <h3 className="text-xl font-medium">Categories</h3>
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <label className="btn btn-circle swap swap-rotate">
                    <svg
                      className="swap-off fill-current h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                    </svg>
                  </label>
                  {/* <GiHamburgerMenu className="h-6 w-6" aria-hidden="true" /> */}
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <div className="flex gap-4">
                  <div className="mt-1 relative rounded-md shadow-sm w-full ">
                    <input
                      type="search"
                      name="search"
                      id="search"
                      className="focus:ring-0 focus:border-orange-500 block w-[35rem] sm:text-sm border-0 rounded-md bg-slate-200 p-3"
                      placeholder="Search in daily bazar"
                    />
                    <div className="absolute inset-y-0 right-0 pl-4 flex items-center bg-red-500 hover:bg-red-700 cursor-pointer">
                      <Search className="mr-2 text-white " />
                    </div>
                  </div>
                  <FiShoppingCart className="w-8 h-8 mt-4" />
                </div>
              </Popover.Group>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 gap-8 cursor-pointer">
                
                <div className="shadow-md p-4 rounded-full hover:shadow-lg">
                  <Link to="/checkout">
                  <FiShoppingBag />
                  
                  </Link>
                </div>
                <div className="shadow-md p-4 rounded-full hover:shadow-lg">
                  {/* <IoMdNotificationsOutline /> */}

                  <label className="swap swap-rotate">
                    <input type="checkbox"  />
                    <svg className="swap-off fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                    <svg className="swap-on fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                    
                  </label>

                </div>
              <Link to="/dashboard">
              <div className="shadow-md p-4 rounded-full hover:shadow-lg">
                  <BiUser />
                </div>
              </Link>
                {data ? <div className="shadow-md p-4 rounded-full hover:shadow-lg">
                 
                 <BiLogOut className="" onClick={() => dispatch(logout())} />
                
                </div>:
                <div className="shadow-md p-4 rounded-full hover:shadow-lg">
                 <Link to="/login">
                 <BiUser className="" />
                 </Link>
                </div>}
              </div>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <label className="btn btn-circle">
                          <svg
                            className="swap-on fill-current h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                          </svg>
                        </label>
                        {/* <MdOutlineClose className="h-6 w-6" aria-hidden="true" /> */}
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          {/* <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" /> */}
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Pricing
                    </a>

                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Docs
                    </a>
                    {resources.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div>
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Sign up
                    </a>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Existing customer?{' '}
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-500"
                      >
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  );
};

export default Header;
