<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
name:'Scroller',
props:{
    handleToScroll:{
        type:Function,
        default:function(){}
    },
    handleToTouchEnd:{
        type:Function,
        default:function(){}
    }
},
mounted(){
    var scroll=new Bscroll(this.$refs.wrapper,{
        tap:true,
        // probelType:2
    });
    scroll.on('touchEnd',(pos)=>{
        this.handleToTouchEnd(pos)
    })
    scroll.on('scroll',(pos)=>{
        this.handleToScroll(pos)
    })
}
}
</script>

<style scoped>
.wrapper{
    height: 100%;
}
</style>
