
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              B2B一站式营销云
              <span className="text-primary">提升企业获客转化能力</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              致趣百川帮助企业优化SEM投入产出比，通过直播、内容营销、全员营销等多种方式获取线索，加速线索培育，实现营销销售一体化。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/free-trial?source=hero" className="btn btn-primary text-base inline-block">
                免费试用
              </Link>
              <button className="btn btn-secondary text-base">
                了解更多
              </button>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div>
                <div className="text-2xl font-bold text-primary">15,000+</div>
                <div className="text-sm text-gray-500">企业客户</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">3,000+</div>
                <div className="text-sm text-gray-500">活跃用户</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-gray-500">客户满意度</div>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="aspect-w-16 aspect-h-9 bg-blue-100 rounded-xl overflow-hidden">
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-500">营销云平台演示</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-blue-50 rounded-lg p-4">
                    <div className="text-sm font-medium text-gray-900">功能模块 {item}</div>
                    <div className="text-xs text-gray-500 mt-1">提升营销效率</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary rounded-full opacity-20"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary rounded-full opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;