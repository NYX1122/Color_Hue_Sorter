import chroma from 'chroma-js';

import colorDisplayer from 'color_displayer';

export default function app(colors) {
  const sortedColors = colors
    .map((color) => ({
      color,
      hcl: chroma(color).hcl(),
    }))
    .sort((a, b) => a.hcl[0] - b.hcl[0])
    .map((sortedColor) => chroma(sortedColor.color).hex());

  console.log('Sorted colors:');
  colorDisplayer(sortedColors);
  return sortedColors;
}
