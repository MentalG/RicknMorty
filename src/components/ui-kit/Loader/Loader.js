import React from 'react';

const Loader = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      display='block'
      preserveAspectRatio='xMidYMid'
      viewBox='0 0 100 100'
      width={128}
      height={128}
    >
      <defs />
      <path fill='#1d3f72' d='M19 19h20v20H19z'>
        <animate
          attributeName='fill'
          begin='0s'
          calcMode='discrete'
          dur='0.641025641025641s'
          keyTimes='0;0.125;1'
          repeatCount='indefinite'
          values='#5699d2;#1d3f72;#1d3f72'
        />
      </path>
      <path fill='#1d3f72' d='M40 19h20v20H40z'>
        <animate
          attributeName='fill'
          begin='0.08012820512820512s'
          calcMode='discrete'
          dur='0.641025641025641s'
          keyTimes='0;0.125;1'
          repeatCount='indefinite'
          values='#5699d2;#1d3f72;#1d3f72'
        />
      </path>
      <path fill='#1d3f72' d='M61 19h20v20H61z'>
        <animate
          attributeName='fill'
          begin='0.16025641025641024s'
          calcMode='discrete'
          dur='0.641025641025641s'
          keyTimes='0;0.125;1'
          repeatCount='indefinite'
          values='#5699d2;#1d3f72;#1d3f72'
        />
      </path>
      <path fill='#1d3f72' d='M19 40h20v20H19z'>
        <animate
          attributeName='fill'
          begin='0.5608974358974359s'
          calcMode='discrete'
          dur='0.641025641025641s'
          keyTimes='0;0.125;1'
          repeatCount='indefinite'
          values='#5699d2;#1d3f72;#1d3f72'
        />
      </path>
      <path fill='#1d3f72' d='M61 40h20v20H61z'>
        <animate
          attributeName='fill'
          begin='0.24038461538461536s'
          calcMode='discrete'
          dur='0.641025641025641s'
          keyTimes='0;0.125;1'
          repeatCount='indefinite'
          values='#5699d2;#1d3f72;#1d3f72'
        />
      </path>
      <path fill='#1d3f72' d='M19 61h20v20H19z'>
        <animate
          attributeName='fill'
          begin='0.4807692307692307s'
          calcMode='discrete'
          dur='0.641025641025641s'
          keyTimes='0;0.125;1'
          repeatCount='indefinite'
          values='#5699d2;#1d3f72;#1d3f72'
        />
      </path>
      <path fill='#1d3f72' d='M40 61h20v20H40z'>
        <animate
          attributeName='fill'
          begin='0.4006410256410256s'
          calcMode='discrete'
          dur='0.641025641025641s'
          keyTimes='0;0.125;1'
          repeatCount='indefinite'
          values='#5699d2;#1d3f72;#1d3f72'
        />
      </path>
      <path fill='#1d3f72' d='M61 61h20v20H61z'>
        <animate
          attributeName='fill'
          begin='0.3205128205128205s'
          calcMode='discrete'
          dur='0.641025641025641s'
          keyTimes='0;0.125;1'
          repeatCount='indefinite'
          values='#5699d2;#1d3f72;#1d3f72'
        />
      </path>
    </svg>
  );
};

export default Loader;
