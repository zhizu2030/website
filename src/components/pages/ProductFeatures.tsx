import React from 'react';
import { motion } from 'framer-motion';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { FiBarChart2, FiVideo, FiFileText, FiShare2, FiSettings, FiTag, FiStar, FiDatabase, FiMessageSquare, FiBarChart } from 'react-icons/fi';

const ProductFeatures: React.FC = () => {
  const sections = [
    {
      id: 'lead-generation',
      title: '获取线索',
      description: '通过多种渠道获取高质量线索，提升企业获客能力',
      features: [
        {
          icon: <FiBarChart2 size={28} className="text-indigo-600" />,
          title: '优化SEM投入产出比',
          description: '通过对接SEM与官网，优化SEM的投入产出比，提高线索质量和转化率。',
        },
        {
          icon: <FiVideo size={28} className="text-indigo-600" />,
          title: '直播获客',
          description: '与多家直播平台接壤，结合营销自动化，通过对用户有价值的直播获取大量线索。',
        },
        {
          icon: <FiFileText size={28} className="text-indigo-600" />,
          title: '内容营销',
          description: '具备下载资料功能的Blog，支持PC端和移动端，无需下载可直接线上使用。',
        },
        {
          icon: <FiShare2 size={28} className="text-indigo-600" />,
          title: '全员营销',
          description: '员工、会员、粉丝，连外部KOL也能生成带有自己专属ID的传播资料，激发每个人的获客力量。',
        },
      ],
    },
    {
      id: 'lead-nurturing',
      title: '线索培育',
      description: '通过营销自动化加速线索培育，提高线索转化率',
      features: [
        {
              icon: <FiSettings size={28} className="text-indigo-600" />,
              title: '营销自动化',
              description: '基于用户属性、交互行为进行用户分群，配置Workflow自动化工作流，让营销更轻松。',
            },
        {
          icon: <FiTag size={28} className="text-indigo-600" />,
          title: '标签体系',
          description: '可自动或手动为用户打标签，将用户分层、分群精细化运营，通过个性化的用户旅途，提升用户粘性。',
        },
        {
          icon: <FiStar size={28} className="text-indigo-600" />,
          title: '线索打分',
          description: '设置切合业务的打分模型，基于统计信息及交互行为给线索打分，通过分值更高效地判断线索成熟度。',
        },
      ],
    },
    {
      id: 'sales-enablement',
      title: '助力销售',
      description: '实现营销销售一体化，提升销售效率和转化率',
      features: [
        {
          icon: <FiDatabase size={28} className="text-indigo-600" />,
          title: '与主流CRM打通',
          description: '与Salesforce、销售易、纷享销客等主流CRM双向打通，数据无缝流通，实现真正的营&销一体化。',
        },
        {
          icon: <FiMessageSquare size={28} className="text-indigo-600" />,
          title: '链接微信生态',
          description: '销售在微信、企业微信皆可快速处理商机，完成接收与退回，指尖决策，提高工作效率。',
        },
        {
          icon: <FiBarChart size={28} className="text-indigo-600" />,
          title: '预测性应用',
          description: '销售实时掌握拥有线索发生的所有的市场行为，洞悉商务，助力决策，提高销售转化率。',
        },
      ],
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
            <div className="absolute top-10 left-10 w-40 h-40 bg-indigo-300 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-300 rounded-full"></div>
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
                产品功能
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                致趣百川B2B营销云平台提供全方位的营销解决方案，从线索获取到线索培育，再到助力销售，实现营销全流程自动化。
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="#lead-generation" 
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  了解更多
                </a>
                <a 
                  href="/free-trial?source=product-features" 
                  className="bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
                >
                  免费试用
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Sections */}
        {sections.map((section, sectionIndex) => (
          <section 
            key={section.id} 
            id={section.id}
            className={`py-24 ${sectionIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                {...fadeInUp}
                className="text-center max-w-3xl mx-auto mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-600">
                  {section.description}
                </p>
                <div className="w-20 h-1 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {section.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: featureIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        ))}

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
                开始使用致趣百川营销云
              </h2>
              <p className="text-lg mb-8 opacity-90">
                免费试用我们的产品，体验全方位的B2B营销解决方案，提升企业获客转化能力。
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/free-trial?source=product-features-cta" 
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

export default ProductFeatures;