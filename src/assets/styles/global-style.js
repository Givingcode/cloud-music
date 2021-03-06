const extendClick = () => `
    position: relative;
    &:before{
      content: '';
      position: absolute;
      top: -10px;
      bottom: -10px;
      left: -10px;
      right: -10px;
    };
  `;
export const noWrap = () => `
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `;

export default {
  'theme-color': '#ff2d21',
  'theme-color-shadow': 'rgba(212, 68, 57, .5)',
  'font-color-light': 'rgb(144, 144, 144)',
  'font-color-desc': '#2E3030',
  'font-color-desc-v2': '#bba8a8',
  'font-size-ss': '10px',
  'font-size-s': '12px',
  'font-size-m': '14px',
  'font-size-l': '16px',
  'font-size-ll': '18px',
  'border-color': '#e4e4e4',
  'background-color': 'rgb(249, 249, 249)',
  'background-color-shadow': 'rgba(0, 0, 0, 0.3)',
  'highlight-background-color': '#fff',
  extendClick,
  noWrap
};
