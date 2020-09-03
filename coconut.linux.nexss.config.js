let languageConfig = Object.assign({}, require("./coconut.win32.nexss.config"));
languageConfig.compilers = {
  coconut: {
    install: "apt install -y python3.8 python3-pip && pip install coconut",
    command: "coconut-run",
    args: "<file>",
    help: ``,
  },
};
languageConfig.errors = require("./nexss.coconut.errors");

module.exports = languageConfig;
