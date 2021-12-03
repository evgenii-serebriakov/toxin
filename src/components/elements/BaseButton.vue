<template>
  <button 
    type="button" 
    class="btn btn--primary text-uppercase fw-bold"
  > 
    <span class="btn__text">{{ text }}</span>
    <i class="btn__icon">
      <ArrowForwardSVG  class="btn__icon-svg" />
    </i>
  </button>

</template>

<script>
import ArrowForwardSVG from '@/assets/svg/arrow_forward.svg';

export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      default: 'Push'
    }
  },
  components: {
    ArrowForwardSVG
  }
};
</script>

<style lang="scss">
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background: $purpleGradient;
    border: none;
    border-radius: 40px;
    width: 100%;
    font-size: 12px;
    color: #fff;

    &:hover {
      color: #fff;
    }

    &--primary {
      padding: 15px 20px;
    }

    &__text {
      flex: 1 0 auto;
    }

    &__icon {
      display: inline-block;
      width: 24px;
      height: 24px;
      fill: white;
    }
  }
</style>