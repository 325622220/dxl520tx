import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.location.href = 'https://dxl520.cn';
  }, []);

  return (
    <div>
      <head>
        <meta httpEquiv="refresh" content="0; url=https://dxl520.cn" />
      </head>
      <p>正在跳转到 dxl520.cn ...</p>
      <p>如果没有自动跳转，请<a href="https://dxl520.cn">点击这里</a></p>
    </div>
  );
}
