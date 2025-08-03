import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'MBTI测试的准确性如何？',
      answer: 'MBTI是目前最被广泛认可的人格类型理论之一，在全球有超过100年的发展历史。我们的测试题目经过专业心理学家验证，准确率可达85%以上。需要注意的是，MBTI反映的是您的偏好倾向，而非绝对的性格定义。'
    },
    {
      question: '测试需要多长时间？',
      answer: '整个测试包含60道题目，根据我们的统计，大部分用户在8-10分钟内即可完成。建议您在安静的环境下完成测试，诚实地回答每一个问题，这样能确保结果的准确性。'
    },
    {
      question: '我的个人信息会被保护吗？',
      answer: '我们严格遵守数据保护法规，采用银行级别的SSL加密技术保护您的数据。您的测试结果和个人信息不会被分享给第三方，也不会用于任何商业用途。您可以随时删除自己的测试记录。'
    },
    {
      question: '测试结果会变化吗？',
      answer: '人格类型相对稳定，但会随着年龄、经历和环境的变化而有所调整。我们建议每2-3年重新测试一次，或者在人生重大转折点时重新评估。这样可以更好地了解自己的成长和变化。'
    },
    {
      question: '如果对测试结果有疑问怎么办？',
      answer: '如果您对测试结果有疑问，可以联系我们的客服团队获得专业解答。专业版用户还可以预约一对一的心理咨询师解读服务，帮助您更深入地理解测试结果。'
    },
    {
      question: '企业版适合什么规模的公司？',
      answer: '企业版适合10人以上的团队或公司使用。我们提供批量测试、团队分析报告、培训建议等服务。对于大型企业，我们还可以提供定制化的解决方案和现场培训服务。'
    },
    {
      question: '可以重复测试吗？',
      answer: '可以重复测试，但我们建议至少间隔3个月以上。过于频繁的测试可能会因为记忆效应影响结果的准确性。如果您想验证结果，可以请朋友帮您评估测试结果是否符合您的实际表现。'
    },
    {
      question: '测试适合什么年龄段？',
      answer: '我们的测试适合16岁以上的用户。对于16-18岁的青少年，建议在家长或老师指导下进行测试，因为这个年龄段的人格特征还在发展中，结果仅供参考。'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            常见问题
          </h2>
          <p className="text-xl text-gray-600">
            为您解答关于MBTI测试的常见疑问
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="h-px bg-gray-200 mb-6"></div>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 联系信息 */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              还有其他问题？
            </h3>
            <p className="text-gray-600 mb-6">
              我们的专业客服团队随时为您解答疑问
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@xigutests.com"
                className="px-6 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                发送邮件
              </a>
              <a
                href="tel:400-123-4567"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all font-medium"
              >
                电话咨询：400-123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;