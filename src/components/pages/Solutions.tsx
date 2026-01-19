import React from 'react';
import { motion } from 'framer-motion';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const Solutions: React.FC = () => {
  const industries = [
    {
      id: 'tech',
      title: '科技行业解决方案',
      description: '针对科技企业的特点，提供个性化的营销解决方案，帮助企业快速获取高质量线索。',
      features: [
        '技术内容营销，提升品牌专业度',
        '开发者社区运营，增强用户粘性',
        '产品演示会线上转化',
        '技术博客SEO优化',
      ],
      icon: '💻',
      image: '?prompt=modern%20tech%20company%20office%20with%20developers%20working&image_size=landscape_4_3',
    },
    {
      id: 'manufacturing',
      title: '制造行业解决方案',
      description: '为制造企业提供全流程的营销解决方案，从线索获取到客户转化，实现营销销售一体化。',
      features: [
        '工业展会数字化管理',
        '技术白皮书下载转化',
        '产品案例视频营销',
        '行业专家研讨会',
      ],
      icon: '🏭',
      image: '?prompt=modern%20manufacturing%20facility%20with%20advanced%20technology&image_size=landscape_4_3',
    },
    {
      id: 'finance',
      title: '金融行业解决方案',
      description: '结合金融行业的合规要求，提供安全、高效的营销解决方案，提升客户转化率。',
      features: [
        '合规营销内容管理',
        '金融产品线上推广',
        '投资者教育内容',
        '金融行业峰会营销',
      ],
      icon: '💳',
      image: '?prompt=professional%20finance%20office%20with%20modern%20technology&image_size=landscape_4_3',
    },
    {
      id: 'education',
      title: '教育行业解决方案',
      description: '为教育机构提供线上线下结合的营销解决方案，提高品牌知名度和课程报名率。',
      features: [
        '课程直播获客',
        '学员社群运营',
        '教育内容营销',
        '招生转化优化',
      ],
      icon: '🎓',
      image: '?prompt=modern%20education%20classroom%20with%20students%20learning&image_size=landscape_4_3',
    },
    {
      id: 'healthcare',
      title: '医疗行业解决方案',
      description: '针对医疗行业的特殊性，提供专业的营销解决方案，帮助企业建立良好的品牌形象。',
      features: [
        '专业医疗内容营销',
        '患者教育与服务',
        '医疗展会数字化',
        '健康科普内容传播',
      ],
      icon: '🏥',
      image: '?prompt=modern%20healthcare%20facility%20with%20professional%20staff&image_size=landscape_4_3',
    },
    {
      id: 'retail',
      title: '零售行业解决方案',
      description: '为零售企业提供全渠道营销解决方案，提升客户体验和销售业绩。',
      features: [
        '会员营销体系',
        '促销活动管理',
        '全渠道客户数据整合',
        '零售体验活动策划',
      ],
      icon: '🛍️',
      image: '?prompt=modern%20retail%20store%20with%20customers%20shopping&image_size=landscape_4_3',
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 right-10 w-40 h-40 bg-indigo-300 rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-60 h-60 bg-purple-300 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-300 rounded-full"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-700 bg-clip-text text-transparent">
                行业解决方案
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                致趣百川针对不同行业的特点，提供个性化的营销云解决方案，帮助企业实现营销数字化转型，提升获客转化能力。
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="#solutions" 
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  浏览解决方案
                </a>
                <a 
                  href="/free-trial?source=solutions" 
                  className="bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
                >
                  免费试用
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section id="solutions" className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              {...fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                行业解决方案
              </h2>
              <p className="text-lg text-gray-600">
                我们为不同行业量身定制营销解决方案，满足各行业的特殊需求
              </p>
              <div className="w-20 h-1 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {industries.map((industry) => (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <div className="text-4xl mb-2">{industry.icon}</div>
                        <h3 className="text-2xl font-bold">{industry.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>
                    <ul className="space-y-3 mb-8">
                      {industry.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-indigo-600 mr-3 mt-1">✓</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-3">
                      <a 
                        href={`/free-trial?source=solutions-${industry.id}`} 
                        className="flex-1 bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300 text-center"
                      >
                        免费试用
                      </a>
                      <a 
                        href="/contact" 
                        className="flex-1 bg-white text-indigo-600 border border-indigo-600 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors duration-300 text-center"
                      >
                        了解详情
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Common Challenges Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              {...fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                行业共同挑战
              </h2>
              <p className="text-lg text-gray-600">
                不同行业面临的营销挑战各不相同，但我们都能为您提供有效的解决方案
              </p>
              <div className="w-20 h-1 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: '线索获取成本高',
                  description: '通过精准的营销策略和渠道优化，降低线索获取成本，提高ROI',
                  icon: '💰'
                },
                {
                  title: '线索质量参差不齐',
                  description: '通过智能线索打分和筛选，确保销售团队获取高质量线索',
                  icon: '🎯'
                },
                {
                  title: '营销销售协同不足',
                  description: '实现营销销售数据打通，提高团队协作效率',
                  icon: '🤝'
                },
                {
                  title: '客户转化周期长',
                  description: '通过自动化的线索培育，缩短客户转化周期',
                  icon: '⏱️'
                },
                {
                  title: '品牌知名度低',
                  description: '通过内容营销和社交媒体运营，提升品牌知名度',
                  icon: '📣'
                },
                {
                  title: '营销效果难以衡量',
                  description: '提供全面的数据分析和报表，准确衡量营销效果',
                  icon: '📊'
                }
              ].map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl mb-4">{challenge.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{challenge.title}</h3>
                  <p className="text-gray-600">{challenge.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-white opacity-10 rounded-full"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                定制您的行业解决方案
              </h2>
              <p className="text-lg mb-8 opacity-90">
                无论您属于哪个行业，我们都能为您提供量身定制的营销解决方案，帮助您实现业务目标。
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/free-trial?source=solutions-cta" 
                  className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  免费试用
                </a>
                <a 
                  href="/contact" 
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                >
                  联系我们
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;