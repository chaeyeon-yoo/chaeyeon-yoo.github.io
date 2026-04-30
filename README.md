# Yoo Chaeyeon | Web Publisher Portfolio

> 사용자 경험을 고려하는 웹 퍼블리셔, 꼼꼼한 운영을 아는 유채연입니다.

<br>

## 🙋‍♀️ About Me

HTML/CSS 중심의 시맨틱 마크업과 접근성을 중요하게 생각하는 웹 퍼블리셔 유채연입니다.
단순히 화면을 구현하는 것을 넘어, 유지보수하기 쉽고 운영에 강한 퍼블리싱을 지향합니다.

- 📧 yyoochae@gmail.com
- 🔗 https://github.com/chaeyeon-yoo

<br>

## 🛠 Tech Stack

**Markup & Style**
`HTML5` `CSS3` `Sass/SCSS`

**Script**
`JavaScript (Vanilla)`

**Tool**
`Git` `GitHub` `VS Code` `Figma`

<br>

## 📁 Works

### 1. ♿ A11y (Accessibility)
> 웹 접근성을 고려한 마크업 실습

- 시맨틱 태그, ARIA 속성, 키보드 포커스 관리 등 적용
- 스크린리더 대응을 고려한 구조 설계
- **Stack:** `HTML5` `CSS3`
- 📂 https://chaeyeon-yoo.github.io/works/a11y/

---

### 2. 🛒 Commerce
> 쇼핑몰 UI 퍼블리싱

- 상품 목록, 상세 페이지 등 커머스 레이아웃 구현
- 모바일 햄버거 메뉴 인터랙션 구현
- 접근성 고려 (aria-expanded, aria-hidden, aria-pressed, 키보드 탐색 등)
- **Stack:** `HTML5` `CSS3` `JavaScript`
- 📂 https://chaeyeon-yoo.github.io/works/commerce/

---

<br>

## 🔧 Troubleshooting

작업 중 겪은 문제와 해결 과정을 기록합니다.

<br>

### 🛒 Commerce

#### 1. 햄버거 메뉴 오픈 시 헤더 오른쪽 여백 발생

| | 내용 |
|---|---|
| **문제** | 메뉴 오픈 시 스크롤바가 사라지면서 헤더 오른쪽에 빈 여백 노출 |
| **원인** | `body`에 `overflow: hidden`을 적용하면 스크롤바가 사라진 만큼 레이아웃이 밀림. `paddingRight`로 보정을 시도했으나 `position: sticky`인 헤더가 body 너비를 따라 늘어나 배경 영역이 노출됨 |
| **해결** | JS 보정 로직을 전부 제거하고 CSS `scrollbar-gutter: stable` 적용. 스크롤바 자리를 항상 확보해두므로 `overflow: hidden` 시에도 레이아웃 변화 없음 |

<br>

#### 2. 모바일 햄버거 메뉴 오픈 시 로고 중앙 정렬 틀어짐

| | 내용 |
|---|---|
| **문제** | 헤더 구조를 `햄버거 > 로고 > 아이콘` 순으로 변경했을 때 좌우 요소 너비가 달라 로고가 시각적 중앙에서 벗어남 |
| **원인** | flexbox `justify-content: space-between` 만으로는 양쪽 너비가 다를 경우 가운데 요소가 정확히 중앙에 오지 않음 |
| **해결** | 모바일 breakpoint에서 `.header-inner`에 `position: relative` 부여 후, `.logo`에 `position: absolute; left: 50%; transform: translateX(-50%)` 적용해 뷰포트 기준 정중앙 고정 |

<br>

---

<p align="center">
  <sub>© 2026 Yoo Chaeyeon. All rights reserved.</sub>
</p>
