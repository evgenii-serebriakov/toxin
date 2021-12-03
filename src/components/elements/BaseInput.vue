<template>
  <input
    :id="idAttr"
    :class="classAttr"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
  >
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    idAttr: {
      type: String,
      default: ''
    },
    classAttr: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    }
  }
};
</script>
