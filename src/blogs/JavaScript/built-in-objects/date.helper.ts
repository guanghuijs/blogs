export function dateFormat(format, t) {
  const date = t ? new Date(t) : new Date(),
    Y = date.getFullYear() + '',
    M = date.getMonth() + 1,
    D = date.getDate(),
    H = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    day = ['日', '一', '二', '三', '四', '五', '六'];
  return (
    format
      .replace(/YYYY|yyyy/g, Y)
      .replace(/YY|yy/g, Y.substr(2, 2))
      .replace(/MM/g, (M < 10 ? '0' : '') + M)
      .replace(/DD/g, (D < 10 ? '0' : '') + D)
      .replace(/HH|hh/g, (H < 10 ? '0' : '') + H)
      .replace(/mm/g, (m < 10 ? '0' : '') + m)
      .replace(/ss/g, (s < 10 ? '0' : '') + s) + `周${day[date.getDay()]}`
  );
}

export const DateHelper = (data = new Date()) => {
  const year = data.getFullYear();
  const month = data.getMonth();
  const date = data.getDate();
  const week = data.getDay();

  const days = (() => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    }
    return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
  })();

  const calendarAfter: number = (() => {
    const lastDay = new Date(data);
    lastDay.setMonth(month);
    lastDay.setDate(days);
    return 6 - lastDay.getDay();
  })();

  const calendarPrevArr: number[] = (() => {
    const firstDay = new Date(data);
    firstDay.setMonth(month);
    firstDay.setDate(1);
    const calendarPrev = firstDay.getDay();
    const temp: number[] = [];
    for (let i = 0; i < calendarPrev; i++) {
      firstDay.setDate(firstDay.getDate() - 1);
      temp.unshift(firstDay.getDate());
    }
    return temp;
  })();

  return {
    year,
    month,
    date,
    week,
    days,
    calendarAfter,
    calendarPrevArr,
  };
};

export const weeks: string[] = ['日', '一', '二', '三', '四', '五', '六'];

export function addZero(num: number) {
  return num > 9 ? num : `0${num}`;
}

export function chatDateFormat(t) {
  const date = new Date(t),
    Y = date.getFullYear(),
    M = date.getMonth() + 1,
    D = date.getDate(),
    H = addZero(date.getHours()),
    m = addZero(date.getMinutes()),
    s = addZero(date.getSeconds()),
    day = date.getDay();

  const nowDate = new Date(),
    NY = nowDate.getFullYear(),
    NM = nowDate.getMonth() + 1,
    ND = nowDate.getDate();

  const days = (nowDate.getTime() - date.getTime()) / 1000 / 84000;

  if (days < 1 && ND === D && NY === Y && NM === M) {
    return `${H}:${m}`;
  }
  if ((days < 2 && ND - D === 1) || D - ND > 27) {
    return `昨天 ${H}:${m}`;
  }
  if (1 < days && days <= 7) {
    return `周${weeks[day]} ${H}:${m}`;
  }
  if (days > 7 && Y === NY) {
    return `${M}月${D}日`;
  }
  if (days > 7 && NY > Y) {
    return `${Y}年${M}月${D}日`;
  }
  return '在未来';
}

import m from 'mockjs';

export function list() {
  const arr = [];
  for (let i = 0; i < 50; i++) {
    const name = m.mock('@cname');
    arr.push({
      img: m.Random.image('200x200', m.mock('@color'), name.substring(0, 1)),
      name,
      content: m.mock('@cparagraph'),
      time: new Date().setDate(new Date().getDate() + m.Random.integer(-20, 20)),
    });
  }
  return arr;
}
