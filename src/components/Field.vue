<template lang="html">
  <div class="yt-field">
    <input :id="id" :type="type" :name="name" :value="value" :placeholder="placeholder" v-model="inputValue">
    <div class="slot-ele">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id','type', 'name', 'value', 'placeholder','model'],
  data() {
    return {
      inputValue:'',
    }
  },
  watch:{
    inputValue(val){
      this.model(this.name,val)
    }
  }
}
</script>

<style lang="scss">
  .yt-field{
    width:100%;
    position: relative;
    padding-left: 20px;
    background: #fff;
    height: .44rem;
    border-bottom: 1px solid #ccc;
    display:flex;
    input{
      height: 100%;
      width: 60%;
      color: #333;
      border:0;
      height: 100%;
    }
    .slot-ele{
      flex:1;
      heigth:100%;
      display:flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
