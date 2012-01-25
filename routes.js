var exports = module.exports;

exports.profile = function(req, res) {
	res.render('profile.jade', {
		locals : {
			  title : 'SODA - Proile'
			, description : 'Personal profile page.'
			//, flashMessage: req.flash()
			, author : 'Stanislav Venzerul'
		}
	});
}

exports.index = function(req, res) {
	res.render('index.jade', {
		locals : {
			  title : 'SODA Experiment'
			, description : 'Welcome to the SODA Experiment. We\'re here to stay.'
			, author : 'Stanislav Venzerul'
		}
	});
}

exports.search = function(req, res) {
	res.render('search.jade', {
		locals : {
			  title : 'SODA Experiment'
			, description : 'Welcome to the SODA Experiment. We\'re here to stay.'
			, author : 'Stanislav Venzerul'
		}
	});
}

exports.help = function(req, res) {
	res.render('help.jade', {
		locals : {
			  title : 'SODA Experiment'
			, description : 'Welcome to the SODA Experiment. We\'re here to stay.'
			, author : 'Stanislav Venzerul'
		}
	});
}

exports.signin = function(req, res) {
	var username = req.body.username;
	var password = req.body.password;
	
	req.flash('info', 'Logged in successfully');
	
	res.redirect('/profile');
}

exports.signup = function(req, res) {
	res.render('signup.jade', {
		locals : {
			  title : 'SODA Experiment'
			, description : 'Welcome to the SODA Experiment. We\'re here to stay.'
			, author : 'Stanislav Venzerul'
		}
	});
}


exports.HTTP500 = function(req, res){
    throw new Error('This is a 500 Error');
}

exports.HTTP404 = function(req, res){
    throw new exports.NotFound;
}

exports.NotFound = function(msg){
    this.name = 'NotFound';
    Error.call(this, msg);
    Error.captureStackTrace(this, arguments.callee);
}

//exports.NotFound = NotFound;
