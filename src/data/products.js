// 상품 id, 이름, Url, 가격 및 설명을 저장하는 Array
import doubleRastedVest from "./mainpage_images/testcloth1.png";
import beltedSidePocketPants from "./mainpage_images/testcloth2.png";
import meshBodysuit from "./mainpage_images/testcloth3.png";
import classyCashmereJacket from "./mainpage_images/testcloth4.png";
import classyCashmerePants from "./mainpage_images/classy_cashmere_pants.png";
import organzaBlazer from "./mainpage_images/organza_blazer.png";
import cottonSleeveless from "./mainpage_images/cotton_sleeveless.png";
import oneTuckPants from "./mainpage_images/one_tuck_pants.png";
import doubleBeltedPleatsSkirt from "./mainpage_images/double_belted_pleats_skirt.png";
import handmadePearlTie from "./mainpage_images/handmade_pearl_tie.png";
import multiPearlChain from "./mainpage_images/multi_pearl_chain.png";
import logoPearlKeychain from "./mainpage_images/logo_pearl_keychain.png";
import pearlLongScar from "./mainpage_images/pearl_long_scar.png";

const products = [
  {
    id: 1,
    name: "Double rasted vest",
    imageUrl: doubleRastedVest,
    price: "₩189,000",
    description: `
      - 린넨 30% 코튼 70%
      - 루즈 핏
      - 화이트 컬러
      - 앞판 포켓 디테일
      - 포켓 자수 디테일
      - 로고 각인 단추
      - 로고 각인 단추`,
    size: `
      F (프리사이즈)
      - Length 53
      - Bust 60
      - Shoulder 48`,
  },
  {
    id: 2,
    name: "Belted side pocket pants",
    imageUrl: beltedSidePocketPants,
    price: "₩389,000",
    description: `
      - P 64% R34% PU 2%
      - 오버핏
      - 네이비컬러
      - 벨트포함
      - 더블 벨트고리 디테일
      - 기본포켓, 사이드포켓
      - 원턱 팬츠`,
    size: `
      F (프리사이즈)
      - Length 117
      - Waist 83
      - Hip 110
      - Front Rise 33
      - Thigh 34
      - Hem 26`,
  },
  {
    id: 3,
    name: "Mesh bodysuit",
    imageUrl: meshBodysuit,
    price: "₩120,000",
    description: `
      - P 100%
      - 장식 스냅
      - 오버핏
      - 블랙컬러`,
    size: `
      F (프리사이즈)
      - Length 76
      - Bust 50
      - Shoulder 36`,
  },
  {
    id: 4,
    name: "Classy wool jacket",
    imageUrl: classyCashmereJacket,
    price: "₩659,000",
    description: `
      - W 100%
      - 프리미엄 울 트윌
      - 오버핏
      - 그레이 컬러
      - 비대칭재킷
      - 사이드 벨트
      - 벨트 사이즈 조절가능
      - 단추로 다양한 여밈 가능`,
    size: `
      F (프리사이즈)
      - Length 60
      - Bust 62.5
      - Shoulder 54`,
  },
  {
    id: 5,
    name: "Classy wool pants",
    imageUrl: classyCashmerePants,
    price: "₩429,000",
    description: `
      - W 100%
      - 프리미엄 울 트윌
      - 오버핏
      - 그레이 컬러
      - 원턱 팬츠
      - 뒷판 입술포켓`,
    size: `
      F (프리사이즈)
      - Length 117
      - Waist 82
      - Hip 114
      - Front Rise 32
      - Thigh 35
      - Hem 26`,
  },
  {
    id: 6,
    name: "Organza blazer",
    imageUrl: organzaBlazer,
    price: "₩328,000",
    description: `
      - P 100%
      - 오간자 소재
      - 오버핏
      - 크롭기장
      - 여밈없이 사이드로 빠지는 형태`,
    size: `
      F (프리사이즈)
      - Length 67
      - Bust 62
      - Shoulder 49`,
  },
  {
    id: 7,
    name: "Cotton sleeveless",
    imageUrl: cottonSleeveless,
    price: "₩98,000",
    description: `
      - C 94% SP 6%
      - 블랙컬러
      - 골반까지 내려오는 기장감
      - 밑단 삼봉마감
      - 목,암홀 랍빠`,
    size: `
      F (프리사이즈)
      - Length 62
      - Bust 48
      - Shoulder 33`,
  },
  {
    id: 8,
    name: "One tuck pants",
    imageUrl: oneTuckPants,
    price: "₩329,000",
    description: `
      - C 100%
      - 블랙컬러
      - 스트레이트 핏
      - 세미오버핏
      - 원턱 팬츠
      - 뒷판 입술포켓`,
    size: `
      F (프리사이즈)
      - Length 118
      - Waist 82
      - Hip 114
      - Front Rise 32
      - Thigh 33.5
      - Hem 29`,
  },
  {
    id: 9,
    name: "Double belted pleats skirt",
    imageUrl: doubleBeltedPleatsSkirt,
    price: "₩349,000",
    description: `
      - C 100%
      - 블랙컬러
      - 넓은 허리통을 벨트로 고정하는 방식
      - 사이드 지퍼 있음
      - 벨트 2개 포함
      - 비대칭 디자인`,
    size: `
      F (프리사이즈)
      - Length 61
      - Hip 115`,
  },
  {
    id: 10,
    name: "Handmade pearl tie (3color)",
    imageUrl: handmadePearlTie,
    price: "₩138,000",
    description: `
      - 핵진주사용
      - 오닉스 사용 (black color)
      - 도금 아크릴 사용(metal)
      - 사이즈 조절 가능`,
    size: `
      F (프리사이즈)
      - Length 43`,
  },
  {
    id: 11,
    name: "Multi pearl chain",
    imageUrl: multiPearlChain,
    price: "₩87,000",
    description: `
      - 핵진주사용
      - 다양한 연출가능`,
    size: `
      F (프리사이즈)
      - Length 54`,
  },
  {
    id: 12,
    name: "Logo pearl keychain",
    imageUrl: logoPearlKeychain,
    price: "₩69,000",
    description: `
      - 핵진주 사용
      - 철심내장으로 모양 잡기 가능
      - S,U,N 3가지 종류 구성 (개당가격)
      - 3종구매시 1만원 할인`,
    size: `
      7X4.5`,
  },
  {
    id: 13,
    name: "Pearl long scarf",
    imageUrl: pearlLongScar,
    price: "₩113,000",
    description: `
      - 핵진주 사용
      - 끝고리로 다양하게 걸어서 연출 가능
      - 허리벨트로 사용가능`,
    size: `
      F (프리사이즈)
      - Length 122`,
  },
];

export default products;
