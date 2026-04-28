# 우유펫 공식 홈페이지 (wooyoopet.com)

반려견 가정집 돌봄서비스 **우유펫**의 공식 랜딩페이지입니다.

## 프로젝트 구조

```
wooyoopet-web/
├── index.html          # 메인 페이지
├── css/
│   └── style.css       # 스타일시트
├── js/
│   └── main.js         # JavaScript (헤더, FAQ, QR 등)
├── images/
│   ├── logo.png        # 우유펫 로고
│   ├── app-screen-home.png
│   ├── app-screen-detail.png
│   └── app-screen-chat.png
├── favicon.ico
├── .gitignore
└── README.md
```

## 기술 스택

- 순수 HTML / CSS / JavaScript
- Pretendard 폰트 (CDN)
- QRCode.js (CDN)

## 페이지 구성

1. **히어로** - 앱 소개 + QR 코드 다운로드 + 앱 스크린샷
2. **서비스 소개** - 가정집 돌봄, 산책, 픽업/드랍
3. **이용 방법** - 5단계 이용 플로우
4. **유치원 등록 안내** - 유치원 자격 및 등록 절차
5. **이용 후기** - 보호자 리뷰
6. **FAQ** - 자주 묻는 질문
7. **앱 다운로드** - 스토어 링크 + QR 코드
8. **푸터** - 사업자 정보

## 배포

정적 파일이므로 별도 빌드 없이 바로 배포 가능합니다.
- GitHub Pages: Settings > Pages > Deploy from a branch (main)
- Cloudflare Pages: 빌드 설정 없이 루트 디렉토리 그대로 배포

## 브랜치 관리

- `main` - 배포용
- `develop` - 작업용
