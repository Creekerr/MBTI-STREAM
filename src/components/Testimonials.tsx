import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: '张小月',
      role: '产品经理 @ 腾讯',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: '测试结果非常准确！帮助我更好地理解了自己的工作风格和职业发展方向，强烈推荐给所有想要自我了解的朋友。',
      rating: 5,
      type: 'INTJ'
    },
    {
      name: '李建华',
      role: '人力资源总监 @ 字节跳动',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: '我们公司用这个测试来帮助员工更好地了解自己，提高团队协作效率。专业性很强，结果也很可信。',
      rating: 5,
      type: 'ENFJ'
    },
    {
      name: '王美丽',
      role: '心理咨询师',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: '作为专业的心理咨询师，我认为这个MBTI测试的设计很科学，结果分析也很详细，是一个很好的自我认知工具。',
      rating: 5,
      type: 'INFP'
    },
    {
      name: '刘志强',
      role: '创业者',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: '通过测试了解到自己是ESTP类型，这解释了为什么我更喜欢快节奏的工作环境。对我的创业方向选择很有帮助。',
      rating: 5,
      type: 'ESTP'
    },
    {
      name: '陈思雨',
      role: '大学生',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: '马上要毕业了，通过这个测试更清楚地了解了自己的性格特点，对选择专业和未来职业规划很有指导意义。',
      rating: 5,
      type: 'ISFJ'
    },
    {
      name: '赵铭轩',
      role: '软件工程师 @ 阿里巴巴',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: '测试界面设计得很好，问题设置也很合理。结果报告非常详细，帮助我更好地理解了自己的思维模式。',
      rating: 5,
      type: 'INTP'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            用户真实评价
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            看看其他用户是如何评价我们的MBTI测试的
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* 引用图标 */}
              <div className="mb-6">
                <Quote className="h-8 w-8 text-blue-600 opacity-20" />
              </div>

              {/* 评价内容 */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* 评分 */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* 用户信息 */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <span className="px-2 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-xs font-semibold rounded-full">
                      {testimonial.type}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 统计信息 */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">50,000+</div>
                <div className="text-blue-100">用户完成测试</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">4.9/5</div>
                <div className="text-blue-100">平均用户评分</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
                <div className="text-blue-100">用户满意度</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;