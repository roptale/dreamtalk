// twilio-video@2.28.1 downloaded from https://ga.jspm.io/npm:twilio-video@2.28.1/es5/index.js

import*as e from"events";import*as t from"ws";var r={};r=function(e){var t=e.location,r=e.URL;if([t,r].some((function(e){return!e})))return function dynamicImportNotSupported(e){return Promise.reject(new Error("Failed to import: "+e+": dynamicImport is not supported"))};e.__twilioVideoImportedModules={};return function dynamicImport(n){return n in e.__twilioVideoImportedModules?Promise.resolve(e.__twilioVideoImportedModules[n]):new Function("scope","return import('"+new r(n,t)+"').then(m => scope.__twilioVideoImportedModules['"+n+"'] = m);")(e)}}(globalThis);var n=r;var i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var a={};var noop=function(){};var o="undefined";var c=typeof window!==o&&typeof window.navigator!==o&&/Trident\/|MSIE /.test(window.navigator.userAgent);var s=["trace","debug","info","warn","error"];function bindMethod(e,t){var r=e[t];if("function"===typeof r.bind)return r.bind(e);try{return Function.prototype.bind.call(r,e)}catch(t){return function(){return Function.prototype.apply.apply(r,[e,arguments])}}}function traceForIE(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments]));console.trace&&console.trace()}function realMethod(e){"debug"===e&&(e="log");return typeof console!==o&&("trace"===e&&c?traceForIE:void 0!==console[e]?bindMethod(console,e):void 0!==console.log?bindMethod(console,"log"):noop)}function replaceLoggingMethods(e,t){for(var r=0;r<s.length;r++){var n=s[r];(this||i)[n]=r<e?noop:this.methodFactory(n,e,t)}(this||i).log=(this||i).debug}function enableLoggingWhenConsoleArrives(e,t,r){return function(){if(typeof console!==o){replaceLoggingMethods.call(this||i,t,r);(this||i)[e].apply(this||i,arguments)}}}function defaultMethodFactory(e,t,r){return realMethod(e)||enableLoggingWhenConsoleArrives.apply(this||i,arguments)}function Logger$1(e,t,r){var n=this||i;var a;var c="loglevel";"string"===typeof e?c+=":"+e:"symbol"===typeof e&&(c=void 0);function persistLevelIfPossible(e){var t=(s[e]||"silent").toUpperCase();if(typeof window!==o&&c){try{window.localStorage[c]=t;return}catch(e){}try{window.document.cookie=encodeURIComponent(c)+"="+t+";"}catch(e){}}}function getPersistedLevel(){var e;if(typeof window!==o&&c){try{e=window.localStorage[c]}catch(e){}if(typeof e===o)try{var t=window.document.cookie;var r=t.indexOf(encodeURIComponent(c)+"=");-1!==r&&(e=/^([^;]+)/.exec(t.slice(r))[1])}catch(e){}void 0===n.levels[e]&&(e=void 0);return e}}n.name=e;n.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5};n.methodFactory=r||defaultMethodFactory;n.getLevel=function(){return a};n.setLevel=function(t,r){"string"===typeof t&&void 0!==n.levels[t.toUpperCase()]&&(t=n.levels[t.toUpperCase()]);if(!("number"===typeof t&&t>=0&&t<=n.levels.SILENT))throw"log.setLevel() called with invalid level: "+t;a=t;false!==r&&persistLevelIfPossible(t);replaceLoggingMethods.call(n,t,e);if(typeof console===o&&t<n.levels.SILENT)return"No console available for logging"};n.setDefaultLevel=function(e){getPersistedLevel()||n.setLevel(e,false)};n.enableAll=function(e){n.setLevel(n.levels.TRACE,e)};n.disableAll=function(e){n.setLevel(n.levels.SILENT,e)};var u=getPersistedLevel();null==u&&(u=null==t?"WARN":t);n.setLevel(u,false)}var u=new Logger$1;var l={};u.getLogger=function getLogger(e){if("symbol"!==typeof e&&"string"!==typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var t=l[e];t||(t=l[e]=new Logger$1(e,u.getLevel(),u.methodFactory));return t};var d=typeof window!==o?window.log:void 0;u.noConflict=function(){typeof window!==o&&window.log===u&&(window.log=d);return u};u.getLoggers=function getLoggers(){return l};u.default=u;a=u;var p=a;var f={name:"twilio-video",title:"Twilio Video",description:"Twilio Video JavaScript Library",version:"2.28.1",homepage:"https://twilio.com",author:"Mark Andrus Roberts <mroberts@twilio.com>",contributors:["Ryan Rowland <rrowland@twilio.com>","Manjesh Malavalli <mmalavalli@twilio.com>","Makarand Patwardhan <mpatwardhan@twilio.com>"],keywords:["twilio","webrtc","library","javascript","video","rooms"],repository:{type:"git",url:"https://github.com/twilio/twilio-video.js.git"},devDependencies:{"@babel/core":"^7.14.2","@babel/plugin-proposal-class-properties":"^7.18.6","@babel/plugin-proposal-object-rest-spread":"^7.20.7","@babel/preset-env":"^7.14.2","@babel/preset-typescript":"^7.13.0","@types/express":"^4.11.0","@types/node":"^8.5.1","@types/selenium-webdriver":"^3.0.8","@types/ws":"^3.2.1","@typescript-eslint/eslint-plugin":"^4.13.0","@typescript-eslint/parser":"^4.0.0","babel-cli":"^6.26.0","babel-preset-es2015":"^6.24.1",browserify:"^17.0.0",cheerio:"^0.22.0",cors:"^2.8.5",electron:"^17.2.0",envify:"^4.0.0",eslint:"^6.2.1","eslint-config-standard":"^14.0.0","eslint-plugin-import":"^2.18.2","eslint-plugin-node":"^9.1.0","eslint-plugin-promise":"^4.2.1","eslint-plugin-standard":"^4.0.1",express:"^4.16.2",glob:"^7.1.7","ink-docstrap":"^1.3.2",inquirer:"^7.0.0","is-docker":"^2.0.0",jsdoc:"^3.5.5","jsdoc-babel":"^0.5.0","json-loader":"^0.5.7",karma:"6.4.1","karma-browserify":"^8.0.0","karma-chrome-launcher":"^2.0.0","karma-edgium-launcher":"^4.0.0-0","karma-electron":"^6.1.0","karma-firefox-launcher":"^1.3.0","karma-htmlfile-reporter":"^0.3.8","karma-junit-reporter":"^1.2.0","karma-mocha":"^1.3.0","karma-safari-launcher":"^1.0.0","karma-spec-reporter":"0.0.32","karma-typescript":"^5.5.1","karma-typescript-es6-transform":"^5.5.1",mocha:"^3.2.0","mock-require":"^3.0.3",ncp:"^2.0.0","node-http-server":"^8.1.2","npm-run-all":"^4.0.2",nyc:"^15.1.0",requirejs:"^2.3.3",rimraf:"^2.6.1","simple-git":"^1.126.0",sinon:"^4.0.1","ts-node":"4.0.1",tslint:"5.8.0",twilio:"^3.49.0","twilio-release-tool":"^1.0.2",typescript:"4.2.2","uglify-js":"^2.8.22","vinyl-fs":"^2.4.4","vinyl-source-stream":"^1.1.0",watchify:"^3.11.1","webrtc-adapter":"^7.7.1"},engines:{node:">=0.12"},license:"BSD-3-Clause",main:"./es5/index.js",types:"./tsdef/index.d.ts",scripts:{"lint:js":"eslint ./lib ./test/*.js ./docker/**/*.js ./test/framework/*.js ./test/lib/*.js ./test/integration/** ./test/unit/** ","lint:ts":"eslint ./tsdef/*.ts ./lib/**/*.ts",lint:"npm-run-all lint:js lint:ts",printVersion:"node --version && npm --version","test:unit":"npm-run-all printVersion build:es5 && nyc --report-dir=./coverage --include=lib/**/* --reporter=html --reporter=lcov --reporter=text mocha -r ts-node/register ./test/unit/*","test:unit:quick":"nyc --report-dir=./coverage --include=lib/**/* --reporter=html --reporter=lcov mocha -r ts-node/register","test:serversiderender":"mocha ./test/serversiderender/index.js","test:integration:adapter":"node ./scripts/karma.js karma/integration.adapter.conf.js","test:integration":"npm run build:es5 && node ./scripts/karma.js karma/integration.conf.js","test:umd:install":"npm install puppeteer@19.2.2","test:umd":"mocha ./test/umd/index.js","test:crossbrowser:build:clean":"rimraf ./test/crossbrowser/lib ./test/crossbrowser/src/browser/index.js","test:crossbrowser:build:lint":"cd ./test/crossbrowser && tslint --project tsconfig.json","test:crossbrowser:build:tsc":"cd ./test/crossbrowser && tsc","test:crossbrowser:build:browser":"cd ./test/crossbrowser && browserify lib/crossbrowser/src/browser/index.js > src/browser/index.js","test:crossbrowser:build":"npm-run-all test:crossbrowser:build:*","test:crossbrowser:test":"cd ./test/crossbrowser && mocha --compilers ts:ts-node/register test/integration/spec/**/*.ts","test:crossbrowser":"npm-run-all test:crossbrowser:*","test:sdkdriver:build:clean":"rimraf ./test/lib/sdkdriver/lib ./test/lib/sdkdriver/test/integration/browser/index.js","test:sdkdriver:build:lint":"cd ./test/lib/sdkdriver && tslint --project tsconfig.json","test:sdkdriver:build:tsc":"cd ./test/lib/sdkdriver && tsc --rootDir src","test:sdkdriver:build":"npm-run-all test:sdkdriver:build:*","test:sdkdriver:test:unit":"cd ./test/lib/sdkdriver && mocha --compilers ts:ts-node/register test/unit/spec/**/*.ts","test:sdkdriver:test:integration:browser":"cd ./test/lib/sdkdriver/test/integration && browserify browser/browser.js > browser/index.js","test:sdkdriver:test:integration:run":"cd ./test/lib/sdkdriver && mocha --compilers ts:ts-node/register test/integration/spec/**/*.ts","test:sdkdriver:test:integration":"npm-run-all test:sdkdriver:test:integration:*","test:sdkdriver:test":"npm-run-all test:sdkdriver:test:*","test:sdkdriver":"npm-run-all test:sdkdriver:*","test:framework:angular:install":"cd ./test/framework/twilio-video-angular && rimraf ./node_modules package-lock.json && npm install","test:framework:angular:run":"mocha ./test/framework/twilio-video-angular.js","test:framework:angular":"npm-run-all test:framework:angular:*","test:framework:no-framework:run":"mocha ./test/framework/twilio-video-no-framework.js","test:framework:no-framework":"npm-run-all test:framework:no-framework:*","test:framework:react:install":"cd ./test/framework/twilio-video-react && rimraf ./node_modules package-lock.json && npm install","test:framework:react:test":"node ./scripts/framework.js twilio-video-react","test:framework:react:build":"cd ./test/framework/twilio-video-react && npm run build","test:framework:react:run":"mocha ./test/framework/twilio-video-react.js","test:framework:react":"npm-run-all test:framework:react:*","test:framework:install":"npm install chromedriver && npm install selenium-webdriver && npm install geckodriver && npm install puppeteer","test:framework":"npm-run-all test:framework:install test:framework:no-framework test:framework:react",test:"npm-run-all test:unit test:integration","build:es5":"rimraf ./es5 && mkdir -p es5 && tsc tsdef/twilio-video-tests.ts --noEmit --lib es2018,dom && tsc","build:js":"node ./scripts/build.js ./src/twilio-video.js ./LICENSE.md ./dist/twilio-video.js","build:min.js":'uglifyjs ./dist/twilio-video.js -o ./dist/twilio-video.min.js --comments "/^! twilio-video.js/" -b beautify=false,ascii_only=true',build:"npm-run-all clean lint docs test:unit test:integration build:es5 build:js build:min.js test:umd","build:quick":"npm-run-all clean lint docs build:es5 build:js build:min.js",docs:"node ./scripts/docs.js ./dist/docs",watch:"tsc -w",clean:"rimraf ./coverage ./es5 ./dist"},dependencies:{events:"^3.3.0",util:"^0.12.4",ws:"^7.4.6",xmlhttprequest:"^1.8.0"},browser:{ws:"./src/ws.js",xmlhttprequest:"./src/xmlhttprequest.js"}};var v={};var h=f;v.SDK_NAME=h.name+".js";v.SDK_VERSION=h.version;v.SDP_FORMAT="unified";v.hardwareDevicePublisheriPad={hwDeviceManufacturer:"Apple",hwDeviceModel:"iPad",hwDeviceType:"tablet",platformName:"iOS"};v.hardwareDevicePublisheriPhone={hwDeviceManufacturer:"Apple",hwDeviceModel:"iPhone",hwDeviceType:"mobile",platformName:"iOS"};v.DEFAULT_ENVIRONMENT="prod";v.DEFAULT_REALM="us1";v.DEFAULT_REGION="gll";v.DEFAULT_LOG_LEVEL="warn";v.DEFAULT_LOGGER_NAME="twilio-video";v.WS_SERVER=function(e,t){t="gll"===t?"global":encodeURIComponent(t);return"prod"===e?"wss://"+t+".vss.twilio.com/signaling":"wss://"+t+".vss."+e+".twilio.com/signaling"};v.PUBLISH_MAX_ATTEMPTS=5;v.PUBLISH_BACKOFF_JITTER=10;v.PUBLISH_BACKOFF_MS=20;
/**
 * Returns the appropriate indefinite article ("a" | "an").
 * @param {string} word - The word which determines whether "a" | "an" is returned
 * @returns {string} "a" if word's first letter is a vowel, "an" otherwise
 */function article(e){return["a","e","i","o","u"].includes(e.toLowerCase()[0])?"an":"a"}v.typeErrors={ILLEGAL_INVOKE:function(e,t){return new TypeError("Illegal call to "+e+": "+t)},INVALID_TYPE:function(e,t){return new TypeError(e+" must be "+article(t)+" "+t)},INVALID_VALUE:function(e,t){return new RangeError(e+" must be one of "+t.join(", "))},REQUIRED_ARGUMENT:function(e){return new TypeError(e+" must be specified")}};v.DEFAULT_FRAME_RATE=24;v.DEFAULT_VIDEO_PROCESSOR_STATS_INTERVAL_MS=1e4;v.DEFAULT_ICE_GATHERING_TIMEOUT_MS=15e3;v.DEFAULT_SESSION_TIMEOUT_SEC=30;v.DEFAULT_NQ_LEVEL_LOCAL=1;v.DEFAULT_NQ_LEVEL_REMOTE=0;v.MAX_NQ_LEVEL=3;v.ICE_ACTIVITY_CHECK_PERIOD_MS=1e3;v.ICE_INACTIVITY_THRESHOLD_MS=3e3;v.iceRestartBackoffConfig={factor:1.1,min:1,max:1e3*v.DEFAULT_SESSION_TIMEOUT_SEC,jitter:1};v.reconnectBackoffConfig={factor:1.5,min:80,jitter:1};v.subscriptionMode={MODE_COLLABORATION:"collaboration",MODE_GRID:"grid",MODE_PRESENTATION:"presentation"};v.trackSwitchOffMode={MODE_DISABLED:"disabled",MODE_DETECTED:"detected",MODE_PREDICTED:"predicted"};v.trackPriority={PRIORITY_HIGH:"high",PRIORITY_LOW:"low",PRIORITY_STANDARD:"standard"};v.clientTrackSwitchOffControl={MODE_AUTO:"auto",MODE_MANUAL:"manual"};v.videoContentPreferencesMode={MODE_AUTO:"auto",MODE_MANUAL:"manual"};var _={};var m=_&&_.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};var g=_&&_.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};var y=p.getLogger;var b=v;var k=b.DEFAULT_LOG_LEVEL,S=b.DEFAULT_LOGGER_NAME;var T=v.typeErrors;var w;function getDeprecationWarnings(e){w=w||new Map;if(w.has(e))return w.get(e);var t=new Set;w.set(e,t);return t}var C=function(){
/**
   * Construct a new {@link Log} object.
   * @param {String} moduleName - Name of the logging module (webrtc/media/signaling)
   * @param {object} component - Component owning this instance of {@link Log}
   * @param {LogLevels} logLevels - Logging levels. See {@link LogLevels}
   * @param {String} loggerName - Name of the logger instance. Used when calling getLogger from loglevel module
   * @param {Function} [getLogger] - optional method used internally.
   */
function Log(e,t,r,n,i){if("string"!==typeof e)throw T.INVALID_TYPE("moduleName","string");if(!t)throw T.REQUIRED_ARGUMENT("component");"object"!==typeof r&&(r={});i=i||y;validateLogLevels(r);Object.defineProperties(this,{_component:{value:t},_logLevels:{value:r},_warnings:{value:new Set},_loggerName:{get:function get(){var t=n&&"string"===typeof n?n:S;this._logLevelsEqual||(t=t+"-"+e);return t}},_logger:{get:function get(){var t=i(this._loggerName);var r=this._logLevels[e]||k;r="off"===r?"silent":r;t.setDefaultLevel(r);return t}},_logLevelsEqual:{get:function get(){return 1===new Set(Object.values(this._logLevels)).size}},logLevel:{get:function get(){return Log.getLevelByName(r[e]||k)}},name:{get:t.toString.bind(t)}})}
/**
   * Get the log level (number) by its name (string)
   * @param {String} name - Name of the log level
   * @returns {Number} Requested log level
   * @throws {TwilioError} INVALID_LOG_LEVEL (32056)
   * @public
   */Log.getLevelByName=function(e){if(!isNaN(e))return parseInt(e,10);e=e.toUpperCase();validateLogLevel(e);return Log[e]};
/**
   * Create a child {@link Log} instance with this._logLevels
   * @param moduleName - Name of the logging module
   * @param component - Component owning this instance of {@link Log}
   * @returns {Log} this
   */Log.prototype.createLog=function(e,t){var r=this._loggerName;this._logLevelsEqual||(r=r.substring(0,r.lastIndexOf("-")));return new Log(e,t,this._logLevels,r)};
/**
   * Set new log levels.
   * This changes the levels for all its ancestors,
   * siblings, and children and descendants instances of {@link Log}.
   * @param {LogLevels} levels - New log levels
   * @throws {TwilioError} INVALID_ARGUMENT
   * @returns {Log} this
   */Log.prototype.setLevels=function(e){validateLogLevels(e);Object.assign(this._logLevels,e);return this};
/**
   * Log a message using the logger method appropriate for the specified logLevel
   * @param {Number} logLevel - Log level of the message being logged
   * @param {Array} messages - Message(s) to log
   * @returns {Log} This instance of {@link Log}
   * @public
   */Log.prototype.log=function(e,t){var r=Log._levels[e];if(!r)throw T.INVALID_VALUE("logLevel",O);r=r.toLowerCase();var n=[(new Date).toISOString(),r,this.name];(this._logger[r]||function noop(){}).apply(void 0,g([],m(n.concat(t))));return this};
/**
   * Log a debug message
   * @param {...String} messages - Message(s) to pass to the logger
   * @returns {Log} This instance of {@link Log}
   * @public
   */Log.prototype.debug=function(){return this.log(Log.DEBUG,[].slice.call(arguments))};
/**
   * Log a deprecation warning. Deprecation warnings are logged as warnings and
   * they are only ever logged once.
   * @param {String} deprecationWarning - The deprecation warning
   * @returns {Log} This instance of {@link Log}
   * @public
   */Log.prototype.deprecated=function(e){var t=getDeprecationWarnings(this._component.constructor);if(t.has(e))return this;t.add(e);return this.warn(e)};
/**
   * Log an info message
   * @param {...String} messages - Message(s) to pass to the logger
   * @returns {Log} This instance of {@link Log}
   * @public
   */Log.prototype.info=function(){return this.log(Log.INFO,[].slice.call(arguments))};
/**
   * Log a warn message
   * @param {...String} messages - Message(s) to pass to the logger
   * @returns {Log} This instance of {@link Log}
   * @public
   */Log.prototype.warn=function(){return this.log(Log.WARN,[].slice.call(arguments))};
/**
   * Log a warning once.
   * @param {String} warning
   * @returns {Log} This instance of {@link Log}
   * @public
   */Log.prototype.warnOnce=function(e){if(this._warnings.has(e))return this;this._warnings.add(e);return this.warn(e)};
/**
   * Log an error message
   * @param {...String} messages - Message(s) to pass to the logger
   * @returns {Log} This instance of {@link Log}
   * @public
   */Log.prototype.error=function(){return this.log(Log.ERROR,[].slice.call(arguments))};
/**
   * Log an error message and throw an exception
   * @param {TwilioError} error - Error to throw
   * @param {String} customMessage - Custom message for the error
   * @public
   */Log.prototype.throw=function(e,t){e.clone&&(e=e.clone(t));this.log(Log.ERROR,e);throw e};return Log}();Object.defineProperties(C,{DEBUG:{value:0},INFO:{value:1},WARN:{value:2},ERROR:{value:3},OFF:{value:4},_levels:{value:["DEBUG","INFO","WARN","ERROR","OFF"]}});var P={};var O=[];var E=C._levels.map((function(e,t){P[e]=true;O.push(t);return e}));function validateLogLevel(e){if(!(e in P))throw T.INVALID_VALUE("level",E)}function validateLogLevels(e){Object.keys(e).forEach((function(t){validateLogLevel(e[t].toUpperCase())}))}_=C;var R=_;var L={};var M=L&&L.__awaiter||function(e,t,r,n){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function fulfilled(e){try{step(n.next(e))}catch(e){i(e)}}function rejected(e){try{step(n.throw(e))}catch(e){i(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))};var I=L&&L.__generator||function(e,t){var r,n,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:verb(0),throw:verb(1),return:verb(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function verb(e){return function(t){return step([e,t])}}function step(a){if(r)throw new TypeError("Generator is already executing.");while(o)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;(n=0,i)&&(a=[2&a[0],i.value]);switch(a[0]){case 0:case 1:i=a;break;case 4:o.label++;return{value:a[1],done:false};case 5:o.label++;n=a[1];a=[0];continue;case 7:a=o.ops.pop();o.trys.pop();continue;default:if(!(i=o.trys,i=i.length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1];i=a;break}if(i&&o.label<i[2]){o.label=i[2];o.ops.push(a);break}i[2]&&o.ops.pop();o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e];n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};Object.defineProperty(L,"__esModule",{value:true});L.createNoiseCancellationAudioProcessor=void 0;var j=n;var A={krisp:{supportedVersion:"1.0.0",pluginFile:"krispsdk.mjs"},rnnoise:{supportedVersion:"0.6.0",pluginFile:"rnnoise_sdk.mjs"}};var ensureVersionSupported=function(e){var t=e.supportedVersion,r=e.plugin,n=e.log;if(!r.getVersion||!r.isSupported)throw new Error("Plugin does not export getVersion/isSupported api. Are you using old version of the plugin ?");var i=r.getVersion();n.debug("Plugin Version = "+i);var a=t.split(".").map((function(e){return Number(e)}));var o=i.split(".").map((function(e){return Number(e)}));if(3!==a.length||3!==o.length)throw new Error("Unsupported Plugin version format: "+t+", "+i);if(a[0]!==o[0])throw new Error("Major version mismatch: [Plugin version "+i+"],  [Supported Version "+t+"]");if(o[1]<a[1])throw new Error("Minor version mismatch: [Plugin version "+i+"] < [Supported Version "+t+"]");var c=new AudioContext;var s=r.isSupported(c);c.close();if(!s)throw new Error("Noise Cancellation plugin is not supported on your browser")};var D=new Map;function createNoiseCancellationAudioProcessor(e,t){return M(this,void 0,void 0,(function(){var r,n,i,a,o,c,s,u,l;return I(this,(function(d){switch(d.label){case 0:r=D.get(e.vendor);if(!!r)return[3,6];n=A[e.vendor];if(!n)throw new Error("Unsupported NoiseCancellationOptions.vendor: "+e.vendor);i=n.supportedVersion,a=n.pluginFile;o=e.sdkAssetsPath;c=o+"/"+a;d.label=1;case 1:d.trys.push([1,5,,6]);t.debug("loading noise cancellation sdk: ",c);return[4,j(c)];case 2:s=d.sent();t.debug("Loaded noise cancellation sdk:",s);u=s.default;ensureVersionSupported({supportedVersion:i,plugin:u,log:t});if(!!u.isInitialized())return[3,4];t.debug("initializing noise cancellation sdk: ",o);return[4,u.init({rootDir:o})];case 3:d.sent();t.debug("noise cancellation sdk initialized!");d.label=4;case 4:r={vendor:e.vendor,isInitialized:function(){return u.isInitialized()},isConnected:function(){return u.isConnected()},isEnabled:function(){return u.isEnabled()},disconnect:function(){return u.disconnect()},enable:function(){return u.enable()},disable:function(){return u.disable()},destroy:function(){return u.destroy()},setLogging:function(e){return u.setLogging(e)},connect:function(e){t.debug("connect: ",e.id);u.isConnected()&&u.disconnect();var r=u.connect(new MediaStream([e]));if(!r)throw new Error("Error connecting with noise cancellation sdk");var n=r.getAudioTracks()[0];if(!n)throw new Error("Error getting clean track from noise cancellation sdk");u.enable();return n}};D.set(e.vendor,r);return[3,6];case 5:l=d.sent();t.error("Error loading noise cancellation sdk:"+c,l);throw l;case 6:return[2,r]}}))}))}L.createNoiseCancellationAudioProcessor=createNoiseCancellationAudioProcessor;var x={};var V=x&&x.__awaiter||function(e,t,r,n){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function fulfilled(e){try{step(n.next(e))}catch(e){i(e)}}function rejected(e){try{step(n.throw(e))}catch(e){i(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))};var N=x&&x.__generator||function(e,t){var r,n,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:verb(0),throw:verb(1),return:verb(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function verb(e){return function(t){return step([e,t])}}function step(a){if(r)throw new TypeError("Generator is already executing.");while(o)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;(n=0,i)&&(a=[2&a[0],i.value]);switch(a[0]){case 0:case 1:i=a;break;case 4:o.label++;return{value:a[1],done:false};case 5:o.label++;n=a[1];a=[0];continue;case 7:a=o.ops.pop();o.trys.pop();continue;default:if(!(i=o.trys,i=i.length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1];i=a;break}if(i&&o.label<i[2]){o.label=i[2];o.ops.push(a);break}i[2]&&o.ops.pop();o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e];n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};Object.defineProperty(x,"__esModule",{value:true});x.applyNoiseCancellation=x.NoiseCancellationImpl=void 0;var F=L;
/**
 * {@link NoiseCancellation} interface provides methods to control noise cancellation at runtime. This interface is exposed
 * on {@link LocalAudioTrack} property `noiseCancellation`. It is available only when {@link NoiseCancellationOptions} are
 * specified when creating a {@link LocalAudioTrack}, and the plugin is successfully loaded.
 * @alias NoiseCancellation
 * @interface
 *
 * @example
 * const { connect, createLocalAudioTrack } = require('twilio-video');
 *
 * // Create a LocalAudioTrack with Krisp noise cancellation enabled.
 * const localAudioTrack = await createLocalAudioTrack({
 *   noiseCancellationOptions: {
 *     sdkAssetsPath: 'path/to/hosted/twilio/krisp/audio/plugin/1.0.0/dist',
 *     vendor: 'krisp'
 *   }
 * });
 *
 * if (!localAudioTrack.noiseCancellation) {
 *   // If the Krisp audio plugin fails to load, then a warning message will be logged
 *   // in the browser console, and the "noiseCancellation" property will be set to null.
 *   // You can still use the LocalAudioTrack to join a Room. However, it will use the
 *   // browser's noise suppression instead of the Krisp noise cancellation. Make sure
 *   // the "sdkAssetsPath" provided in "noiseCancellationOptions" points to the correct
 *   // hosted path of the plugin assets.
 * } else {
 *   // Join a Room with the LocalAudioTrack.
 *   const room = await connect('token', {
 *     name: 'my-cool-room',
 *     tracks: [localAudioTrack]
 *   });
 *
 *   if (!localAudioTrack.noiseCancellation.isEnabled) {
 *     // Krisp noise cancellation is permanently disabled in Peer-to-Peer and Go Rooms.
 *   }
 * }
 *
 * //
 * // Enable/disable noise cancellation.
 * // @param {boolean} enable - whether noise cancellation should be enabled
 * //
 * function setNoiseCancellation(enable) {
 *   const { noiseCancellation } = localAudioTrack;
 *   if (noiseCancellation) {
 *     if (enable) {
 *       // If enabled, then the LocalAudioTrack will use the Krisp noise
 *       // cancellation instead of the browser's noise suppression.
 *       noiseCancellation.enable();
 *     } else {
 *       // If disabled, then the LocalAudioTrack will use the browser's
 *       // noise suppression instead of the Krisp noise cancellation.
 *       noiseCancellation.disable();
 *     }
 *   }
 * }
 */
var B=function(){function NoiseCancellationImpl(e,t){this._processor=e;this._sourceTrack=t;this._disabledPermanent=false}Object.defineProperty(NoiseCancellationImpl.prototype,"vendor",{
/**
     * Name of the noise cancellation vendor.
     * @type {NoiseCancellationVendor}
     */
get:function(){return this._processor.vendor},enumerable:false,configurable:true});Object.defineProperty(NoiseCancellationImpl.prototype,"sourceTrack",{
/**
     * The underlying MediaStreamTrack of the {@link LocalAudioTrack}.
     * @type {MediaStreamTrack}
     */
get:function(){return this._sourceTrack},enumerable:false,configurable:true});Object.defineProperty(NoiseCancellationImpl.prototype,"isEnabled",{
/**
     * Whether noise cancellation is enabled.
     * @type {boolean}
     */
get:function(){return this._processor.isEnabled()},enumerable:false,configurable:true});
/**
   * Enable noise cancellation.
   * @returns {Promise<void>} Promise that resolves when the operation is complete
   * @throws {Error} Throws an error if noise cancellation is disabled permanently
   *   for the {@link LocalAudioTrack}
   */NoiseCancellationImpl.prototype.enable=function(){if(this._disabledPermanent)throw new Error(this.vendor+" noise cancellation is disabled permanently for this track");this._processor.enable();return Promise.resolve()};
/**
   * Disable noise cancellation.
   * @returns {Promise<void>} Promise that resolves when the operation is complete
   */NoiseCancellationImpl.prototype.disable=function(){this._processor.disable();return Promise.resolve()};NoiseCancellationImpl.prototype.reacquireTrack=function(e){return V(this,void 0,void 0,(function(){var t,r,n;return N(this,(function(i){switch(i.label){case 0:t=this._processor.isEnabled();this._processor.disconnect();return[4,e()];case 1:r=i.sent();this._sourceTrack=r;return[4,this._processor.connect(r)];case 2:n=i.sent();t?this._processor.enable():this._processor.disable();return[2,n]}}))}))};NoiseCancellationImpl.prototype.disablePermanently=function(){this._disabledPermanent=true;return this.disable()};NoiseCancellationImpl.prototype.stop=function(){this._processor.disconnect();this._sourceTrack.stop()};return NoiseCancellationImpl}();x.NoiseCancellationImpl=B;function applyNoiseCancellation(e,t,r){return V(this,void 0,void 0,(function(){var n,i,a,o;return N(this,(function(c){switch(c.label){case 0:c.trys.push([0,2,,3]);return[4,F.createNoiseCancellationAudioProcessor(t,r)];case 1:n=c.sent();i=n.connect(e);a=new B(n,e);return[2,{cleanTrack:i,noiseCancellation:a}];case 2:o=c.sent();r.warn("Failed to create noise cancellation. Returning normal audio track: "+o);return[2,{cleanTrack:e}];case 3:return[2]}}))}))}x.applyNoiseCancellation=applyNoiseCancellation;var U={};var $=U&&U.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};var H=U&&U.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};
/**
 * Create a {@link Deferred}.
 * @returns {Deferred}
 */function defer$7(){var e={};e.promise=new Promise((function(t,r){e.resolve=t;e.reject=r}));return e}
/**
 * Copy a method from a `source` prototype onto a `wrapper` prototype. Invoking
 * the method on the `wrapper` prototype will invoke the corresponding method
 * on an instance accessed by `target`.
 * @param {object} source
 * @param {object} wrapper
 * @param {string} target
 * @param {string} methodName
 * @returns {undefined}
 */function delegateMethod$1(e,t,r,n){if(!(n in t)&&!n.match(/^on[a-z]+$/)){var i=false;try{var a=Object.getOwnPropertyDescriptor(e,n);i=a&&!!a.get}catch(e){}if(!i){var o;try{o=typeof e[n]}catch(e){}"function"===o&&(t[n]=function(){return this[r][n].apply(this[r],arguments)})}}}
/**
 * Copy methods from a `source` prototype onto a `wrapper` prototype. Invoking
 * the methods on the `wrapper` prototype will invoke the corresponding method
 * on an instance accessed by `target`.
 * @param {object} source
 * @param {object} wrapper
 * @param {string} target
 * @returns {undefined}
 */function delegateMethods$4(e,t,r){for(var n in e)delegateMethod$1(e,t,r,n)}
/**
 * Finds the items in list1 that are not in list2.
 * @param {Array<*>|Map<*>|Set<*>} list1
 * @param {Array<*>|Map<*>|Set<*>} list2
 * @returns {Set}
 */function difference$4(e,t){e=Array.isArray(e)?new Set(e):new Set(e.values());t=Array.isArray(t)?new Set(t):new Set(t.values());var r=new Set;e.forEach((function(e){t.has(e)||r.add(e)}));return r}
/**
 * Map a list to an array of arrays, and return the flattened result.
 * @param {Array<*>|Set<*>|Map<*>} list
 * @param {function(*): Array<*>} mapFn
 * @returns Array<*>
 */function flatMap$8(e,t){var r=e instanceof Map||e instanceof Set?Array.from(e.values()):e;return r.reduce((function(e,r){return e.concat(t(r))}),[])}
/**
 * Get the browser's user agent, if available.
 * @returns {?string}
 */function getUserAgent$3(){return"undefined"!==typeof navigator&&"string"===typeof navigator.userAgent?navigator.userAgent:null}
/**
 * Guess the browser.
 * @param {string} [userAgent=navigator.userAgent]
 * @returns {?string} browser - "chrome", "firefox", "safari", or null
 */function guessBrowser$8(e){"undefined"===typeof e&&(e=getUserAgent$3());return/Chrome|CriOS/.test(e)?"chrome":/Firefox|FxiOS/.test(e)?"firefox":/Safari|iPhone|iPad|iPod/.test(e)?"safari":null}
/**
 * Guess the browser version.
 * @param {string} [userAgent=navigator.userAgent]
 * @returns {?{major: number, minor: number}}
 */function guessBrowserVersion$2(e){"undefined"===typeof e&&(e=getUserAgent$3());var t={chrome:"Chrome|CriOS",firefox:"Firefox|FxiOS",safari:"Version"}[guessBrowser$8(e)];if(!t)return null;var r=new RegExp("("+t+")/([^\\s]+)");var n=$(e.match(r)||[],3),i=n[2];if(!i)return null;var a=i.split(".").map(Number);return{major:isNaN(a[0])?null:a[0],minor:isNaN(a[1])?null:a[1]}}
/**
 * Check whether the current browser is iOS Chrome.
 * @param {string} [userAgent=navigator.userAgent]
 * @returns {boolean}
 */function isIOSChrome$2(e){"undefined"===typeof e&&(e=getUserAgent$3());return/Mobi/.test(e)&&"chrome"===guessBrowser$8()&&/iPad|iPhone|iPod/.test(e)}
/**
 * Intercept an event that might otherwise be proxied on an EventTarget.
 * @param {EventTarget} target
 * @param {string} type
 * @returns {void}
 */function interceptEvent$3(e,t){var r=null;Object.defineProperty(e,"on"+t,{get:function(){return r},set:function(e){r&&this.removeEventListener(t,r);if("function"===typeof e){r=e;this.addEventListener(t,r)}else r=null}})}
/**
 * This is a function for turning a Promise into the kind referenced in the
 * Legacy Interface Extensions section of the WebRTC spec.
 * @param {Promise<*>} promise
 * @param {function<*>} onSuccess
 * @param {function<Error>} onFailure
 * @returns {Promise<undefined>}
 */function legacyPromise$3(e,t,r){return t?e.then(t,r):e}function makeUUID$3(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;var r="x"===e?t:3&t|8;return r.toString(16)}))}
/**
 * For each property name on the `source` prototype, add getters and/or setters
 * to `wrapper` that proxy to `target`.
 * @param {object} source
 * @param {object} wrapper
 * @param {string} target
 * @returns {undefined}
 */function proxyProperties$4(e,t,r){Object.getOwnPropertyNames(e).forEach((function(n){proxyProperty$1(e,t,r,n)}))}
/**
 * For the property name on the `source` prototype, add a getter and/or setter
 * to `wrapper` that proxies to `target`.
 * @param {object} source
 * @param {object} wrapper
 * @param {string} target
 * @param {string} propertyName
 * @returns {undefined}
 */function proxyProperty$1(e,t,r,n){if(!(n in t))if(n.match(/^on[a-z]+$/)){Object.defineProperty(t,n,{value:null,writable:true});r.addEventListener(n.slice(2),(function(){var e=[];for(var r=0;r<arguments.length;r++)e[r]=arguments[r];return t.dispatchEvent.apply(t,H([],$(e)))}))}else Object.defineProperty(t,n,{enumerable:true,get:function(){return r[n]}})}
/**
 * Check whether native WebRTC APIs are supported.
 * @returns {boolean}
 */function support(){return"object"===typeof navigator&&"object"===typeof navigator.mediaDevices&&"function"===typeof navigator.mediaDevices.getUserMedia&&"function"===typeof RTCPeerConnection}
/**
 * Create a Set of supported codecs for a certain kind of media.
 * @param {'audio'|'video'} kind
 * @returns {Promise<Set<AudioCodec|VideoCodec>>}
 */function createSupportedCodecsSet(e){if("undefined"!==typeof RTCRtpSender&&"function"===typeof RTCRtpSender.getCapabilities)return Promise.resolve(new Set(RTCRtpSender.getCapabilities(e).codecs.map((function(e){var t=e.mimeType;return t.split("/")[1].toLowerCase()}))));if("undefined"===typeof RTCPeerConnection||"undefined"===typeof RTCPeerConnection.prototype||"function"!==typeof RTCPeerConnection.prototype.addTransceiver||"function"!==typeof RTCPeerConnection.prototype.close||"function"!==typeof RTCPeerConnection.prototype.createOffer)return Promise.resolve(new Set);var t=new RTCPeerConnection;t.addTransceiver(e);return t.createOffer().then((function(e){var r=e.sdp;t.close();return new Set((r.match(/^a=rtpmap:.+$/gm)||[]).map((function(e){return e.match(/^a=rtpmap:.+ ([^/]+)/)[1].toLowerCase()})))}),(function(){t.close();return new Set}))}var W=new Map;
/**
 * Check whether a given codec for a certain kind of media is supported.
 * @param {AudioCodec|VideoCodec} codec
 * @param {'audio'|'video'} kind
 * @returns {Promise<boolean>}
 */function isCodecSupported$1(e,t){var r=W.get(t);return r?Promise.resolve(r.has(e.toLowerCase())):createSupportedCodecsSet(t).then((function(r){W.set(t,r);return r.has(e.toLowerCase())}))}function clearCachedSupportedCodecs(){W.clear()}
/**
 * @typedef {object} Deferred
 * @property {Promise} promise
 * @property {function} reject
 * @property {function} resolve
 */U.clearCachedSupportedCodecs=clearCachedSupportedCodecs;U.defer=defer$7;U.delegateMethods=delegateMethods$4;U.difference=difference$4;U.flatMap=flatMap$8;U.guessBrowser=guessBrowser$8;U.guessBrowserVersion=guessBrowserVersion$2;U.isCodecSupported=isCodecSupported$1;U.isIOSChrome=isIOSChrome$2;U.interceptEvent=interceptEvent$3;U.legacyPromise=legacyPromise$3;U.makeUUID=makeUUID$3;U.proxyProperties=proxyProperties$4;U.support=support;var Q={};var q="1234567890abcdef";var z=32;
/**
 * Generates a random sid using given prefix.
 * @param {string} prefix
 * @returns string
 */function createSID$1(e){var t="";for(var r=0;r<z;r++)t+=q.charAt(Math.floor(Math.random()*q.length));return""+e+t}Q.sessionSID=createSID$1("SS");Q.createSID=createSID$1;var G={};var K={recordingMediaLost:"recording-media-lost"};G=K;var J=G;var Y={};var X=Y&&Y.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Z=Y&&Y.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};var ee=Y&&Y.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};var te=v;var re=te.typeErrors,ne=te.trackPriority;var ie=U;var ae=Q.sessionSID;var oe=J;
/**
 * Return the given {@link LocalTrack} or a new {@link LocalTrack} for the
 * given MediaStreamTrack.
 * @param {LocalTrack|MediaStreamTrack} track
 * @param {object} options
 * @returns {LocalTrack}
 * @throws {TypeError}
 */function asLocalTrack$2(e,t){if(e instanceof t.LocalAudioTrack||e instanceof t.LocalVideoTrack||e instanceof t.LocalDataTrack)return e;if(e instanceof t.MediaStreamTrack)return"audio"===e.kind?new t.LocalAudioTrack(e,t):new t.LocalVideoTrack(e,t);throw re.INVALID_TYPE("track","LocalAudioTrack, LocalVideoTrack, LocalDataTrack, or MediaStreamTrack")}
/**
 * Create a new {@link LocalTrackPublication} for the given {@link LocalTrack}.
 * @param {LocalTrack} track
 * @param {LocalTrackPublicationSignaling} signaling
 * @param {function(track: LocalTrackPublication): void} unpublish
 * @param {object} options
 */function asLocalTrackPublication$1(e,t,r,n){var i={audio:n.LocalAudioTrackPublication,video:n.LocalVideoTrackPublication,data:n.LocalDataTrackPublication}[e.kind];return new i(t,e,r,n)}
/**
 * Capitalize a word.
 * @param {string} word
 * @returns {string} capitalized
 */function capitalize$1(e){return e[0].toUpperCase()+e.slice(1)}
/**
 * Log deprecation warnings for the given events of an EventEmitter.
 * @param {string} name
 * @param {EventEmitter} emitter
 * @param {Map<string, string>} events
 * @param {Log} log
 */function deprecateEvents(e,t,r,n){var i=new Set;t.on("newListener",(function newListener(a){if(r.has(a)&&!i.has(a)){n.deprecated(e+"#"+a+" has been deprecated and scheduled for removal in twilio-video.js@2.0.0."+(r.get(a)?" Use "+e+"#"+r.get(a)+" instead.":""));i.add(a)}i.size>=r.size&&t.removeListener("newListener",newListener)}))}
/**
 * Finds the items in list1 that are not in list2.
 * @param {Array<*>|Map<*>|Set<*>} list1
 * @param {Array<*>|Map<*>|Set<*>} list2
 * @returns {Set}
 */function difference$3(e,t){e=Array.isArray(e)?new Set(e):new Set(e.values());t=Array.isArray(t)?new Set(t):new Set(t.values());var r=new Set;e.forEach((function(e){t.has(e)||r.add(e)}));return r}
/**
 * Filter out the keys in an object with a given value.
 * @param {object} object - Object to be filtered
 * @param {*} [filterValue] - Value to be filtered out; If not specified, then
 *   filters out all keys which have an explicit value of "undefined"
 * @returns {object} - Filtered object
 */function filterObject$2(e,t){return Object.keys(e).reduce((function(r,n){e[n]!==t&&(r[n]=e[n]);return r}),{})}
/**
 * Map a list to an array of arrays, and return the flattened result.
 * @param {Array<*>|Set<*>|Map<*>} list
 * @param {function(*): Array<*>} [mapFn]
 * @returns Array<*>
 */function flatMap$7(e,t){var r=e instanceof Map||e instanceof Set?Array.from(e.values()):e;t=t||function mapFn(e){return e};return r.reduce((function(e,r){var n=t(r);return e.concat(n)}),[])}
/**
 * Get the user agent string, or return "Unknown".
 * @returns {string}
 */function getUserAgent$2(){return"undefined"!==typeof navigator&&navigator.userAgent?navigator.userAgent:"Unknown"}
/**
 * Get the platform component of the user agent string.
 * Example:
 *   Input - Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36
 *   Output - macintosh
 * @returns {string}
 */function getPlatform$1(){var e=getUserAgent$2();var t=Z(e.match(/\(([^)]+)\)/)||[],2),r=t[1],n=void 0===r?"unknown":r;var i=Z(n.split(";").map((function(e){return e.trim()})),1),a=i[0];return a.toLowerCase()}
/**
 * Create a unique identifier.
 * @returns {string}
 */function makeUUID$2(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;var r="x"===e?t:3&t|8;return r.toString(16)}))}
/**
 * Ensure that the given function is called once per tick.
 * @param {function} fn - Function to be executed
 * @returns {function} - Schedules the given function to be called on the next tick
 */function oncePerTick$2(e){var t=null;function nextTick(){t=null;e()}return function scheduleNextTick(){t&&clearTimeout(t);t=setTimeout(nextTick)}}function promiseFromEvents(e,t,r,n){return new Promise((function(i,a){function onSuccess(){var e=[].slice.call(arguments);n&&t.removeListener(n,onFailure);i.apply(void 0,ee([],Z(e)))}function onFailure(){var e=[].slice.call(arguments);t.removeListener(r,onSuccess);a.apply(void 0,ee([],Z(e)))}t.once(r,onSuccess);n&&t.once(n,onFailure);e()}))}
/**
 * Traverse down multiple nodes on an object and return null if
 * any link in the path is unavailable.
 * @param {Object} obj - Object to traverse
 * @param {String} path - Path to traverse. Period-separated.
 * @returns {Any|null}
 */function getOrNull(e,t){return t.split(".").reduce((function(e,t){return e?e[t]:null}),e)}
/**
 * @typedef {object} Deferred
 * @property {Promise} promise
 * @property {function} reject
 * @property {function} resolve
 */
/**
 * Create a {@link Deferred}.
 * @returns {Deferred}
 */function defer$6(){var e={};e.promise=new Promise((function(t,r){e.resolve=t;e.reject=r}));return e}
/**
 * Copy a method from a `source` prototype onto a `wrapper` prototype. Invoking
 * the method on the `wrapper` prototype will invoke the corresponding method
 * on an instance accessed by `target`.
 * @param {object} source
 * @param {object} wrapper
 * @param {string} target
 * @param {string} methodName
 * @returns {undefined}
 */function delegateMethod(e,t,r,n){if(!(n in t)&&!n.match(/^on[a-z]+$/)){var i;try{i=typeof e[n]}catch(e){}"function"===i&&(t[n]=function(){var e;var t=[];for(var i=0;i<arguments.length;i++)t[i]=arguments[i];return(e=this[r])[n].apply(e,ee([],Z(t)))})}}
/**
 * Copy methods from a `source` prototype onto a `wrapper` prototype. Invoking
 * the methods on the `wrapper` prototype will invoke the corresponding method
 * on an instance accessed by `target`.
 * @param {object} source
 * @param {object} wrapper
 * @param {string} target
 * @returns {undefined}
 */function delegateMethods$3(e,t,r){for(var n in e)delegateMethod(e,t,r,n)}
/**
 * Determine whether two values are deeply equal.
 * @param {*} val1
 * @param {*} val2
 * @returns {boolean}
 */function isDeepEqual$2(e,t){if(e===t)return true;if(typeof e!==typeof t)return false;if(null===e)return null===t;if(null===t)return false;if(Array.isArray(e))return Array.isArray(t)&&e.length===t.length&&e.every((function(e,r){return isDeepEqual$2(e,t[r])}));if("object"===typeof e){var r=Object.keys(e).sort();var n=Object.keys(t).sort();return!Array.isArray(t)&&isDeepEqual$2(r,n)&&r.every((function(r){return isDeepEqual$2(e[r],t[r])}))}return false}
/**
 * Whether the given argument is a non-array object.
 * @param {*} object
 * @return {boolean}
 */function isNonArrayObject$3(e){return"object"===typeof e&&!Array.isArray(e)}
/**
 * For each property name on the `source` prototype, add getters and/or setters
 * to `wrapper` that proxy to `target`.
 * @param {object} source
 * @param {object} wrapper
 * @param {string} target
 * @returns {undefined}
 */function proxyProperties$3(e,t,r){Object.getOwnPropertyNames(e).forEach((function(n){proxyProperty(e,t,r,n)}))}
/**
 * For the property name on the `source` prototype, add a getter and/or setter
 * to `wrapper` that proxies to `target`.
 * @param {object} source
 * @param {object} wrapper
 * @param {string} target
 * @param {string} propertyName
 * @returns {undefined}
 */function proxyProperty(e,t,r,n){if(!(n in t))if(n.match(/^on[a-z]+$/)){Object.defineProperty(t,n,{value:null,writable:true});r.addEventListener(n.slice(2),(function(){var e=[];for(var r=0;r<arguments.length;r++)e[r]=arguments[r];t.dispatchEvent.apply(t,ee([],Z(e)))}))}else Object.defineProperty(t,n,{enumerable:true,get:function(){return r[n]}})}
/**
 * This is a function for turning a Promise into the kind referenced in the
 * Legacy Interface Extensions section of the WebRTC spec.
 * @param {Promise<*>} promise
 * @param {function<*>} onSuccess
 * @param {function<Error>} onFailure
 * @returns {Promise<undefined>}
 */function legacyPromise$2(e,t,r){return t?e.then((function(e){t(e)}),(function(e){r(e)})):e}
/**
 * Build the {@link LogLevels} object.
 * @param {String|LogLevel} logLevel - Log level name or object
 * @returns {LogLevels}
 */function buildLogLevels$8(e){return"string"===typeof e?{default:e,media:e,signaling:e,webrtc:e}:e}
/**
 * Get the {@link Track}'s derived class name
 * @param {Track} track
 * @param {?boolean} [local=undefined]
 * @returns {string}
 */function trackClass$1(e,t){t=t?"Local":"";return t+(e.kind||"").replace(/\w{1}/,(function(e){return e.toUpperCase()}))+"Track"}
/**
 * Get the {@link TrackPublication}'s derived class name
 * @param {TrackPublication} publication
 * @param {?boolean} [local=undefined]
 * @returns {string}
 */function trackPublicationClass(e,t){t=t?"Local":"";return t+(e.kind||"").replace(/\w{1}/,(function(e){return e.toUpperCase()}))+"TrackPublication"}
/**
 * Sets all underscore-prefixed properties on `object` non-enumerable.
 * @param {Object} object
 * @returns {void}
 */function hidePrivateProperties(e){Object.getOwnPropertyNames(e).forEach((function(t){t.startsWith("_")&&hideProperty(e,t)}))}
/**
 * Creates a new subclass which, in the constructor, sets all underscore-prefixed
 * properties and the given public properties non-enumerable. This is useful for
 * patching up classes like EventEmitter which may set properties like `_events`
 * and `domain`.
 * @param {Function} klass
 * @param {Array<string>} props
 * @returns {Function} subclass
 */function hidePrivateAndCertainPublicPropertiesInClass$1(e,t){return function(e){X(class_1,e);function class_1(){var r=[];for(var n=0;n<arguments.length;n++)r[n]=arguments[n];var i=e.apply(this,ee([],Z(r)))||this;hidePrivateProperties(i);hidePublicProperties(i,t);return i}return class_1}(e)}
/**
 * Hide a property of an object.
 * @param {object} object
 * @param {string} name
 */function hideProperty(e,t){var r=Object.getOwnPropertyDescriptor(e,t);r.enumerable=false;Object.defineProperty(e,t,r)}
/**
 * Hide the given public properties of an object.
 * @param {object} object
 * @param {Array<string>} [props=[]]
 */function hidePublicProperties(e,t){void 0===t&&(t=[]);t.forEach((function(t){e.hasOwnProperty(t)&&hideProperty(e,t)}))}
/**
 * Convert an Array of values to an Array of JSON values by calling
 * `valueToJSON` on each value.
 * @param {Array<*>} array
 * @returns {Array<*>}
 */function arrayToJSON(e){return e.map(valueToJSON$3)}
/**
 * Convert a Set of values to an Array of JSON values by calling `valueToJSON`
 * on each value.
 * @param {Set<*>} set
 * @returns {Array<*>}
 */function setToJSON(e){return arrayToJSON(ee([],Z(e)))}
/**
 * Convert a Map from strings to values to an object of JSON values by calling
 * `valueToJSON` on each value.
 * @param {Map<string, *>} map
 * @returns {object}
 */function mapToJSON(e){return ee([],Z(e.entries())).reduce((function(e,t){var r;var n=Z(t,2),i=n[0],a=n[1];return Object.assign((r={},r[i]=valueToJSON$3(a),r),e)}),{})}
/**
 * Convert an object to a JSON value by calling `valueToJSON` on its enumerable
 * keys.
 * @param {object} object
 * @returns {object}
 */function objectToJSON(e){return Object.entries(e).reduce((function(e,t){var r;var n=Z(t,2),i=n[0],a=n[1];return Object.assign((r={},r[i]=valueToJSON$3(a),r),e)}),{})}
/**
 * Convert a value into a JSON value.
 * @param {*} value
 * @returns {*}
 */function valueToJSON$3(e){return Array.isArray(e)?arrayToJSON(e):e instanceof Set?setToJSON(e):e instanceof Map?mapToJSON(e):e&&"object"===typeof e?objectToJSON(e):e}function createRoomConnectEventPayload$1(e){function boolToString(e){return e?"true":"false"}var t={sessionSID:ae,iceServers:(e.iceServers||[]).length,audioTracks:(e.tracks||[]).filter((function(e){return"audio"===e.kind})).length,videoTracks:(e.tracks||[]).filter((function(e){return"video"===e.kind})).length,dataTracks:(e.tracks||[]).filter((function(e){return"data"===e.kind})).length};[["audio"],["automaticSubscription"],["enableDscp"],["eventListener"],["preflight"],["video"],["dominantSpeaker","enableDominantSpeaker"]].forEach((function(r){var n=Z(r,2),i=n[0],a=n[1];a=a||i;t[a]=boolToString(!!e[i])}));[["maxVideoBitrate"],["maxAudioBitrate"]].forEach((function(r){var n=Z(r,2),i=n[0],a=n[1];a=a||i;"number"===typeof e[i]?t[a]=e[i]:isNaN(Number(e[i]))||(t[a]=Number(e[i]))}));[["iceTransportPolicy"],["region"],["name","roomName"]].forEach((function(r){var n=Z(r,2),i=n[0],a=n[1];a=a||i;"string"===typeof e[i]?t[a]=e[i]:"number"===typeof e[i]&&"name"===i&&(t[a]=e[i].toString())}));["preferredAudioCodecs","preferredVideoCodecs"].forEach((function(r){r in e&&(t[r]=JSON.stringify(e[r]))}));if("networkQuality"in e){t.networkQualityConfiguration={};if(isNonArrayObject$3(e.networkQuality))["local","remote"].forEach((function(r){"number"===typeof e.networkQuality[r]&&(t.networkQualityConfiguration[r]=e.networkQuality[r])}));else{t.networkQualityConfiguration.remote=0;t.networkQualityConfiguration.local=e.networkQuality?1:0}}if(e.bandwidthProfile&&e.bandwidthProfile.video){var r=e.bandwidthProfile.video||{};t.bandwidthProfileOptions={};["mode","maxTracks","trackSwitchOffMode","dominantSpeakerPriority","maxSubscriptionBitrate","renderDimensions","contentPreferencesMode","clientTrackSwitchOffControl"].forEach((function(e){"number"===typeof r[e]||"string"===typeof r[e]?t.bandwidthProfileOptions[e]=r[e]:"boolean"===typeof r[e]?t.bandwidthProfileOptions[e]=boolToString(r[e]):"object"===typeof r[e]&&(t.bandwidthProfileOptions[e]=JSON.stringify(r[e]))}))}return{group:"room",name:"connect",level:"info",payload:t}}
/**
 * Create the bandwidth profile payload included in an RSP connect message.
 * @param {BandwidthProfileOptions} bandwidthProfile
 * @returns {object}
 */function createBandwidthProfilePayload$2(e){return createRSPPayload(e,[{prop:"video",type:"object",transform:createBandwidthProfileVideoPayload}])}
/**
 * Create the bandwidth profile video payload included in an RSP connect message.
 * @param {VideoBandwidthProfileOptions} bandwidthProfileVideo
 * @returns {object}
 */function createBandwidthProfileVideoPayload(e){return createRSPPayload(e,[{prop:"dominantSpeakerPriority",type:"string",payloadProp:"active_speaker_priority"},{prop:"maxSubscriptionBitrate",type:"number",payloadProp:"max_subscription_bandwidth"},{prop:"maxTracks",type:"number",payloadProp:"max_tracks"},{prop:"mode",type:"string"},{prop:"renderDimensions",type:"object",payloadProp:"render_dimensions",transform:createRenderDimensionsPayload},{prop:"trackSwitchOffMode",type:"string",payloadProp:"track_switch_off"}])}
/**
 * Create the Media Signaling payload included in an RSP connect message.
 * @param {boolean} dominantSpeaker - whether to enable the Dominant Speaker
 *   protocol or not
 * @param {boolean} networkQuality - whether to enable the Network Quality
 *   protocol or not
 * @param {boolean} trackPriority - whether to enable the Track Priority
 *   protocol or not
 * @param {boolean} trackSwitchOff - whether to enable the Track Switch-Off
 *   protocol or not.
 * @param {boolean} renderHints - whether to enable the renderHints
 *   protocol or not.
 * @returns {object}
 */function createMediaSignalingPayload$1(e,t,r,n,i,a){var o={transports:[{type:"data-channel"}]};return Object.assign(e?{active_speaker:o}:{},t?{network_quality:o}:{},a?{render_hints:o}:{},i?{publisher_hints:o}:{},r?{track_priority:o}:{},n?{track_switch_off:o}:{})}
/**
 * Create {@link VideoTrack.Dimensions} RSP payload.
 * @param {VideoTrack.Dimensions} [dimensions]
 * @returns {object}
 */function createDimensionsPayload(e){return createRSPPayload(e,[{prop:"height",type:"number"},{prop:"width",type:"number"}])}
/**
 * Create {@link VideoRenderDimensions} RSP payload.
 * @param renderDimensions
 * @returns {object}
 */function createRenderDimensionsPayload(e){var t=ne.PRIORITY_HIGH,r=ne.PRIORITY_LOW,n=ne.PRIORITY_STANDARD;return createRSPPayload(e,[{prop:t,type:"object",transform:createDimensionsPayload},{prop:r,type:"object",transform:createDimensionsPayload},{prop:n,type:"object",transform:createDimensionsPayload}])}
/**
 * Create an RSP payload for the given object.
 * @param {object} object - object for which RSP payload is to be generated
 * @param {Array<object>} propConversions - conversion rules for object properties;
 *   they specify how object properties should be converted to their corresponding
 *   RSP payload properties
 * @returns {object}
 */function createRSPPayload(e,t){return t.reduce((function(t,r){var n;var i=r.prop,a=r.type,o=r.payloadProp,c=void 0===o?i:o,s=r.transform,u=void 0===s?function(e){return e}:s;return typeof e[i]===a?Object.assign((n={},n[c]=u(e[i]),n),t):t}),{})}
/**
 * Create the subscribe payload included in an RSP connect/update message.
 * @param {boolean} automaticSubscription - whether to subscribe to all RemoteTracks
 * @returns {object}
 */function createSubscribePayload$1(e){return{rules:[{type:e?"include":"exclude",all:true}],revision:1}}function createMediaWarningsPayload$1(e){var t;var r=(t={},t[oe.recordingMediaLost]="recordings",t);return e.map((function(e){return r[e]})).filter((function(e){return!!e}))}
/**
 * Add random jitter to a given value in the range [-jitter, jitter].
 * @private
 * @param {number} value
 * @param {number} jitter
 * @returns {number} value + random(-jitter, +jitter)
 */function withJitter(e,t){var r=Math.random();return e-t+Math.floor(2*t*r+.5)}
/**
 * Checks if the a number is in the range [min, max].
 * @private
 * @param {num} num
 * @param {number} min
 * @param {number} max
 * @return {boolean}
 */function inRange$1(e,t,r){return t<=e&&e<=r}
/**
 * returns true if given MediaStreamTrack is a screen share track
 * @private
 * @param {MediaStreamTrack} track
 * @returns {boolean}
 */function isChromeScreenShareTrack$1(e){return"chrome"===ie.guessBrowser()&&"video"===e.kind&&"displaySurface"in e.getSettings()}
/**
 * Returns a promise that resolve after timeoutMS have passed.
 * @param {number} timeoutMS - time to wait in milliseconds.
 * @returns {Promise<void>}
 */function waitForSometime$2(e){void 0===e&&(e=10);return new Promise((function(t){return setTimeout(t,e)}))}
/**
 * Returns a promise that resolve after event is received
 * @returns {Promise<void>}
 */function waitForEvent$2(e,t){return new Promise((function(r){e.addEventListener(t,(function onevent(n){e.removeEventListener(t,onevent);r(n)}))}))}Y.constants=te;Y.createBandwidthProfilePayload=createBandwidthProfilePayload$2;Y.createMediaSignalingPayload=createMediaSignalingPayload$1;Y.createMediaWarningsPayload=createMediaWarningsPayload$1;Y.createRoomConnectEventPayload=createRoomConnectEventPayload$1;Y.createSubscribePayload=createSubscribePayload$1;Y.asLocalTrack=asLocalTrack$2;Y.asLocalTrackPublication=asLocalTrackPublication$1;Y.capitalize=capitalize$1;Y.deprecateEvents=deprecateEvents;Y.difference=difference$3;Y.filterObject=filterObject$2;Y.flatMap=flatMap$7;Y.getPlatform=getPlatform$1;Y.getUserAgent=getUserAgent$2;Y.hidePrivateProperties=hidePrivateProperties;Y.hidePrivateAndCertainPublicPropertiesInClass=hidePrivateAndCertainPublicPropertiesInClass$1;Y.isDeepEqual=isDeepEqual$2;Y.isNonArrayObject=isNonArrayObject$3;Y.inRange=inRange$1;Y.makeUUID=makeUUID$2;Y.oncePerTick=oncePerTick$2;Y.promiseFromEvents=promiseFromEvents;Y.getOrNull=getOrNull;Y.defer=defer$6;Y.delegateMethods=delegateMethods$3;Y.proxyProperties=proxyProperties$3;Y.legacyPromise=legacyPromise$2;Y.buildLogLevels=buildLogLevels$8;Y.trackClass=trackClass$1;Y.trackPublicationClass=trackPublicationClass;Y.valueToJSON=valueToJSON$3;Y.withJitter=withJitter;Y.isChromeScreenShareTrack=isChromeScreenShareTrack$1;Y.waitForSometime=waitForSometime$2;Y.waitForEvent=waitForEvent$2;var ce={};var se=U,ue=se.flatMap,le=se.guessBrowser;var de=null;function checkIfSdpSemanticsIsSupported(){if("boolean"===typeof de)return de;if("undefined"===typeof RTCPeerConnection){de=false;return de}try{new RTCPeerConnection({sdpSemantics:"foo"});de=false}catch(e){de=true}return de}var pe=null;function clearChromeCachedSdpFormat(){pe=null}
/**
 * Get Chrome's default SDP format.
 * @returns {'planb'|'unified'}
 */function getChromeDefaultSdpFormat(){if(!pe)if("undefined"!==typeof RTCPeerConnection&&"addTransceiver"in RTCPeerConnection.prototype){var e=new RTCPeerConnection;try{e.addTransceiver("audio");pe="unified"}catch(e){pe="planb"}e.close()}else pe="planb";return pe}
/**
 * Get Chrome's SDP format.
 * @param {'plan-b'|'unified-plan'} [sdpSemantics]
 * @returns {'planb'|'unified'}
 */function getChromeSdpFormat(e){return e&&checkIfSdpSemanticsIsSupported()?{"plan-b":"planb","unified-plan":"unified"}[e]:getChromeDefaultSdpFormat()}
/**
 * Get Safari's default SDP format.
 * @returns {'planb'|'unified'}
 */function getSafariSdpFormat(){return"undefined"!==typeof RTCRtpTransceiver&&"currentDirection"in RTCRtpTransceiver.prototype?"unified":"planb"}
/**
 * Get the browser's default SDP format.
 * @param {'plan-b'|'unified-plan'} [sdpSemantics]
 * @returns {'planb'|'unified'}
 */function getSdpFormat$4(e){return{chrome:getChromeSdpFormat(e),firefox:"unified",safari:getSafariSdpFormat()}[le()]||null}
/**
 * Match a pattern across lines, returning the first capture group for any
 * matches.
 * @param {string} pattern
 * @param {string} lines
 * @returns {Set<string>} matches
 */function getMatches$1(e,t){var r=t.match(new RegExp(e,"gm"))||[];return r.reduce((function(t,r){var n=r.match(new RegExp(e));return n?t.add(n[1]):t}),new Set)}
/**
 * Get a Set of MediaStreamTrack IDs from an SDP.
 * @param {string} pattern
 * @param {string} sdp
 * @returns {Set<string>}
 */function getTrackIds(e,t){return getMatches$1(e,t)}
/**
 * Get a Set of MediaStreamTrack IDs from a Plan B SDP.
 * @param {string} sdp - Plan B SDP
 * @returns {Set<string>} trackIds
 */function getPlanBTrackIds(e){return getTrackIds("^a=ssrc:[0-9]+ +msid:.+ +(.+) *$",e)}
/**
 * Get a Set of MediaStreamTrack IDs from a Unified Plan SDP.
 * @param {string} sdp - Unified Plan SDP
 * @returns {Set<string>} trackIds
 */function getUnifiedPlanTrackIds(e){return getTrackIds("^a=msid:.+ +(.+) *$",e)}
/**
 * Get a Set of SSRCs for a MediaStreamTrack from a Plan B SDP.
 * @param {string} sdp - Plan B SDP
 * @param {string} trackId - MediaStreamTrack ID
 * @returns {Set<string>}
 */function getPlanBSSRCs(e,t){var r="^a=ssrc:([0-9]+) +msid:[^ ]+ +"+t+" *$";return getMatches$1(r,e)}
/**
 * Get the m= sections of a particular kind and direction from an sdp.
 * @param {string} sdp -  sdp string
 * @param {string} [kind] - Pattern for matching kind
 * @param {string} [direction] - Pattern for matching direction
 * @returns {Array<string>} mediaSections
 */function getMediaSections$4(e,t,r){void 0===t&&(t=".*");void 0===r&&(r=".*");return e.split("\r\nm=").slice(1).map((function(e){return"m="+e})).filter((function(e){var n=new RegExp("m="+t,"gm");var i=new RegExp("a="+r,"gm");return n.test(e)&&i.test(e)}))}
/**
 * Get the Set of SSRCs announced in a MediaSection.
 * @param {string} mediaSection
 * @returns {Array<string>} ssrcs
 */function getMediaSectionSSRCs(e){return Array.from(getMatches$1("^a=ssrc:([0-9]+) +.*$",e))}
/**
 * Get a Set of SSRCs for a MediaStreamTrack from a Unified Plan SDP.
 * @param {string} sdp - Unified Plan SDP
 * @param {string} trackId - MediaStreamTrack ID
 * @returns {Set<string>}
 */function getUnifiedPlanSSRCs(e,t){var r=getMediaSections$4(e);var n=new RegExp("^a=msid:[^ ]+ +"+t+" *$","gm");var i=r.filter((function(e){return e.match(n)}));return new Set(ue(i,getMediaSectionSSRCs))}
/**
 * Get a Map from MediaStreamTrack IDs to SSRCs from an SDP.
 * @param {function(string): Set<string>} getTrackIds
 * @param {function(string, string): Set<string>} getSSRCs
 * @param {string} sdp - SDP
 * @returns {Map<string, Set<string>>} trackIdsToSSRCs
 */function getTrackIdsToSSRCs(e,t,r){return new Map(Array.from(e(r)).map((function(e){return[e,t(r,e)]})))}
/**
 * Get a Map from MediaStreamTrack IDs to SSRCs from a Plan B SDP.
 * @param {string} sdp - Plan B SDP
 * @returns {Map<string, Set<string>>} trackIdsToSSRCs
 */function getPlanBTrackIdsToSSRCs(e){return getTrackIdsToSSRCs(getPlanBTrackIds,getPlanBSSRCs,e)}
/**
 * Get a Map from MediaStreamTrack IDs to SSRCs from a Plan B SDP.
 * @param {string} sdp - Plan B SDP
 * @returns {Map<string, Set<string>>} trackIdsToSSRCs
 */function getUnifiedPlanTrackIdsToSSRCs(e){return getTrackIdsToSSRCs(getUnifiedPlanTrackIds,getUnifiedPlanSSRCs,e)}
/**
 * Update the mappings from MediaStreamTrack IDs to SSRCs as indicated by both
 * the Map from MediaStreamTrack IDs to SSRCs and the SDP itself. This method
 * ensures that SSRCs never change once announced.
 * @param {function(string): Map<string, Set<string>>} getTrackIdsToSSRCs
 * @param {Map<string, Set<string>>} trackIdsToSSRCs
 * @param {string} sdp - SDP
 * @returns {strinng} updatedSdp - updated SDP
 */function updateTrackIdsToSSRCs$2(e,t,r){var n=e(r);var i=new Map;n.forEach((function(e,n){if(t.has(n)){var a=Array.from(t.get(n));var o=Array.from(e);a.forEach((function(e,t){var n=o[t];i.set(n,e);var a="^a=ssrc:"+n+" (.*)$";var c="a=ssrc:"+e+" $1";r=r.replace(new RegExp(a,"gm"),c)}))}else t.set(n,e)}));var a="^(a=ssrc-group:[^ ]+ +)(.*)$";var o=r.match(new RegExp(a,"gm"))||[];o.forEach((function(e){var t=e.match(new RegExp(a));if(t){var n=t[1];var o=t[2];var c=o.split(" ").map((function(e){var t=i.get(e);return t||e})).join(" ");r=r.replace(t[0],n+c)}}));return r}
/**
 * Update the mappings from MediaStreamTrack IDs to SSRCs as indicated by both
 * the Map from MediaStreamTrack IDs to SSRCs and the Plan B SDP itself. This
 * method ensures that SSRCs never change once announced.
 * @param {Map<string, Set<string>>} trackIdsToSSRCs
 * @param {string} sdp - Plan B SDP
 * @returns {string} updatedSdp - updated Plan B SDP
 */function updatePlanBTrackIdsToSSRCs$2(e,t){return updateTrackIdsToSSRCs$2(getPlanBTrackIdsToSSRCs,e,t)}
/**
 * Update the mappings from MediaStreamTrack IDs to SSRCs as indicated by both
 * the Map from MediaStreamTrack IDs to SSRCs and the Plan B SDP itself. This
 * method ensures that SSRCs never change once announced.
 * @param {Map<string, Set<string>>} trackIdsToSSRCs
 * @param {string} sdp - Plan B SDP
 * @returns {string} updatedSdp - updated Plan B SDP
 */function updateUnifiedPlanTrackIdsToSSRCs$2(e,t){return updateTrackIdsToSSRCs$2(getUnifiedPlanTrackIdsToSSRCs,e,t)}ce.clearChromeCachedSdpFormat=clearChromeCachedSdpFormat;ce.getSdpFormat=getSdpFormat$4;ce.getMediaSections=getMediaSections$4;ce.getPlanBTrackIds=getPlanBTrackIds;ce.getUnifiedPlanTrackIds=getUnifiedPlanTrackIds;ce.getPlanBSSRCs=getPlanBSSRCs;ce.getUnifiedPlanSSRCs=getUnifiedPlanSSRCs;ce.updatePlanBTrackIdsToSSRCs=updatePlanBTrackIdsToSSRCs$2;ce.updateUnifiedPlanTrackIdsToSSRCs=updateUnifiedPlanTrackIdsToSSRCs$2;var fe={};var ve=fe&&fe.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};var he=U,_e=he.flatMap,me=he.guessBrowser,ge=he.guessBrowserVersion;var ye=ce.getSdpFormat;var be=me();var ke=ge();var Se="chrome"===be;var Te="firefox"===be;var we="safari"===be;var Ce=Se?ke.major:null;var Pe=32767;
/**
 * Get the standardized {@link RTCPeerConnection} statistics.
 * @param {RTCPeerConnection} peerConnection
 * @param {object} [options] - Used for testing
 * @returns {Promise.<StandardizedStatsResponse>}
 */function getStats(e,t){return e&&"function"===typeof e.getStats?_getStats(e,t):Promise.reject(new Error("Given PeerConnection does not support getStats"))}
/**
 * getStats() implementation.
 * @param {RTCPeerConnection} peerConnection
 * @param {object} [options] - Used for testing
 * @returns {Promise.<StandardizedStatsResponse>}
 */function _getStats(e,t){var r=getTracks(e,"audio","local");var n=getTracks(e,"video","local");var i=getTracks(e,"audio");var a=getTracks(e,"video");var o={activeIceCandidatePair:null,localAudioTrackStats:[],localVideoTrackStats:[],remoteAudioTrackStats:[],remoteVideoTrackStats:[]};var c=_e([[r,"localAudioTrackStats",false],[n,"localVideoTrackStats",false],[i,"remoteAudioTrackStats",true],[a,"remoteVideoTrackStats",true]],(function(r){var n=ve(r,3),i=n[0],a=n[1],c=n[2];return i.map((function(r){return getTrackStats(e,r,Object.assign({isRemote:c},t)).then((function(e){e.forEach((function(e){e.trackId=r.id;o[a].push(e)}))}))}))}));return Promise.all(c).then((function(){return getActiveIceCandidatePairStats(e,t)})).then((function(e){o.activeIceCandidatePair=e;return o}))}
/**
 * Generate the {@link StandardizedActiveIceCandidatePairStatsReport} for the
 * {@link RTCPeerConnection}.
 * @param {RTCPeerConnection} peerConnection
 * @param {object} [options]
 * @returns {Promise<StandardizedActiveIceCandidatePairStatsReport>}
 */function getActiveIceCandidatePairStats(e,t){void 0===t&&(t={});return"undefined"!==typeof t.testForChrome||Se||"undefined"!==typeof t.testForSafari||we?e.getStats().then(standardizeChromeOrSafariActiveIceCandidatePairStats):"undefined"!==typeof t.testForFirefox||Te?e.getStats().then(standardizeFirefoxActiveIceCandidatePairStats):Promise.reject(new Error("RTCPeerConnection#getStats() not supported"))}
/**
 * Standardize the active RTCIceCandidate pair's statistics in Chrome or Safari.
 * @param {RTCStatsReport} stats
 * @returns {?StandardizedActiveIceCandidatePairStatsReport}
 */function standardizeChromeOrSafariActiveIceCandidatePairStats(e){var t=Array.from(e.values()).find((function(e){var t=e.nominated,r=e.type;return"candidate-pair"===r&&t}));if(!t)return null;var r=e.get(t.localCandidateId);var n=e.get(t.remoteCandidateId);var i=[{key:"candidateType",type:"string"},{key:"ip",type:"string"},{key:"port",type:"number"},{key:"priority",type:"number"},{key:"protocol",type:"string"},{key:"url",type:"string"}];var a=i.concat([{key:"deleted",type:"boolean"},{key:"relayProtocol",type:"string"}]);var o=r?a.reduce((function(e,t){var n=t.key,i=t.type;e[n]=typeof r[n]===i?r[n]:"deleted"!==n&&null;return e}),{}):null;var c=n?i.reduce((function(e,t){var r=t.key,i=t.type;e[r]=typeof n[r]===i?n[r]:null;return e}),{}):null;return[{key:"availableIncomingBitrate",type:"number"},{key:"availableOutgoingBitrate",type:"number"},{key:"bytesReceived",type:"number"},{key:"bytesSent",type:"number"},{key:"consentRequestsSent",type:"number"},{key:"currentRoundTripTime",type:"number"},{key:"lastPacketReceivedTimestamp",type:"number"},{key:"lastPacketSentTimestamp",type:"number"},{key:"nominated",type:"boolean"},{key:"priority",type:"number"},{key:"readable",type:"boolean"},{key:"requestsReceived",type:"number"},{key:"requestsSent",type:"number"},{key:"responsesReceived",type:"number"},{key:"responsesSent",type:"number"},{key:"retransmissionsReceived",type:"number"},{key:"retransmissionsSent",type:"number"},{key:"state",type:"string",fixup:function(e){return"inprogress"===e?"in-progress":e}},{key:"totalRoundTripTime",type:"number"},{key:"transportId",type:"string"},{key:"writable",type:"boolean"}].reduce((function(e,r){var n=r.key,i=r.type,a=r.fixup;e[n]=typeof t[n]===i?a?a(t[n]):t[n]:null;return e}),{localCandidate:o,remoteCandidate:c})}
/**
 * Standardize the active RTCIceCandidate pair's statistics in Firefox.
 * @param {RTCStatsReport} stats
 * @returns {?StandardizedActiveIceCandidatePairStatsReport}
 */function standardizeFirefoxActiveIceCandidatePairStats(e){var t=Array.from(e.values()).find((function(e){var t=e.nominated,r=e.type;return"candidate-pair"===r&&t}));if(!t)return null;var r=e.get(t.localCandidateId);var n=e.get(t.remoteCandidateId);var i=[{key:"candidateType",type:"string"},{key:"ip",ffKeys:["address","ipAddress"],type:"string"},{key:"port",ffKeys:["portNumber"],type:"number"},{key:"priority",type:"number"},{key:"protocol",ffKeys:["transport"],type:"string"},{key:"url",type:"string"}];var a=i.concat([{key:"deleted",type:"boolean"},{key:"relayProtocol",type:"string"}]);var o={host:"host",peerreflexive:"prflx",relayed:"relay",serverreflexive:"srflx"};var c=r?a.reduce((function(e,t){var n=t.ffKeys,i=t.key,a=t.type;var c=n&&n.find((function(e){return e in r}))||i;e[i]=typeof r[c]===a?"candidateType"===c&&o[r[c]]||r[c]:"deleted"!==c&&null;return e}),{}):null;var s=n?i.reduce((function(e,t){var r=t.ffKeys,i=t.key,a=t.type;var c=r&&r.find((function(e){return e in n}))||i;e[i]=typeof n[c]===a?"candidateType"===c&&o[n[c]]||n[c]:null;return e}),{}):null;return[{key:"availableIncomingBitrate",type:"number"},{key:"availableOutgoingBitrate",type:"number"},{key:"bytesReceived",type:"number"},{key:"bytesSent",type:"number"},{key:"consentRequestsSent",type:"number"},{key:"currentRoundTripTime",type:"number"},{key:"lastPacketReceivedTimestamp",type:"number"},{key:"lastPacketSentTimestamp",type:"number"},{key:"nominated",type:"boolean"},{key:"priority",type:"number"},{key:"readable",type:"boolean"},{key:"requestsReceived",type:"number"},{key:"requestsSent",type:"number"},{key:"responsesReceived",type:"number"},{key:"responsesSent",type:"number"},{key:"retransmissionsReceived",type:"number"},{key:"retransmissionsSent",type:"number"},{key:"state",type:"string"},{key:"totalRoundTripTime",type:"number"},{key:"transportId",type:"string"},{key:"writable",type:"boolean"}].reduce((function(e,r){var n=r.key,i=r.type;e[n]=typeof t[n]===i?t[n]:null;return e}),{localCandidate:c,remoteCandidate:s})}
/**
 * Get local/remote audio/video MediaStreamTracks.
 * @param {RTCPeerConnection} peerConnection - The RTCPeerConnection
 * @param {string} kind - 'audio' or 'video'
 * @param {string} [localOrRemote] - 'local' or 'remote'
 * @returns {Array<MediaStreamTrack>}
 */function getTracks(e,t,r){var n="local"===r?"getSenders":"getReceivers";if(e[n])return e[n]().map((function(e){var t=e.track;return t})).filter((function(e){return e&&e.kind===t}));var i="local"===r?"getLocalStreams":"getRemoteStreams";var a="audio"===t?"getAudioTracks":"getVideoTracks";return _e(e[i](),(function(e){return e[a]()}))}
/**
 * Get the standardized statistics for a particular MediaStreamTrack.
 * @param {RTCPeerConnection} peerConnection
 * @param {MediaStreamTrack} track
 * @param {object} [options] - Used for testing
 * @returns {Promise.<Array<StandardizedTrackStatsReport>>}
 */function getTrackStats(e,t,r){void 0===r&&(r={});return"undefined"!==typeof r.testForChrome||Se?chromeOrSafariGetTrackStats(e,t,r):"undefined"!==typeof r.testForFirefox||Te?firefoxGetTrackStats(e,t,r):"undefined"!==typeof r.testForSafari||we?"undefined"!==typeof r.testForSafari||"unified"===ye()?chromeOrSafariGetTrackStats(e,t,r):Promise.reject(new Error(["getStats() is not supported on this version of Safari","due to this bug: https://bugs.webkit.org/show_bug.cgi?id=192601"].join(" "))):Promise.reject(new Error("RTCPeerConnection#getStats() not supported"))}
/**
 * Get the standardized statistics for a particular MediaStreamTrack in Chrome or Safari.
 * @param {RTCPeerConnection} peerConnection
 * @param {MediaStreamTrack} track
 * @param {object} options - Used for testing
 * @returns {Promise.<Array<StandardizedTrackStatsReport>>}
 */function chromeOrSafariGetTrackStats(e,t,r){return Ce&&Ce<67?new Promise((function(r,n){e.getStats((function(e){r([standardizeChromeLegacyStats(e,t)])}),null,n)})):e.getStats(t).then((function(e){return standardizeChromeOrSafariStats(e,r)}))}
/**
 * Get the standardized statistics for a particular MediaStreamTrack in Firefox.
 * @param {RTCPeerConnection} peerConnection
 * @param {MediaStreamTrack} track
 * @param {object} options
 * @returns {Promise.<Array<StandardizedTrackStatsReport>>}
 */function firefoxGetTrackStats(e,t,r){return e.getStats(t).then((function(e){return[standardizeFirefoxStats(e,r)]}))}
/**
 * Standardize the MediaStreamTrack's legacy statistics in Chrome.
 * @param {RTCStatsResponse} response
 * @param {MediaStreamTrack} track
 * @returns {StandardizedTrackStatsReport}
 */function standardizeChromeLegacyStats(e,t){var r=e.result().find((function(e){return"ssrc"===e.type&&e.stat("googTrackId")===t.id}));var n={};if(r){n.timestamp=Math.round(Number(r.timestamp));n=r.names().reduce((function(e,t){switch(t){case"googCodecName":e.codecName=r.stat(t);break;case"googRtt":e.roundTripTime=Number(r.stat(t));break;case"googJitterReceived":e.jitter=Number(r.stat(t));break;case"googFrameWidthInput":e.frameWidthInput=Number(r.stat(t));break;case"googFrameHeightInput":e.frameHeightInput=Number(r.stat(t));break;case"googFrameWidthSent":e.frameWidthSent=Number(r.stat(t));break;case"googFrameHeightSent":e.frameHeightSent=Number(r.stat(t));break;case"googFrameWidthReceived":e.frameWidthReceived=Number(r.stat(t));break;case"googFrameHeightReceived":e.frameHeightReceived=Number(r.stat(t));break;case"googFrameRateInput":e.frameRateInput=Number(r.stat(t));break;case"googFrameRateSent":e.frameRateSent=Number(r.stat(t));break;case"googFrameRateReceived":e.frameRateReceived=Number(r.stat(t));break;case"ssrc":e[t]=r.stat(t);break;case"bytesReceived":case"bytesSent":case"packetsLost":case"packetsReceived":case"packetsSent":case"audioInputLevel":case"audioOutputLevel":e[t]=Number(r.stat(t));break}return e}),n)}return n}
/**
 * Standardize the MediaStreamTrack's statistics in Chrome or Safari.
 * @param {RTCStatsResponse} response
 * @param {object} options - Used for testing
 * @returns {Array<StandardizedTrackStatsReport>}
 */function standardizeChromeOrSafariStats(e,t){var r=t.simulateExceptionWhileStandardizingStats,n=void 0!==r&&r;if(n)throw new Error("Error while gathering stats");var i=null;var a=[];var o=null;var c=null;var s=null;var u=null;var l=null;e.forEach((function(e){var t=e.type;switch(t){case"inbound-rtp":i=e;break;case"outbound-rtp":a.push(e);break;case"media-source":l=e;break;case"track":s=e;break;case"codec":u=e;break;case"remote-inbound-rtp":o=e;break;case"remote-outbound-rtp":c=e;break}}));var d=s?s.remoteSource:!l;var p=d?[i]:a;var f=[];var v=d?c:o;p.forEach((function(e){var t={};var r=[e,l,s,u,v&&v.ssrc===e.ssrc?v:null];function getStatValue(e){var t=r.find((function(t){return t&&"undefined"!==typeof t[e]}))||null;return t?t[e]:null}var n=getStatValue("ssrc");"number"===typeof n&&(t.ssrc=String(n));var i=getStatValue("timestamp");t.timestamp=Math.round(i);var a=getStatValue("mimeType");if("string"===typeof a){a=a.split("/");t.codecName=a[a.length-1]}var o=getStatValue("roundTripTime");"number"===typeof o&&(t.roundTripTime=Math.round(1e3*o));var c=getStatValue("jitter");"number"===typeof c&&(t.jitter=Math.round(1e3*c));var p=getStatValue("frameWidth");if("number"===typeof p)if(d)t.frameWidthReceived=p;else{t.frameWidthSent=p;t.frameWidthInput=s?s.frameWidth:l.width}var h=getStatValue("frameHeight");if("number"===typeof h)if(d)t.frameHeightReceived=h;else{t.frameHeightSent=h;t.frameHeightInput=s?s.frameHeight:l.height}var _=getStatValue("framesPerSecond");"number"===typeof _&&(t[d?"frameRateReceived":"frameRateSent"]=_);var m=getStatValue("bytesReceived");"number"===typeof m&&(t.bytesReceived=m);var g=getStatValue("bytesSent");"number"===typeof g&&(t.bytesSent=g);var y=getStatValue("packetsLost");"number"===typeof y&&(t.packetsLost=y);var b=getStatValue("packetsReceived");"number"===typeof b&&(t.packetsReceived=b);var k=getStatValue("packetsSent");"number"===typeof k&&(t.packetsSent=k);var S=getStatValue("audioLevel");if("number"===typeof S){S=Math.round(S*Pe);d?t.audioOutputLevel=S:t.audioInputLevel=S}var T=getStatValue("totalPacketSendDelay");"number"===typeof T&&(t.totalPacketSendDelay=T);var w=getStatValue("totalEncodeTime");"number"===typeof w&&(t.totalEncodeTime=w);var C=getStatValue("framesEncoded");"number"===typeof C&&(t.framesEncoded=C);var P=getStatValue("estimatedPlayoutTimestamp");"number"===typeof P&&(t.estimatedPlayoutTimestamp=P);var O=getStatValue("totalDecodeTime");"number"===typeof O&&(t.totalDecodeTime=O);var E=getStatValue("framesDecoded");"number"===typeof E&&(t.framesDecoded=E);var R=getStatValue("jitterBufferDelay");"number"===typeof R&&(t.jitterBufferDelay=R);var L=getStatValue("jitterBufferEmittedCount");"number"===typeof L&&(t.jitterBufferEmittedCount=L);f.push(t)}));return f}
/**
 * Standardize the MediaStreamTrack's statistics in Firefox.
 * @param {RTCStatsReport} response
 * @param {object} options - Used for testing
 * @returns {StandardizedTrackStatsReport}
 */function standardizeFirefoxStats(e,t){void 0===e&&(e=new Map);var r=t.isRemote,n=t.simulateExceptionWhileStandardizingStats,i=void 0!==n&&n;if(i)throw new Error("Error while gathering stats");var a=null;var o=null;e.forEach((function(t){var r=t.isRemote,n=t.remoteId,i=t.type;if(!r)switch(i){case"inbound-rtp":a=t;o=e.get(n);break;case"outbound-rtp":o=t;a=e.get(n);break}}));var c=r?a:o;var s=r?o:a;function getStatValue(e){return c&&"undefined"!==typeof c[e]?c[e]:s&&"undefined"!==typeof s[e]?s[e]:null}var u={};var l=getStatValue("timestamp");u.timestamp=Math.round(l);var d=getStatValue("ssrc");"number"===typeof d&&(u.ssrc=String(d));var p=getStatValue("bytesSent");"number"===typeof p&&(u.bytesSent=p);var f=getStatValue("packetsLost");"number"===typeof f&&(u.packetsLost=f);var v=getStatValue("packetsSent");"number"===typeof v&&(u.packetsSent=v);var h=getStatValue("roundTripTime");"number"===typeof h&&(u.roundTripTime=Math.round(1e3*h));var _=getStatValue("jitter");"number"===typeof _&&(u.jitter=Math.round(1e3*_));var m=getStatValue("framerateMean");"number"===typeof m&&(u.frameRateSent=Math.round(m));var g=getStatValue("bytesReceived");"number"===typeof g&&(u.bytesReceived=g);var y=getStatValue("packetsReceived");"number"===typeof y&&(u.packetsReceived=y);var b=getStatValue("framerateMean");"number"===typeof b&&(u.frameRateReceived=Math.round(b));var k=getStatValue("totalPacketSendDelay");"number"===typeof k&&(u.totalPacketSendDelay=k);var S=getStatValue("totalEncodeTime");"number"===typeof S&&(u.totalEncodeTime=S);var T=getStatValue("framesEncoded");"number"===typeof T&&(u.framesEncoded=T);var w=getStatValue("estimatedPlayoutTimestamp");"number"===typeof w&&(u.estimatedPlayoutTimestamp=w);var C=getStatValue("totalDecodeTime");"number"===typeof C&&(u.totalDecodeTime=C);var P=getStatValue("framesDecoded");"number"===typeof P&&(u.framesDecoded=P);var O=getStatValue("jitterBufferDelay");"number"===typeof O&&(u.jitterBufferDelay=O);var E=getStatValue("jitterBufferEmittedCount");"number"===typeof E&&(u.jitterBufferEmittedCount=E);return u}
/**
 * Standardized RTCIceCandidate statistics.
 * @typedef {object} StandardizedIceCandidateStatsReport
 * @property {'host'|'prflx'|'relay'|'srflx'} candidateType
 * @property {string} ip
 * @property {number} port
 * @property {number} priority
 * @property {'tcp'|'udp'} protocol
 * @property {string} url
 */
/**
 * Standardized local RTCIceCandidate statistics.
 * @typedef {StandardizedIceCandidateStatsReport} StandardizedLocalIceCandidateStatsReport
 * @property {boolean} [deleted=false]
 * @property {'tcp'|'tls'|'udp'} relayProtocol
 */
/**
 * Standardized active RTCIceCandidate pair statistics.
 * @typedef {object} StandardizedActiveIceCandidatePairStatsReport
 * @property {number} availableIncomingBitrate
 * @property {number} availableOutgoingBitrate
 * @property {number} bytesReceived
 * @property {number} bytesSent
 * @property {number} consentRequestsSent
 * @property {number} currentRoundTripTime
 * @property {number} lastPacketReceivedTimestamp
 * @property {number} lastPacketSentTimestamp
 * @property {StandardizedLocalIceCandidateStatsReport} localCandidate
 * @property {boolean} nominated
 * @property {number} priority
 * @property {boolean} readable
 * @property {StandardizedIceCandidateStatsReport} remoteCandidate
 * @property {number} requestsReceived
 * @property {number} requestsSent
 * @property {number} responsesReceived
 * @property {number} responsesSent
 * @property {number} retransmissionsReceived
 * @property {number} retransmissionsSent
 * @property {'frozen'|'waiting'|'in-progress'|'failed'|'succeeded'} state
 * @property {number} totalRoundTripTime
 * @property {string} transportId
 * @property {boolean} writable
 */
/**
 * Standardized {@link RTCPeerConnection} statistics.
 * @typedef {Object} StandardizedStatsResponse
 * @property {StandardizedActiveIceCandidatePairStatsReport} activeIceCandidatePair - Stats for active ICE candidate pair
 * @property Array<StandardizedTrackStatsReport> localAudioTrackStats - Stats for local audio MediaStreamTracks
 * @property Array<StandardizedTrackStatsReport> localVideoTrackStats - Stats for local video MediaStreamTracks
 * @property Array<StandardizedTrackStatsReport> remoteAudioTrackStats - Stats for remote audio MediaStreamTracks
 * @property Array<StandardizedTrackStatsReport> remoteVideoTrackStats - Stats for remote video MediaStreamTracks
 */
/**
 * Standardized MediaStreamTrack statistics.
 * @typedef {Object} StandardizedTrackStatsReport
 * @property {string} trackId - MediaStreamTrack ID
 * @property {string} ssrc - SSRC of the MediaStreamTrack
 * @property {number} timestamp - The Unix timestamp in milliseconds
 * @property {string} [codecName] - Name of the codec used to encode the MediaStreamTrack's media
 * @property {number} [roundTripTime] - Round trip time in milliseconds
 * @property {number} [jitter] - Jitter in milliseconds
 * @property {number} [frameWidthInput] - Width in pixels of the local video MediaStreamTrack's captured frame
 * @property {number} [frameHeightInput] - Height in pixels of the local video MediaStreamTrack's captured frame
 * @property {number} [frameWidthSent] - Width in pixels of the local video MediaStreamTrack's encoded frame
 * @property {number} [frameHeightSent] - Height in pixels of the local video MediaStreamTrack's encoded frame
 * @property {number} [frameWidthReceived] - Width in pixels of the remote video MediaStreamTrack's received frame
 * @property {number} [frameHeightReceived] - Height in pixels of the remote video MediaStreamTrack's received frame
 * @property {number} [frameRateInput] - Captured frames per second of the local video MediaStreamTrack
 * @property {number} [frameRateSent] - Frames per second of the local video MediaStreamTrack's encoded video
 * @property {number} [frameRateReceived] - Frames per second of the remote video MediaStreamTrack's received video
 * @property {number} [bytesReceived] - Number of bytes of the remote MediaStreamTrack's media received
 * @property {number} [bytesSent] - Number of bytes of the local MediaStreamTrack's media sent
 * @property {number} [packetsLost] - Number of packets of the MediaStreamTrack's media lost
 * @property {number} [packetsReceived] - Number of packets of the remote MediaStreamTrack's media received
 * @property {number} [packetsSent] - Number of packets of the local MediaStreamTrack's media sent
 * @property {number} [totalPacketSendDelay] - The total number of seconds that the local MediaStreamTrack's packets
 *  have spent buffered locally before being sent over the network
 * @property {number} [totalEncodeTime] - The total number of seconds spent on encoding the local MediaStreamTrack's frames
 * @property {number} [framesEncoded] - The total number of frames of the local MediaStreamTrack that have been encoded sor far
 * @property {number} [estimatedPlayoutTimestamp] - The estimated playout time of the remote MediaStreamTrack
 * @property {number} [totalDecodeTime] - The total number of seconds spent on decoding the remote MediaStreamTrack's frames
 * @property {number} [framesDecoded] - The total number of frames of the remote MediaStreamTrack that have been decoded sor far
 * @property {number} [jitterBufferDelay] - The sum of the time, in seconds, each audio sample or a video frame of the remote
 *   MediaStreamTrack takes from the time the first packet is received by the jitter buffer to the time it exits the jitter buffer
 * @property {number} [jitterBufferEmittedCount] - The total number of audio samples or video frames that have come out of the jitter buffer
 * @property {AudioLevel} [audioInputLevel] - The {@link AudioLevel} of the local audio MediaStreamTrack
 * @property {AudioLevel} [audioOutputLevel] - The {@link AudioLevel} of the remote video MediaStreamTrack
 */fe=getStats;var Oe=fe;var Ee={};
/**
 * This function is very similar to <code>navigator.mediaDevices.getUserMedia</code>
 * except that if no MediaStreamConstraints are provided, then bot audio and video
 * are requested.
 * @function getUserMedia
 * @param {MediaStreamConstraints} [constraints={audio:true,video:true}] - the
 *   MediaStreamConstraints object specifying what kind of MediaStream to
 *   request from the browser (by default both audio and video)
 * @returns Promise<MediaStream>
 */function getUserMedia$2(e){void 0===e&&(e={audio:true,video:true});return"object"===typeof navigator&&"object"===typeof navigator.mediaDevices&&"function"===typeof navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia(e):Promise.reject(new Error("getUserMedia is not supported"))}Ee=getUserMedia$2;var Re=Ee;var Le={};Le="function"===typeof MediaStream?MediaStream:function MediaStream(){throw new Error("MediaStream is not supported")};var Me=Le;var Ie={};Ie="function"===typeof MediaStreamTrack?MediaStreamTrack:function MediaStreamTrack(){throw new Error("MediaStreamTrack is not supported")};var je=Ie;var Ae={};Ae="function"===typeof RTCIceCandidate?RTCIceCandidate:function RTCIceCandidate(){throw new Error("RTCIceCandidate is not supported")};var De=Ae;var xe={};var Ve=function(){function ChromeRTCSessionDescription(e){this.descriptionInitDict=e;var t=e&&"rollback"===e.type?null:new RTCSessionDescription(e);Object.defineProperties(this,{_description:{get:function(){return t}}})}Object.defineProperty(ChromeRTCSessionDescription.prototype,"sdp",{get:function(){return this._description?this._description.sdp:this.descriptionInitDict.sdp},enumerable:false,configurable:true});Object.defineProperty(ChromeRTCSessionDescription.prototype,"type",{get:function(){return this._description?this._description.type:this.descriptionInitDict.type},enumerable:false,configurable:true});return ChromeRTCSessionDescription}();xe=Ve;var Ne=xe;var Fe="default"in e?e.default:e;var Be={};var Ue=Be&&Be.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};var $e=Be&&Be.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};var He=Fe.EventEmitter;var We=function(){function EventTarget(){Object.defineProperties(this,{_eventEmitter:{value:new He}})}EventTarget.prototype.dispatchEvent=function(e){return this._eventEmitter.emit(e.type,e)};EventTarget.prototype.addEventListener=function(){var e;return(e=this._eventEmitter).addListener.apply(e,$e([],Ue(arguments)))};EventTarget.prototype.removeEventListener=function(){var e;return(e=this._eventEmitter).removeListener.apply(e,$e([],Ue(arguments)))};return EventTarget}();Be=We;var Qe=Be;var qe={};var ze=U.defer;var Ge={high:new Set(["low"]),low:new Set(["high"])};
/**
 * Construct a {@link Latch}.
 * @class
 * @classdesc A {@link Latch} has two states ("high" and "low") and methods for
 * transitioning between them ({@link Latch#raise} and {@link Latch#lower}).
 * @param {string} [initialState="low"] - either "high" or "low"
 */var Ke=function(){function Latch(e){void 0===e&&(e="low");var t=e;Object.defineProperties(this,{_state:{set:function(e){var r=this;if(t!==e){t=e;var n=this._whenDeferreds.get(t);n.forEach((function(e){return e.resolve(r)}));n.clear()}},get:function(){return t}},_whenDeferreds:{value:new Map([["high",new Set],["low",new Set]])}})}Object.defineProperty(Latch.prototype,"state",{get:function(){return this._state},enumerable:false,configurable:true});
/**
   * Transition to "low".
   * @returns {this}
   * @throws {Error}
   */Latch.prototype.lower=function(){return this.transition("low")};
/**
   * Transition to "high".
   * @returns {this}
   * @throws {Error}
   */Latch.prototype.raise=function(){return this.transition("high")};
/**
   * Transition to a new state.
   * @param {string} newState
   * @returns {this}
   * @throws {Error}
   */Latch.prototype.transition=function(e){if(!Ge[this.state].has(e))throw createUnreachableStateError(this.state,e);this._state=e;return this};
/**
   * Return a Promise that resolves when the {@link Latch} transitions to
   * the specified state.
   * @param {string} state
   * @returns {Promise<this>}
   */Latch.prototype.when=function(e){if(this.state===e)return Promise.resolve(this);if(!Ge[this.state].has(e))return Promise.reject(createUnreachableStateError(this.state,e));var t=ze();this._whenDeferreds.get(e).add(t);return t.promise};return Latch}();
/**
   * Create an unreachable state Error.
   * @param {string} from - state to be transitioned from
   * @param {string} to - state to be transitioned to
   * @return {Error}
   */function createUnreachableStateError(e,t){return new Error('Cannot transition from "'+e+'" to "'+t+'"')}qe=Ke;var Je=qe;var Ye={};
/**
 * RTCRtpSender shim.
 * @param {MediaStreamTrack} track
 * @property {MediaStreamTrack} track
 */var Xe=function(){function RTCRtpSenderShim(e){Object.defineProperties(this,{track:{enumerable:true,value:e,writable:true}})}return RTCRtpSenderShim}();Ye=Xe;var Ze=Ye;var et={};var tt=et&&et.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var rt=et&&et.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};var nt=et&&et.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};var it=Ne;var at=Qe;var ot=Je;var ct=Me;var st=Ze;var ut=ce,lt=ut.getSdpFormat,dt=ut.updatePlanBTrackIdsToSSRCs,pt=ut.updateUnifiedPlanTrackIdsToSSRCs;var ft=U,vt=ft.delegateMethods,ht=ft.interceptEvent,_t=ft.isIOSChrome,mt=ft.legacyPromise,gt=ft.proxyProperties;var yt="unified"===lt();var bt=function(e){tt(ChromeRTCPeerConnection,e);function ChromeRTCPeerConnection(t,r){void 0===t&&(t={});var n=e.call(this)||this;var i=Object.assign(t.iceTransportPolicy?{iceTransports:t.iceTransportPolicy}:{},t);ht(n,"datachannel");ht(n,"signalingstatechange");var a=lt(i.sdpSemantics);var o=new RTCPeerConnection(i,r);Object.defineProperties(n,{_appliedTracksToSSRCs:{value:new Map,writable:true},_localStream:{value:new ct},_peerConnection:{value:o},_pendingLocalOffer:{value:null,writable:true},_pendingRemoteOffer:{value:null,writable:true},_rolledBackTracksToSSRCs:{value:new Map,writable:true},_sdpFormat:{value:a},_senders:{value:new Map},_signalingStateLatch:{value:new ot},_tracksToSSRCs:{value:new Map,writable:true}});o.addEventListener("datachannel",(function(e){shimDataChannel$1(e.channel);n.dispatchEvent(e)}));o.addEventListener("signalingstatechange",(function(){var e=[];for(var t=0;t<arguments.length;t++)e[t]=arguments[t];"stable"===o.signalingState&&(n._appliedTracksToSSRCs=new Map(n._tracksToSSRCs));n._pendingLocalOffer||n._pendingRemoteOffer||n.dispatchEvent.apply(n,nt([],rt(e)))}));o.ontrack=function(){};"function"!==typeof o.addTrack&&o.addStream(n._localStream);gt(RTCPeerConnection.prototype,n,o);return n}Object.defineProperty(ChromeRTCPeerConnection.prototype,"localDescription",{get:function(){return this._pendingLocalOffer?this._pendingLocalOffer:this._peerConnection.localDescription},enumerable:false,configurable:true});Object.defineProperty(ChromeRTCPeerConnection.prototype,"remoteDescription",{get:function(){return this._pendingRemoteOffer?this._pendingRemoteOffer:this._peerConnection.remoteDescription},enumerable:false,configurable:true});Object.defineProperty(ChromeRTCPeerConnection.prototype,"signalingState",{get:function(){return this._pendingLocalOffer?"have-local-offer":this._pendingRemoteOffer?"have-remote-offer":this._peerConnection.signalingState},enumerable:false,configurable:true});ChromeRTCPeerConnection.prototype.addTrack=function(e){var t;var r=[];for(var n=1;n<arguments.length;n++)r[n-1]=arguments[n];if("function"===typeof this._peerConnection.addTrack)return(t=this._peerConnection).addTrack.apply(t,nt([e],rt(r)));if("closed"===this._peerConnection.signalingState)throw new Error("Cannot add MediaStreamTrack ["+e.id+", \n        "+e.kind+"]: RTCPeerConnection is closed");var i=this._senders.get(e);if(i&&i.track)throw new Error("Cannot add MediaStreamTrack ['"+e.id+", \n        "+e.kind+"]: RTCPeerConnection already has it");this._peerConnection.removeStream(this._localStream);this._localStream.addTrack(e);this._peerConnection.addStream(this._localStream);i=new st(e);this._senders.set(e,i);return i};ChromeRTCPeerConnection.prototype.removeTrack=function(e){if("closed"===this._peerConnection.signalingState)throw new Error("Cannot remove MediaStreamTrack: RTCPeerConnection is closed");if("function"===typeof this._peerConnection.addTrack)try{return this._peerConnection.removeTrack(e)}catch(e){}else{var t=e.track;if(!t)return;e=this._senders.get(t);if(e&&e.track){e.track=null;this._peerConnection.removeStream(this._localStream);this._localStream.removeTrack(t);this._peerConnection.addStream(this._localStream)}}};ChromeRTCPeerConnection.prototype.getSenders=function(){return"function"===typeof this._peerConnection.addTrack?this._peerConnection.getSenders():Array.from(this._senders.values())};ChromeRTCPeerConnection.prototype.addIceCandidate=function(e){var t=this;var r=[];for(var n=1;n<arguments.length;n++)r[n-1]=arguments[n];var i;i="have-remote-offer"===this.signalingState?this._signalingStateLatch.when("low").then((function(){return t._peerConnection.addIceCandidate(e)})):this._peerConnection.addIceCandidate(e);return r.length>0?mt.apply(void 0,nt([i],rt(r))):i};ChromeRTCPeerConnection.prototype.close=function(){if("closed"!==this.signalingState){this._pendingLocalOffer=null;this._pendingRemoteOffer=null;this._peerConnection.close()}};ChromeRTCPeerConnection.prototype.createAnswer=function(){var e=this;var t=[];for(var r=0;r<arguments.length;r++)t[r]=arguments[r];var n;n=this._pendingRemoteOffer?this._peerConnection.setRemoteDescription(this._pendingRemoteOffer).then((function(){e._signalingStateLatch.lower();return e._peerConnection.createAnswer()})).then((function(t){e._pendingRemoteOffer=null;e._rolledBackTracksToSSRCs.clear();return new it({type:"answer",sdp:updateTrackIdsToSSRCs$1(e._sdpFormat,e._tracksToSSRCs,t.sdp)})}),(function(t){e._pendingRemoteOffer=null;throw t})):this._peerConnection.createAnswer().then((function(t){e._rolledBackTracksToSSRCs.clear();return new it({type:"answer",sdp:updateTrackIdsToSSRCs$1(e._sdpFormat,e._tracksToSSRCs,t.sdp)})}));return t.length>1?mt.apply(void 0,nt([n],rt(t))):n};ChromeRTCPeerConnection.prototype.createOffer=function(){var e=this;var t=[];for(var r=0;r<arguments.length;r++)t[r]=arguments[r];var n=rt(t,3),i=n[0],a=n[1],o=n[2];var c=o||i||{};if(_t()){if(c.offerToReceiveVideo&&!this._audioTransceiver&&!(yt&&hasReceiversForTracksOfKind$1(this,"audio"))){delete c.offerToReceiveAudio;try{this._audioTransceiver=yt?this.addTransceiver("audio",{direction:"recvonly"}):this.addTransceiver("audio")}catch(e){return Promise.reject(e)}}if(c.offerToReceiveVideo&&!this._videoTransceiver&&!(yt&&hasReceiversForTracksOfKind$1(this,"video"))){delete c.offerToReceiveVideo;try{this._videoTransceiver=yt?this.addTransceiver("video",{direction:"recvonly"}):this.addTransceiver("video")}catch(e){return Promise.reject(e)}}}var s=this._peerConnection.createOffer(c).then((function(t){e._rolledBackTracksToSSRCs.clear();return new it({type:t.type,sdp:updateTrackIdsToSSRCs$1(e._sdpFormat,e._tracksToSSRCs,t.sdp)})}));return t.length>1?mt(s,i,a):s};ChromeRTCPeerConnection.prototype.createDataChannel=function(e,t){t=shimDataChannelInit(t);var r=this._peerConnection.createDataChannel(e,t);shimDataChannel$1(r);return r};ChromeRTCPeerConnection.prototype.setLocalDescription=function(){var e=[];for(var t=0;t<arguments.length;t++)e[t]=arguments[t];var r=rt(e,3),n=r[0],i=r[1],a=r[2];if(this._rolledBackTracksToSSRCs.size>0){this._tracksToSSRCs=new Map(this._rolledBackTracksToSSRCs);this._rolledBackTracksToSSRCs.clear()}var o=setDescription$1(this,true,n);return e.length>1?mt(o,i,a):o};ChromeRTCPeerConnection.prototype.setRemoteDescription=function(){var e=[];for(var t=0;t<arguments.length;t++)e[t]=arguments[t];var r=rt(e,3),n=r[0],i=r[1],a=r[2];this._rolledBackTracksToSSRCs.clear();var o=setDescription$1(this,false,n);return e.length>1?mt(o,i,a):o};return ChromeRTCPeerConnection}(at);vt(RTCPeerConnection.prototype,bt.prototype,"_peerConnection");function setDescription$1(e,t,r){function setPendingLocalOffer(r){t?e._pendingLocalOffer=r:e._pendingRemoteOffer=r}function clearPendingLocalOffer(){t?e._pendingLocalOffer=null:e._pendingRemoteOffer=null}var n=t?e._pendingLocalOffer:e._pendingRemoteOffer;var i=t?e._pendingRemoteOffer:e._pendingLocalOffer;var a=t?"have-local-offer":"have-remote-offer";var o=t?"setLocalDescription":"setRemoteDescription";var c;if(!t&&i&&"answer"===r.type)c=setRemoteAnswer$1(e,r);else if("offer"===r.type){if(e.signalingState!==a&&"stable"!==e.signalingState)return Promise.reject(new Error("Cannot set "+(t?"local":"remote")+" offer in state "+e.signalingState));n||"low"!==e._signalingStateLatch.state||e._signalingStateLatch.raise();var s=e.signalingState;setPendingLocalOffer(unwrap(r));c=Promise.resolve();e.signalingState!==s&&c.then((function(){return e.dispatchEvent(new Event("signalingstatechange"))}))}else if("rollback"===r.type)if(e.signalingState!==a)c=Promise.reject(new Error("Cannot rollback "+(t?"local":"remote")+" description in "+e.signalingState));else{clearPendingLocalOffer();e._rolledBackTracksToSSRCs=new Map(e._tracksToSSRCs);e._tracksToSSRCs=new Map(e._appliedTracksToSSRCs);c=Promise.resolve();c.then((function(){return e.dispatchEvent(new Event("signalingstatechange"))}))}return c||e._peerConnection[o](unwrap(r))}function setRemoteAnswer$1(e,t){var r=e._pendingLocalOffer;return e._peerConnection.setLocalDescription(r).then((function(){e._pendingLocalOffer=null;return e.setRemoteDescription(t)})).then((function(){e._signalingStateLatch.lower()}))}
/**
 * Whether a ChromeRTCPeerConnection has any RTCRtpReceivers(s) for the given
 * MediaStreamTrack kind.
 * @param {ChromeRTCPeerConnection} peerConnection
 * @param {'audio' | 'video'} kind
 * @returns {boolean}
 */function hasReceiversForTracksOfKind$1(e,t){return!!e.getTransceivers().find((function(e){var r=e.receiver,n=void 0===r?{}:r;var i=n.track,a=void 0===i?{}:i;return a.kind===t}))}function unwrap(e){return e instanceof it&&e._description?e._description:new RTCSessionDescription(e)}
/**
 * Check whether or not we need to apply our maxPacketLifeTime shim. We are
 * pretty conservative: we'll only apply it if the legacy maxRetransmitTime
 * property is available _and_ the standard maxPacketLifeTime property is _not_
 * available (the thinking being that Chrome will land the standards-compliant
 * property).
 * @returns {boolean}
 */function needsMaxPacketLifeTimeShim(){return"maxRetransmitTime"in RTCDataChannel.prototype&&!("maxPacketLifeTime"in RTCDataChannel.prototype)}
/**
 * Shim an RTCDataChannelInit dictionary (if necessary). This function returns
 * a copy of the original RTCDataChannelInit.
 * @param {RTCDataChannelInit} dataChannelDict
 * @returns {RTCDataChannelInit}
 */function shimDataChannelInit(e){e=Object.assign({},e);needsMaxPacketLifeTimeShim()&&"maxPacketLifeTime"in e&&(e.maxRetransmitTime=e.maxPacketLifeTime);return e}
/**
 * Shim an RTCDataChannel (if necessary). This function mutates the
 * RTCDataChannel.
 * @param {RTCDataChannel} dataChannel
 * @returns {RTCDataChannel}
 */function shimDataChannel$1(e){Object.defineProperty(e,"maxRetransmits",{value:65535===e.maxRetransmits?null:e.maxRetransmits});needsMaxPacketLifeTimeShim()&&Object.defineProperty(e,"maxPacketLifeTime",{value:65535===e.maxRetransmitTime?null:e.maxRetransmitTime});return e}
/**
 * Update the mappings from MediaStreamTrack IDs to SSRCs as indicated by both
 * the Map from MediaStreamTrack IDs to SSRCs and the SDP itself. This method
 * ensures that SSRCs never change once announced.
 * @param {'planb'|'unified'} sdpFormat
 * @param {Map<string, Set<string>>} tracksToSSRCs
 * @param {string} sdp - an SDP whose format is determined by `sdpSemantics`
 * @returns {string} updatedSdp - updated SDP
 */function updateTrackIdsToSSRCs$1(e,t,r){return"unified"===e?pt(t,r):dt(t,r)}et=bt;var kt=et;var St={};St=RTCSessionDescription;var Tt=St;var wt={};var Ct=wt&&wt.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Pt=wt&&wt.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};var Ot=wt&&wt.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};var Et=Qe;var Rt=Tt;var Lt=ce.updateUnifiedPlanTrackIdsToSSRCs;var Mt=U,It=Mt.delegateMethods,jt=Mt.interceptEvent,At=Mt.legacyPromise,Dt=Mt.proxyProperties;var xt=function(e){Ct(FirefoxRTCPeerConnection,e);function FirefoxRTCPeerConnection(t){var r=e.call(this)||this;jt(r,"signalingstatechange");var n=new RTCPeerConnection(t);Object.defineProperties(r,{_initiallyNegotiatedDtlsRole:{value:null,writable:true},_isClosed:{value:false,writable:true},_peerConnection:{value:n},_rollingBack:{value:false,writable:true},_tracksToSSRCs:{value:new Map},peerIdentity:{enumerable:true,value:Promise.resolve({idp:"",name:""})}});var i;n.addEventListener("signalingstatechange",(function(){var e=[];for(var t=0;t<arguments.length;t++)e[t]=arguments[t];if(!r._rollingBack&&r.signalingState!==i){i=r.signalingState;r._isClosed?setTimeout((function(){return r.dispatchEvent.apply(r,Ot([],Pt(e)))})):r.dispatchEvent.apply(r,Ot([],Pt(e)))}}));Dt(RTCPeerConnection.prototype,r,n);return r}Object.defineProperty(FirefoxRTCPeerConnection.prototype,"iceGatheringState",{get:function(){return this._isClosed?"complete":this._peerConnection.iceGatheringState},enumerable:false,configurable:true});Object.defineProperty(FirefoxRTCPeerConnection.prototype,"localDescription",{get:function(){return overwriteWithInitiallyNegotiatedDtlsRole(this._peerConnection.localDescription,this._initiallyNegotiatedDtlsRole)},enumerable:false,configurable:true});Object.defineProperty(FirefoxRTCPeerConnection.prototype,"signalingState",{get:function(){return this._isClosed?"closed":this._peerConnection.signalingState},enumerable:false,configurable:true});FirefoxRTCPeerConnection.prototype.createAnswer=function(){var e=this;var t=[];for(var r=0;r<arguments.length;r++)t[r]=arguments[r];var n;n=this._peerConnection.createAnswer().then((function(t){saveInitiallyNegotiatedDtlsRole(e,t);return overwriteWithInitiallyNegotiatedDtlsRole(t,e._initiallyNegotiatedDtlsRole)}));return"function"===typeof t[0]?At.apply(void 0,Ot([n],Pt(t))):n};FirefoxRTCPeerConnection.prototype.createOffer=function(){var e=this;var t=[];for(var r=0;r<arguments.length;r++)t[r]=arguments[r];var n=Pt(t,3),i=n[0],a=n[1],o=n[2];var c=o||i||{};var s;if("have-local-offer"===this.signalingState||"have-remote-offer"===this.signalingState){var u="have-local-offer"===this.signalingState;s=rollback(this,u,(function(){return e.createOffer(c)}))}else s=this._peerConnection.createOffer(c);s=s.then((function(t){return new Rt({type:t.type,sdp:Lt(e._tracksToSSRCs,t.sdp)})}));return t.length>1?At(s,i,a):s};FirefoxRTCPeerConnection.prototype.setLocalDescription=function(){var e;var t=[];for(var r=0;r<arguments.length;r++)t[r]=arguments[r];var n=Pt(t),i=n[0],a=n.slice(1);var o;i&&"answer"===i.type&&"have-local-offer"===this.signalingState&&(o=Promise.reject(new Error("Cannot set local answer in state have-local-offer")));return o?t.length>1?At.apply(void 0,Ot([o],Pt(a))):o:(e=this._peerConnection).setLocalDescription.apply(e,Ot([],Pt(t)))};FirefoxRTCPeerConnection.prototype.setRemoteDescription=function(){var e=this;var t=[];for(var r=0;r<arguments.length;r++)t[r]=arguments[r];var n=Pt(t),i=n[0],a=n.slice(1);var o;i&&"have-remote-offer"===this.signalingState&&("answer"===i.type?o=Promise.reject(new Error("Cannot set remote answer in state have-remote-offer")):"offer"===i.type&&(o=rollback(this,false,(function(){return e._peerConnection.setRemoteDescription(i)}))));o||(o=this._peerConnection.setRemoteDescription(i));o=o.then((function(){return saveInitiallyNegotiatedDtlsRole(e,i,true)}));return t.length>1?At.apply(void 0,Ot([o],Pt(a))):o};FirefoxRTCPeerConnection.prototype.close=function(){if("closed"!==this.signalingState){this._isClosed=true;this._peerConnection.close()}};return FirefoxRTCPeerConnection}(Et);It(RTCPeerConnection.prototype,xt.prototype,"_peerConnection");function rollback(e,t,r){var n=t?"setLocalDescription":"setRemoteDescription";e._rollingBack=true;return e._peerConnection[n](new Rt({type:"rollback"})).then(r).then((function(t){e._rollingBack=false;return t}),(function(t){e._rollingBack=false;throw t}))}
/**
 * Extract the initially negotiated DTLS role out of an RTCSessionDescription's
 * sdp property and save it on the FirefoxRTCPeerConnection if and only if
 *
 *   1. A DTLS role was not already saved on the FirefoxRTCPeerConnection, and
 *   2. The description is an answer.
 *
 * @private
 * @param {FirefoxRTCPeerConnection} peerConnection
 * @param {RTCSessionDescription} description
 * @param {boolean} [remote=false] - if true, save the inverse of the DTLS role,
 *   e.g. "active" instead of "passive" and vice versa
 * @returns {undefined}
 */function saveInitiallyNegotiatedDtlsRole(e,t,r){if(!e._initiallyNegotiatedDtlsRole&&"offer"!==t.type){var n=t.sdp.match(/a=setup:([a-z]+)/);if(n){var i=n[1];e._initiallyNegotiatedDtlsRole=r?{active:"passive",passive:"active"}[i]:i}}}
/**
 * Overwrite the DTLS role in the sdp property of an RTCSessionDescription if
 * and only if
 *
 *   1. The description is an answer, and
 *   2. A DTLS role is provided.
 *
 * @private
 * @param {RTCSessionDescription} [description]
 * @param {string} [dtlsRole] - one of "active" or "passive"
 * @returns {?RTCSessionDescription} description
 */function overwriteWithInitiallyNegotiatedDtlsRole(e,t){return e&&"answer"===e.type&&t?new Rt({type:e.type,sdp:e.sdp.replace(/a=setup:[a-z]+/g,"a=setup:"+t)}):e}wt=xt;var Vt=wt;var Nt={};var Ft=Nt&&Nt.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Bt=Nt&&Nt.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};var Ut=Nt&&Nt.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};var $t=Qe;var Ht=Je;var Wt=ce,Qt=Wt.getSdpFormat,qt=Wt.updatePlanBTrackIdsToSSRCs,zt=Wt.updateUnifiedPlanTrackIdsToSSRCs;var Gt=U,Kt=Gt.delegateMethods,Jt=Gt.interceptEvent,Yt=Gt.proxyProperties;var Xt="unified"===Qt();var Zt=Xt?zt:qt;var er=function(e){Ft(SafariRTCPeerConnection,e);function SafariRTCPeerConnection(t){var r=e.call(this)||this;Jt(r,"datachannel");Jt(r,"iceconnectionstatechange");Jt(r,"signalingstatechange");Jt(r,"track");var n=new RTCPeerConnection(t);Object.defineProperties(r,{_appliedTracksToSSRCs:{value:new Map,writable:true},_audioTransceiver:{value:null,writable:true},_isClosed:{value:false,writable:true},_peerConnection:{value:n},_pendingLocalOffer:{value:null,writable:true},_pendingRemoteOffer:{value:null,writable:true},_rolledBackTracksToSSRCs:{value:new Map,writable:true},_signalingStateLatch:{value:new Ht},_tracksToSSRCs:{value:new Map,writable:true},_videoTransceiver:{value:null,writable:true}});n.addEventListener("datachannel",(function(e){shimDataChannel(e.channel);r.dispatchEvent(e)}));n.addEventListener("iceconnectionstatechange",(function(){var e=[];for(var t=0;t<arguments.length;t++)e[t]=arguments[t];r._isClosed||r.dispatchEvent.apply(r,Ut([],Bt(e)))}));n.addEventListener("signalingstatechange",(function(){var e=[];for(var t=0;t<arguments.length;t++)e[t]=arguments[t];if(!r._isClosed){"stable"===n.signalingState&&(r._appliedTracksToSSRCs=new Map(r._tracksToSSRCs));r._pendingLocalOffer||r._pendingRemoteOffer||r.dispatchEvent.apply(r,Ut([],Bt(e)))}}));n.addEventListener("track",(function(e){r._pendingRemoteOffer=null;r.dispatchEvent(e)}));Yt(RTCPeerConnection.prototype,r,n);return r}Object.defineProperty(SafariRTCPeerConnection.prototype,"localDescription",{get:function(){return this._pendingLocalOffer||this._peerConnection.localDescription},enumerable:false,configurable:true});Object.defineProperty(SafariRTCPeerConnection.prototype,"iceConnectionState",{get:function(){return this._isClosed?"closed":this._peerConnection.iceConnectionState},enumerable:false,configurable:true});Object.defineProperty(SafariRTCPeerConnection.prototype,"iceGatheringState",{get:function(){return this._isClosed?"complete":this._peerConnection.iceGatheringState},enumerable:false,configurable:true});Object.defineProperty(SafariRTCPeerConnection.prototype,"remoteDescription",{get:function(){return this._pendingRemoteOffer||this._peerConnection.remoteDescription},enumerable:false,configurable:true});Object.defineProperty(SafariRTCPeerConnection.prototype,"signalingState",{get:function(){return this._isClosed?"closed":this._pendingLocalOffer?"have-local-offer":this._pendingRemoteOffer?"have-remote-offer":this._peerConnection.signalingState},enumerable:false,configurable:true});SafariRTCPeerConnection.prototype.addIceCandidate=function(e){var t=this;return"have-remote-offer"===this.signalingState?this._signalingStateLatch.when("low").then((function(){return t._peerConnection.addIceCandidate(e)})):this._peerConnection.addIceCandidate(e)};SafariRTCPeerConnection.prototype.createOffer=function(e){var t=this;e=Object.assign({},e);if(e.offerToReceiveVideo&&!this._audioTransceiver&&!(Xt&&hasReceiversForTracksOfKind(this,"audio"))){delete e.offerToReceiveAudio;try{this._audioTransceiver=Xt?this.addTransceiver("audio",{direction:"recvonly"}):this.addTransceiver("audio")}catch(e){return Promise.reject(e)}}if(e.offerToReceiveVideo&&!this._videoTransceiver&&!(Xt&&hasReceiversForTracksOfKind(this,"video"))){delete e.offerToReceiveVideo;try{this._videoTransceiver=Xt?this.addTransceiver("video",{direction:"recvonly"}):this.addTransceiver("video")}catch(e){return Promise.reject(e)}}return this._peerConnection.createOffer(e).then((function(e){t._rolledBackTracksToSSRCs.clear();return new RTCSessionDescription({type:e.type,sdp:Zt(t._tracksToSSRCs,e.sdp)})}))};SafariRTCPeerConnection.prototype.createAnswer=function(e){var t=this;return this._pendingRemoteOffer?this._peerConnection.setRemoteDescription(this._pendingRemoteOffer).then((function(){t._signalingStateLatch.lower();return t._peerConnection.createAnswer()})).then((function(e){t._pendingRemoteOffer=null;t._rolledBackTracksToSSRCs.clear();return Xt?new RTCSessionDescription({type:e.type,sdp:Zt(t._tracksToSSRCs,e.sdp)}):e}),(function(e){t._pendingRemoteOffer=null;throw e})):this._peerConnection.createAnswer(e).then((function(e){t._rolledBackTracksToSSRCs.clear();return Xt?new RTCSessionDescription({type:e.type,sdp:Zt(t._tracksToSSRCs,e.sdp)}):e}))};SafariRTCPeerConnection.prototype.createDataChannel=function(e,t){var r=this._peerConnection.createDataChannel(e,t);shimDataChannel(r);return r};SafariRTCPeerConnection.prototype.removeTrack=function(e){e.replaceTrack(null);this._peerConnection.removeTrack(e)};SafariRTCPeerConnection.prototype.setLocalDescription=function(e){if(this._rolledBackTracksToSSRCs.size>0){this._tracksToSSRCs=new Map(this._rolledBackTracksToSSRCs);this._rolledBackTracksToSSRCs.clear()}return setDescription(this,true,e)};SafariRTCPeerConnection.prototype.setRemoteDescription=function(e){this._rolledBackTracksToSSRCs.clear();return setDescription(this,false,e)};SafariRTCPeerConnection.prototype.close=function(){var e=this;if(!this._isClosed){this._isClosed=true;this._peerConnection.close();setTimeout((function(){e.dispatchEvent(new Event("iceconnectionstatechange"));e.dispatchEvent(new Event("signalingstatechange"))}))}};return SafariRTCPeerConnection}($t);Kt(RTCPeerConnection.prototype,er.prototype,"_peerConnection");function setDescription(e,t,r){function setPendingLocalOffer(r){t?e._pendingLocalOffer=r:e._pendingRemoteOffer=r}function clearPendingLocalOffer(){t?e._pendingLocalOffer=null:e._pendingRemoteOffer=null}var n=t?e._pendingLocalOffer:e._pendingRemoteOffer;var i=t?e._pendingRemoteOffer:e._pendingLocalOffer;var a=t?"have-local-offer":"have-remote-offer";var o=t?"setLocalDescription":"setRemoteDescription";if(!t&&i&&"answer"===r.type)return setRemoteAnswer(e,r);if("offer"===r.type){if(e.signalingState!==a&&"stable"!==e.signalingState)return Promise.reject(new Error("Cannot set "+(t?"local":"remote")+"\n        offer in state "+e.signalingState));n||"low"!==e._signalingStateLatch.state||e._signalingStateLatch.raise();var c=e.signalingState;setPendingLocalOffer(r);return e.signalingState!==c?Promise.resolve().then((function(){return e.dispatchEvent(new Event("signalingstatechange"))})):Promise.resolve()}if("rollback"===r.type){if(e.signalingState!==a)return Promise.reject(new Error("Cannot rollback \n        "+(t?"local":"remote")+" description in "+e.signalingState));clearPendingLocalOffer();e._rolledBackTracksToSSRCs=new Map(e._tracksToSSRCs);e._tracksToSSRCs=new Map(e._appliedTracksToSSRCs);return Promise.resolve().then((function(){return e.dispatchEvent(new Event("signalingstatechange"))}))}return e._peerConnection[o](r)}function setRemoteAnswer(e,t){var r=e._pendingLocalOffer;return e._peerConnection.setLocalDescription(r).then((function(){e._pendingLocalOffer=null;return e.setRemoteDescription(t)})).then((function(){return e._signalingStateLatch.lower()}))}
/**
 * Whether a SafariRTCPeerConnection has any RTCRtpReceivers(s) for the given
 * MediaStreamTrack kind.
 * @param {SafariRTCPeerConnection} peerConnection
 * @param {'audio' | 'video'} kind
 * @returns {boolean}
 */function hasReceiversForTracksOfKind(e,t){return!!e.getTransceivers().find((function(e){var r=e.receiver,n=void 0===r?{}:r;var i=n.track,a=void 0===i?{}:i;return a.kind===t}))}
/**
 * Shim an RTCDataChannel. This function mutates the RTCDataChannel.
 * @param {RTCDataChannel} dataChannel
 * @returns {RTCDataChannel}
 */function shimDataChannel(e){return Object.defineProperties(e,{maxPacketLifeTime:{value:65535===e.maxPacketLifeTime?null:e.maxPacketLifeTime},maxRetransmits:{value:65535===e.maxRetransmits?null:e.maxRetransmits}})}Nt=er;var tr=Nt;var rr={};if("function"===typeof RTCPeerConnection){var nr=U.guessBrowser;switch(nr()){case"chrome":rr=kt;break;case"firefox":rr=Vt;break;case"safari":rr=tr;break;default:rr=RTCPeerConnection;break}}else rr=function RTCPeerConnection(){throw new Error("RTCPeerConnection is not supported")};var ir=rr;var ar={};if("function"===typeof RTCSessionDescription){var or=U.guessBrowser;switch(or()){case"chrome":ar=Ne;break;case"firefox":ar=Tt;break;default:ar=RTCSessionDescription;break}}else ar=function RTCSessionDescription(){throw new Error("RTCSessionDescription is not supported")};var cr=ar;var sr={};var ur={};Object.defineProperties(ur,{getStats:{enumerable:true,value:Oe},getUserMedia:{enumerable:true,value:Re},MediaStream:{enumerable:true,value:Me},MediaStreamTrack:{enumerable:true,value:je},RTCIceCandidate:{enumerable:true,value:De},RTCPeerConnection:{enumerable:true,value:ir},RTCSessionDescription:{enumerable:true,value:cr}});sr=ur;var lr=sr;var dr={};dr=function inherits(e,t){if(e&&t){e.super_=t;if("function"===typeof Object.create)e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});else{var r=function(){function TempCtor(){}return TempCtor}();r.prototype=t.prototype;e.prototype=new r;e.prototype.constructor=e}}};var pr=dr;var fr={};var vr=fr&&fr.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};
/**
 * Check whether the current browser is an Android device.
 * @returns {boolean}
 */function isAndroid$2(){return/Android/.test(navigator.userAgent)}
/**
 * Detects whether or not a device is an Apple touch screen device.
 * @returns {boolean}
 */function hasTouchScreen(){return!!(navigator&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2)}
/**
 * Detects whether or not a device is an iPad.
 * @returns {boolean}
 */function isIpad(){return hasTouchScreen()&&window.screen.width>=744&&(/Macintosh/i.test(navigator.userAgent)||/iPad/.test(navigator.userAgent)||/iPad/.test(navigator.platform))}
/**
 * Detects whether or not a device is an iPhone.
 * @returns {boolean}
 */function isIphone(){return hasTouchScreen()&&window.screen.width<=476&&(/Macintosh/i.test(navigator.userAgent)||/iPhone/.test(navigator.userAgent)||/iPhone/.test(navigator.platform))}
/**
 * Check whether the current device is an iOS device.
 * @returns {boolean}
 */function isIOS$5(){return isIpad()||isIphone()}
/**
 * Check whether the current browser is a mobile browser
 * @returns {boolean}
 */function isMobile$1(){return/Mobi/.test(navigator.userAgent)}
/**
 * Check whether the current browser is non-Chromium Edge.
 * @param {string} browser
 * @returns {boolean}
 */function isNonChromiumEdge$1(e){return"chrome"===e&&/Edge/.test(navigator.userAgent)&&("undefined"===typeof chrome||"undefined"===typeof chrome.runtime)}
/**
 * Get the name of the rebranded Chromium browser, if any. Re-branded Chrome's user
 * agent has the following format:
 * <source>/<version> (<os>) <engine>/<version> (<engine_name>) Chrome/<version> [Mobile] Safari/<version>
 * @param browser
 * @returns {?string} Name of the rebranded Chrome browser, or null if the browser
 *   is either not Chrome or vanilla Chrome.
 */function rebrandedChromeBrowser$1(e){if("chrome"!==e)return null;if("brave"in navigator)return"brave";var t=getParenthesizedSubstrings(navigator.userAgent);var r=t.reduce((function(e,t){return e.replace(t,"")}),navigator.userAgent);var n=r.match(/[^\s]+/g)||[];var i=vr(n.map((function(e){return e.split("/")[0].toLowerCase()}))),a=i.slice(2);return a.find((function(e){return!["chrome","mobile","safari"].includes(e)}))||null}
/**
 * Get the name of the mobile webkit based browser, if any.
 * @param browser
 * @returns {?string} Name of the mobile webkit based browser, or null if the browser
 *   is either not webkit based or mobile safari.
 */function mobileWebKitBrowser$1(e){return"safari"!==e?null:"brave"in navigator?"brave":["edge","edg"].find((function(e){return navigator.userAgent.toLowerCase().includes(e)}))||null}
/**
 * Get the top level parenthesized substrings within a given string. Unmatched
 * parentheses are ignored.
 * Ex: "abc) (def) gh(ij) (kl (mn)o) (pqr" => ["(def)", "(ij)", "(kl (mn)o)"]
 * @param {string} string
 * @returns {string[]}
 */function getParenthesizedSubstrings(e){var t=[];var r=[];for(var n=0;n<e.length;n++)if("("===e[n])t.push(n);else if(")"===e[n]&&t.length>0){var i=t.pop();0===t.length&&r.push(e.substring(i,n+1))}return r}fr={isAndroid:isAndroid$2,isIOS:isIOS$5,isIpad:isIpad,isIphone:isIphone,isMobile:isMobile$1,isNonChromiumEdge:isNonChromiumEdge$1,mobileWebKitBrowser:mobileWebKitBrowser$1,rebrandedChromeBrowser:rebrandedChromeBrowser$1};var hr=fr;var _r={};
/**
 * Return a Promise that resolves after `timeout` milliseconds.
 * @param {?number} [timeout=0]
 * @returns {Promise<void>}
 */function delay(e){e="number"===typeof e?e:0;return new Promise((function(t){return setTimeout(t,e)}))}
/**
 * Attempt to detect silence. The Promise returned by this function returns
 * false as soon as audio is detected or true after `timeout` milliseconds.
 * @param {AudioContext} audioContext
 * @param {MediaStream} stream
 * @param {?number} [timeout=250]
 * @returns {Promise<boolean>}
 */function detectSilence$2(e,t,r){r="number"===typeof r?r:250;var n=e.createMediaStreamSource(t);var i=e.createAnalyser();i.fftSize=2048;n.connect(i);var a=new Uint8Array(i.fftSize);var o=false;setTimeout((function(){o=true}),r);
/**
   * We can't use async/await yet, so I need to factor this out.
   * @returns {Promise<boolean>}
   */function doDetectSilence(){if(o)return Promise.resolve(true);i.getByteTimeDomainData(a);return a.some((function(e){return 128!==e&&0!==e}))?Promise.resolve(false):delay().then(doDetectSilence)}return doDetectSilence().then((function(e){n.disconnect();return e}),(function(e){n.disconnect();throw e}))}_r=detectSilence$2;var mr=_r;var gr={};var yr="undefined"!==typeof AudioContext?AudioContext:"undefined"!==typeof webkitAudioContext?webkitAudioContext:null;var br=function(){
/**
   * @param {AudioContextFactoryOptions} [options]
   */
function AudioContextFactory(e){e=Object.assign({AudioContext:yr},e);Object.defineProperties(this,{_AudioContext:{value:e.AudioContext},_audioContext:{value:null,writable:true},_holders:{value:new Set},AudioContextFactory:{enumerable:true,value:AudioContextFactory}})}
/**
   * Each call to {@link AudioContextFactory#getOrCreate} should be paired with a
   * call to {@link AudioContextFactory#release}. Calling this increments an
   * internal reference count.
   * @param {*} holder - The object to hold a reference to the AudioContext
   * @returns {?AudioContext}
   */AudioContextFactory.prototype.getOrCreate=function(e){if(!this._holders.has(e)){this._holders.add(e);if(this._AudioContext&&!this._audioContext)try{this._audioContext=new this._AudioContext}catch(e){}}return this._audioContext};
/**
   * Decrement the internal reference count. If it reaches zero, close and destroy
   * the AudioContext.
   * @param {*} holder - The object that held a reference to the AudioContext
   * @returns {void}
   */AudioContextFactory.prototype.release=function(e){if(this._holders.has(e)){this._holders.delete(e);if(!this._holders.size&&this._audioContext){this._audioContext.close();this._audioContext=null}}};return AudioContextFactory}();gr=new br;var kr=gr;var Sr={};var Tr=mr;var wr=3;var Cr=250;
/**
 * Detect whether the audio stream rendered by the given HTMLVideoElement is silent.
 * @param {HTMLAudioElement} el
 * @returns {Promise<boolean>} true if silent, false if not.
 */function detectSilentAudio$2(e){var t=kr;var r={};var n=t.getOrCreate(r);var i=wr;function doCheckSilence(){i--;return Tr(n,e.srcObject,Cr).then((function(e){return!!e&&(!(i>0)||doCheckSilence())})).catch((function(){return true}))}return doCheckSilence().finally((function(){t.release(r)}))}Sr=detectSilentAudio$2;var Pr=Sr;var Or={};var Er=Y.defer;var Rr=function(){function LocalMediaRestartDeferreds(){Object.defineProperties(this,{_audio:{value:Er(),writable:true},_video:{value:Er(),writable:true}});this._audio.resolve();this._video.resolve()}
/**
   * Resolve the Deferred for audio or video.
   * @param {'audio'|'video'} kind
   */LocalMediaRestartDeferreds.prototype.resolveDeferred=function(e){"audio"===e?this._audio.resolve():this._video.resolve()};
/**
   * Start the Deferred for audio or video.
   * @param {'audio' | 'video'} kind
   */LocalMediaRestartDeferreds.prototype.startDeferred=function(e){"audio"===e?this._audio=Er():this._video=Er()};
/**
   * Wait until the Deferred for audio or video is resolved.
   * @param {'audio'|'video'} kind
   * @returns {Promise<void>}
   */LocalMediaRestartDeferreds.prototype.whenResolved=function(e){return"audio"===e?this._audio.promise:this._video.promise};return LocalMediaRestartDeferreds}();Or=new Rr;var Lr=Or;var Mr="default"in e?e.default:e;var Ir={};var jr=Mr.EventEmitter;var Ar=Y.hidePrivateAndCertainPublicPropertiesInClass;Ir=Ar(jr,["domain"]);var Dr=Ir;var xr={};var Vr=xr&&xr.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Nr=Dr;var Fr=Y,Br=Fr.buildLogLevels,Ur=Fr.valueToJSON;var $r=v.DEFAULT_LOG_LEVEL;var Hr=R;var Wr=0;var Qr=function(e){Vr(Track,e);
/**
   * Construct a {@link Track}.
   * @param {Track.ID} id - The {@link Track}'s ID
   * @param {Track.Kind} kind - The {@link Track}'s kind
   * @param {{ log: Log, name: ?string }} options
   */function Track(t,r,n){var i=this;n=Object.assign({name:t,log:null,logLevel:$r},n);i=e.call(this)||this;var a=String(n.name);var o=Br(n.logLevel);var c=n.log?n.log.createLog("media",i):new Hr("media",i,o,n.loggerName);Object.defineProperties(i,{_instanceId:{value:++Wr},_log:{value:c},kind:{enumerable:true,value:r},name:{enumerable:true,value:a}});return i}Track.prototype.toJSON=function(){return Ur(this)};return Track}(Nr);
/**
 * The {@link Track} ID is a string identifier for the {@link Track}.
 * @typedef {string} Track.ID
 */
/**
 * The {@link Track} kind is either "audio", "video", or "data".
 * @typedef {string} Track.Kind
 */
/**
 * The {@link Track}'s priority can be "low", "standard", or "high".
 * @typedef {string} Track.Priority
 */
/**
 * The {@link Track} SID is a unique string identifier for the {@link Track}
 * that is published to a {@link Room}.
 * @typedef {string} Track.SID
 */
/**
 * A {@link DataTrack} is a {@link LocalDataTrack} or {@link RemoteDataTrack}.
 * @typedef {LocalDataTrack|RemoteDataTrack} DataTrack
 */
/**
 * A {@link LocalTrack} is a {@link LocalAudioTrack}, {@link LocalVideoTrack},
 * or {@link LocalDataTrack}.
 * @typedef {LocalAudioTrack|LocalVideoTrack|LocalDataTrack} LocalTrack
 */
/**
 * {@link LocalTrack} options
 * @typedef {object} LocalTrackOptions
 * @property {LogLevel|LogLevels} logLevel - Log level for 'media' modules
 * @property {string} [name] - The {@link LocalTrack}'s name; by default,
 *   it is set to the {@link LocalTrack}'s ID.
 */
/**
 * A {@link RemoteTrack} is a {@link RemoteAudioTrack},
 * {@link RemoteVideoTrack}, or {@link RemoteDataTrack}.
 * @typedef {RemoteAudioTrack|RemoteVideoTrack|RemoteDataTrack} RemoteTrack
 */xr=Qr;var qr=xr;var zr={};var Gr=zr&&zr.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Kr=hr.isIOS;var Jr=lr.MediaStream;var Yr=Y,Xr=Yr.waitForEvent,Zr=Yr.waitForSometime;var en=Lr;var tn=qr;var rn=function(e){Gr(MediaTrack,e);
/**
   * Construct a {@link MediaTrack}.
   * @param {MediaTrackTransceiver} mediaTrackTransceiver
   * @param {{log: Log}} options
   */function MediaTrack(t,r){var n=this;r=Object.assign({playPausedElementsIfNotBackgrounded:Kr()&&"object"===typeof document&&"function"===typeof document.addEventListener&&"string"===typeof document.visibilityState},r);n=e.call(this,t.id,t.kind,r)||this;var i=false;r=Object.assign({MediaStream:Jr},r);Object.defineProperties(n,{_attachments:{value:new Set},_dummyEl:{value:null,writable:true},_elShims:{value:new WeakMap},_isStarted:{get:function(){return i},set:function(e){i=e}},_playPausedElementsIfNotBackgrounded:{value:r.playPausedElementsIfNotBackgrounded},_shouldShimAttachedElements:{value:r.workaroundWebKitBug212780||r.playPausedElementsIfNotBackgrounded},_unprocessedTrack:{value:null,writable:true},_MediaStream:{value:r.MediaStream},isStarted:{enumerable:true,get:function(){return i}},mediaStreamTrack:{enumerable:true,get:function(){return this._unprocessedTrack||t.track}},processedTrack:{enumerable:true,value:null,writable:true}});n._initialize();return n}MediaTrack.prototype._start=function(){this._log.debug("Started");this._isStarted=true;this._dummyEl&&(this._dummyEl.oncanplay=null);this.emit("started",this)};MediaTrack.prototype._initialize=function(){var e=this;this._log.debug("Initializing");this._dummyEl=this._createElement();this.mediaStreamTrack.addEventListener("ended",(function onended(){e._end();e.mediaStreamTrack.removeEventListener("ended",onended)}));if(this._dummyEl){this._dummyEl.muted=true;this._dummyEl.oncanplay=this._start.bind(this,this._dummyEl);this._attach(this._dummyEl,this.mediaStreamTrack);this._attachments.delete(this._dummyEl)}};MediaTrack.prototype._end=function(){this._log.debug("Ended");if(this._dummyEl){this._dummyEl.remove();this._dummyEl.srcObject=null;this._dummyEl.oncanplay=null;this._dummyEl=null}};MediaTrack.prototype.attach=function(e){var t=this;"string"===typeof e?e=this._selectElement(e):e||(e=this._createElement());this._log.debug("Attempting to attach to element:",e);e=this._attach(e);if(this._shouldShimAttachedElements&&!this._elShims.has(e)){var r=this._playPausedElementsIfNotBackgrounded?function(){return playIfPausedAndNotBackgrounded(e,t._log)}:null;this._elShims.set(e,shimMediaElement(e,r))}return e};
/**
   * Attach the provided MediaStreamTrack to the media element.
   * @param el - The media element to attach to
   * @param mediaStreamTrack - The MediaStreamTrack to attach. If this is
   * not provided, it uses the processedTrack if it exists
   * or it defaults to the current mediaStreamTrack
   * @private
   */MediaTrack.prototype._attach=function(e,t){void 0===t&&(t=this.processedTrack||this.mediaStreamTrack);var r=e.srcObject;r instanceof this._MediaStream||(r=new this._MediaStream);var n="audio"===t.kind?"getAudioTracks":"getVideoTracks";r[n]().forEach((function(e){r.removeTrack(e)}));r.addTrack(t);e.srcObject=r;e.autoplay=true;e.playsInline=true;this._attachments.has(e)||this._attachments.add(e);return e};MediaTrack.prototype._selectElement=function(e){var t=document.querySelector(e);if(!t)throw new Error("Selector matched no element: "+e);return t};MediaTrack.prototype._updateElementsMediaStreamTrack=function(){var e=this;this._log.debug("Reattaching all elements to update mediaStreamTrack");this._getAllAttachedElements().forEach((function(t){return e._attach(t)}))};MediaTrack.prototype._createElement=function(){return"undefined"!==typeof document?document.createElement(this.kind):null};MediaTrack.prototype.detach=function(e){var t;t="string"===typeof e?[this._selectElement(e)]:e?[e]:this._getAllAttachedElements();this._log.debug("Attempting to detach from elements:",t);this._detachElements(t);return e?t[0]:t};MediaTrack.prototype._detachElements=function(e){return e.map(this._detachElement.bind(this))};MediaTrack.prototype._detachElement=function(e){if(!this._attachments.has(e))return e;var t=e.srcObject;t instanceof this._MediaStream&&t.removeTrack(this.processedTrack||this.mediaStreamTrack);this._attachments.delete(e);if(this._shouldShimAttachedElements&&this._elShims.has(e)){var r=this._elShims.get(e);r.unShim();this._elShims.delete(e)}return e};MediaTrack.prototype._getAllAttachedElements=function(){var e=[];this._attachments.forEach((function(t){e.push(t)}));return e};return MediaTrack}(tn);
/**
 * Play an HTMLMediaElement if it is paused and not backgrounded.
 * @private
 * @param {HTMLMediaElement} el
 * @param {Log} log
 * @returns {void}
 */function playIfPausedAndNotBackgrounded(e,t){var r=e.tagName.toLowerCase();t.warn("Unintentionally paused:",e);Promise.race([Xr(document,"visibilitychange"),Zr(1e3)]).then((function(){"visible"===document.visibilityState&&en.whenResolved("audio").then((function(){t.info("Playing unintentionally paused <"+r+"> element");t.debug("Element:",e);return e.play()})).then((function(){t.info("Successfully played unintentionally paused <"+r+"> element");t.debug("Element:",e)})).catch((function(n){t.warn("Error while playing unintentionally paused <"+r+"> element:",{error:n,el:e})}))}))}
/**
 * Shim the pause() and play() methods of the given HTMLMediaElement so that
 * we can detect if it was paused unintentionally.
 * @param {HTMLMediaElement} el
 * @param {?function} [onUnintentionallyPaused=null]
 * @returns {{pausedIntentionally: function, unShim: function}}
 */function shimMediaElement(e,t){void 0===t&&(t=null);var r=e.pause;var n=e.play;var i=false;e.pause=function(){i=true;return r.call(e)};e.play=function(){i=false;return n.call(e)};var a=t?function(){i||t()}:null;a&&e.addEventListener("pause",a);return{pausedIntentionally:function(){return i},unShim:function(){e.pause=r;e.play=n;a&&e.removeEventListener("pause",a)}}}zr=rn;var nn=zr;var an={};var on=an&&an.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var cn=nn;var sn=function(e){on(AudioTrack,e);
/**
   * Construct an {@link AudioTrack}.
   * @param {MediaTrackTransceiver} mediaTrackTransceiver
   * @param {{log: Log}} options
   */function AudioTrack(t,r){return e.call(this,t,r)||this}
/**
   * Create an HTMLAudioElement and attach the {@link AudioTrack} to it.
   *
   * The HTMLAudioElement's <code>srcObject</code> will be set to a new
   * MediaStream containing the {@link AudioTrack}'s MediaStreamTrack.
   *
   * @returns {HTMLAudioElement} audioElement
   * @example
   * const Video = require('twilio-video');
   *
   * Video.createLocalAudioTrack().then(function(audioTrack) {
   *   const audioElement = audioTrack.attach();
   *   document.body.appendChild(audioElement);
   * });
  */
/**
     * Attach the {@link AudioTrack} to an existing HTMLMediaElement. The
     * HTMLMediaElement could be an HTMLAudioElement or an HTMLVideoElement.
     *
     * If the HTMLMediaElement's <code>srcObject</code> is not set to a MediaStream,
     * this method sets it to a new MediaStream containing the {@link AudioTrack}'s
     * MediaStreamTrack; otherwise, it adds the {@link MediaTrack}'s
     * MediaStreamTrack to the existing MediaStream. Finally, if there are any other
     * MediaStreamTracks of the same kind on the MediaStream, this method removes
     * them.
     *
     * @param {HTMLMediaElement} mediaElement - The HTMLMediaElement to attach to
     * @returns {HTMLMediaElement} mediaElement
     * @example
     * const Video = require('twilio-video');
     *
     * const videoElement = document.createElement('video');
     * document.body.appendChild(videoElement);
     *
     * Video.createLocalAudioTrack().then(function(audioTrack) {
     *   audioTrack.attach(videoElement);
     * });
     */
/**
        * Attach the {@link AudioTrack} to an HTMLMediaElement selected by
        * <code>document.querySelector</code>. The HTMLMediaElement could be an
        * HTMLAudioElement or an HTMLVideoElement.
        *
        * If the HTMLMediaElement's <code>srcObject</code> is not set to a MediaStream,
        * this method sets it to a new MediaStream containing the {@link AudioTrack}'s
        * MediaStreamTrack; otherwise, it adds the {@link AudioTrack}'s
        * MediaStreamTrack to the existing MediaStream. Finally, if there are any other
        * MediaStreamTracks of the same kind on the MediaStream, this method removes
        * them.
        *
        * @param {string} selector - A query selector for the HTMLMediaElement to
        *   attach to
        * @returns {HTMLMediaElement} mediaElement
        * @example
        * const Video = require('twilio-video');
        *
        * const videoElement = document.createElement('video');
        * videoElement.id = 'my-video-element';
        * document.body.appendChild(videoElement);
        *
        * Video.createLocalAudioTrack().then(function(track) {
        *   track.attach('#my-video-element');
        * });
        */AudioTrack.prototype.attach=function(){return e.prototype.attach.apply(this,arguments)};
/**
   * Detach the {@link AudioTrack} from all previously attached HTMLMediaElements.
   * @returns {Array<HTMLMediaElement>} mediaElements
   * @example
   * const mediaElements = audioTrack.detach();
   * mediaElements.forEach(mediaElement => mediaElement.remove());
  */
/**
     * Detach the {@link AudioTrack} from a previously attached HTMLMediaElement.
     * @param {HTMLMediaElement} mediaElement - One of the HTMLMediaElements to
     *   which the {@link AudioTrack} is attached
     * @returns {HTMLMediaElement} mediaElement
     * @example
     * const videoElement = document.getElementById('my-video-element');
     * audioTrack.detach(videoElement).remove();
     */
/**
        * Detach the {@link AudioTrack} from a previously attached HTMLMediaElement
        *   specified by <code>document.querySelector</code>.
        * @param {string} selector - The query selector of HTMLMediaElement to which
        *    the {@link AudioTrack} is attached
        * @returns {HTMLMediaElement} mediaElement
        * @example
        * audioTrack.detach('#my-video-element').remove();
        */AudioTrack.prototype.detach=function(){return e.prototype.detach.apply(this,arguments)};return AudioTrack}(cn);
/**
 * The {@link AudioTrack} was disabled, i.e. "muted".
 * @param {AudioTrack} track - The {@link AudioTrack} that was disabled
 * @event AudioTrack#disabled
 */
/**
 * The {@link AudioTrack} was enabled, i.e. "unmuted".
 * @param {AudioTrack} track - The {@link AudioTrack} that was enabled
 * @event AudioTrack#enabled
 */
/**
 * The {@link AudioTrack} started. This means there is enough audio data to
 * begin playback.
 * @param {AudioTrack} track - The {@link AudioTrack} that started
 * @event AudioTrack#started
 */an=sn;var un=an;var ln={};var dn=null;var pn=3;var fn=50;var vn=250;var hn=50;
/**
 * Check whether the current video frame is silent by selecting a 50x50
 * sample and calculating the max value of the pixel data. If it is 0, then
 * the frame is considered to be silent.
 * @private
 * @param {HTMLVideoElement} el
 * @returns {boolean} true if silent, false if not
 */function checkSilence(e){try{var t=dn.getContext("2d");t.drawImage(e,0,0,hn,fn);var r=t.getImageData(0,0,hn,fn);var n=r.data.filter((function(e,t){return(t+1)%4}));var i=Math.max.apply(Math,n);return 0===i}catch(e){console.log("Error checking silence: ",e);return false}}
/**
 * Detect whether the video stream rendered by the given HTMLVideoElement is silent.
 * @param {HTMLVideoElement} el
 * @returns {Promise<boolean>} true if silent, false if not.
 */function detectSilentVideo$2(e){dn=dn||document.createElement("canvas");return new Promise((function(t){var r=pn;setTimeout((function doCheckSilence(){r--;return checkSilence(e)?r>0?setTimeout(doCheckSilence,vn):t(true):t(false)}),vn)}))}ln=detectSilentVideo$2;var _n=ln;var mn={};var gn=function(){
/**
   * Constructor.
   * @param {number} [nPhases=1] - the number of phases
   */
function DocumentVisibilityMonitor(e){var t=this;void 0===e&&(e=1);Object.defineProperties(this,{_listeners:{value:[]},_onVisibilityChange:{value:function(){t._emitVisible("visible"===document.visibilityState)}}});for(var r=0;r<e;r++)this._listeners.push([])}DocumentVisibilityMonitor.prototype.clear=function(){var e=this._listeners.length;for(var t=0;t<e;t++)this._listeners[t]=[]};DocumentVisibilityMonitor.prototype._listenerCount=function(){return this._listeners.reduce((function(e,t){return e+t.length}),0)};DocumentVisibilityMonitor.prototype._emitVisible=function(e){var t=this;var r=Promise.resolve();var _loop_1=function(n){r=r.then((function(){return t._emitVisiblePhase(n,e)}))};for(var n=1;n<=this._listeners.length;n++)_loop_1(n);return r};DocumentVisibilityMonitor.prototype._emitVisiblePhase=function(e,t){var r=this._listeners[e-1];return Promise.all(r.map((function(e){var r=e(t);return r instanceof Promise?r:Promise.resolve(r)})))};DocumentVisibilityMonitor.prototype._start=function(){document.addEventListener("visibilitychange",this._onVisibilityChange)};DocumentVisibilityMonitor.prototype._stop=function(){document.removeEventListener("visibilitychange",this._onVisibilityChange)};
/**
   * Listen for the DOM visibility changes at the given phase.
   * @param {number} phase
   * @param {function} listener
   * @returns {this}
   */DocumentVisibilityMonitor.prototype.onVisibilityChange=function(e,t){if("number"!==typeof e||e<=0||e>this._listeners.length)throw new Error("invalid phase: ",e);var r=this._listeners[e-1];r.push(t);1===this._listenerCount()&&this._start();return this};
/**
   * Stop listening for the DOM visibility change at the given phase.
   * @param {number} phase
   * @param {function} listener
   * @returns {this}
   */DocumentVisibilityMonitor.prototype.offVisibilityChange=function(e,t){if("number"!==typeof e||e<=0||e>this._listeners.length)throw new Error("invalid phase: ",e);var r=this._listeners[e-1];var n=r.indexOf(t);if(-1!==n){r.splice(n,1);0===this._listenerCount()&&this._stop()}return this};return DocumentVisibilityMonitor}();mn=new gn(2);var yn=mn;var bn={};var kn=mr;
/**
 * This function attempts to workaround WebKit Bug 180748. It does so by
 *
 *   1. Calling `getUserMedia`, and
 *   2. Checking to see if the resulting MediaStream is silent.
 *   3. If so, repeat Step 1; otherwise, return the MediaStream.
 *
 * The function only repeats up to `n` times, and it only waits `timeout`
 * milliseconds when detecting silence. Assuming `getUserMedia` is
 * instantaneous, in the best case, this function returns a Promise that
 * resolves immediately; in the worst case, this function returns a Promise that
 * resolves in `n` * `timeout` milliseconds.
 *
 * @param {Log} log
 * @param {function(MediaStreamConstraints): Promise<MediaStream>} getUserMedia
 * @param {MediaStreamConstraints} constraints
 * @param {number} [n=3]
 * @param {number} [timeout=250]
 * @returns Promise<MediaStream>
 */function workaround$1(e,t,r,n,i){n="number"===typeof n?n:3;var a=0;var o=kr;var c={};var s=o.getOrCreate(c);
/**
   * We can't use async/await yet, so I need to factor this out.
   * @returns {Promise<MediaStream>}
   */function doWorkaround(){return t(r).then((function(t){var o=r.audio?kn(s,t,i).catch((function(t){e.warn("Encountered an error while detecting silence",t);return true})):Promise.resolve(false);return o.then((function(r){if(!r){e.info("Got a non-silent audio MediaStreamTrack; returning it.");return t}if(n<=0){e.warn("Got a silent audio MediaStreamTrack. Normally we would try to get a new one, but we've run out of retries; returning it anyway.");return t}e.warn("Got a silent audio MediaStreamTrack. Stopping all MediaStreamTracks and calling getUserMedia again. This is retry #"+ ++a+".");t.getTracks().forEach((function(e){return e.stop()}));n--;return doWorkaround()}))}))}return doWorkaround().then((function(e){o.release(c);return e}),(function(e){o.release(c);throw e}))}bn=workaround$1;var Sn=bn;var Tn="default"in e?e.default:e;var wn={};var Cn=wn&&wn.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Pn=wn&&wn.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};var On=wn&&wn.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};var En=Tn.EventEmitter;var Rn=function(e){Cn(QueueingEventEmitter,e);function QueueingEventEmitter(){var t=e.call(this)||this;Object.defineProperties(t,{_queuedEvents:{value:new Map}});return t}
/**
   * Emit any queued events.
   * @returns {boolean} true if every event had listeners, false otherwise
  */
/**
     * Emit any queued events matching the event name.
     * @param {string} event
     * @returns {boolean} true if every event had listeners, false otherwise
     */QueueingEventEmitter.prototype.dequeue=function(e){var t=this;var r=true;if(!e){this._queuedEvents.forEach((function(e,t){r=this.dequeue(t)&&r}),this);return r}var n=this._queuedEvents.get(e)||[];this._queuedEvents.delete(e);return n.reduce((function(r,n){return t.emit.apply(t,On([],Pn([e].concat(n))))&&r}),r)};
/**
   * If the event has listeners, emit the event; otherwise, queue the event.
   * @param {string} event
   * @param {...*} args
   * @returns {boolean} true if the event had listeners, false if the event was queued
   */QueueingEventEmitter.prototype.queue=function(){var e=[].slice.call(arguments);if(this.emit.apply(this,On([],Pn(e))))return true;var t=e[0];this._queuedEvents.has(t)||this._queuedEvents.set(t,[]);this._queuedEvents.get(t).push(e.slice(1));return false};return QueueingEventEmitter}(En);wn=Rn;var Ln=wn;var Mn={};var In=Mn&&Mn.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var jn=Ln;var An=function(e){In(TrackTransceiver,e);
/**
   * Construct a {@link TrackTransceiver}.
   * @param {Track.ID} id
   * @param {Track.kind} kind
   */function TrackTransceiver(t,r){var n=e.call(this)||this;Object.defineProperties(n,{id:{enumerable:true,value:t},kind:{enumerable:true,value:r}});return n}
/**
   * Stop the {@link TrackTransceiver}.
   * #emits TrackTransceiver#stopped
   * @returns {void}
   */TrackTransceiver.prototype.stop=function(){this.emit("stopped")};return TrackTransceiver}(jn);Mn=An;var Dn=Mn;var xn={};var Vn=xn&&xn.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Nn=Dn;var Fn=function(e){Vn(MediaTrackTransceiver,e);
/**
   * Construct a {@link MediaTrackTransceiver}.
   * @param {Track.ID} id - The MediaStreamTrack ID signaled through RSP/SDP
   * @param {MediaStreamTrack} mediaStreamTrack
   */function MediaTrackTransceiver(t,r){var n=e.call(this,t,r.kind)||this;Object.defineProperties(n,{_track:{value:r,writable:true},enabled:{enumerable:true,get:function(){return this._track.enabled}},readyState:{enumerable:true,get:function(){return this._track.readyState}},track:{enumerable:true,get:function(){return this._track}}});return n}MediaTrackTransceiver.prototype.stop=function(){this.track.stop();e.prototype.stop.call(this)};return MediaTrackTransceiver}(Nn);xn=Fn;var Bn=xn;var Un={};var $n=Un&&Un.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Hn=Un&&Un.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};var Wn=Bn;var Qn=function(e){$n(MediaTrackSender,e);
/**
   * Construct a {@link MediaTrackSender}.
   * @param {MediaStreamTrack} mediaStreamTrack
   */function MediaTrackSender(t){var r=e.call(this,t.id,t)||this;Object.defineProperties(r,{_clones:{value:new Set},_eventsToReemitters:{value:new Map([["mute",function(){return r.queue("muted")}],["unmute",function(){return r.queue("unmuted")}]])},_senders:{value:new Set},_senderToPublisherHintCallbacks:{value:new Map},isPublishing:{enumerable:true,get:function(){return!!this._clones.size}},muted:{enumerable:true,get:function(){return this._track.muted}}});r._reemitMediaStreamTrackEvents();return r}MediaTrackSender.prototype._reemitMediaStreamTrackEvents=function(e){void 0===e&&(e=this._track);var t=this,r=t._eventsToReemitters,n=t._track;r.forEach((function(t,r){return e.addEventListener(r,t)}));if(n!==e){r.forEach((function(e,t){return n.removeEventListener(t,e)}));if(n.muted!==e.muted){var i=r.get(e.muted?"mute":"unmute");i()}}};
/**
   * Return a new {@link MediaTrackSender} containing a clone of the underlying
   * MediaStreamTrack. No RTCRtpSenders are copied.
   * @returns {MediaTrackSender}
   */MediaTrackSender.prototype.clone=function(){var e=new MediaTrackSender(this.track.clone());this._clones.add(e);return e};
/**
   * Remove a cloned {@link MediaTrackSender}.
   * @returns {void}
   */MediaTrackSender.prototype.removeClone=function(e){this._clones.delete(e)};
/**
   * Set the given MediaStreamTrack.
   * @param {MediaStreamTrack} mediaStreamTrack
   * @returns {Promise<void>}
   */MediaTrackSender.prototype.setMediaStreamTrack=function(e){var t=this;var r=Array.from(this._clones);var n=Array.from(this._senders);return Promise.all(r.map((function(t){return t.setMediaStreamTrack(e.clone())})).concat(n.map((function(r){return t._replaceTrack(r,e)})))).finally((function(){t._reemitMediaStreamTrackEvents(e);t._track=e}))};
/**
   * Add an RTCRtpSender.
   * @param {RTCRtpSender} sender
   * @param {?()=>Promise<string>} publisherHintCallback
   * @returns {this}
   */MediaTrackSender.prototype.addSender=function(e,t){this._senders.add(e);t&&this._senderToPublisherHintCallbacks.set(e,t);return this};
/**
   * Remove an RTCRtpSender.
   * @param {RTCRtpSender} sender
   * @returns {this}
   */MediaTrackSender.prototype.removeSender=function(e){this._senders.delete(e);this._senderToPublisherHintCallbacks.delete(e);return this};
/**
   * Applies given encodings, or resets encodings if none specified.
   * @param {Array<{enabled: boolean, layer_index: number}>|null} encodings
   * @returns {Promise<string>}
   */MediaTrackSender.prototype.setPublisherHint=function(e){var t=Hn(Array.from(this._senderToPublisherHintCallbacks.values()),1),r=t[0];return r?r(e):Promise.resolve("COULD_NOT_APPLY_HINT")};MediaTrackSender.prototype._replaceTrack=function(e,t){var r=this;return e.replaceTrack(t).then((function(e){r.setPublisherHint(null).catch((function(){}));r.emit("replaced");return e}))};return MediaTrackSender}(Wn);Un=Qn;var qn=Un;var zn={};var Gn=zn&&zn.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Kn=lr.getUserMedia;var Jn=hr.isIOS;var Yn=Y,Xn=Yn.capitalize,Zn=Yn.defer,ei=Yn.waitForSometime,ti=Yn.waitForEvent;var ri=v.typeErrors.ILLEGAL_INVOKE;var ni=Pr;var ii=_n;var ai=yn;var oi=Lr;var ci=Sn;var si=qn;function mixinLocalMediaTrack$2(e){return function(e){Gn(LocalMediaTrack,e);
/**
       * Construct a {@link LocalMediaTrack} from a MediaStreamTrack.
       * @param {MediaStreamTrack} mediaStreamTrack - The underlying MediaStreamTrack
       * @param {LocalTrackOptions} [options] - {@link LocalTrack} options
       */function LocalMediaTrack(t,r){var n=this;var i=Jn()&&"object"===typeof document&&"function"===typeof document.addEventListener&&"string"===typeof document.visibilityState;r=Object.assign({getUserMedia:Kn,isCreatedByCreateLocalTracks:false,workaroundWebKitBug1208516:i,gUMSilentTrackWorkaround:ci},r);var a=new si(t);var o=a.kind;n=e.call(this,a,r)||this;Object.defineProperties(n,{_constraints:{value:"object"===typeof r[o]?r[o]:{},writable:true},_getUserMedia:{value:r.getUserMedia},_gUMSilentTrackWorkaround:{value:r.gUMSilentTrackWorkaround},_eventsToReemitters:{value:new Map([["muted",function(){return n.emit("muted",n)}],["unmuted",function(){return n.emit("unmuted",n)}]])},_workaroundWebKitBug1208516:{value:r.workaroundWebKitBug1208516},_workaroundWebKitBug1208516Cleanup:{value:null,writable:true},_didCallEnd:{value:false,writable:true},_isCreatedByCreateLocalTracks:{value:r.isCreatedByCreateLocalTracks},_noiseCancellation:{value:r.noiseCancellation||null},_trackSender:{value:a},id:{enumerable:true,value:a.id},isEnabled:{enumerable:true,get:function(){return a.enabled}},isMuted:{enumerable:true,get:function(){return a.muted}},isStopped:{enumerable:true,get:function(){return"ended"===a.readyState}}});n._workaroundWebKitBug1208516&&(n._workaroundWebKitBug1208516Cleanup=restartWhenInadvertentlyStopped(n));n._reemitTrackSenderEvents();return n}LocalMediaTrack.prototype._end=function(){var t=this;if(!this._didCallEnd){e.prototype._end.call(this);this._didCallEnd=true;this._eventsToReemitters.forEach((function(e,r){return t._trackSender.removeListener(r,e)}));this.emit("stopped",this)}};LocalMediaTrack.prototype._initialize=function(){this._didCallEnd&&(this._didCallEnd=false);this._eventsToReemitters&&this._reemitTrackSenderEvents();e.prototype._initialize.call(this)};LocalMediaTrack.prototype._reacquireTrack=function(e){var t;var r=this,n=r._getUserMedia,i=r._gUMSilentTrackWorkaround,a=r._log,o=r.mediaStreamTrack.kind;a.info("Re-acquiring the MediaStreamTrack");a.debug("Constraints:",e);var c=Object.assign({audio:false,video:false},(t={},t[o]=e,t));var s=this._workaroundWebKitBug1208516Cleanup?i(a,n,c):n(c);return s.then((function(e){return e.getTracks()[0]}))};LocalMediaTrack.prototype._reemitTrackSenderEvents=function(){var e=this;this._eventsToReemitters.forEach((function(t,r){return e._trackSender.on(r,t)}));this._trackSender.dequeue("muted");this._trackSender.dequeue("unmuted")};LocalMediaTrack.prototype._restart=function(e){var t=this;var r=this._log;e=e||this._constraints;this._stop();return this._reacquireTrack(e).catch((function(t){r.error("Failed to re-acquire the MediaStreamTrack:",{error:t,constraints:e});throw t})).then((function(n){r.info("Re-acquired the MediaStreamTrack");r.debug("MediaStreamTrack:",n);t._constraints=Object.assign({},e);return t._setMediaStreamTrack(n)}))};LocalMediaTrack.prototype._setMediaStreamTrack=function(e){var t=this;e.enabled=this.mediaStreamTrack.enabled;this._stop();return(this._unprocessedTrack?Promise.resolve().then((function(){t._unprocessedTrack=e})):this._trackSender.setMediaStreamTrack(e).catch((function(r){t._log.warn("setMediaStreamTrack failed:",{error:r,mediaStreamTrack:e})}))).then((function(){t._initialize();t._getAllAttachedElements().forEach((function(e){return t._attach(e)}))}))};LocalMediaTrack.prototype._stop=function(){this.mediaStreamTrack.stop();this._end();return this};LocalMediaTrack.prototype.enable=function(e){e="boolean"!==typeof e||e;if(e!==this.mediaStreamTrack.enabled){this._log.info((e?"En":"Dis")+"abling");this.mediaStreamTrack.enabled=e;this.emit(e?"enabled":"disabled",this)}return this};LocalMediaTrack.prototype.disable=function(){return this.enable(false)};LocalMediaTrack.prototype.restart=function(e){var t=this;var r=this.kind;if(!this._isCreatedByCreateLocalTracks)return Promise.reject(ri("restart","can only be called on a Local"+Xn(r)+"Track that is created using createLocalTracks or createLocal"+Xn(r)+"Track."));if(this._workaroundWebKitBug1208516Cleanup){this._workaroundWebKitBug1208516Cleanup();this._workaroundWebKitBug1208516Cleanup=null}var n=this._restart(e);this._workaroundWebKitBug1208516&&(n=n.finally((function(){t._workaroundWebKitBug1208516Cleanup=restartWhenInadvertentlyStopped(t)})));return n};LocalMediaTrack.prototype.stop=function(){this._log.info("Stopping");if(this._workaroundWebKitBug1208516Cleanup){this._workaroundWebKitBug1208516Cleanup();this._workaroundWebKitBug1208516Cleanup=null}return this._stop()};return LocalMediaTrack}(e)}
/**
 * Restart the given {@link LocalMediaTrack} if it has been inadvertently stopped.
 * @private
 * @param {LocalAudioTrack|LocalVideoTrack} localMediaTrack
 * @returns {function} Clean up listeners attached by the workaround
 */function restartWhenInadvertentlyStopped(e){var t=e._log,r=e.kind,n=e._noiseCancellation;var i={audio:ni,video:ii}[r];var getSourceMediaStreamTrack=function(){return n?n.sourceTrack:e.mediaStreamTrack};var a=e._dummyEl;var o=getSourceMediaStreamTrack();var c=null;function checkSilence(){return a.play().then((function(){return i(a)})).then((function(e){e?t.warn("Silence detected"):t.info("Non-silence detected");return e})).catch((function(e){t.warn("Failed to detect silence:",e)})).finally((function(){e.processedTrack||a.pause()}))}function shouldReacquireTrack(){var t=e._workaroundWebKitBug1208516Cleanup,r=e.isStopped;var n=r&&!!t;var i=getSourceMediaStreamTrack().muted;return Promise.resolve().then((function(){return"visible"===document.visibilityState&&!c&&(i||n||checkSilence())}))}function maybeRestart(){return Promise.race([ti(o,"unmute"),ei(50)]).then((function(){return shouldReacquireTrack()})).then((function(n){if(n&&!c){c=Zn();e._restart().finally((function(){a=e._dummyEl;removeMediaStreamTrackListeners();o=getSourceMediaStreamTrack();addMediaStreamTrackListeners();c.resolve();c=null})).catch((function(e){t.error("failed to restart track: ",e)}))}var i=c&&c.promise||Promise.resolve();return i.finally((function(){return oi.resolveDeferred(r)}))})).catch((function(e){t.error("error in maybeRestart: "+e.message)}))}function onMute(){var t=e._log,r=e.kind;t.info("Muted");t.debug("LocalMediaTrack:",e);oi.startDeferred(r)}function addMediaStreamTrackListeners(){o.addEventListener("ended",maybeRestart);o.addEventListener("mute",onMute);o.addEventListener("unmute",maybeRestart)}function removeMediaStreamTrackListeners(){o.removeEventListener("ended",maybeRestart);o.removeEventListener("mute",onMute);o.removeEventListener("unmute",maybeRestart)}var onVisibilityChange=function(e){return!!e&&maybeRestart()};ai.onVisibilityChange(1,onVisibilityChange);addMediaStreamTrackListeners();return function(){ai.offVisibilityChange(1,onVisibilityChange);removeMediaStreamTrackListeners()}}zn=mixinLocalMediaTrack$2;var ui=zn;var li={};var di=li&&li.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var pi=hr.isIOS;var fi=Pr;var vi=U.isIOSChrome;var hi=un;var _i=ui;var mi=_i(hi);var gi=function(e){di(LocalAudioTrack,e);
/**
   * Construct a {@link LocalAudioTrack} from a MediaStreamTrack.
   * @param {MediaStreamTrack} mediaStreamTrack - An audio MediaStreamTrack
   * @param {LocalTrackOptions} [options] - {@link LocalTrack} options
   */function LocalAudioTrack(t,r){var n=this;var i=(null===r||void 0===r?void 0:r.noiseCancellation)||null;n=e.call(this,t,r)||this;var a=n._log;var o=t.label,c=void 0===o?"":o;var s=t.getSettings(),u=s.deviceId,l=void 0===u?"":u,d=s.groupId,p=void 0===d?"":d;Object.defineProperties(n,{_currentDefaultDeviceInfo:{value:{deviceId:l,groupId:p,label:c},writable:true},_defaultDeviceCaptureMode:{value:!pi()&&n._isCreatedByCreateLocalTracks&&"object"===typeof navigator&&"object"===typeof navigator.mediaDevices&&"function"===typeof navigator.mediaDevices.addEventListener&&"function"===typeof navigator.mediaDevices.enumerateDevices?(null===r||void 0===r?void 0:r.defaultDeviceCaptureMode)||"auto":"manual"},_onDeviceChange:{value:function(){navigator.mediaDevices.enumerateDevices().then((function(e){var t=e.find((function(e){var t=e.deviceId,r=e.kind;return"audioinput"===r&&"default"!==t}));if(t&&["deviceId","groupId"].some((function(e){return t[e]!==n._currentDefaultDeviceInfo[e]}))){a.info("Default device changed, restarting the LocalAudioTrack");a.debug('Old default device: "'+n._currentDefaultDeviceInfo.deviceId+'" => "'+n._currentDefaultDeviceInfo.label+'"');a.debug('New default device: "'+t.deviceId+'" => "'+t.label+'"');n._currentDefaultDeviceInfo=t;n._restartDefaultDevice().catch((function(e){return a.warn("Failed to restart: "+e.message)}))}}),(function(e){a.warn("Failed to run enumerateDevices(): "+e.message)}))}},_restartOnDefaultDeviceChangeCleanup:{value:null,writable:true},noiseCancellation:{enumerable:true,value:i,writable:false}});a.debug("defaultDeviceCaptureMode:",n._defaultDeviceCaptureMode);n._maybeRestartOnDefaultDeviceChange();return n}LocalAudioTrack.prototype.toString=function(){return"[LocalAudioTrack #"+this._instanceId+": "+this.id+"]"};LocalAudioTrack.prototype.attach=function(t){t=e.prototype.attach.call(this,t);t.muted=true;return t};LocalAudioTrack.prototype._end=function(){return e.prototype._end.apply(this,arguments)};LocalAudioTrack.prototype._maybeRestartOnDefaultDeviceChange=function(){var e=this;var t=this,r=t._constraints,n=t._defaultDeviceCaptureMode,i=t._log;var a=this.noiseCancellation?this.noiseCancellation.sourceTrack:this.mediaStreamTrack;var o=a.getSettings().deviceId;var isNotEqualToCapturedDeviceIdOrEqualToDefault=function(e){return e!==o||"default"===e};var c=function checkIfCapturingFromDefaultDevice(e){void 0===e&&(e={});return"string"===typeof e?isNotEqualToCapturedDeviceIdOrEqualToDefault(e):Array.isArray(e)?e.every(isNotEqualToCapturedDeviceIdOrEqualToDefault):e.exact?checkIfCapturingFromDefaultDevice(e.exact):!e.ideal||checkIfCapturingFromDefaultDevice(e.ideal)}(r.deviceId);if("auto"===n&&c){if(!this._restartOnDefaultDeviceChangeCleanup){i.info("LocalAudioTrack will be restarted if the default device changes");navigator.mediaDevices.addEventListener("devicechange",this._onDeviceChange);this._restartOnDefaultDeviceChangeCleanup=function(){i.info("Cleaning up the listener to restart the LocalAudioTrack if the default device changes");navigator.mediaDevices.removeEventListener("devicechange",e._onDeviceChange);e._restartOnDefaultDeviceChangeCleanup=null}}}else{i.info("LocalAudioTrack will NOT be restarted if the default device changes");this._restartOnDefaultDeviceChangeCleanup&&this._restartOnDefaultDeviceChangeCleanup()}};LocalAudioTrack.prototype._reacquireTrack=function(t){var r=this;this._log.debug("_reacquireTrack: ",t);return this.noiseCancellation?this.noiseCancellation.reacquireTrack((function(){return e.prototype._reacquireTrack.call(r,t)})):e.prototype._reacquireTrack.call(this,t)};LocalAudioTrack.prototype._restartDefaultDevice=function(){var e=this;var t=Object.assign({},this._constraints);var r=Object.assign({},t,{deviceId:this._currentDefaultDeviceInfo.deviceId});return this.restart(r).then((function(){e._constraints=t;e._maybeRestartOnDefaultDeviceChange()}))};LocalAudioTrack.prototype._setMediaStreamTrack=function(t){var r=this;var n=this,i=n._log,a=n.noiseCancellation;var o=e.prototype._setMediaStreamTrack.call(this,t);if(vi()&&!!a){i.debug("iOS Chrome detected, checking if the restarted Krisp audio is silent");o=o.then((function(){return fi(r._dummyEl)})).then((function(t){i.debug("Krisp audio is "+(t?"silent, using source audio":"not silent"));return t&&a.disablePermanently().then((function(){return e.prototype._setMediaStreamTrack.call(r,a.sourceTrack)}))}))}return o};
/**
   * Disable the {@link LocalAudioTrack}. This is equivalent to muting the audio source.
   * @returns {this}
   * @fires LocalAudioTrack#disabled
   */LocalAudioTrack.prototype.disable=function(){return e.prototype.disable.apply(this,arguments)};
/**
   * Enable the {@link LocalAudioTrack}. This is equivalent to unmuting the audio source.
   * @returns {this}
   * @fires LocalAudioTrack#enabled
  */
/**
     * Enable or disable the {@link LocalAudioTrack}. This is equivalent to unmuting or muting
     * the audio source respectively.
     * @param {boolean} [enabled] - Specify false to disable the
     *   {@link LocalAudioTrack}
     * @returns {this}
     * @fires LocalAudioTrack#disabled
     * @fires LocalAudioTrack#enabled
     */LocalAudioTrack.prototype.enable=function(){return e.prototype.enable.apply(this,arguments)};
/**
   * Restart the {@link LocalAudioTrack}. This stops the existing MediaStreamTrack
   * and creates a new MediaStreamTrack. If the {@link LocalAudioTrack} is being published
   * to a {@link Room}, then all the {@link RemoteParticipant}s will start receiving media
   * from the newly created MediaStreamTrack. You can access the new MediaStreamTrack via
   * the <code>mediaStreamTrack</code> property. If you want to listen to events on
   * the MediaStreamTrack directly, please do so in the "started" event handler. Also,
   * the {@link LocalAudioTrack}'s ID is no longer guaranteed to be the same as the
   * underlying MediaStreamTrack's ID.
   * @param {MediaTrackConstraints} [constraints] - The optional <a href="https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints" target="_blank">MediaTrackConstraints</a>
   *   for restarting the {@link LocalAudioTrack}; If not specified, then the current MediaTrackConstraints
   *   will be used; If <code>{}</code> (empty object) is specified, then the default MediaTrackConstraints
   *   will be used
   * @returns {Promise<void>} Rejects with a TypeError if the {@link LocalAudioTrack} was not created
   *   using an one of <code>createLocalAudioTrack</code>, <code>createLocalTracks</code> or <code>connect</code>;
   *   Also rejects with the <a href="https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia#Exceptions" target="_blank">DOMException</a>
   *   raised by <code>getUserMedia</code> when it fails
   * @fires LocalAudioTrack#stopped
   * @fires LocalAudioTrack#started
   * @example
   * const { connect, createLocalAudioTrack } = require('twilio-video');
   *
   * // Create a LocalAudioTrack that captures audio from a USB microphone.
   * createLocalAudioTrack({ deviceId: 'usb-mic-id' }).then(function(localAudioTrack) {
   *   return connect('token', {
   *     name: 'my-cool-room',
   *     tracks: [localAudioTrack]
   *   });
   * }).then(function(room) {
   *   // Restart the LocalAudioTrack to capture audio from the default microphone.
   *   const localAudioTrack = Array.from(room.localParticipant.audioTracks.values())[0].track;
   *   return localAudioTrack.restart({ deviceId: 'default-mic-id' });
   * });
   */LocalAudioTrack.prototype.restart=function(){return e.prototype.restart.apply(this,arguments)};
/**
   * Calls stop on the underlying MediaStreamTrack. If you choose to stop a
   * {@link LocalAudioTrack}, you should unpublish it after stopping.
   * @returns {this}
   * @fires LocalAudioTrack#stopped
   */LocalAudioTrack.prototype.stop=function(){this.noiseCancellation&&this.noiseCancellation.stop();this._restartOnDefaultDeviceChangeCleanup&&this._restartOnDefaultDeviceChangeCleanup();return e.prototype.stop.apply(this,arguments)};return LocalAudioTrack}(mi);
/**
 * The {@link LocalAudioTrack} was disabled, i.e. the audio source was muted by the user.
 * @param {LocalAudioTrack} track - The {@link LocalAudioTrack} that was
 *   disabled
 * @event LocalAudioTrack#disabled
 */
/**
 * The {@link LocalAudioTrack} was enabled, i.e. the audio source was unmuted by the user.
 * @param {LocalAudioTrack} track - The {@link LocalAudioTrack} that was enabled
 * @event LocalAudioTrack#enabled
 */
/**
 * The {@link LocalAudioTrack} was muted because the audio source stopped sending samples, most
 * likely due to another application taking said audio source, especially on mobile devices.
 * @param {LocalAudioTrack} track - The {@link LocalAudioTrack} that was muted
 * @event LocalAudioTrack#muted
 */
/**
 * The {@link LocalAudioTrack} started. This means there is enough audio data to
 * begin playback.
 * @param {LocalAudioTrack} track - The {@link LocalAudioTrack} that started
 * @event LocalAudioTrack#started
 */
/**
 * The {@link LocalAudioTrack} stopped, either because {@link LocalAudioTrack#stop}
 * or {@link LocalAudioTrack#restart} was called or because the underlying
 * MediaStreamTrack ended.
 * @param {LocalAudioTrack} track - The {@link LocalAudioTrack} that stopped
 * @event LocalAudioTrack#stopped
 */
/**
 * The {@link LocalAudioTrack} was unmuted because the audio source resumed sending samples,
 * most likely due to the application that took over the said audio source has released it
 * back to the application, especially on mobile devices. This event is also fired when
 * {@link LocalAudioTrack#restart} is called on a muted {@link LocalAudioTrack} with a
 * new audio source.
 * @param {LocalAudioTrack} track - The {@link LocalAudioTrack} that was unmuted
 * @event LocalAudioTrack#unmuted
 */li=gi;var yi=li;var bi={};var ki=pr;var Si=yi;function LocalAudioTrack$4(e,t){var r=new Si(e,t);Object.setPrototypeOf(r,LocalAudioTrack$4.prototype);return r}ki(LocalAudioTrack$4,Si);bi=LocalAudioTrack$4;var Ti=bi;var wi="default"in e?e.default:e;var Ci={};var Pi=Ci&&Ci.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Oi=wi.EventEmitter;var Ei=v.DEFAULT_VIDEO_PROCESSOR_STATS_INTERVAL_MS;var Ri=function(e){Pi(VideoProcessorEventObserver,e);
/**
   * Constructor.
   * @param {Log} log
   */function VideoProcessorEventObserver(t){var r=e.call(this)||this;Object.defineProperties(r,{_lastStatsSaveTime:{value:null,writable:true},_lastStatsPublishTime:{value:null,writable:true},_log:{value:t},_processorInfo:{value:null,writable:true},_stats:{value:null,writable:true}});r.on("add",(function(e){r._lastStatsSaveTime=Date.now();r._lastStatsPublishTime=Date.now();r._processorInfo=e;r._stats=[];r._reemitEvent("add",r._getEventData())}));r.on("remove",(function(){var e=r._getEventData();r._lastStatsSaveTime=null;r._lastStatsPublishTime=null;r._processorInfo=null;r._stats=null;r._reemitEvent("remove",e)}));r.on("start",(function(){r._reemitEvent("start",r._getEventData())}));r.on("stop",(function(e){r._reemitEvent("stop",Object.assign({message:e},r._getEventData()))}));r.on("stats",(function(){return r._maybeEmitStats()}));return r}VideoProcessorEventObserver.prototype._getEventData=function(){if(!this._processorInfo)return{};var e=this._processorInfo,t=e.processor,r=e.captureHeight,n=e.captureWidth,i=e.inputFrameRate,a=e.isRemoteVideoTrack,o=e.inputFrameBufferType,c=e.outputFrameBufferContextType;var s={captureHeight:r,captureWidth:n,inputFrameRate:i,isRemoteVideoTrack:a,inputFrameBufferType:o,outputFrameBufferContextType:c};s.name=t._name||"VideoProcessor";["assetsPath","blurFilterRadius","debounce","fitType","isSimdEnabled","maskBlurRadius","pipeline","version"].forEach((function(e){var r=t["_"+e];"undefined"!==typeof r&&(s[e]=r)}));Object.keys(s).forEach((function(e){var t=s[e];"boolean"===typeof t&&(s[e]=t?"true":"false")}));return s};VideoProcessorEventObserver.prototype._maybeEmitStats=function(){if(this._stats&&this._processorInfo){var e=this._processorInfo.processor._benchmark;if(e){var t=Date.now();if(!(t-this._lastStatsSaveTime<1e3)){var r={outputFrameRate:e.getRate("totalProcessingDelay")};["captureFrameDelay","imageCompositionDelay","inputImageResizeDelay","processFrameDelay","segmentationDelay"].forEach((function(t){r[t]=e.getAverageDelay(t)}));this._lastStatsSaveTime=t;this._stats.push(r);if(!(t-this._lastStatsPublishTime<Ei)){this._lastStatsPublishTime=t;var n=this._stats.splice(0);var i=n.reduce((function(e,t,n){Object.keys(r).forEach((function(r){e[r]||(e[r]=0);e[r]=(e[r]*n+t[r])/(n+1)}));return e}),{});Object.keys(i).forEach((function(e){i[e]=parseFloat(i[e].toFixed(2))}));this._reemitEvent("stats",Object.assign({},i,this._getEventData()))}}}}};VideoProcessorEventObserver.prototype._reemitEvent=function(e,t){this._log.debug("VideoProcessor:"+e,t);this.emit("event",{name:e,data:t})};return VideoProcessorEventObserver}(Oi);Ci=Ri;var Li=Ci;var Mi={};var Ii=Mi&&Mi.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var ji=nn;var Ai=Li;var Di=v.DEFAULT_FRAME_RATE;var xi=function(e){Ii(VideoTrack,e);
/**
   * Construct a {@link VideoTrack}.
   * @param {MediaTrackTransceiver} mediaTrackTransceiver
   * @param {{log: Log}} options
   */function VideoTrack(t,r){var n=e.call(this,t,r)||this;Object.defineProperties(n,{_captureTimeoutId:{value:null,writable:true},_isCapturing:{value:false,writable:true},_inputFrame:{value:null,writable:true},_outputFrame:{value:null,writable:true},_processorEventObserver:{value:null,writable:true},_processorOptions:{value:{},writable:true},_unmuteHandler:{value:null,writable:true},dimensions:{enumerable:true,value:{width:null,height:null}},processor:{enumerable:true,value:null,writable:true}});n._processorEventObserver=new(r.VideoProcessorEventObserver||Ai)(n._log);return n}VideoTrack.prototype._checkIfCanCaptureFrames=function(e){void 0===e&&(e=false);var t=true;var r="";var n=this.mediaStreamTrack,i=n.enabled,a=n.readyState;if(!i){t=false;r="MediaStreamTrack is disabled"}if("ended"===a){t=false;r="MediaStreamTrack is ended"}if(!this.processor){t=false;r="VideoProcessor not detected."}if(!this._attachments.size&&!e){t=false;r="VideoTrack is not publishing and there is no attached element."}r&&this._log.debug(r);return{canCaptureFrames:t,message:r}};VideoTrack.prototype._captureFrames=function(){var e=this;if(this._isCapturing)this._log.debug("Ignoring captureFrames call. Capture is already in progress");else if(this._checkIfCanCaptureFrames().canCaptureFrames){this._isCapturing=true;this._processorEventObserver.emit("start");this._log.debug("Start capturing frames");var t=Date.now();var r;this._dummyEl.play().then((function(){var captureFrame=function(t){clearTimeout(e._captureTimeoutId);var n=e.mediaStreamTrack.getSettings().frameRate,i=void 0===n?Di:n;var a=Math.floor(1e3/i);var o=a-r;(o<0||"number"!==typeof r)&&(o=0);e._captureTimeoutId=setTimeout(t,o)};var process=function(){var n=e._checkIfCanCaptureFrames();if(n.canCaptureFrames){t=Date.now();var i=e.mediaStreamTrack.getSettings(),a=i.width,o=void 0===a?0:a,c=i.height,s=void 0===c?0:c;if(e._outputFrame&&e._outputFrame.width!==o){e._outputFrame.width=o;e._outputFrame.height=s}if(e._inputFrame){if(e._inputFrame.width!==o){e._inputFrame.width=o;e._inputFrame.height=s}e._inputFrame.getContext("2d").drawImage(e._dummyEl,0,0,o,s)}var u=null;try{var l="video"===e._processorOptions.inputFrameBufferType?e._dummyEl:e._inputFrame;u=e.processor.processFrame(l,e._outputFrame)}catch(t){e._log.debug("Exception detected after calling processFrame.",t)}(u instanceof Promise?u:Promise.resolve(u)).then((function(){if(e._outputFrame){"function"===typeof e.processedTrack.requestFrame&&e.processedTrack.requestFrame();e._processorEventObserver.emit("stats")}})).finally((function(){r=Date.now()-t;captureFrame(process)}))}else{e._isCapturing=false;e._processorEventObserver.emit("stop",n.message);e._log.debug("Cannot capture frames. Stopping capturing frames.")}};captureFrame(process)})).catch((function(t){return e._log.error("Video element cannot be played",{error:t,track:e})}))}else{this._isCapturing=false;this._log.debug("Cannot capture frames. Ignoring captureFrames call.")}};VideoTrack.prototype._initialize=function(){var t=this;e.prototype._initialize.call(this);if(this._dummyEl){this._dummyEl.onloadedmetadata=function(){if(dimensionsChanged(t,t._dummyEl)){t.dimensions.width=t._dummyEl.videoWidth;t.dimensions.height=t._dummyEl.videoHeight}};this._dummyEl.onresize=function(){if(dimensionsChanged(t,t._dummyEl)){t.dimensions.width=t._dummyEl.videoWidth;t.dimensions.height=t._dummyEl.videoHeight;if(t.isStarted){t._log.debug("Dimensions changed:",t.dimensions);t.emit(VideoTrack.DIMENSIONS_CHANGED,t)}}}}};VideoTrack.prototype._restartProcessor=function(){var e=this.processor;if(e){var t=Object.assign({},this._processorOptions);this.removeProcessor(e);this.addProcessor(e,t)}};VideoTrack.prototype._start=function(t){this.dimensions.width=t.videoWidth;this.dimensions.height=t.videoHeight;this._log.debug("Dimensions:",this.dimensions);this.emit(VideoTrack.DIMENSIONS_CHANGED,this);return e.prototype._start.call(this,t)};
/**
   * Add a {@link VideoProcessor} to allow for custom processing of video frames belonging to a VideoTrack.
   * @param {VideoProcessor} processor - The {@link VideoProcessor} to use.
   * @param {AddProcessorOptions} [options] - {@link AddProcessorOptions} to provide.
   * @returns {this}
   * @example
   * class GrayScaleProcessor {
   *   constructor(percentage) {
   *     this.percentage = percentage;
   *   }
   *   processFrame(inputFrameBuffer, outputFrameBuffer) {
   *     const context = outputFrameBuffer.getContext('2d');
   *     context.filter = `grayscale(${this.percentage}%)`;
   *     context.drawImage(inputFrameBuffer, 0, 0, inputFrameBuffer.width, inputFrameBuffer.height);
   *   }
   * }
   *
   * Video.createLocalVideoTrack().then(function(videoTrack) {
   *   videoTrack.addProcessor(new GrayScaleProcessor(100));
   * });
   */VideoTrack.prototype.addProcessor=function(e,t){var r=this;if(!e||"function"!==typeof e.processFrame)throw new Error("Received an invalid VideoProcessor from addProcessor.");if(this.processor)throw new Error("A VideoProcessor has already been added.");if(!this._dummyEl)throw new Error("VideoTrack has not been initialized.");this._log.debug("Adding VideoProcessor to the VideoTrack",e);if(!this._unmuteHandler){this._unmuteHandler=function(){r._log.debug("mediaStreamTrack unmuted");if(r.processedTrack.muted){r._log.debug("mediaStreamTrack is unmuted but processedTrack is muted. Restarting processor.");r._restartProcessor()}};this.mediaStreamTrack.addEventListener("unmute",this._unmuteHandler)}this._processorOptions=t||{};var n=this._processorOptions,i=n.inputFrameBufferType,a=n.outputFrameBufferContextType;if("undefined"===typeof OffscreenCanvas&&"offscreencanvas"===i)throw new Error("OffscreenCanvas is not supported by this browser.");if(i&&"video"!==i&&"canvas"!==i&&"offscreencanvas"!==i)throw new Error("Invalid inputFrameBufferType of "+i);i||(i="undefined"===typeof OffscreenCanvas?"canvas":"offscreencanvas");var o=this.mediaStreamTrack.getSettings(),c=o.width,s=void 0===c?0:c,u=o.height,l=void 0===u?0:u,d=o.frameRate,p=void 0===d?Di:d;"offscreencanvas"===i&&(this._inputFrame=new OffscreenCanvas(s,l));"canvas"===i&&(this._inputFrame=document.createElement("canvas"));if(this._inputFrame){this._inputFrame.width=s;this._inputFrame.height=l}this._outputFrame=document.createElement("canvas");this._outputFrame.width=s;this._outputFrame.height=l;a=a||"2d";var f=this._outputFrame.getContext(a);if(!f)throw new Error("Cannot get outputFrameBufferContextType: "+a+".");var v="undefined"!==typeof CanvasCaptureMediaStreamTrack&&CanvasCaptureMediaStreamTrack.prototype&&"function"===typeof CanvasCaptureMediaStreamTrack.prototype.requestFrame?0:void 0;this.processedTrack=this._outputFrame.captureStream(v).getTracks()[0];this.processedTrack.enabled=this.mediaStreamTrack.enabled;this.processor=e;this._processorEventObserver.emit("add",{processor:e,captureHeight:l,captureWidth:s,inputFrameRate:p,isRemoteVideoTrack:this.toString().includes("RemoteVideoTrack"),inputFrameBufferType:i,outputFrameBufferContextType:a});this._updateElementsMediaStreamTrack();this._captureFrames();return this};
/**
   * Create an HTMLVideoElement and attach the {@link VideoTrack} to it.
   *
   * The HTMLVideoElement's <code>srcObject</code> will be set to a new
   * MediaStream containing the {@link VideoTrack}'s MediaStreamTrack.
   *
   * @returns {HTMLVideoElement} videoElement
   * @example
   * const Video = require('twilio-video');
   *
   * Video.createLocalVideoTrack().then(function(videoTrack) {
   *   const videoElement = videoTrack.attach();
   *   document.body.appendChild(videoElement);
   * });
  */
/**
     * Attach the {@link VideoTrack} to an existing HTMLMediaElement. The
     * HTMLMediaElement could be an HTMLAudioElement or an HTMLVideoElement.
     *
     * If the HTMLMediaElement's <code>srcObject</code> is not set to a MediaStream,
     * this method sets it to a new MediaStream containing the {@link VideoTrack}'s
     * MediaStreamTrack; otherwise, it adds the {@link MediaTrack}'s
     * MediaStreamTrack to the existing MediaStream. Finally, if there are any other
     * MediaStreamTracks of the same kind on the MediaStream, this method removes
     * them.
     *
     * @param {HTMLMediaElement} mediaElement - The HTMLMediaElement to attach to
     * @returns {HTMLMediaElement} mediaElement
     * @example
     * const Video = require('twilio-video');
     *
     * const videoElement = document.createElement('video');
     * document.body.appendChild(videoElement);
     *
     * Video.createLocalVideoTrack().then(function(videoTrack) {
     *   videoTrack.attach(videoElement);
     * });
     */
/**
        * Attach the {@link VideoTrack} to an HTMLMediaElement selected by
        * <code>document.querySelector</code>. The HTMLMediaElement could be an
        * HTMLAudioElement or an HTMLVideoElement.
        *
        * If the HTMLMediaElement's <code>srcObject</code> is not set to a MediaStream,
        * this method sets it to a new MediaStream containing the {@link VideoTrack}'s
        * MediaStreamTrack; otherwise, it adds the {@link VideoTrack}'s
        * MediaStreamTrack to the existing MediaStream. Finally, if there are any other
        * MediaStreamTracks of the same kind on the MediaStream, this method removes
        * them.
        *
        * @param {string} selector - A query selector for the HTMLMediaElement to
        *   attach to
        * @returns {HTMLMediaElement} mediaElement
        * @example
        * const Video = require('twilio-video');
        *
        * const videoElement = document.createElement('video');
        * videoElement.id = 'my-video-element';
        * document.body.appendChild(videoElement);
        *
        * Video.createLocalVideoTrack().then(function(track) {
        *   track.attach('#my-video-element');
        * });
        */VideoTrack.prototype.attach=function(){var t=e.prototype.attach.apply(this,arguments);this.processor&&this._captureFrames();return t};
/**
   * Detach the {@link VideoTrack} from all previously attached HTMLMediaElements.
   * @returns {Array<HTMLMediaElement>} mediaElements
   * @example
   * const mediaElements = videoTrack.detach();
   * mediaElements.forEach(mediaElement => mediaElement.remove());
  */
/**
     * Detach the {@link VideoTrack} from a previously attached HTMLMediaElement.
     * @param {HTMLMediaElement} mediaElement - One of the HTMLMediaElements to
     *   which the {@link VideoTrack} is attached
     * @returns {HTMLMediaElement} mediaElement
     * @example
     * const videoElement = document.getElementById('my-video-element');
     * videoTrack.detach(videoElement).remove();
     */
/**
        * Detach the {@link VideoTrack} from a previously attached HTMLMediaElement
        *   specified by <code>document.querySelector</code>.
        * @param {string} selector - The query selector of HTMLMediaElement to which
        *    the {@link VideoTrack} is attached
        * @returns {HTMLMediaElement} mediaElement
        * @example
        * videoTrack.detach('#my-video-element').remove();
        */VideoTrack.prototype.detach=function(){return e.prototype.detach.apply(this,arguments)};
/**
   * Remove the previously added {@link VideoProcessor} using `addProcessor` API.
   * @param {VideoProcessor} processor - The {@link VideoProcessor} to remove.
   * @returns {this}
   * @example
   * class GrayScaleProcessor {
   *   constructor(percentage) {
   *     this.percentage = percentage;
   *   }
   *   processFrame(inputFrameBuffer, outputFrameBuffer) {
   *     const context = outputFrameBuffer.getContext('2d');
   *     context.filter = `grayscale(${this.percentage}%)`;
   *     context.drawImage(inputFrameBuffer, 0, 0, inputFrameBuffer.width, inputFrameBuffer.height);
   *   }
   * }
   *
   * Video.createLocalVideoTrack().then(function(videoTrack) {
   *   const grayScaleProcessor = new GrayScaleProcessor(100);
   *   videoTrack.addProcessor(grayScaleProcessor);
   *   document.getElementById('remove-button').onclick = () => videoTrack.removeProcessor(grayScaleProcessor);
   * });
   */VideoTrack.prototype.removeProcessor=function(e){if(!e)throw new Error("Received an invalid VideoProcessor from removeProcessor.");if(!this.processor)throw new Error("No existing VideoProcessor detected.");if(e!==this.processor)throw new Error("The provided VideoProcessor is different than the existing one.");this._processorEventObserver.emit("remove");this._log.debug("Removing VideoProcessor from the VideoTrack",e);clearTimeout(this._captureTimeoutId);this.mediaStreamTrack.removeEventListener("unmute",this._unmuteHandler);this._processorOptions={};this._unmuteHandler=null;this._isCapturing=false;this.processor=null;this.processedTrack=null;this._inputFrame=null;this._outputFrame=null;this._updateElementsMediaStreamTrack();return this};return VideoTrack}(ji);xi.DIMENSIONS_CHANGED="dimensionsChanged";function dimensionsChanged(e,t){return e.dimensions.width!==t.videoWidth||e.dimensions.height!==t.videoHeight}
/**
 * A {@link VideoTrack}'s width and height.
 * @typedef {object} VideoTrack.Dimensions
 * @property {?number} width - The {@link VideoTrack}'s width or null if the
 *   {@link VideoTrack} has not yet started
 * @property {?number} height - The {@link VideoTrack}'s height or null if the
 *   {@link VideoTrack} has not yet started
 */
/**
 * A {@link VideoProcessor}, when added via {@link VideoTrack#addProcessor},
 * is used to process incoming video frames before
 * sending to the encoder or renderer.
 * @typedef {object} VideoProcessor
 * @property {function} processFrame - A callback to receive input and output frame buffers for processing.
 * The input frame buffer contains the original video frame which can be used for additional processing
 * such as applying filters to it. The output frame buffer is used to receive the processed video frame
 * before sending to the encoder or renderer.
 *
 * Any exception raised (either synchronously or asynchronously) in `processFrame` will result in the frame being dropped.
 * This callback has the following signature:<br/><br/>
 * <code>processFrame(</code><br/>
 * &nbsp;&nbsp;<code>inputFrameBuffer: OffscreenCanvas | HTMLCanvasElement | HTMLVideoElement,</code><br/>
 * &nbsp;&nbsp;<code>outputFrameBuffer: HTMLCanvasElement</code><br/>
 * <code>): Promise&lt;void&gt; | void;</code>
 *
 * @example
 * class GrayScaleProcessor {
 *   constructor(percentage) {
 *     this.percentage = percentage;
 *   }
 *   processFrame(inputFrameBuffer, outputFrameBuffer) {
 *     const context = outputFrameBuffer.getContext('2d');
 *     context.filter = `grayscale(${this.percentage}%)`;
 *     context.drawImage(inputFrameBuffer, 0, 0, inputFrameBuffer.width, inputFrameBuffer.height);
 *   }
 * }
 */
/**
 * Possible options to provide to {@link LocalVideoTrack#addProcessor} and {@link RemoteVideoTrack#addProcessor}.
 * @typedef {object} AddProcessorOptions
 * @property {string} [inputFrameBufferType="offscreencanvas"] - This option allows you to specify what kind of input you want to receive in your
 * Video Processor. The default is `offscreencanvas` and will fallback to a regular `canvas` if the browser does not support it.
 * Possible values include the following.
 * <br/>
 * <br/>
 * `offscreencanvas` - Your Video Processor will receive an [OffscreenCanvas](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas)
 * which is good for canvas-related processing that can be rendered off screen.
 * <br/>
 * <br/>
 * `canvas` - Your Video Processor will receive an [HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement).
 * This is recommended on browsers that doesn't support `OffscreenCanvas`, or if you need to render the frame on the screen.
 * <br/>
 * <br/>
 * `video` - Your Video Processor will receive an [HTMLVideoElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement).
 * Use this option if you are processing the frame using WebGL or if you only need to [draw](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage)
 * the frame directly to your output canvas.
 * @property {string} [outputFrameBufferContextType="2d"] - The SDK needs the [context type](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext)
 * that your Video Processor uses in order to properly generate the processed track. For example, if your Video Processor uses WebGL2 (`canvas.getContext('webgl2')`),
 * you should set `outputFrameBufferContextType` to `webgl2`. Or if you're using Canvas 2D processing (`canvas.getContext('2d')`),
 * you should set `outputFrameBufferContextType` to `2d`.
 */
/**
 * The {@link VideoTrack}'s dimensions changed.
 * @param {VideoTrack} track - The {@link VideoTrack} whose dimensions changed
 * @event VideoTrack#dimensionsChanged
 */
/**
 * The {@link VideoTrack} was disabled, i.e. "paused".
 * @param {VideoTrack} track - The {@link VideoTrack} that was disabled
 * @event VideoTrack#disabled
 */
/**
 * The {@link VideoTrack} was enabled, i.e. "unpaused".
 * @param {VideoTrack} track - The {@link VideoTrack} that was enabled
 * @event VideoTrack#enabled
 */
/**
 * The {@link VideoTrack} started. This means there is enough video data to
 * begin playback.
 * @param {VideoTrack} track - The {@link VideoTrack} that started
 * @event VideoTrack#started
 */Mi=xi;var Vi=Mi;var Ni={};var Fi=Ni&&Ni.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Bi=hr.isIOS;var Ui=_n;var $i=ui;var Hi=Vi;var Wi=$i(Hi);var Qi=function(e){Fi(LocalVideoTrack,e);
/**
   * Construct a {@link LocalVideoTrack} from a MediaStreamTrack.
   * @param {MediaStreamTrack} mediaStreamTrack - The underlying MediaStreamTrack
   * @param {LocalTrackOptions} [options] - {@link LocalTrack} options
   */function LocalVideoTrack(t,r){var n=this;r=Object.assign({workaroundSilentLocalVideo:Bi()&&"undefined"!==typeof document&&"function"===typeof document.createElement},r);n=e.call(this,t,r)||this;Object.defineProperties(n,{_workaroundSilentLocalVideo:{value:r.workaroundSilentLocalVideo?workaroundSilentLocalVideo:null},_workaroundSilentLocalVideoCleanup:{value:null,writable:true}});n._workaroundSilentLocalVideo&&(n._workaroundSilentLocalVideoCleanup=n._workaroundSilentLocalVideo(n,document));return n}LocalVideoTrack.prototype.toString=function(){return"[LocalVideoTrack #"+this._instanceId+": "+this.id+"]"};LocalVideoTrack.prototype._checkIfCanCaptureFrames=function(){return e.prototype._checkIfCanCaptureFrames.call(this,this._trackSender.isPublishing)};LocalVideoTrack.prototype._end=function(){return e.prototype._end.apply(this,arguments)};LocalVideoTrack.prototype._setSenderMediaStreamTrack=function(e){var t=this;var r=this.mediaStreamTrack;var n=e?this.processedTrack:r;return this._trackSender.setMediaStreamTrack(n).catch((function(e){return t._log.warn("setMediaStreamTrack failed on LocalVideoTrack RTCRtpSender",{error:e,mediaStreamTrack:n})})).then((function(){t._unprocessedTrack=e?r:null}))};
/**
   * Add a {@link VideoProcessor} to allow for custom processing of video frames belonging to a VideoTrack.
   * @param {VideoProcessor} processor - The {@link VideoProcessor} to use.
   * @param {AddProcessorOptions} [options] - {@link AddProcessorOptions} to provide.
   * @returns {this}
   * @example
   * class GrayScaleProcessor {
   *   constructor(percentage) {
   *     this.percentage = percentage;
   *   }
   *   processFrame(inputFrameBuffer, outputFrameBuffer) {
   *     const context = outputFrameBuffer.getContext('2d');
   *     context.filter = `grayscale(${this.percentage}%)`;
   *     context.drawImage(inputFrameBuffer, 0, 0, inputFrameBuffer.width, inputFrameBuffer.height);
   *   }
   * }
   *
   * const localVideoTrack = Array.from(room.localParticipant.videoTracks.values())[0].track;
   * localVideoTrack.addProcessor(new GrayScaleProcessor(100));
   */LocalVideoTrack.prototype.addProcessor=function(){this._log.debug("Adding VideoProcessor to the LocalVideoTrack");var t=e.prototype.addProcessor.apply(this,arguments);if(!this.processedTrack)return this._log.warn("Unable to add a VideoProcessor to the LocalVideoTrack");this._log.debug("Updating LocalVideoTrack's MediaStreamTrack with the processed MediaStreamTrack",this.processedTrack);this._setSenderMediaStreamTrack(true);return t};
/**
   * Remove the previously added {@link VideoProcessor} using `addProcessor` API.
   * @param {VideoProcessor} processor - The {@link VideoProcessor} to remove.
   * @returns {this}
   * @example
   * class GrayScaleProcessor {
   *   constructor(percentage) {
   *     this.percentage = percentage;
   *   }
   *   processFrame(inputFrameBuffer, outputFrameBuffer) {
   *     const context = outputFrameBuffer.getContext('2d');
   *     context.filter = `grayscale(${this.percentage}%)`;
   *     context.drawImage(inputFrameBuffer, 0, 0, inputFrameBuffer.width, inputFrameBuffer.height);
   *   }
   * }
   *
   * const localVideoTrack = Array.from(room.localParticipant.videoTracks.values())[0].track;
   * const grayScaleProcessor = new GrayScaleProcessor(100);
   * localVideoTrack.addProcessor(grayScaleProcessor);
   *
   * document.getElementById('remove-button').onclick = () => localVideoTrack.removeProcessor(grayScaleProcessor);
   */LocalVideoTrack.prototype.removeProcessor=function(){var t=this;this._log.debug("Removing VideoProcessor from the LocalVideoTrack");var r=e.prototype.removeProcessor.apply(this,arguments);this._log.debug("Updating LocalVideoTrack's MediaStreamTrack with the original MediaStreamTrack");this._setSenderMediaStreamTrack().then((function(){return t._updateElementsMediaStreamTrack()}));return r};
/**
   * Disable the {@link LocalVideoTrack}. This is equivalent to pausing a video source.
   * If a {@link VideoProcessor} is added, then <code>processedTrack</code> is also disabled.
   * @returns {this}
   * @fires VideoTrack#disabled
   */LocalVideoTrack.prototype.disable=function(){var t=e.prototype.disable.apply(this,arguments);this.processedTrack&&(this.processedTrack.enabled=false);return t};
/**
   * Enable the {@link LocalVideoTrack}. This is equivalent to unpausing the video source.
   * If a {@link VideoProcessor} is added, then <code>processedTrack</code> is also enabled.
   * @returns {this}
   * @fires VideoTrack#enabled
  */
/**
     * Enable or disable the {@link LocalVideoTrack}. This is equivalent to unpausing or pausing
     * the video source respectively. If a {@link VideoProcessor} is added, then <code>processedTrack</code>
     * is also enabled or disabled.
     * @param {boolean} [enabled] - Specify false to disable the
     *   {@link LocalVideoTrack}
     * @returns {this}
     * @fires VideoTrack#disabled
     * @fires VideoTrack#enabled
     */LocalVideoTrack.prototype.enable=function(t){void 0===t&&(t=true);var r=e.prototype.enable.apply(this,arguments);if(this.processedTrack){this.processedTrack.enabled=t;if(t){this._captureFrames();this._log.debug("Updating LocalVideoTrack's MediaStreamTrack with the processed MediaStreamTrack",this.processedTrack);this._setSenderMediaStreamTrack(true)}}return r};
/**
   * Restart the {@link LocalVideoTrack}. This stops the existing MediaStreamTrack
   * and creates a new MediaStreamTrack. If the {@link LocalVideoTrack} is being published
   * to a {@link Room}, then all the {@link RemoteParticipant}s will start receiving media
   * from the newly created MediaStreamTrack. You can access the new MediaStreamTrack via
   * the <code>mediaStreamTrack</code> property. If you want to listen to events on
   * the MediaStreamTrack directly, please do so in the "started" event handler. Also,
   * the {@link LocalVideoTrack}'s ID is no longer guaranteed to be the same as the
   * underlying MediaStreamTrack's ID.
   * @param {MediaTrackConstraints} [constraints] - The optional <a href="https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints" target="_blank">MediaTrackConstraints</a>
   *   for restarting the {@link LocalVideoTrack}; If not specified, then the current MediaTrackConstraints
   *   will be used; If <code>{}</code> (empty object) is specified, then the default MediaTrackConstraints
   *   will be used
   * @returns {Promise<void>} Rejects with a TypeError if the {@link LocalVideoTrack} was not created
   *   using an one of <code>createLocalVideoTrack</code>, <code>createLocalTracks</code> or <code>connect</code>;
   *   Also rejects with the <a href="https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia#Exceptions" target="_blank">DOMException</a>
   *   raised by <code>getUserMedia</code> when it fails
   * @fires LocalVideoTrack#stopped
   * @fires LocalVideoTrack#started
   * @example
   * const { connect, createLocalVideoTrack } = require('twilio-video');
   *
   * // Create a LocalVideoTrack that captures video from the front-facing camera.
   * createLocalVideoTrack({ facingMode: 'user' }).then(function(localVideoTrack) {
   *   return connect('token', {
   *     name: 'my-cool-room',
   *     tracks: [localVideoTrack]
   *   });
   * }).then(function(room) {
   *   // Restart the LocalVideoTrack to capture video from the back-facing camera.
   *   const localVideoTrack = Array.from(room.localParticipant.videoTracks.values())[0].track;
   *   return localVideoTrack.restart({ facingMode: 'environment' });
   * });
   */LocalVideoTrack.prototype.restart=function(){var t=this;if(this._workaroundSilentLocalVideoCleanup){this._workaroundSilentLocalVideoCleanup();this._workaroundSilentLocalVideoCleanup=null}var r=e.prototype.restart.apply(this,arguments);this.processor&&r.then((function(){t._restartProcessor()}));this._workaroundSilentLocalVideo&&r.finally((function(){t._workaroundSilentLocalVideoCleanup=t._workaroundSilentLocalVideo(t,document)}));return r};
/**
   * Calls stop on the underlying MediaStreamTrack. If you choose to stop a
   * {@link LocalVideoTrack}, you should unpublish it after stopping.
   * @returns {this}
   * @fires LocalVideoTrack#stopped
   */LocalVideoTrack.prototype.stop=function(){if(this._workaroundSilentLocalVideoCleanup){this._workaroundSilentLocalVideoCleanup();this._workaroundSilentLocalVideoCleanup=null}return e.prototype.stop.apply(this,arguments)};return LocalVideoTrack}(Wi);
/**
 * Work around a bug where local video MediaStreamTracks are silent (even though
 * they are enabled, live and unmuted) after accepting/rejecting a phone call.
 * @private
 * @param {LocalVideoTrack} localVideoTrack
 * @param {HTMLDocument} doc
 * @returns {function} Cleans up listeners attached by the workaround
 */function workaroundSilentLocalVideo(e,t){var r=e._log;var n=e._dummyEl,i=e.mediaStreamTrack;function onUnmute(){if(e.isEnabled){r.info("Unmuted, checking silence");n.play().then((function(){return Ui(n,t)})).then((function(t){if(t){r.warn("Silence detected, restarting");e._stop();return e._restart()}r.info("Non-silent frames detected, so no need to restart")})).catch((function(e){r.warn("Failed to detect silence and restart:",e)})).finally((function(){n=e._dummyEl;!n||n.paused||e.processedTrack||n.pause();i.removeEventListener("unmute",onUnmute);i=e.mediaStreamTrack;i.addEventListener("unmute",onUnmute)}))}}i.addEventListener("unmute",onUnmute);return function(){i.removeEventListener("unmute",onUnmute)}}
/**
 * The {@link LocalVideoTrack} was disabled, i.e. the video source was paused by the user.
 * @param {LocalVideoTrack} track - The {@link LocalVideoTrack} that was
 *   disabled
 * @event LocalVideoTrack#disabled
 */
/**
 * The {@link LocalVideoTrack} was enabled, i.e. the video source was unpaused by the user.
 * @param {LocalVideoTrack} track - The {@link LocalVideoTrack} that was enabled
 * @event LocalVideoTrack#enabled
 */
/**
 * The {@link LocalVideoTrack} was muted because the video source stopped sending frames, most
 * likely due to another application taking said video source, especially on mobile devices.
 * @param {LocalVideoTrack} track - The {@link LocalVideoTrack} that was muted
 * @event LocalVideoTrack#muted
 */
/**
 * The {@link LocalVideoTrack} started. This means there is enough video data
 * to begin playback.
 * @param {LocalVideoTrack} track - The {@link LocalVideoTrack} that started
 * @event LocalVideoTrack#started
 */
/**
 * The {@link LocalVideoTrack} stopped, either because {@link LocalVideoTrack#stop}
 * or {@link LocalVideoTrack#restart} was called or because the underlying
 * MediaStreamTrack ended.
 * @param {LocalVideoTrack} track - The {@link LocalVideoTrack} that stopped
 * @event LocalVideoTrack#stopped
 */
/**
 * The {@link LocalVideoTrack} was unmuted because the video source resumed sending frames,
 * most likely due to the application that took over the said video source has released it
 * back to the application, especially on mobile devices. This event is also fired when
 * {@link LocalVideoTrack#restart} is called on a muted {@link LocalVideoTrack} with a
 * new video source.
 * @param {LocalVideoTrack} track - The {@link LocalVideoTrack} that was unmuted
 * @event LocalVideoTrack#unmuted
 */Ni=Qi;var qi=Ni;var zi={};var Gi=pr;var Ki=qi;function LocalVideoTrack$4(e,t){var r=new Ki(e,t);Object.setPrototypeOf(r,LocalVideoTrack$4.prototype);return r}Gi(LocalVideoTrack$4,Ki);zi=LocalVideoTrack$4;var Ji=zi;var Yi={};var Xi=Yi&&Yi.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Zi=Dn;var ea=function(e){Xi(DataTrackTransceiver,e);
/**
   * Construct a {@link DataTrackTransceiver}.
   * @param {string} id
   * @param {?number} maxPacketLifeTime
   * @param {?number} maxRetransmits
   * @param {boolean} ordered
   */function DataTrackTransceiver(t,r,n,i){var a=e.call(this,t,"data")||this;Object.defineProperties(a,{maxPacketLifeTime:{enumerable:true,value:r},maxRetransmits:{enumerable:true,value:n},ordered:{enumerable:true,value:i}});return a}return DataTrackTransceiver}(Zi);Yi=ea;var ta=Yi;var ra={};var na=ra&&ra.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var ia=ta;var aa=Y.makeUUID;var oa=function(e){na(DataTrackSender,e);
/**
   * Construct a {@link DataTrackSender}.
   * @param {?number} maxPacketLifeTime
   * @param {?number} maxRetransmits
   * @param {boolean} ordered
   */function DataTrackSender(t,r,n){var i=e.call(this,aa(),t,r,n)||this;Object.defineProperties(i,{_clones:{value:new Set},_dataChannels:{value:new Set}});return i}
/**
   * Add a cloned {@link DataTrackSender}.
   * @private
   * @returns {void}
   */DataTrackSender.prototype._addClone=function(e){this._clones.add(e)};
/**
   * Remove a cloned {@link DataTrackSender}.
   * @returns {void}
   */DataTrackSender.prototype.removeClone=function(e){this._clones.delete(e)};
/**
   * Add an RTCDataChannel to the {@link DataTrackSender}.
   * @param {RTCDataChannel} dataChannel
   * @returns {this}
   */DataTrackSender.prototype.addDataChannel=function(e){this._dataChannels.add(e);return this};
/**
   * Return a new {@link DataTrackSender}. Any message sent over this
   * {@link DataTrackSender} will also be sent over the clone. Whenever this
   * {@link DataTrackSender} is stopped, so to will the clone.
   * @returns {DataTrackSender}
   */DataTrackSender.prototype.clone=function(){var e=this;var t=new DataTrackSender(this.maxPacketLifeTime,this.maxRetransmits,this.ordered);this._addClone(t);t.once("stopped",(function(){return e.removeClone(t)}));return t};
/**
   * Remove an RTCDataChannel from the {@link DataTrackSender}.
   * @param {RTCDataChannel} dataChannel
   * @returns {this}
   */DataTrackSender.prototype.removeDataChannel=function(e){this._dataChannels.delete(e);return this};
/**
   * Send data over the {@link DataTrackSender}. Internally, this calls
   * <code>send</code> over each of the underlying RTCDataChannels.
   * @param {string|Blob|ArrayBuffer|ArrayBufferView} data
   * @returns {this}
   */DataTrackSender.prototype.send=function(e){this._dataChannels.forEach((function(t){try{t.send(e)}catch(e){}}));this._clones.forEach((function(t){try{t.send(e)}catch(e){}}));return this};DataTrackSender.prototype.stop=function(){this._dataChannels.forEach((function(e){return e.close()}));this._clones.forEach((function(e){return e.stop()}));e.prototype.stop.call(this)};return DataTrackSender}(ia);ra=oa;var ca=ra;var sa={};var ua=sa&&sa.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var la=qr;var da=ca;var pa=function(e){ua(LocalDataTrack,e);
/**
   * Construct a {@link LocalDataTrack}.
   * @param {LocalDataTrackOptions} [options] - {@link LocalDataTrack} options
   */function LocalDataTrack(t){var r=this;t=Object.assign({DataTrackSender:da,maxPacketLifeTime:null,maxRetransmits:null,ordered:true},t);var n=t.DataTrackSender;var i=new n(t.maxPacketLifeTime,t.maxRetransmits,t.ordered);r=e.call(this,i.id,"data",t)||this;Object.defineProperties(r,{_trackSender:{value:i},id:{enumerable:true,value:i.id},maxPacketLifeTime:{enumerable:true,value:t.maxPacketLifeTime},maxRetransmits:{enumerable:true,value:t.maxRetransmits},ordered:{enumerable:true,value:t.ordered},reliable:{enumerable:true,value:null===t.maxPacketLifeTime&&null===t.maxRetransmits}});return r}
/**
   * Send a message over the {@link LocalDataTrack}.
   * @param {string|Blob|ArrayBuffer|ArrayBufferView} data
   * @returns {void}
   */LocalDataTrack.prototype.send=function(e){this._trackSender.send(e)};return LocalDataTrack}(la);
/**
 * {@link LocalDataTrack} options
 * @typedef {LocalTrackOptions} LocalDataTrackOptions
 * @property {?number} [maxPacketLifeTime=null] - Set this to limit the time
 *   (in milliseconds) during which the LocalDataTrack will send or re-send data
 *   if not successfully delivered on the underlying RTCDataChannel(s). It is an
 *   error to specify both this and <code>maxRetransmits</code>.
 * @property {?number} [maxRetransmits=null] - Set this to limit the number of
 *   times the {@link LocalDataTrack} will send or re-send data if not
 *   acknowledged on the underlying RTCDataChannel(s). It is an error to specify
 *   both this and <code>maxPacketLifeTime</code>.
 * @property {boolean} [ordered=true] - Set this to false to allow data on the
 *   LocalDataTrack to be sent out-of-order.
 */sa=pa;var fa=sa;var va={};var ha=pr;var _a=fa;function LocalDataTrack$4(e){var t=new _a(e);Object.setPrototypeOf(t,LocalDataTrack$4.prototype);return t}ha(LocalDataTrack$4,_a);va=LocalDataTrack$4;var ma=va;var ga={};ga={LocalAudioTrack:Ti,LocalVideoTrack:Ji,LocalDataTrack:ma};var ya=ga;var ba={};var ka=ba&&ba.__assign||function(){ka=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e};return ka.apply(this,arguments)};var Sa=ba&&ba.__awaiter||function(e,t,r,n){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function fulfilled(e){try{step(n.next(e))}catch(e){i(e)}}function rejected(e){try{step(n.throw(e))}catch(e){i(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))};var Ta=ba&&ba.__generator||function(e,t){var r,n,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:verb(0),throw:verb(1),return:verb(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function verb(e){return function(t){return step([e,t])}}function step(a){if(r)throw new TypeError("Generator is already executing.");while(o)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;(n=0,i)&&(a=[2&a[0],i.value]);switch(a[0]){case 0:case 1:i=a;break;case 4:o.label++;return{value:a[1],done:false};case 5:o.label++;n=a[1];a=[0];continue;case 7:a=o.ops.pop();o.trys.pop();continue;default:if(!(i=o.trys,i=i.length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1];i=a;break}if(i&&o.label<i[2]){o.label=i[2];o.ops.push(a);break}i[2]&&o.ops.pop();o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e];n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};var wa=ba&&ba.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};var Ca=ba&&ba.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};Object.defineProperty(ba,"__esModule",{value:true});ba.createLocalTracks=void 0;var Pa=x;var Oa=Y.buildLogLevels;var Ea=lr,Ra=Ea.getUserMedia,La=Ea.MediaStreamTrack;var Ma=ya,Ia=Ma.LocalAudioTrack,ja=Ma.LocalDataTrack,Aa=Ma.LocalVideoTrack;var Da=R;var xa=v,Va=xa.DEFAULT_LOG_LEVEL,Na=xa.DEFAULT_LOGGER_NAME,Fa=xa.typeErrors.INVALID_VALUE;var Ba=Sn;var Ua=0;
/**
 * Request {@link LocalTrack}s. By default, it requests a
 * {@link LocalAudioTrack} and a {@link LocalVideoTrack}.
 * Note that on mobile browsers, the camera can be reserved by only one {@link LocalVideoTrack}
 * at any given time. If you attempt to create a second {@link LocalVideoTrack}, video frames
 * will no longer be supplied to the first {@link LocalVideoTrack}.
 * @alias module:twilio-video.createLocalTracks
 * @param {CreateLocalTracksOptions} [options]
 * @returns {Promise<Array<LocalTrack>>}
 * @example
 * var Video = require('twilio-video');
 * // Request audio and video tracks
 * Video.createLocalTracks().then(function(localTracks) {
 *   var localMediaContainer = document.getElementById('local-media-container-id');
 *   localTracks.forEach(function(track) {
 *     localMediaContainer.appendChild(track.attach());
 *   });
 * });
 * @example
 * var Video = require('twilio-video');
 * // Request just the default audio track
 * Video.createLocalTracks({ audio: true }).then(function(localTracks) {
 *   return Video.connect('my-token', {
 *     name: 'my-cool-room',
 *     tracks: localTracks
 *   });
 * });
 * @example
 * var Video = require('twilio-video');
 * // Request the audio and video tracks with custom names
 * Video.createLocalTracks({
 *   audio: { name: 'microphone' },
 *   video: { name: 'camera' }
 * }).then(function(localTracks) {
 *   localTracks.forEach(function(localTrack) {
 *     console.log(localTrack.name);
 *   });
 * });
 *
 * @example
 * var Video = require('twilio-video');
 * var localTracks;
 *
 * // Pre-acquire tracks to display camera preview.
 * Video.createLocalTracks().then(function(tracks) {
 *  localTracks = tracks;
 *  var localVideoTrack = localTracks.find(track => track.kind === 'video');
 *  divContainer.appendChild(localVideoTrack.attach());
 * })
 *
 * // Later, join the Room with the pre-acquired LocalTracks.
 * Video.connect('token', {
 *   name: 'my-cool-room',
 *   tracks: localTracks
 * });
 *
 */function createLocalTracks$1(e){return Sa(this,void 0,void 0,(function(){var t,r,n,i,a,o,c,s,u,l,d,p,f;var v=this;return Ta(this,(function(h){switch(h.label){case 0:t=!(e&&("audio"in e||"video"in e));r=ka({audio:t,getUserMedia:Ra,loggerName:Na,logLevel:Va,LocalAudioTrack:Ia,LocalDataTrack:ja,LocalVideoTrack:Aa,MediaStreamTrack:La,Log:Da,video:t},e);n="[createLocalTracks #"+ ++Ua+"]";i=Oa(r.logLevel);a=new r.Log("default",n,i,r.loggerName);o=Object.assign({log:a},r);delete o.name;if(false===r.audio&&false===r.video){a.info("Neither audio nor video requested, so returning empty LocalTracks");return[2,[]]}if(r.tracks){a.info("Adding user-provided LocalTracks");a.debug("LocalTracks:",r.tracks);return[2,r.tracks]}c={audio:"object"===typeof r.audio&&r.audio.name?{name:r.audio.name}:{defaultDeviceCaptureMode:"auto"},video:"object"===typeof r.video&&r.video.name?{name:r.video.name}:{}};c.audio.isCreatedByCreateLocalTracks=true;c.video.isCreatedByCreateLocalTracks=true;if("object"===typeof r.audio){"boolean"===typeof r.audio.workaroundWebKitBug1208516&&(c.audio.workaroundWebKitBug1208516=r.audio.workaroundWebKitBug1208516);if("noiseCancellationOptions"in r.audio){s=r.audio.noiseCancellationOptions;delete r.audio.noiseCancellationOptions}if("defaultDeviceCaptureMode"in r.audio){if(["auto","manual"].every((function(e){return e!==r.audio.defaultDeviceCaptureMode})))throw Fa("CreateLocalAudioTrackOptions.defaultDeviceCaptureMode",["auto","manual"]);c.audio.defaultDeviceCaptureMode=r.audio.defaultDeviceCaptureMode}else c.audio.defaultDeviceCaptureMode="auto"}"object"===typeof r.video&&"boolean"===typeof r.video.workaroundWebKitBug1208516&&(c.video.workaroundWebKitBug1208516=r.video.workaroundWebKitBug1208516);"object"===typeof r.audio&&delete r.audio.name;"object"===typeof r.video&&delete r.video.name;u={audio:r.audio,video:r.video};l="object"===typeof r.audio&&r.audio.workaroundWebKitBug180748;h.label=1;case 1:h.trys.push([1,4,,5]);return[4,l?Ba(a,r.getUserMedia,u):r.getUserMedia(u)];case 2:d=h.sent();p=Ca(Ca([],wa(d.getAudioTracks())),wa(d.getVideoTracks()));a.info("Call to getUserMedia successful; got tracks:",p);return[4,Promise.all(p.map((function(e){return Sa(v,void 0,void 0,(function(){var t,r,n;return Ta(this,(function(i){switch(i.label){case 0:return"audio"===e.kind&&s?[4,Pa.applyNoiseCancellation(e,s,a)]:[3,2];case 1:t=i.sent(),r=t.cleanTrack,n=t.noiseCancellation;return[2,new o.LocalAudioTrack(r,ka(ka(ka({},c.audio),o),{noiseCancellation:n}))];case 2:if("audio"===e.kind)return[2,new o.LocalAudioTrack(e,ka(ka({},c.audio),o))];i.label=3;case 3:return[2,new o.LocalVideoTrack(e,ka(ka({},c.video),o))]}}))}))})))];case 3:return[2,h.sent()];case 4:f=h.sent();a.warn("Call to getUserMedia failed:",f);throw f;case 5:return[2]}}))}))}ba.createLocalTracks=createLocalTracks$1;var $a={};Object.defineProperty($a,"__esModule",{value:true});$a.Timer=void 0;var Ha=function(){function Timer(){this._end=void 0;this.start()}Timer.prototype.start=function(){this._start=Date.now();return this};Timer.prototype.stop=function(){this._end=Date.now();return this};Timer.prototype.getTimeMeasurement=function(){return{start:this._start,end:this._end,duration:void 0===this._end?void 0:this._end-this._start}};return Timer}();$a.Timer=Ha;var Wa={};Object.defineProperty(Wa,"__esModule",{value:true});Wa.mosToScore=Wa.calculateMOS=void 0;var Qa=94.768;function calculateMOS(e,t,r){var n=e+2*t+10;var i=0;switch(true){case n<160:i=Qa-n/40;break;case n<1e3:i=Qa-(n-120)/10;break}switch(true){case r<=i/2.5:i=Math.max(i-2.5*r,6.52);break;default:i=0;break}var a=1+.035*i+7e-6*i*(i-60)*(100-i);return a}Wa.calculateMOS=calculateMOS;function mosToScore(e){var t=0;t=e?e>4.2?5:e>4?4:e>3.6?3:e>3?2:1:0;return t}Wa.mosToScore=mosToScore;var qa={};var za=qa&&qa.__awaiter||function(e,t,r,n){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function fulfilled(e){try{step(n.next(e))}catch(e){i(e)}}function rejected(e){try{step(n.throw(e))}catch(e){i(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))};var Ga=qa&&qa.__generator||function(e,t){var r,n,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:verb(0),throw:verb(1),return:verb(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function verb(e){return function(t){return step([e,t])}}function step(a){if(r)throw new TypeError("Generator is already executing.");while(o)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;(n=0,i)&&(a=[2&a[0],i.value]);switch(a[0]){case 0:case 1:i=a;break;case 4:o.label++;return{value:a[1],done:false};case 5:o.label++;n=a[1];a=[0];continue;case 7:a=o.ops.pop();o.trys.pop();continue;default:if(!(i=o.trys,i=i.length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1];i=a;break}if(i&&o.label<i[2]){o.label=i[2];o.ops.push(a);break}i[2]&&o.ops.pop();o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e];n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};var Ka=qa&&qa.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};Object.defineProperty(qa,"__esModule",{value:true});qa.getCombinedConnectionStats=void 0;function getStatValues(e,t,r,n){var i=[];e.forEach((function(e){0!==n.length&&!n.includes(e.type)||0!==r.length&&!r.includes(e.kind)||"number"!==typeof e[t]||i.push(e[t])}));return i}function getCombinedConnectionStats(e){var t=e.publisher,r=e.subscriber;return za(this,void 0,void 0,(function(){var e,n,i,a,o,c,s,u,l,d,p,f,v,h,_;return Ga(this,(function(m){switch(m.label){case 0:return[4,Promise.all([t,r].map((function(e){return e.getStats()})))];case 1:e=Ka.apply(void 0,[m.sent(),2]),n=e[0],i=e[1];a=getStatValues(i,"timestamp",["audio"],["inbound-rtp"]);o=a.length>0?a[0]:0;c=getStatValues(i,"jitter",["audio"],["inbound-rtp"]).reduce((function(e,t){return Math.max(e,t)}),0);s=getStatValues(i,"packetsReceived",["audio","video"],["inbound-rtp"]).reduce((function(e,t){return e+t}),0);u=getStatValues(i,"packetsLost",["audio","video"],["inbound-rtp"]).reduce((function(e,t){return e+t}),0);l=getStatValues(n,"roundTripTime",["audio","video"],["remote-inbound-rtp"]).reduce((function(e,t){return Math.max(e,t)}),0);d=getStatValues(i,"currentRoundTripTime",[],["candidate-pair"]).reduce((function(e,t){return Math.max(e,t)}),0);p=1e3*(d||l);f=getStatValues(n,"bytesSent",[],["candidate-pair"]).reduce((function(e,t){return e+t}),0);v=getStatValues(i,"bytesReceived",[],["candidate-pair"]).reduce((function(e,t){return e+t}),0);h=extractSelectedActiveCandidatePair(i);_=[];i.forEach((function(e){"local-candidate"!==e.type&&"remote-candidate"!==e.type||_.push(makeStandardCandidateStats(e))}));return[2,{timestamp:o,jitter:c,packets:s,packetsLost:u,roundTripTime:p,bytesSent:f,bytesReceived:v,selectedIceCandidatePairStats:h,iceCandidateStats:_}]}}))}))}qa.getCombinedConnectionStats=getCombinedConnectionStats;function makeStandardCandidateStats(e){var t=[{key:"transportId",type:"string"},{key:"candidateType",type:"string"},{key:"port",altKeys:["portNumber"],type:"number"},{key:"address",altKeys:["ip","ipAddress"],type:"string"},{key:"priority",type:"number"},{key:"protocol",altKeys:["transport"],type:"string"},{key:"url",type:"string"},{key:"relayProtocol",type:"string"}];return t.reduce((function(t,r){var n=[r.key];r.altKeys&&(n=n.concat(r.altKeys));var i=n.find((function(t){return t in e}));i&&typeof e[i]===r.type&&(t[r.key]=e[i]);return t}),{})}function extractSelectedActiveCandidatePair(e){var t=null;var r=[];e.forEach((function(e){"transport"===e.type&&e.selectedCandidatePairId?t=e.selectedCandidatePairId:"candidate-pair"===e.type&&r.push(e)}));var n=r.find((function(e){return e.selected||t&&e.id===t}));if(!n)return null;var i=n;var a=e.get(i.localCandidateId);var o=e.get(i.remoteCandidateId);return a&&o?{localCandidate:makeStandardCandidateStats(a),remoteCandidate:makeStandardCandidateStats(o)}:null}var Ja="default"in e?e.default:e;var Ya={};var Xa=Ya&&Ya.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Za=Ya&&Ya.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};var eo=Ya&&Ya.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};var to=Ja.EventEmitter;var ro=Y;var no=function(e){Xa(StateMachine,e);
/**
   * Construct a {@link StateMachine}.
   * @param {string} initialState - the intiial state
   * @param {object} states
   */function StateMachine(t,r){var n=e.call(this)||this;var i=null;var a=t;r=transformStates(r);Object.defineProperties(n,{_lock:{get:function(){return i},set:function(e){i=e}},_reachableStates:{value:reachable(r)},_state:{get:function(){return a},set:function(e){a=e}},_states:{value:r},_whenDeferreds:{value:new Set},isLocked:{enumerable:true,get:function(){return null!==i}},state:{enumerable:true,get:function(){return a}}});n.on("stateChanged",(function(e){n._whenDeferreds.forEach((function(t){t.when(e,t.resolve,t.reject)}))}));return n}
/**
   * Returns a promise whose executor function is called on each state change.
   * @param {function(state: string, resolve: function, reject: function): void} when
   * @returns {Promise.<*>}
   * @private
   */StateMachine.prototype._whenPromise=function(e){var t=this;if("function"!==typeof e)return Promise.reject(new Error("when() executor must be a function"));var r=ro.defer();r.when=e;this._whenDeferreds.add(r);return r.promise.then((function(e){t._whenDeferreds.delete(r);return e}),(function(e){t._whenDeferreds.delete(r);throw e}))};
/**
   * This method takes a lock and passes the {@link StateMachine#Key} to your
   * transition function. You may perform zero or more state transitions in your
   * transition function, but you should check for preemption in each tick. You
   * may also reenter the lock. Once the Promise returned by your transition
   * function resolves or rejects, this method releases the lock it acquired for
   * you.
   * @param {string} name - a name for the lock
   * @param {function(StateMachine#Key): Promise} transitionFunction
   * @returns {Promise}
   */StateMachine.prototype.bracket=function(e,t){var r;var n=this;function releaseLock(e){n.hasLock(r)&&n.releaseLockCompletely(r);if(e)throw e}return this.takeLock(e).then((function gotKey(e){r=e;return t(r)})).then((function success(e){releaseLock();return e}),releaseLock)};
/**
   * Check whether or not a {@link StateMachine#Key} matches the lock.
   * @param {StateMachine#Key} key
   * @returns {boolean}
   */StateMachine.prototype.hasLock=function(e){return this._lock===e};
/**
   * Preempt any pending state transitions and immediately transition to the new
   * state. If a lock name is specified, take the lock and return the
   * {@link StateMachine#Key}.
   * @param {string} newState
   * @param {?string} [name=null] - a name for the lock
   * @param {Array<*>} [payload=[]]
   * @returns {?StateMachine#Key}
   */StateMachine.prototype.preempt=function(e,t,r){if(!isValidTransition(this._states,this.state,e))throw new Error('Cannot transition from "'+this.state+'" to "'+e+'"');var n;if(this.isLocked){n=this._lock;this._lock=null}var i=null;t&&(i=this.takeLockSync(t));var a=i?null:this.takeLockSync("preemption");this.transition(e,i||a,r);n&&n.resolve();a&&this.releaseLock(a);return i};
/**
   * Release a lock. This method succeeds only if the {@link StateMachine} is
   * still locked and has not been preempted.
   * @param {StateMachine#Key} key
   * @throws Error
   */StateMachine.prototype.releaseLock=function(e){if(!this.isLocked)throw new Error("Could not release the lock for "+e.name+" because the StateMachine is not locked");if(!this.hasLock(e))throw new Error("Could not release the lock for "+e.name+" because "+this._lock.name+" has the lock");if(0===e.depth){this._lock=null;e.resolve()}else e.depth--};
/**
   * Release a lock completely, even if it has been reentered. This method
   * succeeds only if the {@link StateMachine} is still locked and has not been
   * preempted.
   * @param {StateMachine#Key} key
   * @throws Error
   */StateMachine.prototype.releaseLockCompletely=function(e){if(!this.isLocked)throw new Error("Could not release the lock for "+e.name+" because the StateMachine is not locked");if(!this.hasLock(e))throw new Error("Could not release the lock for "+e.name+" because "+this._lock.name+" has the lock");e.depth=0;this._lock=null;e.resolve()};
/**
   * Take a lock, returning a Promise for the {@link StateMachine#Key}. You should
   * take a lock anytime you intend to perform asynchronous transitions. Calls to
   * this method are guaranteed to be resolved in FIFO order. You may reenter
   * a lock by passing its {@link StateMachine#Key}.
   * @param {string|StateMachine#Key} nameOrKey - a name for the lock or an
   * existing {@link StateMachine#Key}
   * @returns {Promise<object>}
   */StateMachine.prototype.takeLock=function(e){var t=this;if("object"===typeof e){var r=e;return new Promise((function(e){e(t.takeLockSync(r))}))}var n=e;if(this.isLocked){var i=this.takeLock.bind(this,n);return this._lock.promise.then(i)}return Promise.resolve(this.takeLockSync(n))};
/**
   * Take a lock, returning the {@Link StateMachine#Key}. This method throws if
   * the {@link StateMachine} is locked or the wrong {@link StateMachine#Key} is
   * provided. You may reenter a lock by passing its {@link StateMachine#Key}.
   * @param {string|StateMachine#Key} nameOrKey - a name for the lock or an
   * existing {@link StateMachine#Key}
   * @returns {object}
   * @throws Error
   */StateMachine.prototype.takeLockSync=function(e){var t="string"===typeof e?null:e;var r=t?t.name:e;if(t&&!this.hasLock(t)||!t&&this.isLocked)throw new Error("Could not take the lock for "+r+" because the lock for "+this._lock.name+" was not released");if(t){t.depth++;return t}var n=makeLock(r);this._lock=n;return n};
/**
   * Transition to a new state. If the {@link StateMachine} is locked, you must
   * provide the {@link StateMachine#Key}. An invalid state or the wrong
   * {@link StateMachine#Key} will throw an error.
   * @param {string} newState
   * @param {?StateMachine#Key} [key=null]
   * @param {Array<*>} [payload=[]]
   * @throws {Error}
   */StateMachine.prototype.transition=function(e,t,r){r=r||[];if(this.isLocked){if(!t)throw new Error("You must provide the key in order to transition");if(!this.hasLock(t))throw new Error("Could not transition using the key for "+t.name+" because "+this._lock.name+" has the lock")}else if(t)throw new Error("Key provided for "+t.name+", but the StateMachine was not locked (possibly due to preemption)");if(!isValidTransition(this._states,this.state,e))throw new Error('Cannot transition from "'+this.state+'" to "'+e+'"');this._state=e;this.emit.apply(this,eo([],Za(["stateChanged",e].concat(r))))};
/**
   * Attempt to transition to a new state. Unlike {@link StateMachine#transition},
   * this method does not throw.
   * @param {string} newState
   * @param {?StateMachine#Key} [key=null]
   * @param {Array<*>} [payload=[]]
   * @returns {boolean}
   */StateMachine.prototype.tryTransition=function(e,t,r){try{this.transition(e,t,r)}catch(e){return false}return true};
/**
   * Return a Promise that resolves when the {@link StateMachine} transitions to
   * the specified state. If the {@link StateMachine} transitions such that the
   * requested state becomes unreachable, the Promise rejects.
   * @param {string} state
   * @returns {Promise<this>}
   */StateMachine.prototype.when=function(e){var t=this;return this.state===e?Promise.resolve(this):isValidTransition(this._reachableStates,this.state,e)?this._whenPromise((function(r,n,i){r===e?n(t):isValidTransition(t._reachableStates,r,e)||i(createUnreachableError(r,e))})):Promise.reject(createUnreachableError(this.state,e))};return StateMachine}(to);
/**
 * @event StateMachine#stateChanged
 * @param {string} newState
 */
/**
 * Check if a transition is valid.
 * @private
 * @param {Map<*, Set<*>>} graph
 * @param {*} from
 * @param {*} to
 * @returns {boolean}
 */function isValidTransition(e,t,r){return e.get(t).has(r)}
/**
 * @typedef {object} StateMachine#Key
 */function makeLock(e){var t=ro.defer();t.name=e;t.depth=0;return t}
/**
 * Compute the transitive closure of a graph (i.e. what nodes are reachable from
 * where).
 * @private
 * @param {Map<*, Set<*>>} graph
 * @returns {Map<*, Set<*>>}
 */function reachable(e){return Array.from(e.keys()).reduce((function(t,r){return t.set(r,reachableFrom(e,r))}),new Map)}
/**
 * Compute the Set of node reachable from a particular node in the graph.
 * @private
 * @param {Map<*, Set<*>>} graph
 * @param {*} from
 * @param {Set<*>} [to]
 * @returns {Set<*>}
 */function reachableFrom(e,t,r){r=r||new Set;e.get(t).forEach((function(t){if(!r.has(t)){r.add(t);reachableFrom(e,t,r).forEach(r.add,r)}}));return r}function transformStates(e){var t=new Map;for(var r in e)t.set(r,new Set(e[r]));return t}
/**
 * Create an "unreachable state" Error.
 * @param {string} here
 * @param {string} there
 * @returns {Error}
 */function createUnreachableError(e,t){return new Error('"'+t+'" cannot be reached from "'+e+'"')}Ya=no;var io=Ya;var ao={};var oo=function(){
/**
   * Construct a {@link NetworkMonitor}.
   * @param {function} onNetworkChanged
   * @param {*} [options]
   */
function NetworkMonitor(e,t){var r=this;t=Object.assign({navigator:navigator,window:window},t);var n=t.navigator;var i=n.connection||{type:null};var a=i.type;var o=i.type?{_events:{value:["change","typechange"]},_listener:{value:function(){var t=a!==r.type&&r.isOnline;a=r.type;t&&e()}},_target:{value:i}}:{_events:{value:["online"]},_listener:{value:e},_target:{value:t.window}},c=o._events,s=o._listener,u=o._target;Object.defineProperties(this,{isOnline:{enumerable:true,get:function(){return"boolean"!==typeof n.onLine||n.onLine}},type:{enumerable:true,get:function(){return i.type||null}},_listener:s,_events:c,_target:u})}NetworkMonitor.prototype.start=function(){var e=this;this._events.forEach((function(t){e._target.addEventListener(t,e._listener)}))};NetworkMonitor.prototype.stop=function(){var e=this;this._events.forEach((function(t){e._target.removeEventListener(t,e._listener)}))};return NetworkMonitor}();ao=oo;var co=ao;var so={};var uo=function(){
/**
   * Construct a {@link Timeout}.
   * @param {function} fn - Function to call
   * @param {number} delay - Delay in milliseconds
   * @param {boolean} [autoStart=true] - If true, then start the {@link Timeout}.
   */
function Timeout(e,t,r){void 0===r&&(r=true);Object.defineProperties(this,{_delay:{value:t,writable:true},_fn:{value:e},_timeout:{value:null,writable:true}});r&&this.start()}Object.defineProperty(Timeout.prototype,"delay",{get:function(){return this._delay},enumerable:false,configurable:true});Object.defineProperty(Timeout.prototype,"isSet",{get:function(){return!!this._timeout},enumerable:false,configurable:true});
/**
   * Update the {@link Timeout} delay.
   * @param {number} delay
   * @returns {void}
   */Timeout.prototype.setDelay=function(e){this._delay=e};
/**
   * Start the {@link Timeout}, if not already started.
   * @returns {void}
   */Timeout.prototype.start=function(){var e=this;this.isSet||(this._timeout=setTimeout((function(){var t=e._fn;e.clear();t()}),this._delay))};
/**
   * Clear the {@link Timeout}.
   * @returns {void}
   */Timeout.prototype.clear=function(){clearTimeout(this._timeout);this._timeout=null};
/**
   * Reset the {@link Timeout}.
   * @returns {void}
   */Timeout.prototype.reset=function(){this.clear();this.start()};return Timeout}();so=uo;var lo=so;var po="default"in t?t.default:t;var fo={};var vo=fo&&fo.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var ho=fo&&fo.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};var _o=fo&&fo.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};var mo=io;var go=Y,yo=go.buildLogLevels,bo=go.makeUUID;var ko=R;var So=co;var To=lo;var wo=0;var Co={closed:[],connecting:["closed","open","waiting"],early:["closed","connecting"],open:["closed"],waiting:["closed","connecting","early","open"]};var Po={closed:"close",open:"open",waiting:"waiting"};var Oo=2;var Eo=3;var Ro=3;var Lo=5e3;var Mo=15e3;var Io=5e3;var jo=200;var Ao=1e3;var Do=3e3;var xo=3001;var Vo=3002;var No=3003;var Fo=3004;var Bo=3005;var Uo=3006;var $o=3007;var Ho=globalThis;var Wo=Ho.WebSocket?Ho.WebSocket:po;var Qo={BUSY:"busy",FAILED:"failed",LOCAL:"local",REMOTE:"remote",TIMEOUT:"timeout"};var qo=new Map([[Do,Qo.TIMEOUT],[xo,Qo.TIMEOUT],[Vo,Qo.FAILED],[No,Qo.FAILED],[Fo,Qo.TIMEOUT],[Uo,Qo.BUSY],[$o,Qo.TIMEOUT]]);var zo=function(e){vo(TwilioConnection,e);
/**
   * Construct a {@link TwilioConnection}.
   * @param {string} serverUrl - TCMP server url
   * @param {TwilioConnectionOptions} options - {@link TwilioConnection} options
   */function TwilioConnection(t,r){var n=e.call(this,"early",Co)||this;r=Object.assign({helloBody:null,maxConsecutiveFailedHellos:Ro,maxConsecutiveMissedHeartbeats:Eo,requestedHeartbeatTimeout:Lo,openTimeout:Mo,welcomeTimeout:Io,Log:ko,WebSocket:Wo},r);var i=yo(r.logLevel);var a=new r.Log("default",n,i,r.loggerName);var o=r.networkMonitor?new So((function(){var e=o.type;var t="Network changed"+(e?" to "+e:"");a.debug(t);n._close({code:Fo,reason:t})})):null;Object.defineProperties(n,{_busyWaitTimeout:{value:null,writable:true},_consecutiveHeartbeatsMissed:{value:0,writable:true},_cookie:{value:null,writable:true},_eventObserver:{value:r.eventObserver},_heartbeatTimeout:{value:null,writable:true},_hellosLeft:{value:r.maxConsecutiveFailedHellos,writable:true},_instanceId:{value:++wo},_log:{value:a},_messageQueue:{value:[]},_networkMonitor:{value:o},_options:{value:r},_openTimeout:{value:null,writable:true},_sendHeartbeatTimeout:{value:null,writable:true},_serverUrl:{value:t},_welcomeTimeout:{value:null,writable:true},_ws:{value:null,writable:true}});var c={connecting:"info",early:"info",open:"info",waiting:"warning",closed:"info"};n.on("stateChanged",(function(e){var t=[];for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];e in Po&&n.emit.apply(n,_o([Po[e]],ho(t)));var i={name:e,group:"signaling",level:c[n.state]};if("closed"===e){var a=ho(t,1),o=a[0];i.payload={reason:o};i.level=o===Qo.LOCAL?"info":"error"}n._eventObserver.emit("event",i)}));n._eventObserver.emit("event",{name:n.state,group:"signaling",level:c[n.state]});n._connect();return n}TwilioConnection.prototype.toString=function(){return"[TwilioConnection #"+this._instanceId+": "+this._ws.url+"]"};
/**
   * Close the {@link TwilioConnection}.
   * @param {{code: number, reason: string}} event
   * @private
   */TwilioConnection.prototype._close=function(e){var t=e.code,r=e.reason;if("closed"!==this.state){this._openTimeout&&this._openTimeout.clear();this._welcomeTimeout&&this._welcomeTimeout.clear();this._heartbeatTimeout&&this._heartbeatTimeout.clear();this._sendHeartbeatTimeout&&this._sendHeartbeatTimeout.clear();this._networkMonitor&&this._networkMonitor.stop();this._busyWaitTimeout&&t!==Bo&&this._busyWaitTimeout.clear();this._messageQueue.splice(0);var n=this._log;if(t===Ao){n.debug("Closed");this.transition("closed",null,[Qo.LOCAL])}else{n.warn("Closed: "+t+" - "+r);t!==Bo&&this.transition("closed",null,[qo.get(t)||Qo.REMOTE])}var i=this._ws.readyState;var a=this._options.WebSocket;i!==a.CLOSING&&i!==a.CLOSED&&this._ws.close(t,r)}};TwilioConnection.prototype._connect=function(){var e=this;var t=this._log;if("waiting"===this.state)this.transition("early");else if("early"!==this.state){t.warn('Unexpected state "'+this.state+'" for connecting to the TCMP server.');return}this._ws=new this._options.WebSocket(this._serverUrl);var r=this._ws;t.debug("Created a new WebSocket:",r);r.addEventListener("close",(function(t){return e._close(t)}));var n=this._options.openTimeout;this._openTimeout=new To((function(){var t="Failed to open in "+n+" ms";e._close({code:$o,reason:t})}),n);r.addEventListener("open",(function(){t.debug("WebSocket opened:",r);e._openTimeout.clear();e._startHandshake();e._networkMonitor&&e._networkMonitor.start()}));r.addEventListener("message",(function(r){t.debug("Incoming: "+r.data);try{r=JSON.parse(r.data)}catch(t){e.emit("error",t);return}switch(r.type){case"bad":e._handleBad(r);break;case"busy":e._handleBusy(r);break;case"bye":break;case"msg":e._handleMessage(r);case"heartbeat":e._handleHeartbeat();break;case"welcome":e._handleWelcome(r);break;default:e._log.debug("Unknown message type: "+r.type);e.emit("error",new Error("Unknown message type: "+r.type));break}}))};
/**
   * Handle an incoming "bad" message.
   * @param {{reason: string}} message
   * @private
   */TwilioConnection.prototype._handleBad=function(e){var t=e.reason;var r=this._log;if(["connecting","open"].includes(this.state))if("connecting"!==this.state){r.debug("Error: "+t);this.emit("error",new Error(t))}else{r.warn("Closing: "+Vo+" - "+t);this._close({code:Vo,reason:t})}else r.warn('Unexpected state "'+this.state+'" for handling a "bad" message from the TCMP server.')};
/**
   * Handle an incoming "busy" message.
   * @param {{cookie: ?string, keepAlive: boolean, retryAfter: number}} message
   * @private
   */TwilioConnection.prototype._handleBusy=function(e){var t=this;var r=e.cookie,n=e.keepAlive,i=e.retryAfter;var a=this._log;if(["connecting","waiting"].includes(this.state)){this._busyWaitTimeout&&this._busyWaitTimeout.clear();this._welcomeTimeout&&this._welcomeTimeout.clear();var o=i<0?'Received terminal "busy" message':'Received "busy" message, retrying after '+i+" ms";if(i<0){a.warn("Closing: "+Uo+" - "+o);this._close({code:Uo,reason:o})}else{var c=this._options.maxConsecutiveFailedHellos;this._hellosLeft=c;this._cookie=r||null;if(n){a.warn(o);this._busyWaitTimeout=new To((function(){return t._startHandshake()}),i)}else{a.warn("Closing: "+Bo+" - "+o);this._close({code:Bo,reason:o});this._busyWaitTimeout=new To((function(){return t._connect()}),i)}this.transition("waiting",null,[n,i])}}else a.warn('Unexpected state "'+this.state+'" for handling a "busy" message from the TCMP server.')};TwilioConnection.prototype._handleHeartbeat=function(){"open"===this.state?this._heartbeatTimeout.reset():this._log.warn('Unexpected state "'+this.state+'" for handling a "heartbeat" message from the TCMP server.')};TwilioConnection.prototype._handleHeartbeatTimeout=function(){if("open"===this.state){var e=this._log;var t=this._options.maxConsecutiveMissedHeartbeats;e.debug("Consecutive heartbeats missed: "+t);var r="Missed "+t+' "heartbeat" messages';e.warn("Closing: "+xo+" - "+r);this._close({code:xo,reason:r})}};
/**
   * Handle an incoming "msg" message.
   * @param {{body: object}} message
   * @private
   */TwilioConnection.prototype._handleMessage=function(e){var t=e.body;"open"===this.state?this.emit("message",t):this._log.warn('Unexpected state "'+this.state+'" for handling a "msg" message from the TCMP server.')};
/**
   * Handle an incoming "welcome" message.
   * @param {{ negotiatedTimeout: number }} message
   * @private
   */TwilioConnection.prototype._handleWelcome=function(e){var t=this;var r=e.negotiatedTimeout;var n=this._log;if(["connecting","waiting"].includes(this.state)){if("waiting"===this.state){n.debug('Received "welcome" message, no need to retry connection.');this._busyWaitTimeout.clear()}var i=this._options.maxConsecutiveMissedHeartbeats;var a=r*i;var o=r-jo;this._welcomeTimeout.clear();this._heartbeatTimeout=new To((function(){return t._handleHeartbeatTimeout()}),a);this._messageQueue.splice(0).forEach((function(e){return t._send(e)}));this._sendHeartbeatTimeout=new To((function(){return t._sendHeartbeat()}),o);this.transition("open")}else n.warn('Unexpected state "'+this.state+'" for handling a "welcome" message from the TCMP server.')};TwilioConnection.prototype._handleWelcomeTimeout=function(){if("connecting"===this.state){var e=this._log;if(this._hellosLeft<=0){var t="All handshake attempts failed";e.warn("Closing: "+Do+" - "+t);this._close({code:Do,reason:t})}else{var r=this._options.maxConsecutiveFailedHellos;e.warn("Handshake attempt "+(r-this._hellosLeft)+" failed");this._startHandshake()}}};
/**
   * Send a message to the TCMP server.
   * @param {*} message
   * @private
   */TwilioConnection.prototype._send=function(e){var t=this._ws.readyState;var r=this._options.WebSocket;if(t===r.OPEN){var n=JSON.stringify(e);this._log.debug("Outgoing: "+n);try{this._ws.send(n);this._sendHeartbeatTimeout&&this._sendHeartbeatTimeout.reset()}catch(e){var i="Failed to send message";this._log.warn("Closing: "+No+" - "+i);this._close({code:No,reason:i})}}};TwilioConnection.prototype._sendHeartbeat=function(){"closed"!==this.state&&this._send({type:"heartbeat"})};TwilioConnection.prototype._sendHello=function(){var e=this._options,t=e.helloBody,r=e.requestedHeartbeatTimeout;var n={id:bo(),timeout:r,type:"hello",version:Oo};this._cookie&&(n.cookie=this._cookie);t&&(n.body=t);this._send(n)};
/**
   * Send or enqueue a message.
   * @param {*} message
   * @private
   */TwilioConnection.prototype._sendOrEnqueue=function(e){var t=this;if("closed"!==this.state){var r="open"===this.state?function(e){return t._send(e)}:function(e){return t._messageQueue.push(e)};r(e)}};TwilioConnection.prototype._startHandshake=function(){var e=this;["early","waiting"].includes(this.state)&&this.transition("connecting");if("connecting"===this.state){this._hellosLeft--;this._sendHello();var t=this._options.welcomeTimeout;this._welcomeTimeout=new To((function(){return e._handleWelcomeTimeout()}),t)}};
/**
   * Close the {@link TwilioConnection}.
   * @returns {void}
   */TwilioConnection.prototype.close=function(){if("closed"!==this.state){this._sendOrEnqueue({type:"bye"});this._close({code:Ao,reason:"Normal"})}};
/**
   * Send a "msg" message.
   * @param {*} body
   * @returns {void}
   */TwilioConnection.prototype.sendMessage=function(e){this._sendOrEnqueue({body:e,type:"msg"})};return TwilioConnection}(mo);zo.CloseReason=Qo;
/**
 * A {@link TwilioConnection} was closed.
 * @event TwilioConnection#close
 * @param {CloseReason} reason - The reason for the {@link TwilioConnection} being closed
 */
/**
 * A {@link TwilioConnection} received an error from the TCMP server.
 * @event TwilioConnection#error
 * @param {Error} error - The TCMP server error
 */
/**
 * A {@link TwilioConnection} received a message from the TCMP server.
 * @event TwilioConnection#message
 * @param {*} body - Message body
 */
/**
 * A {@link TwilioConnection} received a "busy" message from the TCMP server.
 * @event TwilioConnection#waiting
 * @param {boolean} keepAlive - true if the WebSocket connection is retained
 * @param {number} retryAfter - delay in milliseconds after which a retry is attempted
 */
/**
 * {@link TwilioConnection} options
 * @typedef {object} TwilioConnectionOptions
 * @property {EventObserver} [eventObserver] - Optional event observer
 * @property {*} [helloBody=null] - Optional body for "hello" message
 * @property {LogLevel} [logLevel=warn] - Log level of the {@link TwilioConnection}
 * @property {number} [maxConsecutiveFailedHellos=3] - Max. number of consecutive failed "hello"s
 * @property {number} [maxConsecutiveMissedHeartbeats=3] - Max. number of (effective) consecutive "heartbeat" messages that can be missed
 * @property {number} [requestedHeartbeatTimeout=5000] - "heartbeat" timeout (ms) requested by the {@link TwilioConnection}
 * @property {number} [welcomeTimeout=5000] - Time (ms) to wait for the "welcome" message after sending the "hello" message
 */fo=zo;var Go=fo;var Ko={};var Jo=Ko&&Ko.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Yo=Ko&&Ko.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};var Xo=Ko&&Ko.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};var Zo=function(e){Jo(TwilioError,e);
/**
   * Creates a new {@link TwilioError}
   * @param {number} code - Error code
   * @param {string} [message] - Error message
   * @param {string} [fileName] - Name of the script file where error was generated
   * @param {number} [lineNumber] - Line number of the script file where error was generated
   */function TwilioError(t){var r=this;var n=[].slice.call(arguments,1);r=e.apply(this,Xo([],Yo(n)))||this;Object.setPrototypeOf(r,TwilioError.prototype);var i=Error.apply(r,n);i.name="TwilioError";Object.defineProperty(r,"code",{value:t,enumerable:true});Object.getOwnPropertyNames(i).forEach((function(e){Object.defineProperty(this,e,{value:i[e],enumerable:true})}),r);return r}
/**
   * Returns human readable string describing the error.
   * @returns {string}
   */TwilioError.prototype.toString=function(){var e=this.message?": "+this.message:"";return this.name+" "+this.code+e};return TwilioError}(Error);Ko=Zo;var ec=Ko;var tc={};var rc=tc&&tc.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var nc=ec;var ic={};
/**
 * Create a {@link TwilioError} for a given code and message.
 * @private
 * @param {number} [code] - Error code
 * @param {string} [message] - Error message
 * @returns {TwilioError}
 */tc.createTwilioError=function createTwilioError(e,t){e="number"===typeof e?e:0;t="string"===typeof t&&t?t:"Unknown error";return ic[e]?new ic[e]:new nc(e,t)};var ac=function(e){rc(AccessTokenInvalidError,e);function AccessTokenInvalidError(){var t=e.call(this,20101,"Invalid Access Token")||this;Object.setPrototypeOf(t,AccessTokenInvalidError.prototype);return t}return AccessTokenInvalidError}(nc);tc.AccessTokenInvalidError=ac;Object.defineProperty(ic,20101,{value:ac});var oc=function(e){rc(AccessTokenHeaderInvalidError,e);function AccessTokenHeaderInvalidError(){var t=e.call(this,20102,"Invalid Access Token header")||this;Object.setPrototypeOf(t,AccessTokenHeaderInvalidError.prototype);return t}return AccessTokenHeaderInvalidError}(nc);tc.AccessTokenHeaderInvalidError=oc;Object.defineProperty(ic,20102,{value:oc});var cc=function(e){rc(AccessTokenIssuerInvalidError,e);function AccessTokenIssuerInvalidError(){var t=e.call(this,20103,"Invalid Access Token issuer/subject")||this;Object.setPrototypeOf(t,AccessTokenIssuerInvalidError.prototype);return t}return AccessTokenIssuerInvalidError}(nc);tc.AccessTokenIssuerInvalidError=cc;Object.defineProperty(ic,20103,{value:cc});var sc=function(e){rc(AccessTokenExpiredError,e);function AccessTokenExpiredError(){var t=e.call(this,20104,"Access Token expired or expiration date invalid")||this;Object.setPrototypeOf(t,AccessTokenExpiredError.prototype);return t}return AccessTokenExpiredError}(nc);tc.AccessTokenExpiredError=sc;Object.defineProperty(ic,20104,{value:sc});var uc=function(e){rc(AccessTokenNotYetValidError,e);function AccessTokenNotYetValidError(){var t=e.call(this,20105,"Access Token not yet valid")||this;Object.setPrototypeOf(t,AccessTokenNotYetValidError.prototype);return t}return AccessTokenNotYetValidError}(nc);tc.AccessTokenNotYetValidError=uc;Object.defineProperty(ic,20105,{value:uc});var lc=function(e){rc(AccessTokenGrantsInvalidError,e);function AccessTokenGrantsInvalidError(){var t=e.call(this,20106,"Invalid Access Token grants")||this;Object.setPrototypeOf(t,AccessTokenGrantsInvalidError.prototype);return t}return AccessTokenGrantsInvalidError}(nc);tc.AccessTokenGrantsInvalidError=lc;Object.defineProperty(ic,20106,{value:lc});var dc=function(e){rc(AccessTokenSignatureInvalidError,e);function AccessTokenSignatureInvalidError(){var t=e.call(this,20107,"Invalid Access Token signature")||this;Object.setPrototypeOf(t,AccessTokenSignatureInvalidError.prototype);return t}return AccessTokenSignatureInvalidError}(nc);tc.AccessTokenSignatureInvalidError=dc;Object.defineProperty(ic,20107,{value:dc});var pc=function(e){rc(SignalingConnectionError,e);function SignalingConnectionError(){var t=e.call(this,53e3,"Signaling connection error")||this;Object.setPrototypeOf(t,SignalingConnectionError.prototype);return t}return SignalingConnectionError}(nc);tc.SignalingConnectionError=pc;Object.defineProperty(ic,53e3,{value:pc});var fc=function(e){rc(SignalingConnectionDisconnectedError,e);function SignalingConnectionDisconnectedError(){var t=e.call(this,53001,"Signaling connection disconnected")||this;Object.setPrototypeOf(t,SignalingConnectionDisconnectedError.prototype);return t}return SignalingConnectionDisconnectedError}(nc);tc.SignalingConnectionDisconnectedError=fc;Object.defineProperty(ic,53001,{value:fc});var vc=function(e){rc(SignalingConnectionTimeoutError,e);function SignalingConnectionTimeoutError(){var t=e.call(this,53002,"Signaling connection timed out")||this;Object.setPrototypeOf(t,SignalingConnectionTimeoutError.prototype);return t}return SignalingConnectionTimeoutError}(nc);tc.SignalingConnectionTimeoutError=vc;Object.defineProperty(ic,53002,{value:vc});var hc=function(e){rc(SignalingIncomingMessageInvalidError,e);function SignalingIncomingMessageInvalidError(){var t=e.call(this,53003,"Client received an invalid signaling message")||this;Object.setPrototypeOf(t,SignalingIncomingMessageInvalidError.prototype);return t}return SignalingIncomingMessageInvalidError}(nc);tc.SignalingIncomingMessageInvalidError=hc;Object.defineProperty(ic,53003,{value:hc});var _c=function(e){rc(SignalingOutgoingMessageInvalidError,e);function SignalingOutgoingMessageInvalidError(){var t=e.call(this,53004,"Client sent an invalid signaling message")||this;Object.setPrototypeOf(t,SignalingOutgoingMessageInvalidError.prototype);return t}return SignalingOutgoingMessageInvalidError}(nc);tc.SignalingOutgoingMessageInvalidError=_c;Object.defineProperty(ic,53004,{value:_c});var mc=function(e){rc(SignalingServerBusyError,e);function SignalingServerBusyError(){var t=e.call(this,53006,"Video server is busy")||this;Object.setPrototypeOf(t,SignalingServerBusyError.prototype);return t}return SignalingServerBusyError}(nc);tc.SignalingServerBusyError=mc;Object.defineProperty(ic,53006,{value:mc});var gc=function(e){rc(RoomNameInvalidError,e);function RoomNameInvalidError(){var t=e.call(this,53100,"Room name is invalid")||this;Object.setPrototypeOf(t,RoomNameInvalidError.prototype);return t}return RoomNameInvalidError}(nc);tc.RoomNameInvalidError=gc;Object.defineProperty(ic,53100,{value:gc});var yc=function(e){rc(RoomNameTooLongError,e);function RoomNameTooLongError(){var t=e.call(this,53101,"Room name is too long")||this;Object.setPrototypeOf(t,RoomNameTooLongError.prototype);return t}return RoomNameTooLongError}(nc);tc.RoomNameTooLongError=yc;Object.defineProperty(ic,53101,{value:yc});var bc=function(e){rc(RoomNameCharsInvalidError,e);function RoomNameCharsInvalidError(){var t=e.call(this,53102,"Room name contains invalid characters")||this;Object.setPrototypeOf(t,RoomNameCharsInvalidError.prototype);return t}return RoomNameCharsInvalidError}(nc);tc.RoomNameCharsInvalidError=bc;Object.defineProperty(ic,53102,{value:bc});var kc=function(e){rc(RoomCreateFailedError,e);function RoomCreateFailedError(){var t=e.call(this,53103,"Unable to create Room")||this;Object.setPrototypeOf(t,RoomCreateFailedError.prototype);return t}return RoomCreateFailedError}(nc);tc.RoomCreateFailedError=kc;Object.defineProperty(ic,53103,{value:kc});var Sc=function(e){rc(RoomConnectFailedError,e);function RoomConnectFailedError(){var t=e.call(this,53104,"Unable to connect to Room")||this;Object.setPrototypeOf(t,RoomConnectFailedError.prototype);return t}return RoomConnectFailedError}(nc);tc.RoomConnectFailedError=Sc;Object.defineProperty(ic,53104,{value:Sc});var Tc=function(e){rc(RoomMaxParticipantsExceededError,e);function RoomMaxParticipantsExceededError(){var t=e.call(this,53105,"Room contains too many Participants")||this;Object.setPrototypeOf(t,RoomMaxParticipantsExceededError.prototype);return t}return RoomMaxParticipantsExceededError}(nc);tc.RoomMaxParticipantsExceededError=Tc;Object.defineProperty(ic,53105,{value:Tc});var wc=function(e){rc(RoomNotFoundError,e);function RoomNotFoundError(){var t=e.call(this,53106,"Room not found")||this;Object.setPrototypeOf(t,RoomNotFoundError.prototype);return t}return RoomNotFoundError}(nc);tc.RoomNotFoundError=wc;Object.defineProperty(ic,53106,{value:wc});var Cc=function(e){rc(RoomMaxParticipantsOutOfRangeError,e);function RoomMaxParticipantsOutOfRangeError(){var t=e.call(this,53107,"MaxParticipants is out of range")||this;Object.setPrototypeOf(t,RoomMaxParticipantsOutOfRangeError.prototype);return t}return RoomMaxParticipantsOutOfRangeError}(nc);tc.RoomMaxParticipantsOutOfRangeError=Cc;Object.defineProperty(ic,53107,{value:Cc});var Pc=function(e){rc(RoomTypeInvalidError,e);function RoomTypeInvalidError(){var t=e.call(this,53108,"RoomType is not valid")||this;Object.setPrototypeOf(t,RoomTypeInvalidError.prototype);return t}return RoomTypeInvalidError}(nc);tc.RoomTypeInvalidError=Pc;Object.defineProperty(ic,53108,{value:Pc});var Oc=function(e){rc(RoomTimeoutOutOfRangeError,e);function RoomTimeoutOutOfRangeError(){var t=e.call(this,53109,"Timeout is out of range")||this;Object.setPrototypeOf(t,RoomTimeoutOutOfRangeError.prototype);return t}return RoomTimeoutOutOfRangeError}(nc);tc.RoomTimeoutOutOfRangeError=Oc;Object.defineProperty(ic,53109,{value:Oc});var Ec=function(e){rc(RoomStatusCallbackMethodInvalidError,e);function RoomStatusCallbackMethodInvalidError(){var t=e.call(this,53110,"StatusCallbackMethod is invalid")||this;Object.setPrototypeOf(t,RoomStatusCallbackMethodInvalidError.prototype);return t}return RoomStatusCallbackMethodInvalidError}(nc);tc.RoomStatusCallbackMethodInvalidError=Ec;Object.defineProperty(ic,53110,{value:Ec});var Rc=function(e){rc(RoomStatusCallbackInvalidError,e);function RoomStatusCallbackInvalidError(){var t=e.call(this,53111,"StatusCallback is invalid")||this;Object.setPrototypeOf(t,RoomStatusCallbackInvalidError.prototype);return t}return RoomStatusCallbackInvalidError}(nc);tc.RoomStatusCallbackInvalidError=Rc;Object.defineProperty(ic,53111,{value:Rc});var Lc=function(e){rc(RoomStatusInvalidError,e);function RoomStatusInvalidError(){var t=e.call(this,53112,"Status is invalid")||this;Object.setPrototypeOf(t,RoomStatusInvalidError.prototype);return t}return RoomStatusInvalidError}(nc);tc.RoomStatusInvalidError=Lc;Object.defineProperty(ic,53112,{value:Lc});var Mc=function(e){rc(RoomRoomExistsError,e);function RoomRoomExistsError(){var t=e.call(this,53113,"Room exists")||this;Object.setPrototypeOf(t,RoomRoomExistsError.prototype);return t}return RoomRoomExistsError}(nc);tc.RoomRoomExistsError=Mc;Object.defineProperty(ic,53113,{value:Mc});var Ic=function(e){rc(RoomInvalidParametersError,e);function RoomInvalidParametersError(){var t=e.call(this,53114,"Room creation parameter(s) incompatible with the Room type")||this;Object.setPrototypeOf(t,RoomInvalidParametersError.prototype);return t}return RoomInvalidParametersError}(nc);tc.RoomInvalidParametersError=Ic;Object.defineProperty(ic,53114,{value:Ic});var jc=function(e){rc(RoomMediaRegionInvalidError,e);function RoomMediaRegionInvalidError(){var t=e.call(this,53115,"MediaRegion is invalid")||this;Object.setPrototypeOf(t,RoomMediaRegionInvalidError.prototype);return t}return RoomMediaRegionInvalidError}(nc);tc.RoomMediaRegionInvalidError=jc;Object.defineProperty(ic,53115,{value:jc});var Ac=function(e){rc(RoomMediaRegionUnavailableError,e);function RoomMediaRegionUnavailableError(){var t=e.call(this,53116,"There are no media servers available in the MediaRegion")||this;Object.setPrototypeOf(t,RoomMediaRegionUnavailableError.prototype);return t}return RoomMediaRegionUnavailableError}(nc);tc.RoomMediaRegionUnavailableError=Ac;Object.defineProperty(ic,53116,{value:Ac});var Dc=function(e){rc(RoomSubscriptionOperationNotSupportedError,e);function RoomSubscriptionOperationNotSupportedError(){var t=e.call(this,53117,"The subscription operation requested is not supported for the Room type")||this;Object.setPrototypeOf(t,RoomSubscriptionOperationNotSupportedError.prototype);return t}return RoomSubscriptionOperationNotSupportedError}(nc);tc.RoomSubscriptionOperationNotSupportedError=Dc;Object.defineProperty(ic,53117,{value:Dc});var xc=function(e){rc(RoomCompletedError,e);function RoomCompletedError(){var t=e.call(this,53118,"Room completed")||this;Object.setPrototypeOf(t,RoomCompletedError.prototype);return t}return RoomCompletedError}(nc);tc.RoomCompletedError=xc;Object.defineProperty(ic,53118,{value:xc});var Vc=function(e){rc(RoomAudioOnlyFlagNotSupportedError,e);function RoomAudioOnlyFlagNotSupportedError(){var t=e.call(this,53124,"The AudioOnly flag is not supported for the Room type")||this;Object.setPrototypeOf(t,RoomAudioOnlyFlagNotSupportedError.prototype);return t}return RoomAudioOnlyFlagNotSupportedError}(nc);tc.RoomAudioOnlyFlagNotSupportedError=Vc;Object.defineProperty(ic,53124,{value:Vc});var Nc=function(e){rc(RoomTrackKindNotSupportedError,e);function RoomTrackKindNotSupportedError(){var t=e.call(this,53125,"The track kind is not supported by the Room")||this;Object.setPrototypeOf(t,RoomTrackKindNotSupportedError.prototype);return t}return RoomTrackKindNotSupportedError}(nc);tc.RoomTrackKindNotSupportedError=Nc;Object.defineProperty(ic,53125,{value:Nc});var Fc=function(e){rc(ParticipantIdentityInvalidError,e);function ParticipantIdentityInvalidError(){var t=e.call(this,53200,"Participant identity is invalid")||this;Object.setPrototypeOf(t,ParticipantIdentityInvalidError.prototype);return t}return ParticipantIdentityInvalidError}(nc);tc.ParticipantIdentityInvalidError=Fc;Object.defineProperty(ic,53200,{value:Fc});var Bc=function(e){rc(ParticipantIdentityTooLongError,e);function ParticipantIdentityTooLongError(){var t=e.call(this,53201,"Participant identity is too long")||this;Object.setPrototypeOf(t,ParticipantIdentityTooLongError.prototype);return t}return ParticipantIdentityTooLongError}(nc);tc.ParticipantIdentityTooLongError=Bc;Object.defineProperty(ic,53201,{value:Bc});var Uc=function(e){rc(ParticipantIdentityCharsInvalidError,e);function ParticipantIdentityCharsInvalidError(){var t=e.call(this,53202,"Participant identity contains invalid characters")||this;Object.setPrototypeOf(t,ParticipantIdentityCharsInvalidError.prototype);return t}return ParticipantIdentityCharsInvalidError}(nc);tc.ParticipantIdentityCharsInvalidError=Uc;Object.defineProperty(ic,53202,{value:Uc});var $c=function(e){rc(ParticipantMaxTracksExceededError,e);function ParticipantMaxTracksExceededError(){var t=e.call(this,53203,"The maximum number of published tracks allowed in the Room at the same time has been reached")||this;Object.setPrototypeOf(t,ParticipantMaxTracksExceededError.prototype);return t}return ParticipantMaxTracksExceededError}(nc);tc.ParticipantMaxTracksExceededError=$c;Object.defineProperty(ic,53203,{value:$c});var Hc=function(e){rc(ParticipantNotFoundError,e);function ParticipantNotFoundError(){var t=e.call(this,53204,"Participant not found")||this;Object.setPrototypeOf(t,ParticipantNotFoundError.prototype);return t}return ParticipantNotFoundError}(nc);tc.ParticipantNotFoundError=Hc;Object.defineProperty(ic,53204,{value:Hc});var Wc=function(e){rc(ParticipantDuplicateIdentityError,e);function ParticipantDuplicateIdentityError(){var t=e.call(this,53205,"Participant disconnected because of duplicate identity")||this;Object.setPrototypeOf(t,ParticipantDuplicateIdentityError.prototype);return t}return ParticipantDuplicateIdentityError}(nc);tc.ParticipantDuplicateIdentityError=Wc;Object.defineProperty(ic,53205,{value:Wc});var Qc=function(e){rc(TrackInvalidError,e);function TrackInvalidError(){var t=e.call(this,53300,"Track is invalid")||this;Object.setPrototypeOf(t,TrackInvalidError.prototype);return t}return TrackInvalidError}(nc);tc.TrackInvalidError=Qc;Object.defineProperty(ic,53300,{value:Qc});var qc=function(e){rc(TrackNameInvalidError,e);function TrackNameInvalidError(){var t=e.call(this,53301,"Track name is invalid")||this;Object.setPrototypeOf(t,TrackNameInvalidError.prototype);return t}return TrackNameInvalidError}(nc);tc.TrackNameInvalidError=qc;Object.defineProperty(ic,53301,{value:qc});var zc=function(e){rc(TrackNameTooLongError,e);function TrackNameTooLongError(){var t=e.call(this,53302,"Track name is too long")||this;Object.setPrototypeOf(t,TrackNameTooLongError.prototype);return t}return TrackNameTooLongError}(nc);tc.TrackNameTooLongError=zc;Object.defineProperty(ic,53302,{value:zc});var Gc=function(e){rc(TrackNameCharsInvalidError,e);function TrackNameCharsInvalidError(){var t=e.call(this,53303,"Track name contains invalid characters")||this;Object.setPrototypeOf(t,TrackNameCharsInvalidError.prototype);return t}return TrackNameCharsInvalidError}(nc);tc.TrackNameCharsInvalidError=Gc;Object.defineProperty(ic,53303,{value:Gc});var Kc=function(e){rc(TrackNameIsDuplicatedError,e);function TrackNameIsDuplicatedError(){var t=e.call(this,53304,"Track name is duplicated")||this;Object.setPrototypeOf(t,TrackNameIsDuplicatedError.prototype);return t}return TrackNameIsDuplicatedError}(nc);tc.TrackNameIsDuplicatedError=Kc;Object.defineProperty(ic,53304,{value:Kc});var Jc=function(e){rc(TrackServerTrackCapacityReachedError,e);function TrackServerTrackCapacityReachedError(){var t=e.call(this,53305,"The server has reached capacity and cannot fulfill this request")||this;Object.setPrototypeOf(t,TrackServerTrackCapacityReachedError.prototype);return t}return TrackServerTrackCapacityReachedError}(nc);tc.TrackServerTrackCapacityReachedError=Jc;Object.defineProperty(ic,53305,{value:Jc});var Yc=function(e){rc(MediaClientLocalDescFailedError,e);function MediaClientLocalDescFailedError(){var t=e.call(this,53400,"Client is unable to create or apply a local media description")||this;Object.setPrototypeOf(t,MediaClientLocalDescFailedError.prototype);return t}return MediaClientLocalDescFailedError}(nc);tc.MediaClientLocalDescFailedError=Yc;Object.defineProperty(ic,53400,{value:Yc});var Xc=function(e){rc(MediaServerLocalDescFailedError,e);function MediaServerLocalDescFailedError(){var t=e.call(this,53401,"Server is unable to create or apply a local media description")||this;Object.setPrototypeOf(t,MediaServerLocalDescFailedError.prototype);return t}return MediaServerLocalDescFailedError}(nc);tc.MediaServerLocalDescFailedError=Xc;Object.defineProperty(ic,53401,{value:Xc});var Zc=function(e){rc(MediaClientRemoteDescFailedError,e);function MediaClientRemoteDescFailedError(){var t=e.call(this,53402,"Client is unable to apply a remote media description")||this;Object.setPrototypeOf(t,MediaClientRemoteDescFailedError.prototype);return t}return MediaClientRemoteDescFailedError}(nc);tc.MediaClientRemoteDescFailedError=Zc;Object.defineProperty(ic,53402,{value:Zc});var es=function(e){rc(MediaServerRemoteDescFailedError,e);function MediaServerRemoteDescFailedError(){var t=e.call(this,53403,"Server is unable to apply a remote media description")||this;Object.setPrototypeOf(t,MediaServerRemoteDescFailedError.prototype);return t}return MediaServerRemoteDescFailedError}(nc);tc.MediaServerRemoteDescFailedError=es;Object.defineProperty(ic,53403,{value:es});var ts=function(e){rc(MediaNoSupportedCodecError,e);function MediaNoSupportedCodecError(){var t=e.call(this,53404,"No supported codec")||this;Object.setPrototypeOf(t,MediaNoSupportedCodecError.prototype);return t}return MediaNoSupportedCodecError}(nc);tc.MediaNoSupportedCodecError=ts;Object.defineProperty(ic,53404,{value:ts});var rs=function(e){rc(MediaConnectionError,e);function MediaConnectionError(){var t=e.call(this,53405,"Media connection failed or Media activity ceased")||this;Object.setPrototypeOf(t,MediaConnectionError.prototype);return t}return MediaConnectionError}(nc);tc.MediaConnectionError=rs;Object.defineProperty(ic,53405,{value:rs});var ns=function(e){rc(MediaDTLSTransportFailedError,e);function MediaDTLSTransportFailedError(){var t=e.call(this,53407,"Media connection failed due to DTLS handshake failure")||this;Object.setPrototypeOf(t,MediaDTLSTransportFailedError.prototype);return t}return MediaDTLSTransportFailedError}(nc);tc.MediaDTLSTransportFailedError=ns;Object.defineProperty(ic,53407,{value:ns});var is=function(e){rc(ConfigurationAcquireFailedError,e);function ConfigurationAcquireFailedError(){var t=e.call(this,53500,"Unable to acquire configuration")||this;Object.setPrototypeOf(t,ConfigurationAcquireFailedError.prototype);return t}return ConfigurationAcquireFailedError}(nc);tc.ConfigurationAcquireFailedError=is;Object.defineProperty(ic,53500,{value:is});var as=function(e){rc(ConfigurationAcquireTurnFailedError,e);function ConfigurationAcquireTurnFailedError(){var t=e.call(this,53501,"Unable to acquire TURN credentials")||this;Object.setPrototypeOf(t,ConfigurationAcquireTurnFailedError.prototype);return t}return ConfigurationAcquireTurnFailedError}(nc);tc.ConfigurationAcquireTurnFailedError=as;Object.defineProperty(ic,53501,{value:as});var os="default"in e?e.default:e;var cs={};Object.defineProperty(cs,"__esModule",{value:true});cs.getTurnCredentials=void 0;var ss=Go;var us=v.ICE_VERSION;var ls=tc,ds=ls.createTwilioError,ps=ls.SignalingConnectionError;var fs=os;function getTurnCredentials(e,t){return new Promise((function(r,n){var i=new fs.EventEmitter;var a={networkMonitor:null,eventObserver:i,helloBody:{edge:"roaming",preflight:true,token:e,type:"ice",version:us}};var o=new ss(t,a);var c=false;o.once("close",(function(){if(!c){c=true;n(new ps)}}));o.on("message",(function(e){var t=e.code,i=e.message,a=e.ice_servers,s=e.type;if(("iced"===s||"error"===s)&&!c){c=true;"iced"===s?r(a):n(ds(t,i));o.close()}}))}))}cs.getTurnCredentials=getTurnCredentials;var vs={};var hs=vs&&vs.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};var _s=vs&&vs.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};Object.defineProperty(vs,"__esModule",{value:true});vs.makeStat=void 0;
/**
 * Computes min, max, average for given array.
 * @param {Array<number>} values
 * @returns {{min: number, max: number: average: number}|null}
 */function makeStat(e){if(e&&e.length){var t=Math.min.apply(Math,_s([],hs(e)));var r=Math.max.apply(Math,_s([],hs(e)));var n=e.reduce((function(e,t){return e+t}),0)/e.length;return{min:t,max:r,average:n}}return null}vs.makeStat=makeStat;var ms={};Object.defineProperty(ms,"__esModule",{value:true});ms.syntheticAudio=void 0;function syntheticAudio(){var e=kr;var t={};var r=e.getOrCreate(t);var n=r.createOscillator();var i=n.connect(r.createMediaStreamDestination());n.start();var a=i.stream.getAudioTracks()[0];var o=a.stop;a.stop=function(){o.call(a);e.release(t)};return a}ms.syntheticAudio=syntheticAudio;var gs={};Object.defineProperty(gs,"__esModule",{value:true});gs.syntheticVideo=void 0;function syntheticVideo(e){var t=void 0===e?{}:e,r=t.width,n=void 0===r?640:r,i=t.height,a=void 0===i?480:i;var o=Object.assign(document.createElement("canvas"),{width:n,height:a});var c=o.getContext("2d");c.fillStyle="green";c.fillRect(0,0,o.width,o.height);var s=false;requestAnimationFrame((function animate(){if(!s){var e=Math.round(255*Math.random());var t=Math.round(255*Math.random());var r=Math.round(255*Math.random());var i=Math.round(255*Math.random());c.fillStyle="rgba("+e+", "+t+", "+r+", "+i+")";c.fillRect(Math.random()*n,Math.random()*a,50,50);requestAnimationFrame(animate)}}));var u=o.captureStream(30);var l=u.getTracks()[0];var d=l.stop;l.stop=function(){s=true;d.call(l)};return l}gs.syntheticVideo=syntheticVideo;var ys={};var bs=function(){function MovingAverageDelta(){Object.defineProperties(this,{_samples:{value:[{denominator:0,numerator:0},{denominator:0,numerator:0}]}})}
/**
   * Get the moving average delta.
   * @returns {number}
   */MovingAverageDelta.prototype.get=function(){var e=this._samples;var t=e[1].denominator-e[0].denominator||Infinity;var r=e[1].numerator-e[0].numerator;return r/t};
/**
   * Put a sample and get rid of the older sample to maintain sample size of 2.
   * @param numerator
   * @param denominator
   */MovingAverageDelta.prototype.putSample=function(e,t){var r=this._samples;r.shift();r.push({denominator:t,numerator:e})};return MovingAverageDelta}();ys=bs;var ks=ys;var Ss="default"in e?e.default:e;var Ts={};var ws=Ts&&Ts.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Cs=Ss.EventEmitter;var Ps=["signaling","room","media","quality","video-processor","preflight"];var Os=["debug","error","info","warning"];var Es=function(e){ws(EventObserver,e);
/**
   * Constructor.
   * @param {InsightsPublisher} publisher
   * @param {number} connectTimestamp
   * @param {Log} log
   * @param {EventListener} [eventListener]
   */function EventObserver(t,r,n,i){void 0===i&&(i=null);var a=e.call(this)||this;a.on("event",(function(e){var a=e.name,o=e.group,c=e.level,s=e.payload;if("string"!==typeof a){n.error("Unexpected name: ",a);throw new Error("Unexpected name: ",a)}if(!Ps.includes(o)){n.error("Unexpected group: ",o);throw new Error("Unexpected group: ",o)}if(!Os.includes(c)){n.error("Unexpected level: ",c);throw new Error("Unexpected level: ",c)}var u=Date.now();var l=u-r;var d=Object.assign({elapsedTime:l,level:c},s||{});t.publish(o,a,d);var p=Object.assign({elapsedTime:l,group:o,level:c,name:a,timestamp:u},s?{payload:s}:{});var f={debug:"debug",error:"error",info:"info",warning:"warn"}[c];n[f]("event",p);i&&"signaling"===o&&i.emit("event",p)}));return a}return EventObserver}(Cs);
/**
 * An SDK event.
 * @event EventObserver#event
 * @param {{name: string, payload: *}} event
 */Ts=Es;var Rs=Ts;var Ls="default"in e?e.default:e;var Ms="default"in t?t.default:t;var Is={};var js=Is&&Is.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var As=Is&&Is.__assign||function(){As=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e};return As.apply(this,arguments)};var Ds=Ls.EventEmitter;var xs=Y.getUserAgent;var Vs=5;var Ns=50;var Fs=1e3;var Bs=globalThis;var Us=Bs.WebSocket?Bs.WebSocket:Ms;var $s=v,Hs=$s.hardwareDevicePublisheriPad,Ws=$s.hardwareDevicePublisheriPhone;var Qs=Y;var qs=hr;var zs=function(e){js(InsightsPublisher,e);
/**
   * @param {string} token - Insights gateway token
   * @param {string} sdkName - Name of the SDK using the {@link InsightsPublisher}
   * @param {string} sdkVersion - Version of the SDK using the {@link InsightsPublisher}
   * @param {string} environment - One of 'dev', 'stage' or 'prod'
   * @param {string} realm - Region identifier
   * @param {InsightsPublisherOptions} options - Override default behavior
   */function InsightsPublisher(t,r,n,i,a,o){var c=e.call(this)||this;o=Object.assign({gateway:createGateway(i,a)+"/v1/VideoEvents",maxReconnectAttempts:Vs,reconnectIntervalMs:Ns,userAgent:xs(),WebSocket:Us},o);Object.defineProperties(c,{_connectTimestamp:{value:0,writable:true},_eventQueue:{value:[]},_readyToConnect:{value:Qs.defer()},_reconnectAttemptsLeft:{value:o.maxReconnectAttempts,writable:true},_ws:{value:null,writable:true},_WebSocket:{value:o.WebSocket}});c._readyToConnect.promise.then((function(e){var i=e.roomSid,a=e.participantSid;var s=c;c.on("disconnected",(function maybeReconnect(e){s._session=null;if(e&&s._reconnectAttemptsLeft>0){s.emit("reconnecting");reconnect(s,t,r,n,i,a,o)}else s.removeListener("disconnected",maybeReconnect)}));connect$2(c,t,r,n,i,a,o)})).catch((function(){}));return c}
/**
   * Start connecting to the Insights gateway.
   * @param {string} roomSid
   * @param {string} participantSid
   * @returns {void}
   */InsightsPublisher.prototype.connect=function(e,t){this._readyToConnect.resolve({roomSid:e,participantSid:t})};
/**
   * Publish an event to the Insights gateway.
   * @private
   * @param {*} event
   */InsightsPublisher.prototype._publish=function(e){e.session=this._session;this._ws.send(JSON.stringify(e))};
/**
   * Disconnect from the Insights gateway.
   * @returns {boolean} true if called when connecting/open, false if not
   */InsightsPublisher.prototype.disconnect=function(){if(null===this._ws||this._ws.readyState===this._WebSocket.CLOSING||this._ws.readyState===this._WebSocket.CLOSED)return false;try{this._ws.close()}catch(e){}this.emit("disconnected");return true};
/**
   * Publish (or queue, if not connected) an event to the Insights gateway.
   * @param {string} groupName - Event group name
   * @param {string} eventName - Event name
   * @param {object} payload - Event payload
   * @returns {boolean} true if queued or published, false if disconnect() called
   */InsightsPublisher.prototype.publish=function(e,t,r){if(null!==this._ws&&(this._ws.readyState===this._WebSocket.CLOSING||this._ws.readyState===this._WebSocket.CLOSED))return false;var n="string"===typeof this._session?this._publish.bind(this):this._eventQueue.push.bind(this._eventQueue);n({group:e,name:t,payload:r,timestamp:Date.now(),type:"event",version:1});return true};return InsightsPublisher}(Ds);
/**
 * Start connecting to the Insights gateway.
 * @private
 * @param {InsightsPublisher} publisher
 * @param {string} name
 * @param {string} token
 * @param {string} sdkName
 * @param {string} sdkVersion
 * @param {string} roomSid
 * @param {string} participantSid
 * @param {InsightsPublisherOptions} options
 */function connect$2(e,t,r,n,i,a,o){e._connectTimestamp=Date.now();e._reconnectAttemptsLeft--;e._ws=new o.WebSocket(o.gateway);var c=e._ws;c.addEventListener("close",(function(t){t.code!==Fs?e.emit("disconnected",new Error("WebSocket Error "+t.code+": "+t.reason)):e.emit("disconnected")}));c.addEventListener("message",(function(t){handleConnectResponse(e,JSON.parse(t.data),o)}));c.addEventListener("open",(function(){var e={type:"connect",token:t,version:1};e.publisher={name:r,sdkVersion:n,userAgent:o.userAgent,participantSid:a,roomSid:i};qs.isIpad()?e.publisher=As(As({},e.publisher),Hs):qs.isIphone()&&(e.publisher=As(As({},e.publisher),Ws));c.send(JSON.stringify(e))}))}
/**
 * Create the Insights Websocket gateway URL.
 * @param {string} environment
 * @param {string} realm
 * @returns {string}
 */function createGateway(e,t){return"prod"===e?"wss://sdkgw."+t+".twilio.com":"wss://sdkgw."+e+"-"+t+".twilio.com"}
/**
 * Handle connect response from the Insights gateway.
 * @param {InsightsPublisher} publisher
 * @param {*} response
 * @param {InsightsPublisherOptions} options
 */function handleConnectResponse(e,t,r){switch(t.type){case"connected":e._session=t.session;e._reconnectAttemptsLeft=r.maxReconnectAttempts;e._eventQueue.splice(0).forEach(e._publish,e);e.emit("connected");break;case"error":e._ws.close();e.emit("disconnected",new Error(t.message));break}}
/**
 * Start re-connecting to the Insights gateway with an appropriate delay based
 * on InsightsPublisherOptions#reconnectIntervalMs.
 * @private
 * @param {InsightsPublisher} publisher
 * @param {string} token
 * @param {string} sdkName
 * @param {string} sdkVersion
 * @param {string} roomSid
 * @param {string} participantSid
 * @param {InsightsPublisherOptions} options
 */function reconnect(e,t,r,n,i,a,o){var c=Date.now()-e._connectTimestamp;var s=o.reconnectIntervalMs-c;s>0?setTimeout((function(){connect$2(e,t,r,n,i,a,o)}),s):connect$2(e,t,r,n,i,a,o)}
/**
 * The {@link InsightsPublisher} is disconnected from the gateway.
 * @event InsightsPublisher#disconnected
 * @param {Error} [error] - Optional error if disconnected unintentionally
 */
/**
 * {@link InsightsPublisher} options.
 * @typedef {object} InsightsPublisherOptions
 * @property {string} [gateway=sdkgw.{environment}-{realm}.twilio.com] - Insights WebSocket gateway url
 * @property {number} [maxReconnectAttempts=5] - Max re-connect attempts
 * @property {number} [reconnectIntervalMs=50] - Re-connect interval in ms
 */Is=zs;var Gs=Is;var Ks={};var Js=Ks&&Ks.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Ys=Ks&&Ks.__assign||function(){Ys=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e};return Ys.apply(this,arguments)};var Xs=Ks&&Ks.__awaiter||function(e,t,r,n){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function fulfilled(e){try{step(n.next(e))}catch(e){i(e)}}function rejected(e){try{step(n.throw(e))}catch(e){i(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))};var Zs=Ks&&Ks.__generator||function(e,t){var r,n,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:verb(0),throw:verb(1),return:verb(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function verb(e){return function(t){return step([e,t])}}function step(a){if(r)throw new TypeError("Generator is already executing.");while(o)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;(n=0,i)&&(a=[2&a[0],i.value]);switch(a[0]){case 0:case 1:i=a;break;case 4:o.label++;return{value:a[1],done:false};case 5:o.label++;n=a[1];a=[0];continue;case 7:a=o.ops.pop();o.trys.pop();continue;default:if(!(i=o.trys,i=i.length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1];i=a;break}if(i&&o.label<i[2]){o.label=i[2];o.ops.push(a);break}i[2]&&o.ops.pop();o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e];n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};Object.defineProperty(Ks,"__esModule",{value:true});Ks.runPreflight=Ks.PreflightTest=void 0;var eu=v;var tu=$a;var ru=Wa;var nu=qa;var iu=cs;var au=vs;var ou=ms;var cu=gs;var su=Y;var uu=v.WS_SERVER;var lu=R;var du=Dr;var pu=ks;var fu=Rs;var vu=Gs;var hu=Q,_u=hu.createSID,mu=hu.sessionSID;var gu=tc,yu=gu.SignalingConnectionTimeoutError,bu=gu.MediaConnectionError;var ku=1e3;var Su=10*ku;var Tu={mediaAcquired:"mediaAcquired",connected:"connected",mediaSubscribed:"mediaSubscribed",mediaStarted:"mediaStarted",dtlsConnected:"dtlsConnected",peerConnectionConnected:"peerConnectionConnected",iceConnected:"iceConnected"};function notEmpty(e){return null!==e&&"undefined"!==typeof e}var wu=0;var Cu=function(e){Js(PreflightTest,e);
/**
   * Constructs {@link PreflightTest}.
   * @param {string} token
   * @param {?PreflightOptions} [options]
   */function PreflightTest(t,r){var n=e.call(this)||this;n._testTiming=new tu.Timer;n._dtlsTiming=new tu.Timer;n._iceTiming=new tu.Timer;n._peerConnectionTiming=new tu.Timer;n._mediaTiming=new tu.Timer;n._connectTiming=new tu.Timer;n._sentBytesMovingAverage=new pu;n._packetLossMovingAverage=new pu;n._progressEvents=[];n._receivedBytesMovingAverage=new pu;var i=r;var a=i.environment,o=void 0===a?"prod":a,c=i.region,s=void 0===c?"gll":c,u=i.duration,l=void 0===u?Su:u;var d=i.wsServer||uu(o,s);n._log=new lu("default",n,eu.DEFAULT_LOG_LEVEL,eu.DEFAULT_LOGGER_NAME);n._testDuration=l;n._instanceId=wu++;n._testTiming.start();n._runPreflightTest(t,o,d);return n}PreflightTest.prototype.toString=function(){return"[Preflight #"+this._instanceId+"]"};PreflightTest.prototype.stop=function(){this._stopped=true};PreflightTest.prototype._generatePreflightReport=function(e){this._testTiming.stop();return{testTiming:this._testTiming.getTimeMeasurement(),networkTiming:{dtls:this._dtlsTiming.getTimeMeasurement(),ice:this._iceTiming.getTimeMeasurement(),peerConnection:this._peerConnectionTiming.getTimeMeasurement(),connect:this._connectTiming.getTimeMeasurement(),media:this._mediaTiming.getTimeMeasurement()},stats:{jitter:au.makeStat(null===e||void 0===e?void 0:e.jitter),rtt:au.makeStat(null===e||void 0===e?void 0:e.rtt),packetLoss:au.makeStat(null===e||void 0===e?void 0:e.packetLoss)},selectedIceCandidatePairStats:e?e.selectedIceCandidatePairStats:null,iceCandidateStats:e?e.iceCandidateStats:[],progressEvents:this._progressEvents,mos:au.makeStat(null===e||void 0===e?void 0:e.mos)}};PreflightTest.prototype._executePreflightStep=function(e,t,r){return Xs(this,void 0,void 0,(function(){var n,i,a,o,c;return Zs(this,(function(s){switch(s.label){case 0:this._log.debug("Executing step: ",e);n=this._testDuration+10*ku;if(this._stopped)throw new Error("stopped");i=Promise.resolve().then(t);a=null;o=new Promise((function(t,i){a=setTimeout((function(){i(r||new Error(e+" timeout."))}),n)}));s.label=1;case 1:s.trys.push([1,,3,4]);return[4,Promise.race([o,i])];case 2:c=s.sent();return[2,c];case 3:null!==a&&clearTimeout(a);return[7];case 4:return[2]}}))}))};PreflightTest.prototype._collectNetworkTimings=function(e){var t=this;return new Promise((function(r){var n;e.addEventListener("iceconnectionstatechange",(function(){"checking"===e.iceConnectionState&&t._iceTiming.start();if("connected"===e.iceConnectionState){t._iceTiming.stop();t._updateProgress(Tu.iceConnected);(!n||n&&"connected"===n.state)&&r()}}));e.addEventListener("connectionstatechange",(function(){"connecting"===e.connectionState&&t._peerConnectionTiming.start();if("connected"===e.connectionState){t._peerConnectionTiming.stop();t._updateProgress(Tu.peerConnectionConnected)}}));var i=e.getSenders();var a=i.map((function(e){return e.transport})).find(notEmpty);if("undefined"!==typeof a){n=a;n.addEventListener("statechange",(function(){"connecting"===n.state&&t._dtlsTiming.start();if("connected"===n.state){t._dtlsTiming.stop();t._updateProgress(Tu.dtlsConnected);"connected"===e.iceConnectionState&&r()}}))}}))};PreflightTest.prototype._setupInsights=function(e){var t=e.token,r=e.environment,n=void 0===r?eu.DEFAULT_ENVIRONMENT:r,i=e.realm,a=void 0===i?eu.DEFAULT_REALM:i;var o={};var c=new vu(t,eu.SDK_NAME,eu.SDK_VERSION,n,a,o);c.connect("PREFLIGHT_ROOM_SID","PREFLIGHT_PARTICIPANT");var s=new fu(c,Date.now(),this._log);var u=void 0;return{reportToInsights:function(e){var t,r;var n=e.report;var i=n.stats.jitter||u;var a=n.stats.rtt||u;var o=n.stats.packetLoss||u;var l=n.mos||u;var d=new Map;n.iceCandidateStats.forEach((function(e){if(e.candidateType&&e.protocol){var t=d.get(e.candidateType)||[];t.indexOf(e.protocol)<0&&t.push(e.protocol);d.set(e.candidateType,t)}}));var p=JSON.stringify(Object.fromEntries(d));var f={name:"report",group:"preflight",level:n.error?"error":"info",payload:{sessionSID:mu,preflightSID:_u("PF"),progressEvents:JSON.stringify(n.progressEvents),testTiming:n.testTiming,dtlsTiming:n.networkTiming.dtls,iceTiming:n.networkTiming.ice,peerConnectionTiming:n.networkTiming.peerConnection,connectTiming:n.networkTiming.connect,mediaTiming:n.networkTiming.media,selectedLocalCandidate:null===(t=n.selectedIceCandidatePairStats)||void 0===t?void 0:t.localCandidate,selectedRemoteCandidate:null===(r=n.selectedIceCandidatePairStats)||void 0===r?void 0:r.remoteCandidate,iceCandidateStats:p,jitterStats:i,rttStats:a,packetLossStats:o,mosStats:l,error:n.error}};s.emit("event",f);setTimeout((function(){return c.disconnect()}),2e3)}}};PreflightTest.prototype._runPreflightTest=function(e,t,r){return Xs(this,void 0,void 0,(function(){var n,i,a,o,c,s,u,l,d,p,f,v;var h=this;return Zs(this,(function(_){switch(_.label){case 0:n=[];i=[];a=this._setupInsights({token:e,environment:t}).reportToInsights;_.label=1;case 1:_.trys.push([1,8,9,10]);o=[];return[4,this._executePreflightStep("Acquire media",(function(){return[ou.syntheticAudio(),cu.syntheticVideo({width:640,height:480})]}))];case 2:n=_.sent();this._updateProgress(Tu.mediaAcquired);this.emit("debug",{localTracks:n});this._connectTiming.start();return[4,this._executePreflightStep("Get turn credentials",(function(){return iu.getTurnCredentials(e,r)}),new yu)];case 3:c=_.sent();this._connectTiming.stop();this._updateProgress(Tu.connected);s=new RTCPeerConnection({iceServers:c,iceTransportPolicy:"relay",bundlePolicy:"max-bundle"});u=new RTCPeerConnection({iceServers:c,bundlePolicy:"max-bundle"});i.push(s);i.push(u);this._mediaTiming.start();return[4,this._executePreflightStep("Setup Peer Connections",(function(){return Xs(h,void 0,void 0,(function(){var e,t,r,i;return Zs(this,(function(a){switch(a.label){case 0:s.addEventListener("icecandidate",(function(e){return e.candidate&&u.addIceCandidate(e.candidate)}));u.addEventListener("icecandidate",(function(e){return e.candidate&&s.addIceCandidate(e.candidate)}));n.forEach((function(e){return s.addTrack(e)}));e=new Promise((function(e){var t=[];u.addEventListener("track",(function(r){t.push(r.track);t.length===n.length&&e(t)}))}));return[4,s.createOffer()];case 1:t=a.sent();r=t;return[4,s.setLocalDescription(r)];case 2:a.sent();return[4,u.setRemoteDescription(r)];case 3:a.sent();return[4,u.createAnswer()];case 4:i=a.sent();return[4,u.setLocalDescription(i)];case 5:a.sent();return[4,s.setRemoteDescription(i)];case 6:a.sent();return[4,this._collectNetworkTimings(s)];case 7:a.sent();return[2,e]}}))}))}),new bu)];case 4:l=_.sent();this.emit("debug",{remoteTracks:l});l.forEach((function(e){e.addEventListener("ended",(function(){return h._log.warn(e.kind+":ended")}));e.addEventListener("mute",(function(){return h._log.warn(e.kind+":muted")}));e.addEventListener("unmute",(function(){return h._log.warn(e.kind+":unmuted")}))}));this._updateProgress(Tu.mediaSubscribed);return[4,this._executePreflightStep("Wait for tracks to start",(function(){return new Promise((function(e){var t=document.createElement("video");t.autoplay=true;t.playsInline=true;t.muted=true;t.srcObject=new MediaStream(l);o.push(t);h.emit("debugElement",t);t.oncanplay=e}))}),new bu)];case 5:_.sent();this._mediaTiming.stop();this._updateProgress(Tu.mediaStarted);return[4,this._executePreflightStep("Collect stats for duration",(function(){return h._collectRTCStatsForDuration(h._testDuration,initCollectedStats(),s,u)}))];case 6:d=_.sent();return[4,this._executePreflightStep("Generate report",(function(){return h._generatePreflightReport(d)}))];case 7:p=_.sent();a({report:p});this.emit("completed",p);return[3,10];case 8:f=_.sent();v=this._generatePreflightReport();a({report:Ys(Ys({},v),{error:null===f||void 0===f?void 0:f.toString()})});this.emit("failed",f,v);return[3,10];case 9:i.forEach((function(e){return e.close()}));n.forEach((function(e){return e.stop()}));return[7];case 10:return[2]}}))}))};PreflightTest.prototype._collectRTCStats=function(e,t,r){return Xs(this,void 0,void 0,(function(){var n,i,a,o,c,s,u,l,d,p,f,v,h,_;return Zs(this,(function(m){switch(m.label){case 0:return[4,nu.getCombinedConnectionStats({publisher:t,subscriber:r})];case 1:n=m.sent();i=n.timestamp,a=n.bytesSent,o=n.bytesReceived,c=n.packets,s=n.packetsLost,u=n.roundTripTime,l=n.jitter,d=n.selectedIceCandidatePairStats,p=n.iceCandidateStats;f=e.jitter.length>0;e.jitter.push(l);e.rtt.push(u);this._sentBytesMovingAverage.putSample(a,i);this._receivedBytesMovingAverage.putSample(o,i);this._packetLossMovingAverage.putSample(s,c);if(f){e.outgoingBitrate.push(1e3*this._sentBytesMovingAverage.get()*8);e.incomingBitrate.push(1e3*this._receivedBytesMovingAverage.get()*8);v=this._packetLossMovingAverage.get();h=Math.min(100,100*v);e.packetLoss.push(h);_=ru.calculateMOS(u,l,v);e.mos.push(_)}e.selectedIceCandidatePairStats||(e.selectedIceCandidatePairStats=d);0===e.iceCandidateStats.length&&(e.iceCandidateStats=p);return[2]}}))}))};PreflightTest.prototype._collectRTCStatsForDuration=function(e,t,r,n){return Xs(this,void 0,void 0,(function(){var i,a,o;return Zs(this,(function(c){switch(c.label){case 0:i=Date.now();a=Math.min(1e3,e);return[4,su.waitForSometime(a)];case 1:c.sent();return[4,this._collectRTCStats(t,r,n)];case 2:c.sent();o=e-(Date.now()-i);return o>0?[4,this._collectRTCStatsForDuration(o,t,r,n)]:[3,4];case 3:t=c.sent();c.label=4;case 4:return[2,t]}}))}))};PreflightTest.prototype._updateProgress=function(e){var t=Date.now()-this._testTiming.getTimeMeasurement().start;this._progressEvents.push({duration:t,name:e});this.emit("progress",e)};return PreflightTest}(du);Ks.PreflightTest=Cu;function initCollectedStats(){return{mos:[],jitter:[],rtt:[],outgoingBitrate:[],incomingBitrate:[],packetLoss:[],selectedIceCandidatePairStats:null,iceCandidateStats:[]}}
/**
 * Represents network timing measurements captured during preflight test
 * @typedef {object} NetworkTiming
 * @property {TimeMeasurement} [connect] - Time to establish signaling connection and acquire turn credentials
 * @property {TimeMeasurement} [media] - Time to start media. This is measured from calling connect to remote media getting started.
 * @property {TimeMeasurement} [dtls] - Time to establish dtls connection. This is measured from RTCDtlsTransport `connecting` to `connected` state. (Not available on Safari)
 * @property {TimeMeasurement} [ice] - Time to establish ice connectivity. This is measured from ICE connection `checking` to `connected` state.
 * @property {TimeMeasurement} [peerConnection] - Time to establish peer connectivity. This is measured from PeerConnection `connecting` to `connected` state. (Not available on Firefox)
 */
/**
 * Represents stats for a numerical metric.
 * @typedef {object} Stats
 * @property  {number} [average] - Average value observed.
 * @property  {number} [max] - Max value observed.
 * @property  {number} [min] - Min value observed.
 */
/**
 * Represents stats for a numerical metric.
 * @typedef {object} SelectedIceCandidatePairStats
 * @property  {RTCIceCandidateStats} [localCandidate] - Selected local ice candidate
 * @property  {RTCIceCandidateStats} [remoteCandidate] - Selected local ice candidate
 */
/**
 * Represents RTC related stats that were observed during preflight test
 * @typedef {object} PreflightReportStats
 * @property {Stats} [jitter] - Packet delay variation in seconds
 * @property {Stats} [rtt] - Round trip time, to the server back to the client in milliseconds.
 * @property {Stats} [packetLoss] - Packet loss as a percent of total packets sent.
*/
/**
 * A {@link PreflightProgress} event with timing information.
 * @typedef {object} ProgressEvent
 * @property {number} [duration] - The duration of the event, measured from the start of the test.
 * @property {string} [name] - The {@link PreflightProgress} event name.
 */
/**
 * Represents report generated by {@link PreflightTest}.
 * @typedef {object} PreflightTestReport
 * @property {TimeMeasurement} [testTiming] - Time measurements of test run time.
 * @property {NetworkTiming} [networkTiming] - Network related time measurements.
 * @property {PreflightReportStats} [stats] - RTC related stats captured during the test.
 * @property {Array<RTCIceCandidateStats>} [iceCandidateStats] - List of gathered ice candidates.
 * @property {SelectedIceCandidatePairStats} selectedIceCandidatePairStats - Stats for the ice candidates that were used for the connection.
 * @property {Array<ProgressEvent>} [progressEvents] - {@link ProgressEvent} events detected during the test.
 * Use this information to determine which steps were completed and which ones were not.
 */
/**
 * You may pass these options to {@link module:twilio-video.testPreflight} in order to override the
 * default behavior.
 * @typedef {object} PreflightOptions
 * @property {string} [region='gll'] - Preferred signaling region; By default, you will be connected to the
 *   nearest signaling server determined by latency based routing. Setting a value other
 *   than <code style="padding:0 0">gll</code> bypasses routing and guarantees that signaling traffic will be
 *   terminated in the region that you prefer. Please refer to this <a href="https://www.twilio.com/docs/video/ip-address-whitelisting#signaling-communication" target="_blank">table</a>
 *   for the list of supported signaling regions.
 * @property {number} [duration=10000] - number of milliseconds to run test for.
 *   once connected test will run for this duration before generating the stats report.
 */
/**
 * Preflight test has completed successfully.
 * @param {PreflightTestReport} report - Results of the test.
 * @event PreflightTest#completed
 */
/**
 * Preflight test has encountered a failure and is now stopped.
 * @param {TwilioError|Error} error - A TwilioError or a DOMException.
 * Possible TwilioErrors include Signaling and Media related errors which can be found
 * <a href="https://www.twilio.com/docs/video/build-js-video-application-recommendations-and-best-practices#connection-errors" target="_blank">here</a>.
 * @param {PreflightTestReport} report - Partial results gathered during the test. Use this information to help determine the cause of failure.
 * @event PreflightTest#failed
 */
/**
 * Emitted to indicate progress of the test
 * @param {PreflightProgress} progress - Indicates the status completed.
 * @event PreflightTest#progress
 */
/**
 * @method
 * @name runPreflight
 * @description Run a preflight test. This method will start a test to check the quality of network connection.
 * @memberof module:twilio-video
 * @param {string} token - The Access Token string
 * @param {PreflightOptions} options - Options for the test
 * @returns {PreflightTest} preflightTest - An instance to be used to monitor progress of the test.
 * @example
 * var { runPreflight } = require('twilio-video');
 * var preflight = runPreflight(token, preflightOptions);
 * preflightTest.on('progress', progress => {
 *   console.log('preflight progress:', progress);
 * });
 *
 * preflightTest.on('failed', (error, report) => {
 *   console.error('preflight error:', error, report);
 * });
 *
 * preflightTest.on('completed', report => {
 *   console.log('preflight completed:', report));
 * });
*/function runPreflight(e,t){void 0===t&&(t={});var r=new Cu(e,t);return r}Ks.runPreflight=runPreflight;var Pu={};var Ou=Pu&&Pu.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};var Eu=Pu&&Pu.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};var Ru=function(){
/**
   * Construct a new {@link CancelablePromise}.
   * @param {CancelablePromise.OnCreate} onCreate
   * @param {CancelablePromise.OnCancel} onCancel
  */
/**
     * A function to be called on {@link CancelablePromise} creation
     * @typedef {function} CancelablePromise.OnCreate
     * @param {function(*)} resolve
     * @param {function(*)} reject
     * @param {function(): boolean} isCanceled
     */
/**
        * A function to be called when {@link CancelablePromise#cancel} is called
        * @typedef {function} CancelablePromise.OnCancel
        */
function CancelablePromise(e,t){var r=this;Object.defineProperties(this,{_isCancelable:{writable:true,value:true},_isCanceled:{writable:true,value:false},_onCancel:{value:t}});Object.defineProperty(this,"_promise",{value:new Promise((function(t,n){e((function(e){r._isCancelable=false;t(e)}),(function(e){r._isCancelable=false;n(e)}),(function(){return r._isCanceled}))}))})}
/**
   * Create a synchronously-rejected {@link CancelablePromise}.
   * @param {*} reason
   * @returns {Promise<*>}
   */CancelablePromise.reject=function(e){return new CancelablePromise((function rejected(t,r){r(e)}),(function onCancel(){}))};
/**
   * Create a synchronously-resolved {@link CancelablePromise}.
   * @param {*|Promise<*>|Thenable<*>} result
   * @returns {CancelablePromise<*>}
   */CancelablePromise.resolve=function(e){return new CancelablePromise((function resolved(t){t(e)}),(function onCancel(){}))};
/**
   * Attempt to cancel the {@link CancelablePromise}.
   * @returns {this}
   */CancelablePromise.prototype.cancel=function(){if(this._isCancelable){this._isCanceled=true;this._onCancel()}return this};
/**
   * @param {function} onRejected
   * @returns {CancelablePromise}
   */CancelablePromise.prototype.catch=function(){var e=[].slice.call(arguments);var t=this._promise;return new CancelablePromise((function onCreate(r,n){t.catch.apply(t,Eu([],Ou(e))).then(r,n)}),this._onCancel)};
/**
   * @param {?function} onResolved
   * @param {function} [onRejected]
   * @returns {CancelablePromise}
   */CancelablePromise.prototype.then=function(){var e=[].slice.call(arguments);var t=this._promise;return new CancelablePromise((function onCreate(r,n){t.then.apply(t,Eu([],Ou(e))).then(r,n)}),this._onCancel)};
/**
  * @param {?function} onFinally
  * @returns {CancelablePromise}
  */CancelablePromise.prototype.finally=function(){var e=[].slice.call(arguments);var t=this._promise;return new CancelablePromise((function onCreate(r,n){t.finally.apply(t,Eu([],Ou(e))).then(r,n)}),this._onCancel)};return CancelablePromise}();Pu=Ru;var Lu=Pu;var Mu={};var Iu=Lu;
/**
 * Create a {@link CancelablePromise<Room>}.
 * @param {function(function(Array<LocalTrack>): CancelablePromise<RoomSignaling>):
 *   Promise<function(): CancelablePromise<RoomSignaling>>} getLocalTracks
 * @param {function(Array<LocalTrack>): LocalParticipant} createLocalParticipant
 * @param {function(Array<LocalTrack>): CancelablePromise<RoomSignaling>} createRoomSignaling
 * @param {function(LocalParticipant, RoomSignaling): Room} createRoom
 * @returns CancelablePromise<Room>
 */function createCancelableRoomPromise$1(e,t,r,n){var i;var a=new Error("Canceled");return new Iu((function onCreate(o,c,s){var u;e((function getLocalTracksSucceeded(e){if(s())return Iu.reject(a);u=t(e);return r(u).then((function createRoomSignalingSucceeded(e){if(s())throw a;i=e();return i}))})).then((function roomSignalingConnected(e){if(s()){e.disconnect();throw a}o(n(u,e))})).catch((function onError(e){c(e)}))}),(function onCancel(){i&&i.cancel()}))}Mu=createCancelableRoomPromise$1;var ju=Mu;var Au="default"in e?e.default:e;var Du={};var xu=Du&&Du.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Vu=Au.EventEmitter;var Nu=function(e){xu(EncodingParametersImpl,e);
/**
   * Construct an {@link EncodingParametersImpl}.
   * @param {EncodingParamters} encodingParameters - Initial {@link EncodingParameters}
   * @param {Boolean} adaptiveSimulcast - true if adaptive simulcast was enabled by connect options.
   */function EncodingParametersImpl(t,r){var n=e.call(this)||this;t=Object.assign({maxAudioBitrate:null,maxVideoBitrate:null},t);Object.defineProperties(n,{maxAudioBitrate:{value:t.maxAudioBitrate,writable:true},maxVideoBitrate:{value:t.maxVideoBitrate,writable:true},adaptiveSimulcast:{value:r}});return n}
/**
   * Returns the bitrate values in an {@link EncodingParameters}.
   * @returns {EncodingParameters}
   */EncodingParametersImpl.prototype.toJSON=function(){return{maxAudioBitrate:this.maxAudioBitrate,maxVideoBitrate:this.maxVideoBitrate}};
/**
   * Update the bitrate values with those in the given {@link EncodingParameters}.
   * @param {EncodingParameters} encodingParameters - The new {@link EncodingParameters}
   * @fires EncodingParametersImpl#changed
   */EncodingParametersImpl.prototype.update=function(e){var t=this;e=Object.assign({maxAudioBitrate:this.maxAudioBitrate,maxVideoBitrate:this.maxVideoBitrate},e);var r=["maxAudioBitrate","maxVideoBitrate"].reduce((function(r,n){if(t[n]!==e[n]){t[n]=e[n];r=true}return r}),false);r&&this.emit("changed")};return EncodingParametersImpl}(Vu);Du=Nu;var Fu=Du;var Bu={};var Uu=Y.isNonArrayObject;var $u=v,Hu=$u.typeErrors,Wu=$u.clientTrackSwitchOffControl,Qu=$u.videoContentPreferencesMode,qu=$u.subscriptionMode,zu=$u.trackPriority,Gu=$u.trackSwitchOffMode;
/**
 * Validate the {@link BandwidthProfileOptions} object.
 * @param {BandwidthProfileOptions} bandwidthProfile
 * @returns {?Error} - null if valid, Error if not.
 */function validateBandwidthProfile$1(e){var t=validateObject(e,"options.bandwidthProfile");if(!e||t)return t;t=validateObject(e.video,"options.bandwidthProfile.video",[{prop:"contentPreferencesMode",values:Object.values(Qu)},{prop:"dominantSpeakerPriority",values:Object.values(zu)},{prop:"maxSubscriptionBitrate",type:"number"},{prop:"maxTracks",type:"number"},{prop:"mode",values:Object.values(qu)},{prop:"clientTrackSwitchOffControl",values:Object.values(Wu)},{prop:"trackSwitchOffMode",values:Object.values(Gu)}]);return t||(e.video?"maxTracks"in e.video&&"clientTrackSwitchOffControl"in e.video?new TypeError("options.bandwidthProfile.video.maxTracks is deprecated. Use options.bandwidthProfile.video.clientTrackSwitchOffControl instead."):"renderDimensions"in e.video&&"contentPreferencesMode"in e.video?new TypeError("options.bandwidthProfile.video.renderDimensions is deprecated. Use options.bandwidthProfile.video.contentPreferencesMode instead."):validateRenderDimensions(e.video.renderDimensions):null)}
/**
 * Throw if the given track is not a {@link LocalAudioTrack}, a
 * {@link LocalVideoTrack} or a MediaStreamTrack.
 * @param {*} track
 * @param {object} options
 */function validateLocalTrack$1(e,t){if(!(e instanceof t.LocalAudioTrack||e instanceof t.LocalDataTrack||e instanceof t.LocalVideoTrack||e instanceof t.MediaStreamTrack))throw Hu.INVALID_TYPE("track","LocalAudioTrack, LocalVideoTrack, LocalDataTrack, or MediaStreamTrack")}
/**
 * Validate an object. An object is valid if it is undefined or a non-null, non-array
 * object whose properties satisfy the specified data-type or value-range requirements.
 * @param {object} object - the object to be validated
 * @param {string} name - the object name to be used to build the error message, if invalid
 * @param {Array<object>} [propChecks] - optional data-type or value-range requirements
 *   for the object's properties
 * @returns {?Error} - null if object is valid, Error if not
 */function validateObject(e,t,r){void 0===r&&(r=[]);return"undefined"===typeof e?null:null!==e&&Uu(e)?r.reduce((function(r,n){var i=n.prop,a=n.type,o=n.values;if(r||!(i in e))return r;var c=e[i];return a&&typeof c!==a||"number"===a&&isNaN(c)?Hu.INVALID_TYPE(t+"."+i,a):Array.isArray(o)&&!o.includes(c)?Hu.INVALID_VALUE(t+"."+i,o):r}),null):Hu.INVALID_TYPE(t,"object")}
/**
 * Validates the renderDimensions field to be "auto" or {@link VideoRenderDimensions} object.
 * @param {string|VideoRenderDimensions} renderDimensions
 * @returns {?Error} - null if valid, Error if not.
 */function validateRenderDimensions(e){var t="options.bandwidthProfile.video.renderDimensions";var r=validateObject(e,t);return e?r||Object.values(zu).reduce((function(r,n){return r||validateObject(e[n],t+"."+n,[{prop:"height",type:"number"},{prop:"width",type:"number"}])}),null):r}Bu.validateBandwidthProfile=validateBandwidthProfile$1;Bu.validateLocalTrack=validateLocalTrack$1;Bu.validateObject=validateObject;var Ku={};var Ju=Ku&&Ku.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Yu=Dr;var Xu=Y,Zu=Xu.buildLogLevels,el=Xu.valueToJSON;var tl=v.DEFAULT_LOG_LEVEL;var rl=R;var nl=0;var il=function(e){Ju(TrackPublication,e);
/**
   * Construct a {@link TrackPublication}.
   * @param {string} trackName - the published {@link Track}'s name
   * @param {Track.SID} trackSid - SID assigned to the {@link Track}
   * @param {TrackPublicationOptions} options - {@link TrackPublication} options
   */function TrackPublication(t,r,n){var i=e.call(this)||this;n=Object.assign({logLevel:tl},n);var a=Zu(n.logLevel);Object.defineProperties(i,{_instanceId:{value:nl++},_log:{value:n.log?n.log.createLog("default",i):new rl("default",i,a,n.loggerName)},trackName:{enumerable:true,value:t},trackSid:{enumerable:true,value:r}});return i}TrackPublication.prototype.toJSON=function(){return el(this)};TrackPublication.prototype.toString=function(){return"[TrackPublication #"+this._instanceId+": "+this.trackSid+"]"};return TrackPublication}(Yu);
/**
 * A {@link LocalAudioTrackPublication} or a {@link RemoteAudioTrackPublication}.
 * @typedef {LocalAudioTrackPublication|RemoteAudioTrackPublication} AudioTrackPublication
 */
/**
 * A {@link LocalDataTrackPublication} or a {@link RemoteDataTrackPublication}.
 * @typedef {LocalDataTrackPublication|RemoteDataTrackPublication} DataTrackPublication
 */
/**
 * A {@link LocalVideoTrackPublication} or a {@link RemoteVideoTrackPublication}.
 * @typedef {LocalVideoTrackPublication|RemoteVideoTrackPublication} VideoTrackPublication
 */
/**
 * {@link TrackPublication} options
 * @typedef {object} TrackPublicationOptions
 * @property {LogLevel|LogLevels} logLevel - Log level for 'media' modules
 */Ku=il;var al=Ku;var ol={};var cl=ol&&ol.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var sl=ol&&ol.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};var ul=ol&&ol.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};var ll=al;var dl=v,pl=dl.typeErrors,fl=dl.trackPriority;var vl=function(e){cl(LocalTrackPublication,e);
/**
   * Construct a {@link LocalTrackPublication}.
   * @param {LocalTrackPublicationSignaling} signaling - The corresponding
   *   {@link LocalTrackPublicationSignaling}
   * @param {LocalTrack} track - The {@link LocalTrack}
   * @param {function(LocalTrackPublication): void} unpublish - The callback
   *   that unpublishes the {@link LocalTrackPublication}
   * @param {TrackPublicationOptions} options - {@link LocalTrackPublication}
   *   options
   */function LocalTrackPublication(t,r,n,i){var a=e.call(this,r.name,t.sid,i)||this;Object.defineProperties(a,{_reemitSignalingEvent:{value:function(){var e=[];for(var t=0;t<arguments.length;t++)e[t]=arguments[t];return a.emit.apply(a,ul([e&&e.length?"warning":"warningsCleared"],sl(e)))}},_reemitTrackEvent:{value:function(){return a.emit(a.isTrackEnabled?"trackEnabled":"trackDisabled")}},_signaling:{value:t},_unpublish:{value:n},isTrackEnabled:{enumerable:true,get:function(){return"data"===this.track.kind||this.track.isEnabled}},kind:{enumerable:true,value:r.kind},priority:{enumerable:true,get:function(){return t.updatedPriority}},track:{enumerable:true,value:r}});["disabled","enabled"].forEach((function(e){return r.on(e,a._reemitTrackEvent)}));["warning","warningsCleared"].forEach((function(e){return t.on(e,a._reemitSignalingEvent)}));return a}LocalTrackPublication.prototype.toString=function(){return"[LocalTrackPublication #"+this._instanceId+": "+this.trackSid+"]"};
/**
   * Update the {@link Track.Priority} of the published {@link LocalTrack}.
   * @param {Track.Priority} priority - the new {@link Track.priority}
   * @returns {this}
   * @throws {RangeError}
   */LocalTrackPublication.prototype.setPriority=function(e){var t=Object.values(fl);if(!t.includes(e))throw pl.INVALID_VALUE("priority",t);this._signaling.setPriority(e);return this};
/**
   * Unpublish a {@link LocalTrackPublication}. This means that the media
   * from this {@link LocalTrackPublication} is no longer available to the
   * {@link Room}'s {@link RemoteParticipant}s.
   * @returns {this}
   */LocalTrackPublication.prototype.unpublish=function(){var e=this;["disabled","enabled"].forEach((function(t){return e.track.removeListener(t,e._reemitTrackEvent)}));["warning","warningsCleared"].forEach((function(t){return e._signaling.removeListener(t,e._reemitSignalingEvent)}));this._unpublish(this);return this};return LocalTrackPublication}(ll);
/**
 * The published {@link LocalTrack} encountered a warning.
 * This event is only raised if you enabled warnings using <code>notifyWarnings</code> in <code>ConnectOptions</code>.
 * @event LocalTrackPublication#warning
 * @param {string} name - The warning that was raised.
 */ol=vl;var hl=ol;var _l={};var ml=_l&&_l.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var gl=hl;var yl=function(e){ml(LocalAudioTrackPublication,e);
/**
   * Construct a {@link LocalAudioTrackPublication}.
   * @param {LocalTrackPublicationSignaling} signaling - The corresponding
   *   {@link LocalTrackPublicationSignaling}
   * @param {LocalAudioTrack} track - the {@link LocalAudioTrack}
   * @param {function(LocalTrackPublication): void} unpublish - The callback
   *    that unpublishes the {@link LocalTrackPublication}
   * @param {TrackPublicationOptions} options - {@link LocalTrackPublication} options
   */function LocalAudioTrackPublication(t,r,n,i){return e.call(this,t,r,n,i)||this}LocalAudioTrackPublication.prototype.toString=function(){return"[LocalAudioTrackPublication #"+this._instanceId+": "+this.trackSid+"]"};return LocalAudioTrackPublication}(gl);_l=yl;var bl=_l;var kl={};var Sl=kl&&kl.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Tl=hl;var wl=function(e){Sl(LocalDataTrackPublication,e);
/**
   * Construct a {@link LocalDataTrackPublication}.
   * @param {LocalTrackPublicationSignaling} signaling - The corresponding
   *   {@link LocalTrackPublicationSignaling}
   * @param {LocalDataTrack} track - the {@link LocalDataTrack}
   * @param {function(LocalTrackPublication): void} unpublish - The callback
   *    that unpublishes the {@link LocalTrackPublication}
   * @param {TrackPublicationOptions} options - {@link LocalTrackPublication} options
   */function LocalDataTrackPublication(t,r,n,i){return e.call(this,t,r,n,i)||this}LocalDataTrackPublication.prototype.toString=function(){return"[LocalDataTrackPublication #"+this._instanceId+": "+this.trackSid+"]"};return LocalDataTrackPublication}(Tl);kl=wl;var Cl=kl;var Pl={};var Ol=Pl&&Pl.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var El=hl;var Rl=function(e){Ol(LocalVideoTrackPublication,e);
/**
   * Construct a {@link LocalVideoTrackPublication}.
   * @param {LocalTrackPublicationSignaling} signaling - The corresponding
   *   {@link LocalTrackPublicationSignaling}
   * @param {LocalVideoTrack} track - the {@link LocalVideoTrack}
   * @param {function(LocalTrackPublication): void} unpublish - The callback
   *    that unpublishes the {@link LocalTrackPublication}
   * @param {TrackPublicationOptions} options - {@link LocalTrackPublication} options
   */function LocalVideoTrackPublication(t,r,n,i){return e.call(this,t,r,n,i)||this}LocalVideoTrackPublication.prototype.toString=function(){return"[LocalVideoTrackPublication #"+this._instanceId+": "+this.trackSid+"]"};return LocalVideoTrackPublication}(El);Pl=Rl;var Ll=Pl;var Ml={};var Il=Ml&&Ml.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var jl=Ml&&Ml.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};var Al=Ml&&Ml.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};var Dl=v,xl=Dl.typeErrors,Vl=Dl.trackPriority;var Nl=hr.isIOS;var Fl=yn;function mixinRemoteMediaTrack$2(e){return function(e){Il(RemoteMediaTrack,e);
/**
       * Construct a {@link RemoteMediaTrack}.
       * @param {Track.SID} sid
       * @param {MediaTrackReceiver} mediaTrackReceiver
       * @param {boolean} isEnabled
        @param {boolean} isSwitchedOff
       * @param {function(?Track.Priority): void} setPriority - Set or clear the subscribe
       *  {@link Track.Priority} of the {@link RemoteMediaTrack}
       * @param {function(ClientRenderHint): void} setRenderHint - Set render hints.
       * @param {{log: Log, name: ?string}} options
       */function RemoteMediaTrack(t,r,n,i,a,o,c){var s=this;c=Object.assign({workaroundWebKitBug212780:Nl()&&"object"===typeof document&&"function"===typeof document.addEventListener&&"string"===typeof document.visibilityState},c);s=e.call(this,r,c)||this;Object.defineProperties(s,{_isEnabled:{value:n,writable:true},_isSwitchedOff:{value:i,writable:true},_priority:{value:null,writable:true},_setPriority:{value:a},_setRenderHint:{value:function(e){s._log.debug("updating render hint:",e);o(e)}},isEnabled:{enumerable:true,get:function(){return this._isEnabled}},isSwitchedOff:{enumerable:true,get:function(){return this._isSwitchedOff}},priority:{enumerable:true,get:function(){return this._priority}},sid:{enumerable:true,value:t},_workaroundWebKitBug212780:{value:c.workaroundWebKitBug212780},_workaroundWebKitBug212780Cleanup:{value:null,writable:true}});return s}
/**
       * Update the subscribe {@link Track.Priority} of the {@link RemoteMediaTrack}.
       * @param {?Track.Priority} priority - the new subscribe {@link Track.Priority};
       *   If <code>null</code>, then the subscribe {@link Track.Priority} is cleared, which
       *   means the {@link Track.Priority} set by the publisher is now the effective priority.
       * @returns {this}
       * @throws {RangeError}
       */RemoteMediaTrack.prototype.setPriority=function(e){var t=Al([null],jl(Object.values(Vl)));if(!t.includes(e))throw xl.INVALID_VALUE("priority",t);if(this._priority!==e){this._priority=e;this._setPriority(e)}return this};
/**
       * @private
       * @param {boolean} isEnabled
       */RemoteMediaTrack.prototype._setEnabled=function(e){if(this._isEnabled!==e){this._isEnabled=e;this.emit(this._isEnabled?"enabled":"disabled",this)}};
/**
       * @private
       * @param {boolean} isSwitchedOff
       */RemoteMediaTrack.prototype._setSwitchedOff=function(e){if(this._isSwitchedOff!==e){this._isSwitchedOff=e;this.emit(e?"switchedOff":"switchedOn",this)}};RemoteMediaTrack.prototype.attach=function(t){var r=e.prototype.attach.call(this,t);if(true!==this.mediaStreamTrack.enabled){this.mediaStreamTrack.enabled=true;this.processedTrack&&(this.processedTrack.enabled=true);this.processor&&this._captureFrames()}this._workaroundWebKitBug212780&&(this._workaroundWebKitBug212780Cleanup=this._workaroundWebKitBug212780Cleanup||playIfPausedWhileInBackground(this));return r};RemoteMediaTrack.prototype.detach=function(t){var r=e.prototype.detach.call(this,t);if(0===this._attachments.size){this.mediaStreamTrack.enabled=false;this.processedTrack&&(this.processedTrack.enabled=false);if(this._workaroundWebKitBug212780Cleanup){this._workaroundWebKitBug212780Cleanup();this._workaroundWebKitBug212780Cleanup=null}}return r};return RemoteMediaTrack}(e)}function playIfPausedWhileInBackground(e){var t=e._log,r=e.kind;function onVisibilityChanged(n){n&&e._attachments.forEach((function(n){var i=e._elShims.get(n);var a=n.paused&&i&&!i.pausedIntentionally();if(a){t.info("Playing inadvertently paused <"+r+"> element");t.debug("Element:",n);t.debug("RemoteMediaTrack:",e);n.play().then((function(){t.info("Successfully played inadvertently paused <"+r+"> element");t.debug("Element:",n);t.debug("RemoteMediaTrack:",e)})).catch((function(i){t.warn("Error while playing inadvertently paused <"+r+"> element:",{err:i,el:n,remoteMediaTrack:e})}))}}))}Fl.onVisibilityChange(2,onVisibilityChanged);return function(){Fl.offVisibilityChange(2,onVisibilityChanged)}}
/**
 * A {@link RemoteMediaTrack} was disabled.
 * @param {RemoteMediaTrack} track - The {@link RemoteMediaTrack} that was
 *   disabled
 * @event RemoteMediaTrack#disabled
 */
/**
 * A {@link RemoteMediaTrack} was enabled.
 * @param {RemoteMediaTrack} track - The {@link RemoteMediaTrack} that was
 *   enabled
 * @event RemoteMediaTrack#enabled
 */
/**
 * A {@link RemoteMediaTrack} was switched off.
 * @param {RemoteMediaTrack} track - The {@link RemoteMediaTrack} that was
 *   switched off
 * @event RemoteMediaTrack#switchedOff
 */
/**
 * A {@link RemoteMediaTrack} was switched on.
 * @param {RemoteMediaTrack} track - The {@link RemoteMediaTrack} that was
 *   switched on
 * @event RemoteMediaTrack#switchedOn
 */
/**
 * A {@link ClientRenderHint} object specifies track dimensions and /enabled disable state.
 * This state will be used by the server(SFU) to determine bandwidth allocation for the track,
 * and turn it on or off as needed.
 * @typedef {object} ClientRenderHint
 * @property {boolean} [enabled] - track is enabled or disabled. defaults to disabled.
 * @property {VideoTrack.Dimensions} [renderDimensions] - Optional parameter to specify the desired
 *   render dimensions of {@link RemoteVideoTrack}s. This property must be specified if enabled=true
 */Ml=mixinRemoteMediaTrack$2;var Bl=Ml;var Ul={};var $l=Ul&&Ul.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Hl=un;var Wl=Bl;var Ql=Wl(Hl);var ql=function(e){$l(RemoteAudioTrack,e);
/**
   * Construct a {@link RemoteAudioTrack}.
   * @param {Track.SID} sid - The {@link RemoteAudioTrack}'s SID
   * @param {MediaTrackReceiver} mediaTrackReceiver - An audio MediaStreamTrack container
   * @param {boolean} isEnabled - Whether the {@link RemoteAudioTrack} is enabled
   * @param {boolean} isSwitchedOff - Whether the {@link RemoteAudioTrack} is switched off
   * @param {function(?Track.Priority): void} setPriority - Set or clear the subscribe
   *  {@link Track.Priority} of the {@link RemoteAudioTrack}
   * @param {function(ClientRenderHint): void} setRenderHint - Set render hints.
   * @param {{log: Log}} options - The {@link RemoteTrack} options
   */function RemoteAudioTrack(t,r,n,i,a,o,c){return e.call(this,t,r,n,i,a,o,c)||this}RemoteAudioTrack.prototype.toString=function(){return"[RemoteAudioTrack #"+this._instanceId+": "+this.sid+"]"};RemoteAudioTrack.prototype._start=function(){e.prototype._start.call(this);if(this._dummyEl){this._dummyEl.srcObject=null;this._dummyEl=null}};
/**
   * Update the subscribe {@link Track.Priority} of the {@link RemoteAudioTrack}.
   * @param {?Track.Priority} priority - the new subscribe {@link Track.Priority};
   *   Currently setPriority has no effect on audio tracks.
   * @returns {this}
   * @throws {RangeError}
   */RemoteAudioTrack.prototype.setPriority=function(t){return e.prototype.setPriority.call(this,t)};return RemoteAudioTrack}(Ql);
/**
 * The {@link RemoteAudioTrack} was disabled, i.e. "muted".
 * @param {RemoteAudioTrack} track - The {@link RemoteAudioTrack} that was
 *   disabled
 * @event RemoteAudioTrack#disabled
 */
/**
 * The {@link RemoteAudioTrack} was enabled, i.e. "unmuted".
 * @param {RemoteAudioTrack} track - The {@link RemoteAudioTrack} that was
 *   enabled
 * @event RemoteAudioTrack#enabled
 */
/**
 * The {@link RemoteAudioTrack} started. This means there is enough audio data
 * to begin playback.
 * @param {RemoteAudioTrack} track - The {@link RemoteAudioTrack} that started
 * @event RemoteAudioTrack#started
 */
/**
 * A {@link RemoteAudioTrack} was switched off.
 * @param {RemoteAudioTrack} track - The {@link RemoteAudioTrack} that was
 *   switched off
 * @event RemoteAudioTrack#switchedOff
 */
/**
 * A {@link RemoteAudioTrack} was switched on.
 * @param {RemoteAudioTrack} track - The {@link RemoteAudioTrack} that was
 *   switched on
 * @event RemoteAudioTrack#switchedOn
 */Ul=ql;var zl=Ul;var Gl={};var Kl=Gl&&Gl.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Jl=al;var Yl=function(e){Kl(RemoteTrackPublication,e);
/**
   * Construct a {@link RemoteTrackPublication}.
   * @param {RemoteTrackPublicationSignaling} signaling - {@link RemoteTrackPublication} signaling
   * @param {RemoteTrackPublicationOptions} options - {@link RemoteTrackPublication}
   *   options
   */function RemoteTrackPublication(t,r){var n=e.call(this,t.name,t.sid,r)||this;Object.defineProperties(n,{_signaling:{value:t},_track:{value:null,writable:true},isSubscribed:{enumerable:true,get:function(){return!!this._track}},isTrackEnabled:{enumerable:true,get:function(){return t.isEnabled}},kind:{enumerable:true,value:t.kind},publishPriority:{enumerable:true,get:function(){return t.priority}},track:{enumerable:true,get:function(){return this._track}}});var i=t.error,a=t.isEnabled,o=t.isSwitchedOff,c=t.priority;t.on("updated",(function(){if(i===t.error){if(a!==t.isEnabled){a=t.isEnabled;n.track&&n.track._setEnabled(t.isEnabled);n.emit(t.isEnabled?"trackEnabled":"trackDisabled")}if(o!==t.isSwitchedOff){n._log.debug(n.trackSid+": "+(o?"OFF":"ON")+" => "+(t.isSwitchedOff?"OFF":"ON"));o=t.isSwitchedOff;if(n.track){n.track._setSwitchedOff(t.isSwitchedOff);n.emit(o?"trackSwitchedOff":"trackSwitchedOn",n.track)}else o&&n._log.warn("Track was not subscribed when switched Off.")}if(c!==t.priority){c=t.priority;n.emit("publishPriorityChanged",c)}}else{i=t.error;n.emit("subscriptionFailed",t.error)}}));return n}RemoteTrackPublication.prototype.toString=function(){return"[RemoteTrackPublication #"+this._instanceId+": "+this.trackSid+"]"};
/**
   * @private
   * @param {RemoteTrack} track
   */RemoteTrackPublication.prototype._subscribed=function(e){if(!this._track&&e){this._track=e;this.emit("subscribed",e)}};RemoteTrackPublication.prototype._unsubscribe=function(){if(this._track){var e=this._track;this._track=null;this.emit("unsubscribed",e)}};return RemoteTrackPublication}(Jl);
/**
 * The {@link RemoteTrack}'s publish {@link Track.Priority} was changed by the
 * {@link RemoteParticipant}.
 * @param {Track.Priority} priority - the {@link RemoteTrack}'s new publish
 *   {@link Track.Priority}; RemoteTrackPublication#publishPriority is also
 *   updated accordingly
 * @event RemoteTrackPublication#publishPriorityChanged
 */
/**
 * Your {@link LocalParticipant} subscribed to the {@link RemoteTrack}.
 * @param {RemoteTrack} track - the {@link RemoteTrack} that was subscribed to
 * @event RemoteTrackPublication#subscribed
 */
/**
 * Your {@link LocalParticipant} failed to subscribe to the {@link RemoteTrack}.
 * @param {TwilioError} error - the reason the {@link RemoteTrack} could not be
 *   subscribed to
 * @event RemoteTrackPublication#subscriptionFailed
 */
/**
 * The {@link RemoteTrack} was switched off.
 * @param {RemoteTrack} track - the {@link RemoteTrack} that was switched off
 * @event RemoteTrackPublication#trackSwitchedOff
 */
/**
 * The {@link RemoteTrack} was switched on.
 * @param {RemoteTrack} track - the {@link RemoteTrack} that was switched on
 * @event RemoteTrackPublication#trackSwitchedOn
 */
/**
 * Your {@link LocalParticipant} unsubscribed from the {@link RemoteTrack}.
 * @param {RemoteTrack} track - the {@link RemoteTrack} that was unsubscribed from
 * @event RemoteTrackPublication#unsubscribed
 */
/**
 * {@link RemoteTrackPublication} options
 * @typedef {object} RemoteTrackPublicationOptions
 * @property {LogLevel|LogLevels} logLevel - Log level for 'media' modules
 */Gl=Yl;var Xl=Gl;var Zl={};var ed=Zl&&Zl.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var td=Xl;var rd=function(e){ed(RemoteAudioTrackPublication,e);
/**
   * Construct a {@link RemoteAudioTrackPublication}.
   * @param {RemoteTrackPublicationSignaling} signaling - {@link RemoteTrackPublication} signaling
   * @param {RemoteTrackPublicationOptions} options - {@link RemoteTrackPublication}
   *   options
   */function RemoteAudioTrackPublication(t,r){return e.call(this,t,r)||this}RemoteAudioTrackPublication.prototype.toString=function(){return"[RemoteAudioTrackPublication #"+this._instanceId+": "+this.trackSid+"]"};return RemoteAudioTrackPublication}(td);
/**
 * Your {@link LocalParticipant} subscribed to the {@link RemoteAudioTrack}.
 * @param {RemoteAudioTrack} track - the {@link RemoteAudioTrack} that was subscribed to
 * @event RemoteAudioTrackPublication#subscribed
 */
/**
 * Your {@link LocalParticipant} failed to subscribe to the {@link RemoteAudioTrack}.
 * @param {TwilioError} error - the reason the {@link RemoteAudioTrack} could not be
 *   subscribed to
 * @event RemoteAudioTrackPublication#subscriptionFailed
 */
/**
 * Your {@link LocalParticipant} unsubscribed from the {@link RemoteAudioTrack}.
 * @param {RemoteAudioTrack} track - the {@link RemoteAudioTrack} that was unsubscribed from
 * @event RemoteAudioTrackPublication#unsubscribed
 */Zl=rd;var nd=Zl;var id={};var ad=id&&id.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var od=id&&id.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};var cd=id&&id.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};var sd=qr;var ud=v,ld=ud.typeErrors,dd=ud.trackPriority;var pd=function(e){ad(RemoteDataTrack,e);
/**
   * Construct a {@link RemoteDataTrack} from a {@link DataTrackReceiver}.
   * @param {Track.SID} sid
   * @param {DataTrackReceiver} dataTrackReceiver
   * @param {{log: Log, name: ?string}} options
   */function RemoteDataTrack(t,r,n){var i=e.call(this,r.id,"data",n)||this;Object.defineProperties(i,{_isSwitchedOff:{value:false,writable:true},_priority:{value:null,writable:true},isEnabled:{enumerable:true,value:true},isSwitchedOff:{enumerable:true,get:function(){return this._isSwitchedOff}},maxPacketLifeTime:{enumerable:true,value:r.maxPacketLifeTime},maxRetransmits:{enumerable:true,value:r.maxRetransmits},ordered:{enumerable:true,value:r.ordered},priority:{enumerable:true,get:function(){return this._priority}},reliable:{enumerable:true,value:null===r.maxPacketLifeTime&&null===r.maxRetransmits},sid:{enumerable:true,value:t}});r.on("message",(function(e){i.emit("message",e,i)}));return i}
/**
   * Update the subscriber {@link Track.Priority} of the {@link RemoteDataTrack}.
   * @param {?Track.Priority} priority - the new {@link Track.priority};
   *   Currently setPriority has no effect on data tracks.
   * @returns {this}
   * @throws {RangeError}
   */RemoteDataTrack.prototype.setPriority=function(e){var t=cd([null],od(Object.values(dd)));if(!t.includes(e))throw ld.INVALID_VALUE("priority",t);this._priority=e;return this};RemoteDataTrack.prototype._setEnabled=function(){};
/**
   * @private
   * @param {boolean} isSwitchedOff
   */RemoteDataTrack.prototype._setSwitchedOff=function(e){if(this._isSwitchedOff!==e){this._isSwitchedOff=e;this.emit(e?"switchedOff":"switchedOn",this)}};return RemoteDataTrack}(sd);
/**
 * A message was received over the {@link RemoteDataTrack}.
 * @event RemoteDataTrack#message
 * @param {string|ArrayBuffer} data
 * @param {RemoteDataTrack} track - The {@link RemoteDataTrack} that received
 *   the message
 */
/**
 * A {@link RemoteDataTrack} was switched off.
 * @param {RemoteDataTrack} track - The {@link RemoteDataTrack} that was
 *   switched off
 * @event RemoteDataTrack#switchedOff
 */
/**
 * A {@link RemoteDataTrack} was switched on.
 * @param {RemoteDataTrack} track - The {@link RemoteDataTrack} that was
 *   switched on
 * @event RemoteDataTrack#switchedOn
 */id=pd;var fd=id;var vd={};var hd=vd&&vd.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var _d=Xl;var md=function(e){hd(RemoteDataTrackPublication,e);
/**
   * Construct a {@link RemoteDataTrackPublication}.
   * @param {RemoteTrackPublicationSignaling} signaling - {@link RemoteTrackPublication} signaling
   * @param {RemoteTrackPublicationOptions} options - {@link RemoteTrackPublication}
   *   options
   */function RemoteDataTrackPublication(t,r){return e.call(this,t,r)||this}RemoteDataTrackPublication.prototype.toString=function(){return"[RemoteDataTrackPublication #"+this._instanceId+": "+this.trackSid+"]"};return RemoteDataTrackPublication}(_d);
/**
 * Your {@link LocalParticipant} subscribed to the {@link RemoteDataTrack}.
 * @param {RemoteDataTrack} track - the {@link RemoteDataTrack} that was subscribed to
 * @event RemoteDataTrackPublication#subscribed
 */
/**
 * Your {@link LocalParticipant} failed to subscribe to the {@link RemoteDataTrack}.
 * @param {TwilioError} error - the reason the {@link RemoteDataTrack} could not be
 *   subscribed to
 * @event RemoteDataTrackPublication#subscriptionFailed
 */
/**
 * Your {@link LocalParticipant} unsubscribed from the {@link RemoteDataTrack}.
 * @param {RemoteDataTrack} track - the {@link RemoteDataTrack} that was unsubscribed from
 * @event RemoteDataTrackPublication#unsubscribed
 */vd=md;var gd=vd;var yd={};var bd=yd&&yd.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var kd=function(){function NullObserver(e){Object.defineProperties(this,{_callback:{value:e}})}NullObserver.prototype.observe=function(){};NullObserver.prototype.unobserve=function(){};NullObserver.prototype.makeVisible=function(e){var t=this._makeFakeEntry(e,true);this._callback([t])};NullObserver.prototype.makeInvisible=function(e){var t=this._makeFakeEntry(e,false);this._callback([t])};NullObserver.prototype._makeFakeEntry=function(e,t){return{target:e,isIntersecting:t}};return NullObserver}();var Sd=function(e){bd(NullIntersectionObserver,e);function NullIntersectionObserver(){return null!==e&&e.apply(this,arguments)||this}return NullIntersectionObserver}(kd);var Td=function(e){bd(NullResizeObserver,e);function NullResizeObserver(){return null!==e&&e.apply(this,arguments)||this}NullResizeObserver.prototype.resize=function(e){var t=this._makeFakeEntry(e,true);this._callback([t])};return NullResizeObserver}(kd);yd={NullIntersectionObserver:Sd,NullResizeObserver:Td,NullObserver:kd};var wd=yd;var Cd={};var Pd=Cd&&Cd.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Od=Cd&&Cd.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};var Ed=Bl;var Rd=Vi;var Ld=yn;var Md=wd.NullObserver;var Id=lo;var jd=Ed(Rd);var Ad=50;var Dd=function(e){Pd(RemoteVideoTrack,e);
/**
   * Construct a {@link RemoteVideoTrack}.
   * @param {Track.SID} sid - The {@link RemoteVideoTrack}'s SID
   * @param {MediaTrackReceiver} mediaTrackReceiver - A video MediaStreamTrack container
   * @param {boolean} isEnabled - whether the {@link RemoteVideoTrack} is enabled
   * @param {boolean} isSwitchedOff - Whether the {@link RemoteVideoTrack} is switched off
   * @param {function(?Track.Priority): void} setPriority - Set or clear the subscribe
   *  {@link Track.Priority} of the {@link RemoteVideoTrack}
   * @param {function(ClientRenderHint): void} setRenderHint - Set render hints.
   * @param {{log: Log}} options - The {@link RemoteTrack} options
   */function RemoteVideoTrack(t,r,n,i,a,o,c){var s=this;c=Object.assign({clientTrackSwitchOffControl:"auto",contentPreferencesMode:"auto",enableDocumentVisibilityTurnOff:true},c);c=Object.assign({IntersectionObserver:"undefined"===typeof IntersectionObserver||"auto"!==c.clientTrackSwitchOffControl?Md:IntersectionObserver,ResizeObserver:"undefined"===typeof ResizeObserver||"auto"!==c.contentPreferencesMode?Md:ResizeObserver},c);s=e.call(this,t,r,n,i,a,o,c)||this;Object.defineProperties(s,{_enableDocumentVisibilityTurnOff:{value:true===c.enableDocumentVisibilityTurnOff&&"auto"===c.clientTrackSwitchOffControl},_documentVisibilityTurnOffCleanup:{value:null,writable:true},_clientTrackSwitchOffControl:{value:c.clientTrackSwitchOffControl},_contentPreferencesMode:{value:c.contentPreferencesMode},_invisibleElements:{value:new WeakSet},_elToPipCallbacks:{value:new WeakMap},_elToPipWindows:{value:new WeakMap},_turnOffTimer:{value:new Id((function(){s._setRenderHint({enabled:false})}),Ad,false)},_resizeObserver:{value:new c.ResizeObserver((function(e){var t=e.find((function(e){return!s._invisibleElements.has(e.target)}));t&&maybeUpdateDimensionHint(s)}))},_intersectionObserver:{value:new c.IntersectionObserver((function(e){var t=false;e.forEach((function(e){var r=!s._invisibleElements.has(e.target);if(r!==e.isIntersecting){if(e.isIntersecting){s._log.debug("intersectionObserver detected: Off => On");s._invisibleElements.delete(e.target)}else{s._log.debug("intersectionObserver detected: On => Off");s._invisibleElements.add(e.target)}t=true}}));if(t){maybeUpdateEnabledHint(s);maybeUpdateDimensionHint(s)}}),{threshold:.25})}});return s}RemoteVideoTrack.prototype._start=function(t){var r=e.prototype._start.call(this,t);maybeUpdateEnabledHint(this);return r};
/**
   * Request to switch on a {@link RemoteVideoTrack}, This method is applicable only for the group rooms and only when connected with
   * clientTrackSwitchOffControl in video bandwidth profile options set to 'manual'
   * @returns {this}
   */RemoteVideoTrack.prototype.switchOn=function(){if("manual"!==this._clientTrackSwitchOffControl)throw new Error('Invalid state. You can call switchOn only when bandwidthProfile.video.clientTrackSwitchOffControl is set to "manual"');this._setRenderHint({enabled:true});return this};
/**
   * Request to switch off a {@link RemoteVideoTrack}, This method is applicable only for the group rooms and only when connected with
   * clientTrackSwitchOffControl in video bandwidth profile options set to 'manual'
   * @returns {this}
   */RemoteVideoTrack.prototype.switchOff=function(){if("manual"!==this._clientTrackSwitchOffControl)throw new Error('Invalid state. You can call switchOff only when bandwidthProfile.video.clientTrackSwitchOffControl is set to "manual"');this._setRenderHint({enabled:false});return this};
/**
   * Set the {@link RemoteVideoTrack}'s content preferences. This method is applicable only for the group rooms and only when connected with
   * videoContentPreferencesMode in video bandwidth profile options set to 'manual'
   * @param {VideoContentPreferences} contentPreferences - requested preferences.
   * @returns {this}
   */RemoteVideoTrack.prototype.setContentPreferences=function(e){if("manual"!==this._contentPreferencesMode)throw new Error('Invalid state. You can call switchOn only when bandwidthProfile.video.contentPreferencesMode is set to "manual"');e.renderDimensions&&this._setRenderHint({renderDimensions:e.renderDimensions});return this};RemoteVideoTrack.prototype._unObservePip=function(e){var t=this._elToPipCallbacks.get(e);if(t){e.removeEventListener("enterpictureinpicture",t.onEnterPip);e.removeEventListener("leavepictureinpicture",t.onLeavePip);this._elToPipCallbacks.delete(e)}};RemoteVideoTrack.prototype._observePip=function(e){var t=this;var r=this._elToPipCallbacks.get(e);if(!r){var onEnterPip=function(r){return t._onEnterPip(r,e)};var onLeavePip=function(r){return t._onLeavePip(r,e)};var onResizePip=function(r){return t._onResizePip(r,e)};e.addEventListener("enterpictureinpicture",onEnterPip);e.addEventListener("leavepictureinpicture",onLeavePip);this._elToPipCallbacks.set(e,{onEnterPip:onEnterPip,onLeavePip:onLeavePip,onResizePip:onResizePip})}};RemoteVideoTrack.prototype._onEnterPip=function(e,t){this._log.debug("onEnterPip");var r=e.pictureInPictureWindow;this._elToPipWindows.set(t,r);var n=this._elToPipCallbacks.get(t).onResizePip;r.addEventListener("resize",n);maybeUpdateEnabledHint(this)};RemoteVideoTrack.prototype._onLeavePip=function(e,t){this._log.debug("onLeavePip");this._elToPipWindows.delete(t);var r=this._elToPipCallbacks.get(t).onResizePip;var n=e.pictureInPictureWindow;n.removeEventListener("resize",r);maybeUpdateEnabledHint(this)};RemoteVideoTrack.prototype._onResizePip=function(){maybeUpdateDimensionHint(this)};RemoteVideoTrack.prototype.attach=function(t){var r=e.prototype.attach.call(this,t);"auto"===this._clientTrackSwitchOffControl&&this._invisibleElements.add(r);this._intersectionObserver.observe(r);this._resizeObserver.observe(r);this._enableDocumentVisibilityTurnOff&&(this._documentVisibilityTurnOffCleanup=this._documentVisibilityTurnOffCleanup||setupDocumentVisibilityTurnOff(this));this._observePip(r);return r};RemoteVideoTrack.prototype.detach=function(t){var r=this;var n=e.prototype.detach.call(this,t);var i=Array.isArray(n)?n:[n];i.forEach((function(e){r._intersectionObserver.unobserve(e);r._resizeObserver.unobserve(e);r._invisibleElements.delete(e);r._unObservePip(e)}));if(0===this._attachments.size&&this._documentVisibilityTurnOffCleanup){this._documentVisibilityTurnOffCleanup();this._documentVisibilityTurnOffCleanup=null}maybeUpdateEnabledHint(this);maybeUpdateDimensionHint(this);return n};
/**
   * Add a {@link VideoProcessor} to allow for custom processing of video frames belonging to a VideoTrack.
   * When a Participant un-publishes and re-publishes a VideoTrack, a new RemoteVideoTrack is created and
   * any VideoProcessors attached to the previous RemoteVideoTrack would have to be re-added again.
   * @param {VideoProcessor} processor - The {@link VideoProcessor} to use.
   * @param {AddProcessorOptions} [options] - {@link AddProcessorOptions} to provide.
   * @returns {this}
   * @example
   * class GrayScaleProcessor {
   *   constructor(percentage) {
   *     this.percentage = percentage;
   *   }
   *   processFrame(inputFrameBuffer, outputFrameBuffer) {
   *     const context = outputFrameBuffer.getContext('2d');
   *     context.filter = `grayscale(${this.percentage}%)`;
   *     context.drawImage(inputFrameBuffer, 0, 0, inputFrameBuffer.width, inputFrameBuffer.height);
   *   }
   * }
   *
   * const grayscaleProcessor = new GrayScaleProcessor(100);
   *
   * Array.from(room.participants.values()).forEach(participant => {
   *   const remoteVideoTrack = Array.from(participant.videoTracks.values())[0].track;
   *   remoteVideoTrack.addProcessor(grayscaleProcessor);
   * });
   */RemoteVideoTrack.prototype.addProcessor=function(){return e.prototype.addProcessor.apply(this,arguments)};
/**
   * Remove the previously added {@link VideoProcessor} using `addProcessor` API.
   * @param {VideoProcessor} processor - The {@link VideoProcessor} to remove.
   * @returns {this}
   * @example
   * class GrayScaleProcessor {
   *   constructor(percentage) {
   *     this.percentage = percentage;
   *   }
   *   processFrame(inputFrameBuffer, outputFrameBuffer) {
   *     const context = outputFrameBuffer.getContext('2d');
   *     context.filter = `grayscale(${this.percentage}%)`;
   *     context.drawImage(inputFrameBuffer, 0, 0, inputFrameBuffer.width, inputFrameBuffer.height);
   *   }
   * }
   *
   * const grayscaleProcessor = new GrayScaleProcessor(100);
   *
   * Array.from(room.participants.values()).forEach(participant => {
   *   const remoteVideoTrack = Array.from(participant.videoTracks.values())[0].track;
   *   remoteVideoTrack.addProcessor(grayscaleProcessor);
   * });
   *
   * document.getElementById('remove-button').onclick = () => {
   *   Array.from(room.participants.values()).forEach(participant => {
   *     const remoteVideoTrack = Array.from(participant.videoTracks.values())[0].track;
   *     remoteVideoTrack.removeProcessor(grayscaleProcessor);
   *   });
   * }
   */RemoteVideoTrack.prototype.removeProcessor=function(){return e.prototype.removeProcessor.apply(this,arguments)};RemoteVideoTrack.prototype.toString=function(){return"[RemoteVideoTrack #"+this._instanceId+": "+this.sid+"]"};
/**
   * Update the subscribe {@link Track.Priority} of the {@link RemoteVideoTrack}.
   * @param {?Track.Priority} priority - the new subscribe {@link Track.Priority};
   *   If <code>null</code>, then the subscribe {@link Track.Priority} is cleared, which
   *   means the {@link Track.Priority} set by the publisher is now the effective priority.
   * @returns {this}
   * @throws {RangeError}
   */RemoteVideoTrack.prototype.setPriority=function(t){return e.prototype.setPriority.call(this,t)};return RemoteVideoTrack}(jd);function setupDocumentVisibilityTurnOff(e){function onVisibilityChanged(){maybeUpdateEnabledHint(e)}Ld.onVisibilityChange(1,onVisibilityChanged);return function(){Ld.offVisibilityChange(1,onVisibilityChanged)}}function maybeUpdateEnabledHint(e){if("auto"===e._clientTrackSwitchOffControl){var t=e._getAllAttachedElements().filter((function(t){return!e._invisibleElements.has(t)}));var r=e._getAllAttachedElements().filter((function(t){return e._elToPipWindows.has(t)}));var n=r.length>0||"visible"===document.visibilityState&&t.length>0;if(true===n){e._turnOffTimer.clear();e._setRenderHint({enabled:true})}else e._turnOffTimer.isSet||e._turnOffTimer.start()}}function maybeUpdateDimensionHint(e){if("auto"===e._contentPreferencesMode){var t=e._getAllAttachedElements().filter((function(t){return!e._invisibleElements.has(t)}));var r=e._getAllAttachedElements().map((function(t){var r=e._elToPipWindows.get(t);return r?{clientHeight:r.height,clientWidth:r.width}:{clientHeight:0,clientWidth:0}}));var n=t.concat(r);if(n.length>0){var i=Od(n.sort((function(e,t){return t.clientHeight+t.clientWidth-e.clientHeight-e.clientWidth-1})),1),a=i[0],o=a.clientHeight,c=a.clientWidth;var s={height:o,width:c};e._setRenderHint({renderDimensions:s})}}}
/**
 * @typedef {object} VideoContentPreferences
 * @property {VideoTrack.Dimensions} [renderDimensions] - Render Dimensions to request for the {@link RemoteVideoTrack}.
 */
/**
 * The {@link RemoteVideoTrack}'s dimensions changed.
 * @param {RemoteVideoTrack} track - The {@link RemoteVideoTrack} whose
 *   dimensions changed
 * @event RemoteVideoTrack#dimensionsChanged
 */
/**
 * The {@link RemoteVideoTrack} was disabled, i.e. "paused".
 * @param {RemoteVideoTrack} track - The {@link RemoteVideoTrack} that was
 *   disabled
 * @event RemoteVideoTrack#disabled
 */
/**
 * The {@link RemoteVideoTrack} was enabled, i.e. "resumed".
 * @param {RemoteVideoTrack} track - The {@link RemoteVideoTrack} that was
 *   enabled
 * @event RemoteVideoTrack#enabled
 */
/**
 * The {@link RemoteVideoTrack} started. This means there is enough video data
 * to begin playback.
 * @param {RemoteVideoTrack} track - The {@link RemoteVideoTrack} that started
 * @event RemoteVideoTrack#started
 */
/**
 * A {@link RemoteVideoTrack} was switched off.
 * @param {RemoteVideoTrack} track - The {@link RemoteVideoTrack} that was
 *   switched off
 * @event RemoteVideoTrack#switchedOff
 */
/**
 * A {@link RemoteVideoTrack} was switched on.
 * @param {RemoteVideoTrack} track - The {@link RemoteVideoTrack} that was
 *   switched on
 * @event RemoteVideoTrack#switchedOn
 */Cd=Dd;var xd=Cd;var Vd={};var Nd=Vd&&Vd.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Fd=Xl;var Bd=function(e){Nd(RemoteVideoTrackPublication,e);
/**
   * Construct a {@link RemoteVideoTrackPublication}.
   * @param {RemoteTrackPublicationSignaling} signaling - {@link RemoteTrackPublication} signaling
   * @param {RemoteTrackPublicationOptions} options - {@link RemoteTrackPublication}
   *   options
   */function RemoteVideoTrackPublication(t,r){return e.call(this,t,r)||this}RemoteVideoTrackPublication.prototype.toString=function(){return"[RemoteVideoTrackPublication #"+this._instanceId+": "+this.trackSid+"]"};return RemoteVideoTrackPublication}(Fd);
/**
 * Your {@link LocalParticipant} subscribed to the {@link RemoteVideoTrack}.
 * @param {RemoteVideoTrack} track - the {@link RemoteVideoTrack} that was subscribed to
 * @event RemoteVideoTrackPublication#subscribed
 */
/**
 * Your {@link LocalParticipant} failed to subscribe to the {@link RemoteVideoTrack}.
 * @param {TwilioError} error - the reason the {@link RemoteVideoTrack} could not be
 *   subscribed to
 * @event RemoteVideoTrackPublication#subscriptionFailed
 */
/**
 * Your {@link LocalParticipant} unsubscribed from the {@link RemoteVideoTrack}.
 * @param {RemoteVideoTrack} track - the {@link RemoteVideoTrack} that was unsubscribed from
 * @event RemoteVideoTrackPublication#unsubscribed
 */Vd=Bd;var Ud=Vd;var $d={};var Hd=$d&&$d.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Wd=$d&&$d.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};var Qd=$d&&$d.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};var qd=Dr;var zd=zl;var Gd=nd;var Kd=fd;var Jd=gd;var Yd=xd;var Xd=Ud;var Zd=Y;var ep=0;
/**
 * {@link NetworkQualityLevel} is a value from 0–5, inclusive, representing the
 * quality of a network connection.
 * @typedef {number} NetworkQualityLevel
 */var tp=function(e){Hd(Participant,e);
/**
   * Construct a {@link Participant}.
   * @param {ParticipantSignaling} signaling
   * @param {object} [options]
   */function Participant(t,r){var n=e.call(this)||this;r=Object.assign({RemoteAudioTrack:zd,RemoteAudioTrackPublication:Gd,RemoteDataTrack:Kd,RemoteDataTrackPublication:Jd,RemoteVideoTrack:Yd,RemoteVideoTrackPublication:Xd,tracks:[]},r);var i=indexTracksById(r.tracks);var a=r.log.createLog("default",n);var o=new Map(i.audioTracks);var c=new Map(i.dataTracks);var s=new Map(i.tracks);var u=new Map(i.videoTracks);Object.defineProperties(n,{_RemoteAudioTrack:{value:r.RemoteAudioTrack},_RemoteAudioTrackPublication:{value:r.RemoteAudioTrackPublication},_RemoteDataTrack:{value:r.RemoteDataTrack},_RemoteDataTrackPublication:{value:r.RemoteDataTrackPublication},_RemoteVideoTrack:{value:r.RemoteVideoTrack},_RemoteVideoTrackPublication:{value:r.RemoteVideoTrackPublication},_audioTracks:{value:o},_dataTracks:{value:c},_instanceId:{value:++ep},_clientTrackSwitchOffControl:{value:r.clientTrackSwitchOffControl},_contentPreferencesMode:{value:r.contentPreferencesMode},_log:{value:a},_signaling:{value:t},_tracks:{value:s},_trackEventReemitters:{value:new Map},_trackPublicationEventReemitters:{value:new Map},_trackSignalingUpdatedEventCallbacks:{value:new Map},_videoTracks:{value:u},audioTracks:{enumerable:true,value:new Map},dataTracks:{enumerable:true,value:new Map},identity:{enumerable:true,get:function(){return t.identity}},networkQualityLevel:{enumerable:true,get:function(){return t.networkQualityLevel}},networkQualityStats:{enumerable:true,get:function(){return t.networkQualityStats}},sid:{enumerable:true,get:function(){return t.sid}},state:{enumerable:true,get:function(){return t.state}},tracks:{enumerable:true,value:new Map},videoTracks:{enumerable:true,value:new Map}});n._tracks.forEach(reemitTrackEvents.bind(null,n));t.on("networkQualityLevelChanged",(function(){return n.emit("networkQualityLevelChanged",n.networkQualityLevel,n.networkQualityStats&&(n.networkQualityStats.audio||n.networkQualityStats.video)?n.networkQualityStats:null)}));reemitSignalingStateChangedEvents(n,t);a.info("Created a new Participant"+(n.identity?": "+n.identity:""));return n}
/**
   * Get the {@link RemoteTrack} events to re-emit.
   * @private
   * @returns {Array<Array<string>>} events
   */Participant.prototype._getTrackEvents=function(){return[["dimensionsChanged","trackDimensionsChanged"],["message","trackMessage"],["started","trackStarted"]]};Participant.prototype._getTrackPublicationEvents=function(){return[]};Participant.prototype.toString=function(){return"[Participant #"+this._instanceId+": "+this.sid+"]"};
/**
   * @private
   * @param {RemoteTrack} track
   * @param {Track.ID} id
   * @returns {?RemoteTrack}
   */Participant.prototype._addTrack=function(e,t){var r=this._log;if(this._tracks.has(t))return null;this._tracks.set(t,e);var n={audio:this._audioTracks,video:this._videoTracks,data:this._dataTracks}[e.kind];n.set(t,e);reemitTrackEvents(this,e,t);r.info("Added a new "+Zd.trackClass(e)+":",t);r.debug(Zd.trackClass(e)+":",e);return e};
/**
   * @private
   * @param {RemoteTrackPublication} publication
   * @returns {?RemoteTrackPublication}
   */Participant.prototype._addTrackPublication=function(e){var t=this._log;if(this.tracks.has(e.trackSid))return null;this.tracks.set(e.trackSid,e);var r={audio:this.audioTracks,data:this.dataTracks,video:this.videoTracks}[e.kind];r.set(e.trackSid,e);reemitTrackPublicationEvents(this,e);t.info("Added a new "+Zd.trackPublicationClass(e)+":",e.trackSid);t.debug(Zd.trackPublicationClass(e)+":",e);return e};Participant.prototype._handleTrackSignalingEvents=function(){var e=this,t=e._log,r=e._clientTrackSwitchOffControl,n=e._contentPreferencesMode;var i=this;if("disconnected"!==this.state){var a=this._RemoteAudioTrack;var o=this._RemoteAudioTrackPublication;var c=this._RemoteVideoTrack;var s=this._RemoteVideoTrackPublication;var u=this._RemoteDataTrack;var l=this._RemoteDataTrackPublication;var d=this._signaling;d.on("trackAdded",trackSignalingAdded);d.on("trackRemoved",trackSignalingRemoved);d.tracks.forEach(trackSignalingAdded);d.on("stateChanged",(function stateChanged(e){if("disconnected"===e){t.debug("Removing event listeners");d.removeListener("stateChanged",stateChanged);d.removeListener("trackAdded",trackSignalingAdded);d.removeListener("trackRemoved",trackSignalingRemoved)}else if("connected"===e){t.info("reconnected");setTimeout((function(){return i.emit("reconnected")}),0)}}))}function trackSignalingAdded(e){var r={audio:o,data:l,video:s}[e.kind];var n=new r(e,{log:t});i._addTrackPublication(n);var a=e.isSubscribed;a&&trackSignalingSubscribed(e);i._trackSignalingUpdatedEventCallbacks.set(e.sid,(function(){if(a!==e.isSubscribed){a=e.isSubscribed;if(a){trackSignalingSubscribed(e);return}trackSignalingUnsubscribed(e)}}));e.on("updated",i._trackSignalingUpdatedEventCallbacks.get(e.sid))}function trackSignalingRemoved(e){e.isSubscribed&&e.setTrackTransceiver(null);var t=i._trackSignalingUpdatedEventCallbacks.get(e.sid);if(t){e.removeListener("updated",t);i._trackSignalingUpdatedEventCallbacks.delete(e.sid)}var r=i.tracks.get(e.sid);r&&i._removeTrackPublication(r)}function trackSignalingSubscribed(e){var o=e.isEnabled,s=e.name,l=e.kind,p=e.sid,f=e.trackTransceiver,v=e.isSwitchedOff;var h={audio:a,video:c,data:u}[l];var _=i.tracks.get(p);if(h&&l===f.kind){var m={log:t,name:s,clientTrackSwitchOffControl:r,contentPreferencesMode:n};var setPriority=function(e){return d.updateSubscriberTrackPriority(p,e)};var setRenderHint=function(t){e.isSubscribed&&d.updateTrackRenderHint(p,t)};var g="data"===l?new h(p,f,m):new h(p,f,o,v,setPriority,setRenderHint,m);i._addTrack(g,_,f.id)}}function trackSignalingUnsubscribed(e){var t=Wd(Array.from(i._tracks.entries()).find((function(t){var r=Wd(t,2),n=r[1];return n.sid===e.sid})),2),r=t[0],n=t[1];var a=i.tracks.get(e.sid);n&&i._removeTrack(n,a,r)}};
/**
   * @private
   * @param {RemoteTrack} track
   * @param {Track.ID} id
   * @returns {?RemoteTrack}
   */Participant.prototype._removeTrack=function(e,t){if(!this._tracks.has(t))return null;this._tracks.delete(t);var r={audio:this._audioTracks,video:this._videoTracks,data:this._dataTracks}[e.kind];r.delete(t);var n=this._trackEventReemitters.get(t)||new Map;n.forEach((function(t,r){e.removeListener(r,t)}));var i=this._log;i.info("Removed a "+Zd.trackClass(e)+":",t);i.debug(Zd.trackClass(e)+":",e);return e};
/**
   * @private
   * @param {RemoteTrackPublication} publication
   * @returns {?RemoteTrackPublication}
   */Participant.prototype._removeTrackPublication=function(e){e=this.tracks.get(e.trackSid);if(!e)return null;this.tracks.delete(e.trackSid);var t={audio:this.audioTracks,data:this.dataTracks,video:this.videoTracks}[e.kind];t.delete(e.trackSid);var r=this._trackPublicationEventReemitters.get(e.trackSid)||new Map;r.forEach((function(t,r){e.removeListener(r,t)}));var n=this._log;n.info("Removed a "+Zd.trackPublicationClass(e)+":",e.trackSid);n.debug(Zd.trackPublicationClass(e)+":",e);return e};Participant.prototype.toJSON=function(){return Zd.valueToJSON(this)};return Participant}(qd);
/**
 * A {@link Participant.SID} is a 34-character string starting with "PA"
 * that uniquely identifies a {@link Participant}.
 * @type string
 * @typedef Participant.SID
 */
/**
 * A {@link Participant.Identity} is a string that identifies a
 * {@link Participant}. You can think of it like a name.
 * @typedef {string} Participant.Identity
 */
/**
 * The {@link Participant} has disconnected.
 * @param {Participant} participant - The {@link Participant} that disconnected.
 * @event Participant#disconnected
 */
/**
 * The {@link Participant}'s {@link NetworkQualityLevel} changed.
 * @param {NetworkQualityLevel} networkQualityLevel - The new
 *   {@link NetworkQualityLevel}
 * @param {?NetworkQualityStats} networkQualityStats - The {@link NetworkQualityStats}
 *   based on which {@link NetworkQualityLevel} is calculated, if any
 * @event Participant#networkQualityLevelChanged
 */
/**
 * One of the {@link Participant}'s {@link VideoTrack}'s dimensions changed.
 * @param {VideoTrack} track - The {@link VideoTrack} whose dimensions changed
 * @event Participant#trackDimensionsChanged
 */
/**
 * One of the {@link Participant}'s {@link Track}s started.
 * @param {Track} track - The {@link Track} that started
 * @event Participant#trackStarted
 */
/**
 * Indexed {@link Track}s by {@link Track.ID}.
 * @typedef {object} IndexedTracks
 * @property {Array<{0: Track.ID, 1: AudioTrack}>} audioTracks - Indexed
 *   {@link AudioTrack}s
 * @property {Array<{0: Track.ID, 1: DataTrack}>} dataTracks - Indexed
 *   {@link DataTrack}s
 * @property {Array<{0: Track.ID, 1: Track}>} tracks - Indexed {@link Track}s
 * @property {Array<{0: Track.ID, 1: VideoTrack}>} videoTracks - Indexed
 *   {@link VideoTrack}s
 * @private
 */
/**
 * Index tracks by {@link Track.ID}.
 * @param {Array<Track>} tracks
 * @returns {IndexedTracks}
 * @private
 */function indexTracksById(e){var t=e.map((function(e){return[e.id,e]}));var r=t.filter((function(e){return"audio"===e[1].kind}));var n=t.filter((function(e){return"video"===e[1].kind}));var i=t.filter((function(e){return"data"===e[1].kind}));return{audioTracks:r,dataTracks:i,tracks:t,videoTracks:n}}
/**
 * Re-emit {@link ParticipantSignaling} 'stateChanged' events.
 * @param {Participant} participant
 * @param {ParticipantSignaling} signaling
 * @private
 */function reemitSignalingStateChangedEvents(e,t){var r=e._log;"disconnected"!==e.state&&t.on("stateChanged",(function stateChanged(n){r.debug("Transitioned to state:",n);e.emit(n,e);if("disconnected"===n){r.debug("Removing Track event reemitters");t.removeListener("stateChanged",stateChanged);e._tracks.forEach((function(t){var r=e._trackEventReemitters.get(t.id);t&&r&&r.forEach((function(e,r){t.removeListener(r,e)}))}));t.tracks.forEach((function(t){var r=e._tracks.get(t.id);var n=e._trackEventReemitters.get(t.id);r&&n&&n.forEach((function(e,t){r.removeListener(t,e)}))}));e._trackEventReemitters.clear();e.tracks.forEach((function(t){e._trackPublicationEventReemitters.get(t.trackSid).forEach((function(e,r){t.removeListener(r,e)}))}));e._trackPublicationEventReemitters.clear()}}))}
/**
 * Re-emit {@link Track} events.
 * @param {Participant} participant
 * @param {Track} track
 * @param {Track.ID} id
 * @private
 */function reemitTrackEvents(e,t,r){var n=new Map;if("disconnected"!==e.state){e._getTrackEvents().forEach((function(r){var i=r[0];var a=r[1];n.set(i,(function(){var t=[a].concat([].slice.call(arguments));return e.emit.apply(e,Qd([],Wd(t)))}));t.on(i,n.get(i))}));e._trackEventReemitters.set(r,n)}}
/**
 * Re-emit {@link TrackPublication} events.
 * @private
 * @param {Participant} participant
 * @param {TrackPublication} publication
 */function reemitTrackPublicationEvents(e,t){var r=new Map;if("disconnected"!==e.state){e._getTrackPublicationEvents().forEach((function(n){var i=Wd(n,2),a=i[0],o=i[1];r.set(a,(function(){var r=[];for(var n=0;n<arguments.length;n++)r[n]=arguments[n];e.emit.apply(e,Qd(Qd([o],Wd(r)),[t]))}));t.on(a,r.get(a))}));e._trackPublicationEventReemitters.set(t.trackSid,r)}}$d=tp;var rp=$d;var np={};var ip=np&&np.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var ap=lr.MediaStreamTrack;var op=Y,cp=op.asLocalTrack,sp=op.asLocalTrackPublication,up=op.trackClass;var lp=v,dp=lp.typeErrors,pp=lp.trackPriority;var fp=Bu.validateLocalTrack;var vp=ya,hp=vp.LocalAudioTrack,_p=vp.LocalDataTrack,mp=vp.LocalVideoTrack;var gp=bl;var yp=Cl;var bp=Ll;var kp=rp;var Sp=function(e){ip(LocalParticipant,e);
/**
   * Construct a {@link LocalParticipant}.
   * @param {ParticipantSignaling} signaling
   * @param {Array<LocalTrack>} localTracks
   * @param {Object} options
   */function LocalParticipant(t,r,n){var i=this;n=Object.assign({LocalAudioTrack:hp,LocalVideoTrack:mp,LocalDataTrack:_p,MediaStreamTrack:ap,LocalAudioTrackPublication:gp,LocalVideoTrackPublication:bp,LocalDataTrackPublication:yp,shouldStopLocalTracks:false,tracks:r},n);var a=n.shouldStopLocalTracks?new Set(r.filter((function(e){return"data"!==e.kind}))):new Set;i=e.call(this,t,n)||this;Object.defineProperties(i,{_eventObserver:{value:n.eventObserver},_LocalAudioTrack:{value:n.LocalAudioTrack},_LocalDataTrack:{value:n.LocalDataTrack},_LocalVideoTrack:{value:n.LocalVideoTrack},_MediaStreamTrack:{value:n.MediaStreamTrack},_LocalAudioTrackPublication:{value:n.LocalAudioTrackPublication},_LocalDataTrackPublication:{value:n.LocalDataTrackPublication},_LocalVideoTrackPublication:{value:n.LocalVideoTrackPublication},_tracksToStop:{value:a},signalingRegion:{enumerable:true,get:function(){return t.signalingRegion}}});i._handleTrackSignalingEvents();return i}
/**
   * @private
   * @param {LocalTrack} track
   * @param {Track.ID} id
   * @param {Track.Priority} priority
   * @returns {?LocalTrack}
   */LocalParticipant.prototype._addTrack=function(t,r,n){var i=e.prototype._addTrack.call(this,t,r);i&&"disconnected"!==this.state&&this._addLocalTrack(t,n);return i};
/**
   * @private
   * @param {LocalTrack} track
   * @param {Track.Priority} priority
   * @returns {void}
   */LocalParticipant.prototype._addLocalTrack=function(e,t){var r;var n=null===(r=e.noiseCancellation)||void 0===r?void 0:r.vendor;this._signaling.addTrack(e._trackSender,e.name,t,n);this._log.info("Added a new "+up(e,true)+":",e.id);this._log.debug(up(e,true)+":",e)};
/**
   * @private
   * @param {LocalTrack} track
   * @param {Track.ID} id
   * @returns {?LocalTrack}
   */LocalParticipant.prototype._removeTrack=function(t,r){var n=e.prototype._removeTrack.call(this,t,r);if(n&&"disconnected"!==this.state){this._signaling.removeTrack(t._trackSender);this._log.info("Removed a "+up(t,true)+":",t.id);this._log.debug(up(t,true)+":",t)}return n};
/**
   * Get the {@link LocalTrack} events to re-emit.
   * @private
   * @returns {Array<Array<string>>} events
   */LocalParticipant.prototype._getTrackEvents=function(){return e.prototype._getTrackEvents.call(this).concat([["disabled","trackDisabled"],["enabled","trackEnabled"],["stopped","trackStopped"]])};LocalParticipant.prototype.toString=function(){return"[LocalParticipant #"+this._instanceId+(this.sid?": "+this.sid:"")+"]"};LocalParticipant.prototype._handleTrackSignalingEvents=function(){var e=this;var t=this._log;if("disconnected"!==this.state){var localTrackDisabled=function(r){var n=e._signaling.getPublication(r._trackSender);if(n){n.disable();t.debug("Disabled the "+up(r,true)+":",r.id)}};var localTrackEnabled=function(r){var n=e._signaling.getPublication(r._trackSender);if(n){n.enable();t.debug("Enabled the "+up(r,true)+":",r.id)}};var localTrackStopped=function(t){var r=e._signaling.getPublication(t._trackSender);r&&r.stop();return r};var stateChanged=function(r){t.debug("Transitioned to state:",r);if("disconnected"===r){t.debug("Removing LocalTrack event listeners");e._signaling.removeListener("stateChanged",stateChanged);e.removeListener("trackDisabled",localTrackDisabled);e.removeListener("trackEnabled",localTrackEnabled);e.removeListener("trackStopped",localTrackStopped);e._tracks.forEach((function(e){var t=localTrackStopped(e);t&&e._trackSender.removeClone(t._trackTransceiver)}));t.info("LocalParticipant disconnected. Stopping "+e._tracksToStop.size+" automatically-acquired LocalTracks");e._tracksToStop.forEach((function(e){e.stop()}))}else if("connected"===r){t.info("reconnected");setTimeout((function(){return e.emit("reconnected")}),0)}};this.on("trackDisabled",localTrackDisabled);this.on("trackEnabled",localTrackEnabled);this.on("trackStopped",localTrackStopped);this._signaling.on("stateChanged",stateChanged);this._tracks.forEach((function(r){e._addLocalTrack(r,pp.PRIORITY_STANDARD);e._getOrCreateLocalTrackPublication(r).catch((function(e){t.warn("Failed to get or create LocalTrackPublication for "+r+":",e)}))}))}};
/**
   * @private
   * @param {LocalTrack} localTrack
   * @returns {Promise<LocalTrackPublication>}
   */LocalParticipant.prototype._getOrCreateLocalTrackPublication=function(e){var t=getTrackPublication(this.tracks,e);if(t)return Promise.resolve(t);var r=this._log;var n=this;var i=this._signaling.getPublication(e._trackSender);return i?new Promise((function(a,o){function updated(){var c=i.error;if(c){i.removeListener("updated",updated);r.warn("Failed to publish the "+up(e,true)+": "+c.message);n._removeTrack(e,e.id);setTimeout((function(){n.emit("trackPublicationFailed",c,e)}));o(c)}else if(n._tracks.has(e.id)){var s=i.sid;if(s){i.removeListener("updated",updated);var u={log:r,LocalAudioTrackPublication:n._LocalAudioTrackPublication,LocalDataTrackPublication:n._LocalDataTrackPublication,LocalVideoTrackPublication:n._LocalVideoTrackPublication};t=getTrackPublication(n.tracks,e);var warningHandler=function(e){return n.emit("trackWarning",e,t)};var warningsClearedHandler=function(){return n.emit("trackWarningsCleared",t)};var unpublish=function(e){t.removeListener("trackWarning",warningHandler);t.removeListener("trackWarningsCleared",warningsClearedHandler);n.unpublishTrack(e.track)};if(!t){t=sp(e,i,unpublish,u);n._addTrackPublication(t)}t.on("warning",warningHandler);t.on("warningsCleared",warningsClearedHandler);var l=n._signaling.state;if("connected"===l||"connecting"===l){e._processorEventObserver&&e._processorEventObserver.on("event",(function(e){n._eventObserver.emit("event",{name:e.name,payload:e.data,group:"video-processor",level:"info"})}));if(e.processedTrack){e._captureFrames();e._setSenderMediaStreamTrack(true)}}"connected"===l&&setTimeout((function(){n.emit("trackPublished",t)}));a(t)}}else{i.removeListener("updated",updated);o(new Error("The "+e+" was unpublished"))}}i.on("updated",updated)})):Promise.reject(new Error("Unexpected error: The "+e+" cannot be published"))};
/**
   * Publishes a {@link LocalTrack} to the {@link Room}.
   * @param {LocalTrack} localTrack - The {@link LocalTrack} to publish
   * @param {LocalTrackPublishOptions} [options] - The {@link LocalTrackPublishOptions}
   *   for publishing the {@link LocalTrack}
   * @returns {Promise<LocalTrackPublication>} - Resolves with the corresponding
   *   {@link LocalTrackPublication} if successful; In a Large Group Room (Maximum
   *   Participants greater than 50), rejects with a {@link ParticipantMaxTracksExceededError}
   *   if either the total number of published Tracks in the Room exceeds 16, or the {@link LocalTrack}
   *   is part of a set of {@link LocalTrack}s which along with the published Tracks exceeds 16.
   * @throws {TypeError}
   * @throws {RangeError}
   * @example
   * var Video = require('twilio-video');
   *
   * Video.connect(token, {
   *   name: 'my-cool-room',
   *   audio: true
   * }).then(function(room) {
   *   return Video.createLocalVideoTrack({
   *     name: 'camera'
   *   }).then(function(localVideoTrack) {
   *     return room.localParticipant.publishTrack(localVideoTrack, {
   *       priority: 'high'
   *     });
   *   });
   * }).then(function(publication) {
   *   console.log('The LocalTrack "' + publication.trackName
   *     + '" was successfully published with priority "'
   *     * publication.priority + '"');
   * });
  */
/**
     * Publishes a MediaStreamTrack to the {@link Room}.
     * @param {MediaStreamTrack} mediaStreamTrack - The MediaStreamTrack
     *   to publish; if a corresponding {@link LocalAudioTrack} or
     *   {@link LocalVideoTrack} has not yet been published, this method will
     *   construct one
     * @param {MediaStreamTrackPublishOptions} [options] - The options for publishing
     *   the MediaStreamTrack
     * @returns {Promise<LocalTrackPublication>} - Resolves with the corresponding
     *   {@link LocalTrackPublication} if successful; In a Large Group Room (Maximum
     *   Participants greater than 50), rejects with a {@link ParticipantMaxTracksExceededError}
     *   if the total number of published Tracks in the Room exceeds 16, or the {@link LocalTrack}
     *   is part of a set of {@link LocalTrack}s which along with the published Tracks exceeds 16.
     * @throws {TypeError}
     * @throws {RangeError}
     * @example
     * var Video = require('twilio-video');
     *
     * Video.connect(token, {
     *   name: 'my-cool-room',
     *   audio: true
     * }).then(function(room) {
     *   return navigator.mediaDevices.getUserMedia({
     *     video: true
     *   }).then(function(mediaStream) {
     *     var mediaStreamTrack = mediaStream.getTracks()[0];
     *     return room.localParticipant.publishTrack(mediaStreamTrack, {
     *       name: 'camera',
     *       priority: 'high'
     *     });
     *   });
     * }).then(function(publication) {
     *   console.log('The LocalTrack "' + publication.trackName
     *     + '" was successfully published with priority "'
     *     * publication.priority + '"');
     * });
     */LocalParticipant.prototype.publishTrack=function(e,t){var r=getTrackPublication(this.tracks,e);if(r)return Promise.resolve(r);t=Object.assign({log:this._log,priority:pp.PRIORITY_STANDARD,LocalAudioTrack:this._LocalAudioTrack,LocalDataTrack:this._LocalDataTrack,LocalVideoTrack:this._LocalVideoTrack,MediaStreamTrack:this._MediaStreamTrack},t);var n;try{n=cp(e,t)}catch(e){return Promise.reject(e)}var i=n.noiseCancellation;var a=this._signaling.audioProcessors;if(i&&!a.includes(i.vendor)){this._log.warn(i.vendor+" is not supported in this room. disabling it permanently");i.disablePermanently()}var o=Object.values(pp);if(!o.includes(t.priority))return Promise.reject(dp.INVALID_VALUE("LocalTrackPublishOptions.priority",o));var c=this._addTrack(n,n.id,t.priority)||this._tracks.get(n.id);return this._getOrCreateLocalTrackPublication(c)};
/**
   * Publishes multiple {@link LocalTrack}s to the {@link Room}.
   * @param {Array<LocalTrack|MediaStreamTrack>} tracks - The {@link LocalTrack}s
   *   to publish; for any MediaStreamTracks provided, if a corresponding
   *   {@link LocalAudioTrack} or {@link LocalVideoTrack} has not yet been
   *   published, this method will construct one
   * @returns {Promise<Array<LocalTrackPublication>>} - The resulting
   *   {@link LocalTrackPublication}s if successful; In a Large Group Room (Maximum
   *   Participants greater than 50), rejects with a {@link ParticipantMaxTracksExceededError}
   *   if the total number of published Tracks in the Room exceeds 16, or the {@link LocalTrack}s
   *   along with the published Tracks exceeds 16.
   * @throws {TypeError}
   */LocalParticipant.prototype.publishTracks=function(e){if(!Array.isArray(e))throw dp.INVALID_TYPE("tracks","Array of LocalAudioTrack, LocalVideoTrack, LocalDataTrack, or MediaStreamTrack");return Promise.all(e.map(this.publishTrack,this))};LocalParticipant.prototype.setBandwidthProfile=function(){this._log.warn("setBandwidthProfile is not implemented yet and may be available in future versions of twilio-video.js")};
/**
   * Sets the {@link NetworkQualityVerbosity} for the {@link LocalParticipant} and
   * {@link RemoteParticipant}s. It does nothing if Network Quality is not enabled
   * while calling {@link connect}.
   * @param {NetworkQualityConfiguration} networkQualityConfiguration - The new
   *   {@link NetworkQualityConfiguration}; If either or both of the local and
   *   remote {@link NetworkQualityVerbosity} values are absent, then the corresponding
   *   existing values are retained
   * @returns {this}
   * @example
   * // Update verbosity levels for both LocalParticipant and RemoteParticipants
   * localParticipant.setNetworkQualityConfiguration({
   *   local: 1,
   *   remote: 2
   * });
   * @example
   * // Update verbosity level for only the LocalParticipant
   * localParticipant.setNetworkQualityConfiguration({
   *   local: 1
   * });
   *  @example
   * // Update verbosity level for only the RemoteParticipants
   * localParticipant.setNetworkQualityConfiguration({
   *   remote: 2
   * });
   */LocalParticipant.prototype.setNetworkQualityConfiguration=function(e){if("object"!==typeof e||null===e)throw dp.INVALID_TYPE("networkQualityConfiguration","NetworkQualityConfiguration");["local","remote"].forEach((function(t){if(t in e&&("number"!==typeof e[t]||isNaN(e[t])))throw dp.INVALID_TYPE("networkQualityConfiguration."+t,"number")}));this._signaling.setNetworkQualityConfiguration(e);return this};
/**
   * Set the {@link LocalParticipant}'s {@link EncodingParameters}.
   * @param {?EncodingParameters} [encodingParameters] - The new
   *   {@link EncodingParameters}; If null, then the bitrate limits are removed;
   *   If not specified, then the existing bitrate limits are preserved
   * @returns {this}
   * @throws {TypeError}
   */LocalParticipant.prototype.setParameters=function(e){if("undefined"!==typeof e&&"object"!==typeof e)throw dp.INVALID_TYPE("encodingParameters","EncodingParameters, null or undefined");if(e){if(this._signaling.getParameters().adaptiveSimulcast&&e.maxVideoBitrate)throw dp.INVALID_TYPE("encodingParameters",'encodingParameters.maxVideoBitrate is not compatible with "preferredVideoCodecs=auto"');["maxAudioBitrate","maxVideoBitrate"].forEach((function(t){if("undefined"!==typeof e[t]&&"number"!==typeof e[t]&&null!==e[t])throw dp.INVALID_TYPE("encodingParameters."+t,"number, null or undefined")}))}else null===e&&(e={maxAudioBitrate:null,maxVideoBitrate:null});this._signaling.setParameters(e);return this};
/**
   * Stops publishing a {@link LocalTrack} to the {@link Room}.
   * @param {LocalTrack|MediaStreamTrack} track - The {@link LocalTrack}
   *   to stop publishing; if a MediaStreamTrack is provided, this method
   *   looks up the corresponding {@link LocalAudioTrack} or
   *   {@link LocalVideoTrack} to stop publishing
   * @returns {?LocalTrackPublication} - The corresponding
   *   {@link LocalTrackPublication} if the {@link LocalTrack} was previously
   *   published, null otherwise
   * @throws {TypeError}
  */LocalParticipant.prototype.unpublishTrack=function(e){fp(e,{LocalAudioTrack:this._LocalAudioTrack,LocalDataTrack:this._LocalDataTrack,LocalVideoTrack:this._LocalVideoTrack,MediaStreamTrack:this._MediaStreamTrack});var t=this._tracks.get(e.id);if(!t)return null;var r=this._signaling.getPublication(t._trackSender);r.publishFailed(new Error("The "+t+" was unpublished"));t=this._removeTrack(t,t.id);if(!t)return null;var n=getTrackPublication(this.tracks,t);n&&this._removeTrackPublication(n);return n};
/**
   * Stops publishing multiple {@link LocalTrack}s to the {@link Room}.
   * @param {Array<LocalTrack|MediaStreamTrack>} tracks - The {@link LocalTrack}s
   *   to stop publishing; for any MediaStreamTracks provided, this method looks
   *   up the corresponding {@link LocalAudioTrack} or {@link LocalVideoTrack} to
   *   stop publishing
   * @returns {Array<LocalTrackPublication>} - The corresponding
   *   {@link LocalTrackPublication}s that were successfully unpublished
   * @throws {TypeError}
   */LocalParticipant.prototype.unpublishTracks=function(e){var t=this;if(!Array.isArray(e))throw dp.INVALID_TYPE("tracks","Array of LocalAudioTrack, LocalVideoTrack, LocalDataTrack, or MediaStreamTrack");return e.reduce((function(e,r){var n=t.unpublishTrack(r);return n?e.concat(n):e}),[])};return LocalParticipant}(kp);
/**
 * One of the {@link LocalParticipant}'s {@link LocalVideoTrack}'s dimensions changed.
 * @param {LocalVideoTrack} track - The {@link LocalVideoTrack} whose dimensions changed
 * @event LocalParticipant#trackDimensionsChanged
 */
/**
 * A {@link LocalTrack} was disabled by the {@link LocalParticipant}.
 * @param {LocalTrack} track - The {@link LocalTrack} that was disabled
 * @event LocalParticipant#trackDisabled
 */
/**
 * A {@link LocalTrack} was enabled by the {@link LocalParticipant}.
 * @param {LocalTrack} track - The {@link LocalTrack} that was enabled
 * @event LocalParticipant#trackEnabled
 */
/**
 * A {@link LocalTrack} failed to publish. Check the error message for more
 * information. In a Large Group Room (Maximum Participants greater than 50),
 * this event is raised with a {@link ParticipantMaxTracksExceededError} either
 * when attempting to publish the {@link LocalTrack} will exceed the Maximum Published
 * Tracks limit of 16, or the {@link LocalTrack} is part of a set of {@link LocalTrack}s
 * which along with the published Tracks exceeds 16.
 * @param {TwilioError} error - A {@link TwilioError} explaining why publication
 *   failed
 * @param {LocalTrack} localTrack - The {@link LocalTrack} that failed to
 *   publish
 * @event LocalParticipant#trackPublicationFailed
 */
/**
 * A {@link LocalTrack} that was added using {@link LocalParticipant#publishTrack} was successfully published. This event
 * is not raised for {@link LocalTrack}s added in {@link ConnectOptions}<code>.tracks</code> or auto-created within
 * <a href="module-twilio-video.html#.connect__anchor"><code>{@link connect}</code></a>.
 * @param {LocalTrackPublication} publication - The resulting
 *   {@link LocalTrackPublication} for the published {@link LocalTrack}
 * @event LocalParticipant#trackPublished
 */
/**
 * One of the {@link LocalParticipant}'s {@link LocalTrack}s started.
 * @param {LocalTrack} track - The {@link LocalTrack} that started
 * @event LocalParticipant#trackStarted
 */
/**
 * One of the {@link LocalParticipant}'s {@link LocalTrack}s stopped, either
 * because {@link LocalTrack#stop} was called or because the underlying
 * MediaStreamTrack ended).
 * @param {LocalTrack} track - The {@link LocalTrack} that stopped
 * @event LocalParticipant#trackStopped
 */
/**
 * One of the {@link LocalParticipant}'s {@link LocalTrackPublication}s encountered a warning.
 * This event is only raised if you enabled warnings using <code>notifyWarnings</code> in <code>ConnectOptions</code>.
 * @param {string} name - The warning that was raised.
 * @param {LocalTrackPublication} publication - The {@link LocalTrackPublication} that encountered the warning.
 * @event LocalParticipant#trackWarning
 */
/**
 * One of the {@link LocalParticipant}'s {@link LocalTrackPublication}s cleared all warnings.
 * This event is only raised if you enabled warnings using <code>notifyWarnings</code> in <code>ConnectOptions</code>.
 * @param {LocalTrackPublication} publication - The {@link LocalTrackPublication} that cleared all warnings.
 * @event LocalParticipant#trackWarningsCleared
 */
/**
 * Outgoing media encoding parameters.
 * @typedef {object} EncodingParameters
 * @property {?number} [maxAudioBitrate] - Max outgoing audio bitrate (bps);
 *   If not specified, retains the existing bitrate limit; A <code>null</code> or a
 *   <code>0</code> value removes any previously set bitrate limit; This value is set
 *   as a hint for variable bitrate codecs, but will not take effect for fixed bitrate
 *   codecs; Based on our tests, Chrome, Firefox and Safari support a bitrate range of
 *   12000 bps to 256000 bps for Opus codec; This parameter has no effect on iSAC, PCMU
 *   and PCMA codecs
 * @property {?number} [maxVideoBitrate] - Max outgoing video bitrate (bps);
 *   If not specified, retains the existing bitrate limit; A <code>null</code> or
 *   a <code>0</code> value removes any previously set bitrate limit; This value is
 *   set as a hint for variable bitrate codecs, but will not take effect for fixed
 *   bitrate codecs; Based on our tests, Chrome, Firefox and Safari all seem to support
 *   an average bitrate range of 20000 bps (20 kbps) to 8000000 bps (8 mbps) for a
 *   720p VideoTrack.
 *   Note: this limit is not applied for screen share tracks published on Chrome.
 */
/**
 * Options for publishing a {@link LocalTrack}.
 * @typedef {object} LocalTrackPublishOptions
 * @property {Track.Priority} [priority='standard'] - The priority with which the {@link LocalTrack}
 *   is to be published; In Group or Small Group Rooms, the appropriate bandwidth is
 *   allocated to the {@link LocalTrack} based on its {@link Track.Priority}; It has no
 *   effect in Peer-to-Peer Rooms; It defaults to "standard" when not provided
 */
/**
 * Options for publishing a {@link MediaStreamTrack}.
 * @typedef {LocalTrackOptions} MediaStreamTrackPublishOptions
 * @property {Track.Priority} [priority='standard'] - The priority with which the {@link LocalTrack}
 *   is to be published; In Group or Small Group Rooms, the appropriate bandwidth is
 *   allocated to the {@link LocalTrack} based on its {@link Track.Priority}; It has no
 *   effect in Peer-to-Peer Rooms; It defaults to "standard" when not provided
 */
/**
 * @private
 * @param {Map<Track.SID, LocalTrackPublication>} trackPublications
 * @param {LocalTrack|MediaStreamTrack} track
 * @returns {?LocalTrackPublication} trackPublication
 */function getTrackPublication(e,t){return Array.from(e.values()).find((function(e){return e.track===t||e.track.mediaStreamTrack===t}))||null}np=Sp;var Tp=np;var wp={};var Cp=function(){function InsightsPublisher(){Object.defineProperties(this,{_connected:{writable:true,value:true}})}
/**
   * Connect
   * @returns {void}
   */InsightsPublisher.prototype.connect=function(){};
/**
   * Disconnect.
   * @returns {boolean}
   */InsightsPublisher.prototype.disconnect=function(){if(this._connected){this._connected=false;return true}return false};
/**
   * Publish.
   * @returns {boolean}
   */InsightsPublisher.prototype.publish=function(){return this._connected};return InsightsPublisher}();wp=Cp;var Pp=wp;var Op="default"in e?e.default:e;var Ep={};var Rp=Ep&&Ep.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Lp=Ep&&Ep.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};var Mp=Op.EventEmitter;var Ip=v,jp=Ip.DEFAULT_NQ_LEVEL_LOCAL,Ap=Ip.DEFAULT_NQ_LEVEL_REMOTE,Dp=Ip.MAX_NQ_LEVEL;var xp=Y.inRange;var Vp=function(e){Rp(NetworkQualityConfigurationImpl,e);
/**
   * Construct an {@link NetworkQualityConfigurationImpl}.
   * @param {NetworkQualityConfiguration} networkQualityConfiguration - Initial {@link NetworkQualityConfiguration}
   */function NetworkQualityConfigurationImpl(t){var r=e.call(this)||this;t=Object.assign({local:jp,remote:Ap},t);Object.defineProperties(r,{local:{value:xp(t.local,jp,Dp)?t.local:jp,writable:true},remote:{value:xp(t.remote,Ap,Dp)?t.remote:Ap,writable:true}});return r}
/**
   * Update the verbosity levels for network quality information for
   * {@link LocalParticipant} and {@link RemoteParticipant} with those
   * in the given {@link NetworkQualityConfiguration}.
   * @param {NetworkQualityConfiguration} networkQualityConfiguration - The new {@link NetworkQualityConfiguration}
   */NetworkQualityConfigurationImpl.prototype.update=function(e){var t=this;e=Object.assign({local:this.local,remote:this.remote},e);[["local",jp,3],["remote",Ap,3]].forEach((function(r){var n=Lp(r,3),i=n[0],a=n[1],o=n[2];t[i]="number"===typeof e[i]&&xp(e[i],a,o)?e[i]:a}))};return NetworkQualityConfigurationImpl}(Mp);Ep=Vp;var Np=Ep;var Fp={};var Bp=Fp&&Fp.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Up=Fp&&Fp.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};var $p=Fp&&Fp.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};var Hp=rp;var Wp=function(e){Bp(RemoteParticipant,e);
/**
   * Construct a {@link RemoteParticipant}.
   * @param {ParticipantSignaling} signaling
   * @param {object} [options]
   */function RemoteParticipant(t,r){var n=e.call(this,t,r)||this;n._handleTrackSignalingEvents();n.once("disconnected",n._unsubscribeTracks.bind(n));return n}RemoteParticipant.prototype.toString=function(){return"[RemoteParticipant #"+this._instanceId+(this.sid?": "+this.sid:"")+"]"};
/**
   * @private
   * @param {RemoteTrack} remoteTrack
   * @param {RemoteTrackPublication} publication
   * @param {Track.ID} id
   * @returns {?RemoteTrack}
   */RemoteParticipant.prototype._addTrack=function(t,r,n){if(!e.prototype._addTrack.call(this,t,n))return null;r._subscribed(t);this.emit("trackSubscribed",t,r);return t};
/**
   * @private
   * @param {RemoteTrackPublication} publication
   * @returns {?RemoteTrackPublication}
   */RemoteParticipant.prototype._addTrackPublication=function(t){var r=e.prototype._addTrackPublication.call(this,t);if(!r)return null;this.emit("trackPublished",r);return r};RemoteParticipant.prototype._getTrackPublicationEvents=function(){return $p($p([],Up(e.prototype._getTrackPublicationEvents.call(this))),[["subscriptionFailed","trackSubscriptionFailed"],["trackDisabled","trackDisabled"],["trackEnabled","trackEnabled"],["publishPriorityChanged","trackPublishPriorityChanged"],["trackSwitchedOff","trackSwitchedOff"],["trackSwitchedOn","trackSwitchedOn"]])};RemoteParticipant.prototype._unsubscribeTracks=function(){var e=this;this.tracks.forEach((function(t){if(t.isSubscribed){var r=t.track;t._unsubscribe();e.emit("trackUnsubscribed",r,t)}}))};
/**
   * @private
   * @param {RemoteTrack} remoteTrack
   * @param {RemoteTrackPublication} publication
   * @param {Track.ID} id
   * @returns {?RemoteTrack}
   */RemoteParticipant.prototype._removeTrack=function(t,r,n){var i=this._tracks.get(n);if(!i)return null;e.prototype._removeTrack.call(this,i,n);r._unsubscribe();this.emit("trackUnsubscribed",i,r);return i};
/**
   * @private
   * @param {RemoteTrackPublication} publication
   * @returns {?RemoteTrackPublication}
   */RemoteParticipant.prototype._removeTrackPublication=function(t){this._signaling.clearTrackHint(t.trackSid);var r=e.prototype._removeTrackPublication.call(this,t);if(!r)return null;this.emit("trackUnpublished",r);return r};return RemoteParticipant}(Hp);
/**
 * One of the {@link RemoteParticipant}'s {@link RemoteVideoTrack}'s dimensions changed.
 * @param {RemoteVideoTrack} track - The {@link RemoteVideoTrack} whose dimensions changed
 * @event RemoteParticipant#trackDimensionsChanged
 */
/**
 * A {@link RemoteTrack} was disabled by the {@link RemoteParticipant}.
 * @param {RemoteTrackPublication} publication - The {@link RemoteTrackPublication} associated with the disabled {@link RemoteTrack}
 * @event RemoteParticipant#trackDisabled
 */
/**
 * A {@link RemoteTrack} was enabled by the {@link RemoteParticipant}.
 * @param {RemoteTrackPublication} publication - The {@link RemoteTrackPublication} associated with the enabled {@link RemoteTrack}
 * @event RemoteParticipant#trackEnabled
 */
/**
 * A message was received over one of the {@link RemoteParticipant}'s
 * {@link RemoteDataTrack}s.
 * @event RemoteParticipant#trackMessage
 * @param {string|ArrayBuffer} data
 * @param {RemoteDataTrack} track - The {@link RemoteDataTrack} over which the
 *   message was received
 */
/**
 * A {@link RemoteTrack} was published by the {@link RemoteParticipant} after
 * connecting to the {@link Room}. This event is not emitted for
 * {@link RemoteTrack}s that were published while the {@link RemoteParticipant}
 * was connecting to the {@link Room}.
 * @event RemoteParticipant#trackPublished
 * @param {RemoteTrackPublication} publication - The {@link RemoteTrackPublication}
 *   which represents the published {@link RemoteTrack}
 * @example
 * function trackPublished(publication) {
 *   console.log(`Track ${publication.trackSid} was published`);
 * }
 *
 * room.on('participantConnected', participant => {
 *   // Handle RemoteTracks published while connecting to the Room.
 *   participant.trackPublications.forEach(trackPublished);
 *
 *   // Handle RemoteTracks published after connecting to the Room.
 *   participant.on('trackPublished', trackPublished);
 * });
 */
/**
 * One of the {@link RemoteParticipant}'s {@link RemoteTrack}s started.
 * @param {RemoteTrack} track - The {@link RemoteTrack} that started
 * @event RemoteParticipant#trackStarted
 */
/**
 * A {@link RemoteParticipant}'s {@link RemoteTrack} was subscribed to.
 * @param {RemoteTrack} track - The {@link RemoteTrack} that was subscribed to
 * @param {RemoteTrackPublication} publication - The {@link RemoteTrackPublication}
 *   for the {@link RemoteTrack} that was subscribed to
 * @event RemoteParticipant#trackSubscribed
 */
/**
 * A {@link RemoteParticipant}'s {@link RemoteTrack} could not be subscribed to.
 * @param {TwilioError} error - The reason the {@link RemoteTrack} could not be
 *   subscribed to
 * @param {RemoteTrackPublication} publication - The
 *   {@link RemoteTrackPublication} for the {@link RemoteTrack} that could not
 *   be subscribed to
 * @event RemoteParticipant#trackSubscriptionFailed
 */
/**
 * The {@link RemoteTrackPublication}'s publish {@link Track.Priority} was changed by the
 * {@link RemoteParticipant}.
 * @param {Track.Priority} priority - the {@link RemoteTrack}'s new publish
 *   {@link Track.Priority};
 * @param {RemoteTrackPublication} publication - The
 *   {@link RemoteTrackPublication} for the {@link RemoteTrack} that changed priority
 * @event RemoteParticipant#trackPublishPriorityChanged
 */
/**
 * A {@link RemoteParticipant}'s {@link RemoteTrack} was subscribed to.
 * @param {RemoteTrack} track - The {@link RemoteTrack} that was switched off
 * @param {RemoteTrackPublication} publication - The {@link RemoteTrackPublication}
 *   for the {@link RemoteTrack} that was switched off
 * @event RemoteParticipant#trackSwitchedOff
 */
/**
 * A {@link RemoteParticipant}'s {@link RemoteTrack} was switched on.
 * @param {RemoteTrack} track - The {@link RemoteTrack} that was switched on.
 * @param {RemoteTrackPublication} publication - The {@link RemoteTrackPublication}
 *   for the {@link RemoteTrack} that was switched on
 * @event RemoteParticipant#trackSwitchedOn
 */
/**
 * A {@link RemoteTrack} was unpublished by the {@link RemoteParticipant}.
 * @event RemoteParticipant#trackUnpublished
 * @param {RemoteTrackPublication} publication - The {@link RemoteTrackPublication}
 *   which represents the unpublished {@link RemoteTrack}
 */
/**
 * A {@link RemoteParticipant}'s {@link RemoteTrack} was unsubscribed from.
 * @param {RemoteTrack} track - The {@link RemoteTrack} that was unsubscribed from
 * @param {RemoteTrackPublication} publication - The {@link RemoteTrackPublication}
 *   for the {@link RemoteTrack} that was unsubscribed from
 * @event RemoteParticipant#trackUnsubscribed
 */Fp=Wp;var Qp=Fp;var qp={};var zp=function(){
/**
   * @param {string} trackId - {@link Track} ID
   * @param {StandardizedTrackStatsReport} statsReport
   */
function TrackStats(e,t){if("string"!==typeof e)throw new Error("Track id must be a string");Object.defineProperties(this,{trackId:{value:e,enumerable:true},trackSid:{value:t.trackSid,enumerable:true},timestamp:{value:t.timestamp,enumerable:true},ssrc:{value:t.ssrc,enumerable:true},packetsLost:{value:"number"===typeof t.packetsLost?t.packetsLost:null,enumerable:true},codec:{value:"string"===typeof t.codecName?t.codecName:null,enumerable:true}})}return TrackStats}();qp=zp;var Gp=qp;var Kp={};var Jp=Kp&&Kp.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Yp=Gp;var Xp=function(e){Jp(LocalTrackStats,e);
/**
   * @param {string} trackId - {@link LocalTrack} ID
   * @param {StandardizedTrackStatsReport} statsReport
   * @param {boolean} prepareForInsights
   */function LocalTrackStats(t,r,n){var i=e.call(this,t,r)||this;Object.defineProperties(i,{bytesSent:{value:"number"===typeof r.bytesSent?r.bytesSent:n?0:null,enumerable:true},packetsSent:{value:"number"===typeof r.packetsSent?r.packetsSent:n?0:null,enumerable:true},roundTripTime:{value:"number"===typeof r.roundTripTime?r.roundTripTime:n?0:null,enumerable:true}});return i}return LocalTrackStats}(Yp);Kp=Xp;var Zp=Kp;var ef={};var tf=ef&&ef.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var rf=Zp;var nf=function(e){tf(LocalAudioTrackStats,e);
/**
   * @param {string} trackId - {@link LocalAudioTrack} ID
   * @param {StandardizedTrackStatsReport} statsReport
   * @param {boolean} prepareForInsights
   */function LocalAudioTrackStats(t,r,n){var i=e.call(this,t,r,n)||this;Object.defineProperties(i,{audioLevel:{value:"number"===typeof r.audioInputLevel?r.audioInputLevel:null,enumerable:true},jitter:{value:"number"===typeof r.jitter?r.jitter:null,enumerable:true}});return i}return LocalAudioTrackStats}(rf);
/**
 * The maximum absolute amplitude of a set of audio samples in the
 * range of 0 to 32767 inclusive.
 * @typedef {number} AudioLevel
 */ef=nf;var af=ef;var of={};var cf=of&&of.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var sf=Zp;var uf=function(e){cf(LocalVideoTrackStats,e);
/**
   * @param {string} trackId - {@link LocalVideoTrack} ID
   * @param {StandardizedTrackStatsReport} statsReport
   * @param {boolean} prepareForInsights
   */function LocalVideoTrackStats(t,r,n){var i=e.call(this,t,r,n)||this;var a=null;if("number"===typeof r.frameWidthInput&&"number"===typeof r.frameHeightInput){a={};Object.defineProperties(a,{width:{value:r.frameWidthInput,enumerable:true},height:{value:r.frameHeightInput,enumerable:true}})}var o=null;if("number"===typeof r.frameWidthSent&&"number"===typeof r.frameHeightSent){o={};Object.defineProperties(o,{width:{value:r.frameWidthSent,enumerable:true},height:{value:r.frameHeightSent,enumerable:true}})}Object.defineProperties(i,{captureDimensions:{value:a,enumerable:true},dimensions:{value:o,enumerable:true},captureFrameRate:{value:"number"===typeof r.frameRateInput?r.frameRateInput:null,enumerable:true},frameRate:{value:"number"===typeof r.frameRateSent?r.frameRateSent:null,enumerable:true}});return i}return LocalVideoTrackStats}(sf);of=uf;var lf=of;var df={};var pf=df&&df.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var ff=Gp;var vf=function(e){pf(RemoteTrackStats,e);
/*
   * @param {string} trackId - {@link Track} ID
   * @param {StandardizedTrackStatsReport} statsReport
   */function RemoteTrackStats(t,r){var n=e.call(this,t,r)||this;Object.defineProperties(n,{bytesReceived:{value:"number"===typeof r.bytesReceived?r.bytesReceived:null,enumerable:true},packetsReceived:{value:"number"===typeof r.packetsReceived?r.packetsReceived:null,enumerable:true}});return n}return RemoteTrackStats}(ff);df=vf;var hf=df;var _f={};var mf=_f&&_f.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var gf=hf;var yf=function(e){mf(RemoteAudioTrackStats,e);
/**
   * @param {string} trackId - {@link AudioTrack} ID
   * @param {StandardizedTrackStatsReport} statsReport
   */function RemoteAudioTrackStats(t,r){var n=e.call(this,t,r)||this;Object.defineProperties(n,{audioLevel:{value:"number"===typeof r.audioOutputLevel?r.audioOutputLevel:null,enumerable:true},jitter:{value:"number"===typeof r.jitter?r.jitter:null,enumerable:true}});return n}return RemoteAudioTrackStats}(gf);_f=yf;var bf=_f;var kf={};var Sf=kf&&kf.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Tf=hf;var wf=function(e){Sf(RemoteVideoTrackStats,e);
/**
   * @param {string} trackId - {@link VideoTrack} ID
   * @param {StandardizedTrackStatsReport} statsReport
   */function RemoteVideoTrackStats(t,r){var n=e.call(this,t,r)||this;var i=null;if("number"===typeof r.frameWidthReceived&&"number"===typeof r.frameHeightReceived){i={};Object.defineProperties(i,{width:{value:r.frameWidthReceived,enumerable:true},height:{value:r.frameHeightReceived,enumerable:true}})}Object.defineProperties(n,{dimensions:{value:i,enumerable:true},frameRate:{value:"number"===typeof r.frameRateReceived?r.frameRateReceived:null,enumerable:true}});return n}return RemoteVideoTrackStats}(Tf);kf=wf;var Cf=kf;var Pf={};var Of=af;var Ef=lf;var Rf=bf;var Lf=Cf;var Mf=function(){
/**
   * @param {string} peerConnectionId - RTCPeerConnection ID
   * @param {StandardizedStatsResponse} statsResponse
   * @param {boolean} prepareForInsights - if report is being prepared to send to insights.
   */
function StatsReport(e,t,r){if("string"!==typeof e)throw new Error("RTCPeerConnection id must be a string");Object.defineProperties(this,{peerConnectionId:{value:e,enumerable:true},localAudioTrackStats:{value:t.localAudioTrackStats.map((function(e){return new Of(e.trackId,e,r)})),enumerable:true},localVideoTrackStats:{value:t.localVideoTrackStats.map((function(e){return new Ef(e.trackId,e,r)})),enumerable:true},remoteAudioTrackStats:{value:t.remoteAudioTrackStats.map((function(e){return new Rf(e.trackId,e)})),enumerable:true},remoteVideoTrackStats:{value:t.remoteVideoTrackStats.map((function(e){return new Lf(e.trackId,e)})),enumerable:true}})}return StatsReport}();Pf=Mf;var If=Pf;var jf={};var Af=jf&&jf.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Df=jf&&jf.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};var xf=jf&&jf.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};var Vf=Dr;var Nf=Qp;var Ff=If;var Bf=Y,Uf=Bf.flatMap,$f=Bf.valueToJSON;var Hf=0;var Wf=function(e){Af(Room,e);
/**
   * Construct a {@link Room}.
   * @param {RoomSignaling} signaling
   * @param {?object} [options={}]
   */function Room(t,r,n){var i=e.call(this)||this;var a=n.log.createLog("default",i);var o=new Map;Object.defineProperties(i,{_log:{value:a},_clientTrackSwitchOffControl:{value:n.clientTrackSwitchOffControl||"disabled"},_contentPreferencesMode:{value:n.contentPreferencesMode||"disabled"},_instanceId:{value:++Hf},_options:{value:n},_participants:{value:o},_signaling:{value:r},dominantSpeaker:{enumerable:true,get:function(){return this.participants.get(r.dominantSpeakerSid)||null}},isRecording:{enumerable:true,get:function(){return r.recording.isEnabled||false}},localParticipant:{enumerable:true,value:t},name:{enumerable:true,value:r.name},participants:{enumerable:true,value:o},sid:{enumerable:true,value:r.sid},state:{enumerable:true,get:function(){return r.state}},mediaRegion:{enumerable:true,value:r.mediaRegion}});handleLocalParticipantEvents$1(i,t);handleRecordingEvents(i,r.recording);handleSignalingEvents(i,r);verifyNoiseCancellation(i);a.info("Created a new Room:",i.name);a.debug("Initial RemoteParticipants:",Array.from(i._participants.values()));return i}Room.prototype.toString=function(){return"[Room #"+this._instanceId+": "+this.sid+"]"};
/**
   * Disconnect from the {@link Room}.
   * @returns {this}
   */Room.prototype.disconnect=function(){this._log.info("Disconnecting");this._signaling.disconnect();return this};
/**
   * Get the {@link Room}'s media statistics. This is not supported in Safari 12.0 or below
   * due to this bug : https://bugs.webkit.org/show_bug.cgi?id=192601
   *
   * @returns {Promise.<Array<StatsReport>>}
   */Room.prototype.getStats=function(){var e=this;return this._signaling.getStats().then((function(t){return Array.from(t).map((function(t){var r=Df(t,2),n=r[0],i=r[1];return new Ff(n,Object.assign({},i,{localAudioTrackStats:rewriteLocalTrackIds(e,i.localAudioTrackStats),localVideoTrackStats:rewriteLocalTrackIds(e,i.localVideoTrackStats)}))}))}))};
/**
   * Restart the muted local media {@link Track}s and play inadvertently paused HTMLMediaElements
   * that are attached to local and remote media {@link Track}s. This method is useful mainly on
   * mobile browsers (Safari and Chrome on iOS), where there is a possibility that the muted local
   * media {@link Track}s are never unmuted and inadvertently paused HTMLMediaElements are never
   * played again, especially after handling an incoming phone call.
   * @returns {this}
   */Room.prototype.refreshInactiveMedia=function(){var e=this.localParticipant.tracks;var t=Array.from(e.values()).filter((function(e){var t=e.track.kind;return"data"!==t})).map((function(e){var t=e.track;return t}));var r=Uf(this.participants,(function(e){return Array.from(e.tracks.values())})).filter((function(e){var t=e.track;return t&&"data"!==t.kind})).map((function(e){var t=e.track;return t}));var n=t.concat(r);var i=new Event("unmute");t.forEach((function(e){var t=e.isMuted,r=e.mediaStreamTrack;t&&r.dispatchEvent(i)}));var a=new Event("pause");n.forEach((function(e){var t=e._attachments,r=e._elShims;return t.forEach((function(e){var t=r.get(e);var n=e.paused&&t&&!t.pausedIntentionally();n&&e.dispatchEvent(a)}))}));return this};Room.prototype.toJSON=function(){return $f(this)};return Room}(Vf);function verifyNoiseCancellation(e){var t=e.localParticipant._signaling.audioProcessors;e.localParticipant.audioTracks.forEach((function(r){var n=r.track;var i=n.noiseCancellation;if(i&&!t.includes(i.vendor)){e._log.warn(i.vendor+" is not supported in this room. disabling it permanently");i.disablePermanently()}}))}function rewriteLocalTrackIds(e,t){var r=e.localParticipant._signaling;return t.reduce((function(e,t){var n=r.tracks.get(t.trackId);var i=r.getSender(n);return i?[Object.assign({},t,{trackId:i.id})].concat(e):e}),[])}
/**
 * A {@link Room.SID} is a 34-character string starting with "RM"
 * that uniquely identifies a {@link Room}.
 * @type string
 * @typedef Room.SID
 */
/**
 * The Dominant Speaker in the {@link Room} changed. Either the Dominant Speaker
 * is a new {@link RemoteParticipant} or the Dominant Speaker has been reset and
 * is now null.
 * @param {?RemoteParticipant} dominantSpeaker - The Dominant Speaker in the
 *   {@link Room}, if any
 * @event Room#dominantSpeakerChanged
 */
/**
 * Your {@link LocalParticipant} was disconnected from the {@link Room} and all
 * other {@link RemoteParticipant}s.
 * @param {Room} room - The {@link Room} your
 *   {@link LocalParticipant} was disconnected from
 * @param {?TwilioError} error - Present when the {@link LocalParticipant} got
 *   disconnected from the {@link Room} unexpectedly
 * @event Room#disconnected
 * @example
 * myRoom.on('disconnected', function(room, error) {
 *   if (error) {
 *     console.log('Unexpectedly disconnected:', error);
 *   }
 *   myRoom.localParticipant.tracks.forEach(function(track) {
 *     track.stop();
 *     track.detach();
 *   });
 * });
 */
/**
 * A {@link RemoteParticipant} joined the {@link Room}. In Large Group Rooms (Maximum
 * Participants greater than 50), this event is raised only when a {@link RemoteParticipant}
 * publishes at least one {@link LocalTrack}.
 * @param {RemoteParticipant} participant - The {@link RemoteParticipant} who joined
 * @event Room#participantConnected
 * @example
 * myRoom.on('participantConnected', function(participant) {
 *   console.log(participant.identity + ' joined the Room');
 * });
 */
/**
 * A {@link RemoteParticipant} left the {@link Room}. In Large Group Rooms (Maximum
 * Participants greater than 50), this event is raised only when a {@link RemoteParticipant}
 * unpublishes all its {@link LocalTrack}s.
 * @param {RemoteParticipant} participant - The {@link RemoteParticipant} who left
 * @event Room#participantDisconnected
 * @example
 * myRoom.on('participantDisconnected', function(participant) {
 *   console.log(participant.identity + ' left the Room');
 *   participant.tracks.forEach(function(track) {
 *     track.detach().forEach(function(mediaElement) {
 *       mediaElement.remove();
 *     });
 *   });
 * });
 */
/**
 * A {@link RemoteParticipant} has reconnected to the {@link Room} after a signaling connection disruption.
 * @param {RemoteParticipant} participant - The {@link RemoteParticipant} that has reconnected.
 * @event Room#participantReconnected
 * @example
 * myRoom.on('participantReconnected', participant => {
 *   console.log(participant.identity + ' reconnected to the Room');
 * });
 */
/**
 * A {@link RemoteParticipant} is reconnecting to the {@link Room} after a signaling connection disruption.
 * @param {RemoteParticipant} participant - The {@link RemoteParticipant} that is reconnecting.
 * @event Room#participantReconnecting
 * @example
 * myRoom.on('participantReconnecting', participant => {
 *   console.log(participant.identity + ' is reconnecting to the Room');
 * });
 */
/**
 * Your application is reconnecting to the {@link Room}. This happens when there
 * is a disruption in your signaling connection and/or your media connection. When
 * this event is emitted, the {@link Room} is in state "reconnecting". If reconnecting
 * succeeds, the {@link Room} will emit a "reconnected" event.
 * @param {MediaConnectionError|SignalingConnectionDisconnectedError} error - A
 *   {@link MediaConnectionError} if your application is reconnecting due to a
 *   disruption in your media connection, or a {@link SignalingConnectionDisconnectedError}
 *   if your application is reconnecting due to a disruption in your signaling connection
 * @event Room#reconnecting
 * @example
 * myRoom.on('reconnecting', error => {
 *   if (error.code === 53001) {
 *     console.log('Reconnecting your signaling connection!', error.message);
 *   } else if (error.code === 53405) {
 *     console.log('Reconnecting your media connection!', error.message);
 *   }
 * });
 */
/**
 * One of the {@link RemoteParticipant}'s {@link VideoTrack}'s dimensions changed.
 * @param {RemoteVideoTrack} track - The {@link RemoteVideoTrack} whose dimensions changed
 * @param {RemoteParticipant} participant - The {@link RemoteParticipant} whose
 *   {@link RemoteVideoTrack}'s dimensions changed
 * @event Room#trackDimensionsChanged
 */
/**
 * A {@link RemoteTrack} was disabled by a {@link RemoteParticipant} in the {@link Room}.
 * @param {RemoteTrackPublication} publication - The {@link RemoteTrackPublication} that represents disabled {@link RemoteTrack}
 * @param {RemoteParticipant} participant - The {@link RemoteParticipant} who
 *   disabled the {@link RemoteTrack}
 * @event Room#trackDisabled
 */
/**
 * A {@link RemoteTrack} was enabled by a {@link RemoteParticipant} in the {@link Room}.
 * @param {RemoteTrackPublication} publication - The {@link RemoteTrackPublication} that represents enabled {@link RemoteTrack}
 * @param {RemoteParticipant} participant - The {@link RemoteParticipant} who
 *   enabled the {@link RemoteTrack}
 * @event Room#trackEnabled
 */
/**
 * A message was received over one of the {@link RemoteParticipant}'s
 * {@link RemoteDataTrack}'s.
 * @param {string|ArrayBuffer} data
 * @param {RemoteDataTrack} track - The {@link RemoteDataTrack} over which the
 *   message was received
 * @param {RemoteParticipant} participant - The {@link RemoteParticipant} whose
 *   {@link RemoteDataTrack} received the message
 * @event Room#trackMessage
 */
/**
 * A {@link RemoteTrack} was published by a {@link RemoteParticipant} after
 * connecting to the {@link Room}. This event is not emitted for
 * {@link RemoteTrack}s that were published while the {@link RemoteParticipant}
 * was connecting to the {@link Room}.
 * @event Room#trackPublished
 * @param {RemoteTrackPublication} publication - The {@link RemoteTrackPublication}
 *   which represents the published {@link RemoteTrack}
 * @param {RemoteParticipant} participant - The {@link RemoteParticipant} who
 *   published the {@link RemoteTrack}
 * @example
 * function trackPublished(publication, participant) {
 *   console.log(`RemoteParticipant ${participant.sid} published Track ${publication.trackSid}`);
 * }
 *
 * // Handle RemoteTracks published after connecting to the Room.
 * room.on('trackPublished', trackPublished);
 *
 * room.on('participantConnected', participant => {
 *   // Handle RemoteTracks published while connecting to the Room.
 *   participant.trackPublications.forEach(publication => trackPublished(publication, participant));
 * });
 */
/**
 * One of a {@link RemoteParticipant}'s {@link RemoteTrack}s in the {@link Room} started.
 * @param {RemoteTrack} track - The {@link RemoteTrack} that started
 * @param {RemoteParticipant} participant - The {@link RemoteParticipant} whose
 *   {@link RemoteTrack} started
 * @event Room#trackStarted
 */
/**
 * A {@link RemoteParticipant}'s {@link RemoteTrack} was subscribed to.
 * @param {RemoteTrack} track - The {@link RemoteTrack} that was subscribed
 * @param {RemoteTrackPublication} publication - The {@link RemoteTrackPublication}
 *   for the {@link RemoteTrack} that was subscribed to
 * @param {RemoteParticipant} participant - The {@link RemoteParticipant} whose
 *   {@link RemoteTrack} was subscribed
 * @event Room#trackSubscribed
 * @example
 * room.on('trackSubscribed', function(track, publication, participant) {
 *   var participantView = document.getElementById('participant-view-' + participant.identity);
 *   participantView.appendChild(track.attach());
 * });
 */
/**
 * A {@link RemoteParticipant}'s {@link RemoteTrack} was switched off.
 * @param {RemoteTrack} track - The {@link RemoteTrack} that was switched off
 * @param {RemoteTrackPublication} publication - The {@link RemoteTrackPublication}
 *   for the {@link RemoteTrack} that was subscribed to
 * @param {RemoteParticipant} participant - The {@link RemoteParticipant} whose
 *   {@link RemoteTrack} was switched off
 * @event Room#trackSwitchedOff
 */
/**
 * A {@link RemoteParticipant}'s {@link RemoteTrack} was switched on.
 * @param {RemoteTrack} track - The {@link RemoteTrack} that was switched on
 * @param {RemoteTrackPublication} publication - The {@link RemoteTrackPublication}
 *   for the {@link RemoteTrack} that was subscribed to
 * @param {RemoteParticipant} participant - The {@link RemoteParticipant} whose
 *   {@link RemoteTrack} was switched on
 * @event Room#trackSwitchedOn
 */
/**
 * A {@link RemoteParticipant}'s {@link RemoteTrack} could not be subscribed to.
 * @param {TwilioError} error - The reason the {@link RemoteTrack} could not be
 *   subscribed to
 * @param {RemoteTrackPublication} publication - The
 *   {@link RemoteTrackPublication} for the {@link RemoteTrack} that could not
 *   be subscribed to
 * @param {RemoteParticipant} participant - The {@link RemoteParticipant} whose
 *   {@link RemoteTrack} could not be subscribed to
 * @event Room#trackSubscriptionFailed
 */
/**
 * The {@link RemoteTrack}'s publish {@link Track.Priority} was changed by the
 * {@link RemoteParticipant}.
 * @param {Track.Priority} priority - the {@link RemoteTrack}'s new publish
 *   {@link Track.Priority};
 * @param {RemoteTrackPublication} publication - The
 *   {@link RemoteTrackPublication} for the {@link RemoteTrack} that changed priority
 * @param {RemoteParticipant} participant - The {@link RemoteParticipant} whose
 *   {@link RemoteTrack} changed priority
 * @event Room#trackPublishPriorityChanged
 */
/**
 * A {@link RemoteTrack} was unpublished by a {@link RemoteParticipant} to the {@link Room}.
 * @event Room#trackUnpublished
 * @param {RemoteTrackPublication} publication - The {@link RemoteTrackPublication}
 *   which represents the unpublished {@link RemoteTrack}
 * @param {RemoteParticipant} participant - The {@link RemoteParticipant} who
 *   unpublished the {@link RemoteTrack}
 */
/**
 * A {@link RemoteParticipant}'s {@link RemoteTrack} was unsubscribed from.
 * @param {RemoteTrack} track - The {@link RemoteTrack} that was unsubscribed
 * @param {RemoteTrackPublication} publication - The {@link RemoteTrackPublication}
 *   for the {@link RemoteTrack} that was unsubscribed from
 * @param {RemoteParticipant} participant - The {@link RemoteParticipant} whose
 *   {@link RemoteTrack} was unsubscribed
 * @event Room#trackUnsubscribed
 * @example
 * room.on('trackUnsubscribed', function(track, publication, participant) {
 *   track.detach().forEach(function(mediaElement) {
 *     mediaElement.remove();
 *   });
 * });
 */
/**
 * One of the {@link LocalParticipant}'s {@link LocalTrackPublication}s in the {@link Room} encountered a warning.
 * This event is only raised if you enabled warnings using <code>notifyWarnings</code> in <code>ConnectOptions</code>.
 * @param {string} name - The warning that was raised.
 * @param {LocalTrackPublication} publication - The {@link LocalTrackPublication} that encountered the warning.
 * @param {LocalParticipant} participant - The {@link LocalParticipant}
 * @event Room#trackWarning
 * @example
 * room.on('trackWarning', (name, publication, participant) => {
 *   if (name === 'recording-media-lost') {
 *     log(`LocalTrack ${publication.track.name} is not recording media.`,
 *       name, publication, participant);
 *
 *     // Wait a reasonable amount of time to clear the warning.
 *     const timer = setTimeout(() => {
 *       // If the warning is not cleared, you can manually
 *       // reconnect to the room, or show a dialog to the user
 *     }, 5000);
 *
 *     room.once('trackWarningsCleared', (publication, participant) => {
 *       log('LocalTrack warnings have cleared!',
 *         publication, participant);
 *       clearTimeout(timer);
 *     });
 *   }
});
 */
/**
 * One of the {@link LocalParticipant}'s {@link LocalTrackPublication}s in the {@link Room} cleared all warnings.
 * This event is only raised if you enabled warnings using <code>notifyWarnings</code> in <code>ConnectOptions</code>.
 * @param {LocalTrackPublication} publication - The {@link LocalTrackPublication} that cleared all warnings.
 * @param {LocalParticipant} participant - The {@link LocalParticipant}
 * @event Room#trackWarningsCleared
 */function connectParticipant(e,t){var r=e._log,n=e._clientTrackSwitchOffControl,i=e._contentPreferencesMode;var a=new Nf(t,{log:r,clientTrackSwitchOffControl:n,contentPreferencesMode:i});r.info("A new RemoteParticipant connected:",a);e._participants.set(a.sid,a);e.emit("participantConnected",a);var o=[["reconnected","participantReconnected"],["reconnecting","participantReconnecting"],"trackDimensionsChanged","trackDisabled","trackEnabled","trackMessage","trackPublished","trackPublishPriorityChanged","trackStarted","trackSubscribed","trackSubscriptionFailed","trackSwitchedOff","trackSwitchedOn","trackUnpublished","trackUnsubscribed"].map((function(t){var r=Df(Array.isArray(t)?t:[t,t],2),n=r[0],i=r[1];function reemit(){var t=[].slice.call(arguments);t.unshift(i);t.push(a);e.emit.apply(e,xf([],Df(t)))}a.on(n,reemit);return[n,reemit]}));a.once("disconnected",(function participantDisconnected(){var t=e.dominantSpeaker;r.info("RemoteParticipant disconnected:",a);e._participants.delete(a.sid);o.forEach((function(e){a.removeListener(e[0],e[1])}));e.emit("participantDisconnected",a);a===t&&e.emit("dominantSpeakerChanged",e.dominantSpeaker)}))}function handleLocalParticipantEvents$1(e,t){var r=["trackWarning","trackWarningsCleared"].map((function(r){return{eventName:r,handler:function(){var n=[];for(var i=0;i<arguments.length;i++)n[i]=arguments[i];return e.emit.apply(e,xf([r],Df(xf(xf([],Df(n)),[t]))))}}}));r.forEach((function(e){var r=e.eventName,n=e.handler;return t.on(r,n)}));e.once("disconnected",(function(){return r.forEach((function(e){var r=e.eventName,n=e.handler;return t.removeListener(r,n)}))}))}function handleRecordingEvents(e,t){t.on("updated",(function updated(){var r=t.isEnabled;e._log.info("Recording "+(r?"started":"stopped"));e.emit("recording"+(r?"Started":"Stopped"))}))}function handleSignalingEvents(e,t){var r=e._log;r.debug("Creating a new RemoteParticipant for each ParticipantSignaling in the RoomSignaling");t.participants.forEach(connectParticipant.bind(null,e));r.debug("Setting up RemoteParticipant creation for all subsequent ParticipantSignalings that connect to the RoomSignaling");t.on("participantConnected",connectParticipant.bind(null,e));t.on("dominantSpeakerChanged",(function(){return e.emit("dominantSpeakerChanged",e.dominantSpeaker)}));t.on("stateChanged",(function stateChanged(n,i){r.info("Transitioned to state:",n);switch(n){case"disconnected":e.participants.forEach((function(e){e._unsubscribeTracks()}));e.emit(n,e,i);e.localParticipant.tracks.forEach((function(e){e.unpublish()}));t.removeListener("stateChanged",stateChanged);break;case"reconnecting":setTimeout((function(){return e.emit("reconnecting",i)}),0);break;default:setTimeout((function(){return e.emit("reconnected")}),0)}}))}jf=Wf;var Qf=jf;var qf="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var zf={};var Gf=function(){
/**
   * Construct a {@link Backoff}.
   * @param {object} options
   * @property {number} min - Initial timeout in milliseconds [100]
   * @property {number} max - Max timeout [10000]
   * @property {boolean} jitter - Apply jitter [0]
   * @property {number} factor - Multiplication factor for Backoff operation [2]
   */
function Backoff(e){Object.defineProperties(this||qf,{_min:{value:e.min||100},_max:{value:e.max||1e4},_jitter:{value:e.jitter>0&&e.jitter<=1?e.jitter:0},_factor:{value:e.factor||2},_attempts:{value:0,writable:true},_duration:{enumerable:false,get:function(){var e=(this||qf)._min*Math.pow((this||qf)._factor,(this||qf)._attempts);if((this||qf)._jitter){var t=Math.random();var r=Math.floor(t*(this||qf)._jitter*e);e=0===(1&Math.floor(10*t))?e-r:e+r}return 0|Math.min(e,(this||qf)._max)}},_timeoutID:{value:null,writable:true}})}
/**
  * Start the backoff operation.
  * @param {function} fn - Function to call
  * @return {void}
  * @api public
  */Backoff.prototype.backoff=function(e){var t=this||qf;var r=(this||qf)._duration;if((this||qf)._timeoutID){clearTimeout((this||qf)._timeoutID);(this||qf)._timeoutID=null}(this||qf)._timeoutID=setTimeout((function(){t._attempts++;e()}),r)};Backoff.prototype.reset=function(){(this||qf)._attempts=0;if((this||qf)._timeoutID){clearTimeout((this||qf)._timeoutID);(this||qf)._timeoutID=null}};return Backoff}();zf=Gf;var Kf=zf;var Jf={};var Yf=Jf&&Jf.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};var Xf=Y,Zf=Xf.difference,ev=Xf.flatMap;
/**
 * Create a random {@link SSRC}.
 * @returns {SSRC}
 */function createSSRC(){var e=4294967295;return String(Math.floor(Math.random()*e))}var tv=function(){
/**
   * Construct a {@link MediaStreamTrack} attribute store.
   * @param {Track.ID} trackId - The MediaStreamTrack ID
   * @param {MediaStreamID} streamId - The MediaStream ID
   * @param {string} cName - The MediaStream cname
   */
function TrackAttributes(e,t,r){Object.defineProperties(this,{cName:{enumerable:true,value:r},isSimulcastEnabled:{enumerable:true,value:false,writable:true},primarySSRCs:{enumerable:true,value:new Set},rtxPairs:{enumerable:true,value:new Map},streamId:{enumerable:true,value:t},trackId:{enumerable:true,value:e}})}
/**
   * Add {@link SimSSRC}s to the {@link TrackAttributes}.
   * @returns {void}
   */TrackAttributes.prototype.addSimulcastSSRCs=function(){if(!this.isSimulcastEnabled){var e=[createSSRC(),createSSRC()];e.forEach((function(e){this.primarySSRCs.add(e)}),this);this.rtxPairs.size&&e.forEach((function(e){this.rtxPairs.set(createSSRC(),e)}),this)}};
/**
   * Add the given {@link PrimarySSRC} or {@link RtxSSRC} to the {@link TrackAttributes}
   * and update the "isSimulcastEnabled" flag if it is also a {@link SimSSRC}.
   * @param {SSRC} ssrc - The {@link SSRC} to be added
   * @param {?PrimarySSRC} primarySSRC - The {@link PrimarySSRC}; if the given
   *   {@link SSRC} itself is the {@link PrimarySSRC}, then this is set to null
   * @param {boolean} isSimSSRC - true if the given {@link SSRC} is a
   *   {@link SimSSRC}; false otherwise
   * @returns {void}
   */TrackAttributes.prototype.addSSRC=function(e,t,r){t?this.rtxPairs.set(e,t):this.primarySSRCs.add(e);this.isSimulcastEnabled=this.isSimulcastEnabled||r};
/**
   * Construct the SDP lines for the {@link TrackAttributes}.
   * @param {boolean} [excludeRtx=false]
   * @returns {Array<string>} Array of SDP lines
   */TrackAttributes.prototype.toSdpLines=function(e){var t=this;var r=e?[]:Array.from(this.rtxPairs.entries()).map((function(e){return e.reverse()}));var n=Array.from(this.primarySSRCs.values());var i=r.length?ev(r):n;var a=ev(i,(function(e){return["a=ssrc:"+e+" cname:"+t.cName,"a=ssrc:"+e+" msid:"+t.streamId+" "+t.trackId]}));var o=r.map((function(e){return"a=ssrc-group:FID "+e.join(" ")}));var c=["a=ssrc-group:SIM "+n.join(" ")];return o.concat(a).concat(c)};return TrackAttributes}();
/**
 * Get the matches for a given RegEx pattern.
 * @param {string} section - SDP media section
 * @param {string} pattern - RegEx pattern
 * @returns {Array<Array<string>>} - Array of pattern matches
 */function getMatches(e,t){var r=e.match(new RegExp(t,"gm"))||[];return r.map((function(e){var r=e.match(new RegExp(t))||[];return r.slice(1)}))}
/**
 * Get the {@link SimSSRC}s that belong to a simulcast group.
 * @param {string} section - SDP media section
 * @returns {Set<SimSSRC>} Set of simulcast {@link SSRC}s
 */function getSimulcastSSRCs(e){var t="^a=ssrc-group:SIM ([0-9]+) ([0-9]+) ([0-9]+)$";return new Set(ev(getMatches(e,t)))}
/**
 * Get the value of the given attribute for an SSRC.
 * @param {string} section - SDP media section
 * @param {SSRC} ssrc - {@link SSRC} whose attribute's value is to be determinded
 * @param {string} attribute - {@link SSRC} attribute name
 * @param {string} - {@link SSRC} attribute value
 */function getSSRCAttribute(e,t,r){var n="a=ssrc:"+t+" "+r+":(.+)";return e.match(new RegExp(n))[1]}
/**
 * Create a Map of {@link PrimarySSRC}s and their {@link RtxSSRC}s.
 * @param {string} section - SDP media section
 * @returns {Map<RtxSSRC, PrimarySSRC>} - Map of {@link RtxSSRC}s and their
 *   corresponding {@link PrimarySSRC}s
 */function getSSRCRtxPairs(e){var t="^a=ssrc-group:FID ([0-9]+) ([0-9]+)$";return new Map(getMatches(e,t).map((function(e){return e.reverse()})))}
/**
 * Create SSRC attribute tuples.
 * @param {string} section
 * @returns {Array<[SSRC, MediaStreamID, Track.ID]>}
 */function createSSRCAttributeTuples(e){var t=Yf(ev(getMatches(e,"^a=msid:(.+) (.+)$")),2),r=t[0],n=t[1];var i=ev(getMatches(e,"^a=ssrc:(.+) cname:.+$"));return i.map((function(e){return[e,r,n]}))}
/**
 * Create a Map of MediaStreamTrack IDs and their {@link TrackAttributes}.
 * @param {string} section - SDP media section
 * @returns {Map<Track.ID, TrackAttributes>}
 */function createTrackIdsToAttributes(e){var t=getSimulcastSSRCs(e);var r=getSSRCRtxPairs(e);var n=createSSRCAttributeTuples(e);return n.reduce((function(n,i){var a=i[0];var o=i[1];var c=i[2];var s=n.get(c)||new tv(c,o,getSSRCAttribute(e,a,"cname"));var u=r.get(a)||null;s.addSSRC(a,u,t.has(a));return n.set(c,s)}),new Map)}
/**
 * Apply simulcast settings to the given SDP media section.
 * @param {string} section - SDP media section
 * @param {Map<Track.ID, TrackAttributes>} trackIdsToAttributes - Existing
 *   map which will be updated for new MediaStreamTrack IDs
 * @returns {string} - The transformed SDP media section
 */function setSimulcastInMediaSection$1(e,t){var r=createTrackIdsToAttributes(e);var n=Array.from(r.keys());var i=Array.from(t.keys());var a=Zf(n,i);var o=Zf(i,n);var c=ev(a,(function(e){return r.get(e)}));c.forEach((function(e){e.addSimulcastSSRCs();t.set(e.trackId,e)}));i=Array.from(t.keys());var s=Zf(i,o);var u=ev(s,(function(e){return t.get(e)}));var l=!e.match(/a=rtpmap:[0-9]+ rtx/);var d=ev(u,(function(e){return e.toSdpLines(l)}));var p=ev(new Set(e.split("\r\n").concat(d)));var f="a=x-google-flag:conference";e.match(f)||p.push(f);return p.join("\r\n")}
/**
 * String representing a MediaStream ID.
 * @typedef {string} MediaStreamID
 */
/**
 * String representing the SSRC of a MediaStreamTrack.
 * @typedef {string} SSRC
 */
/**
 * Primary SSRC.
 * @typedef {SSRC} PrimarySSRC
 */
/**
 * Retransmission SSRC.
 * @typedef {SSRC} RtxSSRC
 */
/**
 * Simulcast SSRC.
 * @typedef {SSRC} SimSSRC
 */Jf=setSimulcastInMediaSection$1;var rv=Jf;var nv={};var iv=nv&&nv.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};var av=Y,ov=av.difference,cv=av.flatMap;var sv=rv;var uv={0:"PCMU",8:"PCMA"};
/**
 * A payload type
 * @typedef {number} PT
 */
/**
 * An {@link AudioCodec} or {@link VideoCodec}
 * @typedef {AudioCodec|VideoCodec} Codec
 */
/**
 * Create a Codec Map for the given m= section.
 * @param {string} section - The given m= section
 * @returns {Map<Codec, Array<PT>>}
 */function createCodecMapForMediaSection$1(e){return Array.from(createPtToCodecName$1(e)).reduce((function(e,t){var r=t[0];var n=t[1];var i=e.get(n)||[];return e.set(n,i.concat(r))}),new Map)}
/**
 * Create a Map of MIDs to m= sections for the given SDP.
 * @param {string} sdp
 * @returns {Map<string, string>}
 */function createMidToMediaSectionMap(e){return getMediaSections$3(e).reduce((function(e,t){var r=getMidForMediaSection(t);return r?e.set(r,t):e}),new Map)}
/**
 * Create a Map from PTs to codec names for the given m= section.
 * @param {string} mediaSection - The given m= section.
 * @returns {Map<PT, Codec>} ptToCodecName
 */function createPtToCodecName$1(e){return getPayloadTypesInMediaSection(e).reduce((function(t,r){var n=new RegExp("a=rtpmap:"+r+" ([^/]+)");var i=e.match(n);var a=i?i[1].toLowerCase():uv[r]?uv[r].toLowerCase():"";return t.set(r,a)}),new Map)}
/**
 * Get the associated fmtp attributes for the given Payload Type in an m= section.
 * @param {PT} pt
 * @param {string} mediaSection
 * @returns {?object}
 */function getFmtpAttributesForPt(e,t){var r=new RegExp("^a=fmtp:"+e+" (.+)$","m");var n=t.match(r);return n&&n[1].split(";").reduce((function(e,t){var r=iv(t.split("="),2),n=r[0],i=r[1];e[n]=isNaN(i)?i:parseInt(i,10);return e}),{})}
/**
 * Get the MID for the given m= section.
 * @param {string} mediaSection
 * @return {?string}
 */function getMidForMediaSection(e){var t=e.match(/^a=mid:(.+)$/m);return t&&t[1]}
/**
 * Get the m= sections of a particular kind and direction from an sdp.
 * @param {string} sdp - SDP string
 * @param {string} [kind] - Pattern for matching kind
 * @param {string} [direction] - Pattern for matching direction
 * @returns {Array<string>} mediaSections
 */function getMediaSections$3(e,t,r){return e.replace(/\r\n\r\n$/,"\r\n").split("\r\nm=").slice(1).map((function(e){return"m="+e})).filter((function(e){var n=new RegExp("m="+(t||".*"),"gm");var i=new RegExp("a="+(r||".*"),"gm");return n.test(e)&&i.test(e)}))}
/**
 * Get the Codec Payload Types present in the first line of the given m= section
 * @param {string} section - The m= section
 * @returns {Array<PT>} Payload Types
 */function getPayloadTypesInMediaSection(e){var t=e.split("\r\n")[0];var r=t.match(/([0-9]+)/g);return r?r.slice(1).map((function(e){return parseInt(e,10)})):[]}
/**
 * Create the reordered Codec Payload Types based on the preferred Codec Names.
 * @param {Map<Codec, Array<PT>>} codecMap - Codec Map
 * @param {Array<AudioCodecSettings|VideoCodecSettings>} preferredCodecs - Preferred Codecs
 * @returns {Array<PT>} Reordered Payload Types
 */function getReorderedPayloadTypes(e,t){t=t.map((function(e){var t=e.codec;return t.toLowerCase()}));var r=cv(t,(function(t){return e.get(t)||[]}));var n=ov(Array.from(e.keys()),t);var i=cv(n,(function(t){return e.get(t)}));return r.concat(i)}
/**
 * Set the given Codec Payload Types in the first line of the given m= section.
 * @param {Array<PT>} payloadTypes - Payload Types
 * @param {string} section - Given m= section
 * @returns {string} - Updated m= section
 */function setPayloadTypesInMediaSection(e,t){var r=t.split("\r\n");var n=r[0];var i=r.slice(1);n=n.replace(/([0-9]+\s?)+$/,e.join(" "));return[n].concat(i).join("\r\n")}
/**
 * Return a new SDP string with the re-ordered codec preferences.
 * @param {string} sdp
 * @param {Array<AudioCodec>} preferredAudioCodecs - If empty, the existing order
 *   of audio codecs is preserved
 * @param {Array<VideoCodecSettings>} preferredVideoCodecs - If empty, the
 *   existing order of video codecs is preserved
 * @returns {string} Updated SDP string
 */function setCodecPreferences$1(e,t,r){var n=getMediaSections$3(e);var i=e.split("\r\nm=")[0];return[i].concat(n.map((function(e){if(!/^m=(audio|video)/.test(e))return e;var n=e.match(/^m=(audio|video)/)[1];var i=createCodecMapForMediaSection$1(e);var a="audio"===n?t:r;var o=getReorderedPayloadTypes(i,a);var c=setPayloadTypesInMediaSection(o,e);var s=i.get("pcma")||[];var u=i.get("pcmu")||[];var l="audio"===n?new Set(s.concat(u)):new Set;return l.has(o[0])?c.replace(/\r\nb=(AS|TIAS):([0-9]+)/g,""):c}))).join("\r\n")}
/**
 * Return a new SDP string with simulcast settings.
 * @param {string} sdp
 * @param {Map<Track.ID, TrackAttributes>} trackIdsToAttributes
 * @returns {string} Updated SDP string
 */function setSimulcast$1(e,t){var r=getMediaSections$3(e);var n=e.split("\r\nm=")[0];return[n].concat(r.map((function(e){e=e.replace(/\r\n$/,"");if(!/^m=video/.test(e))return e;var r=createCodecMapForMediaSection$1(e);var n=getPayloadTypesInMediaSection(e);var i=new Set(r.get("vp8")||[]);var a=n.some((function(e){return i.has(e)}));return a?sv(e,t):e}))).concat("").join("\r\n")}
/**
 * Get the matching Payload Types in an m= section for a particular peer codec.
 * @param {Codec} peerCodec
 * @param {PT} peerPt
 * @param {Map<Codec, PT>} codecsToPts
 * @param {string} section
 * @param {string} peerSection
 * @returns {Array<PT>}
 */function getMatchingPayloadTypes(e,t,r,n,i){var a=r.get(e)||[];if(a.length<=1)return a;var o=getFmtpAttributesForPt(t,i);if(!o)return a;var c=a.find((function(e){var t=getFmtpAttributesForPt(e,n);return t&&Object.keys(o).every((function(e){return o[e]===t[e]}))}));return"number"===typeof c?[c]:a}
/**
 * Filter codecs in an m= section based on its peer m= section from the other peer.
 * @param {string} section
 * @param {Map<string, string>} peerMidsToMediaSections
 * @param {Array<string>} codecsToRemove
 * @returns {string}
 */function filterCodecsInMediaSection(e,t,r){if(!/^m=(audio|video)/.test(e))return e;var n=getMidForMediaSection(e);var i=n&&t.get(n);if(!i)return e;var a=createPtToCodecName$1(i);var o=createCodecMapForMediaSection$1(e);var c=cv(Array.from(a),(function(t){var n=iv(t,2),a=n[0],c=n[1];return"rtx"===c||r.includes(c)?[]:getMatchingPayloadTypes(c,a,o,e,i)}));var s=o.get("rtx")||[];c=c.concat(s.filter((function(t){var r=getFmtpAttributesForPt(t,e);return r&&c.includes(r.apt)})));var u=e.split("\r\n").filter((function(e){var t=e.match(/^a=(rtpmap|fmtp|rtcp-fb):(.+) .+$/);var r=t&&t[2];return!t||r&&c.includes(parseInt(r,10))}));var l=getPayloadTypesInMediaSection(e).filter((function(e){return c.includes(e)}));return setPayloadTypesInMediaSection(l,u.join("\r\n"))}
/**
 * Filter local codecs based on the remote SDP.
 * @param {string} localSdp
 * @param {string} remoteSdp
 * @returns {string} - Updated local SDP
 */function filterLocalCodecs$1(e,t){var r=getMediaSections$3(e);var n=e.split("\r\nm=")[0];var i=createMidToMediaSectionMap(t);return[n].concat(r.map((function(e){return filterCodecsInMediaSection(e,i,[])}))).join("\r\n")}
/**
 * Return a new SDP string after reverting simulcast for non vp8 sections in remote sdp.
 * @param localSdp - simulcast enabled local sdp
 * @param localSdpWithoutSimulcast - local sdp before simulcast was set
 * @param remoteSdp - remote sdp
 * @param revertForAll - when true simulcast will be reverted for all codecs. when false it will be reverted
 *  only for non-vp8 codecs.
 * @return {string} Updated SDP string
 */function revertSimulcast$1(e,t,r,n){void 0===n&&(n=false);var i=createMidToMediaSectionMap(r);var a=createMidToMediaSectionMap(t);var o=getMediaSections$3(e);var c=e.split("\r\nm=")[0];return[c].concat(o.map((function(e){e=e.replace(/\r\n$/,"");if(!/^m=video/.test(e))return e;var t=e.match(/^a=mid:(.+)$/m);var r=t&&t[1];if(!r)return e;var o=i.get(r);var c=createPtToCodecName$1(o);var s=getPayloadTypesInMediaSection(o);var u=s.length&&"vp8"===c.get(s[0]);var l=n||!u;return l?a.get(r).replace(/\r\n$/,""):e}))).concat("").join("\r\n")}
/**
 * Add or rewrite MSIDs for new m= sections in the given SDP with their corresponding
 * local MediaStreamTrack IDs. These can be different when previously removed MediaStreamTracks
 * are added back (or Track IDs may not be present in the SDPs at all once browsers implement
 * the latest WebRTC spec).
 * @param {string} sdp
 * @param {Map<string, Track.ID>} activeMidsToTrackIds
 * @param {Map<Track.Kind, Array<Track.ID>>} trackIdsByKind
 * @returns {string}
 */function addOrRewriteNewTrackIds$1(e,t,r){var n=Array.from(r).reduce((function(r,n){var i=iv(n,2),a=i[0],o=i[1];var c=getMediaSections$3(e,a,"send(only|recv)");var s=c.map(getMidForMediaSection).filter((function(e){return!t.has(e)}));s.forEach((function(e,t){return r.set(e,o[t])}));return r}),new Map);return addOrRewriteTrackIds$1(e,n)}
/**
 * Add or rewrite MSIDs in the given SDP with their corresponding local MediaStreamTrack IDs.
 * These IDs need not be the same (or Track IDs may not be present in the SDPs at all once
 * browsers implement the latest WebRTC spec).
 * @param {string} sdp
 * @param {Map<string, Track.ID>} midsToTrackIds
 * @returns {string}
 */function addOrRewriteTrackIds$1(e,t){var r=getMediaSections$3(e);var n=e.split("\r\nm=")[0];return[n].concat(r.map((function(e){if(!/^m=(audio|video)/.test(e))return e;var r=getMidForMediaSection(e);if(!r)return e;var n=t.get(r);if(!n)return e;var i=(e.match(/^a=msid:(.+)$/m)||[])[1];if(!i)return e;var a=iv(i.split(" "),2),o=a[0],c=a[1];var s=new RegExp("msid:"+o+(c?" "+c:"")+"$","gm");return e.replace(s,"msid:"+o+" "+n)}))).join("\r\n")}
/**
 * Removes specified ssrc attributes from given sdp.
 * @param {string} sdp
 * @param {Array<string>} ssrcAttributesToRemove
 * @returns {string}
 */function removeSSRCAttributes$1(e,t){return e.split("\r\n").filter((function(e){return!t.find((function(t){return new RegExp("a=ssrc:.*"+t+":","g").test(e)}))})).join("\r\n")}
/**
 * Disable RTX in a given sdp.
 * @param {string} sdp
 * @returns {string} sdp without RTX
 */function disableRtx$1(e){var t=getMediaSections$3(e);var r=e.split("\r\nm=")[0];return[r].concat(t.map((function(e){if(!/^m=video/.test(e))return e;var t=createCodecMapForMediaSection$1(e);var r=t.get("rtx");if(!r)return e;var n=new Set(getPayloadTypesInMediaSection(e));r.forEach((function(e){return n.delete(e)}));var i=e.match(/a=ssrc-group:FID [0-9]+ ([0-9]+)/);var a=i&&i[1];var o=[/^a=fmtp:.+ apt=.+$/,/^a=rtpmap:.+ rtx\/.+$/,/^a=ssrc-group:.+$/].concat(a?[new RegExp("^a=ssrc:"+a+" .+$")]:[]);e=e.split("\r\n").filter((function(e){return o.every((function(t){return!t.test(e)}))})).join("\r\n");return setPayloadTypesInMediaSection(Array.from(n),e)}))).join("\r\n")}
/**
 * Generate an a=fmtp: line from the given payload type and attributes.
 * @param {PT} pt
 * @param {*} fmtpAttrs
 * @returns {string}
 */function generateFmtpLineFromPtAndAttributes(e,t){var r=Object.entries(t).map((function(e){var t=iv(e,2),r=t[0],n=t[1];return r+"="+n})).join(";");return"a=fmtp:"+e+" "+r}
/**
 * Enable DTX for opus in the m= sections for the given MIDs.`
 * @param {string} sdp
 * @param {Array<string>} [mids] - If not specified, enables opus DTX for all
 *   audio m= lines.
 * @returns {string}
 */function enableDtxForOpus$1(e,t){var r=getMediaSections$3(e);var n=e.split("\r\nm=")[0];t=t||r.filter((function(e){return/^m=audio/.test(e)})).map(getMidForMediaSection);return[n].concat(r.map((function(e){if(!/^m=audio/.test(e))return e;var r=createCodecMapForMediaSection$1(e);var n=r.get("opus");if(!n)return e;var i=getFmtpAttributesForPt(n,e);if(!i)return e;var a=generateFmtpLineFromPtAndAttributes(n,i);var o=new RegExp(a);var c=getMidForMediaSection(e);t.includes(c)?i.usedtx=1:delete i.usedtx;var s=generateFmtpLineFromPtAndAttributes(n,i);return e.replace(o,s)}))).join("\r\n")}nv.addOrRewriteNewTrackIds=addOrRewriteNewTrackIds$1;nv.addOrRewriteTrackIds=addOrRewriteTrackIds$1;nv.createCodecMapForMediaSection=createCodecMapForMediaSection$1;nv.createPtToCodecName=createPtToCodecName$1;nv.disableRtx=disableRtx$1;nv.enableDtxForOpus=enableDtxForOpus$1;nv.filterLocalCodecs=filterLocalCodecs$1;nv.getMediaSections=getMediaSections$3;nv.removeSSRCAttributes=removeSSRCAttributes$1;nv.revertSimulcast=revertSimulcast$1;nv.setCodecPreferences=setCodecPreferences$1;nv.setSimulcast=setSimulcast$1;var lv={};var dv=function(){function Filter(e){e=Object.assign({getKey:function defaultGetKey(e){return e},getValue:function defaultGetValue(e){return e},isLessThanOrEqualTo:function defaultIsLessThanOrEqualTo(e,t){return e<=t}},e);Object.defineProperties(this,{_getKey:{value:e.getKey},_getValue:{value:e.getValue},_isLessThanOrEqualTo:{value:e.isLessThanOrEqualTo},_map:{value:new Map}})}Filter.prototype.toMap=function(){return new Map(this._map)};Filter.prototype.updateAndFilter=function(e){return e.filter(this.update,this)};Filter.prototype.update=function(e){var t=this._getKey(e);var r=this._getValue(e);if(this._map.has(t)&&this._isLessThanOrEqualTo(r,this._map.get(t)))return false;this._map.set(t,r);return true};return Filter}();lv=dv;var pv=lv;var fv={};var vv=pv;var hv=function(){function IceBox(){Object.defineProperties(this,{_filter:{value:new vv({getKey:function getKey(e){return e.ufrag},isLessThanOrEqualTo:function isLessThanOrEqualTo(e,t){return e.revision<=t.revision}})},_ufrag:{writable:true,value:null},ufrag:{enumerable:true,get:function(){return this._ufrag}}})}
/**
   * Set the ICE username fragment on the {@link IceBox}. This method returns any
   * ICE candidates associated with the username fragment.
   * @param {string} ufrag
   * @returns {Array<RTCIceCandidateInit>}
   */IceBox.prototype.setUfrag=function(e){this._ufrag=e;var t=this._filter.toMap().get(e);return t?t.candidates:[]};
/**
   * Update the {@link IceBox}. This method returns any new ICE candidates
   * associated with the current username fragment.
   * @param {object} iceState
   * @returns {Array<RTCIceCandidateInit>}
   */IceBox.prototype.update=function(e){e.candidates=e.candidates||[];var t=this._filter.toMap().get(e.ufrag);var r=t?t.candidates:[];return this._filter.update(e)&&this._ufrag===e.ufrag?e.candidates.slice(r.length):[]};return IceBox}();fv=hv;var _v=fv;var mv={};var gv=v,yv=gv.ICE_ACTIVITY_CHECK_PERIOD_MS,bv=gv.ICE_INACTIVITY_THRESHOLD_MS;var kv=function(){
/**
   * Construct an {@link IceConnectionMonitor}.
   * @param {RTCPeerConnection} peerConnection
   * @param {object} [options]
   */
function IceConnectionMonitor(e,t){t=Object.assign({activityCheckPeriodMs:yv,inactivityThresholdMs:bv},t);Object.defineProperties(this,{_activityCheckPeriodMs:{value:t.activityCheckPeriodMs},_inactivityThresholdMs:{value:t.inactivityThresholdMs},_lastActivity:{value:null,writable:true},_peerConnection:{value:e},_timer:{value:null,writable:true},_onIceConnectionStateChanged:{value:null,writable:true}})}IceConnectionMonitor.prototype._getActivePairStat=function(e){var t=Array.from(e.values());var r=t.find((function(e){return"candidate-pair"===e.type&&e.nominated}));return r||{bytesReceived:0,timestamp:Math.round((new Date).getTime())}};
/**
   * Get ICE connection stats, and extract received and send bytes.
   * @returns Promise<?RTCIceCandidatePairStats>
   */IceConnectionMonitor.prototype._getIceConnectionStats=function(){var e=this;return this._peerConnection.getStats().then((function(t){return e._getActivePairStat(t)})).catch((function(){return null}))};IceConnectionMonitor.prototype._scheduleInactivityCallback=function(e){var t=this;if(e&&null===this._onIceConnectionStateChanged){this._onIceConnectionStateChanged=function(){"disconnected"===t._peerConnection.iceConnectionState&&e()};this._peerConnection.addEventListener("iceconnectionstatechange",this._onIceConnectionStateChanged)}else if(!e&&this._onIceConnectionStateChanged){this._peerConnection.removeEventListener("iceconnectionstatechange",this._onIceConnectionStateChanged);this._onIceConnectionStateChanged=null}};
/**
   * Start monitoring the ICE connection.
   * Monitors bytes received on active ice connection pair,
   * invokes onIceConnectionInactive when inactivity is detected.
   * @param {function} onIceConnectionInactive
   */IceConnectionMonitor.prototype.start=function(e){var t=this;this.stop();this._timer=setInterval((function(){t._getIceConnectionStats().then((function(r){if(r){if(!t._lastActivity||t._lastActivity.bytesReceived!==r.bytesReceived){t._lastActivity=r;t._scheduleInactivityCallback(null)}r.timestamp-t._lastActivity.timestamp>=t._inactivityThresholdMs&&("disconnected"===t._peerConnection.iceConnectionState?e():null===t._onIceConnectionStateChanged&&t._scheduleInactivityCallback(e))}}))}),this._activityCheckPeriodMs)};
/**
   * Stop monitoring the ICE connection state.
   * @returns {void}
   */IceConnectionMonitor.prototype.stop=function(){this._scheduleInactivityCallback(null);if(null!==this._timer){clearInterval(this._timer);this._timer=null;this._lastActivity=null}};return IceConnectionMonitor}();mv=kv;var Sv=mv;var Tv="default"in e?e.default:e;var wv={};var Cv=wv&&wv.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Pv=Tv.EventEmitter;var Ov=function(e){Cv(DataTransport,e);
/**
   * Construct a {@link DataTransport}.
   * @param {RTCDataChannel} dataChannel
   */function DataTransport(t){var r=e.call(this)||this;Object.defineProperties(r,{_dataChannel:{value:t},_messageQueue:{value:[]}});t.addEventListener("open",(function(){r._messageQueue.splice(0).forEach((function(e){return r._publish(e)}))}));t.addEventListener("message",(function(e){var t=e.data;try{var n=JSON.parse(t);r.emit("message",n)}catch(e){}}));r.publish({type:"ready"});return r}
/**
   * @param message
   * @private
   */DataTransport.prototype._publish=function(e){var t=JSON.stringify(e);try{this._dataChannel.send(t)}catch(e){}};
/**
   * Publish a message. Returns true if calling the method resulted in
   * publishing (or eventually publishing) the update.
   * @param {object} message
   * @returns {boolean}
   */DataTransport.prototype.publish=function(e){var t=this._dataChannel;if("closing"===t.readyState||"closed"===t.readyState)return false;if("connecting"===t.readyState){this._messageQueue.push(e);return true}this._publish(e);return true};return DataTransport}(Pv);
/**
 * The {@link DataTransport} received a message.
 * @event DataTransport#message
 * @param {object} message
 */wv=Ov;var Ev=wv;var Rv={};var Lv=Rv&&Rv.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Mv=ta;var Iv=Ev;var jv=function(e){Lv(DataTrackReceiver,e);
/**
   * Construct an {@link DataTrackReceiver}.
   * @param {RTCDataChannel} dataChannel
   */function DataTrackReceiver(t){var r=e.call(this,t.label,t.maxPacketLifeTime,t.maxRetransmits,t.ordered)||this;Object.defineProperties(r,{_dataChannel:{value:t}});t.binaryType="arraybuffer";t.addEventListener("message",(function(e){r.emit("message",e.data)}));t.addEventListener("close",(function(){r.emit("close")}));return r}DataTrackReceiver.prototype.stop=function(){this._dataChannel.close();e.prototype.stop.call(this)};
/**
   * Create a {@link DataTransport} from the {@link DataTrackReceiver}.
   * @returns {DataTransport}
   */DataTrackReceiver.prototype.toDataTransport=function(){return new Iv(this._dataChannel)};return DataTrackReceiver}(Mv);
/**
 * @event DataTrackReceiver#message
 * @param {string|ArrayBuffer} data
 */Rv=jv;var Av=Rv;var Dv={};var xv=Dv&&Dv.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Vv=Bn;var Nv=function(e){xv(MediaTrackReceiver,e);
/**
   * Construct a {@link MediaTrackReceiver}.
   * @param {Track.ID} id - The MediaStreamTrack ID signaled through RSP/SDP
   * @param {MediaStreamTrack} mediaStreamTrack - The remote MediaStreamTrack
   */function MediaTrackReceiver(t,r){return e.call(this,t,r)||this}return MediaTrackReceiver}(Vv);Dv=Nv;var Fv=Dv;var Bv={};var Uv=nv.getMediaSections;var $v=function(){function TrackMatcher(){Object.defineProperties(this,{_midsToTrackIds:{value:new Map,writable:true}})}
/**
   * Match a given MediaStreamTrack with its ID.
   * @param {RTCTrackEvent} event
   * @returns {?Track.ID}
   */TrackMatcher.prototype.match=function(e){return this._midsToTrackIds.get(e.transceiver.mid)||null};
/**
   * Update the {@link TrackMatcher} with a new SDP.
   * @param {string} sdp
   */TrackMatcher.prototype.update=function(e){var t=Uv(e,"(audio|video)");this._midsToTrackIds=t.reduce((function(e,t){var r=t.match(/^a=mid:(.+)$/m)||[];var n=t.match(/^a=msid:.+ (.+)$/m)||[];var i=r[1];var a=n[1];return i&&a?e.set(i,a):e}),this._midsToTrackIds)};return TrackMatcher}();Bv=$v;var Hv=Bv;var Wv={};var Qv=lr.RTCSessionDescription;var qv=nv,zv=qv.createPtToCodecName,Gv=qv.getMediaSections;
/**
 * An RTX payload type
 * @typedef {PT} RtxPT
 */
/**
 * A non-RTX payload type
 * @typedef {PT} NonRtxPT
 */
/**
 * A Set with at least one element
 * @typedef {Set} NonEmptySet
 */
/**
 * Apply the workaround for Issue 8329 to an RTCSessionDescriptionInit.
 * @param {RTCSessionDescriptionInit} description
 * @returns {RTCSessionDescription} newDescription
 */function workaround(e){var t={type:e.type};"rollback"!==e.type&&(t.sdp=sdpWorkaround(e.sdp));return new Qv(t)}
/**
 * @param {string} sdp
 * @returns {string} newSdp
 */function sdpWorkaround(e){var t=Gv(e);var r=e.split("\r\nm=")[0];return[r].concat(t.map(mediaSectionWorkaround)).join("\r\n")}
/**
 * @param {string} mediaSection
 * @returns {string} newMediaSection
 */function mediaSectionWorkaround(e){var t=zv(e);e=deleteDuplicateRtxPts(e,t);var r=createCodecNameToPts(t);var n=r.get("rtx")||new Set;var i=new Set;var a=createRtxPtToAssociatedPt(e,t,n,i);var o=createAssociatedPtToRtxPt(a,i);var c=Array.from(i);var s=["h264","vp8","vp9"];var u=s.reduce((function(e,t){var n=r.get(t)||new Set;return Array.from(n).reduce((function(e,t){return o.has(t)?e:e.add(t)}),e)}),new Set);u.forEach((function(t){if(c.length){var r=c.shift();e=deleteFmtpAttributesForRtxPt(e,r);e=addFmtpAttributeForRtxPt(e,r,t)}}));c.forEach((function(t){e=deleteFmtpAttributesForRtxPt(e,t);e=deleteRtpmapAttributesForRtxPt(e,t)}));return e}
/**
 * @param {string} mediaSection
 * @param {Map<PT, Codec>} ptToCodecName
 * @returns {string} newMediaSection
 */function deleteDuplicateRtxPts(e,t){return Array.from(t.keys()).reduce((function(e,r){var n=new RegExp("^a=rtpmap:"+r+" rtx.+$","gm");return(e.match(n)||[]).slice("rtx"===t.get(r)?1:0).reduce((function(e,t){var n=new RegExp("\r\n"+t);var i=new RegExp("\r\na=fmtp:"+r+" apt=[0-9]+");return e.replace(n,"").replace(i,"")}),e)}),e)}
/**
 * @param {Map<PT, Codec>} ptToCodecName
 * @returns {Map<string, NonEmptySet<PT>>} codecNameToPts
 */function createCodecNameToPts(e){var t=new Map;e.forEach((function(e,r){var n=t.get(e)||new Set;return t.set(e,n.add(r))}));return t}
/**
 * @param {string} mediaSection
 * @param {Map<PT, Codec>} ptToCodecName
 * @param {Set<RtxPT>} rtxPts
 * @param {Set<RtxPT>} invalidRtxPts
 * @returns {Map<RtxPT, NonRtxPT>} rtxPtToAssociatedPt
 */function createRtxPtToAssociatedPt(e,t,r,n){return Array.from(r).reduce((function(r,i){var a=new RegExp("a=fmtp:"+i+" apt=(\\d+)");var o=e.match(a);if(!o){n.add(i);return r}var c=Number.parseInt(o[1]);if(!t.has(c)){n.add(i);return r}var s=t.get(c);if("rtx"===s){n.add(i);return r}return r.set(i,c)}),new Map)}
/**
 * @param {string} mediaSection
 * @param {Map<RtxPT, NonRtxPT>} rtxPtToAssociatedPt
 * @param {Set<RtxPT>} invalidRtxPts
 * @returns {Map<NonRtxPT, RtxPT>} associatedPtToRtxPt
 */function createAssociatedPtToRtxPt(e,t){var r=Array.from(e).reduce((function(e,t){var r=t[0];var n=t[1];var i=e.get(n)||new Set;return e.set(n,i.add(r))}),new Map);return Array.from(r).reduce((function(e,r){var n=r[0];var i=Array.from(r[1]);if(i.length>1){i.forEach((function(e){t.add(e)}));return e}return e.set(n,i[0])}),new Map)}
/**
 * @param {string} mediaSection
 * @param {RtxPT} rtxPt
 * @returns {string} newMediaSection
 */function deleteFmtpAttributesForRtxPt(e,t){var r=new RegExp("a=fmtp:"+t+".*\r\n","gm");return e.replace(r,"")}
/**
 * @param {string} mediaSection
 * @param {RtxPT} rtxPt
 * @returns {string} newMediaSection
 */function deleteRtpmapAttributesForRtxPt(e,t){var r=new RegExp("a=rtpmap:"+t+".*\r\n","gm");return e.replace(r,"")}
/**
 * @param {string} mediaSection
 * @param {RtxPT} rtxPt
 * @param {NonRtxPT} pt
 * @returns {string} newMediaSection
 */function addFmtpAttributeForRtxPt(e,t,r){return e.endsWith("\r\n")?e+"a=fmtp:"+t+" apt="+r+"\r\n":e+"\r\na=fmtp:"+t+" apt="+r}Wv=workaround;var Kv=Wv;var Jv={};var Yv=Jv&&Jv.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Xv=Jv&&Jv.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};var Zv=Jv&&Jv.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};var eh=Kf;var th=lr,rh=th.RTCIceCandidate,nh=th.RTCPeerConnection,ih=th.RTCSessionDescription,ah=th.getStats;var oh=U;var ch=v,sh=ch.DEFAULT_ICE_GATHERING_TIMEOUT_MS,uh=ch.DEFAULT_LOG_LEVEL,lh=ch.DEFAULT_SESSION_TIMEOUT_SEC,dh=ch.iceRestartBackoffConfig;var ph=nv,fh=ph.addOrRewriteNewTrackIds,vh=ph.addOrRewriteTrackIds,hh=ph.createCodecMapForMediaSection,_h=ph.disableRtx,mh=ph.enableDtxForOpus,gh=ph.filterLocalCodecs,yh=ph.getMediaSections,bh=ph.removeSSRCAttributes,kh=ph.revertSimulcast,Sh=ph.setCodecPreferences,Th=ph.setSimulcast;var wh=lo;var Ch=tc,Ph=Ch.MediaClientLocalDescFailedError,Oh=Ch.MediaClientRemoteDescFailedError;var Eh=Y,Rh=Eh.buildLogLevels,Lh=Eh.getPlatform,Mh=Eh.isChromeScreenShareTrack,Ih=Eh.oncePerTick,jh=Eh.defer;var Ah=_v;var Dh=Sv;var xh=Av;var Vh=Fv;var Nh=io;var Fh=R;var Bh=Hv;var Uh=Kv;var $h=oh.guessBrowser();var Hh=Lh();var Wh=/android/.test(Hh);var Qh="chrome"===$h;var qh="firefox"===$h;var zh="safari"===$h;var Gh=0;var Kh={open:["closed","updating"],updating:["closed","open"],closed:[]};var Jh=function(e){Yv(PeerConnectionV2,e);
/**
   * Construct a {@link PeerConnectionV2}.
   * @param {string} id
   * @param {EncodingParametersImpl} encodingParameters
   * @param {PreferredCodecs} preferredCodecs
   * @param {object} [options]
   */function PeerConnectionV2(t,r,n,i){var a=e.call(this,"open",Kh)||this;i=Object.assign({enableDscp:false,dummyAudioMediaStreamTrack:null,isChromeScreenShareTrack:Mh,iceServers:[],logLevel:uh,offerOptions:{},revertSimulcast:kh,sessionTimeout:1e3*lh,setCodecPreferences:Sh,setSimulcast:Th,Backoff:eh,IceConnectionMonitor:Dh,RTCIceCandidate:rh,RTCPeerConnection:nh,RTCSessionDescription:ih,Timeout:wh},i);var o=getConfiguration(i);var c=Rh(i.logLevel);var s=i.RTCPeerConnection;if(true===i.enableDscp){i.chromeSpecificConstraints=i.chromeSpecificConstraints||{};i.chromeSpecificConstraints.optional=i.chromeSpecificConstraints.optional||[];i.chromeSpecificConstraints.optional.push({googDscp:true})}var u=i.log?i.log.createLog("webrtc",a):new Fh("webrtc",a,c,i.loggerName);var l=new s(o,i.chromeSpecificConstraints);i.dummyAudioMediaStreamTrack&&l.addTrack(i.dummyAudioMediaStreamTrack);Object.defineProperties(a,{_appliedTrackIdsToAttributes:{value:new Map,writable:true},_dataChannels:{value:new Map},_dataTrackReceivers:{value:new Set},_descriptionRevision:{writable:true,value:0},_didGenerateLocalCandidates:{writable:true,value:false},_enableDscp:{value:i.enableDscp},_encodingParameters:{value:r},_isChromeScreenShareTrack:{value:i.isChromeScreenShareTrack},_iceGatheringFailed:{value:false,writable:true},_iceGatheringTimeout:{value:new i.Timeout((function(){return a._handleIceGatheringTimeout()}),sh,false)},_iceRestartBackoff:{value:new i.Backoff(dh)},_instanceId:{value:++Gh},_isIceConnectionInactive:{writable:true,value:false},_isIceLite:{writable:true,value:false},_isIceRestartBackoffInProgress:{writable:true,value:false},_isRestartingIce:{writable:true,value:false},_lastIceConnectionState:{writable:true,value:null},_lastStableDescriptionRevision:{writable:true,value:0},_localCandidates:{writable:true,value:[]},_localCodecs:{value:new Set},_localCandidatesRevision:{writable:true,value:1},_localDescriptionWithoutSimulcast:{writable:true,value:null},_localDescription:{writable:true,value:null},_localUfrag:{writable:true,value:null},_log:{value:u},_eventObserver:{value:i.eventObserver},_remoteCodecMaps:{value:new Map},_rtpSenders:{value:new Map},_rtpNewSenders:{value:new Set},_iceConnectionMonitor:{value:new i.IceConnectionMonitor(l)},_mediaTrackReceivers:{value:new Set},_needsAnswer:{writable:true,value:false},_negotiationRole:{writable:true,value:null},_offerOptions:{writable:true,value:i.offerOptions},_onEncodingParametersChanged:{value:Ih((function(){a._needsAnswer||updateEncodingParameters(a)}))},_peerConnection:{value:l},_preferredAudioCodecs:{value:n.audio},_preferredVideoCodecs:{value:n.video},_shouldApplyDtx:{value:n.audio.every((function(e){var t=e.codec;return"opus"!==t}))||n.audio.some((function(e){var t=e.codec,r=e.dtx;return"opus"===t&&r}))},_queuedDescription:{writable:true,value:null},_iceReconnectTimeout:{value:new i.Timeout((function(){u.debug("ICE reconnect timed out");a.close()}),i.sessionTimeout,false)},_recycledTransceivers:{value:{audio:[],video:[]}},_replaceTrackPromises:{value:new Map},_remoteCandidates:{writable:true,value:new Ah},_setCodecPreferences:{value:qh&&Wh&&n.video[0]&&"h264"!==n.video[0].codec.toLowerCase()?function(e){return e}:i.setCodecPreferences},_setSimulcast:{value:i.setSimulcast},_revertSimulcast:{value:i.revertSimulcast},_RTCIceCandidate:{value:i.RTCIceCandidate},_RTCPeerConnection:{value:i.RTCPeerConnection},_RTCSessionDescription:{value:i.RTCSessionDescription},_shouldOffer:{writable:true,value:false},_shouldRestartIce:{writable:true,value:false},_trackIdsToAttributes:{value:new Map,writable:true},_trackMatcher:{writable:true,value:null},_mediaTrackSenderToPublisherHints:{value:new Map},id:{enumerable:true,value:t}});r.on("changed",a._onEncodingParametersChanged);l.addEventListener("connectionstatechange",a._handleConnectionStateChange.bind(a));l.addEventListener("datachannel",a._handleDataChannelEvent.bind(a));l.addEventListener("icecandidate",a._handleIceCandidateEvent.bind(a));l.addEventListener("iceconnectionstatechange",a._handleIceConnectionStateChange.bind(a));l.addEventListener("icegatheringstatechange",a._handleIceGatheringStateChange.bind(a));l.addEventListener("signalingstatechange",a._handleSignalingStateChange.bind(a));l.addEventListener("track",a._handleTrackEvent.bind(a));var d=a;a.on("stateChanged",(function stateChanged(e){if("closed"===e){d.removeListener("stateChanged",stateChanged);d._dataChannels.forEach((function(e,t){d.removeDataTrackSender(t)}))}}));return a}PeerConnectionV2.prototype.toString=function(){return"[PeerConnectionV2 #"+this._instanceId+": "+this.id+"]"};PeerConnectionV2.prototype.setEffectiveAdaptiveSimulcast=function(e){this._log.debug("Setting setEffectiveAdaptiveSimulcast: ",e);this._preferredVideoCodecs.forEach((function(t){"adaptiveSimulcast"in t&&(t.adaptiveSimulcast=e)}))};Object.defineProperty(PeerConnectionV2.prototype,"_shouldApplySimulcast",{get:function(){if(!Qh&&!zh)return false;var e=this._preferredVideoCodecs.some((function(e){return"vp8"===e.codec.toLowerCase()&&e.simulcast&&false!==e.adaptiveSimulcast}));return e},enumerable:false,configurable:true});Object.defineProperty(PeerConnectionV2.prototype,"connectionState",{get:function(){return"failed"===this.iceConnectionState?"failed":this._peerConnection.connectionState||this.iceConnectionState},enumerable:false,configurable:true});Object.defineProperty(PeerConnectionV2.prototype,"iceConnectionState",{get:function(){return this._isIceConnectionInactive&&"disconnected"===this._peerConnection.iceConnectionState||this._iceGatheringFailed?"failed":this._peerConnection.iceConnectionState},enumerable:false,configurable:true});Object.defineProperty(PeerConnectionV2.prototype,"isApplicationSectionNegotiated",{
/**
     * Whether the {@link PeerConnectionV2} has negotiated or is in the process
     * of negotiating the application m= section.
     * @returns {boolean}
     */
get:function(){return"closed"===this._peerConnection.signalingState||!!this._peerConnection.localDescription&&yh(this._peerConnection.localDescription.sdp,"application").length>0},enumerable:false,configurable:true});Object.defineProperty(PeerConnectionV2.prototype,"_isAdaptiveSimulcastEnabled",{
/**
     * Whether adaptive simulcast is enabled.
     * @returns {boolean}
     */
get:function(){var e=this._preferredVideoCodecs.find((function(e){return"adaptiveSimulcast"in e}));return e&&true===e.adaptiveSimulcast},enumerable:false,configurable:true});
/**
   * @param {MediaStreamTrack} track
   * @param {Array<RTCRtpEncodingParameters>} encodings
   * @param {boolean} trackReplaced
   * @returns {boolean} true if encodings were updated.
   */PeerConnectionV2.prototype._maybeUpdateEncodings=function(e,t,r){void 0===r&&(r=false);if("video"!==e.kind||"ended"===e.readyState)return false;var n=e.getSettings(),i=n.height,a=n.width;if("number"!==typeof i||"number"!==typeof a)return false;var o=oh.guessBrowser();if("safari"===o||"chrome"===o&&this._isAdaptiveSimulcastEnabled){this._updateEncodings(e,t,r);return true}return false};
/**
   * Configures with default encodings depending on track type and resolution.
   * Default configuration sets some encodings to disabled, and for others set scaleResolutionDownBy
   * values. When trackReplaced is set to true, it will clear 'active' for any encodings that
   * needs to be enabled.
   * @param {MediaStreamTrack} track
   * @param {Array<RTCRtpEncodingParameters>} encodings
   * @param {boolean} trackReplaced
   */PeerConnectionV2.prototype._updateEncodings=function(e,t,r){if(this._isChromeScreenShareTrack(e)){var n=[{scaleResolutionDownBy:1},{scaleResolutionDownBy:1}];t.forEach((function(e,t){var i=n[t];if(i){e.scaleResolutionDownBy=i.scaleResolutionDownBy;r&&delete e.active}else{e.active=false;delete e.scaleResolutionDownBy}}))}else{var i=e.getSettings(),a=i.width,o=i.height;var c=[{pixels:518400,maxActiveLayers:3},{pixels:129600,maxActiveLayers:2},{pixels:0,maxActiveLayers:1}];var s=a*o;var u=c.find((function(e){return s>=e.pixels}));var l=Math.min(t.length,u.maxActiveLayers);t.forEach((function(e,t){var n=t<l;if(n){e.scaleResolutionDownBy=1<<l-t-1;r&&(e.active=true)}else{e.active=false;delete e.scaleResolutionDownBy}}))}this._log.debug("_updateEncodings:",t.map((function(e,t){var r=e.active,n=e.scaleResolutionDownBy;return"["+t+": "+r+", "+(n||0)+"]"})).join(", "))};
/**
   * Add an ICE candidate to the {@link PeerConnectionV2}.
   * @private
   * @param {object} candidate
   * @returns {Promise<void>}
   */PeerConnectionV2.prototype._addIceCandidate=function(e){var t=this;return Promise.resolve().then((function(){e=new t._RTCIceCandidate(e);return t._peerConnection.addIceCandidate(e)})).catch((function(r){t._log.warn("Failed to add RTCIceCandidate "+(e?'"'+e.candidate+'"':"null")+": "+r.message)}))};
/**
   * Add ICE candidates to the {@link PeerConnectionV2}.
   * @private
   * @param {Array<object>} candidates
   * @returns {Promise<void>}
   */PeerConnectionV2.prototype._addIceCandidates=function(e){return Promise.all(e.map(this._addIceCandidate,this)).then((function(){}))};
/**
   * Add a new RTCRtpTransceiver or update an existing RTCRtpTransceiver for the
   * given MediaStreamTrack.
   * @private
   * @param {MediaStreamTrack} track
   * @returns {RTCRtpTransceiver}
   */PeerConnectionV2.prototype._addOrUpdateTransceiver=function(e){var t=this;var r=takeRecycledTransceiver(this,e.kind);if(r&&r.sender){var n=r.sender.track?r.sender.track.id:null;n&&this._log.warn("Reusing transceiver: "+r.mid+"] "+n+" => "+e.id);this._replaceTrackPromises.set(r,r.sender.replaceTrack(e).then((function(){r.direction="sendrecv"}),(function(){})).finally((function(){t._replaceTrackPromises.delete(r)})));return r}return this._peerConnection.addTransceiver(e)};
/**
   * Check the {@link IceBox}.
   * @private
   * @param {RTCSessionDescriptionInit} description
   * @returns {Promise<void>}
   */PeerConnectionV2.prototype._checkIceBox=function(e){var t=getUfrag(e);if(!t)return Promise.resolve();var r=this._remoteCandidates.setUfrag(t);return this._addIceCandidates(r)};
/**
   * Create an answer and set it on the {@link PeerConnectionV2}.
   * @private
   * @param {RTCSessionDescriptionInit} offer
   * @returns {Promise<boolean>}
   */PeerConnectionV2.prototype._answer=function(e){var t=this;return Promise.resolve().then((function(){t._negotiationRole||(t._negotiationRole="answerer");return t._setRemoteDescription(e)})).catch((function(){throw new Oh})).then((function(){return t._peerConnection.createAnswer()})).then((function(r){r=qh?new t._RTCSessionDescription({sdp:_h(r.sdp),type:r.type}):Uh(r);var n=bh(r.sdp,["mslabel","label"]);if(t._shouldApplySimulcast){var i=n;n=t._setSimulcast(i,t._trackIdsToAttributes);n=t._revertSimulcast(n,i,e.sdp)}n=n.replace(/42e015/g,"42e01f");return t._setLocalDescription({type:r.type,sdp:n})})).then((function(){return t._checkIceBox(e)})).then((function(){return t._queuedDescription&&t._updateDescription(t._queuedDescription)})).then((function(){t._queuedDescription=null;return t._maybeReoffer(t._peerConnection.localDescription)})).catch((function(e){var r=e instanceof Oh?e:new Ph;t._publishMediaWarning({message:"Failed to _answer",code:r.code,error:e});throw r}))};
/**
   * Close the underlying RTCPeerConnection. Returns false if the
   * RTCPeerConnection was already closed.
   * @private
   * @returns {boolean}
   */PeerConnectionV2.prototype._close=function(){this._iceConnectionMonitor.stop();if("closed"!==this._peerConnection.signalingState){this._peerConnection.close();this.preempt("closed");this._encodingParameters.removeListener("changed",this._onEncodingParametersChanged);return true}return false};
/**
   * Handle a "connectionstatechange" event.
   * @private
   * @returns {void}
   */PeerConnectionV2.prototype._handleConnectionStateChange=function(){this.emit("connectionStateChanged")};
/**
   * Handle a "datachannel" event.
   * @private
   * @param {RTCDataChannelEvent} event
   * @returns {void}
   */PeerConnectionV2.prototype._handleDataChannelEvent=function(e){var t=this;var r=e.channel;var n=new xh(r);this._dataTrackReceivers.add(n);r.addEventListener("close",(function(){t._dataTrackReceivers.delete(n)}));this.emit("trackAdded",n)};
/**
   * Handle a glare scenario on the {@link PeerConnectionV2}.
   * @private
   * @param {RTCSessionDescriptionInit} offer
   * @returns {Promise<void>}
   */PeerConnectionV2.prototype._handleGlare=function(e){var t=this;this._log.debug("Glare detected; rolling back");if(this._isRestartingIce){this._log.debug("An ICE restart was in progress; we'll need to restart ICE again after rolling back");this._isRestartingIce=false;this._shouldRestartIce=true}return Promise.resolve().then((function(){t._trackIdsToAttributes=new Map(t._appliedTrackIdsToAttributes);return t._setLocalDescription({type:"rollback"})})).then((function(){t._needsAnswer=false;return t._answer(e)})).then((function(e){return e?Promise.resolve():t._offer()}))};PeerConnectionV2.prototype._publishMediaWarning=function(e){var t=e.message,r=e.code,n=e.error,i=e.sdp;this._eventObserver.emit("event",{level:"warning",name:"error",group:"media",payload:{message:t,code:r,context:JSON.stringify({error:n.message,sdp:i})}})};
/**
   * Handle an ICE candidate event.
   * @private
   * @param {Event} event
   * @returns {void}
   */PeerConnectionV2.prototype._handleIceCandidateEvent=function(e){if(e.candidate){this._log.debug("Clearing ICE gathering timeout");this._didGenerateLocalCandidates=true;this._iceGatheringTimeout.clear();this._localCandidates.push(e.candidate)}var t={ice:{candidates:this._isIceLite?[]:this._localCandidates.slice(),ufrag:this._localUfrag},id:this.id};e.candidate||(t.ice.complete=true);if(!(this._isIceLite&&e.candidate)){t.ice.revision=this._localCandidatesRevision++;this.emit("candidates",t)}};
/**
   * Handle an ICE connection state change event.
   * @private
   * @returns {void}
   */PeerConnectionV2.prototype._handleIceConnectionStateChange=function(){var e=this;var t=this._peerConnection.iceConnectionState;var r=["connected","completed"].includes(t);var n=this._log;n.debug('ICE connection state is "'+t+'"');if(r){this._iceReconnectTimeout.clear();this._iceRestartBackoff.reset()}if("failed"===this._lastIceConnectionState||"failed"!==t||this._shouldRestartIce||this._isRestartingIce)["disconnected","failed"].includes(this._lastIceConnectionState)&&r&&n.debug("ICE reconnected");else{n.warn("ICE failed");this._initiateIceRestartBackoff()}if("connected"===t){this._isIceConnectionInactive=false;this._iceConnectionMonitor.start((function(){e._iceConnectionMonitor.stop();if(!e._shouldRestartIce&&!e._isRestartingIce){n.warn("ICE Connection Monitor detected inactivity");e._isIceConnectionInactive=true;e._initiateIceRestartBackoff();e.emit("iceConnectionStateChanged");e.emit("connectionStateChanged")}}))}else if(!["disconnected","completed"].includes(t)){this._iceConnectionMonitor.stop();this._isIceConnectionInactive=false}this._lastIceConnectionState=t;this.emit("iceConnectionStateChanged")};
/**
   * Handle ICE gathering timeout.
   * @private
   * @returns {void}
   */PeerConnectionV2.prototype._handleIceGatheringTimeout=function(){this._log.warn("ICE failed to gather any local candidates");this._iceGatheringFailed=true;this._initiateIceRestartBackoff();this.emit("iceConnectionStateChanged");this.emit("connectionStateChanged")};
/**
   * Handle an ICE gathering state change event.
   * @private
   * @returns {void}
   */PeerConnectionV2.prototype._handleIceGatheringStateChange=function(){var e=this._peerConnection.iceGatheringState;var t=this._log;t.debug('ICE gathering state is "'+e+'"');var r=this._iceGatheringTimeout,n=r.delay,i=r.isSet;if("gathering"===e&&!this._didGenerateLocalCandidates&&!i){t.debug("Starting ICE gathering timeout: "+n);this._iceGatheringFailed=false;this._iceGatheringTimeout.start()}};
/**
   * Handle a signaling state change event.
   * @private
   * @returns {void}
   */PeerConnectionV2.prototype._handleSignalingStateChange=function(){"stable"===this._peerConnection.signalingState&&(this._appliedTrackIdsToAttributes=new Map(this._trackIdsToAttributes))};
/**
   * Handle a track event.
   * @private
   * @param {RTCTrackEvent} event
   * @returns {void}
   */PeerConnectionV2.prototype._handleTrackEvent=function(e){var t=this;var r=this._peerConnection.remoteDescription?this._peerConnection.remoteDescription.sdp:null;this._trackMatcher=this._trackMatcher||new Bh;this._trackMatcher.update(r);var n=e.track;var i=this._trackMatcher.match(e)||n.id;var a=new Vh(i,n);this._mediaTrackReceivers.forEach((function(e){e.track.id===a.track.id&&t._mediaTrackReceivers.delete(e)}));this._mediaTrackReceivers.add(a);n.addEventListener("ended",(function(){return t._mediaTrackReceivers.delete(a)}));this.emit("trackAdded",a)};
/**
   * Initiate ICE Restart.
   * @private
   * @returns {void}
   */PeerConnectionV2.prototype._initiateIceRestart=function(){if("closed"!==this._peerConnection.signalingState){var e=this._log;e.warn("Attempting to restart ICE");this._didGenerateLocalCandidates=false;this._isIceRestartBackoffInProgress=false;this._shouldRestartIce=true;var t=this._iceReconnectTimeout,r=t.delay,n=t.isSet;if(!n){e.debug("Starting ICE reconnect timeout: "+r);this._iceReconnectTimeout.start()}this.offer().catch((function(t){e.error("offer failed in _initiateIceRestart with: "+t.message)}))}};
/**
   * Schedule an ICE Restart.
   * @private
   * @returns {void}
   */PeerConnectionV2.prototype._initiateIceRestartBackoff=function(){var e=this;if("closed"!==this._peerConnection.signalingState&&!this._isIceRestartBackoffInProgress){this._log.warn("An ICE restart has been scheduled");this._isIceRestartBackoffInProgress=true;this._iceRestartBackoff.backoff((function(){return e._initiateIceRestart()}))}};
/**
   * Conditionally re-offer.
   * @private
   * @param {?RTCSessionDescriptionInit} localDescription
   * @returns {Promise<boolean>}
   */PeerConnectionV2.prototype._maybeReoffer=function(e){var t=this._shouldOffer;if(e&&e.sdp){var r=this._peerConnection.getSenders().filter((function(e){return e.track}));t=["audio","video"].reduce((function(t,n){var i=yh(e.sdp,n,"(sendrecv|sendonly)");var a=r.filter(isSenderOfKind.bind(null,n));return t||i.length<a.length}),t);var n=this._dataChannels.size>0;var i=yh(e.sdp,"application").length>0;var a=n&&!i;t=t||a}var o=t?this._offer():Promise.resolve();return o.then((function(){return t}))};
/**
   * Create an offer and set it on the {@link PeerConnectionV2}.
   * @private
   * @returns {Promise<void>}
   */PeerConnectionV2.prototype._offer=function(){var e=this;var t=Object.assign({},this._offerOptions);this._needsAnswer=true;if(this._shouldRestartIce){this._shouldRestartIce=false;this._isRestartingIce=true;t.iceRestart=true}return Promise.all(this._replaceTrackPromises.values()).then((function(){return e._peerConnection.createOffer(t)})).catch((function(t){var r=new Ph;e._publishMediaWarning({message:"Failed to create offer",code:r.code,error:t});throw r})).then((function(t){t=qh?new e._RTCSessionDescription({sdp:_h(t.sdp),type:t.type}):Uh(t);var r=bh(t.sdp,["mslabel","label"]);r=e._peerConnection.remoteDescription?gh(r,e._peerConnection.remoteDescription.sdp):r;var n=e._setCodecPreferences(r,e._preferredAudioCodecs,e._preferredVideoCodecs);e._shouldOffer=false;e._negotiationRole||(e._negotiationRole="offerer");if(e._shouldApplySimulcast){e._localDescriptionWithoutSimulcast={type:"offer",sdp:n};n=e._setSimulcast(n,e._trackIdsToAttributes)}return e._setLocalDescription({type:"offer",sdp:n})}))};
/**
   * Get the MediaTrackSender ID of the given MediaStreamTrack ID.
   * Since a MediaTrackSender's underlying MediaStreamTrack can be
   * replaced, the corresponding IDs can mismatch.
   * @private
   * @param {Track.ID} id
   * @returns {Track.ID}
   */PeerConnectionV2.prototype._getMediaTrackSenderId=function(e){var t=Array.from(this._rtpSenders.keys()).find((function(t){var r=t.track.id;return r===e}));return t?t.id:e};
/**
   * Add or rewrite local MediaStreamTrack IDs in the given RTCSessionDescription.
   * @private
   * @param {RTCSessionDescription} description
   * @return {RTCSessionDescription}
   */PeerConnectionV2.prototype._addOrRewriteLocalTrackIds=function(e){var t=this;var r=this._peerConnection.getTransceivers();var n=r.filter((function(e){var t=e.sender,r=e.stopped;return!r&&t&&t.track}));var i=n.filter((function(e){var t=e.mid;return t}));var a=new Map(i.map((function(e){var r=e.mid,n=e.sender;return[r,t._getMediaTrackSenderId(n.track.id)]})));var o=vh(e.sdp,a);var c=n.filter((function(e){var t=e.mid;return!t}));var s=new Map(["audio","video"].map((function(e){return[e,c.filter((function(t){var r=t.sender;return r.track.kind===e})).map((function(e){var r=e.sender;return t._getMediaTrackSenderId(r.track.id)}))]})));var u=fh(o,a,s);return new this._RTCSessionDescription({sdp:u,type:e.type})};
/**
   * Rollback and apply the given offer.
   * @private
   * @param {RTCSessionDescriptionInit} offer
   * @returns {Promise<void>}
   */PeerConnectionV2.prototype._rollbackAndApplyOffer=function(e){var t=this;return this._setLocalDescription({type:"rollback"}).then((function(){return t._setLocalDescription(e)}))};
/**
   * Set a local description on the {@link PeerConnectionV2}.
   * @private
   * @param {RTCSessionDescription|RTCSessionDescriptionInit} description
   * @returns {Promise<void>}
   */PeerConnectionV2.prototype._setLocalDescription=function(e){var t=this;"rollback"!==e.type&&this._shouldApplyDtx&&(e=new this._RTCSessionDescription({sdp:mh(e.sdp),type:e.type}));return this._peerConnection.setLocalDescription(e).catch((function(r){t._log.warn('Calling setLocalDescription with an RTCSessionDescription of type "'+e.type+'" failed with the error "'+r.message+'".',r);var n=new Ph;var i={message:'Calling setLocalDescription with an RTCSessionDescription of type "'+e.type+'" failed',code:n.code,error:r};if(e.sdp){t._log.warn("The SDP was "+e.sdp);i.sdp=e.sdp}t._publishMediaWarning(i);throw n})).then((function(){if("rollback"!==e.type){t._localDescription=t._addOrRewriteLocalTrackIds(e);t._shouldApplyDtx&&(t._localDescription=new t._RTCSessionDescription({sdp:mh(t._localDescription.sdp,[]),type:t._localDescription.type}));t._localCandidates=[];if("offer"===e.type)t._descriptionRevision++;else if("answer"===e.type){t._lastStableDescriptionRevision=t._descriptionRevision;negotiationCompleted(t)}t._localUfrag=getUfrag(e);t.emit("description",t.getState())}}))};
/**
   * Set a remote RTCSessionDescription on the {@link PeerConnectionV2}.
   * @private
   * @param {RTCSessionDescriptionInit} description
   * @returns {Promise<void>}
   */PeerConnectionV2.prototype._setRemoteDescription=function(e){var t=this;if(e.sdp){e.sdp=this._setCodecPreferences(e.sdp,this._preferredAudioCodecs,this._preferredVideoCodecs);this._shouldApplyDtx?e.sdp=mh(e.sdp):e.sdp=mh(e.sdp,[]);qh&&(e.sdp=filterOutMediaStreamIds(e.sdp));this._peerConnection.remoteDescription||(this._isIceLite=/a=ice-lite/.test(e.sdp))}e=new this._RTCSessionDescription(e);return Promise.resolve().then((function(){if("answer"===e.type&&t._localDescriptionWithoutSimulcast){var r=t._preferredVideoCodecs.find((function(e){return"adaptiveSimulcast"in e}));var n=!!r&&false===r.adaptiveSimulcast;var i=t._revertSimulcast(t._localDescription.sdp,t._localDescriptionWithoutSimulcast.sdp,e.sdp,n);t._localDescriptionWithoutSimulcast=null;if(i!==t._localDescription.sdp)return t._rollbackAndApplyOffer({type:t._localDescription.type,sdp:i})}})).then((function(){return t._peerConnection.setRemoteDescription(e)})).then((function(){if("answer"===e.type){if(t._isRestartingIce){t._log.debug("An ICE restart was in-progress and is now completed");t._isRestartingIce=false}negotiationCompleted(t)}}),(function(r){t._log.warn('Calling setRemoteDescription with an RTCSessionDescription of type "'+e.type+'" failed with the error "'+r.message+'".',r);e.sdp&&t._log.warn("The SDP was "+e.sdp);throw r}))};
/**
   * Update the {@link PeerConnectionV2}'s description.
   * @private
   * @param {RTCSessionDescriptionInit} description
   * @returns {Promise<void>}
   */PeerConnectionV2.prototype._updateDescription=function(e){var t=this;switch(e.type){case"answer":case"pranswer":if(e.revision!==this._descriptionRevision||"have-local-offer"!==this._peerConnection.signalingState)return Promise.resolve();this._descriptionRevision=e.revision;break;case"close":return this._close();case"create-offer":if(e.revision<=this._lastStableDescriptionRevision)return Promise.resolve();if(this._needsAnswer){this._queuedDescription=e;return Promise.resolve()}this._descriptionRevision=e.revision;return this._offer();case"offer":if(e.revision<=this._lastStableDescriptionRevision||"closed"===this._peerConnection.signalingState)return Promise.resolve();if("have-local-offer"===this._peerConnection.signalingState){if(this._needsAnswer&&0===this._lastStableDescriptionRevision){this._queuedDescription=e;return Promise.resolve()}this._descriptionRevision=e.revision;return this._handleGlare(e)}this._descriptionRevision=e.revision;return this._answer(e).then((function(){}));default:}var r=e.revision;return Promise.resolve().then((function(){return t._setRemoteDescription(e)})).catch((function(r){var n=new Oh;t._publishMediaWarning({message:'Calling setRemoteDescription with an RTCSessionDescription of type "'+e.type+'" failed',code:n.code,error:r,sdp:e.sdp});throw n})).then((function(){t._lastStableDescriptionRevision=r;t._needsAnswer=false;return t._checkIceBox(e)})).then((function(){return t._queuedDescription&&t._updateDescription(t._queuedDescription)})).then((function(){t._queuedDescription=null;return t._maybeReoffer(t._peerConnection.localDescription).then((function(){}))}))};
/**
   * Update the {@link PeerConnectionV2}'s ICE candidates.
   * @private
   * @param {object} iceState
   * @returns {Promise<void>}
   */PeerConnectionV2.prototype._updateIce=function(e){var t=this._remoteCandidates.update(e);return this._addIceCandidates(t)};
/**
   * Add a {@link DataTrackSender} to the {@link PeerConnectionV2}.
   * @param {DataTrackSender} dataTrackSender
   * @returns {void}
   */PeerConnectionV2.prototype.addDataTrackSender=function(e){if(!this._dataChannels.has(e))try{var t={ordered:e.ordered};null!==e.maxPacketLifeTime&&(t.maxPacketLifeTime=e.maxPacketLifeTime);null!==e.maxRetransmits&&(t.maxRetransmits=e.maxRetransmits);var r=this._peerConnection.createDataChannel(e.id,t);e.addDataChannel(r);this._dataChannels.set(e,r)}catch(t){this._log.warn('Error creating an RTCDataChannel for DataTrack "'+e.id+'": '+t.message)}};PeerConnectionV2.prototype._handleQueuedPublisherHints=function(){var e=this;"stable"===this._peerConnection.signalingState&&this._mediaTrackSenderToPublisherHints.forEach((function(t,r){var n=t.deferred,i=t.encodings;e._mediaTrackSenderToPublisherHints.delete(r);e._setPublisherHint(r,i).then((function(e){return n.resolve(e)})).catch((function(e){return n.reject(e)}))}))};
/**
   * updates encodings for simulcast layers of given sender.
   * @param {RTCRtpSender} sender
   * @param {Array<{enabled: boolean, layer_index: number}>|null} encodings
   * @returns {Promise<string>} string indicating result of the operation. can be one of
   *  "OK", "INVALID_HINT", "COULD_NOT_APPLY_HINT", "UNKNOWN_TRACK"
   */PeerConnectionV2.prototype._setPublisherHint=function(e,t){var r=this;if(qh)return Promise.resolve("COULD_NOT_APPLY_HINT");if(this._mediaTrackSenderToPublisherHints.has(e)){var n=this._mediaTrackSenderToPublisherHints.get(e);n.deferred.resolve("REQUEST_SKIPPED");this._mediaTrackSenderToPublisherHints.delete(e)}var i=this._rtpSenders.get(e);if(!i){this._log.warn("Could not apply publisher hint because RTCRtpSender was not found");return Promise.resolve("UNKNOWN_TRACK")}if("closed"===this._peerConnection.signalingState){this._log.warn('Could not apply publisher hint because signalingState was "closed"');return Promise.resolve("COULD_NOT_APPLY_HINT")}if("stable"!==this._peerConnection.signalingState){this._log.debug("Queuing up publisher hint because signalingState:",this._peerConnection.signalingState);var a=jh();this._mediaTrackSenderToPublisherHints.set(e,{deferred:a,encodings:t});return a.promise}var o=i.getParameters();null!==t&&t.forEach((function(e){var t=e.enabled,n=e.layer_index;if(o.encodings.length>n){r._log.debug("layer:"+n+", active:"+o.encodings[n].active+" => "+t);o.encodings[n].active=t}else r._log.warn("invalid layer:"+n+", active:"+t)}));this._maybeUpdateEncodings(i.track,o.encodings,null===t);return i.setParameters(o).then((function(){return"OK"})).catch((function(e){r._log.error("Failed to apply publisher hints:",e);return"COULD_NOT_APPLY_HINT"}))};
/**
   * Add the {@link MediaTrackSender} to the {@link PeerConnectionV2}.
   * @param {MediaTrackSender} mediaTrackSender
   * @returns {void}
   */PeerConnectionV2.prototype.addMediaTrackSender=function(e){var t=this;if("closed"!==this._peerConnection.signalingState&&!this._rtpSenders.has(e)){var r=this._addOrUpdateTransceiver(e.track);var n=r.sender;e.addSender(n,(function(r){return t._setPublisherHint(e,r)}));this._rtpNewSenders.add(n);this._rtpSenders.set(e,n)}};
/**
   * Close the {@link PeerConnectionV2}.
   * @returns {void}
   */PeerConnectionV2.prototype.close=function(){if(this._close()){this._descriptionRevision++;this._localDescription={type:"close"};this.emit("description",this.getState())}};
/**
   * Get the {@link DataTrackReceiver}s and the {@link MediaTrackReceiver}s on the
   * {@link PeerConnectionV2}.
   * @returns {Array<DataTrackReceiver|MediaTrackReceiver>} trackReceivers
   */PeerConnectionV2.prototype.getTrackReceivers=function(){return Array.from(this._dataTrackReceivers).concat(Array.from(this._mediaTrackReceivers))};
/**
   * Get the {@link PeerConnectionV2}'s state (specifically, its description).
   * @returns {?object}
   */PeerConnectionV2.prototype.getState=function(){if(!this._localDescription)return null;var e="answer"===this._localDescription.type?this._lastStableDescriptionRevision:this._descriptionRevision;var t={type:this._localDescription.type,revision:e};this._localDescription.sdp&&(t.sdp=this._localDescription.sdp);return{description:t,id:this.id}};
/**
   * Create an offer and set it on the {@link PeerConnectionV2}.
   * @returns {Promise<void>}
   */PeerConnectionV2.prototype.offer=function(){var e=this;if(this._needsAnswer||this._isRestartingIce){this._shouldOffer=true;return Promise.resolve()}return this.bracket("offering",(function(t){e.transition("updating",t);var r=e._needsAnswer||e._isRestartingIce?Promise.resolve():e._offer();return r.then((function(){e.tryTransition("open",t)}),(function(r){e.tryTransition("open",t);throw r}))}))};
/**
   * Remove a {@link DataTrackSender} from the {@link PeerConnectionV2}.
   * @param {DataTrackSender} dataTrackSender
   * @returns {void}
   */PeerConnectionV2.prototype.removeDataTrackSender=function(e){var t=this._dataChannels.get(e);if(t){e.removeDataChannel(t);this._dataChannels.delete(e);t.close()}};
/**
   * Remove the {@link MediaTrackSender} from the {@link PeerConnectionV2}.
   * @param {MediaTrackSender} mediaTrackSender
   * @returns {void}
   */PeerConnectionV2.prototype.removeMediaTrackSender=function(e){var t=this._rtpSenders.get(e);if(t){"closed"!==this._peerConnection.signalingState&&this._peerConnection.removeTrack(t);e.removeSender(t);if(this._mediaTrackSenderToPublisherHints.has(e)){var r=this._mediaTrackSenderToPublisherHints.get(e);r.deferred.resolve("UNKNOWN_TRACK");this._mediaTrackSenderToPublisherHints.delete(e)}this._rtpNewSenders.delete(t);this._rtpSenders.delete(e)}};
/**
   * Set the RTCConfiguration on the underlying RTCPeerConnection.
   * @param {RTCConfiguration} configuration
   * @returns {void}
   */PeerConnectionV2.prototype.setConfiguration=function(e){"function"===typeof this._peerConnection.setConfiguration&&this._peerConnection.setConfiguration(getConfiguration(e))};
/**
   * Set the ICE reconnect timeout period.
   * @param {number} period - Period in milliseconds.
   * @returns {this}
   */PeerConnectionV2.prototype.setIceReconnectTimeout=function(e){this._iceReconnectTimeout.setDelay(e);this._log.debug("Updated ICE reconnection timeout period:",this._iceReconnectTimeout.delay);return this};
/**
   * Update the {@link PeerConnectionV2}.
   * @param {object} peerConnectionState
   * @returns {Promise<void>}
   */PeerConnectionV2.prototype.update=function(e){var t=this;return this.bracket("updating",(function(r){if("closed"===t.state)return Promise.resolve();t.transition("updating",r);var n=[];e.ice&&n.push(t._updateIce(e.ice));e.description&&n.push(t._updateDescription(e.description));return Promise.all(n).then((function(){t.tryTransition("open",r)}),(function(e){t.tryTransition("open",r);throw e}))}))};
/**
   * Get the {@link PeerConnectionV2}'s media statistics.
   * @returns {Promise<StandardizedStatsResponse>}
   */PeerConnectionV2.prototype.getStats=function(){var e=this;return ah(this._peerConnection).then((function(t){return rewriteTrackIds(e,t)}))};return PeerConnectionV2}(Nh);function rewriteLocalTrackId(e,t){var r=e._getMediaTrackSenderId(t.trackId);return Object.assign(t,{trackId:r})}function rewriteTrackId(e,t){var r=Zv([],Xv(e._mediaTrackReceivers)).find((function(e){return e.track.id===t.trackId}));var n=r?r.id:null;return Object.assign(t,{trackId:n})}function rewriteTrackIds(e,t){return Object.assign(t,{remoteAudioTrackStats:t.remoteAudioTrackStats.map((function(t){return rewriteTrackId(e,t)})),remoteVideoTrackStats:t.remoteVideoTrackStats.map((function(t){return rewriteTrackId(e,t)})),localAudioTrackStats:t.localAudioTrackStats.map((function(t){return rewriteLocalTrackId(e,t)})),localVideoTrackStats:t.localVideoTrackStats.map((function(t){return rewriteLocalTrackId(e,t)}))})}
/**
 * @event PeerConnectionV2#candidates
 * @param {object} candidates
 */
/**
 * @event PeerConnectionV2#description
 * @param {object} description
 */
/**
 * @event PeerConnectionV2#trackAdded
 * @param {DataTrackReceiver|MediaTrackReceiver} trackReceiver
 */function getUfrag(e){if(e.sdp){var t=e.sdp.match(/^a=ice-ufrag:([a-zA-Z0-9+/]+)/m);if(t)return t[1]}return null}function getConfiguration(e){return Object.assign({bundlePolicy:"max-bundle",rtcpMuxPolicy:"require"},e)}
/**
 * Whether the MediaStreamTrack of the given RTCRTPSender is a non-ended
 * MediaStreamTrack of a given kind.
 * @private
 * @param {string} kind
 * @param {RTCRtpSender} sender
 * @return {boolean}
 */function isSenderOfKind(e,t){var r=t.track;return r&&r.kind===e&&"ended"!==r.readyState}
/**
 * Preferred codecs.
 * @typedef {object} PreferredCodecs
 * @property {Array<AudioCodec>} audio
 * @property {Array<VideoCodec>} video
 */function filterOutMediaStreamIds(e){return e.replace(/a=msid:[^ ]+ /g,"a=msid:- ")}
/**
 * Whether an RTCRtpTransceiver can be recycled.
 * @param {RTCRtpTransceiver} transceiver
 * @returns {boolean}
 */function shouldRecycleTransceiver(e,t){return!e.stopped&&!t._replaceTrackPromises.has(e)&&["inactive","recvonly"].includes(e.direction)}
/**
 * Take a recycled RTCRtpTransceiver if available.
 * @param {PeerConnectionV2} pcv2
 * @param {Track.Kind} kind
 * @returns {?RTCRtpTransceiver}
 */function takeRecycledTransceiver(e,t){var r={audio:e._preferredAudioCodecs.map((function(e){var t=e.codec;return t.toLowerCase()})),video:e._preferredVideoCodecs.map((function(e){var t=e.codec;return t.toLowerCase()}))}[t];var n=e._recycledTransceivers[t];var i=r.find((function(t){return e._localCodecs.has(t)}));if(!i)return n.shift();var a=n.find((function(t){var r=e._remoteCodecMaps.get(t.mid);return r&&r.has(i)}));a&&n.splice(n.indexOf(a),1);return a}
/**
 * Update the set of locally supported {@link Codec}s.
 * @param pcv2
 * @returns {void}
 */function updateLocalCodecs(e){var t=e._peerConnection.localDescription;t&&t.sdp&&yh(t.sdp).forEach((function(t){var r=hh(t);r.forEach((function(t,r){return e._localCodecs.add(r)}))}))}
/**
 * Update the {@link Codec} maps for all m= sections in the remote {@link RTCSessionDescription}s.
 * @param {PeerConnectionV2} pcv2
 * @returns {void}
 */function updateRemoteCodecMaps(e){var t=e._peerConnection.remoteDescription;t&&t.sdp&&yh(t.sdp).forEach((function(t){var r=t.match(/^a=mid:(.+)$/m);if(r&&r[1]){var n=r[1];var i=hh(t);e._remoteCodecMaps.set(n,i)}}))}
/**
 * Update the list of recycled RTCRtpTransceivers.
 * @param {PeerConnectionV2} pcv2
 */function updateRecycledTransceivers(e){e._recycledTransceivers.audio=[];e._recycledTransceivers.video=[];e._peerConnection.getTransceivers().forEach((function(t){if(shouldRecycleTransceiver(t,e)){var r=t.receiver.track;e._recycledTransceivers[r.kind].push(t)}}))}
/**
 * Perform certain updates after an SDP negotiation is completed.
 * @param {PeerConnectionV2} pcv2
 * @returns {void}
 */function negotiationCompleted(e){updateRecycledTransceivers(e);updateLocalCodecs(e);updateRemoteCodecMaps(e);updateEncodingParameters(e).then((function(){e._handleQueuedPublisherHints()}))}
/**
 * Update the RTCRtpEncodingParameters of all active RTCRtpSenders.
 * @param {PeerConnectionV2} pcv2
 * @returns {void}
 */function updateEncodingParameters(e){var t=e._encodingParameters,r=t.maxAudioBitrate,n=t.maxVideoBitrate;var i=new Map([["audio",r],["video",n]]);var a=[];e._peerConnection.getSenders().filter((function(e){return e.track})).forEach((function(t){var r=i.get(t.track.kind);var n=t.getParameters();null===r||0===r?removeMaxBitrate(n):e._isChromeScreenShareTrack(t.track)?e._log.warn("Not setting maxBitrate for "+t.track.kind+" Track "+t.track.id+" because it appears to be screen share track: "+t.track.label):setMaxBitrate(n,r);if(!qh&&n.encodings.length>0){"audio"===t.track.kind?n.encodings[0].priority="high":e._isChromeScreenShareTrack(t.track)&&(n.encodings[0].priority="medium");e._enableDscp&&(n.encodings[0].networkPriority="high")}var o=e._rtpNewSenders.has(t);e._maybeUpdateEncodings(t.track,n.encodings,o);e._rtpNewSenders.delete(t);var c=t.setParameters(n).catch((function(r){e._log.warn("Error while setting encodings parameters for "+t.track.kind+" Track "+t.track.id+": "+(r.message||r.name))}));a.push(c)}));return Promise.all(a)}
/**
 * Remove maxBitrate from the RTCRtpSendParameters' encodings.
 * @param {RTCRtpSendParameters} params
 * @returns {void}
 */function removeMaxBitrate(e){Array.isArray(e.encodings)&&e.encodings.forEach((function(e){return delete e.maxBitrate}))}
/**
 * Set the given maxBitrate in the RTCRtpSendParameters' encodings.
 * @param {RTCRtpSendParameters} params
 * @param {number} maxBitrate
 * @returns {void}
 */function setMaxBitrate(e,t){qh?e.encodings=[{maxBitrate:t}]:e.encodings.forEach((function(e){e.maxBitrate=t}))}Jv=Jh;var Yh=Jv;var Xh={};var Zh=Xh&&Xh.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var e_=Xh&&Xh.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};var t_=Xh&&Xh.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};var r_=U.guessBrowser;var n_=Yh;var i_=qn;var a_=Ln;var o_=Y;var c_=tc.MediaConnectionError;var s_="firefox"===r_();var u_=function(e){Zh(PeerConnectionManager,e);
/**
   * Construct {@link PeerConnectionManager}.
   * @param {EncodingParametersImpl} encodingParameters
   * @param {PreferredCodecs} preferredCodecs
   * @param {object} options
   */function PeerConnectionManager(t,r,n){var i=e.call(this)||this;n=Object.assign({audioContextFactory:s_?kr:null,PeerConnectionV2:n_},n);var a=n.audioContextFactory?n.audioContextFactory.getOrCreate(i):null;var o=a?{offerToReceiveVideo:true}:{offerToReceiveAudio:true,offerToReceiveVideo:true};Object.defineProperties(i,{_audioContextFactory:{value:n.audioContextFactory},_closedPeerConnectionIds:{value:new Set},_configuration:{writable:true,value:null},_configurationDeferred:{writable:true,value:o_.defer()},_connectionState:{value:"new",writable:true},_dummyAudioTrackSender:{value:a?new i_(createDummyAudioMediaStreamTrack(a)):null},_encodingParameters:{value:t},_iceConnectionState:{writable:true,value:"new"},_dataTrackSenders:{writable:true,value:new Set},_lastConnectionState:{value:"new",writable:true},_lastIceConnectionState:{writable:true,value:"new"},_mediaTrackSenders:{writable:true,value:new Set},_offerOptions:{value:o},_peerConnections:{value:new Map},_preferredCodecs:{value:r},_sessionTimeout:{value:null,writable:true},_PeerConnectionV2:{value:n.PeerConnectionV2}});return i}PeerConnectionManager.prototype.setEffectiveAdaptiveSimulcast=function(e){this._peerConnections.forEach((function(t){return t.setEffectiveAdaptiveSimulcast(e)}));this._preferredCodecs.video.forEach((function(t){"adaptiveSimulcast"in t&&(t.adaptiveSimulcast=e)}))};Object.defineProperty(PeerConnectionManager.prototype,"connectionState",{get:function(){return this._connectionState},enumerable:false,configurable:true});Object.defineProperty(PeerConnectionManager.prototype,"iceConnectionState",{get:function(){return this._iceConnectionState},enumerable:false,configurable:true});
/**
   * Close the {@link PeerConnectionV2}s which are no longer relevant.
   * @param {Array<object>} peerConnectionStates
   * @returns {this}
   */PeerConnectionManager.prototype._closeAbsentPeerConnections=function(e){var t=new Set(e.map((function(e){return e.id})));this._peerConnections.forEach((function(e){t.has(e.id)||e._close()}));return this};
/**
   * Get the {@link PeerConnectionManager}'s configuration.
   * @private
   * @returns {Promise<object>}
   */PeerConnectionManager.prototype._getConfiguration=function(){return this._configurationDeferred.promise};
/**
   * Get or create a {@link PeerConnectionV2}.
   * @private
   * @param {string} id
   * @param {object} [configuration]
   * @returns {PeerConnectionV2}
   */PeerConnectionManager.prototype._getOrCreate=function(e,t){var r=this;var n=this;var i=this._peerConnections.get(e);if(!i){var a=this._PeerConnectionV2;var o=Object.assign({dummyAudioMediaStreamTrack:this._dummyAudioTrackSender?this._dummyAudioTrackSender.track:null,offerOptions:this._offerOptions},this._sessionTimeout?{sessionTimeout:this._sessionTimeout}:{},t);try{i=new a(e,this._encodingParameters,this._preferredCodecs,o)}catch(e){throw new c_}this._peerConnections.set(i.id,i);i.on("candidates",this.queue.bind(this,"candidates"));i.on("description",this.queue.bind(this,"description"));i.on("trackAdded",this.queue.bind(this,"trackAdded"));i.on("stateChanged",(function stateChanged(e){if("closed"===e){i.removeListener("stateChanged",stateChanged);n._dataTrackSenders.forEach((function(e){return i.removeDataTrackSender(e)}));n._mediaTrackSenders.forEach((function(e){return i.removeMediaTrackSender(e)}));n._peerConnections.delete(i.id);n._closedPeerConnectionIds.add(i.id);updateConnectionState(n);updateIceConnectionState(n)}}));i.on("connectionStateChanged",(function(){return updateConnectionState(r)}));i.on("iceConnectionStateChanged",(function(){return updateIceConnectionState(r)}));this._dataTrackSenders.forEach(i.addDataTrackSender,i);this._mediaTrackSenders.forEach(i.addMediaTrackSender,i);updateIceConnectionState(this)}return i};
/**
   * Close all the {@link PeerConnectionV2}s in this {@link PeerConnectionManager}.
   * @returns {this}
   */PeerConnectionManager.prototype.close=function(){this._peerConnections.forEach((function(e){e.close()}));this._dummyAudioTrackSender&&this._dummyAudioTrackSender.stop();this._audioContextFactory&&this._audioContextFactory.release(this);updateIceConnectionState(this);return this};PeerConnectionManager.prototype.createAndOffer=function(){var e=this;return this._getConfiguration().then((function(t){var r;do{r=o_.makeUUID()}while(e._peerConnections.has(r));return e._getOrCreate(r,t)})).then((function(e){return e.offer()})).then((function(){return e}))};
/**
   * Get the {@link DataTrackReceiver}s and {@link MediaTrackReceiver}s of all
   * the {@link PeerConnectionV2}s.
   * @returns {Array<DataTrackReceiver|MediaTrackReceiver>} trackReceivers
   */PeerConnectionManager.prototype.getTrackReceivers=function(){return o_.flatMap(this._peerConnections,(function(e){return e.getTrackReceivers()}))};
/**
   * Get the states of all {@link PeerConnectionV2}s.
   * @returns {Array<object>}
   */PeerConnectionManager.prototype.getStates=function(){var e=[];this._peerConnections.forEach((function(t){var r=t.getState();r&&e.push(r)}));return e};
/**
   * Set the {@link PeerConnectionManager}'s configuration.
   * @param {object} configuration
   * @returns {this}
   */PeerConnectionManager.prototype.setConfiguration=function(e){if(this._configuration){this._configurationDeferred=o_.defer();this._peerConnections.forEach((function(t){t.setConfiguration(e)}))}this._configuration=e;this._configurationDeferred.resolve(e);return this};
/**
   * Set the ICE reconnect timeout period for all {@link PeerConnectionV2}s.
   * @param {number} period - Period in milliseconds.
   * @returns {this}
   */PeerConnectionManager.prototype.setIceReconnectTimeout=function(e){if(null===this._sessionTimeout){this._peerConnections.forEach((function(t){t.setIceReconnectTimeout(e)}));this._sessionTimeout=e}return this};
/**
   * Set the {@link DataTrackSender}s and {@link MediaTrackSender}s on the
   * {@link PeerConnectionManager}'s underlying {@link PeerConnectionV2}s.
   * @param {Array<DataTrackSender|MediaTrackSender>} trackSenders
   * @returns {this}
   */PeerConnectionManager.prototype.setTrackSenders=function(e){var t=new Set(e.filter((function(e){return"data"===e.kind})));var r=new Set(e.filter((function(e){return e&&("audio"===e.kind||"video"===e.kind)})));var n=getTrackSenderChanges(this,t,r);this._dataTrackSenders=t;this._mediaTrackSenders=r;applyTrackSenderChanges(this,n);return this};
/**
   * Update the {@link PeerConnectionManager}.
   * @param {Array<object>} peerConnectionStates
   * @param {boolean} [synced=false]
   * @returns {Promise<this>}
   */PeerConnectionManager.prototype.update=function(e,t){var r=this;void 0===t&&(t=false);t&&this._closeAbsentPeerConnections(e);return this._getConfiguration().then((function(t){return Promise.all(e.map((function(e){if(r._closedPeerConnectionIds.has(e.id))return null;var n=r._getOrCreate(e.id,t);return n.update(e)})))})).then((function(){return r}))};
/**
   * Get the {@link PeerConnectionManager}'s media statistics.
   * @returns {Promise.<Map<PeerConnectionV2#id, StandardizedStatsResponse>>}
   */PeerConnectionManager.prototype.getStats=function(){var e=Array.from(this._peerConnections.values());return Promise.all(e.map((function(e){return e.getStats().then((function(t){return[e.id,t]}))}))).then((function(e){return new Map(e)}))};return PeerConnectionManager}(a_);
/**
 * Create a dummy audio MediaStreamTrack with the given AudioContext.
 * @private
 * @param {AudioContext} audioContext
 * @return {MediaStreamTrack}
 */function createDummyAudioMediaStreamTrack(e){var t=e.createMediaStreamDestination();return t.stream.getAudioTracks()[0]}
/**
 * @event {PeerConnectionManager#candidates}
 * @param {object} candidates
 */
/**
 * @event {PeerConnectionManager#description}
 * @param {object} description
 */
/**
 * @event {PeerConnectionManager#trackAdded}
 * @param {MediaStreamTrack|DataTrackReceiver} mediaStreamTrackOrDataTrackReceiver
 */
/**
 * Apply {@link TrackSenderChanges}.
 * @param {PeerConnectionManager} peerConnectionManager
 * @param {TrackSenderChanges} changes
 * @returns {void}
 */function applyTrackSenderChanges(e,t){(t.data.add.size||t.data.remove.size||t.media.add.size||t.media.remove.size)&&e._peerConnections.forEach((function(e){t.data.remove.forEach(e.removeDataTrackSender,e);t.media.remove.forEach(e.removeMediaTrackSender,e);t.data.add.forEach(e.addDataTrackSender,e);t.media.add.forEach(e.addMediaTrackSender,e);(t.media.add.size||t.media.remove.size||t.data.add.size&&!e.isApplicationSectionNegotiated)&&e.offer()}))}
/**
 * Get the {@Link DataTrackSender} changes.
 * @param {PeerConnectionManager} peerConnectionManager
 * @param {Array<DataTrackSender>} dataTrackSenders
 * @returns {DataTrackSenderChanges} changes
 */function getDataTrackSenderChanges(e,t){var r=o_.difference(t,e._dataTrackSenders);var n=o_.difference(e._dataTrackSenders,t);return{add:r,remove:n}}
/**
 * Get {@link DataTrackSender} and {@link MediaTrackSender} changes.
 * @param {PeerConnectionManager} peerConnectionManager
 * @param {Array<DataTrackSender>} dataTrackSenders
 * @param {Array<MediaTrackSender>} mediaTrackSenders
 * @returns {TrackSenderChanges} changes
 */function getTrackSenderChanges(e,t,r){return{data:getDataTrackSenderChanges(e,t),media:getMediaTrackSenderChanges(e,r)}}
/**
 * Get the {@link MediaTrackSender} changes.
 * @param {PeerConnectionManager} peerConnectionManager
 * @param {Array<MediaTrackSender>} mediaTrackSenders
 * @returns {MediaTrackSenderChanges} changes
 */function getMediaTrackSenderChanges(e,t){var r=o_.difference(t,e._mediaTrackSenders);var n=o_.difference(e._mediaTrackSenders,t);return{add:r,remove:n}}var l_={new:0,checking:1,connecting:2,connected:3,completed:4,disconnected:-1,failed:-2,closed:-3};var d_;
/**
 * `Object.keys` is not supported in older browsers, so we can't just
 * synchronously call it in this module; we need to defer invoking it until we
 * know we're in a modern environment (i.e., anything that supports WebRTC).
 * @returns {object} fromRank
 */function createFromRank(){return Object.keys(l_).reduce((function(e,t){var r;return Object.assign(e,(r={},r[l_[t]]=t,r))}),{})}
/**
 * Summarize RTCIceConnectionStates or RTCPeerConnectionStates.
 * @param {Array<RTCIceConnectionState>|Array<RTCPeerConnectionState>} states
 * @returns {RTCIceConnectionState|RTCPeerConnectionState} summary
 */function summarizeIceOrPeerConnectionStates(e){if(!e.length)return"new";d_=d_||createFromRank();return e.reduce((function(e,t){return d_[Math.max(l_[e],l_[t])]}))}
/**
 * Update the {@link PeerConnectionManager}'s `iceConnectionState`, and emit an
 * "iceConnectionStateChanged" event, if necessary.
 * @param {PeerConnectionManager} pcm
 * @returns {void}
 */function updateIceConnectionState(e){e._lastIceConnectionState=e.iceConnectionState;e._iceConnectionState=summarizeIceOrPeerConnectionStates(t_([],e_(e._peerConnections.values())).map((function(e){return e.iceConnectionState})));e.iceConnectionState!==e._lastIceConnectionState&&e.emit("iceConnectionStateChanged")}
/**
 * Update the {@link PeerConnectionManager}'s `connectionState`, and emit a
 * "connectionStateChanged" event, if necessary.
 * @param {PeerConnectionManager} pcm
 * @returns {void}
 */function updateConnectionState(e){e._lastConnectionState=e.connectionState;e._connectionState=summarizeIceOrPeerConnectionStates(t_([],e_(e._peerConnections.values())).map((function(e){return e.connectionState})));e.connectionState!==e._lastConnectionState&&e.emit("connectionStateChanged")}Xh=u_;var p_=Xh;var f_="default"in e?e.default:e;var v_={};var h_=v_&&v_.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var m_=f_;var g_=0;var y_=function(e){h_(MediaSignaling,e);
/**
   * Construct a {@link MediaSignaling}.
   * @param {Promise<DataTrackReceiver>} getReceive
   * @param {string} channel
   */function MediaSignaling(t,r,n){var i=e.call(this)||this;Object.defineProperties(i,{_instanceId:{value:g_++},channel:{value:r},_log:{value:n.log.createLog("default",i)},_getReceiver:{value:t},_receiverPromise:{value:null,writable:true},_transport:{value:null,writable:true}});return i}Object.defineProperty(MediaSignaling.prototype,"isSetup",{get:function(){return!!this._receiverPromise},enumerable:false,configurable:true});MediaSignaling.prototype.toString=function(){return"[MediaSignaling #"+this._instanceId+":"+this.channel+"]"};MediaSignaling.prototype.setup=function(e){var t=this;this._teardown();this._log.info("setting up msp transport for id:",e);var r=this._getReceiver(e).then((function(e){"data"!==e.kind&&t._log.error("Expected a DataTrackReceiver");if(t._receiverPromise===r){try{t._transport=e.toDataTransport();t.emit("ready",t._transport)}catch(e){t._log.error("Failed to toDataTransport: "+e.message)}e.once("close",(function(){return t._teardown()}))}}));this._receiverPromise=r};MediaSignaling.prototype._teardown=function(){if(this._transport){this._log.info("Tearing down");this._transport=null;this._receiverPromise=null;this.emit("teardown")}};return MediaSignaling}(m_);v_=y_;var b_=v_;var k_={};var S_=k_&&k_.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var T_=b_;var w_=function(e){S_(DominantSpeakerSignaling,e);function DominantSpeakerSignaling(t,r){var n=e.call(this,t,"active_speaker",r)||this;Object.defineProperties(n,{_loudestParticipantSid:{value:null,writable:true}});n.on("ready",(function(e){e.on("message",(function(e){switch(e.type){case"active_speaker":n._setLoudestParticipantSid(e.participant);break;default:break}}))}));return n}Object.defineProperty(DominantSpeakerSignaling.prototype,"loudestParticipantSid",{
/**
     * Get the loudest {@link Track.SID}, if known.
     * @returns {?Track.SID}
     */
get:function(){return this._loudestParticipantSid},enumerable:false,configurable:true});
/**
   * @private
   * @param {Track.SID} loudestParticipantSid
   * @returns {void}
   */DominantSpeakerSignaling.prototype._setLoudestParticipantSid=function(e){if(this.loudestParticipantSid!==e){this._loudestParticipantSid=e;this.emit("updated")}};return DominantSpeakerSignaling}(T_);k_=w_;var C_=k_;var P_={};var O_=function(){
/**
   * Construct an {@link IceReport}.
   * @param {number} send - bps
   * @param {number} recv - bps
   * @param {number} [rtt] - s
   * @param {number} [availableSend] - bps
   */
function IceReport(e,t,r,n){Object.defineProperties(this,{availableSend:{enumerable:true,value:r},recv:{enumerable:true,value:t},rtt:{enumerable:true,value:n},send:{enumerable:true,value:e}})}
/**
   * @param {RTCStats} olderStats
   * @param {RTCStats} newerStats
   * @returns {IceReport}
   */IceReport.of=function(e,t){var r=(t.timestamp-e.timestamp)/1e3;var n=t.bytesSent-e.bytesSent;var i=t.bytesReceived-e.bytesReceived;var a=r>0?n/r*8:0;var o=r>0?i/r*8:0;var c=t.availableOutgoingBitrate,s=t.currentRoundTripTime;return new IceReport(a,o,c,s)};return IceReport}();P_=O_;var E_=P_;var R_={};var L_=E_;var M_=function(){function IceReportFactory(){Object.defineProperties(this,{lastReport:{enumerable:true,value:new L_(0,0),writable:true},lastStats:{enumerable:true,value:null,writable:true}})}
/**
   * Create an {@link IceReport}.
   * @param {RTCStats} newerStats;
   * @returns {IceReport}
   */IceReportFactory.prototype.next=function(e){var t=this.lastStats;this.lastStats=e;if(t){var r=t.id===e.id?L_.of(t,e):new L_(0,0);this.lastReport=r}return this.lastReport};return IceReportFactory}();R_=M_;var I_=R_;var j_={};
/**
 * @param {Array<number|undefined>} xs
 * @returns {number|undefined}
 */function average$2(e){e=e.filter((function(e){return"number"===typeof e}));return e.length<1?void 0:e.reduce((function(e,t){return t+e}))/e.length}j_=average$2;var A_=j_;var D_={};var x_=function(){
/**
   * Construct a {@link SenderOrReceiverReport}.
   * @param {StatsId} id
   * @param {TrackId} trackId
   * @param {number} bitrate - bps
   */
function SenderOrReceiverReport(e,t,r){Object.defineProperties(this,{id:{enumerable:true,value:e},trackId:{enumerable:true,value:t},bitrate:{enumerable:true,value:r}})}return SenderOrReceiverReport}();D_=x_;var V_=D_;var N_={};
/**
 * @param {Array<number|undefined>} xs
 * @returns {number}
 */function sum$2(e){return e.reduce((function(e,t){return"number"===typeof t?t+e:e}),0)}N_=sum$2;var F_=N_;var B_={};var U_=B_&&B_.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var $_=A_;var H_=V_;var W_=F_;var Q_=function(e){U_(ReceiverReport,e);
/**
   * @param {StatsId} id
   * @param {TrackId} trackId
   * @param {number} bitrate - bps
   * @param {number} deltaPacketsLost
   * @param {number} deltaPacketsReceived
   * @param {number} [fractionLost] - 0–1 (undefined in Firefox)
   * @param {number} [jitter] - s (undefined for video tracks in Chrome)
   */function ReceiverReport(t,r,n,i,a,o,c){var s=e.call(this,t,r,n)||this;var u=a>0?i/a:0;Object.defineProperties(s,{deltaPacketsLost:{enumerable:true,value:i},deltaPacketsReceived:{enumerable:true,value:a},fractionLost:{enumerable:true,value:o},jitter:{enumerable:true,value:c},phonyFractionLost:{enumerable:true,value:u}});return s}
/**
   * Create a {@link ReceiverReport}.
   * @param {string} trackId
   * @param {RTCStats} olderStats
   * @param {RTCStats} newerStats
   * @returns {ReceiverReport}
   */ReceiverReport.of=function(e,t,r){if(t.id!==r.id)throw new Error("RTCStats IDs must match");var n=(r.timestamp-t.timestamp)/1e3;var i=r.bytesReceived-t.bytesReceived;var a=n>0?i/n*8:0;var o=Math.max(r.packetsLost-t.packetsLost,0);var c=r.packetsReceived-t.packetsReceived;var s=r.fractionLost,u=r.jitter;return new ReceiverReport(t.id,e,a,o,c,s,u)};
/**
   * Summarize {@link ReceiverReport}s by summing and averaging their values.
   * @param {Array<ReceiverReport>} reports
   * @returns {ReceiverSummary}
   */ReceiverReport.summarize=function(e){var t=e.map((function(e){return e.summarize()}));var r=W_(t.map((function(e){return e.bitrate})));var n=$_(t.map((function(e){return e.fractionLost})));var i=$_(t.map((function(e){return e.jitter})));return{bitrate:r,fractionLost:n,jitter:i}};
/**
   * Summarize the {@link ReceiveReport}.
   * @returns {ReceiverSummary}
   */ReceiverReport.prototype.summarize=function(){return{bitrate:this.bitrate,fractionLost:"number"===typeof this.fractionLost?this.fractionLost:this.phonyFractionLost,jitter:this.jitter}};return ReceiverReport}(H_);B_=Q_;var q_=B_;var z_={};var G_=z_&&z_.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var K_=A_;var J_=V_;var Y_=F_;var X_=function(e){G_(SenderReport,e);
/**
   * Construct a {@link SenderReport}.
   * @param {StatsId} id
   * @param {TrackId} trackId
   * @param {number} bitrate - bps
   * @param {number} [rtt] - s
   */function SenderReport(t,r,n,i){var a=e.call(this,t,r,n)||this;Object.defineProperties(a,{rtt:{enumerable:true,value:i}});return a}
/**
   * Create a {@link SenderReport}.
   * @param {string} trackId
   * @param {RTCStats} olderStats
   * @param {RTCStats} newerStats
   * @param {RTCRemoteInboundRtpStreamStats} [newerRemoteStats]
   * @returns {SenderReport}
   */SenderReport.of=function(e,t,r,n){if(t.id!==r.id)throw new Error("RTCStats IDs must match");var i=(r.timestamp-t.timestamp)/1e3;var a=r.bytesSent-t.bytesSent;var o=i>0?a/i*8:0;var c=n&&"number"===typeof n.roundTripTime?n.roundTripTime/1e3:void 0;return new SenderReport(t.id,e,o,c)};
/**
   * Summarize {@link SenderReport}s by summing and averaging their values.
   * @param {Array<SenderReport>} reports
   * @returns {SenderSummary}
   */SenderReport.summarize=function(e){var t=Y_(e.map((function(e){return e.bitrate})));var r=K_(e.map((function(e){return e.rtt})));return{bitrate:t,rtt:r}};return SenderReport}(J_);z_=X_;var Z_=z_;var em={};var tm=q_;var rm=Z_;var nm=function(){
/**
   * Construct a {@link PeerConnectionReport}.
   * @param {IceReport} ice
   * @param {SenderAndReceiverReports} audio
   * @param {SenderAndReceiverReports} video
   */
function PeerConnectionReport(e,t,r){Object.defineProperties(this,{ice:{enumerable:true,value:e},audio:{enumerable:true,value:t},video:{enumerable:true,value:r}})}
/**
   * Summarize the {@link PeerConnectionReport} by summarizing its
   * {@link SenderReport}s and {@link ReceiverReport}s.
   * @returns {PeerConnectionSummary}
   */PeerConnectionReport.prototype.summarize=function(){var e=this.audio.send.concat(this.video.send);var t=rm.summarize(e);var r=this.audio.recv.concat(this.video.recv);var n=tm.summarize(r);return{ice:this.ice,send:t,recv:n,audio:{send:rm.summarize(this.audio.send),recv:tm.summarize(this.audio.recv)},video:{send:rm.summarize(this.video.send),recv:tm.summarize(this.video.recv)}}};return PeerConnectionReport}();em=nm;var im=em;var am={};var om=function(){
/**
   * @param {StatsId} id
   * @param {TrackId} trackId
   * @param {RTCStats} initialStats
   */
function SenderOrReceiverReportFactory(e,t,r){Object.defineProperties(this,{id:{enumerable:true,value:e,writable:true},trackId:{enumerable:true,value:t,writable:true},lastStats:{enumerable:true,value:r,writable:true}})}return SenderOrReceiverReportFactory}();am=om;var cm=am;var sm={};var um=sm&&sm.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var lm=q_;var dm=cm;
/**
 * @extends SenderOrReceiverReportFactory
 * @param {?ReceiverReport} lastReport
 */var pm=function(e){um(ReceiverReportFactory,e);
/**
   * Construct a {@link ReceiverReportFactory}.
   * @param {TrackId} trackId
   * @param {RTCStats} initialStats
   */function ReceiverReportFactory(t,r){var n=e.call(this,r.id,t,r)||this;Object.defineProperties(n,{lastReport:{enumerable:true,value:null,writable:true}});return n}
/**
   * Create a {@link ReceiverReport}.
   * @param {TrackId} trackId
   * @param {RTCStats} newerStats
   * @returns {ReceiverReport}
   */ReceiverReportFactory.prototype.next=function(e,t){var r=this.lastStats;this.lastStats=t;this.trackId=e;var n=lm.of(e,r,t);this.lastReport=n;return n};return ReceiverReportFactory}(dm);sm=pm;var fm=sm;var vm={};var hm=vm&&vm.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var _m=cm;var mm=Z_;var gm=function(e){hm(SenderReportFactory,e);
/**
   * Construct a {@link SenderReportFactory}.
   * @param {TrackId} trackId
   * @param {RTCStats} initialStats
   */function SenderReportFactory(t,r){var n=e.call(this,r.id,t,r)||this;Object.defineProperties(n,{lastReport:{enumerable:true,value:null,writable:true}});return n}
/**
   * @param {TrackId} trackId
   * @param {RTCStats} newerStats
   * @param {RTCRemoteInboundRtpStreamStats} [newerRemoteStats]
   * @returns {SenderReport}
   */SenderReportFactory.prototype.next=function(e,t,r){var n=this.lastStats;this.lastStats=t;this.trackId=e;var i=mm.of(e,n,t,r);this.lastReport=i;return i};return SenderReportFactory}(_m);vm=gm;var ym=vm;var bm={};var km=bm&&bm.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};var Sm=bm&&bm.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};var Tm=bm&&bm.__values||function(e){var t="function"===typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"===typeof e.length)return{next:function(){e&&n>=e.length&&(e=void 0);return{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};var wm=U.guessBrowser;var Cm=I_;var Pm=im;var Om=fm;var Em=ym;
/**
 * @typedef {string} TrackId
 */
/**
 * @typedef {string} StatsId
 */var Rm=function(){
/**
   * Construct a {@link PeerConnectionReportFactory}.
   * @param {RTCPeerConnection} pc
   */
function PeerConnectionReportFactory(e){Object.defineProperties(this,{pc:{enumerable:true,value:e},ice:{enumerable:true,value:new Cm},audio:{enumerable:true,value:{send:new Map,recv:new Map}},video:{enumerable:true,value:{send:new Map,recv:new Map}},lastReport:{enumerable:true,value:null,writable:true}})}
/**
   * Create a {@link PeerConnectionReport}.
   * @returns {Promise<PeerConnectionReport>}
   */PeerConnectionReportFactory.prototype.next=function(){var e=this;var t="firefox"===wm()?updateFirefox(this):updateChrome(this);return t.then((function(){var t=Sm([],km(e.audio.send.values()));var r=Sm([],km(e.video.send.values()));var n=Sm([],km(e.audio.recv.values()));var i=Sm([],km(e.video.recv.values()));var a=new Pm(e.ice.lastReport,{send:t.map((function(e){return e.lastReport})).filter((function(e){return e})),recv:n.map((function(e){return e.lastReport})).filter((function(e){return e}))},{send:r.map((function(e){return e.lastReport})).filter((function(e){return e})),recv:i.map((function(e){return e.lastReport})).filter((function(e){return e}))});e.lastReport=a;return a}))};return PeerConnectionReportFactory}();
/**
 * Construct a Map from MediaStreamTrack Ids to RTCStatsReports.
 * @param {Array<RTCRtpSender>|Array<RTCRtpReceiver>} sendersOrReceivers - each
 *   RTCRtpSender should have a non-null track
 * @returns {Promise<Map<TrackId, RTCStats>>}
 */function getSenderOrReceiverReports(e){return Promise.all(e.map((function(e){var t=e.track.id;return e.getStats().then((function(e){var r,n;try{for(var i=Tm(e.values()),a=i.next();!a.done;a=i.next()){var o=a.value;"inbound-rtp"===o.type&&(o.id=t+"-"+o.id)}}catch(e){r={error:e}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return[t,e]}))}))).then((function(e){return new Map(e)}))}
/**
 * @param {SenderReportFactory.constructor} SenderReportFactory
 * @param {SenderReportFactoriesByMediaType} sendersByMediaType
 * @param {RTCStatsReport} report
 * @param {RTCStats} stats
 * @param {TrackId} [trackId]
 * @returns {?SenderReportFactory}
 */
/**
    * @param {ReceiverReportFactory.constructor} ReceiverReportFactory
    * @param {ReceiverReportFactoriesByMediaType} receiversByMediaType
    * @param {RTCStatsReport} report
    * @param {RTCStats} stats
    * @param {TrackId} [trackId]
    * @returns {?ReceiverReportFactory}
    */function getOrCreateSenderOrReceiverReportFactory(e,t,r,n,i){var a=t[n.mediaType];if(!i){var o=r.get(n.trackId);o&&(i=o.trackIdentifier)}if(a&&i){if(a.has(n.id))return a.get(n.id);var c=new e(i,n);a.set(n.id,c)}return null}
/**
 * @param {PeerConnectionReportFactory} factory
 * @returns {SenderReportFactoriesByMediaType}
 */function getSenderReportFactoriesByMediaType(e){return{audio:e.audio.send,video:e.video.send}}
/**
 * @param {PeerConnectionReportFactory} factory
 * @returns {ReceiverReportFactoriesByMediaType}
 */function getReceiverReportFactoriesByMediaType(e){return{audio:e.audio.recv,video:e.video.recv}}
/**
 * @param {PeerConnectionReportFactory} factory
 * @param {RTCStatsReport} report
 * @param {RTCStats} stats
 * @param {TrackId} [trackId]
 * @returns {?SenderReportFactory}
 */function getOrCreateSenderReportFactory(e,t,r,n){return getOrCreateSenderOrReceiverReportFactory(Em,getSenderReportFactoriesByMediaType(e),t,r,n)}
/**
 * @param {PeerConnectionReportFactory} factory
 * @param {RTCStatsReport} report
 * @param {RTCStats} stats
 * @param {TrackId} [trackId]
 * @returns {?ReceiverReportFactory}
 */function getOrCreateReceiverReportFactory(e,t,r,n){return getOrCreateSenderOrReceiverReportFactory(Om,getReceiverReportFactoriesByMediaType(e),t,r,n)}
/**
 * @param {PeerConnectionReportFactory} factory
 * @retuns {StatsIdsByMediaType}
 */function getSenderReportFactoryIdsByMediaType(e){return{audio:new Set(e.audio.send.keys()),video:new Set(e.video.send.keys())}}
/**
 * @param {PeerConnectionReportFactory} factory
 * @retuns {StatsIdsByMediaType}
 */function getReceiverReportFactoryIdsByMediaType(e){return{audio:new Set(e.audio.recv.keys()),video:new Set(e.video.recv.keys())}}
/**
 * @param {PeerConnectionReportFactory} factory
 * @param {RTCStatsReport} report
 * @param {StatsIdsByMediaType} senderReportFactoryIdsToDeleteByMediaType
 * @param {TrackId} [trackId]
 * @returns {void}
 */function updateSenderReports(e,t,r,n){var i,a;try{for(var o=Tm(t.values()),c=o.next();!c.done;c=o.next()){var s=c.value;if("outbound-rtp"===s.type&&!s.isRemote){if("firefox"!==wm()&&!s.trackId)continue;var u=r[s.mediaType];u&&u.delete(s.id);var l=getOrCreateSenderReportFactory(e,t,s,n);if(l){var d=t.get(s.remoteId);l.next(n||l.trackId,s,d)}}}}catch(e){i={error:e}}finally{try{c&&!c.done&&(a=o.return)&&a.call(o)}finally{if(i)throw i.error}}}
/**
 * @param {PeerConnectionReportFactory} factory
 * @param {RTCStatsReport} report
 * @param {StatsIdsByMediaType} receiverReportFactoryIdsToDeleteByMediaType
 * @param {TrackId} [trackId]
 * @returns {void}
 */function updateReceiverReports(e,t,r,n){var i,a;try{for(var o=Tm(t.values()),c=o.next();!c.done;c=o.next()){var s=c.value;if("inbound-rtp"===s.type&&!s.isRemote){var u=r[s.mediaType];u&&u.delete(s.id);var l=getOrCreateReceiverReportFactory(e,t,s,n);l&&l.next(n||l.trackId,s)}}}catch(e){i={error:e}}finally{try{c&&!c.done&&(a=o.return)&&a.call(o)}finally{if(i)throw i.error}}}
/**
 * @param {SenderReportFactoriesByMediaType|ReceiverReportFactoriesByMediaType} senderOrReceiverReportFactoriesByMediaType
 * @param {StatsIdsByMediaType} senderOrReceiverReportFactoryIdsByMediaType
 * @returns {void}
 */function deleteSenderOrReceiverReportFactories(e,t){var _loop_1=function(r){var n=e[r];var i=t[r];i.forEach((function(e){return n.delete(e)}))};for(var r in t)_loop_1(r)}
/**
 * @param {IceReportFactory} ice
 * @param {RTCStatsReport} report
 * @returns {void}
 */function updateIceReport(e,t){var r,n,i,a;var o;try{for(var c=Tm(t.values()),s=c.next();!s.done;s=c.next()){var u=s.value;"transport"===u.type&&(o=t.get(u.selectedCandidatePairId))}}catch(e){r={error:e}}finally{try{s&&!s.done&&(n=c.return)&&n.call(c)}finally{if(r)throw r.error}}if(o)e.next(o);else try{for(var l=Tm(t.values()),d=l.next();!d.done;d=l.next()){u=d.value;"candidate-pair"!==u.type||!u.nominated||"selected"in u&&!u.selected||e.next(u)}}catch(e){i={error:e}}finally{try{d&&!d.done&&(a=l.return)&&a.call(l)}finally{if(i)throw i.error}}}
/**
 * @param {PeerConnectionReportFactory} factory
 * @returns {Promise<PeerConnectionReport>}
 */function updateFirefox(e){var t=e.pc.getTransceivers().filter((function(e){return e.currentDirection&&e.currentDirection.match(/send/)&&e.sender.track})).map((function(e){return e.sender}));var r=e.pc.getTransceivers().filter((function(e){return e.currentDirection&&e.currentDirection.match(/recv/)})).map((function(e){return e.receiver}));return Promise.all([getSenderOrReceiverReports(t),getSenderOrReceiverReports(r),e.pc.getStats()]).then((function(t){var r=km(t,3),n=r[0],i=r[1],a=r[2];var o=getSenderReportFactoriesByMediaType(e);var c=getSenderReportFactoryIdsByMediaType(e);n.forEach((function(t,r){return updateSenderReports(e,t,c,r)}));deleteSenderOrReceiverReportFactories(o,c);var s=getReceiverReportFactoriesByMediaType(e);var u=getReceiverReportFactoryIdsByMediaType(e);i.forEach((function(t,r){return updateReceiverReports(e,t,u,r)}));deleteSenderOrReceiverReportFactories(s,u);updateIceReport(e.ice,a)}))}
/**
 * @param {PeerConnectionReportFactory} factory
 * @returns {Promise<PeerConnectionReport>}
 */function updateChrome(e){return e.pc.getStats().then((function(t){var r=getSenderReportFactoriesByMediaType(e);var n=getSenderReportFactoryIdsByMediaType(e);updateSenderReports(e,t,n);deleteSenderOrReceiverReportFactories(r,n);var i=getReceiverReportFactoriesByMediaType(e);var a=getReceiverReportFactoryIdsByMediaType(e);updateReceiverReports(e,t,a);deleteSenderOrReceiverReportFactories(i,a);updateIceReport(e.ice,t)}))}bm=Rm;var Lm=bm;var Mm="default"in e?e.default:e;var Im={};var jm=Im&&Im.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Am=Im&&Im.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};var Dm=Mm;var xm=Lm;var Vm=function(e){jm(NetworkQualityMonitor,e);
/**
   * Construct a {@link NetworkQualityMonitor}.
   * @param {PeerConnectionManager} manager
   * @param {NetworkQualitySignaling} signaling
   */function NetworkQualityMonitor(t,r){var n=e.call(this)||this;Object.defineProperties(n,{_factories:{value:new WeakMap},_manager:{value:t},_signaling:{value:r}});r.on("updated",(function(){return n.emit("updated")}));return n}Object.defineProperty(NetworkQualityMonitor.prototype,"level",{
/**
     * Get the current {@link NetworkQualityLevel}, if any.
     * @returns {?NetworkQualityLevel} level - initially null
     */
get:function(){return this._signaling.level},enumerable:false,configurable:true});Object.defineProperty(NetworkQualityMonitor.prototype,"levels",{
/**
     * Get the current {@link NetworkQualityLevels}, if any.
     * @returns {?NetworkQualityLevels} levels - initially null
     */
get:function(){return this._signaling.levels},enumerable:false,configurable:true});Object.defineProperty(NetworkQualityMonitor.prototype,"remoteLevels",{
/**
     * Get the current {@link NetworkQualityLevels} of remote participants, if any.
     * @returns {Map<String, NetworkQualityLevels>} remoteLevels
     */
get:function(){return this._signaling.remoteLevels},enumerable:false,configurable:true});
/**
   * Start monitoring.
   * @returns {void}
   */NetworkQualityMonitor.prototype.start=function(){var e=this;this.stop();var t=setTimeout((function(){e._timeout===t&&next(e).then((function(r){if(e._timeout===t){if(r.length){var n=Am(r,1),i=n[0];e._signaling.put(i)}e.start()}}))}),200);this._timeout=t};
/**
   * Stop monitoring.
   * @returns {void}
   */NetworkQualityMonitor.prototype.stop=function(){clearTimeout(this._timeout);this._timeout=null};return NetworkQualityMonitor}(Dm);
/**
 * @param {NetworkQualityMonitor}
 * @returns {Promise<NetworkQualityInputs>}
 */function next(e){var t=e._manager._peerConnections?Array.from(e._manager._peerConnections.values()):[];var r=t.map((function(e){return e._peerConnection})).filter((function(e){return"closed"!==e.signalingState}));var n=r.map((function(t){if(e._factories.has(t))return e._factories.get(t);var r=new xm(t);e._factories.set(t,r);return r}));var i=n.map((function(e){return e.next().catch((function(){return null}))}));return Promise.all(i).then((function(e){return e.filter((function(e){return e})).map((function(e){return e.summarize()}))}))}Im=Vm;var Nm=Im;var Fm={};var Bm=Y.defer;var Um=function(){function AsyncVar(){Object.defineProperties(this,{_deferreds:{value:[]},_hasValue:{value:false,writable:true},_value:{value:null,writable:true}})}
/**
   * Put a value into the {@link AsyncVar}.
   * @param {T} value
   * @returns {this}
   */AsyncVar.prototype.put=function(e){this._hasValue=true;this._value=e;var t=this._deferreds.shift();t&&t.resolve(e);return this};
/**
   * Take the value out of the {@link AsyncVar}.
   * @returns {Promise<T>}
   */AsyncVar.prototype.take=function(){var e=this;if(this._hasValue&&!this._deferreds.length){this._hasValue=false;return Promise.resolve(this._value)}var t=Bm();this._deferreds.push(t);return t.promise.then((function(t){e._hasValue=false;return t}))};return AsyncVar}();Fm=Um;var $m=Fm;var Hm={};var Wm=Hm&&Hm.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Qm=b_;var qm=$m;var zm=lo;var Gm=5e3;
/**
 * The {@link MediaSignalingTransport} received a message.
 * @event MediaSignalingTransport#message
 * @param {object} message
 */
/**
 * @typedef {PeerConnectionSummary} NetworkQualityInputs
 */var Km=function(e){Wm(NetworkQualitySignaling,e);
/**
   * Construct a {@link NetworkQualitySignaling}.
   * @param {Promise<DataTrackReceiver>} getReceiver
   * @param {NetworkQualityConfigurationImpl} networkQualityConfiguration
   */function NetworkQualitySignaling(t,r,n){var i=e.call(this,t,"network_quality",n)||this;Object.defineProperties(i,{_level:{value:null,writable:true},_levels:{value:null,writable:true},_remoteLevels:{value:new Map,writable:true},_networkQualityInputs:{value:new qm},_resendTimer:{value:new zm((function(){i._resendTimer.setDelay(1.5*i._resendTimer.delay);i._sendNetworkQualityInputs()}),Gm,false)},_networkQualityReportLevels:{get:function(){return{reportLevel:r.local,remoteReportLevel:r.remote}}}});i.on("ready",(function(e){e.on("message",(function(e){i._log.debug("Incoming: ",e);switch(e.type){case"network_quality":i._handleNetworkQualityMessage(e);break;default:break}}))}));i._sendNetworkQualityInputs();return i}Object.defineProperty(NetworkQualitySignaling.prototype,"level",{
/**
     * Get the current {@link NetworkQualityLevel}, if any.
     * @returns {?NetworkQualityLevel} level - initially null
     */
get:function(){return this._level},enumerable:false,configurable:true});Object.defineProperty(NetworkQualitySignaling.prototype,"levels",{
/**
     * Get the current {@link NetworkQualityLevels}, if any.
     * @returns {?NetworkQualityLevels} levels - initially null
     */
get:function(){return this._levels},enumerable:false,configurable:true});Object.defineProperty(NetworkQualitySignaling.prototype,"remoteLevels",{
/**
     * Get the current {@link NetworkQualityLevels} of remote participants, if any.
     * @returns {Map<String, NetworkQualityLevels>} remoteLevels
     */
get:function(){return this._remoteLevels},enumerable:false,configurable:true});
/**
   * Check to see if the {@link NetworkQualityLevel} is new, and raise an
   * event if necessary.
   * @private
   * @param {object} message
   * @returns {void}
   */NetworkQualitySignaling.prototype._handleNetworkQualityMessage=function(e){var t=this;var r=false;var n=null;var i=e?e.local:null;if("number"===typeof i){n=i;this._levels=null}else if("object"===typeof i&&i){this._levels=i;n="number"===typeof i.level?i.level:Math.min(i.audio.send,i.audio.recv,i.video.send,i.video.recv)}if(null!==n&&this.level!==n){this._level=n;r=true}this._remoteLevels=e&&e.remotes?e.remotes.reduce((function(e,n){var i=t._remoteLevels.get(n.sid)||{};i.level!==n.level&&(r=true);return e.set(n.sid,n)}),new Map):this._remoteLevels;r&&this.emit("updated");this._resendTimer.setDelay(Gm);this._resendTimer.isSet&&setTimeout((function(){return t._sendNetworkQualityInputs()}),1e3)};
/**
   * Start sending {@link NetworkQualityInputs}.
   * @private
   * @returns {Promise<void>}
   */NetworkQualitySignaling.prototype._sendNetworkQualityInputs=function(){var e=this;this._resendTimer.clear();return this._networkQualityInputs.take().then((function(t){e._transport&&e._transport.publish(createNetworkQualityInputsMessage(t,e._networkQualityReportLevels))})).finally((function(){e._resendTimer.start()}))};
/**
   * Put {@link NetworkQualityInputs} to be used for computing
   * {@link NetworkQualityLevel}.
   * @param {NetworkQualityInputs} networkQualityInputs
   * @returns {void}
   */NetworkQualitySignaling.prototype.put=function(e){this._networkQualityInputs.put(e)};return NetworkQualitySignaling}(Qm);
/**
 * @typedef {object} NetworkQualityReportLevels
 * @param {number} reportLevel
 * @param {number} remoteReportLevel
 */
/**
 * @param {NetworkQualityInputs} networkQualityInputs
 * @param {NetworkQualityReportLevels} networkQualityReportLevels
 * @returns {object} message
 */function createNetworkQualityInputsMessage(e,t){return Object.assign({type:"network_quality"},e,t)}Hm=Km;var Jm=Hm;var Ym="default"in e?e.default:e;var Xm={};var Zm=Xm&&Xm.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var eg=Ym.EventEmitter;var tg=function(e){Zm(RecordingSignaling,e);function RecordingSignaling(){var t=e.call(this)||this;Object.defineProperties(t,{_isEnabled:{value:null,writable:true},isEnabled:{enumerable:true,get:function(){return this._isEnabled}}});return t}RecordingSignaling.prototype.disable=function(){return this.enable(false)};
/**
   * Enable (or disable) the {@link RecordingSignaling} if it is not already enabled
   * (or disabled).
   * @param {boolean} [enabled=true]
   * @return {this}
   */RecordingSignaling.prototype.enable=function(e){e="boolean"!==typeof e||e;if(this.isEnabled!==e){this._isEnabled=e;this.emit("updated")}return this};return RecordingSignaling}(eg);Xm=tg;var rg=Xm;var ng={};var ig=ng&&ng.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var ag=rg;var og=function(e){ig(RecordingV2,e);function RecordingV2(){var t=e.call(this)||this;Object.defineProperties(t,{_revision:{value:1,writable:true}});return t}
/**
   * Compare the {@link RecordingV2} to a {@link RecordingV2#Representation}
   * of itself and perform any updates necessary.
   * @param {RecordingV2#Representation} recording
   * @returns {this}
   * @fires RecordingSignaling#updated
   */RecordingV2.prototype.update=function(e){if(e.revision<this._revision)return this;this._revision=e.revision;return this.enable(e.is_recording)};return RecordingV2}(ag);
/**
 * The Room Signaling Protocol (RSP) representation of a {@link RecordingV2}
 * @typedef {object} RecordingV2#Representation
 * @property {boolean} enabled
 * @property {number} revision
 */ng=og;var cg=ng;var sg={};var ug=sg&&sg.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var lg=rg;var dg=io;var pg=lo;var fg=Y.buildLogLevels;var vg=v.DEFAULT_LOG_LEVEL;var hg=R;var _g=tc,mg=_g.MediaConnectionError,gg=_g.MediaDTLSTransportFailedError,yg=_g.SignalingConnectionDisconnectedError;var bg=0;var kg={connected:["reconnecting","disconnected"],reconnecting:["connected","disconnected"],disconnected:[]};var Sg=function(e){ug(RoomSignaling,e);
/**
   * Construct a {@link RoomSignaling}.
   * @param {ParticipantSignaling} localParticipant
   * @param {Room.SID} sid
   * @param {string} name
   * @param {object} options
   */function RoomSignaling(t,r,n,i){var a=this;i=Object.assign({logLevel:vg,RecordingSignaling:lg,Timeout:pg},i);var o=fg(i.logLevel);a=e.call(this,"connected",kg)||this;var c=i.RecordingSignaling;var s=new i.Timeout((function(){a._disconnect(a._reconnectingError)}),i.sessionTimeout,false);Object.defineProperties(a,{_instanceId:{value:bg++},_log:{value:i.log?i.log.createLog("default",a):new hg("default",a,o,i.loggerName)},_mediaConnectionIsReconnecting:{writable:true,value:false},_options:{value:i},_reconnectingError:{value:null,writable:true},_sessionTimeout:{value:s},dominantSpeakerSid:{enumerable:true,value:null,writable:true},localParticipant:{enumerable:true,value:t},name:{enumerable:true,value:n},participants:{enumerable:true,value:new Map},recording:{enumerable:true,value:new c},sid:{enumerable:true,value:r}});a.on("connectionStateChanged",(function(){"failed"!==a.connectionState||["disconnected","failed"].includes(a.iceConnectionState)||a._disconnect(new gg)}));a.on("iceConnectionStateChanged",(function(){return maybeUpdateState(a)}));a.on("signalingConnectionStateChanged",(function(){return maybeUpdateState(a)}));setTimeout((function(){return maybeUpdateState(a)}));return a}
/**
   * Disconnect, possibly with an Error.
   * @private
   * @param {Error} [error]
   * @returns {boolean}
   */RoomSignaling.prototype._disconnect=function(e){if("disconnected"!==this.state){this.preempt("disconnected",null,[e]);return true}return false};RoomSignaling.prototype.toString=function(){return"[RoomSignaling #"+this._instanceId+": "+(this.localParticipant?this.localParticipant.sid:"null")+"]"};
/**
   * Connect {@link RemoteParticipantSignaling} to the {@link RoomSignaling}.
   * @param {RemoteParticipantSignaling} participant
   * @returns {boolean}
   */RoomSignaling.prototype.connectParticipant=function(e){var t=this;if("disconnected"===e.state)return false;if(this.participants.has(e.sid))return false;this.participants.set(e.sid,e);e.on("stateChanged",(function stateChanged(r){if("disconnected"===r){e.removeListener("stateChanged",stateChanged);t.participants.delete(e.sid);t.emit("participantDisconnected",e)}}));this.emit("participantConnected",e);return true};
/**
   * Disconnect.
   * @returns {boolean}
   */RoomSignaling.prototype.disconnect=function(){return this._disconnect()};
/**
   * Set (or unset) the Dominant Speaker.
   * @param {?Participant.SID} dominantSpeakerSid
   * @returns {void}
   */RoomSignaling.prototype.setDominantSpeaker=function(e){this.dominantSpeakerSid=e;this.emit("dominantSpeakerChanged")};return RoomSignaling}(dg);
/**
 * {@link RemoteParticipantSignaling} connected to the {@link RoomSignaling}.
 * @event RoomSignaling#event:participantConnected
 * @param {RemoteParticipantSignaling} participantSignaling
 */
/**
 * {@link RemoteParticipantSignaling} disconnected from the {@link RoomSignaling}.
 * @event RoomSignaling#event:participantDisconnected
 * @param {RemoteParticipantSignaling} participantSignaling
 */
/**
 * Maybe update the {@link RoomSignaling} state.
 * @param {RoomSignaling} roomSignaling
 */function maybeUpdateState(e){if("disconnected"!==e.state&&"disconnected"!==e.signalingConnectionState){var t;if("reconnecting"===e.signalingConnectionState)t=e.signalingConnectionState;else if("failed"===e.iceConnectionState){e._mediaConnectionIsReconnecting=true;t="reconnecting"}else if("new"===e.iceConnectionState||"checking"===e.iceConnectionState)t=e._mediaConnectionIsReconnecting?"reconnecting":"connected";else{e._mediaConnectionIsReconnecting=false;e._reconnectingError=null;e._sessionTimeout.clear();t="connected"}if(t!==e.state)if("reconnecting"===t){e._reconnectingError="reconnecting"===e.signalingConnectionState?new yg:new mg;e._sessionTimeout.start();e.preempt(t,null,[e._reconnectingError])}else e.preempt(t)}else e._sessionTimeout.clear()}sg=Sg;var Tg=sg;var wg={};var Cg=function(){
/**
   * Construct a {@link NetworkQualityBandwidthStats}.
   * @param {BandwidthStats} bandwidthStats
   */
function NetworkQualityBandwidthStats(e){var t=e.actual,r=void 0===t?null:t,n=e.available,i=void 0===n?null:n,a=e.level,o=void 0===a?null:a;Object.defineProperties(this,{actual:{value:r,enumerable:true},available:{value:i,enumerable:true},level:{value:o,enumerable:true}})}return NetworkQualityBandwidthStats}();wg=Cg;var Pg=wg;var Og={};var Eg=function(){
/**
   * Construct a {@link NetworkQualityFractionLostStats}.
   * @param {FractionLostStats} fractionLostStats
   */
function NetworkQualityFractionLostStats(e){var t=e.fractionLost,r=void 0===t?null:t,n=e.level,i=void 0===n?null:n;Object.defineProperties(this,{fractionLost:{value:r,enumerable:true},level:{value:i,enumerable:true}})}return NetworkQualityFractionLostStats}();Og=Eg;var Rg=Og;var Lg={};var Mg=function(){
/**
   * Construct a {@link NetworkQualityLatencyStats}.
   * @param {LatencyStats} latencyStats
   */
function NetworkQualityLatencyStats(e){var t=e.jitter,r=void 0===t?null:t,n=e.rtt,i=void 0===n?null:n,a=e.level,o=void 0===a?null:a;Object.defineProperties(this,{jitter:{value:r,enumerable:true},rtt:{value:i,enumerable:true},level:{value:o,enumerable:true}})}return NetworkQualityLatencyStats}();Lg=Mg;var Ig=Lg;var jg={};var Ag=Pg;var Dg=Rg;var xg=Ig;var Vg=function(){
/**
   * Construct a {@link NetworkQualitySendOrRecvStats}.
   * @param {SendOrRecvStats} sendOrRecvStats
   */
function NetworkQualitySendOrRecvStats(e){var t=e.bandwidth,r=void 0===t?null:t,n=e.fractionLost,i=void 0===n?null:n,a=e.latency,o=void 0===a?null:a;Object.defineProperties(this,{bandwidth:{value:r?new Ag(r):null,enumerable:true},fractionLost:{value:i?new Dg(i):null,enumerable:true},latency:{value:o?new xg(o):null,enumerable:true}})}return NetworkQualitySendOrRecvStats}();jg=Vg;var Ng=jg;var Fg={};var Bg=Fg&&Fg.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Ug=Ng;var $g=function(e){Bg(NetworkQualitySendStats,e);
/**
   * Construct a {@link NetworkQualitySendStats}.
   * @param {SendOrRecvStats} sendOrRecvStats
   */function NetworkQualitySendStats(t){return e.call(this,t)||this}return NetworkQualitySendStats}(Ug);Fg=$g;var Hg=Fg;var Wg={};var Qg=Wg&&Wg.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var qg=Ng;var zg=function(e){Qg(NetworkQualityRecvStats,e);
/**
   * Construct a {@link NetworkQualityRecvStats}.
   * @param {SendOrRecvStats} sendOrRecvStats
   */function NetworkQualityRecvStats(t){return e.call(this,t)||this}return NetworkQualityRecvStats}(qg);Wg=zg;var Gg=Wg;var Kg={};var Jg=Hg;var Yg=Gg;var Xg=function(){
/**
   * Construct a {@link NetworkQualityMediaStats}.
   * @param {MediaLevels} mediaLevels
   */
function NetworkQualityMediaStats(e){var t=e.send,r=e.recv,n=e.sendStats,i=void 0===n?null:n,a=e.recvStats,o=void 0===a?null:a;Object.defineProperties(this,{send:{value:t,enumerable:true},recv:{value:r,enumerable:true},sendStats:{value:i?new Jg(i):null,enumerable:true},recvStats:{value:o?new Yg(o):null,enumerable:true}})}return NetworkQualityMediaStats}();Kg=Xg;var Zg=Kg;var ey={};var ty=ey&&ey.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var ry=Zg;var ny=function(e){ty(NetworkQualityAudioStats,e);
/**
   * Construct a {@link NetworkQualityAudioStats}.
   * @param {MediaLevels} mediaLevels
   */function NetworkQualityAudioStats(t){return e.call(this,t)||this}return NetworkQualityAudioStats}(ry);ey=ny;var iy=ey;var ay={};var oy=ay&&ay.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var cy=Zg;var sy=function(e){oy(NetworkQualityVideoStats,e);
/**
   * Construct a {@link NetworkQualityVideoStats}.
   * @param {MediaLevels} mediaLevels
   */function NetworkQualityVideoStats(t){return e.call(this,t)||this}return NetworkQualityVideoStats}(cy);ay=sy;var uy=ay;var ly={};var dy=iy;var py=uy;var fy=function(){
/**
   * Construct a {@link NetworkQualityStats}.
   * @param {NetworkQualityLevels} networkQualityLevels
   */
function NetworkQualityStats(e){var t=e.level,r=e.audio,n=e.video;Object.defineProperties(this,{level:{value:t,enumerable:true},audio:{value:r?new dy(r):null,enumerable:true},video:{value:n?new py(n):null,enumerable:true}})}return NetworkQualityStats}();ly=fy;var vy=ly;var hy={};var _y=hy&&hy.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var my=io;var gy=vy;var yy={connecting:["connected"],connected:["disconnected","reconnecting"],reconnecting:["connected","disconnected"],disconnected:[]};var by=function(e){_y(ParticipantSignaling,e);function ParticipantSignaling(){var t=e.call(this,"connecting",yy)||this;Object.defineProperties(t,{_identity:{writable:true,value:null},_networkQualityLevel:{value:null,writable:true},_networkQualityStats:{value:null,writable:true},_sid:{writable:true,value:null},identity:{enumerable:true,get:function(){return this._identity}},sid:{enumerable:true,get:function(){return this._sid}},tracks:{enumerable:true,value:new Map}});return t}Object.defineProperty(ParticipantSignaling.prototype,"networkQualityLevel",{
/**
     * Get the current {@link NetworkQualityLevel}, if any.
     * @returns {?NetworkQualityLevel} networkQualityLevel - initially null
     */
get:function(){return this._networkQualityLevel},enumerable:false,configurable:true});Object.defineProperty(ParticipantSignaling.prototype,"networkQualityStats",{
/**
     * Get the current {@link NetworkQualityStats}
     * @returns {?NetworkQualityStats} networkQualityStats - initially null
     */
get:function(){return this._networkQualityStats},enumerable:false,configurable:true});
/**
   * Add the {@link TrackSignaling}, MediaStreamTrack, or
   * {@link DataTrackSender} to the {@link ParticipantSignaling}.
   * @param {TrackSignaling|DataTrackSender|MediaTrackSender} track
   * @returns {this}
   * @fires ParticipantSignaling#trackAdded
   */ParticipantSignaling.prototype.addTrack=function(e){this.tracks.set(e.id||e.sid,e);this.emit("trackAdded",e);return this};
/**
   * Disconnect the {@link ParticipantSignaling}.
   * @returns {boolean}
   */ParticipantSignaling.prototype.disconnect=function(){if("disconnected"!==this.state){this.preempt("disconnected");return true}return false};
/**
   * Remove the {@link TrackSignaling}, MediaStreamTrack, or
   * {@link DataTrackSender} from the {@link ParticipantSignaling}.
   * @param {TrackSignaling|DataTrackSender|MediaTrackSender} track
   * @returns {?TrackSignaling}
   * @fires ParticipantSignaling#trackRemoved
   */ParticipantSignaling.prototype.removeTrack=function(e){var t=this.tracks.get(e.id||e.sid);this.tracks.delete(e.id||e.sid);t&&this.emit("trackRemoved",e);return t||null};
/**
   * @param {NetworkQualityLevel} networkQualityLevel
   * @param {?NetworkQualityLevels} [networkQualityLevels=null]
   * @returns {void}
   */ParticipantSignaling.prototype.setNetworkQualityLevel=function(e,t){if(this._networkQualityLevel!==e){this._networkQualityLevel=e;this._networkQualityStats=t&&(t.audio||t.video)?new gy(t):null;this.emit("networkQualityLevelChanged")}};
/**
   * Connect the {@link ParticipantSignaling}.
   * @param {Participant.SID} sid
   * @param {string} identity
   * @returns {boolean}
   */ParticipantSignaling.prototype.connect=function(e,t){if("connecting"===this.state||"reconnecting"===this.state){this._sid||(this._sid=e);this._identity||(this._identity=t);this.preempt("connected");return true}return false};
/**
   * Transition to "reconnecting" state.
   * @returns {boolean}
   */ParticipantSignaling.prototype.reconnecting=function(){if("connecting"===this.state||"connected"===this.state){this.preempt("reconnecting");return true}return false};return ParticipantSignaling}(my);
/**
 * {@link TrackSignaling} was added to the {@link ParticipantSignaling}.
 * @event ParticipantSignaling#trackAdded
 * @param {TrackSignaling} track
 */
/**
 * {@link TrackSignaling} was removed from the {@link ParticipantSignaling}.
 * @event ParticipantSignaling#trackRemoved
 * @param {TrackSignaling} track
 */hy=by;var ky=hy;var Sy={};var Ty=Sy&&Sy.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var wy=ky;var Cy=function(e){Ty(RemoteParticipantSignaling,e);
/**
   * Construct a {@link RemoteParticipantSignaling}.
   * @param {Participant.SID} sid
   * @param {string} identity
   */function RemoteParticipantSignaling(t,r){var n=e.call(this)||this;n.connect(t,r);return n}return RemoteParticipantSignaling}(wy);Sy=Cy;var Py=Sy;var Oy="default"in e?e.default:e;var Ey={};var Ry=Ey&&Ey.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Ly=Oy.EventEmitter;var My=function(e){Ry(TrackSignaling,e);
/**
   * Construct a {@link TrackSignaling}.
   * @param {string} name
   * @param {Track.Kind} kind
   * @param {boolean} isEnabled
   * @param {Track.Priority} priority
   */function TrackSignaling(t,r,n,i){var a=e.call(this)||this;var o=null;Object.defineProperties(a,{_error:{value:null,writable:true},_isEnabled:{value:n,writable:true},_priority:{value:i,writable:true},_trackTransceiver:{value:null,writable:true},_sid:{get:function(){return o},set:function(e){null===o&&(o=e)}},kind:{enumerable:true,value:r},name:{enumerable:true,value:t}});return a}Object.defineProperty(TrackSignaling.prototype,"error",{get:function(){return this._error},enumerable:false,configurable:true});Object.defineProperty(TrackSignaling.prototype,"isEnabled",{get:function(){return this._isEnabled},enumerable:false,configurable:true});Object.defineProperty(TrackSignaling.prototype,"priority",{get:function(){return this._priority},enumerable:false,configurable:true});Object.defineProperty(TrackSignaling.prototype,"sid",{get:function(){return this._sid},enumerable:false,configurable:true});Object.defineProperty(TrackSignaling.prototype,"trackTransceiver",{get:function(){return this._trackTransceiver},enumerable:false,configurable:true});TrackSignaling.prototype.disable=function(){return this.enable(false)};
/**
   * Enable (or disable) the {@link TrackSignaling} if it is not already enabled
   * (or disabled).
   * @param {boolean} [enabled=true]
   * @return {this}
   */TrackSignaling.prototype.enable=function(e){e="boolean"!==typeof e||e;if(this.isEnabled!==e){this._isEnabled=e;this.emit("updated")}return this};
/**
   * Set the {@link TrackTransceiver} on the {@link TrackSignaling}.
   * @param {TrackTransceiver} trackTransceiver
   * @returns {this}
   */TrackSignaling.prototype.setTrackTransceiver=function(e){e=e||null;if(this.trackTransceiver!==e){this._trackTransceiver=e;this.emit("updated")}return this};
/**
   * Set the SID on the {@link TrackSignaling} once.
   * @param {string} sid
   * @returns {this}
   */TrackSignaling.prototype.setSid=function(e){if(null===this.sid){this._sid=e;this.emit("updated")}return this};return TrackSignaling}(Ly);Ey=My;var Iy=Ey;var jy={};var Ay=jy&&jy.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Dy=Iy;var xy=function(e){Ay(RemoteTrackPublicationSignaling,e);
/**
   * Construct a {@link RemoteTrackPublicationSignaling}.
   * @param {Track.SID} sid
   * @param {string} name
   * @param {Track.Kind} kind
   * @param {boolean} isEnabled
   * @param {Track.Priority} priority
   * @param {boolean} isSwitchedOff
   */function RemoteTrackPublicationSignaling(t,r,n,i,a,o){var c=e.call(this,r,n,i,a)||this;Object.defineProperties(c,{_isSwitchedOff:{value:o,writable:true}});c.setSid(t);return c}Object.defineProperty(RemoteTrackPublicationSignaling.prototype,"isSubscribed",{get:function(){return!!this.trackTransceiver},enumerable:false,configurable:true});Object.defineProperty(RemoteTrackPublicationSignaling.prototype,"isSwitchedOff",{get:function(){return this._isSwitchedOff},enumerable:false,configurable:true});
/**
   * @param {Error} error
   * @returns {this}
   */RemoteTrackPublicationSignaling.prototype.subscribeFailed=function(e){if(!this.error){this._error=e;this.emit("updated")}return this};
/**
   * Update the publish {@link Track.Priority}.
   * @param {Track.Priority} priority
   * @returns {this}
   */RemoteTrackPublicationSignaling.prototype.setPriority=function(e){if(this._priority!==e){this._priority=e;this.emit("updated")}return this};
/**
   * Updates track switch on/off state.
   * @param {boolean} isSwitchedOff
   * @returns {this}
   */RemoteTrackPublicationSignaling.prototype.setSwitchedOff=function(e){if(this._isSwitchedOff!==e){this._isSwitchedOff=e;this.emit("updated")}return this};return RemoteTrackPublicationSignaling}(Dy);jy=xy;var Vy=jy;var Ny={};var Fy=Ny&&Ny.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var By=Vy;var Uy=function(e){Fy(RemoteTrackPublicationV2,e);
/**
   * Construct a {@link RemoteTrackPublicationV2}.
   * @param {RemoteTrackPublicationV2#Representation} track
   * @param {boolean} isSwitchedOff
   *
   */function RemoteTrackPublicationV2(t,r){return e.call(this,t.sid,t.name,t.kind,t.enabled,t.priority,r)||this}
/**
   * Compare the {@link RemoteTrackPublicationV2} to a
   * {@link RemoteTrackPublicationV2#Representation} of itself and perform any
   * updates necessary.
   * @param {RemoteTrackPublicationV2#Representation} track
   * @returns {this}
   * @fires TrackSignaling#updated
   */RemoteTrackPublicationV2.prototype.update=function(e){this.enable(e.enabled);this.setPriority(e.priority);return this};return RemoteTrackPublicationV2}(By);
/**
 * The Room Signaling Protocol (RSP) representation of a {@link RemoteTrackPublicationV2}.
 * @typedef {LocalTrackPublicationV2#Representation} RemoteTrackPublicationV2#Representation
 * @property {boolean} subscribed
 */Ny=Uy;var $y=Ny;var Hy={};var Wy=Hy&&Hy.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Qy=Py;var qy=$y;var zy=function(e){Wy(RemoteParticipantV2,e);
/**
   * Construct a {@link RemoteParticipantV2}.
   * @param {object} participantState
   * @param {function(Track.SID): boolean} getInitialTrackSwitchOffState
   * @param {function(Track.SID, Track.Priority): boolean} setPriority
   * @param {function(Track.SID, ClientRenderHint): Promise<void>} setRenderHint
   * @param {function(Track.SID): void} clearTrackHint
   * @param {object} [options]
   */function RemoteParticipantV2(t,r,n,i,a,o){var c=e.call(this,t.sid,t.identity)||this;o=Object.assign({RemoteTrackPublicationV2:qy},o);Object.defineProperties(c,{_revision:{writable:true,value:null},_RemoteTrackPublicationV2:{value:o.RemoteTrackPublicationV2},_getInitialTrackSwitchOffState:{value:r},updateSubscriberTrackPriority:{value:function(e,t){return n(e,t)}},updateTrackRenderHint:{value:function(e,t){return i(e,t)}},clearTrackHint:{value:function(e){return a(e)}},revision:{enumerable:true,get:function(){return this._revision}}});return c.update(t)}RemoteParticipantV2.prototype._getOrCreateTrack=function(e){var t=this._RemoteTrackPublicationV2;var r=this.tracks.get(e.sid);if(!r){var n=this._getInitialTrackSwitchOffState(e.sid);r=new t(e,n);this.addTrack(r)}return r};
/**
   * Update the {@link RemoteParticipantV2} with the new state.
   * @param {object} participantState
   * @returns {this}
   */RemoteParticipantV2.prototype.update=function(e){var t=this;if(null!==this.revision&&e.revision<=this.revision)return this;this._revision=e.revision;var r=new Set;e.tracks.forEach((function(e){var n=t._getOrCreateTrack(e);n.update(e);r.add(n)}));this.tracks.forEach((function(e){r.has(e)||t.removeTrack(e)}));switch(e.state){case"disconnected":this.disconnect();break;case"reconnecting":this.reconnecting();break;case"connected":this.connect(this.sid,this.identity);break}return this};return RemoteParticipantV2}(Qy);Hy=zy;var Gy=Hy;var Ky={};var Jy=Ky&&Ky.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Yy=b_;var Xy=function(e){Jy(TrackPrioritySignaling,e);
/**
   * Construct a {@link TrackPrioritySignaling}.
   * @param {Promise<DataTrackReceiver>} getReceiver
   */function TrackPrioritySignaling(t,r){var n=e.call(this,t,"track_priority",r)||this;Object.defineProperties(n,{_enqueuedPriorityUpdates:{value:new Map}});n.on("ready",(function(e){Array.from(n._enqueuedPriorityUpdates.keys()).forEach((function(t){e.publish({type:"track_priority",track:t,subscribe:n._enqueuedPriorityUpdates.get(t)})}))}));return n}
/**
   * @param {Track.SID} trackSid
   * @param {'publish'|'subscribe'} publishOrSubscribe
   * @param {Track.Priority} priority
   */TrackPrioritySignaling.prototype.sendTrackPriorityUpdate=function(e,t,r){if("subscribe"!==t)throw new Error("only subscribe priorities are supported, found: "+t);this._enqueuedPriorityUpdates.set(e,r);this._transport&&this._transport.publish({type:"track_priority",track:e,subscribe:r})};return TrackPrioritySignaling}(Yy);Ky=Xy;var Zy=Ky;var eb={};var tb=eb&&eb.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var rb=b_;var nb=function(e){tb(TrackSwitchOffSignaling,e);
/**
   * Construct a {@link TrackSwitchOffSignaling}.
   * @param {Promise<DataTrackReceiver>} getReceiver
   */function TrackSwitchOffSignaling(t,r){var n=e.call(this,t,"track_switch_off",r)||this;n.on("ready",(function(e){e.on("message",(function(e){switch(e.type){case"track_switch_off":n._setTrackSwitchOffUpdates(e.off||[],e.on||[]);break;default:break}}))}));return n}
/**
   * @private
   * @param {[Track.SID]} tracksSwitchedOff
   * @param {[Track.SID]} tracksSwitchedOn
   * @returns {void}
   */TrackSwitchOffSignaling.prototype._setTrackSwitchOffUpdates=function(e,t){this.emit("updated",e,t)};return TrackSwitchOffSignaling}(rb);eb=nb;var ib=eb;var ab={};var ob=ab&&ab.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var cb=b_;var sb=lo;var ub=Y.isDeepEqual;var lb=2e3;var db=1;var pb=function(e){ob(RenderHintsSignaling,e);function RenderHintsSignaling(t,r){var n=e.call(this,t,"render_hints",r)||this;Object.defineProperties(n,{_trackSidsToRenderHints:{value:new Map},_responseTimer:{value:new sb((function(){n._sendAllHints();n._responseTimer.setDelay(2*n._responseTimer.delay)}),lb,false)}});n.on("ready",(function(e){e.on("message",(function(e){n._log.debug("Incoming: ",e);switch(e.type){case"render_hints":n._processHintResults(e&&e.subscriber&&e.subscriber.hints||[]);break;default:n._log.warn("Unknown message type: ",e.type);break}}));n._sendAllHints()}));return n}RenderHintsSignaling.prototype._sendAllHints=function(){var e=this;Array.from(this._trackSidsToRenderHints.keys()).forEach((function(t){var r=e._trackSidsToRenderHints.get(t);r.renderDimensions&&(r.isDimensionDirty=true);"enabled"in r&&(r.isEnabledDirty=true)}));this._sendHints()};RenderHintsSignaling.prototype._processHintResults=function(e){var t=this;this._responseTimer.clear();this._responseTimer.setDelay(lb);e.forEach((function(e){"OK"!==e.result&&t._log.debug("Server error processing hint:",e)}));this._sendHints()};RenderHintsSignaling.prototype._sendHints=function(){var e=this;if(this._transport&&!this._responseTimer.isSet){var t=[];Array.from(this._trackSidsToRenderHints.keys()).forEach((function(r){var n=e._trackSidsToRenderHints.get(r);if(n.isEnabledDirty||n.isDimensionDirty){var i={track:r};if(n.isEnabledDirty){i.enabled=n.enabled;n.isEnabledDirty=false}if(n.isDimensionDirty){i.render_dimensions=n.renderDimensions;n.isDimensionDirty=false}t.push(i)}}));if(t.length>0){var r={type:"render_hints",subscriber:{id:db++,hints:t}};this._log.debug("Outgoing: ",r);this._transport.publish(r);this._responseTimer.start()}}};
/**
   * @param {Track.SID} trackSid
   * @param {ClientRenderHint} renderHint
   */RenderHintsSignaling.prototype.setTrackHint=function(e,t){var r=this._trackSidsToRenderHints.get(e)||{isEnabledDirty:false,isDimensionDirty:false};if("enabled"in t&&r.enabled!==t.enabled){r.enabled=!!t.enabled;r.isEnabledDirty=true}if(t.renderDimensions&&!ub(t.renderDimensions,r.renderDimensions)){r.renderDimensions=t.renderDimensions;r.isDimensionDirty=true}this._trackSidsToRenderHints.set(e,r);this._sendHints()};
/**
   * must be called when track is unsubscribed.
   * @param {Track.SID} trackSid
   */RenderHintsSignaling.prototype.clearTrackHint=function(e){this._trackSidsToRenderHints.delete(e)};return RenderHintsSignaling}(cb);ab=pb;var fb=ab;var vb={};var hb=vb&&vb.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var _b=b_;var mb=1;var gb=function(e){hb(PublisherHintsSignaling,e);function PublisherHintsSignaling(t,r){var n=e.call(this,t,"publisher_hints",r)||this;n.on("ready",(function(e){n._log.debug("publisher_hints transport ready:",e);e.on("message",(function(e){n._log.debug("Incoming: ",e);switch(e.type){case"publisher_hints":e.publisher&&e.publisher.hints&&e.publisher.id&&n._processPublisherHints(e.publisher.hints,e.publisher.id);break;default:n._log.warn("Unknown message type: ",e.type);break}}))}));return n}PublisherHintsSignaling.prototype.sendTrackReplaced=function(e){var t=e.trackSid;if(this._transport){var r={type:"client_reset",track:t,id:mb++};this._log.debug("Outgoing: ",r);this._transport.publish(r)}};PublisherHintsSignaling.prototype.sendHintResponse=function(e){var t=e.id,r=e.hints;if(this._transport){var n={type:"publisher_hints",id:t,hints:r};this._log.debug("Outgoing: ",n);this._transport.publish(n)}};PublisherHintsSignaling.prototype._processPublisherHints=function(e,t){try{this.emit("updated",e,t)}catch(e){this._log.error("error processing hints:",e)}};return PublisherHintsSignaling}(_b);vb=gb;var yb=vb;var bb={};var kb=bb&&bb.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Sb=bb&&bb.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o};var Tb=C_;var wb=Nm;var Cb=Jm;var Pb=cg;var Ob=Tg;var Eb=Gy;var Rb=If;var Lb=Zy;var Mb=ib;var Ib=fb;var jb=yb;var Ab=Y,Db=Ab.constants.DEFAULT_SESSION_TIMEOUT_SEC,xb=Ab.createBandwidthProfilePayload,Vb=Ab.defer,Nb=Ab.difference,Fb=Ab.filterObject,Bb=Ab.flatMap,Ub=Ab.oncePerTick;var $b=ks;var Hb=tc.createTwilioError;var Wb=1e4;var Qb=function(e){kb(RoomV2,e);function RoomV2(t,r,n,i,a){var o=this;r.options=Object.assign({session_timeout:Db},r.options);a=Object.assign({DominantSpeakerSignaling:Tb,NetworkQualityMonitor:wb,NetworkQualitySignaling:Cb,RecordingSignaling:Pb,RemoteParticipantV2:Eb,TrackPrioritySignaling:Lb,TrackSwitchOffSignaling:Mb,bandwidthProfile:null,sessionTimeout:1e3*r.options.session_timeout,statsPublishIntervalMs:Wb},a);t.setBandwidthProfile(a.bandwidthProfile);var c=r.options,s=c.signaling_region,u=c.audio_processors,l=void 0===u?[]:u;t.setSignalingRegion(s);l.includes("krisp")&&l.push("rnnoise");t.setAudioProcessors(l);i.setIceReconnectTimeout(a.sessionTimeout);o=e.call(this,t,r.sid,r.name,a)||this;var getTrackReceiver=function(e){return o._getTrackReceiver(e)};var d=o._log;Object.defineProperties(o,{_disconnectedParticipantRevisions:{value:new Map},_NetworkQualityMonitor:{value:a.NetworkQualityMonitor},_lastBandwidthProfileRevision:{value:t.bandwidthProfileRevision,writable:true},_mediaStatesWarningsRevision:{value:0,writable:true},_networkQualityMonitor:{value:null,writable:true},_networkQualityConfiguration:{value:t.networkQualityConfiguration},_peerConnectionManager:{value:i},_published:{value:new Map},_publishedRevision:{value:0,writable:true},_RemoteParticipantV2:{value:a.RemoteParticipantV2},_subscribed:{value:new Map},_subscribedRevision:{value:0,writable:true},_subscriptionFailures:{value:new Map},_dominantSpeakerSignaling:{value:new a.DominantSpeakerSignaling(getTrackReceiver,{log:d})},_networkQualitySignaling:{value:new a.NetworkQualitySignaling(getTrackReceiver,t.networkQualityConfiguration,{log:d})},_renderHintsSignaling:{value:new Ib(getTrackReceiver,{log:d})},_publisherHintsSignaling:{value:new jb(getTrackReceiver,{log:d})},_trackPrioritySignaling:{value:new a.TrackPrioritySignaling(getTrackReceiver,{log:d})},_trackSwitchOffSignaling:{value:new a.TrackSwitchOffSignaling(getTrackReceiver,{log:d})},_pendingSwitchOffStates:{value:new Map},_transport:{value:n},_trackReceiverDeferreds:{value:new Map},mediaRegion:{enumerable:true,value:r.options.media_region||null}});o._initTrackSwitchOffSignaling();o._initDominantSpeakerSignaling();o._initNetworkQualityMonitorSignaling();o._initPublisherHintSignaling();handleLocalParticipantEvents(o,t);handlePeerConnectionEvents(o,i);handleTransportEvents(o,n);periodicallyPublishStats(o,n,a.statsPublishIntervalMs);o._update(r);o._peerConnectionManager.setEffectiveAdaptiveSimulcast(o._publisherHintsSignaling.isSetup);return o}Object.defineProperty(RoomV2.prototype,"connectionState",{get:function(){return this._peerConnectionManager.connectionState},enumerable:false,configurable:true});Object.defineProperty(RoomV2.prototype,"signalingConnectionState",{get:function(){return"syncing"===this._transport.state?"reconnecting":this._transport.state},enumerable:false,configurable:true});Object.defineProperty(RoomV2.prototype,"iceConnectionState",{get:function(){return this._peerConnectionManager.iceConnectionState},enumerable:false,configurable:true});RoomV2.prototype._deleteTrackReceiverDeferred=function(e){return this._trackReceiverDeferreds.delete(e)};RoomV2.prototype._getOrCreateTrackReceiverDeferred=function(e){var t=this._trackReceiverDeferreds.get(e)||Vb();var r=this._peerConnectionManager.getTrackReceivers();var n=r.find((function(t){return t.id===e&&"ended"!==t.readyState}));n?t.resolve(n):this._trackReceiverDeferreds.set(e,t);return t};RoomV2.prototype._addTrackReceiver=function(e){var t=this._getOrCreateTrackReceiverDeferred(e.id);t.resolve(e);return this};RoomV2.prototype._disconnect=function(t){var r=e.prototype._disconnect.call(this,t);if(r){this._teardownNetworkQualityMonitor();this._transport.disconnect();this._peerConnectionManager.close()}this.localParticipant.tracks.forEach((function(e){e.publishFailed(t||new Error("LocalParticipant disconnected"))}));return r};RoomV2.prototype._getTrackReceiver=function(e){var t=this;return this._getOrCreateTrackReceiverDeferred(e).promise.then((function(r){t._deleteTrackReceiverDeferred(e);return r}))};RoomV2.prototype._getInitialTrackSwitchOffState=function(e){var t=this._pendingSwitchOffStates.get(e)||false;this._pendingSwitchOffStates.delete(e);t&&this._log.warn("["+e+"] was initially switched off! ");return t};RoomV2.prototype._getTrackSidsToTrackSignalings=function(){var e=Bb(this.participants,(function(e){return Array.from(e.tracks)}));return new Map(e)};RoomV2.prototype._getOrCreateRemoteParticipant=function(e){var t=this;var r=this._RemoteParticipantV2;var n=this.participants.get(e.sid);var i=this;if(!n){n=new r(e,(function(e){return t._getInitialTrackSwitchOffState(e)}),(function(e,r){return t._trackPrioritySignaling.sendTrackPriorityUpdate(e,"subscribe",r)}),(function(e,r){return t._renderHintsSignaling.setTrackHint(e,r)}),(function(e){return t._renderHintsSignaling.clearTrackHint(e)}));n.on("stateChanged",(function stateChanged(e){if("disconnected"===e){n.removeListener("stateChanged",stateChanged);i.participants.delete(n.sid);i._disconnectedParticipantRevisions.set(n.sid,n.revision)}}));this.connectParticipant(n)}return n};RoomV2.prototype._getState=function(){return{participant:this.localParticipant.getState()}};RoomV2.prototype._maybeAddBandwidthProfile=function(e){var t=this.localParticipant,r=t.bandwidthProfile,n=t.bandwidthProfileRevision;if(r&&this._lastBandwidthProfileRevision<n){this._lastBandwidthProfileRevision=n;return Object.assign({bandwidth_profile:xb(r)},e)}return e};RoomV2.prototype._publishNewLocalParticipantState=function(){this._transport.publish(this._maybeAddBandwidthProfile(this._getState()))};RoomV2.prototype._publishPeerConnectionState=function(e){this._transport.publish(Object.assign({peer_connections:[e]},this._getState()))};RoomV2.prototype._update=function(e){var t=this;if(e.subscribed&&e.subscribed.revision>this._subscribedRevision){this._subscribedRevision=e.subscribed.revision;e.subscribed.tracks.forEach((function(e){if(e.id){t._subscriptionFailures.delete(e.sid);t._subscribed.set(e.sid,e.id)}else e.error&&!t._subscriptionFailures.has(e.sid)&&t._subscriptionFailures.set(e.sid,e.error)}));var r=new Set(e.subscribed.tracks.filter((function(e){return!!e.id})).map((function(e){return e.sid})));this._subscribed.forEach((function(e,n){r.has(n)||t._subscribed.delete(n)}))}var n=new Set;(e.participants||[]).forEach((function(e){if(e.sid!==t.localParticipant.sid){var r=t._disconnectedParticipantRevisions.get(e.sid);if(!(r&&e.revision<=r)){r&&t._disconnectedParticipantRevisions.delete(e.sid);var i=t._getOrCreateRemoteParticipant(e);i.update(e);n.add(i)}}}));"synced"===e.type&&this.participants.forEach((function(e){n.has(e)||e.disconnect()}));handleSubscriptions(this);e.peer_connections&&this._peerConnectionManager.update(e.peer_connections,"synced"===e.type);e.recording&&this.recording.update(e.recording);if(e.published&&e.published.revision>this._publishedRevision){this._publishedRevision=e.published.revision;e.published.tracks.forEach((function(e){e.sid&&t._published.set(e.id,e.sid)}));this.localParticipant.update(e.published)}e.participant&&this.localParticipant.connect(e.participant.sid,e.participant.identity);[this._dominantSpeakerSignaling,this._networkQualitySignaling,this._trackPrioritySignaling,this._trackSwitchOffSignaling,this._renderHintsSignaling,this._publisherHintsSignaling].forEach((function(t){var r=t.channel;!t.isSetup&&e.media_signaling&&e.media_signaling[r]&&e.media_signaling[r].transport&&"data-channel"===e.media_signaling[r].transport.type&&t.setup(e.media_signaling[r].transport.label)}));if("warning"===e.type&&e.states&&e.states.revision>this._mediaStatesWarningsRevision){this._mediaStatesWarningsRevision=e.states.revision;this.localParticipant.updateMediaStates(e.states)}return this};RoomV2.prototype._initPublisherHintSignaling=function(){var e=this;this._publisherHintsSignaling.on("updated",(function(t,r){Promise.all(t.map((function(t){return e.localParticipant.setPublisherHint(t.track,t.encodings).then((function(e){return{track:t.track,result:e}}))}))).then((function(t){e._publisherHintsSignaling.sendHintResponse({id:r,hints:t})}))}));var handleReplaced=function(t){"video"===t.kind&&t.trackTransceiver.on("replaced",(function(){e._publisherHintsSignaling.sendTrackReplaced({trackSid:t.sid})}))};Array.from(this.localParticipant.tracks.values()).forEach((function(e){return handleReplaced(e)}));this.localParticipant.on("trackAdded",(function(e){return handleReplaced(e)}))};RoomV2.prototype._initTrackSwitchOffSignaling=function(){var e=this;this._trackSwitchOffSignaling.on("updated",(function(t,r){try{e._log.debug("received trackSwitch: ",{tracksOn:r,tracksOff:t});var n=new Map;r.forEach((function(e){return n.set(e,true)}));t.forEach((function(t){n.get(t)&&e._log.warn(t+" is DUPLICATED in both tracksOff and tracksOn list");n.set(t,false)}));e.participants.forEach((function(e){e.tracks.forEach((function(e){var t=n.get(e.sid);if("undefined"!==typeof t){e.setSwitchedOff(!t);n.delete(e.sid)}}))}));n.forEach((function(t,r){return e._pendingSwitchOffStates.set(r,!t)}))}catch(t){e._log.error("error processing track switch off:",t)}}))};RoomV2.prototype._initDominantSpeakerSignaling=function(){var e=this;this._dominantSpeakerSignaling.on("updated",(function(){return e.setDominantSpeaker(e._dominantSpeakerSignaling.loudestParticipantSid)}))};RoomV2.prototype._initNetworkQualityMonitorSignaling=function(){var e=this;this._networkQualitySignaling.on("ready",(function(){var t=new e._NetworkQualityMonitor(e._peerConnectionManager,e._networkQualitySignaling);e._networkQualityMonitor=t;t.on("updated",(function(){if("failed"!==e.iceConnectionState){e.localParticipant.setNetworkQualityLevel(t.level,t.levels);e.participants.forEach((function(e){var r=t.remoteLevels.get(e.sid);r&&e.setNetworkQualityLevel(r.level,r)}))}}));t.start()}));this._networkQualitySignaling.on("teardown",(function(){return e._teardownNetworkQualityMonitor()}))};RoomV2.prototype._teardownNetworkQualityMonitor=function(){if(this._networkQualityMonitor){this._networkQualityMonitor.stop();this._networkQualityMonitor=null}};
/**
   * Get the {@link RoomV2}'s media statistics.
   * @returns {Promise.<Map<PeerConnectionV2#id, StandardizedStatsResponse>>}
   */RoomV2.prototype.getStats=function(){var e=this;return this._peerConnectionManager.getStats().then((function(t){return new Map(Array.from(t).map((function(t){var r=Sb(t,2),n=r[0],i=r[1];return[n,Object.assign({},i,{localAudioTrackStats:filterAndAddLocalTrackSids(e,i.localAudioTrackStats),localVideoTrackStats:filterAndAddLocalTrackSids(e,i.localVideoTrackStats),remoteAudioTrackStats:filterAndAddRemoteTrackSids(e,i.remoteAudioTrackStats),remoteVideoTrackStats:filterAndAddRemoteTrackSids(e,i.remoteVideoTrackStats)})]})))}))};return RoomV2}(Ob);
/**
 * Filter out {@link TrackStats} that aren't in the collection while also
 * stamping their Track SIDs.
 * @param {Map<ID, SID>} idToSid
 * @param {Array<TrackStats>} trackStats
 * @returns {Array<TrackStats>}
 */function filterAndAddTrackSids(e,t){return t.reduce((function(t,r){var n=e.get(r.trackId);return n?[Object.assign({},r,{trackSid:n})].concat(t):t}),[])}
/**
 * Filter out {@link LocalTrackStats} that aren't currently published while also
 * stamping their Track SIDs.
 * @param {RoomV2} roomV2
 * @param {Array<LocalTrackStats>} localTrackStats
 * @returns {Array<LocalTrackStats>}
 */function filterAndAddLocalTrackSids(e,t){return filterAndAddTrackSids(e._published,t)}
/**
 * Filter out {@link RemoteTrackStats} that aren't currently subscribed while
 * also stamping their Track SIDs.
 * @param {RoomV2} roomV2
 * @param {Array<RemoteTrackStats>} remoteTrackStats
 * @returns {Array<RemoteTrackStats>}
 */function filterAndAddRemoteTrackSids(e,t){var r=new Map(Array.from(e._subscribed.entries()).map((function(e){var t=Sb(e,2),r=t[0],n=t[1];return[n,r]})));return filterAndAddTrackSids(r,t)}
/**
 * @typedef {object} RoomV2#Representation
 * @property {string} name
 * @property {LocalParticipantV2#Representation} participant
 * @property {?Array<RemoteParticipantV2#Representation>} participants
 * @property {?Array<PeerConnectionV2#Representation>} peer_connections
 * @property {?RecordingV2#Representation} recording
 * @property {string} sid
 */function handleLocalParticipantEvents(e,t){var r=Ub((function(){e._publishNewLocalParticipantState()}));var n=Ub((function(){var r=Bb(t.tracks,(function(e){return e.trackTransceiver}));e._peerConnectionManager.setTrackSenders(r)}));t.on("trackAdded",n);t.on("trackRemoved",n);t.on("updated",r);e.on("stateChanged",(function stateChanged(i){if("disconnected"===i){t.removeListener("trackAdded",n);t.removeListener("trackRemoved",n);t.removeListener("updated",r);e.removeListener("stateChanged",stateChanged);t.disconnect()}}));e.on("signalingConnectionStateChanged",(function(){var t=e.localParticipant,r=e.signalingConnectionState;var n=t.identity,i=t.sid;switch(r){case"connected":t.connect(i,n);break;case"reconnecting":t.reconnecting();break}}))}function handlePeerConnectionEvents(e,t){t.on("description",(function onDescription(t){e._publishPeerConnectionState(t)}));t.dequeue("description");t.on("candidates",(function onCandidates(t){e._publishPeerConnectionState(t)}));t.dequeue("candidates");t.on("trackAdded",e._addTrackReceiver.bind(e));t.dequeue("trackAdded");t.getTrackReceivers().forEach(e._addTrackReceiver,e);t.on("connectionStateChanged",(function(){e.emit("connectionStateChanged")}));t.on("iceConnectionStateChanged",(function(){e.emit("iceConnectionStateChanged");if("failed"===e.iceConnectionState){null!==e.localParticipant.networkQualityLevel&&e.localParticipant.setNetworkQualityLevel(0);e.participants.forEach((function(e){null!==e.networkQualityLevel&&e.setNetworkQualityLevel(0)}))}}))}function handleTransportEvents(e,t){t.on("message",e._update.bind(e));t.on("stateChanged",(function stateChanged(r,n){if("disconnected"===r){"disconnected"!==e.state&&e._disconnect(n);t.removeListener("stateChanged",stateChanged)}e.emit("signalingConnectionStateChanged")}))}
/**
 * Periodically publish {@link StatsReport}s.
 * @private
 * @param {RoomV2} roomV2
 * @param {Transport} transport
 * @param {Number} intervalMs
 */function periodicallyPublishStats(e,t,r){var n=new Map;var i=false;var a=setInterval((function(){e.getStats().then((function(e){i=!i;e.forEach((function(e,r){var a=new Rb(r,e,true);t.publishEvent("quality","stats-report","info",{audioTrackStats:a.remoteAudioTrackStats.map((function(t,r){return addAVSyncMetricsToRemoteTrackStats(t,e.remoteAudioTrackStats[r],n)})),localAudioTrackStats:a.localAudioTrackStats.map((function(t,r){return addAVSyncMetricsToLocalTrackStats(t,e.localAudioTrackStats[r],n)})),localVideoTrackStats:a.localVideoTrackStats.map((function(t,r){return addAVSyncMetricsToLocalTrackStats(t,e.localVideoTrackStats[r],n)})),peerConnectionId:a.peerConnectionId,videoTrackStats:a.remoteVideoTrackStats.map((function(t,r){return addAVSyncMetricsToRemoteTrackStats(t,e.remoteVideoTrackStats[r],n)}))});var o=Bb(["localAudioTrackStats","localVideoTrackStats","remoteAudioTrackStats","remoteVideoTrackStats"],(function(e){return a[e].map((function(e){var t=e.ssrc,r=e.trackSid;return r+"+"+t}))}));var c=Nb(Array.from(n.keys()),o);c.forEach((function(e){return n.delete(e)}));if(i){var s=replaceNullsWithDefaults(e.activeIceCandidatePair,a.peerConnectionId);t.publishEvent("quality","active-ice-candidate-pair","info",s)}}))}),(function(){}))}),r);e.on("stateChanged",(function onStateChanged(t){if("disconnected"===t){clearInterval(a);e.removeListener("stateChanged",onStateChanged)}}))}function handleSubscriptions(e){var t=e._getTrackSidsToTrackSignalings();e._subscriptionFailures.forEach((function(r,n){var i=t.get(n);if(i){e._subscriptionFailures.delete(n);i.subscribeFailed(Hb(r.code,r.message))}}));t.forEach((function(t){var r=e._subscribed.get(t.sid);(!r||t.isSubscribed&&t.trackTransceiver.id!==r)&&t.setTrackTransceiver(null);r&&e._getTrackReceiver(r).then((function(e){return t.setTrackTransceiver(e)}))}))}function addAVSyncMetricsToLocalTrackStats(e,t,r){var n=t.framesEncoded,i=t.packetsSent,a=t.totalEncodeTime,o=t.totalPacketSendDelay;var c=Object.assign({},e);var s=e.trackSid+"+"+e.ssrc;var u=r.get(s)||new Map;if("number"===typeof a&&"number"===typeof n){var l=u.get("avgEncodeDelay")||new $b;l.putSample(1e3*a,n);c.avgEncodeDelay=Math.round(l.get());u.set("avgEncodeDelay",l)}if("number"===typeof o&&"number"===typeof i){var d=u.get("avgPacketSendDelay")||new $b;d.putSample(1e3*o,i);c.avgPacketSendDelay=Math.round(d.get());u.set("avgPacketSendDelay",d)}r.set(s,u);return c}function addAVSyncMetricsToRemoteTrackStats(e,t,r){var n=t.estimatedPlayoutTimestamp,i=t.framesDecoded,a=t.jitterBufferDelay,o=t.jitterBufferEmittedCount,c=t.totalDecodeTime;var s=Object.assign({},e);var u=e.trackSid+"+"+e.ssrc;var l=r.get(u)||new Map;"number"===typeof n&&(s.estimatedPlayoutTimestamp=n);if("number"===typeof i&&"number"===typeof c){var d=l.get("avgDecodeDelay")||new $b;d.putSample(1e3*c,i);s.avgDecodeDelay=Math.round(d.get());l.set("avgDecodeDelay",d)}if("number"===typeof a&&"number"===typeof o){var p=l.get("avgJitterBufferDelay")||new $b;p.putSample(1e3*a,o);s.avgJitterBufferDelay=Math.round(p.get());l.set("avgJitterBufferDelay",p)}r.set(u,l);return s}function replaceNullsWithDefaults(e,t){e=Object.assign({availableIncomingBitrate:0,availableOutgoingBitrate:0,bytesReceived:0,bytesSent:0,consentRequestsSent:0,currentRoundTripTime:0,lastPacketReceivedTimestamp:0,lastPacketSentTimestamp:0,nominated:false,peerConnectionId:t,priority:0,readable:false,requestsReceived:0,requestsSent:0,responsesReceived:0,responsesSent:0,retransmissionsReceived:0,retransmissionsSent:0,state:"failed",totalRoundTripTime:0,transportId:"",writable:false},Fb(e||{},null));e.localCandidate=Object.assign({candidateType:"host",deleted:false,ip:"",port:0,priority:0,protocol:"udp",url:""},Fb(e.localCandidate||{},null));e.remoteCandidate=Object.assign({candidateType:"host",ip:"",port:0,priority:0,protocol:"udp",url:""},Fb(e.remoteCandidate||{},null));return e}bb=Qb;var qb=bb;var zb={};var Gb=zb&&zb.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Kb=io;var Jb=Go;var Yb=Kf;var Xb=v.reconnectBackoffConfig;var Zb=lo;var ek=v,tk=ek.SDK_NAME,rk=ek.SDK_VERSION,nk=ek.SDP_FORMAT;var ik=Y,ak=ik.createBandwidthProfilePayload,ok=ik.createMediaSignalingPayload,ck=ik.createMediaWarningsPayload,sk=ik.createSubscribePayload,uk=ik.getUserAgent,lk=ik.isNonArrayObject;var dk=tc,pk=dk.createTwilioError,fk=dk.RoomCompletedError,vk=dk.SignalingConnectionError,hk=dk.SignalingServerBusyError;var _k=1;var mk=2;var gk={connecting:["connected","disconnected"],connected:["disconnected","syncing"],syncing:["connected","disconnected"],disconnected:[]};var yk=function(e){Gb(TwilioConnectionTransport,e);
/**
   * Construct a {@link TwilioConnectionTransport}.
   * @param {?string} name
   * @param {string} accessToken
   * @param {ParticipantSignaling} localParticipant
   * @param {PeerConnectionManager} peerConnectionManager
   * @param {string} wsServer
   * @param {object} [options]
   */function TwilioConnectionTransport(t,r,n,i,a,o){var c=this;o=Object.assign({Backoff:Yb,TwilioConnection:Jb,iceServers:null,trackPriority:true,trackSwitchOff:true,renderHints:true,userAgent:uk()},o);c=e.call(this,"connecting",gk)||this;Object.defineProperties(c,{_accessToken:{value:r},_automaticSubscription:{value:o.automaticSubscription},_bandwidthProfile:{value:o.bandwidthProfile},_dominantSpeaker:{value:o.dominantSpeaker},_adaptiveSimulcast:{value:o.adaptiveSimulcast},_eventObserver:{value:o.eventObserver,writable:false},_renderHints:{value:o.renderHints},_iceServersStatus:{value:Array.isArray(o.iceServers)?"overrode":"acquire"},_localParticipant:{value:n},_name:{value:t},_networkQuality:{value:lk(o.networkQuality)||o.networkQuality},_notifyWarnings:{value:o.notifyWarnings},_options:{value:o},_peerConnectionManager:{value:i},_sessionTimer:{value:null,writable:true},_sessionTimeoutMS:{value:0,writable:true},_reconnectBackoff:{value:new o.Backoff(Xb)},_session:{value:null,writable:true},_trackPriority:{value:o.trackPriority},_trackSwitchOff:{value:o.trackSwitchOff},_twilioConnection:{value:null,writable:true},_updatesReceived:{value:[]},_updatesToSend:{value:[]},_userAgent:{value:o.userAgent},_wsServer:{value:a}});setupTransport(c);return c}
/**
   * Create a Connect, Sync or Disconnect RSP message.
   * @private
   * @returns {?object}
   */TwilioConnectionTransport.prototype._createConnectOrSyncOrDisconnectMessage=function(){if("connected"===this.state)return null;if("disconnected"===this.state)return{session:this._session,type:"disconnect",version:mk};var e={connecting:"connect",syncing:"sync"}[this.state];var t={name:this._name,participant:this._localParticipant.getState(),peer_connections:this._peerConnectionManager.getStates(),type:e,version:mk};if("connect"===t.type){t.ice_servers=this._iceServersStatus;t.publisher={name:tk,sdk_version:rk,user_agent:this._userAgent};this._bandwidthProfile&&(t.bandwidth_profile=ak(this._bandwidthProfile));this._notifyWarnings&&(t.participant.media_warnings=ck(this._notifyWarnings));t.media_signaling=ok(this._dominantSpeaker,this._networkQuality,this._trackPriority,this._trackSwitchOff,this._adaptiveSimulcast,this._renderHints);t.subscribe=sk(this._automaticSubscription);t.format=nk;t.token=this._accessToken}else if("sync"===t.type){t.session=this._session;t.token=this._accessToken}else"update"===t.type&&(t.session=this._session);return t};TwilioConnectionTransport.prototype._createIceMessage=function(){return{edge:"roaming",token:this._accessToken,type:"ice",version:_k}};TwilioConnectionTransport.prototype._sendConnectOrSyncOrDisconnectMessage=function(){var e=this._createConnectOrSyncOrDisconnectMessage();e&&this._twilioConnection.sendMessage(e)};
/**
   * Disconnect the {@link TwilioConnectionTransport}. Returns true if calling the method resulted
   * in disconnection.
   * @param {TwilioError} [error]
   * @returns {boolean}
   */TwilioConnectionTransport.prototype.disconnect=function(e){if("disconnected"!==this.state){this.preempt("disconnected",null,[e]);this._sendConnectOrSyncOrDisconnectMessage();this._twilioConnection.close();return true}return false};
/**
   * Publish an RSP Update. Returns true if calling the method resulted in
   * publishing (or eventually publishing) the update.
   * @param {object} update
   * @returns {boolean}
   */TwilioConnectionTransport.prototype.publish=function(e){switch(this.state){case"connected":this._twilioConnection.sendMessage(Object.assign({session:this._session,type:"update",version:mk},e));return true;case"connecting":case"syncing":this._updatesToSend.push(e);return true;case"disconnected":default:return false}};
/**
   * Publish (or queue) an event to the Insights gateway.
   * @param {string} group - Event group name
   * @param {string} name - Event name
   * @param {string} level - Event level
   * @param {object} payload - Event payload
   * @returns {void}
   */TwilioConnectionTransport.prototype.publishEvent=function(e,t,r,n){this._eventObserver.emit("event",{group:e,name:t,level:r,payload:n})};
/**
   * Sync the {@link TwilioConnectionTransport}. Returns true if calling the method resulted in
   * syncing.
   * @returns {boolean}
   */TwilioConnectionTransport.prototype.sync=function(){if("connected"===this.state){this.preempt("syncing");this._sendConnectOrSyncOrDisconnectMessage();return true}return false};
/**
   * @private
   * @returns {void}
   */TwilioConnectionTransport.prototype._setSession=function(e,t){this._session=e;this._sessionTimeoutMS=1e3*t};
/**
   * Determines if we should attempt reconnect.
   * returns a Promise to wait on before attempting to
   * reconnect. returns null if its not okay to reconnect.
   * @private
   * @returns {Promise<void>}
   */TwilioConnectionTransport.prototype._getReconnectTimer=function(){var e=this;if(0===this._sessionTimeoutMS)return null;this._sessionTimer||(this._sessionTimer=new Zb((function(){e._sessionTimer&&(e._sessionTimeoutMS=0)}),this._sessionTimeoutMS));return new Promise((function(t){e._reconnectBackoff.backoff(t)}))};
/**
   * clears the session reconnect timer.
   *
   * @private
   * @returns {void}
   */TwilioConnectionTransport.prototype._clearReconnectTimer=function(){this._reconnectBackoff.reset();if(this._sessionTimer){this._sessionTimer.clear();this._sessionTimer=null}};return TwilioConnectionTransport}(Kb);
/**
 * @event TwilioConnectionTransport#connected
 * @param {object} initialState
 */
/**
 * @event TwilioConnectionTransport#message
 * @param {object} peerConnections
 */function reducePeerConnections(e){return Array.from(e.reduce((function(e,t){var r=e.get(t.id)||t;(!r.description&&t.description||r.description&&t.description&&t.description.revision>r.description.revision)&&(r.description=t.description);(!r.ice&&t.ice||r.ice&&t.ice&&t.ice.revision>r.ice.revision)&&(r.ice=t.ice);e.set(r.id,r);return e}),new Map).values())}function reduceUpdates(e){return e.reduce((function(e,t){(!e.participant&&t.participant||e.participant&&t.participant&&t.participant.revision>e.participant.revision)&&(e.participant=t.participant);!e.peer_connections&&t.peer_connections?e.peer_connections=reducePeerConnections(t.peer_connections):e.peer_connections&&t.peer_connections&&(e.peer_connections=reducePeerConnections(e.peer_connections.concat(t.peer_connections)));return e}),{})}function setupTransport(e){function createOrResetTwilioConnection(){if("disconnected"!==e.state){e._twilioConnection&&e._twilioConnection.removeListener("message",handleMessage);var t=e._iceServersStatus,r=e._options,n=e._wsServer,i=e.state;var a=r.TwilioConnection;var o=new a(n,Object.assign({helloBody:"connecting"===i&&"acquire"===t?e._createIceMessage():e._createConnectOrSyncOrDisconnectMessage()},r));o.once("close",(function(e){e===a.CloseReason.LOCAL?disconnect():disconnect(new Error(e))}));o.on("message",handleMessage);e._twilioConnection=o}}function disconnect(t){if("disconnected"!==e.state)if(t){var r=e._getReconnectTimer();if(r){"connected"===e.state&&e.preempt("syncing");r.then(createOrResetTwilioConnection)}else{var n=t.message===Jb.CloseReason.BUSY?new hk:new vk;e.disconnect(n)}}else e.disconnect()}function handleMessage(t){if("disconnected"!==e.state)if("error"!==t.type)switch(e.state){case"connected":switch(t.type){case"connected":case"synced":case"update":case"warning":e.emit("message",t);return;case"disconnected":e.disconnect("completed"===t.status?new fk:null);return;default:return}case"connecting":switch(t.type){case"iced":e._options.onIced(t.ice_servers).then((function(){e._sendConnectOrSyncOrDisconnectMessage()}));return;case"connected":e._setSession(t.session,t.options.session_timeout);e.emit("connected",t);e.preempt("connected");return;case"synced":case"update":e._updatesReceived.push(t);return;case"disconnected":e.disconnect("completed"===t.status?new fk:null);return;default:return}case"syncing":switch(t.type){case"connected":case"update":e._updatesReceived.push(t);return;case"synced":e._clearReconnectTimer();e.emit("message",t);e.preempt("connected");return;case"disconnected":e.disconnect("completed"===t.status?new fk:null);return;default:return}default:return}else e.disconnect(pk(t.code,t.message))}e.on("stateChanged",(function stateChanged(t){switch(t){case"connected":var r=e._updatesToSend.splice(0);r.length&&e.publish(reduceUpdates(r));e._updatesReceived.splice(0).forEach((function(t){return e.emit("message",t)}));return;case"disconnected":e._twilioConnection.removeListener("message",handleMessage);e.removeListener("stateChanged",stateChanged);return;case"syncing":return;default:return}}));var t=e._options,r=e._iceServersStatus;var n=t.iceServers,i=t.onIced;"overrode"===r?i(n).then(createOrResetTwilioConnection):createOrResetTwilioConnection()}zb=yk;var bk=zb;var kk={};var Sk=Lu;var Tk=p_;var wk=qb;var Ck=bk;var Pk=tc,Ok=Pk.SignalingConnectionDisconnectedError,Ek=Pk.SignalingIncomingMessageInvalidError;var Rk=Y,Lk=Rk.flatMap,Mk=Rk.createRoomConnectEventPayload;function createCancelableRoomSignalingPromise(e,t,r,n,i,a){a=Object.assign({PeerConnectionManager:Tk,RoomV2:wk,Transport:Ck},a);var o=i.video[0]&&true===i.video[0].adaptiveSimulcast;var c=a.PeerConnectionManager,s=a.RoomV2,u=a.Transport,l=a.iceServers,d=a.log;var p=new c(n,i,a);var f=Lk(r.tracks,(function(e){return[e.trackTransceiver]}));p.setTrackSenders(f);var v=new Error("Canceled");var h;var _=new Sk((function(n,i,c){var onIced=function(e){if(c()){i(v);return Promise.reject(v)}d.debug("Got ICE servers:",e);a.iceServers=e;p.setConfiguration(a);return p.createAndOffer().then((function(){if(c()){i(v);throw v}d.debug("createAndOffer() succeeded.");p.dequeue("description")})).catch((function(e){d.error("createAndOffer() failed:",e);i(e);throw e}))};var f=a.automaticSubscription,_=a.bandwidthProfile,m=a.dominantSpeaker,g=a.environment,y=a.eventObserver,b=a.loggerName,k=a.logLevel,S=a.name,T=a.networkMonitor,w=a.networkQuality,C=a.notifyWarnings,P=a.realm,O=a.sdpSemantics;var E=!!_;var R=!!_;var L=!!_&&("disabled"!==a.clientTrackSwitchOffControl||"disabled"!==a.contentPreferencesMode);var M=Object.assign({adaptiveSimulcast:o,automaticSubscription:f,dominantSpeaker:m,environment:g,eventObserver:y,loggerName:b,logLevel:k,networkMonitor:T,networkQuality:w,notifyWarnings:C,iceServers:l,onIced:onIced,realm:P,renderHints:L,sdpSemantics:O,trackPriority:E,trackSwitchOff:R},_?{bandwidthProfile:_}:{});h=new u(S,e,r,p,t,M);var I=Mk(a);y.emit("event",I);h.once("connected",(function(e){d.debug("Transport connected:",e);if(c())i(v);else{var t=e.participant;t?n(new s(r,e,h,p,a)):i(new Ek)}}));h.once("stateChanged",(function(e,t){if("disconnected"===e){h=null;i(t||new Ok)}else d.debug("Transport state changed:",e)}))}),(function(){if(h){h.disconnect();h=null}}));_.catch((function(){if(h){h.disconnect();h=null}p.close()}));return _}kk=createCancelableRoomSignalingPromise;var Ik=kk;var jk={};var Ak=jk&&jk.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Dk=ky;var xk=function(e){Ak(LocalParticipantSignaling,e);function LocalParticipantSignaling(){var t=e.call(this)||this;Object.defineProperties(t,{_publicationsToTrackSenders:{value:new Map},_trackSendersToPublications:{value:new Map}});return t}
/**
   * @param {DataTrackSender|MediaTrackSender} trackSender
   * @param {string} name
   * @param {Track.Priority} priority
   * @param {?NoiseCancellationVendor} noiseCancellationVendor
   * @returns {LocalTrackPublicationSignaling} publication
   */LocalParticipantSignaling.prototype.addTrack=function(t,r,n,i){void 0===i&&(i=null);var a=this._createLocalTrackPublicationSignaling(t,r,n,i);this._trackSendersToPublications.set(t,a);this._publicationsToTrackSenders.set(a,t);e.prototype.addTrack.call(this,a);return this};
/**
   * @param {DataTrackSender|MediaTrackSender} trackSender
   * @returns {?LocalTrackPublicationSignaling}
   */LocalParticipantSignaling.prototype.getPublication=function(e){return this._trackSendersToPublications.get(e)||null};
/**
   * @param {LocalTrackPublicationSignaling} trackPublication
   * @returns {?DataTrackSender|MediaTrackSender}
   */LocalParticipantSignaling.prototype.getSender=function(e){return this._publicationsToTrackSenders.get(e)||null};
/**
   * @param {DataTrackSender|MediaTrackSender} trackSender
   * @returns {?LocalTrackPublicationSignaling}
   */LocalParticipantSignaling.prototype.removeTrack=function(t){var r=this._trackSendersToPublications.get(t);if(!r)return null;this._trackSendersToPublications.delete(t);this._publicationsToTrackSenders.delete(r);var n=e.prototype.removeTrack.call(this,r);n&&r.stop();return r};return LocalParticipantSignaling}(Dk);jk=xk;var Vk=jk;var Nk={};var Fk=Nk&&Nk.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Bk=Iy;var Uk=function(e){Fk(LocalTrackPublicationSignaling,e);
/**
   * Construct a {@link LocalTrackPublicationSignaling}. {@link TrackSenders}
   * are always cloned.
   * @param {DataTrackSender|MediaTrackSender} trackSender - the {@link TrackSender}
   *   of the {@link LocalTrack} to be published
   * @param {string} name - the name of the {@link LocalTrack} to be published
   * @param {Track.Priority} priority - initial {@link Track.Priority}
   */function LocalTrackPublicationSignaling(t,r,n){var i=this;t=t.clone();var a="data"===t.kind||t.track.enabled;i=e.call(this,r,t.kind,a,n)||this;i.setTrackTransceiver(t);Object.defineProperties(i,{_updatedPriority:{value:n,writable:true},id:{enumerable:true,value:t.id}});return i}Object.defineProperty(LocalTrackPublicationSignaling.prototype,"updatedPriority",{get:function(){return this._updatedPriority},enumerable:false,configurable:true});
/**
   * Enable (or disable) the {@link LocalTrackPublicationSignaling} if it is not
   * already enabled (or disabled). This also updates the cloned
   * {@link MediaTrackSender}'s MediaStreamTracks `enabled` state.
   * @param {boolean} [enabled=true]
   * @return {this}
   */LocalTrackPublicationSignaling.prototype.enable=function(t){t="boolean"!==typeof t||t;this.trackTransceiver.track.enabled=t;return e.prototype.enable.call(this,t)};
/**
   * Rejects the SID's deferred promise with the given Error.
   * @param {Error} error
   * @returns {this}
   */LocalTrackPublicationSignaling.prototype.publishFailed=function(e){setError(this,e)&&this.emit("updated");return this};
/**
   * Update the {@link Track.Priority} of the published {@link LocalTrack}.
   * @param {Track.priority} priority
   * @returns {this}
   */LocalTrackPublicationSignaling.prototype.setPriority=function(e){if(this._updatedPriority!==e){this._updatedPriority=e;this.emit("updated")}return this};
/**
   * Set the published {@link LocalTrack}'s {@link Track.SID}.
   * @param {Track.SID} sid
   * @returns {this}
   */LocalTrackPublicationSignaling.prototype.setSid=function(t){return this._error?this:e.prototype.setSid.call(this,t)};
/**
   * Stop the cloned {@link TrackSender}.
   * @returns {void}
   */LocalTrackPublicationSignaling.prototype.stop=function(){this.trackTransceiver.stop()};return LocalTrackPublicationSignaling}(Bk);
/**
 * @param {LocalTrackPublication} publication
 * @param {Error} error
 * @returns {boolean} updated
 */function setError(e,t){if(null!==e._sid||e._error)return false;e._error=t;return true}Nk=Uk;var $k=Nk;var Hk={};var Wk=Hk&&Hk.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Qk=$k;var qk=J;var zk=tc.createTwilioError;var Gk=function(e){Wk(LocalTrackPublicationV2,e);
/**
   * Construct a {@link LocalTrackPublicationV2}.
   * @param {DataTrackSender|MediaTrackSender} trackSender
   * @param {string} name
   * @param {Track.Priority} priority
   * @param {?NoiseCancellationVendor} noiseCancellationVendor
   * @param {object} [options]
   */function LocalTrackPublicationV2(t,r,n,i,a){var o=e.call(this,t,r,n)||this;Object.defineProperties(o,{_log:{value:a.log.createLog("default",o)},_mediaStates:{value:{recordings:null},writable:true},_noiseCancellationVendor:{value:i}});return o}
/**
   * Get the {@link LocalTrackPublicationV2#Representation} of a given {@link TrackSignaling}.
   * @returns {LocalTrackPublicationV2#Representation} - without the SID
   */LocalTrackPublicationV2.prototype.getState=function(){var e={enabled:this.isEnabled,id:this.id,kind:this.kind,name:this.name,priority:this.updatedPriority};this._noiseCancellationVendor&&(e.audio_processor=this._noiseCancellationVendor);return e};LocalTrackPublicationV2.prototype.toString=function(){return"[LocalTrackPublicationV2: "+this.sid+"]"};
/**
   * Compare the {@link LocalTrackPublicationV2} to a {@link LocalTrackPublicationV2#Representation} of itself
   * and perform any updates necessary.
   * @param {PublishedTrack} track
   * @returns {this}
   * @fires TrackSignaling#updated
   */LocalTrackPublicationV2.prototype.update=function(e){switch(e.state){case"ready":this.setSid(e.sid);break;case"failed":var t=e.error;this.publishFailed(zk(t.code,t.message));break;default:break}return this};LocalTrackPublicationV2.prototype.updateMediaStates=function(e){if(!e||!e.recordings||this._mediaStates.recordings===e.recordings)return this;this._mediaStates.recordings=e.recordings;switch(this._mediaStates.recordings){case"OK":this._log.info("Warnings have cleared.");this.emit("warningsCleared");break;case"NO_MEDIA":this._log.warn("Recording media lost.");this.emit("warning",qk.recordingMediaLost);break;default:this._log.warn("Unknown media state detected: "+this._mediaStates.recordings);break}return this};return LocalTrackPublicationV2}(Qk);
/**
 * The Room Signaling Protocol (RSP) representation of a {@link LocalTrackPublicationV2}.
 * @typedef {object} LocalTrackPublicationV2#Representation
 * @property {boolean} enabled
 * @property {Track.ID} id
 * @property {Track.Kind} kind
 * @property {string} name
 * @priority {Track.Priority} priority
 * @property {Track.SID} sid
 */Hk=Gk;var Kk=Hk;var Jk={};var Yk=Jk&&Jk.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var Xk=Vk;var Zk=Kk;var eS=v.DEFAULT_LOG_LEVEL;var tS=R;var rS=Y,nS=rS.buildLogLevels,iS=rS.isDeepEqual;var aS=function(e){Yk(LocalParticipantV2,e);
/**
   * Construct a {@link LocalParticipantV2}.
   * @param {EncodingParametersImpl} encodingParameters
   * @param {NetworkQualityConfigurationImpl} networkQualityConfiguration
   * @param {object} [options]
   */function LocalParticipantV2(t,r,n){var i=this;n=Object.assign({logLevel:eS,LocalTrackPublicationV2:Zk},n);i=e.call(this)||this;var a=nS(n.logLevel);Object.defineProperties(i,{_bandwidthProfile:{value:null,writable:true},_bandwidthProfileRevision:{value:0,writable:true},_encodingParameters:{value:t},_removeListeners:{value:new Map},_LocalTrackPublicationV2:{value:n.LocalTrackPublicationV2},_log:{value:n.log?n.log.createLog("default",i):new tS("default",i,a,n.loggerName)},_publishedRevision:{writable:true,value:0},_revision:{writable:true,value:1},_signalingRegion:{value:null,writable:true},audioProcessors:{value:[],writable:true},bandwidthProfile:{enumerable:true,get:function(){return this._bandwidthProfile}},bandwidthProfileRevision:{enumerable:true,get:function(){return this._bandwidthProfileRevision}},networkQualityConfiguration:{enumerable:true,value:r},revision:{enumerable:true,get:function(){return this._revision}},signalingRegion:{enumerable:true,get:function(){return this._signalingRegion}}});return i}LocalParticipantV2.prototype.toString=function(){return"[LocalParticipantSignaling: "+this.sid+"]"};
/**
   * Set the signalingRegion.
   * @param {string} signalingRegion.
   */LocalParticipantV2.prototype.setSignalingRegion=function(e){this._signalingRegion||(this._signalingRegion=e)};
/**
   * Update the {@link BandwidthProfileOptions}.
   * @param {BandwidthProfileOptions} bandwidthProfile
   */LocalParticipantV2.prototype.setBandwidthProfile=function(e){if(!iS(this._bandwidthProfile,e)){this._bandwidthProfile=JSON.parse(JSON.stringify(e));this._bandwidthProfileRevision++;this.didUpdate()}};
/**
   * Sets the AudioProcessors enabled for this room.
   * @param {string[]} audioProcessors
   */LocalParticipantV2.prototype.setAudioProcessors=function(e){this.audioProcessors=e};
/**
   * returns current {@link EncodingParametersImpl}.
   * @returns {EncodingParametersImpl}
   */LocalParticipantV2.prototype.getParameters=function(){return this._encodingParameters};
/**
   * Set the {@link EncodingParameters}.
   * @param {?EncodingParameters} encodingParameters
   * @returns {this}
   */LocalParticipantV2.prototype.setParameters=function(e){this._encodingParameters.update(e);return this};
/**
   * Update the {@link LocalParticipantV2} with the new state.
   * @param {Published} published
   * @returns {this}
   */LocalParticipantV2.prototype.update=function(e){if(this._publishedRevision>=e.revision)return this;this._publishedRevision=e.revision;e.tracks.forEach((function(e){var t=this.tracks.get(e.id);t&&t.update(e)}),this);return this};LocalParticipantV2.prototype.updateMediaStates=function(e){if(!e||!e.tracks)return this;Array.from(this.tracks.values()).forEach((function(t){var r=e.tracks[t.sid];r&&t.updateMediaStates(r)}));return this};
/**
   * @protected
   * @param {DataTrackSender|MediaTrackSender} trackSender
   * @param {string} name
   * @param {Track.Priority} priority
   * @param {?NoiseCancellationVendor} noiseCancellationVendor
   * @returns {LocalTrackPublicationV2}
   */LocalParticipantV2.prototype._createLocalTrackPublicationSignaling=function(e,t,r,n){return new this._LocalTrackPublicationV2(e,t,r,n,{log:this._log})};
/**
   * Add a {@link LocalTrackPublicationV2} for the given {@link DataTrackSender}
   * or {@link MediaTrackSender} to the {@link LocalParticipantV2}.
   * @param {DataTrackSender|MediaTrackSender} trackSender
   * @param {string} name
   * @param {Track.Priority} priority
   * @returns {this}
   */LocalParticipantV2.prototype.addTrack=function(t,r,n,i){var a=this;e.prototype.addTrack.call(this,t,r,n,i);var o=this.getPublication(t);var c=o.isEnabled,s=o.updatedPriority;var updated=function(){if(c!==o.isEnabled||s!==o.updatedPriority){a.didUpdate();c=o.isEnabled;s=o.updatedPriority}};o.on("updated",updated);this._removeListener(o);this._removeListeners.set(o,(function(){return o.removeListener("updated",updated)}));this.didUpdate();return this};
/**
   * @private
   * @param {LocalTrackPublicationV2} publication
   * @returns {void}
   */LocalParticipantV2.prototype._removeListener=function(e){var t=this._removeListeners.get(e);t&&t()};
/**
   * Get the current state of the {@link LocalParticipantV2}.
   * @returns {object}
   */LocalParticipantV2.prototype.getState=function(){return{revision:this.revision,tracks:Array.from(this.tracks.values()).map((function(e){return e.getState()}))}};
/**
   * Increment the revision for the {@link LocalParticipantV2}.
   * @private
   * @returns {void}
   */LocalParticipantV2.prototype.didUpdate=function(){this._revision++;this.emit("updated")};
/**
   * Remove the {@link LocalTrackPublicationV2} for the given {@link DataTrackSender}
   * or {@link MediaTrackSender} from the {@link LocalParticipantV2}.
   * @param {DataTrackSender|MediaTrackSender} trackSender
   * @returns {?LocalTrackPublicationV2}
   */LocalParticipantV2.prototype.removeTrack=function(t){var r=e.prototype.removeTrack.call(this,t);if(r){t.removeClone(r.trackTransceiver);this._removeListener(r);this.didUpdate()}return r};
/**
   * Updates the verbosity of network quality information.
   * @param {NetworkQualityConfiguration} networkQualityConfiguration
   * @returns {void}
   */LocalParticipantV2.prototype.setNetworkQualityConfiguration=function(e){this.networkQualityConfiguration.update(e)};
/**
   * updates encodings for simulcast layers.
   * @param {Track.SID} trackSid
   * @param {Array<{enabled: boolean, layer_index: number}>} encodings
   * @returns {Promise<string>} string indicating result of the operation. can be one of
   *  "OK", "INVALID_HINT", "COULD_NOT_APPLY_HINT", "UNKNOWN_TRACK"
   */LocalParticipantV2.prototype.setPublisherHint=function(e,t){var r=Array.from(this.tracks.values()).find((function(t){return t.sid===e}));if(!r){this._log.warn("track:"+e+" not found");return Promise.resolve("UNKNOWN_TRACK")}return r.trackTransceiver.setPublisherHint(t)};return LocalParticipantV2}(Xk);
/**
 * @typedef {CreatedTrack|ReadyTrack|FailedTrack} PublishedTrack
 */Jk=aS;var oS=Jk;var cS={};var sS=cS&&cS.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var uS=ky;var lS=Tg;var dS=io;var pS={closed:["opening"],opening:["closed","open"],open:["closed","closing"],closing:["closed","open"]};var fS=function(e){sS(Signaling,e);function Signaling(){return e.call(this,"closed",pS)||this}Signaling.prototype._close=function(e){this.transition("closing",e);this.transition("closed",e);return Promise.resolve(this)};Signaling.prototype._connect=function(e,t,r,n,i){e.connect("PA00000000000000000000000000000000","test");var a="RM00000000000000000000000000000000";var o=Promise.resolve(new lS(e,a,i));o.cancel=function cancel(){};return o};Signaling.prototype._open=function(e){this.transition("opening",e);this.transition("open",e);return Promise.resolve(this)};
/**
   * Close the {@link Signaling}.
   * @returns {Promise<this>}
   */Signaling.prototype.close=function(){var e=this;return this.bracket("close",(function(t){switch(e.state){case"closed":return e;case"open":return e._close(t);default:throw new Error('Unexpected Signaling state "'+e.state+'"')}}))};
/**
   * Connect to a {@link RoomSignaling}.
   * @param {ParticipantSignaling} localParticipant
   * @param {string} token
   * @param {EncodingParametersImpl} encodingParameters
   * @param {PreferredCodecs} preferredCodecs
   * @param {object} options
   * @returns {Promise<function(): CancelablePromise<RoomSignaling>>}
   */Signaling.prototype.connect=function(e,t,r,n,i){var a=this;return this.bracket("connect",(function transition(o){switch(a.state){case"closed":return a._open(o).then(transition.bind(null,o));case"open":a.releaseLockCompletely(o);return a._connect(e,t,r,n,i);default:throw new Error('Unexpected Signaling state "'+a.state+'"')}}))};
/**
   * Create a local {@link ParticipantSignaling}.
   * @returns {ParticipantSignaling}
   */Signaling.prototype.createLocalParticipantSignaling=function(){return new uS};
/**
   * Open the {@link Signaling}.
   * @returns {Promise<this>}
   */Signaling.prototype.open=function(){var e=this;return this.bracket("open",(function(t){switch(e.state){case"closed":return e._open(t);case"open":return e;default:throw new Error('Unexpected Signaling state "'+e.state+'"')}}))};return Signaling}(dS);cS=fS;var vS=cS;var hS={};var _S=hS&&hS.__extends||function(){var extendStatics=function(e,t){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};return extendStatics(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();var mS=Ik;var gS=oS;var yS=vS;var bS=function(e){_S(SignalingV2,e);
/**
   * Construct {@link SignalingV2}.
   * @param {string} wsServer
   * @param {?object} [options={}]
   */function SignalingV2(t,r){var n=this;r=Object.assign({createCancelableRoomSignalingPromise:mS},r);n=e.call(this)||this;Object.defineProperties(n,{_createCancelableRoomSignalingPromise:{value:r.createCancelableRoomSignalingPromise},_options:{value:r},_wsServer:{value:t}});return n}SignalingV2.prototype._connect=function(e,t,r,n,i){i=Object.assign({},this._options,i);return this._createCancelableRoomSignalingPromise.bind(null,t,this._wsServer,e,r,n,i)};SignalingV2.prototype.createLocalParticipantSignaling=function(e,t){return new gS(e,t)};return SignalingV2}(yS);hS=bS;var kS=hS;var SS={};var TS=lr.MediaStreamTrack;var wS=U,CS=wS.guessBrowser,PS=wS.guessBrowserVersion,OS=wS.isCodecSupported;var ES=ju;var RS=Fu;var LS=Tp;var MS=Gs;var IS=Pp;var jS=ya,AS=jS.LocalAudioTrack,DS=jS.LocalDataTrack,xS=jS.LocalVideoTrack;var VS=Np;var NS=Qf;var FS=kS;var BS=Y,US=BS.asLocalTrack,$S=BS.buildLogLevels,HS=BS.filterObject,WS=BS.isNonArrayObject;var QS=v,qS=QS.DEFAULT_ENVIRONMENT,zS=QS.DEFAULT_LOG_LEVEL,GS=QS.DEFAULT_LOGGER_NAME,KS=QS.DEFAULT_REALM,JS=QS.DEFAULT_REGION,YS=QS.WS_SERVER,XS=QS.SDK_NAME,ZS=QS.SDK_VERSION,eT=QS.typeErrors;var tT=Lu;var rT=Rs;var nT=R;var iT=Bu.validateBandwidthProfile;var aT="safari"===CS()&&PS();var oT=0;var cT=false;var sT=false;if(aT){var uT=aT.major,lT=aT.minor;sT=uT<12||12===uT&&lT<1}var dT=new Set([{didWarn:false,shouldDelete:true,name:"abortOnIceServersTimeout"},{didWarn:false,shouldDelete:true,name:"dscpTagging",newName:"enableDscp"},{didWarn:false,shouldDelete:true,name:"iceServersTimeout"},{didWarn:false,shouldDelete:false,name:"eventListener",newName:"Video.Logger"},{didWarn:false,shouldDelete:false,name:"logLevel",newName:"Video.Logger"}]);var pT=new Set([{didWarn:false,shouldDelete:false,name:"maxTracks",newName:"bandwidthProfile.video.clientTrackSwitchOffControl"},{didWarn:false,shouldDelete:false,name:"renderDimensions",newName:"bandwidthProfile.video.contentPreferencesMode"}]);
/**
 * Connect to a {@link Room}.
 *   <br><br>
 *   By default, this will automatically acquire an array containing a
 *   {@link LocalAudioTrack} and {@link LocalVideoTrack} before connecting to
 *   the {@link Room}. These will be stopped when you disconnect from the
 *   {@link Room}.
 *   <br><br>
 *   You can override the default behavior by specifying
 *   <code>options</code>. For example, rather than acquiring a
 *   {@link LocalAudioTrack} and {@link LocalVideoTrack} automatically, you can
 *   pass your own array which you can stop yourself. See {@link ConnectOptions}
 *   for more information.
 * @alias module:twilio-video.connect
 * @param {string} token - The Access Token string
 * @param {ConnectOptions} [options] - Options to override the default behavior, invalid options are ignored.
 * @returns {CancelablePromise<Room>}
 * @throws {RangeError}
 * @throws {TwilioError}
 * @throws {TypeError}
 * @example
 * var Video = require('twilio-video');
 * var token = getAccessToken();
 * Video.connect(token, {
 *   name: 'my-cool-room'
 * }).then(function(room) {
 *   room.on('participantConnected', function(participant) {
 *     console.log(participant.identity + ' has connected');
 *   });

 *   room.once('disconnected', function() {
 *     console.log('You left the Room:', room.name);
 *   });
 * }).catch(error => {
 *   console.log('Could not connect to the Room:', error.message);
 * });
 * @example
 * var Video = require('twilio-video');
 * var token = getAccessToken();
 *
 * // Connect with audio-only
 * Video.connect(token, {
 *   name: 'my-cool-room',
 *   audio: true
 * }).then(function(room) {
 *   room.on('participantConnected', function(participant) {
 *     console.log(participant.identity + ' has connected');
 *   });
 *
 *   room.once('disconnected', function() {
 *     console.log('You left the Room:', room.name);
 *   });
 * }).catch(error => {
 *   console.log('Could not connect to the Room:', error.message);
 * });
 * @example
 * var Video = require('twilio-video');
 * var token = getAccessToken();
 *
 * // Connect with media acquired using getUserMedia()
 * navigator.mediaDevices.getUserMedia({
 *   audio: true,
 *   video: true
 * }).then(function(mediaStream) {
 *   return Video.connect(token, {
 *     name: 'my-cool-room',
 *     tracks: mediaStream.getTracks()
 *   });
 * }).then(function(room) {
 *   room.on('participantConnected', function(participant) {
 *     console.log(participant.identity + ' has connected');
 *   });
 *
 *   room.once('disconnected', function() {
 *     console.log('You left the Room:', room.name);
 *   });
 * }).catch(error => {
 *   console.log('Could not connect to the Room:', error.message);
 * });
 * @example
 * var Video = require('twilio-video');
 * var token = getAccessToken();
 *
 * // Connect with custom names for LocalAudioTrack and LocalVideoTrack
 * Video.connect(token, {
 *   name: 'my-cool-room'
 *   audio: { name: 'microphone' },
 *   video: { name: 'camera' }
 * }).then(function(room) {
 *   room.localParticipants.trackPublications.forEach(function(publication) {
 *     console.log('The LocalTrack "' + publication.trackName + '" was successfully published');
 *   });
 * }).catch(error => {
 *   console.log('Could not connect to the Room:', error.message);
 * });
 * @example
 * // Accessing the SDK logger
 * var { Logger, connect } = require('twilio-video');
 * var token = getAccessToken();
 *
 * var logger = Logger.getLogger('twilio-video');
 *
 * // Listen for logs
 * var originalFactory = logger.methodFactory;
 * logger.methodFactory = function (methodName, logLevel, loggerName) {
 *   var method = originalFactory(methodName, logLevel, loggerName);
 *
 *   return function (datetime, logLevel, component, message, data) {
 *     method(datetime, logLevel, component, message, data);
 *     // Send to your own server
 *     postDataToServer(arguments);
 *   };
 * };
 * logger.setLevel('debug');
 *
 * connect(token, {
 *   name: 'my-cool-room'
 * }).then(function(room) {
 *   room.on('participantConnected', function(participant) {
 *     console.log(participant.identity + ' has connected');
 *   });
 * }).catch(error => {
 *   console.log('Could not connect to the Room:', error.message);
 * });
 */function connect$1(e,t){"undefined"===typeof t&&(t={});if(!WS(t))return tT.reject(eT.INVALID_TYPE("options","object"));var r=t.Log||nT;var n=t.loggerName||GS;var i=t.logLevel||zS;var a=$S(i);var o="[connect #"+ ++oT+"]";var c;try{c=new r("default",o,a,n)}catch(h){return tT.reject(h)}deprecateOptions(t,c,dT);var s="auto"===t.preferredVideoCodecs;s&&(t.preferredVideoCodecs=[{codec:"VP8",simulcast:true,adaptiveSimulcast:true}]);if(t.maxVideoBitrate&&s){c.error('ConnectOptions "maxVideoBitrate" is not compatible with "preferredVideoCodecs=auto"');return tT.reject(eT.ILLEGAL_INVOKE("connect",'ConnectOptions "maxVideoBitrate" is not compatible with "preferredVideoCodecs=auto"'))}t=Object.assign({automaticSubscription:true,dominantSpeaker:false,enableDscp:false,environment:qS,eventListener:null,insights:true,LocalAudioTrack:AS,LocalDataTrack:DS,LocalParticipant:LS,LocalVideoTrack:xS,Log:r,MediaStreamTrack:TS,loggerName:n,logLevel:i,maxAudioBitrate:null,maxVideoBitrate:null,name:null,networkMonitor:true,networkQuality:false,preferredAudioCodecs:[],preferredVideoCodecs:[],realm:KS,region:JS,signaling:FS},HS(t));var u={};"string"===typeof t.wsServerInsights&&(u.gateway=t.wsServerInsights);var l=t.insights?MS:IS;var d=new l(e,XS,ZS,t.environment,t.realm,u);var p=YS(t.environment,t.region);var f=new rT(d,Date.now(),c,t.eventListener);t=Object.assign({eventObserver:f,wsServer:p},t);t.log=c;if(sT&&!cT&&"error"!==c.logLevel&&"off"!==c.logLevel){cT=true;c.warn(["Support for Safari 12.0 and below is limited because it does not support VP8.","This means you may experience codec issues in Group Rooms. You may also","experience codec issues in Peer-to-Peer (P2P) Rooms containing Android- or","iOS-based Participants who do not support H.264. However, P2P Rooms","with browser-based Participants should work. For more information, please","refer to this guide: https://www.twilio.com/docs/video/javascript-v2-developing-safari-11"].join(" "))}if("string"!==typeof e)return tT.reject(eT.INVALID_TYPE("token","string"));var v=Object.assign({},t);delete v.name;if("tracks"in t){if(!Array.isArray(t.tracks))return tT.reject(eT.INVALID_TYPE("options.tracks","Array of LocalAudioTrack, LocalVideoTrack or MediaStreamTrack"));try{t.tracks=t.tracks.map((function(e){return US(e,v)}))}catch(h){return tT.reject(h)}}var h=iT(t.bandwidthProfile);if(h)return tT.reject(h);t.clientTrackSwitchOffControl="disabled";t.contentPreferencesMode="disabled";if(t.bandwidthProfile){t.clientTrackSwitchOffControl="auto";t.contentPreferencesMode="auto";if(t.bandwidthProfile.video){deprecateOptions(t.bandwidthProfile.video,c,pT);"maxTracks"in t.bandwidthProfile.video?t.clientTrackSwitchOffControl="disabled":"manual"===t.bandwidthProfile.video.clientTrackSwitchOffControl?t.clientTrackSwitchOffControl="manual":t.clientTrackSwitchOffControl="auto";"renderDimensions"in t.bandwidthProfile.video?t.contentPreferencesMode="disabled":"manual"===t.bandwidthProfile.video.contentPreferencesMode?t.contentPreferencesMode="manual":t.contentPreferencesMode="auto"}}var _=t.signaling;var m=new _(t.wsServer,t);c.info("Connecting to a Room");c.debug("Options:",t);var g=new RS({maxAudioBitrate:t.maxAudioBitrate,maxVideoBitrate:t.maxVideoBitrate},s);var y={audio:t.preferredAudioCodecs.map(normalizeCodecSettings),video:t.preferredVideoCodecs.map(normalizeCodecSettings)};var b=new VS(WS(t.networkQuality)?t.networkQuality:{});["audio","video"].forEach((function(e){return y[e].forEach((function(t){var r=t.codec;return OS(r,e).then((function(t){return!t&&c.warn("The preferred "+e+' codec "'+r+'" will be ignored as it is not supported by the browser.')}))}))}));var k=ES(getLocalTracks.bind(null,t),createLocalParticipant.bind(null,m,c,g,b,t),createRoomSignaling.bind(null,e,t,m,g,y),createRoom.bind(null,t));k.then((function(e){d.connect(e.sid,e.localParticipant.sid);c.info("Connected to Room:",e.toString());c.info("Room name:",e.name);c.debug("Room:",e);e.once("disconnected",(function(){return d.disconnect()}));return e}),(function(e){d.disconnect();k._isCanceled?c.info("Attempt to connect to a Room was canceled"):c.info("Error while connecting to a Room:",e)}));return k}
/**
 * You may pass these options to {@link connect} in order to override the
 * default behavior.
 * @typedef {object} ConnectOptions
 * @property {boolean|CreateLocalTracksOptions|CreateLocalAudioTrackOptions} [audio=true] - Whether or not to
 *   get local audio with <code>getUserMedia</code> when <code>tracks</code>
 *   are not provided.
 * @property {boolean} [automaticSubscription=true] - By default, you will subscribe
 *   to all RemoteTracks shared by other Participants in a Room. You can now override this
 *   behavior by setting this flag to <code>false</code>. It will make sure that you will
 *   not subscribe to any RemoteTrack in a Group or Small Group Room. Setting it to
 *   <code>true</code>, or not setting it at all preserves the default behavior. This
 *   flag does not have any effect in a Peer-to-Peer Room.
 * @property {BandwidthProfileOptions} [bandwidthProfile] - You can optionally configure
 *   how your available downlink bandwidth is shared among the RemoteTracks you have subscribed
 *   to in a Group Room. By default, bandwidth is shared equally among the RemoteTracks.
 *   This has no effect in Peer-to-Peer Rooms.
 * @property {boolean} [dominantSpeaker=false] - Whether to enable the Dominant
 *   Speaker API or not. This only takes effect in Group Rooms.
 * @property {boolean} [dscpTagging=false] - <code>(deprecated: use "enableDscp" instead)</code>
 *   DSCP tagging allows you to request enhanced QoS treatment for RTP media packets from any
 *   firewall that the client may be behind. Setting this option to <code>true</code> will
 *   request DSCP tagging for media packets on supported browsers (only Chrome supports this
 *   as of now). Audio packets will be sent with DSCP header value set to 0xb8 which corresponds
 *   to Expedited Forwarding (EF). Video packets will be sent with DSCP header value set to 0x88
 *   which corresponds to Assured Forwarding (AF41).
 * @property {boolean} [enableDscp=false] - DSCP tagging allows you to request enhanced
 *   QoS treatment for RTP media packets from any firewall that the client may be behind.
 *   Setting this option to <code>true</code> will request DSCP tagging for media packets
 *   on supported browsers (only Chrome supports this as of now). Audio packets will be
 *   sent with DSCP header value set to 0xb8 which corresponds to Expedited Forwarding (EF).
 *   Video packets will be sent with DSCP header value set to 0x88 which corresponds to
 *   Assured Forwarding (AF41).
 * @property {EventListener} [eventListener] - <code>(deprecated: use [Video.Logger](module-twilio-video.html)</code>
 *   you can listen to fine-grained events related to signaling and media that are
 *   not available in the public APIs. These events might be useful for your own reporting
 *   and diagnostics.
 * @property {Array<RTCIceServer>} iceServers - Override the STUN and TURN
 *   servers used when connecting to {@link Room}s
 * @property {RTCIceTransportPolicy} [iceTransportPolicy="all"] - Override the
 *   ICE transport policy to be one of "relay" or "all"
 * @property {boolean} [insights=true] - Whether publishing events
 *   to the Insights gateway is enabled or not
 * @property {?number} [maxAudioBitrate=null] - Max outgoing audio bitrate (bps);
 *   A <code>null</code> or a <code>0</code> value does not set any bitrate limit;
 *   This value is set as a hint for variable bitrate codecs, but will not take
 *   effect for fixed bitrate codecs; Based on our tests, Chrome, Firefox and Safari
 *   support a bitrate range of 12000 bps to 256000 bps for Opus codec; This parameter
 *   has no effect on iSAC, PCMU and PCMA codecs
 * @property {?number} [maxVideoBitrate=null] - Max outgoing video bitrate (bps);
 *   A <code>null</code> or <code>0</code> value does not set any bitrate limit;
 *   This value is set as a hint for variable bitrate codecs, but will not take
 *   effect for fixed bitrate codecs; Based on our tests, Chrome, Firefox and Safari
 *   all seem to support an average bitrate range of 20000 bps (20 kbps) to
 *   8000000 bps (8 mbps) for a 720p VideoTrack
 *   This parameter must not be set when when preferredVideoCodecs is set to `auto`.
 * @property {?string} [name=null] - Set to connect to a {@link Room} by name
 * @property {boolean|NetworkQualityConfiguration} [networkQuality=false] - Whether to enable the Network
 *   Quality API or not. This only takes effect in Group Rooms. Pass a {@link NetworkQualityConfiguration}
 *   to configure verbosity levels for network quality information for {@link LocalParticipant}
 *   and {@link RemoteParticipant}s. A <code>true</code> value will set the {@link NetworkQualityVerbosity}
 *   for the {@link LocalParticipant} to {@link NetworkQualityVerbosity}<code style="padding:0 0">#minimal</code>
 *   and the {@link NetworkQualityVerbosity} for {@link RemoteParticipant}s to
 *   {@link NetworkQualityVerbosity}<code style="padding:0 0">#none</code>.
 * @property {Array<string>} [notifyWarnings=[]] - The SDK raises warning events when it
 *   detects certain conditions. You can implement callbacks on these events to act on them, or to alert
 *   the user of an issue. Subsequently, "warningsCleared" event is raised when conditions have returned
 *   to normal. You can listen to these events by specifying an array of warning. By default,
 *   this array is empty and no warning events will be raised.
 *   Possible values include <code>recording-media-lost</code>, which is raised when the media server
 *   has not detected any media on the published track that is being recorded in the past 30 seconds.
 *   This usually happens when there are network interruptions or when the track has stopped.
 *   This warning is raised by {@link LocalTrackPublication}, {@link LocalParticipant}, and {@link Room} object.
 * @property {string} [region='gll'] - Preferred signaling region; By default, you will be connected to the
 *   nearest signaling server determined by latency based routing. Setting a value other
 *   than <code style="padding:0 0">gll</code> bypasses routing and guarantees that signaling traffic will be
 *   terminated in the region that you prefer. Please refer to this <a href="https://www.twilio.com/docs/video/ip-address-whitelisting#signaling-communication" target="_blank">table</a>
 *   for the list of supported signaling regions.
 * @property {Array<AudioCodec|AudioCodecSettings>} [preferredAudioCodecs=[]] - Preferred audio codecs;
 *  An empty array preserves the current audio codec preference order.
 * @property {Array<VideoCodec|VideoCodecSettings>|VideoEncodingMode} [preferredVideoCodecs=[]] -
 *  Preferred video codecs; when set to 'VideoEncodingMode.Auto', SDK manages the video codec,
 *  by preferring VP8 simulcast in group rooms. It also enables adaptive simulcast, which allows SDK
 *  to turn off simulcast layers that are not needed for efficient bandwidth and CPU usage.
 *  An empty array preserves the current video codec.
 *  preference order. If you want to set a preferred video codec on a Group Room,
 *  you will need to create the Room using the REST API and set the
 *  <code>VideoCodecs</code> property.
 *  See <a href="https://www.twilio.com/docs/api/video/rooms-resource#create-room">
 *  here</a> for more information.
 * @property {LogLevel|LogLevels} [logLevel='warn'] - <code>(deprecated: use [Video.Logger](module-twilio-video.html) instead.
 *   See [examples](module-twilio-video.html#.connect) for details)</code>
 *   Set the default log verbosity
 *   of logging. Passing a {@link LogLevel} string will use the same
 *   level for all components. Pass a {@link LogLevels} to set specific log
 *   levels.
 * @property {string} [loggerName='twilio-video'] - The name of the logger. Use this name when accessing the logger used by the SDK.
 *   See [examples](module-twilio-video.html#.connect) for details.
 * @property {Array<LocalTrack|MediaStreamTrack>} [tracks] - The
 *   {@link LocalTrack}s or MediaStreamTracks with which to join the
 *   {@link Room}. These tracks can be obtained either by calling
 *   {@link createLocalTracks}, or by constructing them from the MediaStream
 *   obtained by calling <code>getUserMedia()</code>.
 * @property {boolean|CreateLocalTrackOptions} [video=true] - Whether or not to
 *   get local video with <code>getUserMedia</code> when <code>tracks</code>
 *   are not provided.
 */
/**
 * {@link BandwidthProfileOptions} allows you to configure how your available downlink
 * bandwidth is shared among the RemoteTracks you have subscribed to in a Group Room.
 * @typedef {object} BandwidthProfileOptions
 * @property {VideoBandwidthProfileOptions} [video] - Optional parameter to configure
 *   how your available downlink bandwidth is shared among the {@link RemoteVideoTrack}s you
 *   have subscribed to in a Group Room.
 */
/**
 * {@link VideoBandwidthProfileOptions} allows you to configure how your available downlink
 * bandwidth is shared among the {@link RemoteVideoTrack}s you have subscribed to in a Group Room.
 * @typedef {object} VideoBandwidthProfileOptions
 * @property {Track.Priority} [dominantSpeakerPriority="standard"] - Optional parameter to
 *   specify the minimum subscribe {@link Track.Priority} of the Dominant Speaker's {@link RemoteVideoTrack}s.
 *   This means that the Dominant Speaker's {@link RemoteVideoTrack}s that are published with
 *   lower {@link Track.Priority} will be subscribed to with the {@link Track.Priority} specified here.
 *   This has no effect on {@link RemoteVideoTrack}s published with higher {@link Track.Priority}, which will
 *   still be subscribed to with with the same {@link Track.Priority}. If not specified, this defaults to "standard".
 *   This parameter only applies to a Group Room Participant when {@link ConnectOptions}.dominantSpeaker is set to true.
 * @property {number} [maxSubscriptionBitrate] - Optional parameter to specify the maximum
 *   downlink video bandwidth in bits per second (bps). By default, there are no limits on
 *   the downlink video bandwidth.
 * @property {ClientTrackSwitchOffControl} [clientTrackSwitchOffControl="auto"] - Optional parameter that determines
 *    when to turn the {@link RemoteVideoTrack} on or off. When set to "auto", SDK will use the visibility of the
 *    attached elements to determine if the {@link RemoteVideoTrack} should be turned off or on. When the attached video elements become invisible the {@link RemoteVideoTrack} will
 *    be turned off, and when elements become visible they will be turned on. When set to "manual" you can turn the {@link RemoteVideoTrack}
 *    on and off using the api {@link RemoteVideoTrack#switchOn} and {@link RemoteVideoTrack#switchOff} respectively.
 * @property {VideoContentPreferencesMode} [contentPreferencesMode="auto"] - This Optional parameter configures
 *    the mode for specifying content preferences for the {@link RemoteVideoTrack}. When set to "auto" the
 *    SDK determines the render dimensions by inspecting the attached video elements. {@link RemoteVideoTrack}s rendered in smaller video elements
 *    will receive a lower resolution stream compared to the video rendered in larger video elements. When set to "manual" you can set
 *    the dimensions programmatically by calling {@link RemoteVideoTrack#setContentPreferences}.
 * @property {number} [maxTracks] - <code>(deprecated: use "clientTrackSwitchOffControl" instead)</code>. Optional
 *   parameter to specify the maximum number of visible {@link RemoteVideoTrack}s, which will be selected based on
 *   {@link Track.Priority} and an N-Loudest policy. By default there are no limits on the number of visible {@link RemoteVideoTrack}s.
 *   0 or a negative value will remove any limit on the maximum number of visible {@link RemoteVideoTrack}s.
 * @property {BandwidthProfileMode} [mode="grid"] - Optional parameter to specify how the {@link RemoteVideoTrack}s'
 *   TrackPriority values are mapped to bandwidth allocation in Group Rooms. This defaults to "grid",
 *   which results in equal bandwidth share allocation to all {@link RemoteVideoTrack}s.
 * @property {VideoRenderDimensions} [renderDimensions] - <code>(deprecated: use "contentPreferencesMode" instead)</code>. Optional
 * parameter to specify the desired render dimensions of {@link RemoteVideoTrack}s.
 * @property {TrackSwitchOffMode} [trackSwitchOffMode="predicted"] - Optional parameter to configure
 *   how {@link RemoteVideoTrack}s are switched off in response to bandwidth pressure. Defaults to "predicted".
 */
/**
 * @deprecated
 * {@link VideoRenderDimensions} allows you to specify the desired render dimensions of {@link RemoteVideoTrack}s.
 * You can specify 'auto' for this field - which is also default value -  based on {@link Track.Priority}. The bandwidth allocation algorithm will distribute the available downlink bandwidth
 * proportional to the requested render dimensions. This is just an input for calculating the bandwidth to be allocated
 * and does not affect the actual resolution of the {@link RemoteVideoTrack}s.
 * @typedef {object} VideoRenderDimensions
 * @property {VideoTrack.Dimensions} [high] - Optional parameter to specify the desired rendering dimensions of
 *   {@link RemoteVideoTrack} whose {@link Track.Priority} is "high". 0 or a negative value will result in the lowest
 *   possible resolution. This defaults to 1280 x 720 (HD).
 * @property {VideoTrack.Dimensions} [low] - Optional parameter to specify the desired rendering dimensions of
 *   {@link RemoteVideoTrack} whose {@link Track.Priority} is "low". 0 or a negative value will result in the lowest
 *   possible resolution. This defaults to 176 x 144 (QCIF).
 * @property {VideoTrack.Dimensions} [standard] - Optional parameter to specify the desired rendering dimensions of
 *   {@link RemoteVideoTrack} whose {@link Track.Priority} is "standard". 0 or a negative value will result in the lowest
 *   possible resolution. This defaults to 640 x 480 (VGA).
 */
/**
 * Configure verbosity levels for network quality information for
 * {@link LocalParticipant} and {@link RemoteParticipant}s.
 * @typedef {object} NetworkQualityConfiguration
 * @property {NetworkQualityVerbosity} [local=1] - Verbosity level for {@link LocalParticipant}
 * @property {NetworkQualityVerbosity} [remote=0] - Verbosity level for {@link RemoteParticipant}s
 */
/**
 * You may pass these levels to {@link ConnectOptions} to override
 * log levels for individual components.
 * @typedef {object} LogLevels
 * @property {LogLevel} [default='warn'] - Log level for 'default' modules.
 * @property {LogLevel} [media='warn'] - Log level for 'media' modules.
 * @property {LogLevel} [signaling='warn'] - Log level for 'signaling' modules.
 * @property {LogLevel} [webrtc='warn'] - Log level for 'webrtc' modules.
 */
/**
 * Audio codec settings.
 * @typedef {object} AudioCodecSettings
 * @property {AudioCodec} codec - Audio codec name
 */
/**
 * Opus codec settings.
 * @typedef {AudioCodecSettings} OpusCodecSettings
 * @property {AudioCodec} name - "opus"
 * @property {boolean} [dtx=true] - Enable/disable discontinuous transmission (DTX);
 *   If enabled all published {@link LocalAudioTrack}s will reduce the outgoing bitrate
 *   to near-zero whenever speech is not detected, resulting in bandwidth and CPU savings;
 *   It defaults to true.
 */
/**
 * Video codec settings.
 * @typedef {object} VideoCodecSettings
 * @property {VideoCodec} codec - Video codec name
 */
/**
 * VP8 codec settings.
 * @typedef {VideoCodecSettings} VP8CodecSettings
 * @property {VideoCodec} name - "VP8"
 * @property {boolean} [simulcast=false] - Enable/disable VP8 simulcast; If
 *   enabled, Twilio's Video SDK will send three video streams of different
 *   qualities
 */var fT={H264:"H264",VP8:"VP8"};fT.VP9="VP9";
/**
 * An {@link EventListener} allows you to listen to fine-grained {@link EventListenerEvent}s related
 * to signaling and media that are not available in the public APIs, which might be useful for your own
 * reporting and diagnostics.
 * @typedef {EventEmitter} EventListener
 * @example
 * const { EventEmitter } = require('events');
 * const { connect } = require('twilio-video');
 *
 * const eventListener = new EventEmitter();
 * eventListener.on('event', function(event) {
 *   console.log('The SDK raised an event:', event);
 * });
 *
 * connect('token', {
 *   eventListener: eventListener
 * });
 */
/**
 * The SDK raised an {@link EventListenerEvent}.
 * @event EventListener#event
 * @param {EventListenerEvent} event - Context about the event raised by the SDK.
 * This can be one of the following:
 *  * {@link EventListenerClosedEvent}
 *  * {@link EventListenerConnectingEvent}
 *  * {@link EventListenerEarlyEvent}
 *  * {@link EventListenerOpenEvent}
 *  * {@link EventListenerWaitingEvent}
 */
/**
 * An {@link EventListenerEvent} provides context about an event raised by the SDK on the
 * {@link EventListener}. Apart from the properties listed here, it may also include some
 * event-specific data within an optional "payload" property. The different types of
 * {@link EventListenerEvent}s are listed below:
 *  * {@link EventListenerClosedEvent}
 *  * {@link EventListenerConnectingEvent}
 *  * {@link EventListenerEarlyEvent}
 *  * {@link EventListenerOpenEvent}
 *  * {@link EventListenerWaitingEvent}
 * @typedef {object} EventListenerEvent
 * @property {number} elapsedTime - The time elapsed in milliseconds since connect() was called
 * @property {EventListenerGroup} group - The group under which the event is classified
 * @property {EventListenerLevel} level - The verbosity level of the event, which can be one of "debug", "error", "info", "warning"
 * @property {string} name - The name of the event
 * @property {*} [payload] - Optional event-specific data
 * @property {number} timestamp - The time in milliseconds relative to the Unix Epoch when the event was raised
 */
/**
 * The connection to Twilio's signaling server was closed.
 * @typedef {EventListenerEvent} EventListenerClosedEvent
 * @property {EventListenerGroup} group='signaling'
 * @property {EventListenerLevel} level - 'info' if the connection was closed by the client, 'error' otherwise
 * @property {string} name='closed'
 * @property {{reason: string}} payload - Reason for the connection being closed. It can be one of
 *   'busy', 'failed', 'local', 'remote' or 'timeout'
 */
/**
 * The SDK is connecting to Twilio's signaling server.
 * @typedef {EventListenerEvent} EventListenerConnectingEvent
 * @property {EventListenerGroup} group='signaling'
 * @property {EventListenerLevel} level='info'
 * @property {string} name='connecting'
 */
/**
 * The SDK is about to connect to Twilio's signaling server.
 * @typedef {EventListenerEvent} EventListenerEarlyEvent
 * @property {EventListenerGroup} group='signaling'
 * @property {EventListenerLevel} level='info'
 * @property {string} name='early'
 */
/**
 * The SDK has established a signaling connection to Twilio's signaling server.
 * @typedef {EventListenerEvent} EventListenerOpenEvent
 * @property {EventListenerGroup} group='signaling'
 * @property {EventListenerLevel} level='info'
 * @property {string} name='open'
 */
/**
 * The SDK is waiting to retry connecting th Twilio's signaling server. This can
 * happen if the server is busy with too many connection requests.
 * @typedef {EventListenerEvent} EventListenerWaitingEvent
 * @property {EventListenerGroup} group='signaling'
 * @property {EventListenerLevel} level='warning'
 * @property {string} name='waiting'
 */
function deprecateOptions(e,t,r){r.forEach((function(r){var n=r.didWarn,i=r.name,a=r.newName,o=r.shouldDelete;if(i in e&&"undefined"!==typeof e[i]){a&&o&&(e[a]=e[i]);o&&delete e[i];if(!n&&!["error","off"].includes(t.level)){t.warn('The ConnectOptions "'+i+'" is '+(a?'deprecated and scheduled for removal. Please use "'+a+'" instead.':"no longer applicable and will be ignored."));r.didWarn=true}}}))}function createLocalParticipant(e,t,r,n,i,a){var o=e.createLocalParticipantSignaling(r,n);t.debug("Creating a new LocalParticipant:",o);return new i.LocalParticipant(o,a,i)}function createRoom(e,t,r){var n=new NS(t,r,e);var i=e.log;i.debug("Creating a new Room:",n);r.on("stateChanged",(function stateChanged(e){if("disconnected"===e){i.info("Disconnected from Room:",n.toString());r.removeListener("stateChanged",stateChanged)}}));return n}function createRoomSignaling(e,t,r,n,i,a){t.log.debug("Creating a new RoomSignaling");return r.connect(a._signaling,e,n,i,t)}function getLocalTracks(e,t){var r=e.log;e.shouldStopLocalTracks=!e.tracks;if(e.shouldStopLocalTracks)r.info("LocalTracks were not provided, so they will be acquired automatically before connecting to the Room. LocalTracks will be released if connecting to the Room fails or if the Room is disconnected");else{r.info("Getting LocalTracks");r.debug("Options:",e)}return e.createLocalTracks(e).then((function getLocalTracksSucceeded(n){var i=t(n);i.catch((function handleLocalTracksFailed(){if(e.shouldStopLocalTracks){r.info("The automatically acquired LocalTracks will now be stopped");n.forEach((function(e){e.stop()}))}}));return i}))}function normalizeCodecSettings(e){var t="string"===typeof e?{codec:e}:e;switch(t.codec.toLowerCase()){case"opus":return Object.assign({dtx:true},t);case"vp8":return Object.assign({simulcast:false},t);default:return t}}SS=connect$1;var vT=SS;var hT={};var _T=v,mT=_T.DEFAULT_LOG_LEVEL,gT=_T.DEFAULT_LOGGER_NAME;
/**
 * Request a {@link LocalAudioTrack} or {@link LocalVideoTrack}.
 * @param {Track.Kind} kind - "audio" or "video"
 * @param {CreateLocalTrackOptions} [options]
 * @returns {Promise<LocalAudioTrack|LocalVideoTrack>}
 * @private
 */function createLocalTrack(e,t){t=Object.assign({loggerName:gT,logLevel:mT},t);var r={};r.loggerName=t.loggerName;r.logLevel=t.logLevel;delete t.loggerName;delete t.logLevel;var n=t.createLocalTracks;delete t.createLocalTracks;r[e]=!(Object.keys(t).length>0)||t;return n(r).then((function(e){return e[0]}))}
/**
 * Request a {@link LocalAudioTrack}.
 * @alias module:twilio-video.createLocalAudioTrack
 * @param {CreateLocalTracksOptions|CreateLocalAudioTrackOptions} [options] - Options for requesting a {@link LocalAudioTrack}
 * @returns {Promise<LocalAudioTrack>}
 * @example
 * var Video = require('twilio-video');
 *
 * // Connect to the Room with just video
 * Video.connect('my-token', {
 *   name: 'my-cool-room',
 *   video: true
 * }).then(function(room) {
 *   // Add audio after connecting to the Room
 *   Video.createLocalAudioTrack().then(function(localTrack) {
 *     room.localParticipant.publishTrack(localTrack);
 *   });
 * });
 * @example
 * var Video = require('twilio-video');
 *
 * // Request the LocalAudioTrack with a custom name
 * // and krisp noise cancellation
 * Video.createLocalAudioTrack({
 *   name: 'microphone',
 *   noiseCancellationOptions: {
 *      vendor: 'krisp',
 *      sdkAssetsPath: '/twilio-krisp-audio-plugin/1.0.0/dist'
 *   }
 * });
 */function createLocalAudioTrack$1(e){return createLocalTrack("audio",e)}
/**
 * Request a {@link LocalVideoTrack}. Note that on mobile browsers,
 * the camera can be reserved by only one {@link LocalVideoTrack} at any given
 * time. If you attempt to create a second {@link LocalVideoTrack}, video frames
 * will no longer be supplied to the first {@link LocalVideoTrack}.
 * @alias module:twilio-video.createLocalVideoTrack
 * @param {CreateLocalTrackOptions} [options] - Options for requesting a {@link LocalVideoTrack}
 * @returns {Promise<LocalVideoTrack>}
 * @example
 * var Video = require('twilio-video');
 *
 * // Connect to the Room with just audio
 * Video.connect('my-token', {
 *   name: 'my-cool-room',
 *   audio: true
 * }).then(function(room) {
 *   // Add video after connecting to the Room
 *   Video.createLocalVideoTrack().then(function(localTrack) {
 *     room.localParticipant.publishTrack(localTrack);
 *   });
 * });
 * @example
 * var Video = require('twilio-video');
 *
 * // Request the default LocalVideoTrack with a custom name
 * Video.createLocalVideoTrack({ name: 'camera' }).then(function(localTrack) {
 *   console.log(localTrack.name); // 'camera'
 * });
 */function createLocalVideoTrack$1(e){return createLocalTrack("video",e)}
/**
 * You can use 3rd party noise cancellation plugin when creating {@link LocalAudioTrack}
 * By specifying these options. This is a beta feature.
 * @typedef {object} NoiseCancellationOptions
 * @property {NoiseCancellationVendor} vendor - Specifies the vendor library to use
 *   You need to obtain and host the library files on your web server.
 * @property {string} sdkAssetsPath - Specifies path where vendor library files are
 *   hosted on your web server.
 */
/**
 * Create {@link LocalAudioTrack} options.
 * @typedef {CreateLocalTrackOptions} CreateLocalAudioTrackOptions
 * @property {boolean} [workaroundWebKitBug180748=false] - setting this
 *   attempts to workaround WebKit Bug 180748, where, in Safari, getUserMedia may return a silent audio
 *   MediaStreamTrack.
 * @property {DefaultDeviceCaptureMode} [defaultDeviceCaptureMode="auto"] - This optional property only applies if the
 *   {@link LocalAudioTrack} is capturing from the default audio input device connected to a desktop or laptop. When the
 *   property is set to "auto", the LocalAudioTrack restarts whenever the default audio input device changes, in order to
 *   capture audio from the new default audio input device. For example, when a bluetooth audio headset is connected to a
 *   Macbook, the LocalAudioTrack will start capturing audio from the headset microphone. When the headset is disconnected,
 *   the LocalAudioTrack will start capturing audio from the Macbook microphone. When the property is set to "manual", the
 *   LocalAudioTrack continues to capture from the same audio input device even after the default audio input device changes.
 *   When the property is not specified, it defaults to "auto".
 * @property {NoiseCancellationOptions} [noiseCancellationOptions] - This optional property enables using 3rd party plugins
 *   for noise cancellation.
 */
/**
 * Create {@link LocalTrack} options. Apart from the properties listed here, you can
 * also specify any of the <a href="https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints" target="_blank">MediaTrackConstraints</a>
 * properties.
 * @typedef {MediaTrackConstraints} CreateLocalTrackOptions
 * @property {LogLevel|LogLevels} [logLevel='warn'] - <code>(deprecated: use [Video.Logger](module-twilio-video.html) instead.
 *   See [examples](module-twilio-video.html#.connect) for details)</code>
 *   Set the default log verbosity
 *   of logging. Passing a {@link LogLevel} string will use the same
 *   level for all components. Pass a {@link LogLevels} to set specific log
 *   levels.
 * @property {string} [loggerName='twilio-video'] - The name of the logger. Use this name when accessing the logger used by the SDK.
 *   See [examples](module-twilio-video.html#.connect) for details.
 * @property {string} [name] - The {@link LocalTrack}'s name; by default,
 *   it is set to the {@link LocalTrack}'s ID.
 */
hT={audio:createLocalAudioTrack$1,video:createLocalVideoTrack$1};var yT=hT;var bT={};var kT=U,ST=kT.guessBrowser,TT=kT.support;var wT=ce.getSdpFormat;var CT=hr,PT=CT.isAndroid,OT=CT.isMobile,ET=CT.isNonChromiumEdge,RT=CT.rebrandedChromeBrowser,LT=CT.mobileWebKitBrowser;var MT=["crios","edg","edge","electron","headlesschrome"];var IT=["chrome","firefox"];var jT=["chrome","safari"];var AT=[];
/**
 * Check if the current browser is officially supported by twilio-video.js.
 * @returns {boolean}
 */function isSupported$1(){var e=ST();if(!e)return false;var t=RT(e);var r=LT(e);var n=PT()?IT:jT;return!!e&&TT()&&"unified"===wT()&&(!t||MT.includes(t))&&!ET(e)&&(!r||AT.includes(r))&&(!OT()||n.includes(e))}bT=isSupported$1;var DT=bT;var xT={};var VT=xT&&xT.__assign||function(){VT=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e};return VT.apply(this,arguments)};Object.defineProperty(xT,"__esModule",{value:true});var NT=ba;var FT=Ks;var BT={connect:vT,createLocalAudioTrack:yT.audio,createLocalVideoTrack:yT.video,isSupported:DT(),version:f.version,Logger:p,LocalAudioTrack:ya.LocalAudioTrack,LocalDataTrack:ya.LocalDataTrack,LocalVideoTrack:ya.LocalVideoTrack};function connect(e,t){var r=VT({createLocalTracks:NT.createLocalTracks},t);return BT.connect(e,r)}function createLocalAudioTrack(e){var t=VT({createLocalTracks:NT.createLocalTracks},e);return BT.createLocalAudioTrack(t)}function createLocalVideoTrack(e){var t=VT({createLocalTracks:NT.createLocalTracks},e);return BT.createLocalVideoTrack(t)}var UT=BT.isSupported;var $T=BT.version;var HT=BT.Logger;var WT=BT.LocalAudioTrack;var QT=BT.LocalVideoTrack;var qT=BT.LocalDataTrack;xT={connect:connect,createLocalAudioTrack:createLocalAudioTrack,createLocalVideoTrack:createLocalVideoTrack,createLocalTracks:NT.createLocalTracks,runPreflight:FT.runPreflight,isSupported:UT,version:$T,Logger:HT,LocalAudioTrack:WT,LocalVideoTrack:QT,LocalDataTrack:qT};var zT=xT;const GT=xT.__esModule,KT=xT.createLocalTracks;const JT=xT.connect,YT=xT.createLocalAudioTrack,XT=xT.createLocalVideoTrack;export{GT as __esModule,JT as connect,YT as createLocalAudioTrack,KT as createLocalTracks,XT as createLocalVideoTrack,zT as default};

