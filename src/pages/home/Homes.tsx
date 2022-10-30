import Products from '../../components/home/Products';
import Banner from '../../components/home/Banner';
import ProductService from 'services/ProductService';
import useAsync from 'hooks/useAsync';
import Stores from 'components/home/Stores';
// import UploadedImage from '../../forms/UploadedImage';


const Homes = () => {

 const {data, isLoading} = useAsync(ProductService.getProducts)
 console.log('data', data);
  return (
    <div>
      <Banner />
      <Products products={data} isLoading={isLoading} />
      <Stores />
      {/* <UploadedImage /> */}
    </div>
  );
};

export default Homes;
