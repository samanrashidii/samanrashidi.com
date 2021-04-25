<template>
    <div class="navigation">
        <div class="menu">
            <div class="menu-wrapper">
                <ul class="menu-items">
                    <li
                        class="menu-item"
                        v-for="(menuItem, index) in Menu"
                        :key="index"
                    >
                        <button
                            type="button"
                            class="menu-item-button"
                            :onClick="`JavaScript:$('#${menuItem}').animatescroll({scrollSpeed:1200,easing:'easeInExpo'})`"
                        >
                            <i
                                class="menu-item-icon"
                                :class="menuItem.toLowerCase()"
                                :title="menuItem"
                            />
                        </button>
                        <div
                            class="menu-item-bounce"
                        />
                    </li>
                </ul>
                <button
                    class="menu-toggle-button"
                >
                    <i
                        class="menu-toggle-icon plus"
                    />
                </button>
            </div>
        </div>
        <svg
            class="svg-element"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="800"
        >
            <defs>
            <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
            </filter>
            </defs>
        </svg>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  computed: {
      ...mapGetters([
          'Menu'
      ])
  }
}
</script>
