import { Col, Row } from "antd";

export default function BlogHeadline() {
  return (
    <Row
      align="middle"
      style={{
        height: 400,
        textAlign: "center",
      }}
    >
      <Col span={24}>
        <h1
          style={{
            fontSize: 70,
            fontWeight: "bold",
          }}
        >
          Kyle's Blog
        </h1>
        <p
          style={{
            fontSize: 24,
          }}
        >
          안녕하세요 Next.js와 Sanity를 이용한 Blog 제작연습중인 블로그입니다.
        </p>
      </Col>
    </Row>
  );
}
