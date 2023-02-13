<script setup lang="ts">
import { ref } from "vue";
import BaseInfo from "./components/BaseInfo.vue";
import CollectInfo from "./components/CollectInfo.vue";

const step = ref(0);
const submitModel = ref({});
const changeStep = (direction: any, model: any) => {
  if (direction === "forward" || direction === "submit") {
    submitModel.value = {
      ...submitModel.value,
      ...model,
    };
    console.log(submitModel.value);

    // if (direction === "submit") {
    //   submitForm();
    //   return;
    // }
    step.value += 1;
  } else if (direction === "backward") {
    step.value -= 1;
  }
};
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="steps">
      <el-steps :active="step" finish-status="success" align-center>
        <el-step title="第一步" description="输入基本信息" />
        <el-step title="第二步" description="开始测量" />
        <el-step title="第三步" description="确认结果并上传" />
      </el-steps>
    </div>
    <keep-alive>
      <BaseInfo v-if="step === 1" @change-step="changeStep" />
      <CollectInfo v-else-if="step === 0" @change-step="changeStep" />
    </keep-alive>
  </div>
</template>

<style scoped>
.steps {
  width: 500px;
  margin-bottom: 76px;
}
</style>
