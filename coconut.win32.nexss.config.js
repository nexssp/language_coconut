// must be here for unicode !!!!
process.env.PYTHONIOENCODING = "UTF-8";
// process.env.PYTHONOPTIMIZE = 1;

let languageConfig = Object.assign(
  {},
  require(`../config.${process.platform}`)
);
languageConfig.title = "Coconut";
languageConfig.description =
  "Simple, elegant, Pythonic functional programming.";
languageConfig.url = "https://coconut-lang.org";
languageConfig.founders = ["Evan Hubinger"];
languageConfig.developers = [""];
languageConfig.years = ["2015"];
languageConfig.extensions = [".coco"];
languageConfig.compilers = {
  coconut: {
    install: "scoop install python & python -m pip install coconut",
    command: "coconut-run",
    args: "<file>",
    help: ``,
  },
};
languageConfig.errors = require("./nexss.coconut.errors");
languageConfig.languagePackageManagers = {
  pip3: {
    installation: "scoop install python",
    messageAfterInstallation: "", //this message will be displayed after this package manager installation, maybe some action needed etc.
    req: "python3 -m pip install -r requirements.txt",
    freeze: "python3 -m pip freeze > requirements.txt",
    installed: "python3 -m pip list",
    search: "python3 -m pip search",
    install: "python3 -m pip install",
    uninstall: "python3 -m pip remove",
    help: "python3 -m pip",
    version: "python3 -m pip --version",
    init: () => {},
    // if command not found in specification
    // run directly on package manager
    else: "pip3",
  },
};

module.exports = languageConfig;
