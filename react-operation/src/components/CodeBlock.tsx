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
      <pre className="code-block">
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
