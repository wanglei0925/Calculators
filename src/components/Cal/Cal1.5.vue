<template>
    <div class="calculators_right_wrapper ">
        <div class="cal_title border-ra cal_fff_small cal_mar_bot_3">
            等额本息计算器
        </div>
        <div class="cal_form border-ra cal_fff_small cal_mar_bot_3">
            等额本息还款计算器（每月还款额相同），将帮助用户计算在不同的借款期限、不同的贷款利息下，采用等额本息还款方式时，需要支付的月供、利息总额和还款总额。
        </div>

        <div class="cal_form border-ra cal_fff cal_mar_bot_3">
            <div>
                2017年10月24日最新商贷利率4.90%，公积金利率3.25%。
            </div>
            <div class="cal_center">
                <div class="cal_center_option  mode_js">
                    <span class="mode_title">计算方式</span>
                    <span class="mode_style">
                        <input mode="0" type="radio" id="1" v-model="optionStyle" value="1" name="mode" checked>
                        <label for="1">按额度算</label>
                    </span>
                    <span class="mode_style">
                        <input mode="1" type="radio" id="2" v-model="optionStyle" value="0" name="mode">
                        <label for="2">按面积算</label>
                    </span>
                </div>

                <div class="toggle_mode">
                    <div v-if="optionStyle =='1'" class="toggle_mode_item money_mode">
                        <div class="cal_center_option">
                            <span class="mode_title">贷款金额</span>
                            <span class="mode_style mode_200">
                                <input type="text" v-model="ed.money" id="mount" />
                                <span class="unit"> 万元 </span>
                            </span>
                        </div>

                        <div class="cal_center_option">
                            <span class="mode_title">贷款期限</span>
                            <span class="mode_style mode_200">
                                <input type="text" v-model="ed.time" id="year" />
                                <span class="unit">年</span>
                            </span>
                        </div>

                        <div class="cal_center_option">
                            <span class="mode_title">年利率</span>
                            <span class="mode_style mode_200">
                                <input type="text" v-model="ed.lilv" id="rate" />
                                <span class="unit"> % </span>
                            </span>
                        </div>

                        <div class="submit_mode border-ra submit_mode1" @click="edu()">计算</div>
                        
                    </div>

                    <div v-if="optionStyle== '0'" class="toggle_mode_item area_mode">
                        <div class="cal_center_option">
                            <span class="mode_title">面积</span>
                            <span class="mode_style mode_200">
                                <input type="text" v-model="mj.mianji" id="area" />
                                <span class="unit">平米</span>
                            </span>
                        </div>

                        <div class="cal_center_option">
                            <span class="mode_title">单价</span>
                            <span class="mode_style mode_200">
                                <input type="text" v-model="mj.danji" id="unit_price" />
                                <span class="unit">元/平米</span>
                            </span>
                        </div>

                        <div class="cal_center_option">
                            <span class="mode_title">贷款期限</span>
                            <span class="mode_style mode_200">
                                <input type="text" v-model="mj.time" id="area_year" />
                                <span class="unit">年</span>
                            </span>
                        </div>

                        <div class="cal_center_option">
                            <span class="mode_title">年利率</span>
                            <span class="mode_style mode_200">
                                <input type="text" v-model="mj.lilv" id="area_rate" />
                                <span class="unit">%</span>
                            </span>
                        </div>

                        <div class="cal_center_option">
                            <span class="mode_title">首付比例</span>
                            <span class="mode_style mode_200">
                                <span class="icon_up"></span>
                                <select class="chanpin_change" v-model="mj.first" name="" id="firstPayPercent">
                                    <option value="10">1成</option>
                                    <option value="20">2成</option>
                                    <option value="30" selected>3成</option>
                                    <option value="40">4成</option>
                                    <option value="50">5成</option>
                                    <option value="60">6成</option>
                                    <option value="70">7成</option>
                                    <option value="80">8成</option>
                                    <option value="90">9成</option>
                                </select>
                            </span>
                        </div>

                        <div class="submit_mode border-ra submit_mode2" @click="edu()">计算</div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="cal_form border-ra cal_fff cal_mar_bot_3 result_js">
            <div class="small_tip">
                此结果仅供参考，实际应缴费以当地为准
            </div>
            <div class="result_title">
                计算结果
            </div>
            <div class="result_wrapper clearfix">
                <div class="result_left" id="interest">
                    <h2>
                        等额本息
                    </h2>
                    <table cellspacing="0" cellpadding="0" border="0">
                        <tr>
                            <td>
                                贷款总额
                            </td>
                            <td id="in_total">
                                {{allMoney}}元
                            </td>
                        </tr>
                        <tr>
                            <td>
                                还款月数
                            </td>
                            <td id="in_month">
                                {{monthNum}}月
                            </td>
                        </tr>

                        <tr>
                            <td>
                                每月还款
                            </td>
                            <td id="in_payPerMonth">
                                {{debx.onceMoney}}元
                            </td>
                        </tr>

                        <tr>
                            <td>
                                总支付利息
                            </td>
                            <td id="in_totalFee">
                                {{debx.allLixi}}元
                            </td>
                        </tr>

                        <tr>
                            <td>
                                本息合计
                            </td>
                            <td id="in_totalCost">
                                {{debx.total}}元
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { cal } from "@/common/js/cal.js";
export default {
  data() {
    return {
      optionStyle: 1,
      ed: {
        money: 100,
        time: 10,
        lilv: 4.90
      },
      mj: {
        mianji: 120,
        danji: 6000,
        time: 10,
        lilv: 4.90,
        first: 30
      },
      allMoney: 0,
      monthNum: 0,
      debx: {
        onceMoney: 0,
        allLixi: 0,
        total: 0
      },
    };
  },
  created() {
    this.edu();
  },
  methods: {
    edu() {
      let allMoney =
        this.optionStyle == 1
          ? this.ed.money * 10000
          : this.mj.mianji * this.mj.danji * (1 - this.mj.first * 0.01);
      let monthNum =
        this.optionStyle == 1 ? this.ed.time * 12 : this.mj.time * 12;
      let lilv =
        this.optionStyle == 1
          ? this.ed.lilv / 100 / 12
          : this.mj.lilv / 100 / 12;
      // 等额本息 每月还款的金额
      let onceMoney = cal.jsIn(allMoney, monthNum, lilv);

      this.allMoney = allMoney.toFixed(2);
      this.monthNum = monthNum;

      this.debx.onceMoney = onceMoney.toFixed(2);
      this.debx.allLixi = (onceMoney * this.monthNum - this.allMoney).toFixed(
        2
      );
      this.debx.total = (onceMoney * this.monthNum).toFixed(2);
    }
  },
  watch: {
    optionStyle(xin, old) {
      this.edu();
    }
  }
};
</script>
