<template>
  <div class="column no-wrap overflow-auto">

    <q-list padding style="width: 240px">
      <q-item-label header>今日待还账单</q-item-label>
      <q-item
        clickable
        v-ripple
        v-for="(item,index) in toDayList"
        :key="index"
        @click="$emit('view-bill',item['id'])"
      >
        <q-item-section>
          <q-item-label>
            {{ item['label'] }}
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label>￥{{ item['count'] }}.00</q-item-label>
        </q-item-section>
      </q-item>
      <q-item v-if="toDayCount">
        <q-item-section>
          <q-item-label class="text-right">总计：
            <span class="q- text-red">￥{{ toDayCount }}.00</span>
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item-label class="text-grey-5 text-center" v-else>暂无数据</q-item-label>
    </q-list>
    <q-list padding style="width: 240px">
      <q-item-label header>本月账单</q-item-label>
      <q-item
        clickable
        v-ripple
        v-for="(item,index) in monthList"
        :key="index"
        @click="$emit('view-bill',item['id'])"
      >
        <q-item-section>
          <q-item-label class="text-subtitle2 text-grey-8">{{ item['label'] }}</q-item-label>
          <q-item-label class="text-subtitle2 text-grey-6">{{ item['dayStr']}}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label >￥{{ item['count'] }}.00</q-item-label>
        </q-item-section>
      </q-item>
      <q-item v-if="monthCount">
        <q-item-section>
          <q-item-label class="text-right">总计：
            <span class="q- text-red">￥{{ monthCount }}.00</span>
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item-label class="text-grey-5 text-center" v-else>暂无数据</q-item-label>
    </q-list>
  </div>
</template>

<script>
import {bills, getYearMonthDay} from './util'

export default {
  emits: ['view-bill'],
  setup() {
    const {year, month, day} = getYearMonthDay()
    const getBillStats = () => {
      let tSum = 0
      let mSum = 0
      let tList = []
      let mList = []

      bills.forEach(el => {
        const {hklb} = el
        const {length} = hklb
        for(let i =0;i<length;i++){
          const item = hklb[i]
          const [a, b, c] = item['day'].split('/')
          if(a == year && b == month + 1){
            const dayStr = `${a}/${b}/${c}`
            const {id,label} = el
            const {count} = item
            mSum += count
            mList.push({
              id,
              label,
              count,
              day: c,
              dayStr
            })
            if(c==day) {
              tList.push({id,label,count})
              tSum += count
            }
            break
          }
        }
      })

      mList.sort( (a,b) => a['day'] - b['day'])
      return {tSum, mSum, tList, mList}
    }

    const {
      tSum: toDayCount,
      mSum: monthCount,
      tList: toDayList,
      mList: monthList
    } = getBillStats()

    console.log(monthList, monthCount)
    return {
      monthList,
      monthCount,
      toDayList,
      toDayCount,
    }
  }
}
</script>