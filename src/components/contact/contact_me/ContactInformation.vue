<template>
    <div class="reveal">
        <div class="contact-info">
            <ul>
                <li>
                    <strong class="email-icon">{{Contact.user.emailText}}:</strong> <a :href="'mailto:'+Contact.user.email"><span itemprop="email"> {{Contact.user.email}}</span></a>
                </li>
                <li class="socials">
                    <a v-for="(social, index) in Contact.socials" :key="index" class="social-icon" :class="social.name" :href="social.url"  target="_blank"></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  computed: {
      ...mapGetters([
          'Contact',
      ])
  }
};
</script>
