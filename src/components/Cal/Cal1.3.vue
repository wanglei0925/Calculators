<template>
    <div class="calculators_right_wrapper ">
        <div class="cal_title border-ra cal_fff_small cal_mar_bot_3">
            五险一金贷款计算器
        </div>
        <div class="cal_form border-ra cal_fff_small cal_mar_bot_3">
            税后工资计算器俗称五险一金计算器，能够根据当地劳动保障部门的最新规定，准确地计算您的社会保险及住房公积金汇缴金额。
        </div>
        <div class="cal_form border-ra cal_fff cal_mar_bot_3 title_min_70">
            <div class="cal_center">
                <div class="cal_center_option">
                    <span class="mode_title"> 税前工资 </span>
                    <span class="mode_style mode_100"> <input type="text" v-model="salary" id="salary" />
                        <span class="unit"> 元 </span>
                    </span>
                    <span class="wage_btn border-ra pc-show" @click="result()"> 计算 </span>
                </div>
                <div class="cal_center_option">
                    <span class="mode_title"> 社保基数 </span>
                    <span class="mode_style mode_100"> <input type="text" v-model="gs_flag" id="base_shebao" :disabled="!sbjs" />
                        <span class="unit"> 元 </span>
                    </span>
                    <input type="checkbox" id="self_shebao" v-model="sbjs" />
                    <label for="self_shebao">自定义</label>
                </div>
                <div class="cal_center_option">
                    <span class="mode_title"> 公积金基数 </span>
                    <span class="mode_style mode_100"> <input type="text" v-model="gjj_flag" id="base_gongjijin" :disabled="!gjjjs" />
                        <span class="unit"> 元 </span>
                    </span>
                    <input type="checkbox" id="self_gongjijin" v-model="gjjjs" />
                    <label for="self_gongjijin">自定义</label>
                </div>

                <div class="wage_btn border-ra h5-show mar_bot_30" @click="result()"> 计算 </div>
                <!-- <div class="cal_center_option">
                    <span class="mode_title"> 公积金 </span>
                    <input type="checkbox" id="gjj" v-model="gjjFlag" checked/>
                    <label for="gjj">是否缴纳公积金</label>
                </div>
                <div class="cal_center_option">
                    <span class="mode_title"> 个税 </span>
                    <input type="checkbox" id="geshui" v-model="geshuiFlag" checked/>
                    <label for="geshui">是否缴纳个税</label>
                </div> -->
                <div class="toggle_mode clearfix">
                    <div class="toggle_mode_left">
                        <div class="wuxian_title">
                            个人缴纳
                            <span id="gr_jiaona"></span>
                        </div>
                        <div class="cal_center_option">
                            <span class="mode_title"> 养老 </span>
                            <span class="mode_style mode_100"> <input type="text" v-model="person.yanglao" id="gr_yanglao" />
                                <span class="unit"> % </span>
                            </span>
                            <span class="result_num" id="num_yanglao">{{res_person.yanglao}} </span>
                        </div>
                        <div class="cal_center_option">
                            <span class="mode_title"> 医疗 </span>
                            <span class="mode_style mode_100"> <input type="text" v-model="person.yiliao" id="gr_yiliao" />
                                <span class="unit"> % </span>
                            </span>
                            <span class="result_num" id="num_yiliao"> {{res_person.yiliao}}</span>
                        </div>
                        <div class="cal_center_option">
                            <span class="mode_title"> 失业 </span>
                            <span class="mode_style mode_100"> <input type="text" v-model="person.shiye" id="gr_shiye" />
                                <span class="unit"> % </span>
                            </span>
                            <span class="result_num" id="num_shiye">{{res_person.shiye}} </span>
                        </div>
                        <div class="cal_center_option">
                            <span class="mode_title"> 公伤 </span>
                            <span class="mode_style mode_100"> <input type="text" v-model="person.gongshang" id="gr_gongshang" />
                                <span class="unit"> % </span>
                            </span>
                            <span class="result_num" id="num_gongshang"> {{res_person.gongshang}}</span>
                        </div>
                        <div class="cal_center_option">
                            <span class="mode_title"> 生育 </span>
                            <span class="mode_style mode_100"> <input type="text" v-model="person.shengyu" id="gr_shengyu" />
                                <span class="unit"> % </span>
                            </span>
                            <span class="result_num" id="num_shengyu">{{res_person.shengyu}} </span>
                        </div>
                        <div class="cal_center_option show_js">
                            <span class="mode_title"> 公积金 </span>
                            <span class="mode_style mode_100"> <input type="text" v-model="person.gjijin" id="gr_gongjijin" />
                                <span class="unit"> % </span>
                            </span>
                            <span class="result_num" id="num_gongjijin">{{res_person.gjijin}} </span>
                        </div>
                        <div class="cal_center_option ">
                            <span class="mode_title"> 共计支出 </span>
                            <span class="result_num" id="num_pay">{{res_person.total}} </span>
                        </div>
                        <template class="pc-show">
                        <div class="cal_center_option pc-show">
                            <span class="mode_title"> 应税工资 </span>
                            <span class="result_num" id="num_in">{{ysgz}} </span>
                        </div>
                        <div class="cal_center_option pc-show">
                            <span class="mode_title"> 个人所得税 </span>
                            <span class="result_num" id="num_geshui">{{grsds}} </span>
                        </div>
                        </template>

                    </div>
                    <div class="toggle_mode_left">
                        <div class="wuxian_title">
                            单位缴纳
                            <span id="gs_jiaona"></span>
                        </div>
                        <div class="cal_center_option">
                            <span class="mode_title"> 养老 </span>
                            <span class="mode_style mode_100"> <input type="text" v-model="company.yanglao" id="gs_yanglao" />
                                <span class="unit"> % </span>
                            </span>
                            <span class="result_num" id="nums_yanglao">{{res_company.yanglao}} </span>
                        </div>
                        <div class="cal_center_option">
                            <span class="mode_title"> 医疗 </span>
                            <span class="mode_style mode_100"> <input type="text" v-model="company.yiliao" id="gs_yiliao" />
                                <span class="unit"> % </span>
                            </span>
                            <span class="result_num" id="nums_yiliao"> {{res_company.yiliao}}</span>
                        </div>
                        <div class="cal_center_option">
                            <span class="mode_title"> 失业 </span>
                            <span class="mode_style mode_100"> <input type="text" v-model="company.shiye" id="gs_shiye" />
                                <span class="unit"> % </span>
                            </span>
                            <span class="result_num" id="nums_shiye">{{res_company.shiye}} </span>
                        </div>
                        <div class="cal_center_option">
                            <span class="mode_title"> 工伤 </span>
                            <span class="mode_style mode_100"> <input type="text" v-model="company.gongshang" id="gs_gongshang" />
                                <span class="unit"> % </span>
                            </span>
                            <span class="result_num" id="nums_gongshang">{{res_company.gongshang}} </span>
                        </div>
                        <div class="cal_center_option">
                            <span class="mode_title"> 生育 </span>
                            <span class="mode_style mode_100"> <input type="text" v-model="company.shengyu" id="gs_shengyu" />
                                <span class="unit"> % </span>
                            </span>
                            <span class="result_num" id="nums_shengyu">{{res_company.shengyu}} </span>
                        </div>
                        <div class="cal_center_option show_js">
                            <span class="mode_title"> 公积金 </span>
                            <span class="mode_style mode_100"> <input type="text" v-model="company.gjijin" id="gs_gongjijin" />
                                <span class="unit"> % </span>
                            </span>
                            <span class="result_num" id="nums_gongjijin">{{res_company.gjijin}} </span>
                        </div>
                        <div class="cal_center_option">
                            <span class="mode_title"> 共计支出 </span>
                            <span class="result_num" id="nums_pay">{{res_company.total}}</span>
                        </div>
                    </div>
                </div>
                <template class="h5-show">
                    <div class="cal_center_option h5-show">
                        <span class="mode_title"> 应税工资 </span>
                        <span class="result_num" id="num_in">{{ysgz}} </span>
                    </div>
                    <div class="cal_center_option h5-show">
                        <span class="mode_title"> 个人所得税 </span>
                        <span class="result_num" id="num_geshui">{{grsds}} </span>
                    </div>
                </template>
              
                <div class="cal_center_option ">
                    <span class="mode_title">税后工资 </span>
                    <span class="result_num">
                        <b id="result_money">{{shgz}}</b>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      salary: 10000,
      gs_flag: 10000,
      gjj_flag: 10000,
      sbjs: false,
      gjjjs: false,
      ysgz: null,
      grsds: null,
      shgz: null,
      person: {
        yanglao: 8,
        yiliao: 2,
        shiye: 0.2,
        gongshang: 0,
        shengyu: 0,
        gjijin: 12
      },
      company: {
        yanglao: 19,
        yiliao: 10,
        shiye: 0.8,
        gongshang: 1,
        shengyu: 0.8,
        gjijin: 12
      },
      res_person: {
        yanglao: null,
        yiliao: null,
        shiye: null,
        gongshang: null,
        shengyu: null,
        gjijin: null,
        total: null
      },
      res_company: {
        yanglao: null,
        yiliao: null,
        shiye: null,
        gongshang: null,
        shengyu: null,
        gjijin: null,
        total: null
      }
    };
  },
  methods: {
    result() {
      this.res_person.yanglao = (
        this.gs_flag *
        this.person.yanglao *
        0.01
      ).toFixed(2);
      this.res_person.yiliao = (
        this.gs_flag * this.person.yiliao * 0.01 +
        3 * 1
      ).toFixed(2);
      this.res_person.shiye = (this.gs_flag * this.person.shiye * 0.01).toFixed(
        2
      );
      this.res_person.gongshang = (
        this.gs_flag *
        this.person.gongshang *
        0.01
      ).toFixed(2);
      this.res_person.shengyu = (
        this.gs_flag *
        this.person.shengyu *
        0.01
      ).toFixed(2);
      this.res_person.gjijin = (
        this.gjj_flag *
        this.person.gjijin *
        0.01
      ).toFixed(2);
      this.res_person.total = (
        this.res_person.yanglao * 1 +
        this.res_person.yiliao * 1 +
        this.res_person.shiye * 1 +
        this.res_person.gongshang * 1 +
        this.res_person.shengyu * 1 +
        this.res_person.gjijin * 1
      ).toFixed(2);

      this.res_company.yanglao = (
        this.gs_flag *
        this.company.yanglao *
        0.01
      ).toFixed(2);
      this.res_company.yiliao = (
        this.gs_flag *
        this.company.yiliao *
        0.01
      ).toFixed(2);
      this.res_company.shiye = (
        this.gs_flag *
        this.company.shiye *
        0.01
      ).toFixed(2);
      this.res_company.gongshang = (
        this.gs_flag *
        this.company.gongshang *
        0.01
      ).toFixed(2);
      this.res_company.shengyu = (
        this.gs_flag *
        this.company.shengyu *
        0.01
      ).toFixed(2);
      this.res_company.gjijin = (
        this.gjj_flag *
        this.company.gjijin *
        0.01
      ).toFixed(2);
      this.res_company.total = (
        this.res_company.yanglao * 1 +
        this.res_company.yiliao * 1 +
        this.res_company.shiye * 1 +
        this.res_company.gongshang * 1 +
        this.res_company.shengyu * 1 +
        this.res_company.gjijin * 1
      ).toFixed(2);

      this.ysgz = (this.salary - this.res_person.total).toFixed(2);
      this.grsds = this.geshui(this.ysgz).toFixed(2);
      this.shgz = (this.ysgz - this.grsds).toFixed(2);
    },
    geshui(args) {
      let result = 0;
      let arg = args - 3500;
      if (arg > 80000) {
        result = arg * 0.45 - 13505;
        return result;
      } else if (arg > 55000) {
        result = arg * 0.35 - 5505;
        return result;
      } else if (arg > 35000) {
        result = arg * 0.3 - 2755;
        return result;
      } else if (arg > 9000) {
        result = arg * 0.25 - 1005;
        return result;
      } else if (arg > 4500) {
        result = arg * 0.2 - 555;
        return result;
      } else if (arg > 1500) {
        result = arg * 0.1 - 105;
        return result;
      } else if (arg < 1500) {
        result = arg * 0.03 - 0;
        return result;
      }
      return;
    }
  }
};
</script>