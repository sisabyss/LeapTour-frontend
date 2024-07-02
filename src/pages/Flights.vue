<template>
    <NavBar />
    <div class="FindFlightsAll">
        <div class="FlightsMainCard">
            <n-card class="FindFlights" title="Find the best flight to Chongqing">
                <n-tabs class="card-tabs" default-value="signin" size="small" animated
                    pane-wrapper-style="margin: 0 -4px">
                    <n-tab-pane name="Round Trip" tab="Round Trip">
                        <n-form size="small">
                            <n-form-item-row class="FlightsFormItemRow">
                                <div class="FlightsLabelInput">
                                    <n-form-item label="From" label-style="font-size:1.3em;">
                                        <n-input class="FlightsInput" placeholder="City or Airport">
                                            <template #prefix>
                                                <n-icon class="FlightsLeft">
                                                    <Location class="FlightsIcon" />
                                                </n-icon>
                                            </template>
                                        </n-input>
                                    </n-form-item>
                                </div>
                                <div class="FlightsLabelInput">
                                    <n-form-item label="To" label-style="font-size:1.3em;">
                                        <n-input class="FlightsInput" placeholder="City or Airport">
                                            <template #prefix>
                                                <n-icon class="FlightsLeft">
                                                    <Location class="FlightsIcon" />
                                                </n-icon>
                                            </template>
                                        </n-input>
                                    </n-form-item>
                                </div>
                            </n-form-item-row>
                            <n-form-item-row class="FlightsFormItemRow">
                                <div class="FlightsLabelInput">
                                    <n-form-item label="Depart" label-style="font-size:1.3em;">
                                        <n-date-picker class="FlightsInput" size="large" v-model:value="timestamp"
                                            type="date" />
                                    </n-form-item>
                                </div>
                                <div class="FlightsLabelInput">
                                    <n-form-item label="Return" label-style="font-size:1.3em;">
                                        <n-date-picker class="FlightsInput" size="large" v-model:value="timestamp"
                                            type="date" />
                                    </n-form-item>
                                </div>
                            </n-form-item-row>
                            <n-form-item-row class="FlightsFormItemRow">
                                <div class="FlightsLabelInput">
                                    <n-form-item label="Travelers" label-style="font-size:1.3em;">
                                        <n-input class="FlightsInput" placeholder="1, Economy">
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
                            <n-checkbox style="font-size:1.3em">Prefer nonstop</n-checkbox>
                            <n-checkbox style="font-size:1.3em">Include nearby airports</n-checkbox>
                        </div>
                        <n-button class="FindFlightsButton" type="primary" block secondary strong>
                            Find flights
                        </n-button>
                    </n-tab-pane>
                    <n-tab-pane name="One-way" tab="One-way">
                        <n-form size="small">
                            <n-form-item-row class="FlightsFormItemRow">
                                <div class="FlightsLabelInput">
                                    <n-form-item label="From" label-style="font-size:1.3em;">
                                        <n-input class="FlightsInput" placeholder="City or Airport">
                                            <template #prefix>
                                                <n-icon class="FlightsLeft">
                                                    <Location class="FlightsIcon" />
                                                </n-icon>
                                            </template>
                                        </n-input>
                                    </n-form-item>
                                </div>
                                <div class="FlightsLabelInput">
                                    <n-form-item label="To" label-style="font-size:1.3em;">
                                        <n-input class="FlightsInput" placeholder="City or Airport">
                                            <template #prefix>
                                                <n-icon class="FlightsLeft">
                                                    <Location class="FlightsIcon" />
                                                </n-icon>
                                            </template>
                                        </n-input>
                                    </n-form-item>
                                </div>
                            </n-form-item-row>
                            <n-form-item-row class="FlightsFormItemRow">
                                <div class="FlightsLabelInput">
                                    <n-form-item label="Depart" label-style="font-size:1.3em;">
                                        <n-date-picker class="FlightsInput" size="large" v-model:value="timestamp"
                                            type="date" />
                                    </n-form-item>
                                </div>
                            </n-form-item-row>
                            <n-form-item-row class="FlightsFormItemRow">
                                <div class="FlightsLabelInput">
                                    <n-form-item label="Travelers" label-style="font-size:1.3em;">
                                        <n-input class="FlightsInput" placeholder="1, Economy">
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
                            <n-checkbox style="font-size:1.3em">Prefer nonstop</n-checkbox>
                            <n-checkbox style="font-size:1.3em">Include nearby airports</n-checkbox>
                        </div>
                        <n-button class="FindFlightsButton" type="primary" block secondary strong>
                            Find flights
                        </n-button>
                    </n-tab-pane>
                </n-tabs>
            </n-card>
        </div>
    </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import { NCard, NTabPane, NTabs, NForm, NButton, NFormItemRow, NInput, NIcon, NFormItem, NCheckbox, NDatePicker } from 'naive-ui';
import { Location, Group } from '@vicons/carbon';

</script>

<style scoped>
.FlightsMainCard {
    padding-top: 20px;
    margin-top: 50px;
    width: 100vw;
    height: 600px;
    background-image: url(../assets/BackgroundForTest.jpeg);
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
    transform-origin: top left;
    /* 缩放的起点位置 */
    margin: 0 auto;
    float: center;
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
