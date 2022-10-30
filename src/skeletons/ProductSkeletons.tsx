import React from 'react';
import ContentLoader from 'react-content-loader';

const ProductSkeletons = (props: any) => {
  return (
    <div className="grid grid-cols-6 gap-x-6">
      {Array(12)
        .fill('')
        .map((store, index) => (
          <div key={index}>
            <ContentLoader viewBox="0 0 300" height={400} {...props}>
              <rect x="30" y="20" rx="" ry="" width="200" height="220" />
              <rect x="30" y="250" rx="0" ry="0" width="200" height="18" />
              <rect x="30" y="275" rx="0" ry="0" width="180" height="18" />
              <rect x="30" y="300" rx="0" ry="0" width="120" height="20" />
             
            </ContentLoader>
          </div>
        ))}
    </div>
  );
};
ProductSkeletons.metadata = {
  name: 'Akash Bambhaniya',
  github: 'Akashnb', // Github username
  description: 'Youtube',
  filename: 'Youtube' // filename of your loader
};
export default ProductSkeletons;
