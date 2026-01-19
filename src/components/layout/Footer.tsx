
import { FiMapPin, FiPhone, FiMail, FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">致趣百川</h3>
            <p className="text-gray-400 mb-4">
              B2B一站式营销云，提升企业获客转化能力
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">首页</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">产品功能</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">解决方案</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">客户案例</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">关于我们</a></li>
            </ul>
          </div>

          {/* Product Features */}
          <div>
            <h4 className="text-lg font-semibold mb-4">产品功能</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">获取线索</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">线索培育</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">助力销售</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">营销自动化</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">数据分析</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">联系我们</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMapPin className="text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">北京市朝阳区建国路88号</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-400">400-123-4567</span>
              </li>
              <li className="flex items-center">
                <FiMail className="text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-400">contact@example.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© 2026 致趣百川. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;