const bills = [
  {
    id: 1,
    value: 1,
    label: '借呗01',
    jkrq: '2021/04/07',
    jkje: 20000,
    hkfs: '先息后本',
    hklb: [
      {day: '2021/05/05', count: 186.00},
      {day: '2021/06/05', count: 186.00},
      {day: '2021/07/05', count: 186.00},
      {day: '2021/08/05', count: 186.00},
      {day: '2021/09/05', count: 186.00},
      {day: '2021/10/05', count: 186.00},
      {day: '2021/11/05', count: 186.00},
      {day: '2021/12/05', count: 180.00},
      {day: '2022/01/05', count: 186.00},
      {day: '2022/02/05', count: 186.00},
      {day: '2022/03/05', count: 168.00},
      {day: '2022/04/05', count: 20186},
    ]
  },
  {
    id: 2,
    value: 2,
    label: '借呗02',
    jkrq: '2021/11/07',
    jkje: 13000,
    hkfs: '先息后本',
    hklb: [
      {day: '2021/12/05', count: 109.20},
      {day: '2022/01/05', count: 120.90},
      {day: '2022/02/05', count: 120.90},
      {day: '2022/03/05', count: 109.20},
      {day: '2022/04/05', count: 120.90},
      {day: '2022/05/05', count: 117.00},
      {day: '2022/06/05', count: 120.90},
      {day: '2022/07/05', count: 117.00},
      {day: '2022/08/05', count: 120.90},
      {day: '2022/09/05', count: 120.90},
      {day: '2022/10/05', count: 117.00},
      {day: '2022/11/05', count: 13120.90},
    ]
  },
  {
    id: 3,
    value: 3,
    label: '花呗01',
    jkrq: '2021/10/27',
    jkje: 10000,
    hkfs: '次月还',
    hklb: [
      {day: '2021/11/20', count: 10000.00},
    ]
  },
  {
    id: 4,
    value: 4,
    label: '微信微粒贷01',
    jkrq: '2021/07/21',
    jkje: 40000,
    hkfs: '等额本息',
    hklb: [
      {day: '2021/08/25', count: 4700.00},
      {day: '2021/09/25', count: 4558.00},
      {day: '2021/10/25', count: 4480.00},
      {day: '2021/11/25', count: 4430.00},
      {day: '2021/12/25', count: 4360.00},
      {day: '2022/01/25', count: 4310.00},
      {day: '2022/02/25', count: 4248.00},
      {day: '2022/03/25', count: 4168.00},
      {day: '2022/04/25', count: 4124.00},
      {day: '2022/05/25', count: 4060.00},
    ]
  },
  {
    id: 5,
    value: 5,
    label: '360借款01',
    jkrq: '2021/10/31',
    jkje: 8000,
    hkfs: '等本等息',
    hklb: [
      {day: '2021/11/28', count: 756.27},
      {day: '2021/12/28', count: 756.27},
      {day: '2022/01/28', count: 756.27},
      {day: '2022/02/28', count: 756.27},
      {day: '2022/03/28', count: 756.27},
      {day: '2022/04/28', count: 756.27},
      {day: '2022/05/28', count: 756.27},
      {day: '2022/06/28', count: 756.27},
      {day: '2022/07/28', count: 756.27},
      {day: '2022/08/28', count: 756.27},
      {day: '2022/09/28', count: 756.27},
      {day: '2022/10/28', count: 756.23},
    ]
  },
  {
    id: 6,
    value: 6,
    label: '美团氧气贷01',
    jkrq: '2021/10/31',
    jkje: 9000,
    hkfs: '等本等息',
    hklb: [
      {day: '2021/11/28', count: 788.87},
      {day: '2021/12/28', count: 788.87},
      {day: '2022/01/28', count: 788.87},
      {day: '2022/02/28', count: 788.87},
      {day: '2022/03/28', count: 788.87},
      {day: '2022/04/28', count: 788.87},
      {day: '2022/05/28', count: 788.87},
      {day: '2022/06/28', count: 788.87},
      {day: '2022/07/28', count: 788.87},
      {day: '2022/08/28', count: 788.87},
      {day: '2022/09/28', count: 788.87},
      {day: '2022/10/28', count: 788.87},
    ]
  },
  {
    id: 7,
    value: 7,
    label: '美团生活费01',
    jkrq: '2021/07/27',
    jkje: 14000,
    hkfs: '等本等息',
    hklb: [
      {day: '2021/09/14', count: 1283.52},
      {day: '2021/10/14', count: 1283.52},
      {day: '2021/11/14', count: 1283.52},
      {day: '2021/12/14', count: 1283.52},
      {day: '2022/01/14', count: 1283.52},
      {day: '2022/02/14', count: 1283.52},
      {day: '2022/03/14', count: 1283.52},
      {day: '2022/04/14', count: 1283.52},
      {day: '2022/05/14', count: 1283.52},
      {day: '2022/06/14', count: 1283.52},
      {day: '2022/07/14', count: 1283.52},
      {day: '2022/08/14', count: 1283.52},
    ]
  },
  {
    id: 8,
    value: 8,
    label: '京东白条01',
    jkrq: '2021/10/31',
    jkje: 36000,
    hkfs: '等本等息',
    hklb: [
      {day: '2021/11/30', count: 3000.00},
      {day: '2021/12/31', count: 3000.00},
      {day: '2022/01/31', count: 3000.00},
      {day: '2022/02/28', count: 3000.00},
      {day: '2022/03/31', count: 3000.00},
      {day: '2022/04/30', count: 3000.00},
      {day: '2022/05/31', count: 3000.00},
      {day: '2022/06/30', count: 3000.00},
      {day: '2022/07/31', count: 3000.00},
      {day: '2022/08/31', count: 3000.00},
      {day: '2022/09/30', count: 3000.00},
      {day: '2022/10/31', count: 3000.00},
    ]
  }
]
const getYearMonthDay = (date = new Date()) => {
  const year = date.getFullYear(); // 获取年
  const month = date.getMonth(); // 获取月
  const day = date.getDate(); // 获取日
  return {year, month, day};
}
const get3yearsBeforeAndAfter = (year) => {
  let arr = [year]
  for (let i = 1; i < 4; i++) {
    arr.push(year + i)
    arr.unshift(year - i)
  }
  return arr
}
const getDaysByYearAndMonth = (year, month) => {
  const firstDayOfMonth = new Date(year, month, 1);
  // 获取当月第一天对应的是星期几
  const week = firstDayOfMonth.getDay();
  // 获取42天中的第一天对应的Date对象，即每月1号对应的时间减去week天
  const startDay = firstDayOfMonth - week * 60 * 60 * 1000 * 24;
  const arr = [];
  for (let i = 0; i < 42; i++) { // 循环出42天
    const date = new Date(startDay + i * 60 * 60 * 1000 * 24)
    const {year, month, day} = getYearMonthDay(date)
    arr.push({year, month, day})
  }
  const billLength = bills.length
  for (let i = 0; i < billLength; i++) {
    const billItem = bills[i]
    const list = billItem['hklb']
    const listLength = list.length
    for (let j = 0; j < listLength; j++) {
      const monthItem = list[j]
      const [a, b, c] = monthItem['day'].split('/')
      for (let k = 0; k < 42; k++) {
        const {year, month, day} = arr[k]
        if(a==year && b==month+1 && c==day){
          const obj = {
            billId:billItem['id'],
            label:billItem['label'],
            count:monthItem['count'],
          }
          !arr[k]['bills'] && (arr[k]['bills']=[])
          arr[k]['bills'].push(obj)
          break
        }
      }
    }
  }
  return arr
}

export {
  bills,
  getYearMonthDay,
  get3yearsBeforeAndAfter,
  getDaysByYearAndMonth

}