module.exports = function(req, res, next) {
	res.statusCode = 202;
	
	console.log('EXAMPLING');

	next();
}

