<template>
    <div class="cue-card" v-if="showCard">
        <div class="cue-card-wrap">
            <div class="cue-card-title" v-if="title">{{title}}</div>
            <div class="cue-card-content">
                <slot></slot>
            </div>
            <div class="cue-card-footer" slot="footer">
                <x-button class="cue-card-btn" @click.native="handleClose">我知道了</x-button>
            </div>
        </div>
    </div>
</template>
<script>
  import {XButton} from 'vux';
  export default{
    props:['title','show'],
    components:{XButton},
    data(){
      return {
        showCard: false
      }
    },
    beforeMount: function () {
      this.showCard = this.show || false;
    },
    watch:{
      show: function (newValue) {
        this.showCard = newValue;
      }
    },
    methods:{
      handleClose: function () {
        this.$emit('closeCue',false);
        this.showCard = false;
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .cue-card{
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.4);
        justify-content: center;
        z-index: 10;
        &-wrap{
            align-self: center;
            width: 90%;
            background-color: #fff;
            border-radius: 0.06rem;
        }
        &-title{
            height: 0.9rem;
            line-height: 0.9rem;
            text-align: center;
            background-color: #f2f2f2;
            font-size: 14px;
        }
        &-content{
            padding: 0.3rem 0.36rem;
            color: #998A87;
            font-size: 12px;
            h4{
                margin-bottom: 0.2rem;
            }
            p{
                line-height: 1.5;
            }
        }
        &-btn{
            width: 90%;
            margin-bottom: 0.2rem;
            font-size: 16px;
        }
    }
</style>