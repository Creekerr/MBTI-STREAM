import React from 'react';
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 品牌信息 */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">溪谷测试网</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              专业的MBTI人格测试平台，帮助个人和企业更好地了解自己，发挥潜能，实现成长。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* 产品服务 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">产品服务</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  MBTI测试
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  个性化报告
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  团队分析
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  职业规划
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  企业咨询
                </a>
              </li>
            </ul>
          </div>

          {/* 帮助支持 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">帮助支持</h3>
            <ul className="space-y-4">
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
                  常见问题
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  使用帮助
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  隐私政策
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  服务条款
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  联系我们
                </a>
              </li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">联系方式</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">support@xigutests.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">400-123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">北京市朝阳区科技园区</span>
              </div>
            </div>

            {/* 工作时间 */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-200 mb-2">客服时间</h4>
              <p className="text-sm text-gray-300">
                周一至周五：9:00 - 18:00<br />
                周六至周日：10:00 - 16:00
              </p>
            </div>
          </div>
        </div>

        {/* 底部信息 */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 溪谷测试网. 保留所有权利.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">备案号：京ICP备12345678号</span>
              <span className="text-gray-400 text-sm">|</span>
              <span className="text-gray-400 text-sm">心理学会认证</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;