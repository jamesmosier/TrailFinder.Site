#TrailFinder.Site

# Quick Start (after initial setup)

Typical development follows this... 

`grunt dev` when in root folder & once ready to emulate, run `cordova run ios`


Other important notes for emulation:

cd to app & run: `cordova prepare` then `cordova emulate ios`

<hr>

Original: https://github.com/calvinl/ng-phonegap

This will add relevant files into your `app/` directory:

    .cordova/
    merges/
    platforms/
    plugins/
    www/

Next, navigate to your app directory and run the following command:

    cd app/

    cordova platform add <platform_name>

In our case, we want to build an iOS app, so run:

    cordova platform add ios

This will add iOS-specific files into your `app/platforms` directory
so you can start building your app and running it in simulator.

Next, run:

    cordova prepare

Cordova will build and compile your application.

To make sure things are working, fire off the following command:

    cordova emulate ios

This will fire up your iOS Simulator and display a Cordova logo.

### Installing Dev Dependencies

After you've created your Cordova project, navigate back to the root
directory and run the following commands:

    npm install
    bower install

### Get Started

Start the main grunt task:

    grunt dev

This will build the initial development files, start up a web server,
and run `watch` on our files so they can can be compiled on the fly as
they are changed. Browser opens automatically and navigates to `http://localhost:9001/`

Developing in a Webkit-based browser is best. When you're ready to test
your app in the simulator or on a device, either fire off:

    cordova run ios

Or open up XCode and build the project from there.

You should see "It's working!". You can now start developing your
app!

### Start Building

As mentioned above, use the following command to start the dev process:

    grunt dev

This is essentially like running the following commands consecutively:

    grunt build:development // builds initial files
    grunt connect           // starts up a local server
    grunt watch             // watches your src files for changes

When you change any file in the `src/` directory, grunt will notice and
recompile the proper files and place them into the `www/` directory. The
`www` directory is then later used by cordova to prepare the
application to be copied over to the device (or simulator).

`grunt watch` will only watch for files you change and only build out
related files. For example, if you change a .less file, grunt will only
rebuild all LESS files and copy them over to `www/`. If you want to
rebuild the entire project, use the following commands:

    grunt build:development

or

    grunt build:production

The latter will use UglifyJS to minify your files, setting them up for
production. It will also use the the file in
`src/js/config/environments/production.js`. This is useful for setting
up things like API routes and/or public keys that differ
per-environment.

### Directory Structure

The `src/` directory is your main AngularJS project folder. It consists
of several directories and initial files of interest:

    src/
      |- css/                   <-- For all LESS files.
      | |- common/              <-- Project-wide CSS rules.
      | | |- base.less          <-- Main css file.
      | |- config/              <-- LESS config files, e.g. vars, mixins.
      | | |- colors.less        <-- Example config file with color vars.
      |- html/
      | |- layouts/
      | | |- application.tmpl   <-- Main application layout.
      | |- partials/            <-- All view files loaded
      | | |- home/
      | | | |- index.html       <-- Example view file.
      |- img/                   <-- Images go here.
      |- js/
      | |- config/              <-- Config root. Run methods, route, sanitization, etc.
      | | |- environments/
      | | | |- development.js   <-- Development environment global vars.
      | | | |- production.js    <-- Production environment global vars.
      | | |- router.js          <-- Router.
      | | |- sanitizer.js       <-- $compileProvider for link sanitation.
      | |- controllers/         <-- All Angular controllers
      | | |- home_controller.js <-- Example controller
      | |- directives/          <-- All directives
      | |- filters/             <-- All filters
      | |- modules              <-- All modules
      | |- services/            <-- All services
      | |- app.js               <-- Main Angular initialization file.
      | |- pg.js                <-- PhoneGap initialization class.


## Some Conventions to Keep in Mind

There are certain conventions to keep in mind. When creating a
controller, use the following syntax:

    angular.module(_CONTROLLERS_).controller('HomeController', function($scope) {

    });

The `_CONTROLLERS_` variable is defined in `src/js/app.js`, where it
takes the base application name and concatenates it with controllers.
This way you won't need to keep adding module names into your initial
top-level app module (in `src/js/app.js`).

Do the same for `_DIRECTIVES_`, `_SERVICES_`, and so on.

