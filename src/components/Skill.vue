<template>
    <div class="skill" :class="skill.floating">
        <img :src="require(`@/assets/images/skills/${skill.url}`)" :alt="skill.name">
    </div>
</template>

<script>
export default {
    props: {
        skill: {
            type: Object,
            default: ''
        }
    }
}
</script>

<style scoped>
.floating-1{
    animation-name:floating;
    animation-delay:-2.8s;
    animation-duration:4s;
    animation-direction:alternate;
    animation-iteration-count:infinite;
    animation-play-state:running;
    animation-timing-function:ease-in-out;
    transition-delay:.4s
}
.floating-2{
    animation-name:floating-reverse;
    animation-delay:-2.4s;
    animation-duration:4.4s;
    animation-direction:alternate;
    animation-iteration-count:infinite;
    animation-play-state:running;
    animation-timing-function:ease-in-out;
    transition-delay:.2s
}

@keyframes floating{
    from{
        transform:translateY(10px) rotate3d(0,0,1,8deg)
    }
    to{
        transform:translateY(-10px) rotate3d(0,0,1,0deg)
    }
}

@keyframes floating-reverse{
    from{
        transform:translateY(12px) rotate3d(0,0,1,-8deg)
    }
    to{
        transform:translateY(-12px) rotate3d(0,0,1,0deg)
    }
}
</style>