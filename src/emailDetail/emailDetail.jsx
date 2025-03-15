import React from "react";
import { useParams, Link } from "react-router-dom";

const EmailDetail = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      {/* Inbox 버튼: 클릭 시 메일 목록으로 이동 */}
      <button className="compose-btn" style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          &larr; Back to Inbox
        </Link>
      </button>
      <h2>Email Detail</h2>
      <p>This is the detail view for email with ID: {id}</p>
      {/* 상세 내용을 추가로 구현하면 됨 */}
    </div>
  );
};

export default EmailDetail;
