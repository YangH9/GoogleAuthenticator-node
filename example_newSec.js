'use strict';

const authenticator = require('./index.js').authenticator;
const auth = new authenticator();
const secretLnegth = 32;
const secret = auth.createSecret(secretLnegth);
const url = auth.getGoogleQRCodeAPIUrl('random/code', secret, 'test');

function refresh() {
  console.log(Date());
  console.log('secret:', secret);
  let code = auth.getCode(secret);
  console.log('code:', code);
  console.log('verify code ' + code + ':', auth.verifyCode(secret, code));
  console.log('url:', url);
  console.log('\n\n\n\n');
}
refresh();
setInterval(refresh, 10000);