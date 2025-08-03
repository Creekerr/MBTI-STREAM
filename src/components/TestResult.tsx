import React from 'react';
import { ArrowLeft, Download, RotateCcw, Share2, Star, Users, Briefcase, AlertCircle, TrendingUp, Target } from 'lucide-react';
import { TestResult as TestResultType } from '../App';
import { mbtiTypes } from '../data/mbtiTypes';

interface TestResultProps {
  result: TestResultType;
  onRestart: () => void;
  onHome: () => void;
}

const TestResult: React.FC<TestResultProps> = ({ result, onRestart, onHome }) => {
  const mbtiInfo = mbtiTypes[result.type];
  
  if (!mbtiInfo) {
    return <div>结果加载中...</div>;
  }

  const getDimensionLabel = (dim: string) => {
    const labels = {
      'E': '外向型',
      'I': '内向型',
      'S': '感觉型',
      'N': '直觉型',
      'T': '思考型',
      'F': '情感型',
      'J': '判断型',
      'P': '知觉型'
    };
    return labels[dim as keyof typeof labels] || dim;
  };

  const getPercentage = (score: number, total: number) => {
    return Math.round((score / total) * 100);
  };

  const dimensions = [
    { key: 'EI', types: ['E', 'I'], scores: [result.scores.E, result.scores.I], labels: ['外向', '内向'] },
    { key: 'SN', types: ['S', 'N'], scores: [result.scores.S, result.scores.N], labels: ['感觉', '直觉'] },
    { key: 'TF', types: ['T', 'F'], scores: [result.scores.T, result.scores.F], labels: ['思考', '情感'] },
    { key: 'JP', types: ['J', 'P'], scores: [result.scores.J, result.scores.P], labels: ['判断', '知觉'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* 头部 */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onHome}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>返回首页</span>
            </button>
            <div className="text-center">
              <h1 className="text-xl font-bold text-gray-900">您的MBTI测试结果</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={onRestart}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <RotateCcw className="h-5 w-5" />
                <span>重新测试</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* 主要结果卡片 */}
        <div className="bg-white rounded-2xl shadow-xl mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-12 text-white text-center">
            <div className="mb-6">
              <div className="text-6xl font-bold mb-2">{result.type}</div>
              <div className="text-2xl font-semibold mb-2">{mbtiInfo.name}</div>
              <div className="text-xl opacity-90">{mbtiInfo.nickname}</div>
            </div>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto opacity-95">
              {mbtiInfo.description}
            </p>
          </div>

          {/* 维度分析 */}
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Star className="h-6 w-6 text-yellow-500 mr-2" />
              您的人格维度分析
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dimensions.map((dimension, index) => {
                const [score1, score2] = dimension.scores;
                const total = score1 + score2;
                const percentage1 = getPercentage(score1, total);
                const percentage2 = getPercentage(score2, total);
                const dominant = score1 > score2 ? 0 : 1;
                
                return (
                  <div key={dimension.key} className="bg-gray-50 rounded-xl p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold text-gray-900">{dimension.labels[0]} vs {dimension.labels[1]}</span>
                      <span className="text-sm text-gray-600">
                        {dominant === 0 ? dimension.labels[0] : dimension.labels[1]}倾向
                      </span>
                    </div>
                    
                    <div className="relative">
                      <div className="flex h-8 rounded-lg overflow-hidden">
                        <div
                          className="bg-blue-500 flex items-center justify-center text-white text-sm font-medium"
                          style={{ width: `${percentage1}%` }}
                        >
                          {percentage1 > 15 && `${percentage1}%`}
                        </div>
                        <div
                          className="bg-indigo-500 flex items-center justify-center text-white text-sm font-medium"
                          style={{ width: `${percentage2}%` }}
                        >
                          {percentage2 > 15 && `${percentage2}%`}
                        </div>
                      </div>
                      <div className="flex justify-between mt-2 text-sm text-gray-600">
                        <span>{dimension.labels[0]} ({score1})</span>
                        <span>{dimension.labels[1]} ({score2})</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 性格特征 */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="h-6 w-6 text-blue-500 mr-2" />
              核心特征
            </h3>
            <div className="space-y-3">
              {mbtiInfo.characteristics.map((characteristic, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{characteristic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 优势特长 */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="h-6 w-6 text-green-500 mr-2" />
              优势特长
            </h3>
            <div className="space-y-3">
              {mbtiInfo.strengths.map((strength, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{strength}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 发展建议 */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Target className="h-6 w-6 text-purple-500 mr-2" />
              发展建议
            </h3>
            <div className="space-y-3">
              {mbtiInfo.development.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 注意事项 */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertCircle className="h-6 w-6 text-orange-500 mr-2" />
              注意事项
            </h3>
            <div className="space-y-3">
              {mbtiInfo.avoidance.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 职业推荐 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Briefcase className="h-6 w-6 text-indigo-500 mr-2" />
            适合的职业方向
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {mbtiInfo.careers.map((career, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 rounded-lg text-center">
                <span className="text-blue-800 font-medium">{career}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 人际关系 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Users className="h-6 w-6 text-pink-500 mr-2" />
            人际关系与恋爱
          </h3>
          <p className="text-gray-700 leading-relaxed">{mbtiInfo.relationships}</p>
        </div>

        {/* 行动按钮 */}
        <div className="flex flex-wrap gap-4 justify-center mt-12">
          <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105">
            <Download className="h-5 w-5" />
            <span>下载完整报告</span>
          </button>
          <button className="flex items-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-all">
            <Share2 className="h-5 w-5" />
            <span>分享结果</span>
          </button>
          <button
            onClick={onRestart}
            className="flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg border border-blue-300 hover:bg-blue-50 transition-all"
          >
            <RotateCcw className="h-5 w-5" />
            <span>重新测试</span>
          </button>
        </div>

        {/* 免责声明 */}
        <div className="mt-12 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
          <p className="text-sm text-yellow-800">
            <strong>免责声明：</strong>
            MBTI测试结果仅供参考，旨在帮助您更好地了解自己的性格倾向。每个人都是独特的个体，测试结果不应被视为绝对定义。
            建议将测试结果作为自我探索的起点，而非终点。如需专业的心理健康指导，请咨询专业心理健康专家。
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestResult;