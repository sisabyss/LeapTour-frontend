<template>
  <div>Powered by AI</div>
  <div>
    <div>Where do you want to go?</div>
    <div
      style="
        display: flex;
        flex-direction: row;
        border: solid 1px black;
        height: 50px;
        width: 500px;
      "
    >
      <div @click="search">
        <img src="../assets/search.png" alt="搜索" style="width: 40px; height: 40px" />
      </div>
      <div>
        <input type="text" style="width: auto; height: 48px" v-model="Data.searchContent" />
      </div>
    </div>
  </div>
  <div></div>
</template>

<script setup>
import { reactive } from 'vue'
import { OpenAI } from 'openai'
import { useRouter } from 'vue-router'

const router = useRouter()
//页面数据
const Data = reactive({
  searchContent: ''
})

async function search() {
  console.log(Data.searchContent)
  let AIGC = await getPlanFromAI(Data.searchContent)
  console.log('before:')
  console.log(router)
  router.push({
    path: '/ai_page',
    query: {
      AIGC: AIGC,
      addr: Data.searchContent
    }
  })
  console.log('after:')
  console.log(router)
  router.go(1)
  console.log('end')
}

async function getPlanFromAI(addr) {
  console.log('开始获取...')

  const client = new OpenAI({
    apiKey:
      'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1c2VyLWNlbnRlciIsImV4cCI6MTcyNzY4NjcwMiwiaWF0IjoxNzE5OTEwNzAyLCJqdGkiOiJjcTFzMmJocDJrMTIycjAzZDA1MCIsInR5cCI6InJlZnJlc2giLCJzdWIiOiJjb3ZvNnFpdG5uMHF0MzRqNWZjMCIsInNwYWNlX2lkIjoiY292bzZxaXRubjBxdDM0ajVmYmciLCJhYnN0cmFjdF91c2VyX2lkIjoiY292bzZxaXRubjBxdDM0ajVmYjAifQ.rr2TZbstwoT6Ts2Ce8yh4gLDR9zUO9SCHmLO2tp9Z76v4YhNwD3SNUgbHu6uJ8T0yycjXrluuQ9_n1gYhrwzOw',
    baseURL: 'http://localhost:8000/v1',
    dangerouslyAllowBrowser: true
  })

  /* return new Promise((resolve,reject)=>{

    }) */

  try {
    const completion = await client.chat.completions.create({
      model: 'moonshot-v1-32k',
      messages: [
        {
          role: 'system',
          content:
            '你是一个旅游向导，熟悉世界各地的旅游景点。请你根据用户的旅游地点，帮助用户制订一个详细的旅游计划。请将整个回答放在一个JSON对象里面，首先对用户旅游地点做一个250字左右介绍，放在introduce里面，然后的请你给出三天的旅游计划，每天去三个景点，尽量每一天的景点相关且靠近放在这样的JSON格式里面：{Day_1:{attraction_1:{name:"",description:""}},Day_2:{},Day_3:{}}。'
        },
        {
          role: 'user',
          content: '你好，我希望在这几天去' + addr + '旅游，你能帮我制订一个旅游计划吗？'
        },
        { role: 'assistant', content: '{', partial: true }
      ],
      temperature: 0.3
    })
    console.log(completion.choices[0].message.content)
    return completion.choices[0].message.content
  } catch (error) {
    console.error('Error fetching plan from AI: ', error)
    return error
  }
}
</script>
