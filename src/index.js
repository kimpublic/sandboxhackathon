const { authorize } = require('./auth');
const { listLabels, listInboxMessages } = require('./gmailService');

async function main() {
  const auth = await authorize();
  await listInboxMessages(auth);
}

// ✅ 실행
main().catch(console.error);
