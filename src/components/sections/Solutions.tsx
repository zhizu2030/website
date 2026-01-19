import React from 'react';
import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Solutions: React.FC = () => {
  const solutions = [
    {
      id: 1,
      title: '科技行业解决方案',
      description: '针对科技企业的特点，提供个性化的营销解决方案，帮助企业快速获取高质量线索。',
      icon: '💻',
    },
    {
      id: 2,
      title: '制造行业解决方案',
      description: '为制造企业提供全流程的营销解决方案，从线索获取到客户转化，实现营销销售一体化。',
      icon: '🏭',
    },
    {
      id: 3,
      title: '金融行业解决方案',
      description: '结合金融行业的合规要求，提供安全、高效的营销解决方案，提升客户转化率。',
      icon: '💳',
    },
    {
      id: 4,
      title: '教育行业解决方案',
      description: '为教育机构提供线上线下结合的营销解决方案，提高品牌知名度和课程报名率。',
      icon: '🎓',
    },
    {
      id: 5,
      title: '医疗行业解决方案',
      description: '针对医疗行业的特殊性，提供专业的营销解决方案，帮助企业建立良好的品牌形象。',
      icon: '🏥',
    },
    {
      id: 6,
      title: '零售行业解决方案',
      description: '为零售企业提供全渠道营销解决方案，提升客户体验和销售业绩。',
      icon: '🛍️',
    },
  ];

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
          <h2 className="heading">行业解决方案</h2>
          <p className="text-lg text-gray-600">
            致趣百川针对不同行业的特点，提供个性化的营销云解决方案，帮助企业实现营销数字化转型，提升获客转化能力。
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:transform hover:translate-y-[-8px]"
            >
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-600 mb-4">{solution.description}</p>
              <a href="#" className="inline-flex items-center text-primary font-medium hover:underline">
                了解详情 <FiChevronRight className="ml-1" size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Link to="/free-trial?source=solutions" className="btn btn-primary inline-block">
            定制解决方案
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;