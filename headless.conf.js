module.exports = {
    "src_folders": ["tests"],
    "page_objects_path": "page-objects",
    "global_path": "./globals.js",

    "webdriver": {
        "start_process": true,
        "server_path": require('chromedriver').path,
        "port": 9515
    },

    "test_settings": {
        "default": {
            "desiredCapabilities": {
                "browserName": "chrome",
                "chromeOptions": {
                    'args': ['--headless']
                }
            }
        }
    }
};
