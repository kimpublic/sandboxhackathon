const express = require('express');
const cors = require('cors');
const { authorize } = require('./auth');
const { listInboxMessages } = require('./gmailService');

const app = express();
const PORT = 3000;

app.use(cors());

// ✅ 루트 경로('/') 추가 → 브라우저에서 직접 접근 시 메시지 출력
app.get('/', (req, res) => {
    res.send('<h1>✅ 서버 정상 작동 중! API는 /emails에서 확인하세요.</h1>');
});

// ✅ Gmail API 엔드포인트
app.get('/emails', async (req, res) => {
    try {
        const auth = await authorize();
        const emails = await listInboxMessages(auth);
        res.json(emails);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ 서버 실행
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
