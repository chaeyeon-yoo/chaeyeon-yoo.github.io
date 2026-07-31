import { useState } from 'react';

export function CodeBlock({ code, caption }: { code: string; caption: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <figure>
      <figcaption className="visually-hidden">{caption}</figcaption>
      {/* 가로 스크롤이 생기는 영역이므로 키보드로도 스크롤할 수 있어야 한다 */}
      <pre className="code-block" tabIndex={0}>
        <code>{code}</code>
        <button
          type="button"
          className={copied ? 'copy-btn is-copied' : 'copy-btn'}
          aria-label="코드 복사"
          onClick={handleCopy}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </pre>
    </figure>
  );
}
