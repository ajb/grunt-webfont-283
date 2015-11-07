module.exports = function(grunt){
  grunt.initConfig({
    webfont: {
      icons: {
        src: 'icons/*.svg',
        dest: 'dist',
        options: {
          hashes: false,
          codepointsFile: 'codepoints.json'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');
}
