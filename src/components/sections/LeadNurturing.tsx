
import { motion } from 'framer-motion';
import { FiSettings, FiTag, FiStar } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const LeadNurturing: React.FC = () => {
  const features = [
    {
      icon: <FiSettings size={28} className="text-primary" />,
      title: '营销自动化',
      description: '基于用户属性、交互行为进行用户分群，配置Workflow自动化工作流，让营销更轻松。',
    },
    {
      icon: <FiTag size={28} className="text-primary" />,
      title: '标签体系',
      description: '可自动或手动为用户打标签，将用户分层、分群精细化运营，通过个性化的用户旅途，提升用户粘性。',
    },
    {
      icon: <FiStar size={28} className="text-primary" />,
      title: '线索打分',
      description: '设置切合业务的打分模型，基于统计信息及交互行为给线索打分，通过分值更高效地判断线索成熟度。',
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
          <h2 className="heading">线索培育</h2>
          <p className="text-lg text-gray-600">
            基于营销自动化能力，为处于不同成熟阶段的线索，自动推送个性化内容及活动，加速线索培育，直至线索成熟为合格商机后分配销售跟进。
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

        {/* Visual Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">
                自动化线索培育流程
              </h3>
              <p className="text-gray-600">
                通过营销自动化工作流，根据用户行为自动触发个性化内容推送，持续培育线索，提高线索转化率。
              </p>
              <ul className="space-y-3">
                {[
                  '基于用户行为自动触发邮件、短信等营销内容',
                  '根据线索分数自动调整培育策略',
                  '实时监控线索互动情况，优化培育效果',
                  '成熟线索自动分配给销售跟进',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-3 mt-1">✓</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/free-trial?source=lead-nurturing" className="btn btn-primary inline-block">
                了解自动化工作流
              </Link>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="aspect-w-16 aspect-h-9 bg-white rounded-lg shadow-md flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔄</div>
                  <div className="text-lg font-medium text-gray-900">线索培育流程演示</div>
                  <div className="text-sm text-gray-500 mt-2">自动化工作流配置界面</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadNurturing;