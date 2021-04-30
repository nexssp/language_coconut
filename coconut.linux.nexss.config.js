let languageConfig = Object.assign({}, require("./coconut.win32.nexss.config"));
const sudo = process.sudo;
languageConfig.compilers = {
  coconut: {
    install: `${sudo}apt install -y gcc python3.8 python3-pip && ${sudo}pip3 install coconut`,
    command: "coconut-run",
    args: "<file>",
    help: ``,
  },
};

const distName = process.distro;
languageConfig.dist = distName;

// TODO: Later to cleanup this config file !!
switch (distName) {
  case process.distros.ALPINE:
    languageConfig.compilers.coconut.install = process.replacePMByDistro(
      `${sudo}apt install -y musl-dev py3-pip python3-dev && ${sudo}pip3 install coconut`
    );
    break;
  case process.distros.CENTOS:
  case process.distros.RHEL:
  case process.distros.FEDORA:
    languageConfig.compilers.coconut.install = process.replacePMByDistro(
      `${sudo}apt install -y python3-devel && ` +
        languageConfig.compilers.coconut.install
    );
    break;
  case process.distros.ORACLE:
    languageConfig.compilers.coconut.install = process.replacePMByDistro(
      `${sudo}apt install -y oracle-epel-release-el7 *python3-dev* && ` +
        languageConfig.compilers.coconut.install
    );
    break;
  case process.distros.UBUNTU:
    languageConfig.compilers.coconut.install = process.replacePMByDistro(
      `${sudo}apt install -y python3-dev && ` +
        languageConfig.compilers.coconut.install
    );
    break;
  default:
    languageConfig.compilers.coconut.install = process.replacePMByDistro(
      `${sudo}apt install -y *python3-dev* && ` +
        languageConfig.compilers.coconut.install
    );
    break;
}

module.exports = languageConfig;
