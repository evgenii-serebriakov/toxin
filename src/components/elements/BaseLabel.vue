<template>
  <label 
    :for="idAttr" 
    :class="classAttr"
  >
    {{ text }}
  </label>
</template>

<script>
export default {
  name: 'BaseLabel',
  props: {
    text: {
      idAttr: {
        type: String,
        default: ''
      },
      classAttr: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: 'Label'
      }
    }
  }
};
</script>