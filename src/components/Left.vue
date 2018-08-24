<template>
	<div>
		<div class="fixed-back" v-if="menuFlag">
		</div>
		<transition name="slide-fade">
			<div class="calculators_left border-ra left-h5" v-if="menuFlag">

				<div class="calculators_list_content">
					<div class="calculators_list">
						<h2>月供计算器</h2>
						<div @click="toPage('/')" attr="0" class="calculators_item" :class="{'calculators_item_active':$route.path=='/'}">房贷计算器</div>
						<!-- <div @click="toPage('/cal2')" attr="1" class="calculators_item" :class="{'calculators_item_active':$route.path=='/cal2'}">车贷计算器</div> -->
						<div @click="toPage('/cal3')" attr="2" class="calculators_item" :class="{'calculators_item_active':$route.path=='/cal3'}">公积金贷款计算器</div>
						<div @click="toPage('/cal4')" attr="3" class="calculators_item" :class="{'calculators_item_active':$route.path=='/cal4'}">五险一金计算器</div>

					</div>
					<div class="calculators_list">
						<h2>还款工具</h2>
						<div @click="toPage('/cal5')" attr="4" class="calculators_item" :class="{'calculators_item_active':$route.path=='/cal5'}">等额本金还款计算器</div>
						<div @click="toPage('/cal6')" attr="5" class="calculators_item" :class="{'calculators_item_active':$route.path=='/cal6'}">等额本息还款计算器</div>
						<div @click="toPage('/cal7')" attr="6" class="calculators_item" :class="{'calculators_item_active':$route.path=='/cal7'}">还款方式比较器</div>

					</div>
				</div>
			</div>
		</transition>

		<div class="calculators_left border-ra left-pc">
			<div class="calculators_list_content">
				<div class="calculators_list">
					<h2>月供计算器</h2>
					<div @click="toPage('/')" attr="0" class="calculators_item" :class="{'calculators_item_active':$route.path=='/'}">房贷计算器</div>
					<!-- <div @click="toPage('/cal2')" attr="1" class="calculators_item" :class="{'calculators_item_active':$route.path=='/cal2'}">车贷计算器</div> -->
					<div @click="toPage('/cal3')" attr="2" class="calculators_item" :class="{'calculators_item_active':$route.path=='/cal3'}">公积金贷款计算器</div>
					<div @click="toPage('/cal4')" attr="3" class="calculators_item" :class="{'calculators_item_active':$route.path=='/cal4'}">五险一金计算器</div>

				</div>
				<div class="calculators_list">
					<h2>还款工具</h2>
					<div @click="toPage('/cal5')" attr="4" class="calculators_item" :class="{'calculators_item_active':$route.path=='/cal5'}">等额本金还款计算器</div>
					<div @click="toPage('/cal6')" attr="5" class="calculators_item" :class="{'calculators_item_active':$route.path=='/cal6'}">等额本息还款计算器</div>
					<div @click="toPage('/cal7')" attr="6" class="calculators_item" :class="{'calculators_item_active':$route.path=='/cal7'}">还款方式比较器</div>

				</div>
			</div>
		</div>
	</div>

</template>
<style>
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,.slide-fade-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
/* .slide-fade-leave-to {
  transform: translateY(100%);
  opacity: 0;
} */
</style>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["menuFlag"])
  },
  methods: {
    ...mapActions(["hide"]),
    toPage(url) {
      this.hide();
      this.$router.push(url);
    }
  }
};
</script>
