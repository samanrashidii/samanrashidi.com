<template>
    <div
        class="skill"
        :class="skill.floating"
    >
        <img
            :src="require(`@/assets/images/skills/${skill.url}`)"
            :alt="skill.name"
            :title="skill.name"
        >
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
    animation-delay:-3s;
    animation-duration:4s;
    animation-direction:alternate;
    animation-iteration-count:infinite;
    animation-play-state:running;
    animation-timing-function:ease-in-out;
    transition-delay:.4s
}
.floating-2{
    animation-name:floating-reverse;
    animation-delay:-2.6s;
    animation-duration:4.4s;
    animation-direction:alternate;
    animation-iteration-count:infinite;
    animation-play-state:running;
    animation-timing-function:ease-in-out;
    transition-delay:.2s
}

@keyframes floating{
    from{
        transform:translateY(10px) rotate3d(0,0,1,10deg)
    }
    to{
        transform:translateY(-10px) rotate3d(0,0,1,-2deg)
    }
}

@keyframes floating-reverse{
    from{
        transform:translateY(15px) rotate3d(0,0,1,-10deg)
    }
    to{
        transform:translateY(-15px) rotate3d(0,0,1,2deg)
    }
}
</style>