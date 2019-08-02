<template>
<div>
    <Header title="我的电影"/>
    <Login />
    <Tabbar />
</div>
    
</template>

<script>
import Header from '@/components/Heade';
import Tabbar from '@/components/Tabbar';
import Login from './Login'
export default {
name:'mine',
components:{
    Header,
    Tabbar,
    Login
}
}
</script>

<style>

</style>
