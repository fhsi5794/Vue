<template>
  <div class="home">
    <h1 >Hello everyone</h1>
    <button id="smail" @click="toggle">smail {{ smail }}</button>
    <p v-show="show">=v=</p>
  </div>
</template>

<script>
export default{
  data() {
    return{
      show: false,
      smail: "off"
    }
  },
  methods: {
    toggle: function() {
      this.show = !this.show;
      if(this.show)
      {
        this.smail="on";
      }
      else
      {
        this.smail="off";
      }
    }
  }
}
</script>
<style>
</style>