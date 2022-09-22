import React from 'react';
import Lottie from 'lottie-react';

// Assets
import LoaderCircle from '../../../assets/animations/LoaderCircle.json';

const Loader = ({ loop = false, size = '3rem' }) => {
  return (
    <div>
      <Lottie
        animationData={LoaderCircle}
        loop={loop}
        style={{ width: size, height: size }}
      />
    </div>
  );
};

export default Loader;
