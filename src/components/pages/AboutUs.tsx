import React from 'react';
import { motion } from 'framer-motion';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const AboutUs: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">关于我们</h1>
            <p className="text-xl md:text-2xl opacity-90">打造企业级营销自动化解决方案，助力企业实现销售增长</p>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              {...fadeInUp}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">公司简介</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                BeChannels是一家专注于企业级营销自动化的科技公司，致力于为企业提供全渠道、智能化的营销解决方案。我们的使命是帮助企业实现营销与销售的高效协同，提升客户获取与转化效率。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                自成立以来，我们已经为超过500家企业提供了专业的营销自动化服务，涵盖科技、制造、金融、教育、医疗等多个行业。我们的产品以其易用性、稳定性和强大的功能得到了客户的广泛认可。
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-3xl font-bold text-indigo-600">500+</h3>
                  <p className="text-gray-600 mt-2">服务企业</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-3xl font-bold text-indigo-600">98%</h3>
                  <p className="text-gray-600 mt-2">客户满意度</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-3xl font-bold text-indigo-600">10+</h3>
                  <p className="text-gray-600 mt-2">行业覆盖</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-3xl font-bold text-indigo-600">100+</h3>
                  <p className="text-gray-600 mt-2">专业团队</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              {...fadeInUp}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="?prompt=modern%20office%20space%20with%20professional%20team%20working%20on%20marketing%20automation%20software&image_size=landscape_16_9" 
                  alt="公司办公环境" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <p className="text-gray-600 italic">
                  "我们的团队致力于打造最专业的营销自动化解决方案，帮助企业实现销售增长。"
                </p>
                <p className="text-indigo-600 font-semibold mt-2">CEO 张明</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">我们的使命与愿景</h2>
            <p className="text-lg text-gray-700">
              我们致力于通过技术创新，为企业提供最先进的营销自动化解决方案
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              {...fadeInUp}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">我们的使命</h3>
              <p className="text-gray-700 leading-relaxed">
                通过提供简单易用、功能强大的营销自动化解决方案，帮助企业降低营销成本，提高销售效率，实现业务增长。我们致力于成为企业营销数字化转型的最佳合作伙伴。
              </p>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">我们的愿景</h3>
              <p className="text-gray-700 leading-relaxed">
                成为全球领先的营销自动化解决方案提供商，通过持续的技术创新和卓越的客户服务，引领行业发展趋势，帮助更多企业实现营销数字化转型，创造更大的商业价值。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">我们的团队</h2>
            <p className="text-lg text-gray-700">
              由行业专家和技术精英组成的专业团队，致力于为客户提供最优质的服务
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                name: "张明",
                position: "CEO",
                image: "?prompt=professional%20asian%20male%20CEO%20in%20business%20suit%20headshot&image_size=square",
                bio: "拥有10年营销自动化行业经验，曾任职于多家知名科技公司"
              },
              {
                name: "李华",
                position: "CTO",
                image: "?prompt=professional%20asian%20female%20CTO%20in%20business%20attire%20headshot&image_size=square",
                bio: "技术专家，专注于营销自动化系统架构设计与开发"
              },
              {
                name: "王强",
                position: "销售总监",
                image: "?prompt=professional%20asian%20male%20sales%20director%20headshot&image_size=square",
                bio: "拥有丰富的企业级软件销售经验，专注于客户成功"
              },
              {
                name: "赵静",
                position: "市场总监",
                image: "?prompt=professional%20asian%20female%20marketing%20director%20headshot&image_size=square",
                bio: "营销专家，擅长品牌建设与市场推广策略制定"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-indigo-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Development History */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">发展历程</h2>
            <p className="text-lg text-gray-700">
              我们的成长故事，每一步都致力于为客户创造更大价值
            </p>
          </motion.div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-indigo-200 transform md:translate-x-[-0.5px]"></div>
            
            {/* Timeline Events */}
            {[
              {
                year: "2020",
                title: "公司成立",
                description: "BeChannels正式成立，专注于企业级营销自动化解决方案的研发",
                side: "left"
              },
              {
                year: "2021",
                title: "产品发布",
                description: "发布首款营销自动化产品，获得首批100家企业客户",
                side: "right"
              },
              {
                year: "2022",
                title: "A轮融资",
                description: "完成A轮1000万美元融资，加速产品研发与市场拓展",
                side: "left"
              },
              {
                year: "2023",
                title: "功能升级",
                description: "发布3.0版本，新增AI智能分析、多渠道营销等核心功能",
                side: "right"
              },
              {
                year: "2024",
                title: "行业认可",
                description: "获得年度最佳营销自动化解决方案奖，服务客户突破500家",
                side: "left"
              }
            ].map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: event.side === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative mb-12 md:mb-24 ${event.side === "left" ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"} md:w-1/2`}
              >
                <div className="absolute top-4 left-0 md:left-auto md:right-0 transform md:translate-x-[-50%] w-6 h-6 bg-indigo-600 rounded-full border-4 border-white shadow"></div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <span className="inline-block bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm font-semibold mb-3">
                    {event.year}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">联系我们</h2>
            <p className="text-lg text-gray-700">
              如果您对我们的产品和服务有任何疑问，欢迎随时联系我们
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "公司地址",
                content: "北京市朝阳区建国路88号现代国际大厦25层",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              },
              {
                title: "联系电话",
                content: "400-888-8888",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                )
              },
              {
                title: "电子邮箱",
                content: "contact@beschannels.com",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">加入我们，共创未来</h2>
            <p className="text-xl mb-8 opacity-90">
              如果您对我们的产品和服务感兴趣，或者想了解更多关于我们的信息，欢迎随时联系我们
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/free-trial?source=about-us" 
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                免费试用
              </a>
              <a 
                href="/contact" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                联系我们
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;