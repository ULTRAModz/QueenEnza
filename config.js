const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({path: './config.env'});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'you_session_id',
    MODERATORS: process.env.MODERATORS || '94711449492,94715430842',
    ALLWAYS_ONLINE: process.env.ALLWAYS_ONLINE || 'false',
    STATUS_VIEW : process.env.STATUS_VIEW || 'false',
    ANTI_BOT: process.env.ANTI_BOT || 'true',
    ANTI_LINK: process.env.ANTI_LINK || 'false',
};