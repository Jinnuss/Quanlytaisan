import React from "react";

function AssetDetail({ asset }) {
  return (
    <div className="detail">
      <h2>Chi tiết tài sản</h2>

      <p>
        <strong>Mã:</strong> {asset.code}
      </p>

      <p>
        <strong>Tên:</strong> {asset.name}
      </p>

      <p>
        <strong>Người sử dụng:</strong> {asset.user}
      </p>

      <p>
        <strong>Trạng thái:</strong> {asset.status}
      </p>

      <h3>Lịch sử cấp phát</h3>

      <ul>
        {asset.logs.map((log, index) => (
          <li key={index}>
            {log.date} - {log.action}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AssetDetail;