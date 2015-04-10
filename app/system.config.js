// Configure module loader
System.config({
	baseURL: '/',

	// Set paths for third-party libraries as modules
	paths: {
		'jquery': 'bower_components/jquery/dist/jquery.js',
		'angular': 'bower_components/angular/angular.js'
  },

  meta: {
    'jquery': {format: 'global', exports: 'jQuery'},
    'angular': {format: 'global', exports: 'angular', deps: ['jquery']}
  }
});

