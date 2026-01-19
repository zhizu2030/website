import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '致趣百川的营销云平台适合哪些行业？',
      answer: '致趣百川的营销云平台适合各种行业，包括科技、制造、金融、教育、医疗、零售等。我们针对不同行业的特点，提供个性化的解决方案。',
    },
    {
      question: '如何开始使用致趣百川的营销云平台？',
      answer: '您可以通过我们的官网申请免费试用，我们的客户成功团队会在24小时内与您联系，为您提供一对一的产品演示和使用指导。',
    },
    {
      question: '致趣百川的营销云平台支持哪些集成？',
      answer: '我们支持与Salesforce、销售易、纷享销客等主流CRM系统的双向打通，同时还支持与微信、企业微信、抖音、快手等主流社交平台的集成。',
    },
    {
      question: '致趣百川的价格是多少？',
      answer: '我们的价格根据企业的规模和需求而定，提供灵活的定价方案。您可以联系我们的销售团队，获取详细的报价信息。',
    },
    {
      question: '致趣百川提供哪些培训和支持服务？',
      answer: '我们提供全面的培训和支持服务，包括产品培训、使用指导、技术支持、客户成功服务等，确保您能够充分利用我们的产品功能。',
    },
    {
      question: '致趣百川的数据安全如何保障？',
      answer: '我们采用银行级别的数据加密和安全防护措施，确保客户数据的安全性和隐私性。同时，我们还通过了ISO27001、GDPR等国际安全认证。',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          <h2 className="heading">常见问题</h2>
          <p className="text-lg text-gray-600">
            以下是关于致趣百川营销云平台的常见问题解答，如果您有其他问题，欢迎随时联系我们。
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div
                className="bg-white rounded-lg shadow-md p-4 cursor-pointer flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                {openIndex === index ? (
                  <FiChevronUp className="text-primary" />
                ) : (
                  <FiChevronDown className="text-primary" />
                )}
              </div>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-white rounded-b-lg shadow-md p-4 pt-0"
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
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
          <p className="text-lg text-gray-600 mb-6">还有其他问题？联系我们的专家团队获取帮助</p>
          <Link to="/free-trial?source=faq" className="btn btn-primary inline-block">
            联系专家团队
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;