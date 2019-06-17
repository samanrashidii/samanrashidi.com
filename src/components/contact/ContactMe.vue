<template>
    <div id="ContactMe" class="has-shape shape-5 has-slime-3 center-aligned ">
        <div class="frame">
            <div class="section-title">
                <span>{{Contact.sectionSub}}</span>
                <h1>{{Contact.sectionTitle}}</h1>
            </div>
            <div class="section-content">
                <contact-information/>
                <contact-form/>
            </div>
        </div>
    </div>
</template>

<script>
import ContactInformation from '@/components/contact/contact_me/ContactInformation.vue';
import ContactForm from '@/components/contact/contact_me/ContactForm.vue';
import {mapGetters} from 'vuex';

export default {
  computed: {
      ...mapGetters([
          'Contact',
      ])
  },
  components: {
    contactInformation: ContactInformation,
    contactForm: ContactForm,
  },
};
</script>
