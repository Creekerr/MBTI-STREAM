import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { questions } from '../data/questions';
import { TestAnswer, TestResult } from '../App';

interface MBTITestProps {
  onComplete: (result: TestResult) => void;
  onBack: () => void;
}

const MBTITest: React.FC<MBTITestProps> = ({ onComplete, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<TestAnswer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<'A' | 'B' | null>(null);

  const progress = ((currentQuestion + (selectedAnswer ? 1 : 0)) / questions.length) * 100;

  const handleAnswer = (answer: 'A' | 'B') => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (!selectedAnswer) return;

    const newAnswer: TestAnswer = {
      questionId: questions[currentQuestion].id,
      answer: selectedAnswer
    };

    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      // 计算结果
      const result = calculateResult(updatedAnswers);
      onComplete(result);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
      setSelectedAnswer(null);
    }
  };

  const calculateResult = (answers: TestAnswer[]): TestResult => {
    const scores = {
      E: 0, I: 0,
      S: 0, N: 0,
      T: 0, F: 0,
      J: 0, P: 0
    };

    answers.forEach(answer => {
      const question = questions.find(q => q.id === answer.questionId);
      if (question) {
        if (answer.answer === 'A') {
          scores[question.aType]++;
        } else {
          scores[question.bType]++;
        }
      }
    });

    // 确定MBTI类型
    const type = 
      (scores.E > scores.I ? 'E' : 'I') +
      (scores.S > scores.N ? 'S' : 'N') +
      (scores.T > scores.F ? 'T' : 'F') +
      (scores.J > scores.P ? 'J' : 'P');

    return {
      type,
      scores,
      answers
    };
  };

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* 头部 */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>返回首页</span>
            </button>
            <div className="text-center">
              <h1 className="text-xl font-bold text-gray-900">MBTI人格测试</h1>
              <p className="text-sm text-gray-500">
                第 {currentQuestion + 1} 题 / 共 {questions.length} 题
              </p>
            </div>
            <div className="w-24"></div>
          </div>
        </div>
      </div>

      {/* 进度条 */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* 测试内容 */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* 问题 */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-relaxed">
              {currentQ.question}
            </h2>

            {/* 选项 */}
            <div className="space-y-4">
              <button
                onClick={() => handleAnswer('A')}
                className={`w-full p-6 rounded-xl border-2 text-left transition-all duration-200 ${
                  selectedAnswer === 'A'
                    ? 'border-blue-500 bg-blue-50 shadow-md'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-blue-25'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 ${
                    selectedAnswer === 'A'
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {selectedAnswer === 'A' && (
                      <CheckCircle className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900 mb-2">A.</div>
                    <p className="text-gray-700 leading-relaxed">{currentQ.optionA}</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleAnswer('B')}
                className={`w-full p-6 rounded-xl border-2 text-left transition-all duration-200 ${
                  selectedAnswer === 'B'
                    ? 'border-blue-500 bg-blue-50 shadow-md'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-blue-25'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 ${
                    selectedAnswer === 'B'
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {selectedAnswer === 'B' && (
                      <CheckCircle className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900 mb-2">B.</div>
                    <p className="text-gray-700 leading-relaxed">{currentQ.optionB}</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* 导航按钮 */}
          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all ${
                currentQuestion === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <ArrowLeft className="h-5 w-5" />
              <span>上一题</span>
            </button>

            <button
              onClick={handleNext}
              disabled={!selectedAnswer}
              className={`flex items-center space-x-2 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                selectedAnswer
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <span>{currentQuestion === questions.length - 1 ? '查看结果' : '下一题'}</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* 测试提示 */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>测试提示：</strong>请根据您的第一反应选择最符合您真实情况的答案。没有对错之分，诚实回答将获得最准确的结果。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MBTITest;