<template>
  <div id="app">
    <transition name="slide" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style>

#app,
.index{height:100%;}

.slide-enter-active{
  animation: slide-in 500ms ease-out forwards;
}

.slide-leave-active{
  animation: slide-out 500ms ease-out;
}

@keyframes slide-in {
  from{
    transform:translateY(20px);
    opacity: 0;
  }
  to{
    transform:translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from{
    transform:translateY(0);
    opacity: 1;
  }
  to{
    transform:translateY(20px);
    opacity: 0;
  }
}
</style>
