let languageConfig = Object.assign({}, require("./coconut.win32.nexss.config"));
const os = require(`${process.env.NEXSS_SRC_PATH}/node_modules/@nexssp/os/`);
const sudo = os.sudo();
languageConfig.compilers = {
  coconut: {
    install: `${sudo}apt install -y gcc python3.8 python3-pip && ${sudo}pip3 install coconut`,
    command: "coconut-run",
    args: "<file>",
    help: ``,
  },
};

const distName = os.name();
languageConfig.dist = distName;

// TODO: Later to cleanup this config file !!
switch (distName) {
  case os.distros.CENTOS:
  case os.distros.RHEL:
  case os.distros.FEDORA:
    languageConfig.compilers.coconut.install = os.replacePMByDistro(
      `${sudo}apt install -y python3-devel && ` +
        languageConfig.compilers.coconut.install
    );
    break;
  case os.distros.ORACLE:
    languageConfig.compilers.coconut.install = os.replacePMByDistro(
      `${sudo}apt install -y oracle-epel-release-el7 *python3-dev* && ` +
        languageConfig.compilers.coconut.install
    );
    break;
  case os.distros.UBUNTU:
    languageConfig.compilers.coconut.install = os.replacePMByDistro(
      `${sudo}apt install -y python3-dev && ` +
        languageConfig.compilers.coconut.install
    );
    break;
  default:
    languageConfig.compilers.coconut.install = os.replacePMByDistro(
      `${sudo}apt install -y *python3-dev* && ` +
        languageConfig.compilers.coconut.install
    );
    break;
}

module.exports = languageConfig;
