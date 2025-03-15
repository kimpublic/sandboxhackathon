const { google } = require('googleapis');

async function listInboxMessages(auth) {
    const gmail = google.gmail({ version: 'v1', auth });

    const res = await gmail.users.messages.list({
        userId: 'me',
        labelIds: ['INBOX'],
        maxResults: 10,
    });

    const messages = res.data.messages;
    if (!messages || messages.length === 0) {
        return [];
    }

    // ✅ JSON 형식으로 이메일 목록 반환
    const emailList = [];
    for (const message of messages) {
        const msg = await gmail.users.messages.get({
            userId: 'me',
            id: message.id,
        });

        const headers = msg.data.payload.headers;
        const subjectHeader = headers.find(header => header.name === 'Subject');
        const subject = subjectHeader ? subjectHeader.value : 'No Subject';

        emailList.push({
            id: message.id,
            subject: subject,
        });
    }

    return emailList; // JSON 형식으로 반환
}

module.exports = { listInboxMessages };
