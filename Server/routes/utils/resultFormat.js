// API response format
function returnError(error = "server internal error", code = 500) {
  return {
    code,
    msg: error,
  };
}

function returnData(result) {
  return {
    code: 200,
    msg: 'success',
    data: result
  }
}

module.exports = {
  returnError,
  returnData
}