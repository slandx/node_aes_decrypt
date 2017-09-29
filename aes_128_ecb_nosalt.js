// Decrypt file which is encrypted by openssl using the command:
// openssl enc -aes-128-ecb -pass pass:456 -p -nosalt -md md5 -in origin.json -out origin_128_ecb.json

var crypto = require('crypto');

function md5(data) {
    var hash = crypto.createHash('md5');
    hash.update(data);
    return new Buffer(hash.digest('hex'), 'hex');
}

var cryptotext = require('fs').readFileSync('origin_128_ecb.json');
var key = md5("456");
console.log("KEY:" + key.toString('hex').toUpperCase());

var decoder = crypto.createDecipheriv('aes-128-ecb', key, "");

var chunks = [];
chunks.push(decoder.update(cryptotext, "binary", "utf8"));
chunks.push(decoder.final("utf8"));
console.log(chunks.join(''));
