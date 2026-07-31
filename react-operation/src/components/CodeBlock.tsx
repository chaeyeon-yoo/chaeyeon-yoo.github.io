export function CodeBlock({ code, caption }: { code: string; caption: string }) {
  return (
    <figure>
      <figcaption className="visually-hidden">{caption}</figcaption>
      {/* 가로 스크롤이 생기는 영역이므로 키보드로도 스크롤할 수 있어야 한다 */}
      <pre className="code-block" tabIndex={0}>
        <code>{code}</code>
      </pre>
    </figure>
  );
}
