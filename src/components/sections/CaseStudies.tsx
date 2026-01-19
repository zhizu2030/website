import React from 'react';
import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';

const CaseStudies: React.FC = () => {
  const cases = [
    {
      id: 1,
      title: '某大型科技企业',
      description: '通过使用致趣百川的营销云平台，实现了线索转化率提升300%，营销ROI提升200%。',
      industry: '科技',
    },
    {
      id: 2,
      title: '某知名制造企业',
      description: '借助致趣百川的线索培育功能，成功将销售周期缩短了40%，提高了销售团队的工作效率。',
      industry: '制造',
    },
    {
      id: 3,
      title: '某领先金融机构',
      description: '利用致趣百川的全员营销功能，激发了员工的获客积极性，新增线索量提升了250%。',
      industry: '金融',
    },
    {
      id: 4,
      title: '某知名教育机构',
      description: '通过致趣百川的直播获客功能，成功举办了多场高转化的线上直播活动，获客成本降低了50%。',
      industry: '教育',
    },
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading">客户案例</h2>
          <p className="text-lg text-gray-600">
            众多企业已经通过致趣百川的营销云平台实现了营销效率的提升和业绩的增长，以下是部分客户的成功案例。
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:transform hover:translate-y-[-8px]"
            >
              <div className="mb-4 text-primary">{caseStudy.industry}</div>
              <h3 className="text-xl font-semibold mb-2">{caseStudy.title}</h3>
              <p className="text-gray-600 mb-4">{caseStudy.description}</p>
              <a href="#" className="inline-flex items-center text-primary font-medium hover:underline">
                查看详情 <FiChevronRight className="ml-1" size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="btn btn-primary">
            查看更多客户案例
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;