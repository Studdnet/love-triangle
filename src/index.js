/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var a;
  var b;
  var r;
  var count = 0; 
  
  for (var i = 0; i<preferences.length; i++) {
     
    a = preferences[i];
    b = preferences[a-1];
    r = preferences[b-1]; 
        
        if ((a != b) && (b != r) && ((r-1) == i)) {
         count++;
        } 
  }
  return (count/3); 
};
