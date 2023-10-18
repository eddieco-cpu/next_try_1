"use client";
import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Message: ${message}`);
    // 在這裡添加發送電子郵件的邏輯
  };

  return (
    <div>
      <h2>聯絡我們</h2>
      <p>如果您有任何問題或疑問，請填寫以下表格與我們聯繫。</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">電子郵件：</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">輸入訊息：</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">發送</button>
      </form>
      <p>聯絡資訊：</p>
      <ul>
        <li>電話：123-456-7890</li>
        <li>地址：台灣台北市中正區忠孝東路一段 1 號</li>
        <li>電子郵件：info@example.com</li>
      </ul>
    </div>
  );
};

export default Contact;
