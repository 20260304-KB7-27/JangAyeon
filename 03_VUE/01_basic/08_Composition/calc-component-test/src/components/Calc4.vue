<template>
  <div>
    X : <input type="text" v-model.number="state.x" /><br />
    Y : <input type="text" v-model.number="state.y" /><br />
  </div>

  <div>결과 : {{ result }}</div>
</template>

<script>
import { ref, reactive, computed } from 'vue';

export default {
  name: 'Calc4',

  setup() {
    // const x = ref(10);
    // const y = ref(10);
    // const result = ref(20);

    //객체를 반응형으로 변환
    const state = reactive({x : 10, y : 10});


    //computed : 의존하는 반응형 데이터가 변경될 때만 자동으로 재계산
    // -> 결과가 캐싱
    // 읽기 전용
    const result = computed(() => {
      return state.x + state.y// 결과값이 바뀌었을떄
    }
  )
    /*
    reactive()
    - 객체 전용 반응형 API (Object, Array, Map, Set)
    - 속성에 직접 접근 ([객체명].[속성명])
    - Proxy로 반응형 주입
    
    ref() 
    - 모든 타입 가능 (원시 값도 포함 num)
    - .value로 접근 ([반응형데이터명].value)
    - Wrapper형태로 반응형 객체로 감싸 반응형을 주입함.
    */

    return {

      state,
      result,
      
    };
  },
};
</script>

<style scoped></style>
