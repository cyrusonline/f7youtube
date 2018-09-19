cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-streaming-media.StreamingMedia",
    "file": "plugins/cordova-plugin-streaming-media/www/StreamingMedia.js",
    "pluginId": "cordova-plugin-streaming-media",
    "clobbers": [
      "streamingMedia"
    ]
  },
  {
    "id": "cordova-plugin-in-app-youtube.plugin",
    "file": "plugins/cordova-plugin-in-app-youtube/www/plugin.js",
    "pluginId": "cordova-plugin-in-app-youtube",
    "clobbers": [
      "InAppYouTube"
    ],
    "runs": true
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-streaming-media": "2.1.3",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-in-app-youtube": "1.0.0"
};
// BOTTOM OF METADATA
});