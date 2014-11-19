var convert = function(f) {
	var math = Math.round((f - 32) * (5/9));
	console.log(f + "F" + " " + "is" + " " + math + "C");
};
convert(115);

var convert2 = function(c) {
	var math2 = Math.round(c * (9/5) + 32); 
console.log(c + "C" + " " + "is" + " " + math2 + "F")
};
convert2(37);

