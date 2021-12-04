<template>
  <div class="checkbox">
    <input 
      :id="idAttr"
      :disabled="disabled"
      class="checkbox__input" 
      type="checkbox" 
      name="remember"
    >
    <label 
      :for="idAttr" 
      class="checkbox__label"
    >
      <span class="checkbox__text">
        {{ text }}
      </span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    idAttr: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  }
};

</script>

<style lang="scss" scoped>
.checkbox {
  &__label {
    position: relative;
    color: #000;
    cursor: pointer;
    font-weight: normal;
    line-height: 30px;
    vertical-align: middle;

    &::before {
      display: inline-block;
      content: " ";
      width: 20px;
      height: 20px;
      border-radius: 4px;
      background-color: #fff;
      color: #fff;
      border: 1px solid #e3e3e3;
      vertical-align: middle;
    }

    &::after {
      position: absolute;
      top: 6.5px;
      left: 0;
      content: " ";
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      border-radius: 4px;
      background-color: #fff;
      color: #fff;
      border: 1px solid #e3e3e3;
      transform: scale(0);
      transition: transform 0.3s;
    }
  }

  &__input {
    display: none;

    &:checked + .checkbox__label::before {
      border: 1px solid transparent;
    }

    &:checked + .checkbox__label::after {
      content: "\2713";
      background-color: #fff;
      color: $purple;
      border: 1px solid $purple;
      transform: scale(1);
    }

    &:disabled + .checkbox__label::before {
      background-color: #eee;
      color: #aaa;
    }
  }

  &__text {
    font-size: 14px;
    color: $darkShade50;
  }
}
</style>