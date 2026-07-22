import { useState } from 'react';

export function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <pre className="code-block" aria-label="예시 코드">
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
  );
}
