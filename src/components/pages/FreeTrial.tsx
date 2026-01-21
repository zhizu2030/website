import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

// 扩展Window接口，添加myCollect类型定义
declare global {
  interface Window {
    myCollect?: {
      $setUserFlag: (data: {
        PhoneNumber?: string;
        Email?: string;
        UnionID?: string;
        OpenID?: string;
      }) => void;
    };
  }
}

// Cookie 操作工具函数
const setCookie = (name: string, value: string, days: number = 7) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

const getCookie = (name: string) => {
  const cookieName = `${name}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return '';
};

// 生成唯一ID函数
const generateUniqueId = (): string => {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substr(2, 9);
  const uniqueId = `web_${timestamp}_${randomStr}`.toUpperCase();
  return uniqueId;
};

// 生成用户ID函数
const generateUserId = (): string => {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substr(2, 12);
  return `user${timestamp}${randomStr}`;
};

// 获取access_token函数
const getAccessToken = async (): Promise<string> => {
  try {
    console.log('开始调用获取token API...');
    // 使用Vite代理避免CORS问题
    const response = await fetch('/api/api/get-access-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        appId: 'zq_7571ef5c',
        appSecret: '1BF65AC3CD368228E1A0062BCCFF7069',
      }),
    });

    console.log('获取token API响应状态:', response.status);
    console.log('获取token API响应头:', Object.fromEntries(response.headers));

    if (!response.ok) {
      const errorText = await response.text();
      console.error('获取token API错误响应:', errorText);
      throw new Error(`获取token失败: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('获取token API响应数据:', data);

    if (data.code !== 0) {
      throw new Error(`获取token失败: ${data.msg}`);
    }

    return data.data.access_token;
  } catch (error) {
    console.error('获取token失败:', error);
    throw error;
  }
};

// 同步数据函数
const syncData = async (accessToken: string, formData: any) => {
  try {
    const userId = generateUserId();
    const websiteId = generateUniqueId();
    const createdTime = new Date().toLocaleString('zh-CN').replace(/\//g, '-');

    console.log('开始调用同步数据 API...');
    console.log('同步数据 API参数:', {
      accessToken: accessToken.substring(0, 20) + '...',
      formData: formData,
    });

    // 使用Vite代理避免CORS问题
    const response = await fetch(`/api/leads/open-api/customers-add?access_token=${accessToken}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: 'user28df4407155d8f4089713979717b066e',
        nextId: '4743',
        data: {
          PhoneNumber: formData.phone,
          Name: formData.name,
          Email: formData.email,
          Company: formData.company,
          CreatedTime: createdTime,
          WebsiteID: websiteId,
          Remark: formData.message || '无',
          Industry: formData.industry,
        },
        client_type: 'externalDataSource',
      }),
    });

    console.log('同步数据 API响应状态:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('同步数据 API错误响应:', errorText);
      throw new Error(`同步数据失败: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('同步数据 API响应数据:', data);

    if (data.code !== 0) {
      throw new Error(`同步数据失败: ${data.msg}`);
    }

    return {
      success: true,
      userId,
      websiteId,
    };
  } catch (error) {
    console.error('同步数据失败:', error);
    throw error;
  }
};

const FreeTrial: React.FC = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    industry: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 从URL查询参数中获取来源信息并存储到Cookie
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sourceParam = params.get('source') || 'unknown';
    setCookie('source', sourceParam);
  }, [location.search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    // 从Cookie中获取来源信息
    const source = getCookie('source') || 'unknown';
    
    try {
      // 设置用户标识
      if (window.myCollect) {
        window.myCollect.$setUserFlag({
          PhoneNumber: formData.phone
        });
        console.log('设置用户标识成功:', { PhoneNumber: formData.phone });
      }
      
      // 1. 获取access_token
      console.log('开始获取access_token...');
      const accessToken = await getAccessToken();
      console.log('获取access_token成功:', accessToken);
      
      // 2. 同步数据
      console.log('开始同步数据...');
      const syncResult = await syncData(accessToken, formData);
      console.log('同步数据成功:', syncResult);
      
      // 3. 记录提交数据
      console.log('表单提交数据:', {
        ...formData,
        source,
        submittedAt: new Date().toISOString(),
        websiteId: syncResult.websiteId,
        userId: syncResult.userId,
      });
      
      // 4. 显示成功信息
      setLoading(false);
      setSubmitted(true);
    } catch (err) {
      console.error('提交失败:', err);
      setError(err instanceof Error ? err.message : '提交失败，请稍后重试');
      setLoading(false);
    }
  };

  const industries = [
    '科技', '制造', '金融', '教育', '医疗', '零售', '其他'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                免费试用致趣百川营销云
              </h1>
              <p className="text-lg text-gray-600">
                填写下方表单，即可免费试用致趣百川的B2B营销云平台，我们的客户成功团队将在24小时内与您联系。
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              {error ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-red-50 rounded-xl p-12 text-center"
                >
                  <div className="text-6xl mb-6">❌</div>
                  <h2 className="text-3xl font-bold mb-4">提交失败</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    {error}
                  </p>
                  <button
                    onClick={() => setError(null)}
                    className="btn btn-primary"
                  >
                    重试
                  </button>
                </motion.div>
              ) : submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-green-50 rounded-xl p-12 text-center"
                >
                  <div className="text-6xl mb-6">✅</div>
                  <h2 className="text-3xl font-bold mb-4">提交成功！</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    感谢您的申请，我们的客户成功团队将在24小时内与您联系，为您提供一对一的产品演示和使用指导。
                  </p>
                  <a 
                    href="/" 
                    className="btn btn-primary"
                  >
                    返回首页
                  </a>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  onSubmit={handleSubmit}
                  className="bg-gray-50 rounded-xl p-8 space-y-6"
                >
                  <h2 className="text-2xl font-bold mb-2">申请免费试用</h2>
                  <p className="text-gray-600 mb-6">
                    请填写以下信息，我们将尽快与您联系
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        姓名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-blue-300 focus:border-transparent transition-all"
                        placeholder="请输入您的姓名"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        公司名称 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-blue-300 focus:border-transparent transition-all"
                        placeholder="请输入您的公司名称"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        手机号 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        pattern="^1[3-9]\d{9}$"
                        title="请输入有效的手机号码（11位数字，以1开头）"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-blue-300 focus:border-transparent transition-all"
                        placeholder="请输入您的手机号"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        电子邮箱 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,6}$"
                        title="请输入有效的电子邮箱地址（如：example@domain.com）"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-blue-300 focus:border-transparent transition-all"
                        placeholder="请输入您的电子邮箱"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                      所属行业 <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-blue-300 focus:border-transparent transition-all"
                    >
                      <option value="">请选择行业</option>
                      {industries.map(industry => (
                        <option key={industry} value={industry}>
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      留言内容
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-blue-300 focus:border-transparent transition-all"
                      placeholder="请输入您的留言内容（可选）"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary w-full"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        提交中...
                      </span>
                    ) : (
                      '提交申请'
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    提交即表示您同意我们的<a href="#" className="text-primary hover:underline">隐私政策</a>和<a href="#" className="text-primary hover:underline">服务条款</a>
                  </p>
                </motion.form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FreeTrial;