import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

const Contact: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading">联系我们</h2>
          <p className="text-lg text-gray-600">
            如果您对致趣百川的营销云平台感兴趣，或者有任何问题，欢迎随时联系我们，我们的专业团队将为您提供一对一的咨询服务。
          </p>
        </motion.div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">联系信息</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-3 text-white mr-4">
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">公司地址</h4>
                    <p className="text-gray-600">北京市朝阳区建国路88号</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-3 text-white mr-4">
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">联系电话</h4>
                    <p className="text-gray-600">400-123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-3 text-white mr-4">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">电子邮箱</h4>
                    <p className="text-gray-600">contact@example.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-3 text-white mr-4">
                    <FiClock size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">工作时间</h4>
                    <p className="text-gray-600">周一至周五：9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="aspect-w-16 aspect-h-9 bg-white rounded-lg shadow-md flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <div className="text-lg font-medium text-gray-900">地图位置</div>
                  <div className="text-sm text-gray-500 mt-2">北京市朝阳区建国路88号</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">在线咨询</h3>
              <form className="space-y-6">
                <input
                  type="hidden"
                  name="source"
                  value="contact-form"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      姓名
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-blue-300 focus:border-transparent transition-all"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      公司名称
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-blue-300 focus:border-transparent transition-all"
                      placeholder="请输入您的公司名称"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      手机号
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      pattern="^1[3-9]\d{9}$"
                      title="请输入有效的手机号码（11位数字，以1开头）"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-blue-300 focus:border-transparent transition-all"
                      placeholder="请输入您的手机号"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      电子邮箱
                    </label>
                    <input
                      type="email"
                      id="email"
                      pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,6}$"
                      title="请输入有效的电子邮箱地址（如：example@domain.com）"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-blue-300 focus:border-transparent transition-all"
                      placeholder="请输入您的电子邮箱"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    留言内容
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-blue-300 focus:border-transparent transition-all"
                    placeholder="请输入您的留言内容"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                >
                  提交咨询
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;