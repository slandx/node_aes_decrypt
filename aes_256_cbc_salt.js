// Decrypt file which is encrypted by openssl using the command:
// openssl enc -aes-256-cbc -pass pass:456 -p -salt -md md5 -in origin.json -out origin_256_cbc_s.conf

var crypto = require('crypto');

function md5(data) {
    var hash = crypto.createHash('md5');
    hash.update(data);
    return new Buffer(hash.digest('hex'), 'hex');
}

var text = require('fs').readFileSync('origin_256_cbc_s.conf');
var salt = text.slice(8, 16);
var cryptotext = text.slice(16);
var password = new Buffer('456');

var hash0 = new Buffer('');
var hash1 = md5(Buffer.concat([ hash0, password, salt ]));
var hash2 = md5(Buffer.concat([ hash1, password, salt ]));
var hash3 = md5(Buffer.concat([ hash2, password, salt ]));
var key = Buffer.concat([ hash1, hash2 ]);
var iv = hash3;
console.log("KEY:"+key.toString('hex').toUpperCase());
console.log("IV :"+iv.toString('hex').toUpperCase());


var decoder = crypto.createDecipheriv('aes-256-cbc', key, iv);

var chunks = [];
chunks.push(decoder.update(cryptotext, "binary", "utf8"));
chunks.push(decoder.final("utf8"));
console.log(chunks.join(''));
