import BAIDU from './src/icon/百度.png';
import FANYI from './src/icon/百度翻译.png';
import BILI from './src/icon/bilibili.png';
import CSDN from './src/icon/csdn.png';

const backgroundImages: any[] = [];
const SEARCH_ICON_LIST: { text: string; icon: string }[] = [
  { text: '百度', icon: BAIDU },
  { text: '哔哩哔哩', icon: BILI },
  { text: '百度翻译', icon: FANYI },
  { text: 'CSDN', icon: CSDN },
];

export const searchHref = [
  'https://www.baidu.com/s?ie=utf-8&word=',
  'https://search.bilibili.com/all?keyword=',
  'https://fanyi.baidu.com/translate#zh/en/',
  'https://so.csdn.net/so/search?q=',
];

const BG: Record<string, any> = import.meta.glob('./src/bg/*.*', { eager: true });
Object.keys(BG).forEach((key) => {
  backgroundImages.push(BG[key].default);
});

export { backgroundImages, BG, SEARCH_ICON_LIST };
