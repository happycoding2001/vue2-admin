<template>
    <div>
      <ul>
        <li v-for="(item,index) in items" :key="index">
          <slot :a='item' :num="3"></slot>
        </li>
      </ul>
    </div>
  </template>
   
  <script>
  export default {
    data () {
      return {
        items:['Webkit','Gecko','Trident','Blink']
      }
    }
  }
  </script>