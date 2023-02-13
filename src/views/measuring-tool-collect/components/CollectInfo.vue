<script setup lang="ts">
import { ref, computed } from "vue";

const emits = defineEmits(["changeStep"]);
const onNextClick = async () => {};
const goPrev = () => {
  emits("changeStep", "backward");
};
const displayData = computed(() => {
  return data.value.slice(-7).reverse();
});
const data = ref<string[]>([]);
const isErr = ref(false);
const isMeasuring = ref(false);
const target = ref(0);
const min = ref(0);
const max = ref(0);
const tool = ref("");

const handleClick = () => {
  if (isMeasuring.value) {
    window.myApi.startListener();
  } else {
    window.myApi.stopListener();
  }
};
window.myApi.handleMsg((event: any, res: any) => {
  if (res) {
    data.value.push(res.data[0]);
    tool.value = res.sn[0];
  }
});
</script>

<template>
  <div class="flex flex-row">
    <div class="w-80 h-60 border-2 border-black mb-10 flex flex-col">
      <div
        class="header text-center"
        :class="[
          isMeasuring ? 'bg-green-300 text-black' : 'bg-blue-900 text-white',
        ]"
      >
        <span v-if="!isMeasuring">等待测量</span>
        <span v-else="isMeasuring">测量中</span><span>--{{ tool }}</span>
      </div>
      <div
        class="h-28 flex items-center justify-center"
        :class="{ 'bg-red-500': isErr }"
      >
        <span class="text-8xl font-bold">{{
          displayData[0] ? displayData[0] : "------"
        }}</span>
      </div>
      <div class="footer flex-1 flex flex-row">
        <div class="flex-1 border border-black flex flex-col">
          <div class="flex-1">最近6次测量结果</div>
          <!-- 三行两列表格 -->
          <div class="flex-1 flex flex-row">
            <div class="flex-1">
              {{ displayData[1] ? displayData[1] : "------" }}
            </div>
            <div class="flex-1">
              {{ displayData[4] ? displayData[4] : "------" }}
            </div>
          </div>
          <div class="flex-1 flex flex-row">
            <div class="flex-1">
              {{ displayData[2] ? displayData[2] : "------" }}
            </div>
            <div class="flex-1">
              {{ displayData[5] ? displayData[5] : "------" }}
            </div>
          </div>
          <div class="flex-1 flex flex-row">
            <div class="flex-1">
              {{ displayData[3] ? displayData[3] : "------" }}
            </div>
            <div class="flex-1">
              {{ displayData[6] ? displayData[6] : "------" }}
            </div>
          </div>
        </div>
        <div class="flex-1 border border-black"></div>
      </div>
    </div>
    <div class="ml-5 mb-10 w-48 flex flex-col border-2 border-black">
      <div class="header bg-blue-900 text-white text-center">
        <span>操作面板</span>
      </div>
      <div class="flex flex-col">
        <div>
          <span class="text-xs">监听功能：</span>
          <el-switch
            v-model="isMeasuring"
            @change="handleClick"
            active-text="on"
            inactive-text="off"
          />
        </div>
        <div>
          <span class="text-xs"> 测量范围: </span>
          <div class="flex">
            <el-form>
              <el-form-item label="名义值" size="small">
                <el-input
                  v-model="target"
                  placeholder="请输入"
                  size="normal"
                  clearable
                ></el-input>
              </el-form-item>
              <el-form-item label="下限值" size="small">
                <el-input
                  v-model="min"
                  placeholder="请输入"
                  size="normal"
                  clearable
                ></el-input>
              </el-form-item>
              <el-form-item label="上限值" size="small">
                <el-input
                  v-model="max"
                  placeholder="请输入"
                  size="normal"
                  clearable
                ></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <el-form>
    <el-button type="secondary" @click="goPrev">后退</el-button>
    <el-button type="primary" @click="onNextClick">下一步</el-button>
  </el-form>
</template>

<style scoped></style>
