let languageConfig = Object.assign({}, require("./coconut.win32.nexss.config"));
languageConfig.compilers = {
  coconut: {
    install: "brew install python3.8 python3-pip && pip3 install coconut",
    command: "coconut-run",
    args: "<file>",
    help: ``,
  },
};
languageConfig.errors = require("./nexss.coconut.errors");

module.exports = languageConfig;
