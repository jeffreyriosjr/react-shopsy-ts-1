import { Link } from 'react-router-dom';
import SingleCard from '../components/SingleCard';

const ProductPage = () => {

  return (
    <div id='product'>
      {/* Breadcrumb */}
      <div className='row my-3'>
        <div className='col'>
          <div className='page-breadcrumb'>
            <h4>
              <span>
                <Link to='/'>Home</Link>
              </span>
              {' > '}
              <span>
                <SingleCard />
              </span>
            </h4>
          </div>
        </div>
      </div>
      </div>

    
  );
};

export default ProductPage;
