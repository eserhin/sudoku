module.exports = function solveSudouku(matrix) {
	  var z = matrix[0].length;
    var x = matrix.length;
    var g = [];
    var u;
    for (var i = 0;i<x;i++){
      g.push([]);
      for (var j = i;j<z;j++){
        g[i].push(j); 
        u=i;
      }
      var c =0;
      while(g[u].length<z){
			  g[u].push(c); 
        c++;
      } 
    }
    return g;
}
