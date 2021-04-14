module.exports = {
    "src_folders": ["tests"],
    "page_objects_path": "page-objects",
    "global_path": "./globals.js",

    "webdriver": {
        "server_path": require('chromedriver').path,
        "cli_args": [
          "--verbose"
        ],
        "port": 9515,
        "timeout_options": {
          "timeout": 60000,
          "retry_attempts": 3
        },
        "start_process": true
    },

    "test_settings": {
        "default": {
            "desiredCapabilities": {
                "browserName": "chrome"
            }
        }
    }
};
