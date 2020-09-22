let languageConfig = Object.assign({}, require("./coconut.win32.nexss.config"));
languageConfig.compilers = {
  coconut: {
    install: `apt install -y gcc python3.8 python3-pip && pip3 install coconut`,
    command: "coconut-run",
    args: "<file>",
    help: ``,
  },
};

const os = require(`@nexssp/os`);

const distName = os.name();
languageConfig.dist = distName;

// TODO: Later to cleanup this config file !!
switch (distName) {
  case os.distros.CENTOS:
  case os.distros.RHEL:
  case os.distros.FEDORA:
    languageConfig.compilers.coconut.install = os.replacePMByDistro(
      "apt install -y python3-devel && " +
        languageConfig.compilers.coconut.install
    );
    break;
  case os.distros.ORACLE:
    languageConfig.compilers.coconut.install = os.replacePMByDistro(
      "apt install -y oracle-epel-release-el7 *python3-dev* && " +
        languageConfig.compilers.coconut.install
    );
    break;
  default:
    languageConfig.compilers.coconut.install = os.replacePMByDistro(
      "apt install -y *python3-dev* && " +
        languageConfig.compilers.coconut.install
    );
    break;
}

module.exports = languageConfig;
