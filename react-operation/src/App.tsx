import { PageHeader } from './components/PageHeader';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { CaseSection } from './components/CaseSection';
import { NavigateBar } from './components/NavigateBar';
import { ReadingProgress } from './components/ReadingProgress';
import { TopButton } from './components/TopButton';
import { cases } from './data/cases';

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        본문 바로가기
      </a>
      <ReadingProgress />
      <main className="main-portfolio-container" id="main-content">
        <PageHeader />
        <Hero />
        <Overview />
        {cases.map((item, i) => (
          <CaseSection key={item.tag} data={item} index={i + 1} />
        ))}
        <NavigateBar />
      </main>
      <TopButton />
    </>
  );
}

export default App;
