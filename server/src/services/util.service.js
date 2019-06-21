const { to } = require('await-to-js');
const pe = require('parse-error');

const errorResponse = (res, err, code = 400) => {
    res.statusCode = code;
    return res.json({ success: false, error: err });
};

const successResponse = (res, data, code) => {
    let send_data = { success: true };
    if (typeof data == 'object') send_data = Object.assign(data, send_data);
    if (typeof code !== 'undefined') res.statusCode = code;
    return res.json(send_data);
};

const parseError = async promise => {
    let err, res;
    [err, res] = await to(promise);
    if (err) return [pe(err)];
    return [null, res];
};

module.exports = {
    errorResponse,
    parseError,
    successResponse
};
