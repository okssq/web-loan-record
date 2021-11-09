<template>
  <div class="bill overflow-hidden column no-wrap" v-if="selectBill">
    <q-select
      dense
      borderless
      emit-value
      map-options
      class="q-px-md q-py-sm text-h6"
      popup-content-class="text-grey-7"
      :model-value="billId"
      :options="bills"
      @update:model-value="onBillChange"
    />
    <div class="text-subtitle2 text-grey-7 q-px-md ">
      <span class="text-bold text-red-5">{{ selectBill['jkrq'] }}</span>
      借
      <span class="text-bold text-red-5">{{ selectBill['jkje'] }}</span>
      ({{ selectBill['hkfs'] }})
    </div>
    <div class="col-shrink overflow-auto q-ml-md q-mt-md">
      <div
        v-for="(item,index) in selectBill['hklb']"
        :key="index"
        class="q-pl-md q-py-sm text-subtitle2 bill-item"
        :class="isActive(item) ? 'active' : ''"
      >
        <div class="text-grey-6">第{{ index + 1 }}期</div>
        <div :class="isActive(item) ? 'text-blue-5' : 'text-grey-7'">
          {{ item['day'] }} --- ￥{{ item['count'] }}
        </div>
      </div>
    </div>
  </div>
  <div v-else></div>
</template>

<script>
import {bills, getYearMonthDay} from './util'
import {computed} from "vue";


export default {
  emits: ['select'],
  props: {
    billId: {
      type: Number,
      default: 1
    }
  },
  setup(props, {emit}) {
    const {year, month, day} = getYearMonthDay()
    const selectBill = computed(() => bills.find(el => el['id'] === props.billId) || null)
    const onBillChange = (value) => {
      emit('select', value)
    }
    const isActive = (item) => {
      const {day: dayStr} = item
      const dayArr = dayStr.split('/')
      const [a, b, c] = dayArr
      if (a < year) return false
      if (a > year) return true
      else {
        if (b < month + 1) return false
        if (b > month + 1) return true
        else {
          return c >= day
        }
      }
    }

    return {
      bills,
      selectBill,
      onBillChange,
      isActive
    }
  }
}
</script>

<style scoped>
.bill {
  width: 260px;

}

.bill-item {
  border-left: 4px solid rgb(224, 224, 224);
  position: relative;
}

.bill-item::before {
  position: absolute;
  content: '';
  width: 8px;
  height: 4px;
  left: -4px;
  top: 15px;
  background-color: rgb(158, 158, 158);
}

.active {
  border-left-color: rgb(166, 213, 250);
}

.active::before {
  background-color: rgb(33, 150, 243);
}
</style>