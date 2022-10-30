// import shoes1 from '../../assets/images/shoes1.avif'
// import shoes300 from '../../assets/images/shoes3001.png'
// import shoes2 from '../../assets/images/shoes2.avif'
// import shoes3 from '../../assets/images/shoes3.avif'

import { AiOutlineSearch } from 'react-icons/ai';
import Product from '../../components/common/Product';

// const products = [
//     {
//         id: 1,
//         name: 'Shoes',
//         img: shoes1,
//         img300: shoes300,
//         description: 'If a dog chews shoes whose shoes does he choose?'
//     },
//     {
//         id: 2,
//         name: 'Men Shoes',
//         img: shoes2,
//         description: 'If a dog chews shoes whose shoes does he choose?'
//     },
//     {
//         id: 3,
//         name: 'Ladis Shoes',
//         img: shoes3,
//         description: 'If a dog chews shoes whose shoes does he choose?'
//     },
//     {
//         id: 1,
//         name: 'Shoes',
//         img: shoes1,
//         description: 'If a dog chews shoes whose shoes does he choose?'
//     },
//     {
//         id: 2,
//         name: 'Men Shoes',
//         img: shoes2,
//         description: 'If a dog chews shoes whose shoes does he choose?'
//     },
//     {
//         id: 3,
//         name: 'Ladis Shoes',
//         img: shoes3,
//         description: 'If a dog chews shoes whose shoes does he choose?'
//     },
//     {
//         id: 3,
//         name: 'Ladis Shoes',
//         img: shoes3,
//         description: 'If a dog chews shoes whose shoes does he choose?'
//     },
//     {
//         id: 1,
//         name: 'Shoes',
//         img: shoes1,
//         description: 'If a dog chews shoes whose shoes does he choose?'
//     },
//     {
//         id: 2,
//         name: 'Men Shoes',
//         img: shoes2,
//         description: 'If a dog chews shoes whose shoes does he choose?'
//     },
//     {
//         id: 3,
//         name: 'Ladis Shoes',
//         img: shoes3,
//         description: 'If a dog chews shoes whose shoes does he choose?'
//     }
// ]

interface IProps {
  products: IProduct[] | null;
  isLoading: boolean;
}

const Products = ({ products }: IProps) => {
  return (
    <div className="bg-slate-200">
      <div className="container py-16">
        <div className=" p-6 mx-16">
          <div className="flex justify-between">
            <h3 className="text-2xl font-extrabold text-gray-900 sm:pr-12">
              Shoes Category
            </h3>
            <label className="relative block mx-16">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
                  <AiOutlineSearch />
                </svg>
              </span>
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Search for anything..."
                type="text"
                name="search"
              />
            </label>
          </div>
          <div className="grid md:grid-cols-6 gap-x-6">
            {products?.map((product: IProduct) => (
              <Product product={product} key={product._id}></Product>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
