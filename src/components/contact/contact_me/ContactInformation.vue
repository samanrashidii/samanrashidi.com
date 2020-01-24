<template>
    <div class="reveal">
        <h3 class="inner-title information-icon">{{Contact.subtitle1}}</h3>
        <div class="contact-info">
            <ul>
                <li><strong class="mobile-icon">{{Contact.user.mobileText}}:</strong> <a itemprop="telephone" :href="'tel:'+Contact.user.mobile"> {{Contact.user.mobile}}</a> | <a itemprop="telephone" :href="'tel:'+Contact.user.mobile2"> {{Contact.user.mobile2}}</a></li>
                <li><strong class="email-icon">{{Contact.user.emailText}}:</strong> <a :href="'mailto:'+Contact.user.email"><span itemprop="email"> {{Contact.user.email}}</span></a></li>
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
