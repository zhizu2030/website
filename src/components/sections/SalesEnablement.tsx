
import { motion } from 'framer-motion';
import { FiDatabase, FiMessageSquare, FiBarChart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const SalesEnablement: React.FC = () => {
  const features = [
    {
      icon: <FiDatabase size={28} className="text-primary" />,
      title: '与主流CRM打通',
      description: '与Salesforce、销售易、纷享销客等主流CRM双向打通，数据无缝流通，实现真正的营&销一体化。',
    },
    {
      icon: <FiMessageSquare size={28} className="text-primary" />,
      title: '链接微信生态',
      description: '销售在微信、企业微信皆可快速处理商机，完成接收与退回，指尖决策，提高工作效率。',
    },
    {
      icon: <FiBarChart size={28} className="text-primary" />,
      title: '预测性应用',
      description: '销售实时掌握拥有线索发生的所有的市场行为，洞悉商务，助力决策，提高销售转化率。',
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
          <h2 className="heading">助力销售</h2>
          <p className="text-lg text-gray-600">
            致趣百川与主流CRM双向打通，转出MQL无缝进入CRM，实现真正的营&销一体化。基于市场与销售的数据分析，提高营销漏斗转化率，为业绩增收而服务。
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

        {/* Integration Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="aspect-w-16 aspect-h-9 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔗</div>
                  <div className="text-lg font-medium text-gray-900">CRM集成演示</div>
                  <div className="text-sm text-gray-500 mt-2">与主流CRM系统无缝对接</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">
                实现真正的营&销一体化
              </h3>
              <p className="text-gray-600">
                通过与主流CRM系统的双向打通，让市场和销售团队共享数据，协同工作，提高营销漏斗转化率，为企业业绩增长提供有力支持。
              </p>
              <ul className="space-y-3">
                {[
                  '市场生成的MQL自动同步到CRM系统',
                  '销售可以查看线索的完整市场行为轨迹',
                  '销售反馈自动回流到市场系统，优化营销策略',
                  '实时数据分析，洞察营销效果和销售转化率',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-3 mt-1">✓</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/free-trial?source=sales-enablement" className="btn btn-primary inline-block">
                查看CRM集成方案
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SalesEnablement;