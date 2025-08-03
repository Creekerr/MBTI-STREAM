import React from 'react';
import { Brain, Target, BarChart3, Shield, Clock, Award } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: '科学准确',
      description: '基于国际标准MBTI理论，结合最新心理学研究成果，确保测试结果的科学性和准确性。',
      color: 'text-blue-600'
    },
    {
      icon: Target,
      title: '个性化报告',
      description: '为每位用户生成独特的个性分析报告，包含详细的人格特征、优势和发展建议。',
      color: 'text-indigo-600'
    },
    {
      icon: BarChart3,
      title: '深度分析',
      description: '不仅告诉您MBTI类型，更深入分析您的认知功能、决策模式和行为偏好。',
      color: 'text-purple-600'
    },
    {
      icon: Shield,
      title: '隐私保护',
      description: '采用银行级别的数据加密技术，严格保护用户隐私，测试数据仅用于生成报告。',
      color: 'text-green-600'
    },
    {
      icon: Clock,
      title: '快速便捷',
      description: '精心设计的60道测试题目，仅需8-10分钟即可完成，随时随地开始您的自我探索之旅。',
      color: 'text-orange-600'
    },
    {
      icon: Award,
      title: '专业权威',
      description: '由资深心理学专家团队研发，获得多项专业认证，值得信赖的人格测评工具。',
      color: 'text-red-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            为什么选择溪谷测试网？
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们致力于为用户提供最专业、最准确的MBTI人格测试体验
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gray-50 group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-indigo-50 transition-all mb-6`}>
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* 专业认证 */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-4 px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full">
            <Award className="h-6 w-6 text-blue-600" />
            <span className="text-blue-800 font-medium">
              获得中国心理学会专业认证 · ISO 27001 信息安全认证
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;