// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = '';
  // base case
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (typeof obj === 'boolean' || typeof obj === 'number') {
    return obj.toString();
  }

  if (obj === undefined || obj === null || typeof obj === 'function') {
    return 'null';
  }

  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    }
    result = '[';
    for (var i = 0; i < obj.length - 1; i++) {
      result += stringifyJSON(obj[i]) + ',';
    }
    result += stringifyJSON(obj[obj.length - 1]);
    result += ']';
    return result;
  }

  // when input obj is an obj
  if (_.isEmpty(obj)) {
    return '{}';
  }
  result = '{';
  for (var key in obj) {
    if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
      result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
    }
  }
  if (result.charAt(result.length - 1) === ',') {
     result = result.substring(0, result.length - 1);
  }

  result += '}';
  return result;

};
