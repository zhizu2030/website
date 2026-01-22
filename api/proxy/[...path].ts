// Vercel API路由 - 作为代理服务器解决CORS问题

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { path, method, headers, body } = req;
    
    // 移除/api/proxy前缀，获取真实的API路径
    const apiPath = path.replace(/^\/api\/proxy/, '');
    
    // API基础URL
    const API_BASE_URL = 'https://openapi.beschannels.com';
    
    // 构建完整的API URL
    const apiUrl = `${API_BASE_URL}${apiPath}`;
    
    // 构建请求选项
    const requestOptions: RequestInit = {
      method: method as string,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
        // 移除可能导致问题的头
        'host': '',
        'origin': '',
        'referer': '',
      },
    };
    
    // 如果有请求体，添加到请求选项中
    if (body) {
      requestOptions.body = JSON.stringify(body);
    }
    
    // 发送请求到API服务器
    const apiResponse = await fetch(apiUrl, requestOptions);
    
    // 获取响应数据
    const responseData = await apiResponse.json();
    
    // 设置CORS头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    // 返回API响应
    res.status(apiResponse.status).json(responseData);
  } catch (error) {
    console.error('代理请求失败:', error);
    res.status(500).json({ error: '代理请求失败' });
  }
}
