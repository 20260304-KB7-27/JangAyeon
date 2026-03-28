<template>
  <li><input type="checkbox" :checked="checked" />{{ name }}</li>
</template>

<!--setup을 사용하지 않았을 때
<script>
import {ref} from "vue";

export default {
    name: "CheckboxItem",
    setup() {
        const checked = ref(false);

        return {
            checked,
        }
    }
}

</script>
-->

<!--setup 사용 시-->
<script setup>
//defineProps : 부모요소에서 전달 받은 Props를 정의하는 함수

//유효성 검사
defineProps({
  id: [Number, String], //문자열과 숫자형 타입 체크
  name: {
    type: String,
    required: true,//기본적으로 false
  },
  checked: {
    type: Boolean,
    default: true,//기본값 설정
  },
});
</script>

<style lang="scss" scoped></style>
