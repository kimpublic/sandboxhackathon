const { google } = require('googleapis');

// ✅ Gmail API 라벨 목록 가져오기
async function listLabels(auth) {
  const gmail = google.gmail({ version: 'v1', auth });
  const res = await gmail.users.labels.list({ userId: 'me' });
  const labels = res.data.labels;

  if (!labels || labels.length === 0) {
    console.log('No labels found.');
    return;
  }
  
  console.log('Labels:');
  labels.forEach((label) => console.log(`- ${label.name}`));
}

// ✅ INBOX 메일 목록 가져오기
async function listInboxMessages(auth) {
  const gmail = google.gmail({ version: 'v1', auth });

  const res = await gmail.users.messages.list({
    userId: 'me',
    labelIds: ['INBOX'],
    maxResults: 10,
  });

  const messages = res.data.messages;
  if (!messages || messages.length === 0) {
    console.log('No messages found.');
    return;
  }

  console.log('Inbox Messages:');
  for (const message of messages) {
    const msg = await gmail.users.messages.get({
      userId: 'me',
      id: message.id,
    });

    const headers = msg.data.payload.headers;
    const subjectHeader = headers.find((header) => header.name === 'Subject');
    const subject = subjectHeader ? subjectHeader.value : 'No Subject';
    console.log(`- ${subject}`);
  }
}

// ✅ 필요한 기능 export
module.exports = { listLabels, listInboxMessages };
