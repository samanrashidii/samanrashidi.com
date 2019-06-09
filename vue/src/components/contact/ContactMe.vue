<template>
    <div id="ContactMe" class="has-shape shape-5 has-slime-3 center-aligned ">
        <div class="frame">
            <div class="section-title">
                <span>{{sectionSub}}</span>
                <h1>{{sectionTitle}}</h1>
            </div>
            <div class="section-content">
                <contact-information></contact-information>
                <contact-form></contact-form>
            </div>
        </div>
    </div>
</template>

<script>
import ContactInformation from '@/components/contact/contact_me/ContactInformation.vue';
import ContactForm from '@/components/contact/contact_me/ContactForm.vue';

export default {
  data(){
      return {
        sectionSub: 'feel free to',
        sectionTitle: 'Contact Me',
      }
  },
  components: {
    contactInformation: ContactInformation,
    contactForm: ContactForm,
  },
};
</script>
