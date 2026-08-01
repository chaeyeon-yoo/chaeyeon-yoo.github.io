export function PageHeader() {
  return (
    <>
      <header className="grid-cell logo-area">
        <a href="/operation.html" className="back-link" aria-label="STATIC VERSION, 정적 버전(operation.html)으로 돌아가기">
          <span aria-hidden="true">←</span> STATIC VERSION
        </a>
      </header>
      <div className="grid-cell empty-cell" />
      <div className="grid-cell case-index-area">
        <span className="case-index">PORTFOLIO 02 / SERVICE MAINTENANCE</span>
      </div>
    </>
  );
}
