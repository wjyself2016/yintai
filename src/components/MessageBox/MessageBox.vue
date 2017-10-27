<template lang="html">
  <div class="yt-msgbox" v-if="isShowMessageBox">
    <div class="yt-msgbox-tle">
      {{title}}
    </div>
    <div class="yt-msgbox-msg">
      <p>{{message}}</p>
    </div>
    <div class="yt-msgbox-btn" v-if="type === 'confirm'">
      <div @click="closeMessageBox" class="yt-msgbox-cbtn">
        {{cancelButtonText}}
      </div>
      <div @click="" class="yt-msgbox-sbtn">
        {{confirmButtonText}}
      </div>
    </div>
    <div class="yt-msgbox-btn" v-if="type === 'alert'">
      <div @click="closeMessageBox" class="yt-msgbox-sbtn">
        {{confirmButtonText}}
      </div>
    </div>
  </div>
</template>

<script>
var CONFIRM_TEXT = '确定';
var CANCEL_TEXT = '取消';

export default {
  data() {
    return {
      confirmButtonText: CONFIRM_TEXT,
      cancelButtonText: CANCEL_TEXT,
      title:'',
      message:'',
      isShowMessageBox:'',
      type:'',
    }
  },
  methods:{
    closeMessageBox(){
      this.isShowMessageBox = false
    }
  }
}
</script>

<style lang="scss">
.yt-msgbox {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 80%;
    max-width: 3.6rem;
    border-radius: 0.06rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    .yt-msgbox-tle {
        padding: 0.15rem 0.15rem 0;
        font-size: 0.2rem;
        text-align: center;
    }
    .yt-msgbox-msg {
        p {
            text-align: center;
            padding: 0.3rem 0.15rem;
            font-size: 0.15rem;
            color: rgb(102, 102, 102);
            word-wrap: break-word;
            word-break: break-all;
        }
    }
    .yt-msgbox-btn {
        display: flex;
        flex-direction: row;
        border-top: 1px solid #ccc;
        .yt-msgbox-cbtn,
        .yt-msgbox-sbtn {
            flex: 1;
            text-align: center;
            padding: 0.1rem;
        }
        .yt-msgbox-cbtn {
            border-right: 1px solid #ccc;
        }
    }
}
</style>
