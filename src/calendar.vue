<template>
  <div class="full-width full-height column no-wrap overflow-hidden">
    <div class="row items-center q-px-sm q-py-xs justify-between">
      <q-btn color="grey-9" flat icon="mdi-menu" round @click="$emit('display')"/>
      <div class="row items-center">
        <q-select
          v-model="selectYear"
          :options="years"
          borderless
          class="text-subtitle1"
          dense
          hide-dropdown-icon
          popup-content-class="text-subtitle2"
          @update:model-value="updateDays"
        >
          <template v-slot:after><span class="text-subtitle1">年</span></template>
        </q-select>
        <q-select
          v-model="selectMonth"
          :option-label="item => item+1"
          :options="months"
          borderless
          class="text-subtitle1 q-ml-sm"
          dense
          hide-dropdown-icon
          popup-content-class="text-subtitle2"
          @update:model-value="updateDays"
        >
          <template v-slot:after><span class="text-subtitle1">月</span></template>
        </q-select>
      </div>
      <q-btn color="blue-6" flat label="TODAY" @click="goToToday"/>
    </div>
    <q-separator/>
    <div class="row no-wrap overflow-hidden" style="flex: 1">
      <slot name="left"></slot>
      <div class="full-height column no-wrap overflow-hidden" style="flex: 1">
        <div class="row text-grey-7 text-se text-caption text-bold" style="margin-top: -1px">
          <span v-for="weekText in weekTexts" :key="weekText" class="col my-border">
            星期{{ weekText }}
          </span>
        </div>
        <div class="row" style="flex: 1">
          <div
            v-for="(date,index) in days"
            :key="index"
            :class="selectMonth===date.month ? 'text-grey-9': 'text-grey-5'"
            class="my-border item-day"
          >
            <div
              v-if="date.year=== year && date.month===month && date.day === day"
              class="text-red-5 text-bold"
            >
              {{ date.month + 1 }}月{{ date.day }}日
              <q-badge color="red-5">今天</q-badge>
            </div>
            <div v-else>{{ date.day }}</div>
            <div v-if="date.bills" class="column no-wrap overflow-hidden">
              <q-badge
                v-for="item in date['bills']"
                :key="item['billId']"
                :color="isActive(date) ? 'blue-5' :'grey'"
                align="middle"
                class="q-mt-xs  cursor-pointer"
                multi-line
                @click="$emit('view-bill',item['billId'])"
              >
                <div class="full-width ellipsis">￥{{ item.count }}--{{ item.label }}</div>
              </q-badge>
            </div>
          </div>
        </div>
      </div>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
import {ref, shallowRef} from 'vue'
import * as util from './util.js'

export default {
  emits: ['display', 'view-bill'],
  setup() {
    const {year, month, day} = util.getYearMonthDay()
    const selectYear = ref(year)
    const selectMonth = ref(month)
    const selectDay = ref(day)

    const weekTexts = ['日', '一', '二', '三', '四', '五', '六']
    const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    const years = util.get3yearsBeforeAndAfter(year)
    const days = shallowRef(util.getDaysByYearAndMonth(year, month))

    const updateDays = () => {
      days.value = util.getDaysByYearAndMonth(selectYear.value, selectMonth.value)
    }

    const goToToday = () => {
      selectYear.value = year
      selectMonth.value = month
      selectDay.value = day
      updateDays()
    }

    const isActive = (date) => {
      const {year: a, month: b, day: c} = date
      if (a < year) return false
      if (a > year) return true
      else {
        if (b < month) return false
        if (b > month) return true
        else {
          return c >= day
        }
      }
    }

    return {
      year,
      month,
      day,
      selectYear,
      selectMonth,
      selectDay,

      weekTexts,
      years,
      months,
      days,

      goToToday,
      updateDays,
      isActive
    }
  }
}


</script>
<style>


.my-border {
  border-top: 1px solid rgb(0 0 0 / 12%);
  border-left: 1px solid rgb(0 0 0 / 12%);
  padding: 8px;
}

.item-day {
  width: calc(100% / 7);
  height: calc(100% / 6);
}
</style>