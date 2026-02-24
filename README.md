# shop-web

쇼핑몰 프론트엔드 (React)

## Links

- [web.shop.chuz.site](https://web.shop.chuz.site/) - 예제 사이트
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