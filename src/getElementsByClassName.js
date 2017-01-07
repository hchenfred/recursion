// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var result = [];
  getElementsByClassNameHelper(document.body, result, className);
  return result;
};

var getElementsByClassNameHelper = function(element, result, className) {
  // base case
  if (element === undefined || element === null) {
  	return;
  }

  if (element.classList !== undefined && element.classList.contains(className)) {
    result.push(element);
  }
  
  // recursion
  var childNodes = element.childNodes;
  for (var i = 0; i < childNodes.length; i++) {
  	//console.log(childNodes[i]);
    getElementsByClassNameHelper(childNodes[i], result, className);
  }
}
