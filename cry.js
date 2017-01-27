const crypto = require('crypto');

const secret = 'redhat';
const hash = crypto.createHash('sha256')
                    .update(secret) 
                   .digest('base64');
    console.log(hash);