<template>
<!-- 车贷计算器 -->
    <div class="calculators_right_wrapper ">
        <div class="cal_title border-ra cal_fff_small cal_mar_bot_3">
            房贷计算器
        </div>
        <div class="cal_form border-ra cal_fff_small cal_mar_bot_3">
            房贷计算器用于计算用户在申请商业贷款的情况下，选择等额本金和等额本息两种不同的还款方式后，每一期需偿还商业贷款的月供，以及利息总额和还款总额。
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
                                <input type="text" value="100" id="area" />
                                <span class="unit">平米</span>
                            </span>
                        </div>

                        <div class="cal_center_option">
                            <span class="mode_title">单价</span>
                            <span class="mode_style mode_200">
                                <input type="text" value="6000" id="unit_price" />
                                <span class="unit">元/平米</span>
                            </span>
                        </div>

                        <div class="cal_center_option">
                            <span class="mode_title">贷款期限</span>
                            <span class="mode_style mode_200">
                                <input type="text" value="20" id="area_year" />
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
                                {{debx.allMoney}}元
                            </td>
                        </tr>
                        <tr>
                            <td>
                                还款月数
                            </td>
                            <td id="in_month">
                                {{debx.monthNum}}月
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
                <div class="result_right result_left" id="capital">
                    <h2>
                        等额本金
                    </h2>
                    <table cellspacing="0" cellpadding="0" border="0">
                        <tr>
                            <td>
                                贷款总额
                            </td>
                            <td id="ca_total">
                                {{debj.allMoney}}元
                            </td>
                        </tr>

                        <tr>
                            <td>
                                还款月数
                            </td>
                            <td id="ca_month">
                                {{debj.monthNum}}月
                            </td>
                        </tr>

                        <tr>
                            <td>
                                首期还款
                            </td>
                            <td id="ca_firstPay">
                                {{debj.firstMoney}}元
                            </td>
                        </tr>

                        <tr>
                            <td>
                                每月递减
                            </td>
                            <td id="ca_downPerMonth">
                                {{debj.monthDc}}元
                            </td>
                        </tr>
                        <tr>
                            <td>
                                总支付利息
                            </td>
                            <td id="ca_totalFee">
                                {{debj.allLixi}}元
                            </td>
                        </tr>
                        <tr>
                            <td>
                                本息合计
                            </td>
                            <td id="ca_totalCost">
                                {{debj.total}}元
                            </td>
                        </tr>
                    </table>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
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
        first: 10
      },
      debx: {
        allMoney: 0,
        monthNum: 0,
        onceMoney: 0,
        allLixi: 0,
        total: 0
      },
      debj: {
        allMoney: 0,
        monthNum: 0,
        firstMoney: 0,
        monthDc: 0,
        allLixi: 0,
        total: 0
      }
    };
  },
  methods: {
    edu() {
      // 等额本息
      console.log(this.mj.mianji * this.mj.danji * (1 - this.mj.first * 0.01));
      let onceMoney = this.jsIn(
        this.optionStyle == 1
          ? this.ed.money * 10000
          : this.mj.mianji * this.mj.danji * (1 - this.mj.first * 0.01),
        this.optionStyle == 1 ? this.ed.time * 12 : this.mj.time * 12,
        this.optionStyle == 1
          ? this.ed.lilv / 100 / 12
          : this.mj.lilv / 100 / 12
      );
      this.debx.allMoney =
        this.optionStyle == 1
          ? (this.ed.money * 10000).toFixed(2)
          : (this.mj.mianji * this.mj.danji * (1 - this.mj.first * 0.01)).toFixed(2);
      this.debx.monthNum =
        this.optionStyle == 1 ? this.ed.time * 12 : this.mj.time * 12;
      this.debx.onceMoney = onceMoney.toFixed(2);
      this.debx.allLixi = (
        onceMoney * this.debx.monthNum -
        this.debx.allMoney
      ).toFixed(2);
      this.debx.total = (onceMoney * this.debx.monthNum).toFixed(2);

      // 等额本金
      //   mydj每月递减
      let mydj = this.jsCa(
        this.optionStyle == 1
          ? this.ed.money * 10000
          : this.mj.mianji * this.mj.danji * (1 - this.mj.first * 0.01),
        this.optionStyle == 1 ? this.ed.time * 12 : this.mj.time * 12,
        this.optionStyle == 1
          ? this.ed.lilv / 100 / 12
          : this.mj.lilv / 100 / 12
      );
      this.debj.allMoney =  this.optionStyle == 1
          ? this.ed.money * 10000
          : this.mj.mianji * this.mj.danji * (1 - this.mj.first * 0.01);;
      this.debj.monthNum = this.optionStyle == 1 ? this.ed.time * 12 : this.mj.time * 12;;
      this.debj.firstMoney = (
        this.debj.allMoney / this.debj.monthNum +
        mydj * this.debj.monthNum
      ).toFixed(2);
      this.debj.monthDc = mydj.toFixed(2);
      var debjTotal = 0;
      for (let i = 1; i <= this.debj.monthNum; i++) {
        debjTotal += this.debj.allMoney / this.debj.monthNum + mydj * i;
      }
      this.debj.allLixi = (debjTotal - this.debj.allMoney).toFixed(2);
      this.debj.total = debjTotal.toFixed(2);
    },

    jsIn(total, month, rate) {
      var pay =
        total *
        rate *
        Math.pow(1 + rate, month) /
        (Math.pow(1 + rate, month) - 1);
      return pay;
    },
    jsCa(total, month, rate) {
      var money = total / month;
      var down = money * rate;
      return down;
    }
  }
};
</script>
