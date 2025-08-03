import React from 'react';
import { ArrowRight, Users, Star, Award } from 'lucide-react';

interface HeroProps {
  onStartTest: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartTest }) => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* 主标题 */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            发现真实的
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              自己
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            基于科学的MBTI人格测试，为您提供专业、准确、深入的个性分析报告
          </p>

          {/* 统计数据 */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center space-x-2 text-gray-600">
              <Users className="h-5 w-5 text-blue-600" />
              <span className="font-medium">已有 50,000+ 用户完成测试</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="font-medium">4.9 星好评</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Award className="h-5 w-5 text-green-600" />
              <span className="font-medium">权威心理学认证</span>
            </div>
          </div>

          {/* CTA按钮 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onStartTest}
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>立即开始测试</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-sm text-gray-500">
              仅需 8-10 分钟 · 完全免费 · 科学准确
            </p>
          </div>

          {/* 信任标识 */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-6">受到众多知名企业和机构信赖</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
                <span className="text-gray-700 font-medium">腾讯</span>
              </div>
              <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
                <span className="text-gray-700 font-medium">阿里巴巴</span>
              </div>
              <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
                <span className="text-gray-700 font-medium">字节跳动</span>
              </div>
              <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
                <span className="text-gray-700 font-medium">华为</span>
              </div>
              <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
                <span className="text-gray-700 font-medium">清华大学</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;