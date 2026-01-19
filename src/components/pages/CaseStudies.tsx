import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const CaseStudies: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  
  const caseStudies = [
    {
      id: 1,
      title: '某大型科技企业',
      description: '通过使用致趣百川的营销云平台，实现了线索转化率提升300%，营销ROI提升200%。',
      industry: 'tech',
      results: {
        leads: '300%',
        roi: '200%',
        salesCycle: '40%',
      },
      challenge: '线索质量参差不齐，营销ROI难以衡量',
      solution: '实施营销自动化，建立线索打分体系，优化营销渠道',
      image: '?prompt=modern%20tech%20company%20office%20with%20business%20people%20working&image_size=landscape_4_3',
      customerQuote: '致趣百川的营销云平台帮助我们实现了营销全流程自动化，大幅提升了线索质量和转化率。',
      customerRole: '市场总监'
    },
    {
      id: 2,
      title: '某知名制造企业',
      description: '借助致趣百川的线索培育功能，成功将销售周期缩短了40%，提高了销售团队的工作效率。',
      industry: 'manufacturing',
      results: {
        salesCycle: '40%',
        efficiency: '提升',
        leads: '150%',
      },
      challenge: '销售周期长，线索培育不足',
      solution: '建立自动化线索培育流程，实施内容营销，优化展会获客',
      image: '?prompt=modern%20manufacturing%20facility%20with%20business%20meeting&image_size=landscape_4_3',
      customerQuote: '致趣百川的解决方案帮助我们缩短了销售周期，提高了销售团队的工作效率。',
      customerRole: '销售总监'
    },
    {
      id: 3,
      title: '某领先金融机构',
      description: '利用致趣百川的全员营销功能，激发了员工的获客积极性，新增线索量提升了250%。',
      industry: 'finance',
      results: {
        leads: '250%',
        engagement: '提升',
        conversion: '提升',
      },
      challenge: '获客渠道单一，员工参与度低',
      solution: '实施全员营销，建立合规内容库，优化金融产品推广',
      image: '?prompt=professional%20finance%20office%20with%20team%20meeting&image_size=landscape_4_3',
      customerQuote: '全员营销功能激发了员工的获客积极性，为我们带来了大量高质量线索。',
      customerRole: '营销总经理'
    },
    {
      id: 4,
      title: '某知名教育机构',
      description: '通过致趣百川的直播获客功能，成功举办了多场高转化的线上直播活动，获客成本降低了50%。',
      industry: 'education',
      results: {
        cost: '50%',
        conversion: '提升',
        leads: '200%',
      },
      challenge: '获客成本高，线上转化效果差',
      solution: '实施直播获客，建立学员社群，优化课程内容营销',
      image: '?prompt=modern%20education%20institution%20with%20students%20and%20teachers&image_size=landscape_4_3',
      customerQuote: '直播获客功能帮助我们大幅降低了获客成本，提高了转化率。',
      customerRole: '招生负责人'
    },
    {
      id: 5,
      title: '某知名医疗机构',
      description: '利用致趣百川的内容营销功能，制作了专业的医疗内容，提升了品牌专业度和患者信任度。',
      industry: 'healthcare',
      results: {
        trust: '提升',
        brand: '增强',
        engagement: '提升',
      },
      challenge: '品牌专业度不足，患者信任度低',
      solution: '建立专业医疗内容库，实施患者教育，优化医疗服务体验',
      image: '?prompt=modern%20healthcare%20facility%20with%20professional%20staff%20and%20patients&image_size=landscape_4_3',
      customerQuote: '专业的内容营销帮助我们提升了品牌专业度和患者信任度。',
      customerRole: '市场部主任'
    },
    {
      id: 6,
      title: '某连锁零售企业',
      description: '通过致趣百川的会员营销功能，提升了会员复购率，增加了客户生命周期价值。',
      industry: 'retail',
      results: {
        repeat: '提升',
        ltv: '增加',
        engagement: '提升',
      },
      challenge: '会员复购率低，客户粘性不足',
      solution: '建立会员营销体系，实施个性化促销，优化全渠道客户体验',
      image: '?prompt=modern%20retail%20store%20with%20happy%20customers&image_size=landscape_4_3',
      customerQuote: '会员营销功能帮助我们提升了会员复购率，增加了客户生命周期价值。',
      customerRole: '市场经理'
    },
  ];

  const industries = [
    { id: 'all', name: '全部行业' },
    { id: 'tech', name: '科技' },
    { id: 'manufacturing', name: '制造' },
    { id: 'finance', name: '金融' },
    { id: 'education', name: '教育' },
    { id: 'healthcare', name: '医疗' },
    { id: 'retail', name: '零售' },
  ];

  const filteredCaseStudies = selectedIndustry === 'all' 
    ? caseStudies 
    : caseStudies.filter(caseStudy => caseStudy.industry === selectedIndustry);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const getResultLabel = (key: string): string => {
    const labels: Record<string, string> = {
      leads: '线索量提升',
      roi: '营销ROI提升',
      salesCycle: '销售周期缩短',
      efficiency: '工作效率提升',
      engagement: '参与度提升',
      cost: '获客成本降低',
      conversion: '转化率提升',
      trust: '信任度提升',
      brand: '品牌专业度增强',
      repeat: '会员复购率提升',
      ltv: '客户生命周期价值增加'
    };
    return labels[key] || key;
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
                客户案例
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                众多企业已经通过致趣百川的营销云平台实现了营销效率的提升和业绩的增长，以下是部分客户的成功案例。
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="#case-studies" 
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  浏览案例
                </a>
                <a 
                  href="/free-trial?source=case-studies" 
                  className="bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
                >
                  免费试用
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industry Filter */}
        <section id="case-studies" className="py-12 bg-white border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl font-bold mb-6">按行业筛选</h2>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map(industry => (
                <motion.button
                  key={industry.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedIndustry === industry.id 
                      ? 'bg-indigo-600 text-white shadow-md transform scale-105' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {industry.name}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              {...fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                成功案例
              </h2>
              <p className="text-lg text-gray-600">
                看看我们如何帮助不同行业的客户实现营销目标
              </p>
              <div className="w-20 h-1 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
            </motion.div>

            {filteredCaseStudies.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center py-20"
              >
                <h3 className="text-2xl font-semibold mb-4">暂无该行业的案例</h3>
                <p className="text-gray-600 mb-8">请选择其他行业查看案例</p>
                <button
                  onClick={() => setSelectedIndustry('all')}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  查看全部案例
                </button>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredCaseStudies.map((caseStudy) => (
                  <motion.div
                    key={caseStudy.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={caseStudy.image} 
                        alt={caseStudy.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <div className="p-6 text-white">
                          <h3 className="text-2xl font-bold">{caseStudy.title}</h3>
                          <p className="mt-2 opacity-90">
                            {industries.find(ind => ind.id === caseStudy.industry)?.name}行业
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">客户挑战</h4>
                        <p className="text-gray-600">{caseStudy.challenge}</p>
                      </div>
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">解决方案</h4>
                        <p className="text-gray-600">{caseStudy.solution}</p>
                      </div>
                      <div className="bg-indigo-50 rounded-lg p-4 mb-6">
                        <h4 className="font-semibold text-indigo-900 mb-3">核心成果</h4>
                        <ul className="space-y-2">
                          {Object.entries(caseStudy.results).map(([key, value]) => (
                            <li key={key} className="flex items-center">
                              <span className="text-indigo-600 mr-3">✓</span>
                              <span className="text-gray-700">
                                {getResultLabel(key)}
                                <span className="font-semibold ml-2 text-indigo-600">{value}</span>
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 mb-6">
                        <p className="text-gray-600 italic mb-3">"{caseStudy.customerQuote}"</p>
                        <p className="text-indigo-600 font-semibold">{caseStudy.customerRole}</p>
                      </div>
                      <a 
                        href={`/free-trial?source=case-study-${caseStudy.id}`} 
                        className="block w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300 text-center"
                      >
                        了解更多
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              {...fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                客户成功指标
              </h2>
              <p className="text-lg opacity-90">
                我们的客户在使用致趣百川营销云平台后取得的平均成果
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  title: '线索转化率提升',
                  value: '250%',
                  icon: '📈'
                },
                {
                  title: '营销ROI提升',
                  value: '180%',
                  icon: '💰'
                },
                {
                  title: '销售周期缩短',
                  value: '40%',
                  icon: '⏱️'
                },
                {
                  title: '获客成本降低',
                  value: '50%',
                  icon: '📉'
                }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-colors"
                >
                  <div className="text-4xl mb-4">{metric.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{metric.title}</h3>
                  <p className="text-3xl font-bold">{metric.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                开始您的成功之旅
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                填写表单，我们的客户成功团队将为您提供一对一的咨询服务，帮助您实现营销目标。
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/free-trial?source=case-studies-cta" 
                  className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  免费试用
                </a>
                <a 
                  href="/contact" 
                  className="bg-transparent border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
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

export default CaseStudies;