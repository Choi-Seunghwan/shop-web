# shop-web

쇼핑몰 프론트엔드 (React)

<img width="616" height="934" alt="img1" src="https://github.com/user-attachments/assets/23997821-7494-40e8-b5b7-6ec2f60dddd1" />

**메인 페이지**

<img width="619" height="931" alt="img3" src="https://github.com/user-attachments/assets/503cc81c-78d5-49d7-a088-9d0c4dd18346" />

**제품 상세 화면**

<img width="888" height="935" alt="img4" src="https://github.com/user-attachments/assets/56a9aa84-c54e-4987-956b-05322badf00c" />

**회원가입 / 본인인증 화면**

<img width="620" height="927" alt="img5" src="https://github.com/user-attachments/assets/8a71f918-f3ee-49aa-bc57-cbd8f121babf" />

**장바구니 화면**

<img width="619" height="933" alt="img6" src="https://github.com/user-attachments/assets/68fc2f0f-e524-4ff8-801c-379478f392a1" />

**PG 결제**

<img width="619" height="935" alt="img7" src="https://github.com/user-attachments/assets/5a8b0218-7b8c-458b-a5eb-6384c0e6649f" />

**주문 내역**


## Links

- [shop-account-service](https://github.com/Choi-Seunghwan/shop-account-service) - 회원 서비스
- [shop-commerce-service](https://github.com/Choi-Seunghwan/shop-commerce-service) - 커머스 서비스

## Tech Stack

- React
- TypeScript
- Styled Components
- PortOne Browser SDK

## 로컬 개발 설정

```bash
# 패키지 설치
pnpm install

# 개발 서버 실행
pnpm start
```

## 프로젝트 구조

```
src/
├── assets/           # 이미지, 아이콘
├── components/       # 공통 컴포넌트
│   ├── card/         # 카드 컴포넌트 (상품, 장바구니)
│   └── ...
├── pages/            # 페이지 컴포넌트
├── services/         # API 서비스
├── types/            # TypeScript 타입
└── utils/            # 유틸리티 함수
```

## 주요 페이지

| 경로 | 설명 |
|------|------|
| / | 메인 (상품 목록) |
| /product/:id | 상품 상세 |
| /cart | 장바구니 |
| /order | 주문 내역 |
| /login | 로그인 |
| /signup | 회원가입 |
