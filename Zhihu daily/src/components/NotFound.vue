<template>
    <div>
        <p>您请求的页面不存在</p>
    </div>
</template>
<script>
export default {
    methods:{
        back(){
            setTimeout(() => {
                this.$router.go(-1)
        },2000)
    }},
    created(){
        this.back();
    }
}
</script>
<style scoped>
    p{
        font-size: 18px;
        margin-top: 30px;
        color:#000;
    }
</style>
