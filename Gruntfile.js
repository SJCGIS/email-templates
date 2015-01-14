module.exports = function(grunt) {

    grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	mustache_render: {
	    options: {
		data: 'config.json'
	    },
	    responsive: {
		options: {
		    directory: "src/responsive-templates/partials"
		},
		files: [
		    {
			expand: true,
			cwd: 'src',
			src: 'responsive-templates/*.mustache',
			dest: 'build',
			ext: '.html'
		    }
		]
	    }
	}
    });
    grunt.loadNpmTasks('grunt-mustache-render');

    grunt.registerTask('default', ['mustache_render']);
};


