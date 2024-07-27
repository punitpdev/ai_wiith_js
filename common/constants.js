const constants = {};

constants.DATA_DIR = "../data";
constants.RAW_DIR = constants.DATA_DIR + "/raw";
constants.DTATSET_DIR = constants.DATA_DIR + "/dataset";
constants.JSON_DIR = constants.DTATSET_DIR + "/json";
constants.IMG_DIR = constants.DTATSET_DIR + "/img";
constants.SAMPLES = constants.DTATSET_DIR + "/samples.json";
constants.JS_OBJECTS = '../common/js_objects'
constants.SAMPLES_JS = constants.JS_OBJECTS + "/samples.js";
constants.FEATURES = constants.DTATSET_DIR + "/features.json";
constants.FEATURES_JS = constants.JS_OBJECTS + "/features.js";


if(typeof module !== "undefined"){
  module.exports = constants;
}