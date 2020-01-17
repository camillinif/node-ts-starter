const fs = require('fs-extra');

module.exports = (source, dest) =>
    fs.copySync(`${__dirname}/../../${source}`, `${process.cwd()}/${dest}`);
