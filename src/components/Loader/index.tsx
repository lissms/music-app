import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => (
  <ThreeDots
    height="80"
    width="80"
    radius="9"
    color="#22223D"
    ariaLabel="three-dots-loading"
    wrapperStyle={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    }}
    visible={true}
  />
);
