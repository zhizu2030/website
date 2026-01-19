
import { motion } from 'framer-motion';
import { FiBarChart2, FiVideo, FiFileText, FiShare2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const LeadGeneration: React.FC = () => {
  const features = [
    {
      icon: <FiBarChart2 size={28} className="text-primary" />,
      title: '优化SEM投入产出比',
      description: '通过对接SEM与官网，优化SEM的投入产出比，提高线索质量和转化率。',
    },
    {
      icon: <FiVideo size={28} className="text-primary" />,
      title: '直播获客',
      description: '与多家直播平台接壤，结合营销自动化，通过对用户有价值的直播获取大量线索。',
    },
    {
      icon: <FiFileText size={28} className="text-primary" />,
      title: '内容营销',
      description: '具备下载资料功能的Blog，支持PC端和移动端，无需下载可直接线上使用。',
    },
    {
      icon: <FiShare2 size={28} className="text-primary" />,
      title: '全员营销',
      description: '员工、会员、粉丝，连外部KOL也能生成带有自己专属ID的传播资料，激发每个人的获客力量。',
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
          <h2 className="heading">获取线索</h2>
          <p className="text-lg text-gray-600">
            致趣百川有多种能力帮助你获取线索，通过优化SEM、直播、内容营销和全员营销等方式，全面提升企业获客能力。
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:transform hover:translate-y-[-8px]"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            立即开始获取高质量线索
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            注册免费试用，体验致趣百川的强大获客能力，提升企业营销效果。
          </p>
          <Link to="/free-trial?source=lead-generation" className="btn bg-white text-primary hover:bg-gray-100 inline-block">
            免费注册
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadGeneration;