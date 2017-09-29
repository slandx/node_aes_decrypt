# Node.js AES Decrypt Test
Test project for Node.js to decrypt files which are encrypted by openssl command line.

# Details
- **AES-128-ECB with salt**
```shell
# Encrypt file with password '456', salt and hash method md5
openssl enc -aes-128-ecb -pass pass:456 -p -salt -md md5 -in origin.json -out origin_128_ecb_s.json
```
Decrypt code [aes_128_ecb_salt.js](aes_128_ecb_salt.js)

- **AES-128-ECB without salt**
```shell
# Encrypt file with password '456', no salt and hash method md5
openssl enc -aes-128-ecb -pass pass:456 -p -nosalt -md md5 -in origin.json -out origin_128_ecb.json
```
Decrypt code [aes_128_ecb_nosalt.js](aes_128_ecb_nosalt.js)

- **AES-256-CBC with salt**
```shell
# Encrypt file with password '456', salt and hash method md5
openssl enc -aes-256-cbc -pass pass:456 -p -salt -md md5 -in origin.json -out origin_256_cbc_s.conf
```
Decrypt code [aes_256_cbc_salt.js](aes_256_cbc_salt.js)

- **AES-256-CBC without salt**
```shell
# Encrypt file with password '456', no salt and hash method md5
openssl enc -aes-256-cbc -pass pass:456 -p -nosalt -md md5 -in origin.json -out origin_256_cbc.json
```
Decrypt code [aes_256_cbc_nosalt.js](aes_256_cbc_nosalt.js)

# Reference
[KEY DERIVATION ALGORITHM](https://wiki.openssl.org/index.php/Manual:EVP_BytesToKey(3))
```
D_i = HASH^count(D_(i-1) || data || salt)
```

# Dependendy
[crypto module](https://nodejs.org/api/crypto.html)
