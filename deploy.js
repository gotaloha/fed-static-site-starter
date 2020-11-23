var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();
var path = require('path');

var config = {
  user: '', // Your FTP username
  password: '', // Optional: you will be prompted if not set
  host: '', // FTP Host
  port: 21, // FTP Port
  localRoot: path.join(__dirname, '/dist/'), // Where all of your site's files are located
  remoteRoot: '', // Optional: Enter a path to the root of your server
  include: ['*', '**/*'], // This uploads everything except dot files
  // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
  exclude: ['node_modules/**', 'node_modules/**/.*', '.git/**'], // Excludes Node Modules and Git files
  // delete ALL existing files at destination before uploading, if true
  deleteRemote: false, // If set to true, ALL existing files on the server will be deleted before upload
  forcePasv: true
};

// Use with promises
ftpDeploy
  .deploy(config)
  .then(res => console.log('finished:', res))
  .catch(err => console.log(err));

// Use with callback
ftpDeploy.deploy(config, function (err, res) {
  if (err) console.log(err);
  else console.log('finished:', res);
});
