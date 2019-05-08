<template>
    <div class="reveal">
        <h3 class="inner-title information-icon">Contact Information</h3>
        <div class="contact-info">
            <ul>
                <li><strong class="mobile-icon">Mobile Number:</strong> <a itemprop="telephone" :href="'tel:'+user.tel1"> {{user.tel1}}</a> | <a itemprop="telephone" :href="'tel:'+user.tel2"> {{user.tel2}}</a></li>
                <li><strong class="navigation-icon">Address:</strong> <a target="_blank" href="https://www.google.com/maps/@42.4943981,45.451405,6z">Tbilisi, Georgia.</a></li>
                <li><strong class="email-icon">Email Address:</strong> <a :href="'mailto:'+user.email"><span itemprop="email"> {{user.email}}</span></a></li>
                <li class="socials">
                    <a v-for="(social, index) in socials" :key="index" class="social-icon" :class="social.name" :href="social.url"  target="_blank"></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            user: {
                tel1: '+995599399705',
                tel2: '+989128996990',
                email: 'me@samanrashidi.com'
            },
            socials: [
                {
                    name: 'telegram',
                    url: 'https://telegram.me/samanrashidii'
                },
                {
                    name: 'github',
                    url: 'https://github.com/samanrashidii'
                },
                {
                    name: 'linkedin',
                    url: 'https://www.linkedin.com/in/samanrashidii'
                },
                {
                    name: 'instagram',
                    url: 'https://www.instagram.com/samanrashidii'
                },
                {
                    name: 'googleplus',
                    url: 'https://plus.google.com/109638627387819515843'
                },
                {
                    name: 'facebook',
                    url: 'https://www.facebook.com/samanrashidii'
                },
                {
                    name: 'tumblr',
                    url: 'https://samanrashidii.tumblr.com'
                },
                {
                    name: 'twitter',
                    url: 'https://twitter.com/samanrashidii'
                },
                {
                    name: 'pinterest',
                    url: 'https://www.pinterest.com/samanrashidii'
                },
                {
                    name: 'soundcloud',
                    url: 'https://soundcloud.com/samanrashidii'
                },
                {
                    name: 'tripadvisor',
                    url: 'https://www.tripadvisor.com/Profile/SamanRashidii'
                },
            ]
        }
    }
}
</script>
