const {producerErrorMessage} = require('errorhandler-nxg-cg');
const {constants} = require('utils-nxg-cg');
const {ftp} = require('ftp-cg-lib');
const {emits} = constants;
const {loging_elastic} = require('loging-elastic-cg-lib');
const {createSum, checkSumMD5} = require("md5-node-cg-lib");
const {log_levels} = constants;

/**
 * Method for ftp connections
 * @param msg
 * @param cfg
 * @param snapshot
 * @returns {Promise<void>}
 */
module.exports.process = async function ftpProcess(msg, cfg, snapshot = {}) {
    try {
        loging_elastic(constants.START_EXEC, log_levels.debug);
        const default_level = log_levels.info;
        let {data} = msg;
        let payload = constants.PAYLOAD_NOT_ALLOWED;
        let {uniquetransactionid, allowPayload} = cfg;
        if (allowPayload)
            payload = data;
        if (!uniquetransactionid)
            loging_elastic(payload, default_level);
        else
            loging_elastic(payload, default_level, uniquetransactionid);
        const md5_source = checkSumMD5(msg, cfg);

        if (md5_source) {
            const {result, flag} = await ftp(msg, cfg);
            console.log("esto es result:"+result);
            console.log("esto es result string:"+JSON.stringify(result));
            const data = {
                content: result
            }

            console.log("esto es data:"+data);
            console.log("esto es data string:"+JSON.stringify(data));
            const md5sum = createSum(result, flag);
            if (md5sum)
                data.md5sum = md5sum;
            this.emit(emits.data, {data});
            snapshot.lastUpdated = new Date();
            this.emit(emits.snapshot, snapshot);
            loging_elastic(constants.FINISH_EXEC, log_levels.debug);
            this.emit(emits.end);
        }else
            throw Error(constants.ERROR_MD5);
    } catch (e) {
        this.emit(emits.error, e);
        loging_elastic(e, log_levels.error);
        producerErrorMessage(msg, e);
    }
};