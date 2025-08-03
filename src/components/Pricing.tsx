import React from 'react';
import { Check, Star, Crown, Zap } from 'lucide-react';

interface PricingProps {
  onStartTest: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onStartTest }) => {
  const plans = [
    {
      name: '基础版',
      price: '免费',
      description: '适合个人用户的基础测试',
      icon: Star,
      color: 'from-blue-500 to-blue-600',
      features: [
        'MBTI类型测试',
        '基础性格分析',
        '职业匹配建议',
        'PDF报告下载',
        '终身有效'
      ],
      popular: false,
      buttonText: '免费开始'
    },
    {
      name: '专业版',
      price: '¥99',
      description: '深度分析，适合职场人士',
      icon: Crown,
      color: 'from-indigo-500 to-indigo-600',
      features: [
        'MBTI类型测试',
        '深度性格分析',
        '详细职业规划',
        '团队协作建议',
        '发展改进计划',
        '一对一咨询机会',
        'PDF + 在线报告'
      ],
      popular: true,
      buttonText: '选择专业版'
    },
    {
      name: '企业版',
      price: '¥299',
      description: '团队测试，企业人才发展',
      icon: Zap,
      color: 'from-purple-500 to-purple-600',
      features: [
        '批量员工测试',
        '团队动态分析',
        '组织架构优化',
        '培训计划定制',
        '专属客服支持',
        'API接口对接',
        '数据统计面板'
      ],
      popular: false,
      buttonText: '联系销售'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            选择适合您的方案
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            从个人探索到企业发展，我们提供多种专业方案
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-indigo-500 transform scale-105' : ''
              }`}
            >
              {/* 热门标签 */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    最受欢迎
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* 图标和标题 */}
                <div className="text-center mb-8">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${plan.color} mb-4`}>
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                {/* 价格 */}
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {plan.price}
                  </div>
                  {plan.price !== '免费' && (
                    <div className="text-gray-500">一次性付费</div>
                  )}
                </div>

                {/* 功能列表 */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* 按钮 */}
                <button
                  onClick={plan.name === '基础版' ? onStartTest : undefined}
                  className={`w-full py-4 px-6 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white hover:from-indigo-700 hover:to-indigo-800 shadow-lg'
                      : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:from-gray-200 hover:to-gray-300'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 保证信息 */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 px-6 py-3 bg-white rounded-full shadow-md">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-700 font-medium">7天无理由退款</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700 font-medium">数据安全保障</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-gray-700 font-medium">24/7客服支持</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;