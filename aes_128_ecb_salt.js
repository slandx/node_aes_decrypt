// Decrypt file which is encrypted by openssl using the command:
// openssl enc -aes-128-ecb -pass pass:456 -p -salt -md md5 -in origin.json -out origin_128_ecb_s.json

var crypto = require('crypto');

function md5(data) {
    var hash = crypto.createHash('md5');
    hash.update(data);
    return new Buffer(hash.digest('hex'), 'hex');
}

var text = require('fs').readFileSync('origin_128_ecb_s.json');
var salt = text.slice(8, 16);
console.log(salt);
var cryptotext = text.slice(16);
var password = new Buffer('456');

var key = md5(Buffer.concat([ password, salt ]));
console.log("KEY:"+key.toString('hex').toUpperCase());

var decoder = crypto.createDecipheriv('aes-128-ecb', key, "");

var chunks = [];
chunks.push(decoder.update(cryptotext, "binary", "utf8"));
chunks.push(decoder.final("utf8"));
console.log(chunks.join(''));
