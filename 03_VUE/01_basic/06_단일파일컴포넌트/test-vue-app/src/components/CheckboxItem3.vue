<template>
  <li><input type="checkbox" :checked="idol.checked" />{{ idol.name }}</li>
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
  idol: {
    type: Object,
    required: true,

    // Vue 공식 기능
    // 부모가 props를 전달할 때마다 함수가 호출된다.
    // 반환되는 값이 false면 콘솔에 경고를출력해준다.
    validator: (value) => {
      return (
        (typeof value.id === 'number' || typeof value.id === 'string') &&
        typeof value.name === 'string' &&
        typeof value.checked === 'boolean'
      );
    },
  },
});
</script>

<style lang="scss" scoped></style>
