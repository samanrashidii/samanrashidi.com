<template>
  <div id="app">
    <transition name="slide" mode="out-in">
      <router-view :key="$route.fullPath"/>
    </transition>
  </div>
</template>

<style>

#app,
.index{height:100%;}

.slide-enter-active{
  animation: slide-in 400ms ease-out forwards;
}

.slide-leave-active{
  animation: slide-out 400ms ease-out;
}

@keyframes slide-in {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}

@keyframes slide-out {
  from{
    opacity: 1;
  }
  to{
    opacity: 0;
  }
}
</style>
