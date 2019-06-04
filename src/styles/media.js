import { css } from 'styled-components';

const sizes = {
  desktop: 1440,
  laptopL: 1200,
  laptop: 1024,
  tablet: 768,
  mobileL: 600,
  mobileM: 480,
  mobileS: 380,
  mobile: 330
}

const media = Object.keys(sizes).reduce((acc, cur) => {
  const size = sizes[cur] / 16;
  acc[cur] = (...args) => css`
    @media (max-width: ${size}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default media;
