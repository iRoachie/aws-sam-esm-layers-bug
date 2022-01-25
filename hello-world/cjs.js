const { nanoid } = require('nanoid');

exports.lambdaHandler = async () => {
  return `hello ${nanoid()}`;
};
