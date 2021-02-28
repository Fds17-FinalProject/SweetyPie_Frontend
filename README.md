# SweetyPie - Airbnb Clone Coding
![logo_PK](https://user-images.githubusercontent.com/69497936/109405536-ed76eb80-79b4-11eb-8dbc-171b3d5856a3.png)

<br>

> 2021.01.25부터 2021.02.26까지 5주간 진행한 airbnb 클론 코딩 프로젝트입니다. <br>
> 기획 1주, 개발 4주의 일정으로 진행하였습니다.

<br>

# Demo

- [Click here](https://sweetypie.netlify.app/) to see our website.
- [Click here]() to see our demo video.

<br>

# 서비스 기능

### 1. 메인 페이지 

-

### 2. 검색 페이지

- Redux를 통해 필터 조건, 페이지, 지도 범위 등 검색 페이지와 관련된 모든 state 관리
- 검색 페이지에서 검색 조건에 맞는 데이터를 fetch하여 숙소 리스트 렌더링
- 숙소 리스트에 있는 숙소들을 지도 상에 각각의 위도 경도에 맞게 숙소 마커 렌더링
- 지도 상에서 마커 클릭시 숙소 정보를 모달로 팝업
- 지도 위치를 옮길 때마다 지도 범위에 맞는 데이터를 새로 fetch 하도록 구현
- 페이지 이동시 새로운 데이터 fetch 하여 렌더하는 pagenation 기능
- 숙소리스트의 각 숙소에 마우스가 hover 되면 지도에서 hover 된 숙소의 마커 스타일 변경
- 지도 마커를 클릭했을 때 나오는 팝업의 위치 조정
- 새로운 북마크 리스트 추가 및 북마크 설정/해제 기능 구현
- 숙소 이미지를 보여주는 infinity carousel 구현
- 검색 조건을 query로 관리하여 refresh 되더라도 상태 유지
- 숙소 유형을 선택할 수 있는 필터 팝업 구현
- 숙소 가격 범위를 정할 수 있는 필터 팝업 구현
- 검색 결과에 따라 설정할 수 있는 필터 조건에 대한 정보 fetch하여 모달에 렌더링
- 최근 본 숙소 페이지에 대한 데이터를 로컬 스토리지에 저장하여 최근 숙소 리스트에 렌더링

### 3. 숙소 상세정보 페이지

- 메인과 검색 페이지의 조건 상태값을 url query로 관리하여 인원 및 예약일자 연동
- 북마크 버튼 클릭 시, 새로운 북마크 리스트 추가 및 북마크 설정/해제 기능 구현
- googleMap 지도 API 연결해 위도, 경도 DB로 위치 렌더링 및 커스터마이징
- react-dates 라이브러리로 달력 연동 및 커스터마이징
- 달력 컴포넌트와 연동되어 숙박 예약 변경 가능한 달력 팝업창 구현
- 달력과 예약하기 내 달력 팝업창 간 날짜 연동 및 인원 예약 정보 url에 담아 관리
- 비회원이 상세정보 페이지에서 날짜 및 인원 선택 시 예약되지 않고 로그인 창 팝업
- 조건에 따라 성인, 아이, 유아 인원 수 선택 가능한 숙박 인원 팝업창 구현
- 숙박일수에 따른 가격 및 수수료 변화
- 스크롤 이벤트를 이용한 페이지 내부 navigation header 구현
- 스크롤 위치에 따른 header 렌더링 변화
- 후기 모두보기 클릭 시, 초기 6개 리뷰를 포함한 모든 리뷰 보기 모달 구현 
- 더보기, 자세히보기 모달 구현

### 4. 결제 페이지

- 

### 5. 예약내역 페이지

- 

### 6. 저장목록 페이지

- 

### 7. 계정 페이지

- 

<br>

# Directory structure
- redux ducks 패턴 적용

```
├── src                                 # source files
│    ├── assets                           # 공통 css js configuration files
│    ├── components                       # presentation component files
│    │   ├── booking                        # 예약 컴포넌트
│    │   ├── common                         # 공통 컴포넌트
│    │   ├── main                           # 메인 컴포넌트
│    │   ├── modify                         # 수정 컴포넌트
│    │   ├── roomDetail                     # 상세보기 컴포넌트
│    │   ├── search                         # 검색 컴포넌트
│    │   ├── trip                           # 예약 내역 컴포넌트
│    │   └── wishlist                       # 저장 목록 컴포넌트
│    ├── containers                       # containers component files
│    ├── pages                            # pages files
│    └── redux                            # redux 상태관리 모음
│          ├── lib                          # api 모음
│          └── modules                      # 상태 관리에 필요한 ducks 구조의 redux action, reducer
├── .eslintignore, estlintrc.js         # lint에 필요한 파일
├── .prettierrc                         # Pritter 설정 파일
├── .nvmrc                              # node version 설정 파일
├── craco.config.js                     # cra 설정 파일
├── tailwind.config                     # tailwind 설정 파일
├── netlify.toml                        # netlify 설정 파일
├── setupProxy.js                       # proxy 설정 파일
└── package.json                        # npm setting 파일
```

<br>

# 개발기간

- 기획 : 21.01.25 - 21.01.29 (1주)
- 프로젝트 : 21.02.01 - 21.02.26 (4주)

# 기술스택 & 툴

### Front-End

- HTML/CSS
- Javascript
- React
- redux
- redux-saga
- Tailwindcss
- Styled-components

### 협업

- git/github
- slack
- zoom
- notion

### 개발 프로세스

- Agile - Scrum


<br>

# 구성원
<a href="https://github.com/Fds17-FinalProject/SweetyPie_Frontend/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Fds17-FinalProject/SweetyPie_Frontend" />
</a>
<a href="https://github.com/Fds17-FinalProject/SweetyPie_Backend/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Fds17-FinalProject/SweetyPie_Backend" />
</a>

Frontend: [김동찬](https://github.com/dongchan-K), [김재민](https://github.com/Kim-Jaemin420), [이한슬](https://github.com/hanseul-lee), [임영서](https://github.com/youngseo-im) <br>
Backend: [나영원](https://github.com/FoeverNa), [이재복](https://github.com/Tezla-Lee), [임준철](https://github.com/limjoonchul)

<br>
