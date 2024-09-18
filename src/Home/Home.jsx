import LeftSidebar from './Sidebar/LeftSidebar';
import ImageSlider from './Slider/ImageSlider';
import CategorySwiper from './Category/CategorySwiper';
import ProductSlider from './Slider/ProductSlider';
import BestSaleProduct from './Slider/BestSaleProduct';
import LimitedProduct from './Section/LimitedProduct';
import ExploreProducts from './Slider/ExploreProducts';
import ShopSection from './Section/ShopSection';
import ServiceSection from './Section/ServiceSection';

const Home = () => {
  return (
    <>
      <div className='grid grid-flow-row grid-cols-2 md:grid-cols-12 mt-0 mx-16'>
        <div className='col-span-2 order-2 md:border-r-2 border-[#B3B3B3] pt-12'>
          <LeftSidebar/>
        </div>
        <div className='col-span-10 md:order-2 pt-4 ms-0 md:ms-12'>
          <ImageSlider/>
        </div>
      </div>
      <ProductSlider/>
      <CategorySwiper/>
      <BestSaleProduct/>
      <LimitedProduct/>
      <ExploreProducts/>
      <ShopSection/>
      <ServiceSection/>
    </>
  );
};

export default Home;
