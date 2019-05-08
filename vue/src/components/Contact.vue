<template>
    <div id="Contact">
        <google-map></google-map>
        <contact-me></contact-me>
    </div>
</template>

<script>
import GoogleMap from '@/components/contact/GoogleMap.vue';
import ContactMe from '@/components/contact/ContactMe.vue';

export default {
  components: {
    googleMap : GoogleMap,
    contactMe : ContactMe
  }
}
</script>
