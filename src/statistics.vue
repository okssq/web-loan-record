<template>
  <div class="column no-wrap">
    <q-list padding style="width: 240px">
      <q-item-label header>本月待还账单</q-item-label>
      <q-item
        clickable
        v-ripple
        v-for="(item,index) in monthList"
        :key="index"
        @click="$emit('view-bill',item['id'])"
      >
        <q-item-section>
          <q-item-label>
            {{ item['label'] }}
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label>￥{{ item['count'] }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label class="text-right">总计：
            <span class="q- text-red">￥{{ monthCount }}</span>
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
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
          <q-item-label>￥{{ item['count'] }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label class="text-right">总计：
            <span class="q- text-red">￥{{ toDayCount }}</span>
          </q-item-label>
        </q-item-section>
      </q-item>
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
        hklb.forEach(_el => {
          const [a, b, c] = _el['day'].split('/')
          if (a != year || b != month + 1) return
          if (c == day) {
            const {id, label} = el
            const {count} = _el
            tList.push({id, label, count})
            tSum += count
          }
          if (c >= day) {
            const {id, label} = el
            const {count} = _el
            mList.push({id, label, count})
            mSum += count
          }
        })
      })
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