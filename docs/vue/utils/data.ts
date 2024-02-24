import mockJs from 'mockjs';

import { Tag as ATag, TableColumnsType } from 'ant-design-vue';
import { h } from 'vue';

// @ts-ignore
export const list = Array.from({ length: 50 }, () => ({
  name: mockJs.mock('@cname'),
  age: mockJs.Random.integer(8, 12),
  score: mockJs.Random.integer(55, 95),
}));

export const columns: TableColumnsType = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Score',
    dataIndex: 'score',
  },
  {
    title: 'Tag',
    dataIndex: 'tag',
    customRender: (a) => {
      console.log(a);
      const score = a.record['score'];
      if (score >= 90) {
        return h(ATag, { innerText: '优', color: '#108EE9' });
      } else if (score >= 80 && score < 90) {
        return h(ATag, { innerText: '良', color: '#2DB7F5' });
      } else if (score < 80 && score >= 60) {
        return h(ATag, { innerText: '中', color: '#87D068' });
      } else {
        return h(ATag, { innerText: '差', color: '#FF5500' });
      }
    },
  },
];

const user = {
  name: 'wgh',
  age: 18,
  sex: 1,
};

function getUserProp<T extends object, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
getUserProp(user, 'name');
let key: any;
console.log(user[key as keyof { name: string; age: string; sex: number }]);
