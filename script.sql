-- DB 생성
CREATE DATABASE hanyanginpack DEFAULT CHARACTER SET UTF8MB4 COLLATE UTF8MB4_GENERAL_CI;

-- 견적문의 테이블
CREATE TABLE inquiry
(
    id          INT           NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT '견적문의 인덱스',
    company     VARCHAR2(100) NOT NULL COMMENT '회사명',
    name        VARCHAR2(100) NOT NULL COMMENT '담당자명',
    contact     VARCHAR2(50)  NOT NULL COMMENT '연락처',
    email       VARCHAR2(100) NOT NULL COMMENT '이메일',
    box         VARCHAR2(100) DEFAULT '' COMMENT '선택한 박스 이름',
    quantity    VARCHAR2(100) NOT NULL COMMENT '수량',
    region      VARCHAR2(100) NOT NULL COMMENT '주문지역',
    description TEXT COMMENT '기타 문의사항',
    date        DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '문의 시간'
) DEFAULT CHARSET=UTF8MB4 COLLATE=UTF8MB4_GENERAL_CI COMMENT '견적문의 테이블';