<template>
  <NavBar />
  <div class="FindFlightsAll">
    <div class="FlightsMainCard">
      <n-card class="FindFlights" :title="CardStart" header-style="font-size:2em">
        <template #header-extra>
          <n-button class="TransportButton" @click="toggleTransport">{{ transportMode }}</n-button>
        </template>
        <div v-if="ifFlight">
          <n-tabs class="card-tabs" size="small" animated pane-wrapper-style="margin: 0 -4px"
            tab-style="font-size:1.2em">
            <n-tab-pane name="Round Trip" tab="往返">
              <n-form size="small">
                <n-form-item-row class="FlightsFormItemRow">
                  <div class="FlightsLabelInput">
                    <n-form-item label="出发地" label-style="font-size:1.3em;">
                      <n-auto-complete v-model:value="RoundFrom" :options="filteredOptionsRoundFrom"
                        placeholder="输入出发机场" clearable @select="handleSelect('RoundFrom', $event)">
                        <template #default="{ handleInput, handleBlur, handleFocus }">
                          <n-input class="FlightsInput" placeholder="输入出发机场" @input="handleInput" @blur="handleBlur"
                            @focus="handleFocus" v-model:value="RoundFrom">
                            <template #prefix>
                              <n-icon class="FlightsLeft">
                                <Location class="FlightsIcon" />
                              </n-icon>
                            </template>
                          </n-input>
                        </template>
                      </n-auto-complete>
                    </n-form-item>
                  </div>
                  <div class="FlightsLabelInput">
                    <n-form-item label="目的地" label-style="font-size:1.3em;">
                      <n-auto-complete v-model:value="RoundTo" :options="filteredOptionsRoundTo" placeholder="输入到达机场"
                        clearable @select="handleSelect('RoundTo', $event)">
                        <template #default="{ handleInput, handleBlur, handleFocus }">
                          <n-input class="FlightsInput" placeholder="输入到达机场" @input="handleInput" @blur="handleBlur"
                            @focus="handleFocus" v-model:value="RoundTo">
                            <template #prefix>
                              <n-icon class="FlightsLeft">
                                <Location class="FlightsIcon" />
                              </n-icon>
                            </template>
                          </n-input>
                        </template>
                      </n-auto-complete>
                    </n-form-item>
                  </div>
                </n-form-item-row>
                <n-form-item-row class="FlightsFormItemRow">
                  <div class="FlightsLabelInput">
                    <n-form-item label="出发日期" label-style="font-size:1.3em;">
                      <n-date-picker class="FlightsInput" size="large" v-model:value="RoundDepart" type="date"
                        placeholder="选择出发日期" />
                    </n-form-item>
                  </div>
                  <div class="FlightsLabelInput">
                    <n-form-item label="返程日期" label-style="font-size:1.3em;">
                      <n-date-picker class="FlightsInput" size="large" v-model:value="RoundReturn" type="date"
                        :disabled-date="disabledReturnDates" @click="checkRoundDepart" placeholder="选择返程日期" />
                    </n-form-item>
                  </div>
                </n-form-item-row>
                <n-form-item-row class="FlightsFormItemRow" style="width: 200px">
                  <div class="FlightsLabelInput">
                    <n-form-item label="乘客数量" label-style="font-size:1.3em;" :rules="[
                      { required: true, message: '请输入乘客数量' },
                      { type: 'number', min: 1, message: '乘客数量必须为正整数' }
                    ]">
                      <n-input type="number" class="FlightsInput" placeholder="乘客数量"
                        v-model:value="RoundPassengerCount">
                        <template #prefix>
                          <n-icon class="FlightsLeft">
                            <Group class="FlightsIcon" />
                          </n-icon>
                        </template>
                      </n-input>
                    </n-form-item>
                  </div>
                </n-form-item-row>
              </n-form>
              <div class="preferences">
                <n-checkbox v-model:checked="withChildRound"
                  style="font-size: 1.3em; margin-left: 50px">带儿童</n-checkbox>
                <n-checkbox v-model:checked="withInfantRound"
                  style="font-size: 1.3em; margin-right: 50px">带婴儿</n-checkbox>
              </div>
              <n-button class="FindFlightsButton" type="primary" block secondary strong @click="FlightsSearch('Round')">
                航班查询
              </n-button>
            </n-tab-pane>
            <n-tab-pane name="One-way" tab="单程">
              <n-form size="small">
                <n-form-item-row class="FlightsFormItemRow">
                  <div class="FlightsLabelInput">
                    <n-form-item label="出发地" label-style="font-size:1.3em;">
                      <n-auto-complete v-model:value="OneFrom" :options="filteredOptionsOneFrom" placeholder="输入出发机场"
                        clearable @select="handleSelect('OneFrom', $event)">
                        <template #default="{ handleInput, handleBlur, handleFocus }">
                          <n-input class="FlightsInput" placeholder="输入出发机场" @input="handleInput" @blur="handleBlur"
                            @focus="handleFocus" v-model:value="OneFrom">
                            <template #prefix>
                              <n-icon class="FlightsLeft">
                                <Location class="FlightsIcon" />
                              </n-icon>
                            </template>
                          </n-input>
                        </template>
                      </n-auto-complete>
                    </n-form-item>
                  </div>
                  <div class="FlightsLabelInput">
                    <n-form-item label="目的地" label-style="font-size:1.3em;">
                      <n-auto-complete v-model:value="OneTo" :options="filteredOptionsOneTo" placeholder="输入到达机场"
                        clearable @select="handleSelect('OneTo', $event)">
                        <template #default="{ handleInput, handleBlur, handleFocus }">
                          <n-input class="FlightsInput" placeholder="输入到达机场" @input="handleInput" @blur="handleBlur"
                            @focus="handleFocus" v-model:value="OneTo">
                            <template #prefix>
                              <n-icon class="FlightsLeft">
                                <Location class="FlightsIcon" />
                              </n-icon>
                            </template>
                          </n-input>
                        </template>
                      </n-auto-complete>
                    </n-form-item>
                  </div>
                </n-form-item-row>
                <n-form-item-row class="FlightsFormItemRow">
                  <div class="FlightsLabelInput">
                    <n-form-item label="出发日期" label-style="font-size:1.3em;">
                      <n-date-picker class="FlightsInput" size="large" v-model:value="OneDepart" type="date"
                        placeholder="选择出发日期" />
                    </n-form-item>
                  </div>
                </n-form-item-row>
                <n-form-item-row class="FlightsFormItemRow" style="width: 200px">
                  <div class="FlightsLabelInput">
                    <n-form-item label="乘客数量" label-style="font-size:1.3em;" :rules="[
                      { required: true, message: '请输入乘客数量' },
                      { type: 'number', min: 1, message: '乘客数量必须为正整数' }
                    ]">
                      <n-input type="number" class="FlightsInput" placeholder="乘客数量" v-model:value="OnePassengerCount">
                        <template #prefix>
                          <n-icon class="FlightsLeft">
                            <Group class="FlightsIcon" />
                          </n-icon>
                        </template>
                      </n-input>
                    </n-form-item>
                  </div>
                </n-form-item-row>
              </n-form>
              <div class="preferences">
                <n-checkbox v-model:checked="withChildOne" style="font-size: 1.3em; margin-left: 50px">带儿童</n-checkbox>
                <n-checkbox v-model:checked="withInfantOne"
                  style="font-size: 1.3em; margin-right: 50px">带婴儿</n-checkbox>
              </div>
              <n-button class="FindFlightsButton" type="primary" block secondary strong @click="FlightsSearch('One')">
                航班查询
              </n-button>
            </n-tab-pane>
          </n-tabs>
        </div>

        <div v-else>
          <n-tabs class="card-tabs" size="small" animated pane-wrapper-style="margin: 0 -4px"
            tab-style="font-size:1.2em">
            <n-tab-pane name="Round Trip" tab="往返">
              <n-form size="small">
                <n-form-item-row class="FlightsFormItemRow">
                  <div class="FlightsLabelInput">
                    <n-form-item label="出发地" label-style="font-size:1.3em;">
                      <n-auto-complete v-model:value="RoundFromTrain" :options="filteredOptionsRoundFromTrain"
                        placeholder="输入出发城市" clearable @select="handleSelectTrain('RoundFrom', $event)">
                        <template #default="{ handleInput, handleBlur, handleFocus }">
                          <n-input class="FlightsInput" placeholder="输入出发城市" @input="handleInput" @blur="handleBlur"
                            @focus="handleFocus" v-model:value="RoundFromTrain">
                            <template #prefix>
                              <n-icon class="FlightsLeft">
                                <Location class="FlightsIcon" />
                              </n-icon>
                            </template>
                          </n-input>
                        </template>
                      </n-auto-complete>
                    </n-form-item>
                  </div>
                  <div class="FlightsLabelInput">
                    <n-form-item label="目的地" label-style="font-size:1.3em;">
                      <n-auto-complete v-model:value="RoundToTrain" :options="filteredOptionsRoundToTrain"
                        placeholder="输入到达城市" clearable @select="handleSelectTrain('RoundTo', $event)">
                        <template #default="{ handleInput, handleBlur, handleFocus }">
                          <n-input class="FlightsInput" placeholder="输入到达城市" @input="handleInput" @blur="handleBlur"
                            @focus="handleFocus" v-model:value="RoundToTrain">
                            <template #prefix>
                              <n-icon class="FlightsLeft">
                                <Location class="FlightsIcon" />
                              </n-icon>
                            </template>
                          </n-input>
                        </template>
                      </n-auto-complete>
                    </n-form-item>
                  </div>
                </n-form-item-row>
                <n-form-item-row class="FlightsFormItemRow">
                  <div class="FlightsLabelInput">
                    <n-form-item label="出发日期" label-style="font-size:1.3em;">
                      <n-date-picker class="FlightsInput" size="large" v-model:value="RoundDepartTrain" type="date"
                        placeholder="选择出发日期" />
                    </n-form-item>
                  </div>
                  <div class="FlightsLabelInput">
                    <n-form-item label="返程日期" label-style="font-size:1.3em;">
                      <n-date-picker class="FlightsInput" size="large" v-model:value="RoundReturnTrain" type="date"
                        :disabled-date="disabledReturnDates" @click="checkRoundDepartTrain" placeholder="选择返程日期" />
                    </n-form-item>
                  </div>
                </n-form-item-row>
              </n-form>
              <div class="preferences">
                <n-checkbox v-model:checked="withGCRound"
                  style="font-size: 1.3em; margin-left: 50px">高铁(G/C)</n-checkbox>
                <n-checkbox v-model:checked="withDRound" style="font-size: 1.3em; margin-right: 50px">动车(D)</n-checkbox>
              </div>
              <n-button class="FindFlightsButton" type="primary" block secondary strong @click="TrainSearch('Round')">
                火车票查询
              </n-button>
            </n-tab-pane>
            <n-tab-pane name="One-way" tab="单程">
              <n-form size="small">
                <n-form-item-row class="FlightsFormItemRow">
                  <div class="FlightsLabelInput">
                    <n-form-item label="出发地" label-style="font-size:1.3em;">
                      <n-auto-complete v-model:value="OneFromTrain" :options="filteredOptionsOneFromTrain"
                        placeholder="输入出发城市" clearable @select="handleSelectTrain('OneFrom', $event)">
                        <template #default="{ handleInput, handleBlur, handleFocus }">
                          <n-input class="FlightsInput" placeholder="输入出发城市" @input="handleInput" @blur="handleBlur"
                            @focus="handleFocus" v-model:value="OneFromTrain">
                            <template #prefix>
                              <n-icon class="FlightsLeft">
                                <Location class="FlightsIcon" />
                              </n-icon>
                            </template>
                          </n-input>
                        </template>
                      </n-auto-complete>
                    </n-form-item>
                  </div>
                  <div class="FlightsLabelInput">
                    <n-form-item label="目的地" label-style="font-size:1.3em;">
                      <n-auto-complete v-model:value="OneToTrain" :options="filteredOptionsOneToTrain"
                        placeholder="输入到达城市" clearable @select="handleSelectTrain('OneTo', $event)">
                        <template #default="{ handleInput, handleBlur, handleFocus }">
                          <n-input class="FlightsInput" placeholder="输入到达城市" @input="handleInput" @blur="handleBlur"
                            @focus="handleFocus" v-model:value="OneToTrain">
                            <template #prefix>
                              <n-icon class="FlightsLeft">
                                <Location class="FlightsIcon" />
                              </n-icon>
                            </template>
                          </n-input>
                        </template>
                      </n-auto-complete>
                    </n-form-item>
                  </div>
                </n-form-item-row>
                <n-form-item-row class="FlightsFormItemRow">
                  <div class="FlightsLabelInput">
                    <n-form-item label="出发日期" label-style="font-size:1.3em;">
                      <n-date-picker class="FlightsInput" size="large" v-model:value="OneDepartTrain" type="date"
                        placeholder="选择出发日期" />
                    </n-form-item>
                  </div>
                </n-form-item-row>
              </n-form>
              <div class="preferences">
                <n-checkbox v-model:checked="withGCOne" style="font-size: 1.3em; margin-left: 50px">高铁(G/C)</n-checkbox>
                <n-checkbox v-model:checked="withDOne" style="font-size: 1.3em; margin-right: 50px">动车(D)</n-checkbox>
              </div>
              <n-button class="FindFlightsButton" type="primary" block secondary strong @click="TrainSearch('One')">
                火车票查询
              </n-button>
            </n-tab-pane>
          </n-tabs>
        </div>
      </n-card>
    </div>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import {
  NCard,
  NTabPane,
  NTabs,
  NForm,
  NButton,
  NFormItemRow,
  NInput,
  NIcon,
  NFormItem,
  NCheckbox,
  NDatePicker,
  NAutoComplete
} from 'naive-ui'
import { Location, Group } from '@vicons/carbon'
import { computed, ref } from 'vue'

const RoundFrom = ref('')
const RoundTo = ref('')
const OneFrom = ref('')
const OneTo = ref('')
const RoundDepart = ref(null)
const RoundReturn = ref(null)
const OneDepart = ref(null)
const OnePassengerCount = ref(0)
const RoundPassengerCount = ref(0)

const withChildRound = ref(false)
const withInfantRound = ref(false)
const withChildOne = ref(false)
const withInfantOne = ref(false)

const RoundFromTrain = ref('')
const RoundToTrain = ref('')
const OneFromTrain = ref('')
const OneToTrain = ref('')
const RoundDepartTrain = ref(null)
const RoundReturnTrain = ref(null)
const OneDepartTrain = ref(null)

const withGCRound = ref(false)
const withDRound = ref(false)
const withGCOne = ref(false)
const withDOne = ref(false)

const transportMode = ref('切换火车票')
const CardStart = ref('旅兔：开启新航行✈')
const ifFlight = ref('true')
const airports = [
  { code: 'AAT', name: '阿勒泰机场' },
  { code: 'AHJ', name: '阿坝红原机场' },
  { code: 'AKA', name: '安康五里铺机场' },
  { code: 'AKU', name: '阿克苏温宿机场' },
  { code: 'AOG', name: '鞍山腾鳌机场' },
  { code: 'AQG', name: '安庆天柱山机场' },
  { code: 'AYN', name: '安阳豫东北机场' },
  { code: 'BPE', name: '秦皇岛北戴河机场' },
  { code: 'BAV', name: '包头二里半机场' },
  { code: 'BHY', name: '北海福成机场' },
  { code: 'BPX', name: '昌都邦达机场' },
  { code: 'BSD', name: '保山云瑞机场' },
  { code: 'CAN', name: '广州白云国际机场' },
  { code: 'CDE', name: '承德普宁机场' },
  { code: 'CGD', name: '常德桃花源机场' },
  { code: 'CGO', name: '郑州新郑国际机场' },
  { code: 'CGQ', name: '长春龙嘉国际机场' },
  { code: 'CHG', name: '朝阳机场' },
  { code: 'CHW', name: '酒泉机场' },
  { code: 'CIF', name: '赤峰玉龙机场' },
  { code: 'CIH', name: '长治王村机场' },
  { code: 'CKG', name: '重庆江北国际机场' },
  { code: 'CNI', name: '长海大长山岛机场' },
  { code: 'CSX', name: '长沙黄花国际机场' },
  { code: 'CTU', name: '成都双流国际机场' },
  { code: 'CZX', name: '常州奔牛国际机场' },
  { code: 'DAT', name: '大同云冈机场' },
  { code: 'DAX', name: '达州河市机场' },
  { code: 'DCY', name: '稻城亚丁机场' },
  { code: 'DDG', name: '丹东浪头机场' },
  { code: 'DIG', name: '迪庆香格里拉机场' },
  { code: 'DLC', name: '大连周水子国际机场' },
  { code: 'DLU', name: '大理荒草坝机场' },
  { code: 'DNH', name: '敦煌莫高国际机场' },
  { code: 'DOY', name: '东营胜利机场' },
  { code: 'DQA', name: '大庆萨尔图机场' },
  { code: 'DSN', name: '鄂尔多斯伊金霍洛国际机场' },
  { code: 'DYG', name: '张家界荷花国际机场' },
  { code: 'EHU', name: '鄂州花湖机场' },
  { code: 'ENH', name: '恩施许家坪机场' },
  { code: 'ENY', name: '延安二十里铺机场' },
  { code: 'ERL', name: '二连浩特赛乌素机场' },
  { code: 'FUG', name: '阜阳西关机场' },
  { code: 'FUO', name: '佛山沙堤机场' },
  { code: 'FOC', name: '福州长乐国际机场' },
  { code: 'FUG', name: '阜阳西关机场' },
  { code: 'FYJ', name: '抚远东极机场' },
  { code: 'FYN', name: '富蕴可可托海机场' },
  { code: 'GHN', name: '广汉机场' },
  { code: 'GOQ', name: '格尔木机场' },
  { code: 'GYS', name: '广元盘龙机场' },
  { code: 'HAK', name: '海口美兰国际机场' },
  { code: 'HDG', name: '邯郸机场' },
  { code: 'HEK', name: '黑河机场' },
  { code: 'HET', name: '呼和浩特白塔国际机场' },
  { code: 'HFE', name: '合肥新桥国际机场' },
  { code: 'HGH', name: '杭州萧山国际机场' },
  { code: 'HIA', name: '淮安涟水国际机场' },
  { code: 'HJJ', name: '怀化芷江机场' },
  { code: 'HQL', name: '塔什库尔干红其拉甫机场' },
  { code: 'HKG', name: '香港国际机场' },
  { code: 'HLD', name: '呼伦贝尔东山国际机场' },
  { code: 'HLH', name: '乌兰浩特义勒力特机场' },
  { code: 'HMI', name: '哈密机场' },
  { code: 'HNY', name: '衡阳南岳机场' },
  { code: 'HRB', name: '哈尔滨太平国际机场' },
  { code: 'HSN', name: '舟山普陀山机场' },
  { code: 'HTN', name: '和田机场' },
  { code: 'HTT', name: '海西花土沟机场' },
  { code: 'HUZ', name: '惠州平潭机场' },
  { code: 'HYN', name: '台州路桥机场' },
  { code: 'HZA', name: '菏泽牡丹机场' },
  { code: 'HZG', name: '汉中城固机场' },
  { code: 'INC', name: '银川河东国际机场' },
  { code: 'IQM', name: '且末玉都机场' },
  { code: 'IQN', name: '庆阳西峰机场' },
  { code: 'JDZ', name: '景德镇罗家机场' },
  { code: 'JGN', name: '嘉峪关机场' },
  { code: 'JGS', name: '井冈山机场' },
  { code: 'JHG', name: '西双版纳嘎洒国际机场' },
  { code: 'JIC', name: '金昌金川机场' },
  { code: 'JIL', name: '吉林二台子机场' },
  { code: 'JIU', name: '九江庐山机场' },
  { code: 'JJN', name: '泉州晋江机场' },
  { code: 'JMU', name: '佳木斯东郊国际机场' },
  { code: 'JNG', name: '济宁曲阜机场' },
  { code: 'JNZ', name: '锦州锦州湾机场' },
  { code: 'JSJ', name: '建三江湿地机场' },
  { code: 'JUZ', name: '衢州机场' },
  { code: 'JZH', name: '九寨沟黄龙机场' },
  { code: 'KCA', name: '库车龟兹机场' },
  { code: 'KHG', name: '喀什国际机场' },
  { code: 'KHH', name: '高雄国际机场' },
  { code: 'KHN', name: '南昌昌北国际机场' },
  { code: 'KJI', name: '布尔津喀纳斯机场' },
  { code: 'KMG', name: '昆明长水国际机场' },
  { code: 'KOW', name: '赣州黄金机场' },
  { code: 'KRL', name: '库尔勒机场' },
  { code: 'KRY', name: '克拉玛依机场' },
  { code: 'KWE', name: '贵阳龙洞堡国际机场' },
  { code: 'KWL', name: '桂林两江国际机场' },
  { code: 'LCX', name: '龙岩冠豸山机场' },
  { code: 'LFQ', name: '临汾尧都机场' },
  { code: 'LHW', name: '兰州中川国际机场' },
  { code: 'LJG', name: '丽江三义机场' },
  { code: 'LLV', name: '吕梁大武机场' },
  { code: 'LNJ', name: '临沧博尚机场' },
  { code: 'LUM', name: '潞西芒市机场' },
  { code: 'LXA', name: '拉萨贡嘎国际机场' },
  { code: 'LYA', name: '洛阳北郊机场' },
  { code: 'LYG', name: '连云港白塔埠机场' },
  { code: 'LYI', name: '临沂启阳机场' },
  { code: 'LZH', name: '柳州白莲机场' },
  { code: 'LZO', name: '泸州云龙机场' },
  { code: 'MDG', name: '牡丹江海浪国际机场' },
  { code: 'MFM', name: '澳门国际机场' },
  { code: 'MIG', name: '绵阳南郊机场' },
  { code: 'MXZ', name: '梅州梅县机场' },
  { code: 'NAO', name: '南充高坪机场' },
  { code: 'NAY', name: '北京南苑机场' },
  { code: 'NBS', name: '白山长白山机场' },
  { code: 'NDG', name: '齐齐哈尔三家子机场' },
  { code: 'NGB', name: '宁波栎社国际机场' },
  { code: 'NGQ', name: '阿里昆莎机场' },
  { code: 'NKG', name: '南京禄口国际机场' },
  { code: 'NLT', name: '新源那拉提机场' },
  { code: 'NNG', name: '南宁吴圩国际机场' },
  { code: 'NNY', name: '南阳姜营机场' },
  { code: 'NTG', name: '南通兴东国际机场' },
  { code: 'NZH', name: '满洲里西郊国际机场' },
  { code: 'OHE', name: '漠河古莲机场' },
  { code: 'PEK', name: '北京首都国际机场' },
  { code: 'PKX', name: '北京大兴国际机场' },
  { code: 'PVG', name: '上海浦东国际机场' },
  { code: 'PZI', name: '攀枝花保安营机场' },
  { code: 'RKZ', name: '日喀则和平机场' },
  { code: 'RLK', name: '巴彦淖尔天吉泰机场' },
  { code: 'RMQ', name: '台中清泉岗机场' },
  { code: 'SHA', name: '上海虹桥国际机场' },
  { code: 'SHE', name: '沈阳桃仙国际机场' },
  { code: 'SHF', name: '石河子花园机场' },
  { code: 'SHS', name: '荆州沙市机场' },
  { code: 'SJW', name: '石家庄正定国际机场' },
  { code: 'SWA', name: '揭阳潮汕机场' },
  { code: 'SYM', name: '普洱思茅机场' },
  { code: 'SYX', name: '三亚凤凰国际机场' },
  { code: 'SZX', name: '深圳宝安国际机场' },
  { code: 'SZV', name: '苏州光福机场' },
  { code: 'TAO', name: '青岛流亭国际机场' },
  { code: 'nan', name: '青岛胶东国际机场' },
  { code: 'TCG', name: '塔城机场' },
  { code: 'TCZ', name: '腾冲驼峰机场' },
  { code: 'TEN', name: '铜仁凤凰机场' },
  { code: 'TFU', name: '成都天府国际机场' },
  { code: 'TGO', name: '通辽机场' },
  { code: 'TNA', name: '济南遥墙国际机场' },
  { code: 'TNH', name: '通化三源浦机场' },
  { code: 'TPE', name: '台湾桃园国际机场' },
  { code: 'TSA', name: '台北松山机场' },
  { code: 'TSN', name: '天津滨海国际机场' },
  { code: 'TXN', name: '黄山屯溪国际机场' },
  { code: 'TYN', name: '太原武宿国际机场' },
  { code: 'URC', name: '乌鲁木齐地窝堡国际机场' },
  { code: 'UYN', name: '榆林榆阳机场' },
  { code: 'WEF', name: '潍坊南苑机场' },
  { code: 'WEH', name: '威海大水泊国际机场' },
  { code: 'WNZ', name: '温州龙湾国际机场' },
  { code: 'WUA', name: '乌海机场' },
  { code: 'WUH', name: '武汉天河国际机场' },
  { code: 'WUS', name: '武夷山机场' },
  { code: 'WUX', name: '苏南硕放国际机场' },
  { code: 'WUZ', name: '梧州长洲岛机场' },
  { code: 'WXN', name: '万州五桥机场' },
  { code: 'XFN', name: '襄阳刘集机场' },
  { code: 'XIA', name: '信阳明港机场' },
  { code: 'XIC', name: '西昌青山机场' },
  { code: 'XIL', name: '锡林浩特机场' },
  { code: 'XIY', name: '西安咸阳国际机场' },
  { code: 'XMN', name: '厦门高崎国际机场' },
  { code: 'XNN', name: '西宁曹家堡国际机场' },
  { code: 'XUZ', name: '徐州观音国际机场' },
  { code: 'YBP', name: '宜宾菜坝机场' },
  { code: 'YCU', name: '运城张孝机场' },
  { code: 'YIH', name: '宜昌三峡机场' },
  { code: 'YIN', name: '伊宁机场' },
  { code: 'YIW', name: '义乌机场' },
  { code: 'YKH', name: '营口兰旗机场' },
  { code: 'YNJ', name: '延吉朝阳川国际机场' },
  { code: 'YNT', name: '烟台蓬莱国际机场' },
  { code: 'YNZ', name: '盐城南洋国际机场' },
  { code: 'YTY', name: '扬州泰州国际机场' },
  { code: 'YUS', name: '玉树巴塘机场' },
  { code: 'YYA', name: '岳阳三荷机场' },
  { code: 'ZAT', name: '昭通机场' },
  { code: 'ZHA', name: '湛江机场' },
  { code: 'ZUH', name: '珠海金湾机场' },
  { code: 'ZYI', name: '遵义新舟机场' },
  { code: 'CGK', name: '雅加达国际机场' },
  { code: 'DPS', name: '巴厘岛国际机场' },
  { code: 'BTJ', name: '班达亚齐机场' },
  { code: 'BDO', name: '万隆机场' },
  { code: 'BPN', name: '巴厘巴板苏丹穆罕默德·阿吉·苏莱曼机场' },
  { code: 'NRT', name: '成田机场' },
  { code: 'HND', name: '羽田机场' },
  { code: 'KIX', name: '关西国际机场' },
  { code: 'ITM', name: '大阪国际机场' },
  { code: 'NGO', name: '名古屋中部国际机场' },
  { code: 'FUK', name: '福冈国际机场' },
  { code: 'KOJ', name: '鹿儿岛机场' },
  { code: 'SDJ', name: '仙台机场' },
  { code: 'HIJ', name: '广岛机场' },
  { code: 'NGS', name: '长崎机场' },
  { code: 'CTS', name: '新千岁机场' },
  { code: 'OKA', name: '那霸机场' },
  { code: 'GMP', name: '金浦国际机场' },
  { code: 'ICN', name: '仁川国际机场' },
  { code: 'PUS', name: '釜山金海国际机场' },
  { code: 'CJU', name: '济州国际机场' },
  { code: 'KWJ', name: '光州国际机场' },
  { code: 'DIL', name: '东帝汶帝力机场' },
  { code: 'BWN', name: '文莱国际机场' },
  { code: 'FNJ', name: '平壤顺安国际机场' },
  { code: 'WOS', name: '元山机场' },
  { code: 'RGO', name: '清津机场' },
  { code: 'YJS', name: '三池渊机场' },
  { code: 'VTE', name: '万象机场' },
  { code: 'ULN', name: '成吉思汗国际机场' },
  { code: 'DMK', name: '廊曼国际机场' },
  { code: 'BKK', name: '素万纳普国际机场' },
  { code: 'HKT', name: '普吉国际机场' },
  { code: 'CNX', name: '清迈国际机场' },
  { code: 'NST', name: '那空是贪吗叻机场' },
  { code: 'SGN', name: '新山一国际机场' },
  { code: 'HAN', name: '河内内排国际机场' },
  { code: 'CXR', name: '金兰国际机场' },
  { code: 'MNL', name: '马尼拉国际机场' },
  { code: 'SIN', name: '新加坡樟宜国际机场' },
  { code: 'KUL', name: '吉隆坡国际机场' },
  { code: 'BKI', name: '亚庇国际机场' },
  { code: 'PEN', name: '槟城国际机场' },
  { code: 'KTM', name: '加德满都机场' },
  { code: 'PBH', name: '帕罗机场' },
  { code: 'MLE', name: '马累国际机场' },
  { code: 'DEL', name: '英迪拉·甘地国际机场' },
  { code: 'BOM', name: '孟买贾特拉帕蒂·希瓦吉国际机场' },
  { code: 'MAA', name: '金奈国际机场' },
  { code: 'CCU', name: '加尔各答机场' },
  { code: 'HYD', name: '拉吉夫·甘地国际机场' },
  { code: 'BLR', name: '班加罗尔机场' },
  { code: 'COK', name: '科钦机场' },
  { code: 'RGN', name: '仰光国际机场' },
  { code: 'MDL', name: '曼德勒国际机场' },
  { code: 'NYT', name: '内比都国际机场' },
  { code: 'ISB', name: '伊斯兰堡杰克拉拉机场' },
  { code: 'KHI', name: '卡拉奇真纳国际机场' },
  { code: 'LHE', name: '拉合尔阿拉玛·伊克巴尔国际机场' },
  { code: 'PNH', name: '金边机场' },
  { code: 'REP', name: '吴哥国际机场' },
  { code: 'DAC', name: '达卡国际机场' },
  { code: 'TSE', name: '努尔苏丹·纳扎尔巴耶夫国际机场' },
  { code: 'ALA', name: '阿拉木图国际机场' },
  { code: 'nan', name: 'nan' },
  { code: 'AKX', name: '阿克托别机场' },
  { code: 'KGF', name: '卡拉干达萨里-阿尔卡国际机场' },
  { code: 'DMB', name: '塔拉兹机场' },
  { code: 'SCO', name: '阿克套国际机场' },
  { code: 'KZO', name: '克孜勒奥尔达机场' },
  { code: 'TAS', name: '塔什干尤日内机场' },
  { code: 'SKD', name: '撒马尔罕国际机场' },
  { code: 'AZN', name: '安集延机场' },
  { code: 'FRU', name: '玛纳斯国际机场' },
  { code: 'OSS', name: '奥什国际机场' },
  { code: 'DYU', name: '杜尚别国际机场' },
  { code: 'LBD', name: '胡占德机场' },
  { code: 'ASB', name: '阿什哈巴德国际机场' },
  { code: 'KRW', name: '土库曼巴希机场' },
  { code: 'DXB', name: '迪拜国际机场' },
  { code: 'AUH', name: '阿布扎比国际机场' },
  { code: 'SHJ', name: '沙迦机场' },
  { code: 'RUH', name: '哈利德国王国际机场' },
  { code: 'DMM', name: '法赫德国王国际机场' },
  { code: 'JED', name: '阿卜杜勒-阿齐兹国王国际机场' },
  { code: 'TLV', name: '特拉维夫本古里安机场' },
  { code: 'HFA', name: '海法国际机场' },
  { code: 'JRS', name: '耶路撒冷机场' },
  { code: 'MCT', name: '马斯喀特国际机场' },
  { code: 'SAH', name: '萨那国际机场' },
  { code: 'ADE', name: '亚丁国际机场' },
  { code: 'SCT', name: '索科特拉岛机场' },
  { code: 'BGW', name: '巴格达机场' },
  { code: 'BSR', name: '巴士拉机场' },
  { code: 'EBL', name: '阿尔贝拉国际机场' },
  { code: 'KWI', name: '科威特国际机场' },
  { code: 'DAM', name: '大马士革机场' },
  { code: 'ALP', name: '阿勒颇国际机场' },
  { code: 'BEY', name: '贝鲁特国际机场' },
  { code: 'AMM', name: '安曼阿利亚皇后机场' },
  { code: 'EVN', name: '埃里温机场' },
  { code: 'DOH', name: '多哈哈马德国际机场' },
  { code: 'BAH', name: '巴林国际机场' },
  { code: 'TBS', name: '第比利斯国际机场' },
  { code: 'ESB', name: '安卡拉埃森博阿机场' },
  { code: 'IST', name: '伊斯坦布尔国际机场' },
  { code: 'IZM', name: '伊兹密尔机场' },
  { code: 'AYT', name: '安塔利亚国际机场' },
  { code: 'THR', name: '梅赫拉巴德国际机场' },
  { code: 'TBZ', name: '大不里士国际机场' },
  { code: 'GYD', name: '盖达尔·阿利耶夫国际机场' },
  { code: 'YOW', name: '渥太华国际机场' },
  { code: 'YUL', name: '蒙特利尔特鲁多国际机场' },
  { code: 'YVR', name: '温哥华国际机场' },
  { code: 'YYZ', name: '多伦多皮尔逊国际机场' },
  { code: 'YQB', name: '魁北克让·勒萨热国际机场' },
  { code: 'IAD', name: '华盛顿杜勒斯国际机场' },
  { code: 'DCA', name: '华盛顿国家机场' },
  { code: 'JFK', name: '肯尼迪国际机场' },
  { code: 'LAX', name: '洛杉矶国际机场' },
  { code: 'ORD', name: '奥黑尔国际机场' },
  { code: 'MDW', name: '芝加哥中途国际机场' },
  { code: 'BOS', name: '洛根国际机场' },
  { code: 'SFO', name: '旧金山国际机场' },
  { code: 'SEA', name: '西雅图-塔科马国际机场' },
  { code: 'DEN', name: '丹佛国际机场' },
  { code: 'LAS', name: '拉斯维加斯麦卡伦国际机场' },
  { code: 'CLE', name: '克利夫兰霍普金斯国际机场' },
  { code: 'ATL', name: '哈兹菲尔德-杰克逊亚特兰大国际机场' },
  { code: 'DTW', name: '底特律大都会机场' },
  { code: 'DFW', name: '达拉斯—沃思堡国际机场' },
  { code: 'MIA', name: '迈阿密国际机场' },
  { code: 'IAH', name: '休斯敦乔治·布什洲际机场' },
  { code: 'HOU', name: '休斯顿哈比国际机场' },
  { code: 'MCO', name: '奥兰多国际机场' },
  { code: 'PHX', name: '天港国际机场' },
  { code: 'PHL', name: '费城国际机场' },
  { code: 'SLC', name: '盐湖城国际机场' },
  { code: 'GOH', name: '努克机场' },
  { code: 'MEX', name: '贝尼托·胡亚雷斯国际机场' },
  { code: 'SDQ', name: '美洲国际机场' },
  { code: 'PAP', name: '太子港国际机场' },
  { code: 'KIN', name: '诺曼·曼利机场' },
  { code: 'SCL', name: '圣地亚哥国际机场' },
  { code: 'LIM', name: '豪尔赫查韦斯国际机场' },
  { code: 'UIO', name: '基多机场' },
  { code: 'PTY', name: '巴拿马城机场' },
  { code: 'NAS', name: '拿骚国际机场' },
  { code: 'SJO', name: '圣何塞机场' },
  { code: 'BOG', name: '波哥大机场' },
  { code: 'CCS', name: '西蒙玻利瓦尔国际机场' },
  { code: 'EZE', name: '布宜诺斯艾利斯埃塞萨国际机场' },
  { code: 'USH', name: '乌斯怀亚国际机场' },
  { code: 'PBM', name: '帕拉马里博国际机场' },
  { code: 'CAY', name: '卡宴罗尚博国际机场' },
  { code: 'GRU', name: '圣保罗国际机场' },
  { code: 'VCP', name: '坎皮纳斯国际机场' },
  { code: 'GIG', name: '里约热内卢国际机场' },
  { code: 'CWB', name: '库里蒂巴国际机场' },
  { code: 'BSB', name: '巴西利亚国际机场' },
  { code: 'ASU', name: '亚松森国际机场' },
  { code: 'MVD', name: '蒙得维的亚卡拉斯科机场' },
  { code: 'LHR', name: '伦敦希思罗国际机场' },
  { code: 'LTN', name: '卢顿机场' },
  { code: 'LGW', name: '盖特威克机场' },
  { code: 'MAN', name: '曼彻斯特机场' },
  { code: 'EDI', name: '爱丁堡机场' },
  { code: 'CWL', name: '加的夫机场' },
  { code: 'DUB', name: '都柏林机场' },
  { code: 'AMS', name: '阿姆斯特丹国际机场' },
  { code: 'RTM', name: '鹿特丹机场' },
  { code: 'EIN', name: '埃因霍温国际机场' },
  { code: 'CPH', name: '哥本哈根凯斯楚普机场' },
  { code: 'ARN', name: '斯德哥尔摩阿兰达国际机场' },
  { code: 'OSL', name: '奥斯陆国际机场' },
  { code: 'HEL', name: '赫尔辛基万塔机场' },
  { code: 'BRU', name: '布鲁塞尔国际机场' },
  { code: 'MUC', name: '慕尼黑机场' },
  { code: 'TXL', name: '柏林机场' },
  { code: 'FRA', name: '法兰克福国际机场' },
  { code: 'BRE', name: '不莱梅机场' },
  { code: 'STR', name: '斯图加特机场' },
  { code: 'HAM', name: '汉堡国际机场' },
  { code: 'CGN', name: '科隆机场' },
  { code: 'HHN', name: '法兰克福哈恩机场' },
  { code: 'CDG', name: '戴高乐机场' },
  { code: 'LIL', name: '里尔机场' },
  { code: 'MRS', name: '马赛机场' },
  { code: 'LYS', name: '里昂国际机场' },
  { code: 'ZRH', name: '苏黎世国际机场' },
  { code: 'GVA', name: '日内瓦国际机场' },
  { code: 'MAD', name: '马德里巴拉哈斯机场' },
  { code: 'BCN', name: '巴塞罗那安普拉特机场' },
  { code: 'VLC', name: '瓦伦西亚机场' },
  { code: 'LIS', name: '里斯本波尔特拉机场' },
  { code: 'OPO', name: '奥波多机场' },
  { code: 'FCO', name: '罗马菲乌米奇诺机场' },
  { code: 'MXP', name: '米兰马尔彭萨国际机场' },
  { code: 'VCE', name: '威尼斯马可·波罗国际机场' },
  { code: 'NAP', name: '那不勒斯机场' },
  { code: 'FLR', name: '佛罗伦萨机场' },
  { code: 'GOA', name: '热那亚机场' },
  { code: 'TRN', name: '都灵机场' },
  { code: 'PSA [6]', name: '比萨机场' },
  { code: 'MLA', name: '马耳他卢卡机场' },
  { code: 'PRG', name: '布拉格瓦茨拉夫・哈维尔国际机场' },
  { code: 'BTS', name: '斯特法尼科机场' },
  { code: 'BUD', name: '布达佩斯费里海吉国际机场' },
  { code: 'LUX', name: '卢森堡国际机场' },
  { code: 'VIE', name: '维也纳国际机场' },
  { code: 'SZG', name: '萨尔茨堡机场' },
  { code: 'LNZ', name: '林茨机场' },
  { code: 'INN', name: '因斯布鲁克机场' },
  { code: 'BUH', name: '布加勒斯特机场' },
  { code: 'BEG', name: '贝尔格莱德机场' },
  { code: 'PRN', name: '普里什蒂纳国际机场' },
  { code: 'TGD', name: '波德戈里察机场' },
  { code: 'SJJ', name: '萨拉热窝机场' },
  { code: 'ZAG', name: '萨格勒布机场' },
  { code: 'WAW', name: '华沙弗里德里克·肖邦机场' },
  { code: 'ATH', name: '雅典国际机场' },
  { code: 'SVO', name: '莫斯科谢列梅捷沃国际机场' },
  { code: 'LED', name: '圣彼得堡普尔科沃机场' },
  { code: 'AER', name: '索契国际机场' },
  { code: 'KZN', name: '喀山国际机场' },
  { code: 'VVO', name: '海参崴机场' },
  { code: 'HTA', name: '赤塔机场' },
  { code: 'TJM', name: '秋明国际机场' },
  { code: 'VVO', name: '符拉迪沃斯托克国际机场' },
  { code: 'KHV', name: '哈巴罗夫斯克诺维机场' },
  { code: 'UUD', name: '乌兰乌德机场' },
  { code: 'SOF', name: '索非亚机场' },
  { code: 'MSQ', name: '明斯克国家机场' },
  { code: 'KBP', name: '基辅鲍里斯波尔机场' },
  { code: 'IEV', name: '基辅茹良尼国际机场' },
  { code: 'DNK', name: '第聂伯罗彼得罗夫斯克国际机场' },
  { code: 'ODS', name: '敖德萨国际机场' },
  { code: 'TLL', name: '塔林伦纳特·梅里国际机场' },
  { code: 'RIX', name: '里加国际机场' },
  { code: 'VNO', name: '维尔纽斯国际机场' },
  { code: 'CAI', name: '开罗国际机场' },
  { code: 'RBA', name: '拉巴特萨勒机场' },
  { code: 'TIP', name: '的黎波里国际机场' },
  { code: 'TUN', name: '突尼斯迦太基国际机场' },
  { code: 'SID', name: '阿米尔卡-卡布拉尔国际机场' },
  { code: 'DKR', name: '达喀尔约夫国际机场' },
  { code: 'ASK', name: '亚穆苏克罗机场' },
  { code: 'ABJ', name: '阿比让机场' },
  { code: 'CKY', name: '科纳克里国际机场' },
  { code: 'KRT', name: '喀土穆国际机场' },
  { code: 'JUB', name: '朱巴机场' },
  { code: 'ADD', name: '亚的斯亚贝巴博莱机场' },
  { code: 'JIB', name: '吉布提国际机场' },
  { code: 'ASM', name: '阿斯马拉国际机场' },
  { code: 'BKO', name: '巴马科机场' },
  { code: 'EDJ', name: '莫普提机场' },
  { code: 'GAQ', name: '加奥机场' },
  { code: 'MGQ', name: '摩加迪沙国际机场' },
  { code: 'NDJ', name: '恩贾梅纳国际机场' },
  { code: 'BGF', name: '班吉姆波科国际机场' },
  { code: 'YAO', name: '雅温得国际机场' },
  { code: 'JNB', name: '约翰内斯堡国际机场' },
  { code: 'CPT', name: '开普敦国际机场' },
  { code: 'HRE', name: '哈拉雷国际机场' },
  { code: 'JRO', name: '乞力马扎罗机场' },
  { code: 'DAR', name: '达累斯萨拉姆国际机场' },
  { code: 'NBO', name: '乔莫·肯雅塔国际机场' },
  { code: 'LAD', name: '夸德罗安达国际机场' },
  { code: 'CAB', name: '卡宾达机场' },
  { code: 'ALG', name: '阿尔及尔机场' },
  { code: 'ABV', name: '阿布贾国际机场' },
  { code: 'MDI', name: '马库尔迪机场' },
  { code: 'KAN', name: '卡诺机场' },
  { code: 'LOS', name: '拉各斯机场' },
  { code: 'FIH', name: '金沙萨恩吉利机场' },
  { code: 'BZV', name: '布拉柴维尔马亚机场' },
  { code: 'LUN', name: '卢萨卡国际机场' },
  { code: 'MPM', name: '马普托机场' },
  { code: 'LLW', name: '利隆圭国际机场' },
  { code: 'MRU', name: '西沃古尔·拉姆古兰爵士国际机场' },
  { code: 'TNR', name: '塔那那利弗伊瓦图机场' },
  { code: 'CBR', name: '堪培拉机场' },
  { code: 'MEL', name: '墨尔本国际机场' },
  { code: 'SYD', name: '悉尼金斯福国际机场' },
  { code: 'ADL', name: '阿德莱德机场' },
  { code: 'DRW', name: '达尔文国际机场' },
  { code: 'WLG', name: '惠灵顿机场' },
  { code: 'AKL', name: '奥克兰国际机场' },
  { code: 'CHC', name: '克赖斯特彻奇国际机场' },
  { code: 'POM', name: '莫尔兹比港机场' },
  { code: 'VLI', name: '维拉港国际机场' },
  { code: 'HIR', name: '霍尼亚拉国际机场' },
  { code: 'HNP', name: '波纳佩国际机场' },
  { code: 'NAN', name: '楠迪国际机场' },
  { code: 'SUV', name: '瑙索里国际机场' },
  { code: 'INU', name: '瑙鲁国际机场' },
  { code: 'ROR', name: '帕劳国际机场' }
]
const filteredOptionsRoundFrom = computed(() => {
  return airports
    .filter((airport) => airport.name.includes(RoundFrom.value))
    .map((airport) => ({
      label: airport.name,
      value: airport.name
    }))
})

const filteredOptionsRoundTo = computed(() => {
  return airports
    .filter((airport) => airport.name.includes(RoundTo.value))
    .map((airport) => ({
      label: airport.name,
      value: airport.name
    }))
})
const filteredOptionsOneFrom = computed(() => {
  return airports
    .filter((airport) => airport.name.includes(OneFrom.value))
    .map((airport) => ({
      label: airport.name,
      value: airport.name
    }))
})
const filteredOptionsOneTo = computed(() => {
  return airports
    .filter((airport) => airport.name.includes(OneTo.value))
    .map((airport) => ({
      label: airport.name,
      value: airport.name
    }))
})

const getAirportCode = (airportName) => {
  const airport = airports.find((a) => a.name === airportName)
  return airport ? airport.code : ''
}

const handleSelect = (field, value) => {
  if (field === 'RoundFrom') {
    RoundFrom.value = value
  } else if (field === 'RoundTo') {
    RoundTo.value = value
  } else if (field === 'OneFrom') {
    OneFrom.value = value
  } else if (field === 'OneTo') {
    OneTo.value = value
  }
}

const checkRoundDepart = () => {
  if (!RoundDepart.value) {
    alert('请先选择出发日期')
  }
}

const disabledReturnDates = (date) => {
  if (RoundDepart.value) {
    return date < new Date(RoundDepart.value)
  }
  return false
}
// 确保使用UTC时间
const formatDate = (date) => {
  const d = new Date(date)
  return new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())).toISOString().split('T')[0]
}

const FlightsSearch = (SelectTrip) => {
  let url = 'https://flights.ctrip.com/online/list/'
  let fromCode = '',
    toCode = '',
    depdate = '',
    retdate = '',
    passengerCount = 0,
    child = 0,
    infant = 0
  if (SelectTrip === 'Round') {
    if (
      RoundFrom.value === '' ||
      RoundTo.value === '' ||
      RoundDepart.value === '' ||
      RoundReturn.value === '' ||
      RoundPassengerCount.value === ''
    ) {
      alert('航班信息未填写完整')
      return
    } else {
      fromCode = getAirportCode(RoundFrom.value)
      toCode = getAirportCode(RoundTo.value)
      depdate = new Date(RoundDepart.value).toISOString().split('T')[0]
      retdate = new Date(RoundReturn.value).toISOString().split('T')[0]
      depdate = formatDate(RoundDepart.value)
      retdate = formatDate(RoundReturn.value)
      passengerCount = RoundPassengerCount.value
      child = withChildRound.value ? 1 : 0
      infant = withInfantRound.value ? 1 : 0
      url += `round-${fromCode}-${toCode}?depdate=${depdate}_${retdate}&adult=${passengerCount}&child=${child}&infant=${infant}`
      RoundFrom.value = ''
      RoundTo.value = ''
      RoundDepart.value = ''
      RoundReturn.value = ''
      RoundPassengerCount.value = ''
    }
  } else if (SelectTrip === 'One') {
    if (
      OneFrom.value === '' ||
      OneTo.value === '' ||
      OneDepart.value === '' ||
      OnePassengerCount.value === ''
    ) {
      alert('航班信息未填写完整')
      return
    }
    fromCode = getAirportCode(OneFrom.value)
    toCode = getAirportCode(OneTo.value)
    depdate = formatDate(OneDepart.value)
    passengerCount = OnePassengerCount.value
    child = withChildOne.value ? 1 : 0
    infant = withInfantOne.value ? 1 : 0
    url += `oneway-${fromCode}-${toCode}?depdate=${depdate}&adult=${passengerCount}&child=${child}&infant=${infant}`
    OneFrom.value = ''
    OneTo.value = ''
    OneDepart.value = ''
    OnePassengerCount.value = ''
  }

  window.location.href = url
}

const toggleTransport = () => {
  if (transportMode.value === '切换火车票') {
    transportMode.value = '切换飞机票'
    CardStart.value = "旅兔：开启新旅途🚆"
    ifFlight.value = false;
  } else {
    transportMode.value = '切换火车票';
    CardStart.value = "旅兔：开启新航行✈"
    ifFlight.value = true;
  }
}
const citys = [
  '香港',
  '澳门',
  '台北',
  '台湾',
  '北京',
  '上海',
  '成都',
  '广州',
  '杭州',
  '南京',
  '厦门',
  '深圳',
  '重庆',
  '三亚',
  '苏州',
  '珠海',
  '西安',
  '武汉',
  '大连',
  '垦丁',
  '天津',
  '济南',
  '青岛',
  '丽江',
  '桂林',
  '长沙',
  '无锡',
  '高雄市',
  '昆明',
  '常州',
  '沈阳',
  '哈尔滨',
  '大理',
  '花莲',
  '长春',
  '都江堰',
  '峨眉山',
  '台中市',
  '福州',
  '开封',
  '扬州',
  '海口',
  '郑州',
  '宁波',
  '银川',
  '九寨沟',
  '威海',
  '太原',
  '兰州',
  '乌鲁木齐',
  '台南',
  '九份',
  '烟台',
  '连云港',
  '洛阳',
  '武夷山',
  '南通',
  '南投',
  '平遥',
  '南昌',
  '淡水',
  '拉萨',
  '佛山',
  '绍兴',
  '清远',
  '屏东',
  '合肥',
  '婺源',
  '石家庄',
  '黄山市',
  '敦煌',
  '阳朔',
  '嘉兴',
  '秦皇岛',
  '腾冲',
  '南宁',
  '中山',
  '稻城',
  '张家界市',
  '温州',
  '西宁',
  '泉州',
  '香格里拉',
  '徐州',
  '保定',
  '贵阳',
  '东莞',
  '承德',
  '北海',
  '镇江',
  '肇庆',
  '安吉',
  '满洲里',
  '呼和浩特',
  '宜昌',
  '桃园',
  '台东',
  '西双版纳',
  '大同',
  '湖州',
  '日照',
  '昆山',
  '呼伦贝尔',
  '景德镇',
  '台州',
  '乐山',
  '凤凰',
  '林芝',
  '丽水',
  '嘉义',
  '金华',
  '太鲁阁国家公园',
  '惠州',
  '上饶',
  '平溪',
  '基隆市',
  '泰安',
  '吉林市',
  '恒春',
  '九江',
  '舟山',
  '宜兰',
  '阿坝州',
  '嵊泗',
  '湘西',
  '嘉峪关',
  '神农架',
  '晋中',
  '丹东',
  '漳州',
  '保山',
  '韶关',
  '张掖',
  '甘孜州',
  '大邑',
  '日喀则',
  '葫芦岛',
  '乌镇',
  '康定',
  '金瓜石',
  '新竹',
  '桐乡',
  '牡丹江',
  '西塘',
  '黔东南州',
  '酒泉',
  '宜春',
  '额尔古纳',
  '彰化',
  '青海湖',
  '鹿港',
  '工布江达',
  '迪庆州',
  '临安',
  '漠河',
  '梅里雪山',
  '朱家尖',
  '北戴河',
  '青城山',
  '蓬莱',
  '金门',
  '四姑娘山',
  '甘南',
  '千岛湖',
  '喀纳斯',
  '阿里',
  '延边',
  '昌黎',
  '泸沽湖',
  '波密',
  '喀什',
  '余姚',
  '汕头',
  '伊犁',
  '周庄',
  '宏村镇',
  '宜兴',
  '理县',
  '常熟',
  '溧阳',
  '苗栗',
  '长白山',
  '莫干山',
  '海西州',
  '长岛县',
  '江孜',
  '荣成',
  '江阴',
  '景洪',
  '义乌',
  '延吉',
  '绿岛',
  '瑞安',
  '阿勒泰',
  '嵩山',
  '汶川',
  '歙县',
  '镇远',
  '海盐',
  '涠洲岛',
  '同里',
  '象山',
  '华山',
  '晋江',
  '禾木',
  '庐山',
  '吐鲁番',
  '顺德',
  '黟县',
  '夹江',
  '海螺沟',
  '色达',
  '海宁',
  '平潭',
  '雁荡山',
  '长乐',
  '浪卡子',
  '易县',
  '潮州',
  '克拉玛依',
  '万宁',
  '邛崃',
  '乐清',
  '当雄',
  '泰顺',
  '建德',
  '黄果树',
  '布尔津',
  '仙居',
  '东阳',
  '茂县',
  '荔波',
  '埔里',
  '桐庐',
  '云林县',
  '澎湖',
  '宁海',
  '延安',
  '石林',
  '阳澄湖',
  '巩义',
  '连州',
  '石狮',
  '三清山',
  '德钦',
  '墨脱',
  '理塘',
  '栾川',
  '东海县',
  '惠东',
  '泸定',
  '礁溪',
  '五台山',
  '慈溪',
  '慈溪',
  '廊坊',
  '张家口',
  '丰宁',
  '若尔盖',
  '武功山',
  '龙脊梯田',
  '格尔木',
  '新都桥',
  '安顺',
  '米林',
  '湟中',
  '陈巴尔虎旗',
  '琉球屿',
  '瑞穗乡',
  '太仓',
  '平湖',
  '雪乡',
  '湛江',
  '阿尔山',
  '登封',
  '雅安',
  '潍坊',
  '博乐',
  '张家港',
  '新沂',
  '塔什库尔干',
  '普兰',
  '龙门',
  '恩施',
  '东极岛',
  '温岭',
  '桃花岛',
  '中卫',
  '瓜州',
  '双廊',
  '丹巴',
  '丰城',
  '包头',
  '巢湖',
  '临海',
  '夏河',
  '珠穆朗玛峰自然保护区',
  '诸暨',
  '昌都',
  '扎兰屯',
  '仪征',
  '楠溪江',
  '松潘',
  '根河',
  '武义',
  '巴音布鲁克',
  '湟源',
  '库尔勒',
  '正定',
  '库车',
  '兰屿',
  '凯里',
  '马祖',
  '崂山',
  '启东',
  '沙坡头',
  '乳源',
  '犍为',
  '额济纳旗',
  '兴城',
  '揭阳',
  '柳州',
  '江门',
  '太湖',
  '八宿',
  '盐城',
  '黄龙',
  '遵义',
  '黑水县',
  '曲阜',
  '赤峰',
  '郎木寺',
  '阳江',
  '德清',
  '英德',
  '郴州',
  '梵净山',
  '山南',
  '灌云',
  '山海关',
  '文昌',
  '如皋',
  '如皋',
  '井陉',
  '临汾',
  '那曲',
  '可可西里',
  '乌兰察布',
  '金川',
  '海拉尔',
  '新昌',
  '休宁',
  '番禺',
  '陵水',
  '农安',
  '吉首',
  '喜洲',
  '迭部',
  '咸阳',
  '龙海',
  '拉孜',
  '建水',
  '淳安',
  '绵阳',
  '西岭雪山',
  '束河',
  '兴隆',
  '连南',
  '阿拉善盟',
  '新源',
  '天水',
  '剑川',
  '睢宁',
  '涞水',
  '普洱',
  '巽寮湾',
  '德令哈',
  '南靖',
  '勐腊',
  '岳阳',
  '阿克苏',
  '红原',
  '霞浦',
  '汕尾',
  '野三坡',
  '野三坡',
  '普者黑',
  '唐山',
  '宽甸',
  '聂拉木',
  '西昌',
  '南戴河',
  '元阳',
  '牙克石',
  '榆林',
  '甘孜县',
  '察隅',
  '平山',
  '吐鲁番市',
  '鄂尔多斯',
  '札达',
  '洱源',
  '新郑',
  '澄江',
  '西江苗寨',
  '连江',
  '闽侯',
  '巴塘',
  '哈密',
  '宝鸡',
  '南浔',
  '安图',
  '南澳岛',
  '大兴安岭',
  '冈仁波齐',
  '大兴安岭',
  '昭苏',
  '德阳',
  '徽州',
  '宜宾',
  '永嘉',
  '惠安',
  '伊宁市',
  '亚丁神山',
  '雨崩',
  '哈巴河',
  '肇兴侗寨',
  '黔西南州',
  '永泰',
  '宁蒗',
  '武当山',
  '福清',
  '安溪',
  '汉中',
  '铜仁',
  '如东',
  '芜湖',
  '无锡灵山',
  '武隆',
  '鲁朗',
  '小金县',
  '和顺',
  '德天瀑布',
  '从化',
  '门源',
  '青岩古镇',
  '锡林郭勒盟',
  '本溪',
  '永康',
  '崇左',
  '木兰围场',
  '赵县',
  '特克斯',
  '永登',
  '雅江',
  '芒康',
  '衡山',
  '广元',
  '赣州',
  '襄阳',
  '芒市',
  '眉山',
  '衡阳',
  '东营',
  '嵊州',
  '抚松',
  '庐江',
  '兰溪',
  '平阳',
  '双流',
  '祁连',
  '黎平',
  '崇州',
  '五常',
  '弥勒市',
  '浏阳',
  '河源',
  '衢州',
  '长兴',
  '长海',
  '井冈山',
  '龙口',
  '花都',
  '然乌',
  '瑞丽',
  '龙岩',
  '灵石',
  '齐齐哈尔',
  '阿克塞',
  '阿拉善左旗',
  '遂昌',
  '旅顺',
  '毕节',
  '忻州',
  '茂名',
  '泰州',
  '和田',
  '宁德',
  '德格',
  '渭南',
  '梅州',
  '龙井市',
  '百色',
  '临沂',
  '邯郸',
  '淮安',
  '宁安',
  '庄河',
  '仲巴',
  '南安',
  '合作',
  '巍山',
  '萧山',
  '祁县',
  '防城港',
  '海北州',
  '霍林郭勒',
  '乳山',
  '长治',
  '兴义',
  '昌吉',
  '阜康',
  '武威',
  '莆田',
  '介休',
  '增城',
  '阆中',
  '灵武',
  '沙溪',
  '安阳',
  '盘锦',
  '罗平',
  '绥芬河市',
  '碌曲',
  '黄姚古镇',
  '云台山',
  '宣城',
  '荆州',
  '珲春',
  '锦州',
  '枣庄',
  '宁乡',
  '诸葛八卦村',
  '句容',
  '萍乡',
  '开平',
  '和静',
  '连山',
  '韶山',
  '金堂',
  '湖口县',
  '四会',
  '永定',
  '东山岛',
  '浮梁',
  '清新',
  '高邮',
  '霍城',
  '楚雄',
  '莱阳',
  '从江',
  '运城',
  '十堰',
  '朔州',
  '新乡',
  '秀林乡',
  '海阳',
  '漳浦',
  '芙蓉镇',
  '六盘水',
  '蒙自',
  '日土',
  '曲靖',
  '梧州',
  '鹰潭',
  '岱山',
  '敦化',
  '富春江',
  '贺州',
  '营口',
  '奉化',
  '巴音郭楞',
  '榕江',
  '赤水',
  '东台',
  '广汉',
  '浦江县',
  '勐海',
  '济宁',
  '剑河县',
  '丙中洛',
  '色达县',
  '屯溪',
  '伊春',
  '焦作',
  '龙胜',
  '巴丹吉林沙漠',
  '玉树',
  '株洲',
  '怀化',
  '六安',
  '自贡',
  '信阳',
  '图们',
  '儋州',
  '云龙',
  '余杭',
  '安庆',
  '贡嘎山',
  '富阳',
  '邳州',
  '德化',
  '奎屯',
  '抚顺',
  '胶州',
  '怒江州',
  '常德',
  '克什克腾旗',
  '攀枝花',
  '南雄',
  '大庆',
  '云浮',
  '罗布泊',
  '鄯善',
  '云和',
  '吉安',
  '南阳',
  '长泰',
  '湘潭',
  '施秉',
  '道孚',
  '鞍山',
  '玉林',
  '南充',
  '玉林',
  '临夏',
  '室韦',
  '通州',
  '红河州',
  '塔城',
  '泸州',
  '尚志',
  '磐安',
  '郭亮',
  '张北',
  '修水',
  '东兴',
  '马鞍山',
  '三明',
  '龙山',
  '丹阳',
  '池州',
  '黄龙溪古镇',
  '盐源',
  '青田',
  '蛟河市',
  '莎车',
  '巴中',
  '海门',
  '宿迁',
  '尼玛',
  '轮台',
  '绩溪',
  '丁青',
  '蚌埠',
  '三门峡',
  '晋城',
  '佳木斯',
  '东江湖',
  '叶城',
  '武宁',
  '天柱',
  '简阳',
  '左贡',
  '石林彝族自治县',
  '沧州',
  '凉山州',
  '沈家门',
  '弋阳',
  '绥中',
  '木渎',
  '班戈',
  '永修',
  '新安江',
  '许昌',
  '黄石',
  '贵德',
  '台山',
  '兴化',
  '德州',
  '安康',
  '塔公',
  '惠山古镇',
  '泾县',
  '永春',
  '惠山古镇',
  '闽清',
  '墨竹工卡',
  '东方',
  '都匀',
  '措勤',
  '南平',
  '五大连池市',
  '秭归',
  '长阳',
  '沛县',
  '克孜勒苏',
  '库布齐沙漠',
  '巴彦淖尔',
  '黄冈',
  '昭通',
  '溪口',
  '恩和俄罗斯民族乡',
  '比如',
  '聊城',
  '亚东',
  '上林',
  '山丹',
  '黔南州',
  '江山',
  '涿州',
  '萨迦',
  '阳山',
  '德宏州',
  '白银',
  '徐闻',
  '罗源',
  '滁州',
  '格聂',
  '辽阳',
  '奉新',
  '万年县',
  '钦州',
  '莒县',
  '凭祥',
  '乐昌',
  '邢台',
  '兴安盟',
  '内江',
  '文山州',
  '咸宁',
  '靖边',
  '丰都',
  '吕梁',
  '牛背山',
  '海安',
  '广安',
  '余干',
  '龙陵',
  '达州',
  '抚远',
  '遂宁',
  '天台',
  '玉环',
  '蓟县',
  '宁国',
  '狮泉河',
  '崇明岛',
  '富蕴',
  '巫山',
  '白玉',
  '铜鼓',
  '乌海',
  '雷山',
  '镜泊湖',
  '卧龙',
  '铜陵',
  '八美',
  '河池',
  '抚州',
  '商丘',
  '羊八井',
  '五指山市',
  '永州',
  '若羌',
  '靖西',
  '青州',
  '江油',
  '锡林浩特',
  '资兴',
  '荆门',
  '奉节',
  '通化',
  '炉霍',
  '三江侗族自治县',
  '果洛州',
  '龙泉市',
  '樟树市',
  '驻马店',
  '资阳',
  '玛曲',
  '临沧',
  '榆社',
  '铅山',
  '黑河市',
  '淮南',
  '南屏',
  '广丰',
  '孝感',
  '太白山',
  '赤坎古镇',
  '黑龙江鹤岗',
  '诏安',
  '滨海',
  '封开',
  '安宁市',
  '西沙群岛',
  '蔚县',
  '平顶山',
  '宾县',
  '石河子',
  '陇南',
  '塘沽',
  '东川',
  '当阳',
  '亳州',
  '阜平',
  '万州',
  '天门',
  '涪陵',
  '新巴尔虎左旗',
  '三水',
  '石柱',
  '临江',
  '商洛',
  '松原',
  '娄底',
  '碛口',
  '元谋',
  '康平',
  '肥东',
  '浑源',
  '乌兰',
  '阜阳',
  '昌江',
  '六横岛',
  '吴忠',
  '年保玉则',
  '朗县',
  '靖安',
  '达坂城',
  '平凉',
  '乐东',
  '鄱阳县',
  '千山',
  '菏泽',
  '郫县',
  '贵港',
  '海南州',
  '华阴',
  '铁岭',
  '庆元',
  '土默特左旗',
  '高安',
  '阳泉',
  '龙游',
  '玉山县',
  '湄洲岛',
  '邵阳',
  '玛多',
  '桑植',
  '林州',
  '盱眙',
  '沙县'
];
const filteredOptionsRoundFromTrain = computed(() => {
  return citys
    .filter((city) => city.includes(RoundFromTrain.value))
    .map((city) => ({
      label: city,
      value: city
    }))
})

const filteredOptionsRoundToTrain = computed(() => {
  return citys
    .filter((city) => city.includes(RoundToTrain.value))
    .map((city) => ({
      label: city,
      value: city
    }))
})
const filteredOptionsOneFromTrain = computed(() => {
  return citys
    .filter((city) => city.includes(OneFromTrain.value))
    .map((city) => ({
      label: city,
      value: city
    }))
})
const filteredOptionsOneToTrain = computed(() => {
  return citys
    .filter((city) => city.includes(OneToTrain.value))
    .map((city) => ({
      label: city,
      value: city
    }))
})

const handleSelectTrain = (field, value) => {
  if (field === 'RoundFrom') {
    RoundFromTrain.value = value
  } else if (field === 'RoundTo') {
    RoundToTrain.value = value
  } else if (field === 'OneFrom') {
    OneFromTrain.value = value
  } else if (field === 'OneTo') {
    OneToTrain.value = value
  }
}

const checkRoundDepartTrain = () => {
  if (!RoundDepartTrain.value) {
    alert('请先选择出发日期')
  }
}

const TrainSearch = (SelectTrip) => {
  let url = 'https://trains.ctrip.com/webapp/train/list?'
  let fromCode = '',
    toCode = '',
    depdate = '',
    retdate = '',
    GC = 0,
    D = 0
  if (SelectTrip === 'Round') {
    if (
      RoundFromTrain.value === '' ||
      RoundToTrain.value === '' ||
      RoundDepartTrain.value === '' ||
      RoundReturnTrain.value === ''
    ) {
      alert('火车票信息未填写完整')
      return
    } else {
      depdate = new Date(RoundDepartTrain.value).toISOString().split('T')[0]
      retdate = new Date(RoundReturnTrain.value).toISOString().split('T')[0]
      depdate = formatDate(RoundDepartTrain.value)
      retdate = formatDate(RoundReturnTrain.value)
      GC = withGCRound.value ? 1 : 0
      D = withDRound.value ? 1 : 0
      url += `ticketType=1&dStation=${RoundFromTrain.value}&aStation=${RoundToTrain.value}&dDate=${depdate}&rDate=${retdate}`
      RoundFromTrain.value = ''
      RoundToTrain.value = ''
      RoundDepartTrain.value = ''
      RoundReturnTrain.value = ''
    }
  } else if (SelectTrip === 'One') {
    if (
      OneFromTrain.value === '' ||
      OneToTrain.value === '' ||
      OneDepartTrain.value === ''
    ) {
      alert('火车票信息未填写完整')
      return
    }
    depdate = formatDate(OneDepartTrain.value)
    GC = withGCOne.value ? 1 : 0
    D = withDOne.value ? 1 : 0
    url += `ticketType=0&dStation=${OneFromTrain.value}&aStation=${OneToTrain.value}&dDate=${depdate}`
    OneFromTrain.value = ''
    OneToTrain.value = ''
    OneDepartTrain.value = ''
  }

  window.location.href = url
}
</script>

<style scoped>
.TransportButton {
  color: white;
  background-color: rgb(30, 156, 30);
  border-radius: 20px;
  height: 40px;
  font-size: medium;
}

.TransportButton.hover {
  color: green;
  background-color: white;
}

.FlightsMainCard {
  padding-top: 20px;
  margin-top: 30px;
  width: 100vw;
  height: 600px;
  background-image: url(../assets/FlightsBackground.jpg);
  background-size: cover;
  /* Ensures the background image covers the entire container */
  background-repeat: no-repeat;
  /* Prevents the background image from repeating */
  background-position: center center;
  /* Centers the background image */
}

.n-form-item-feedback-wrapper {
  weight: 0px;
}

.FindFlightsButton {
  border-radius: 20px;
  height: 60px;
}

.FlightsIcon {
  width: 20px;
  height: 20px;
}

.FindFlights {
  border-radius: 20px;
  max-width: 600px;
  transform: scale(0.8);
  /* 进行缩放，0.8 表示缩小到 80% */
  transform-origin: top;
  /* 缩放的起点位置 */
  margin: 0 auto;
  float: center;
  background-color: rgba(255, 255, 255, 0.79);
}

.FindFlightsAll {
  max-width: 100vw;
  margin: 0 auto;
}

.FlightsFormItemRow {
  display: flex;
  align-items: center;
  margin: 8px 0;
  gap: 16px;
}

.FlightsLabelInput {
  flex: 1;
}

.FlightsInput {
  margin-left: 10px;
  margin-right: 10px;
  width: 100%;
  height: 50px;
  padding: 0 12px;
  line-height: 50px;
  border-radius: 20px;
}

.preferences {
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
}

.card-tabs .n-tabs-nav--bar-type {
  padding-left: 4px;
}
</style>
