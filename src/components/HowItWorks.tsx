import React from 'react';
import { FileText, Brain, BarChart3, Download } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: FileText,
      title: '回答问题',
      description: '完成60道精心设计的测试题目，每道题目都经过专业心理学验证。',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Brain,
      title: '智能分析',
      description: '我们的AI算法结合心理学理论，深度分析您的回答模式和认知偏好。',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: BarChart3,
      title: '生成报告',
      description: '系统自动生成个性化的MBTI分析报告，包含详细的人格特征解读。',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Download,
      title: '获取结果',
      description: '立即查看您的测试结果，并可下载完整报告用于职业规划和自我发展。',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            如何进行测试？
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            简单四步，发现真实的自己
          </p>
        </div>

        <div className="relative">
          {/* 连接线 */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* 步骤卡片 */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative z-10">
                  {/* 步骤编号 */}
                  <div className="absolute -top-4 left-8">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>

                  {/* 图标 */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${step.color} mb-6`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* 内容 */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* 移动端连接线 */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 mb-2">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-blue-200 to-indigo-200"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 时间提示 */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white rounded-full shadow-md">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium">
              整个测试过程仅需 8-10 分钟
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;