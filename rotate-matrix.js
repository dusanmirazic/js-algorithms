/**
 * Rotate matrix by 90 degrees
 * @param {number[][]} image
 * @return {number[][]} reversed image
 */
var rotate = function(image) {
  image = image.reverse();
  
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < i; j++) {
      let temp = image[i][j];
      image[i][j] = image[j][i];
      image[j][i] = temp;
    }
  }
  
  return image;
};
