export async function loadBMapGL() {
  const AK = 'CIdrHeGtR84TzrwwBiXFrXnguaSZheAH';
  const BMap_URL = `https://api.map.baidu.com/api?v=1.0&&type=webgl&ak=${AK}&callback=onBMapCallback`;

  return new Promise((resolve) => {
    // 如果已加载直接返回
    if (typeof BMapGL !== 'undefined' && BMapGL !== null) {
      console.log('百度地图脚本已加载...');
      resolve(BMapGL);
      return;
    }

    window.onBMapCallback = function () {
      console.log('百度地图脚本初始化成功...');
      console.log(BMapGL);
      resolve(BMapGL);
    };

    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', BMap_URL);
    document.head.appendChild(script);
  });
}
