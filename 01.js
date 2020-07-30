const crypto = require('crypto');
hash = crypto.getHashes();

class Hash{
	constructor(pwd){
		this.pwd = pwd;
	}

	md5(){
		var hashMd5 = crypto.createHash('md5').update(this.pwd).digest('hex');
		console.log('md5: ' + hashMd5);
	}

	sha1(){
		var hashSha1 = crypto.createHash('sha1').update(this.pwd).digest('hex');
		console.log('sha1: ' + hashSha1);
	}

	sha256(){
		var hashSha256 = crypto.createHash('sha256').update(this.pwd).digest('hex');
		console.log('sha256: ' + hashSha256);
	}

	sha512(){
		var hashSha512 = crypto.createHash('sha512').update(this.pwd).digest('hex');
		console.log('sha512: ' + hashSha512);
	}
}

let hashing = new Hash('secret');
hashing.md5();
hashing.sha1();
hashing.sha256();
hashing.sha512();