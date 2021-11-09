<template>
  <div class="layout absolute-full overflow-hidden">
    <calendar @display="toggleDisplay" @view-bill="onBillIdChange">
      <template #left>
        <bill :bill-id="billId" @select="onBillIdChange"/>
      </template>
      <template #right>
        <q-separator v-show="visible" vertical/>
        <statistics v-show="visible" @view-bill="onBillIdChange"/>
      </template>
    </calendar>
  </div>

</template>
<script>
import Statistics from './statistics.vue'
import Calendar from './calendar.vue'
import Bill from './bill.vue'
import {ref} from "vue";

export default {
  components: {
    Statistics,
    Calendar,
    Bill
  },
  setup() {
    const visible = ref(true)
    const toggleDisplay = () => {
      visible.value = !visible.value
    }

    const billId = ref(1)
    const onBillIdChange = (val) => {
      billId.value = val
    }
    return {
      visible,
      toggleDisplay,

      billId,
      onBillIdChange
    }
  }
}
</script>

