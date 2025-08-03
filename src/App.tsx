import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import MBTITest from './components/MBTITest';
import TestResult from './components/TestResult';

export interface TestAnswer {
  questionId: number;
  answer: 'A' | 'B';
}

export interface TestResult {
  type: string;
  scores: {
    E: number;
    I: number;
    S: number;
    N: number;
    T: number;
    F: number;
    J: number;
    P: number;
  };
  answers: TestAnswer[];
}

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'test' | 'result'>('home');
  const [testResult, setTestResult] = useState<TestResult | null>(null);

  const startTest = () => {
    setCurrentView('test');
  };

  const handleTestComplete = (result: TestResult) => {
    setTestResult(result);
    setCurrentView('result');
  };

  const goHome = () => {
    setCurrentView('home');
    setTestResult(null);
  };

  useEffect(() => {
    // 更新页面标题
    const titles = {
      home: '溪谷测试网 - 专业MBTI人格测试平台',
      test: '正在测试 - 溪谷测试网',
      result: '测试结果 - 溪谷测试网'
    };
    document.title = titles[currentView];
  }, [currentView]);

  if (currentView === 'test') {
    return <MBTITest onComplete={handleTestComplete} onBack={goHome} />;
  }

  if (currentView === 'result' && testResult) {
    return <TestResult result={testResult} onRestart={startTest} onHome={goHome} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onStartTest={startTest} />
      <Hero onStartTest={startTest} />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing onStartTest={startTest} />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;

export { TestResult }