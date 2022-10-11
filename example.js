'use strict';

const authenticator = require('./index.js').authenticator;

const auth = new authenticator();

console.log('==============Random test=============');
const secret = auth.createSecret(32);
console.log('secret:', secret);

const code = auth.getCode(secret);
console.log('code:', code);

const verifyResult1 = auth.verifyCode(secret, code);
console.log('verify result of:' + code, verifyResult1);

const verifyResult2 = auth.verifyCode(secret, "123456");
console.log('verify result of:123456', verifyResult2);

const QRaddr = auth.getGoogleQRCodeAPIUrl('poi test/' + secret, secret, 'poi');
console.log('QR address:', QRaddr);
console.log('\n\n');
console.log('================fixed test================');
console.log('code of QYTACVMTAYCPZDYS', auth.getCode('QYTACVMTAYCPZDYS'));
console.log('QR of QYTACVMTAYCPZDYS', auth.getGoogleQRCodeAPIUrl('poi test/QYTACVMTAYCPZDYS', 'QYTACVMTAYCPZDYS', 'poi'));

console.log('\n\n');
