import { Fragment } from 'react';
import type { CaseItem } from '../data/cases';
import { CodeBlock } from './CodeBlock';

export function CaseSection({ data, index }: { data: CaseItem; index: number }) {
  const label = String(index).padStart(2, '0');

  return (
    <>
      <section className="grid-cell section-label">
        <div className="label-content">
          <h2>CASE {label}</h2>
        </div>
      </section>
      <div className="grid-cell section-content case-content">
        <div className="case-header">
          <span className="case-tag">{data.tag}</span>
          <h3 className="case-title-sm" aria-label={data.titleAriaLabel}>
            <span aria-hidden="true">
              {data.titleLines.map((line, i) => (
                <Fragment key={line}>
                  {i > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </span>
          </h3>
        </div>

        <div className="op-tags">
          {data.techTags.map((tag) => (
            <span key={tag} className="i-tag">
              {tag}
            </span>
          ))}
        </div>

        <p className="case-desc">{data.desc}</p>

        {data.code && (
          <CodeBlock code={data.code} caption={data.codeCaption ?? '예시 코드'} />
        )}
      </div>
      <div className="grid-cell empty-cell" />
    </>
  );
}
