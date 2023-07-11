<template>
<div id="app">
    <child>
        <template slot-scope="t">
            <p >{{t.num}}-{{t.a}}</p>
        </template>
    </child>
</div>
</template>

  
<script>
import child from './child';
export default {
    name: 'app',
    components: {
        child
    }
}
</script>

<style lang="scss" scoped>

</style>
