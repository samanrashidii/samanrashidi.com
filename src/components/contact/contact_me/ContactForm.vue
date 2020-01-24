<template>
    <div class="reveal">
        <h3 class="inner-title form-icon">{{Contact.subtitle2}}</h3>
        <div class="thank-you has-slime-2" :class="{'active' : formSubmit}">
            <div class="thank-you-box">
                <div class="thank-you-inner-box">
                    <img :src="getImgUrl(Contact.thankyou.icon)" :alt="Contact.thankyou.iconAlt" />
                    <h2>{{Contact.thankyou.title}} <span class="site-color">{{contact.fullName}}</span> <br /> {{Contact.thankyou.subtitle}}</h2>
                    <p>{{Contact.thankyou.description}} <span class="site-color">{{contact.mobileNumber}}</span></p>
                </div>
            </div>
        </div>
        <form action="#" method="POST" accept-charset="utf-8" class="contact-form" @submit.prevent="nextStep">
            <div class="field-wrapper">
                <span class="input input--kozakura">
                    <input type="text" class="input__field input__field--kozakura" v-validate="'required|min:3'" :class="{'active': addActive(contact.fullName)}" id="full_name" name="full_name" v-model="contact.fullName" />
                    <label class="input__label input__label--kozakura" for="full_name">
                        <span class="input__label-content input__label-content--kozakura" :data-content="Contact.form.name">{{Contact.form.name}}</span>
                    </label>
                    <svg class="graphic graphic--kozakura" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
                        <path d="M1200,9c0,0-305.005,0-401.001,0C733,9,675.327,4.969,598,4.969C514.994,4.969,449.336,9,400.333,9C299.666,9,0,9,0,9v43c0,0,299.666,0,400.333,0c49.002,0,114.66,3.484,197.667,3.484c77.327,0,135-3.484,200.999-3.484C894.995,52,1200,52,1200,52V9z"/>
                    </svg>
                </span>
                <span class="input input--kozakura">
                    <input type="email" class="input__field input__field--kozakura" v-validate="'required|email'" :class="{'active': addActive(contact.emailAddress)}" id="email_address" name="email_address" v-model="contact.emailAddress" />
                    <label class="input__label input__label--kozakura" for="email_address">
                        <span class="input__label-content input__label-content--kozakura" :data-content="Contact.form.email">{{Contact.form.email}}</span>
                    </label>
                    <svg class="graphic graphic--kozakura" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
                        <path d="M1200,9c0,0-305.005,0-401.001,0C733,9,675.327,4.969,598,4.969C514.994,4.969,449.336,9,400.333,9C299.666,9,0,9,0,9v43c0,0,299.666,0,400.333,0c49.002,0,114.66,3.484,197.667,3.484c77.327,0,135-3.484,200.999-3.484C894.995,52,1200,52,1200,52V9z"/>
                    </svg>
                </span>
                <span class="input input--kozakura">
                    <input type="tel" class="input__field input__field--kozakura" v-validate="'required|decimal|min:11|max:13'" :class="{'active': addActive(contact.mobileNumber)}" id="mobile_number" name="mobile_number" v-model="contact.mobileNumber" />
                    <label class="input__label input__label--kozakura" for="mobile_number">
                        <span class="input__label-content input__label-content--kozakura" :data-content="Contact.form.mobile">{{Contact.form.mobile}}</span>
                    </label>
                    <svg class="graphic graphic--kozakura" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
                        <path d="M1200,9c0,0-305.005,0-401.001,0C733,9,675.327,4.969,598,4.969C514.994,4.969,449.336,9,400.333,9C299.666,9,0,9,0,9v43c0,0,299.666,0,400.333,0c49.002,0,114.66,3.484,197.667,3.484c77.327,0,135-3.484,200.999-3.484C894.995,52,1200,52,1200,52V9z"/>
                    </svg>
                </span>
                <span class="input input--kozakura">
                    <input type="text" class="input__field input__field--kozakura" v-validate="'required|min:3'" :class="{'active': addActive(contact.subject)}" id="subject" name="subject" v-model="contact.subject" />
                    <label class="input__label input__label--kozakura" for="subject">
                        <span class="input__label-content input__label-content--kozakura" :data-content="Contact.form.subject">{{Contact.form.subject}}</span>
                    </label>
                    <svg class="graphic graphic--kozakura" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
                        <path d="M1200,9c0,0-305.005,0-401.001,0C733,9,675.327,4.969,598,4.969C514.994,4.969,449.336,9,400.333,9C299.666,9,0,9,0,9v43c0,0,299.666,0,400.333,0c49.002,0,114.66,3.484,197.667,3.484c77.327,0,135-3.484,200.999-3.484C894.995,52,1200,52,1200,52V9z"/>
                    </svg>
                </span>
                <span class="input has-checkbox ac-custom ac-checkbox ac-boxfill">
                    <input id="cb10" name="urgent" type="checkbox" value="Yes" v-model="contact.urgent"><label for="cb10">{{Contact.form.checkbox1}}</label>
                </span>
                <span class="input has-checkbox ac-custom ac-checkbox ac-boxfill">
                    <input id="cb11" name="robot_test" type="checkbox" value="True" v-validate="'required'" v-model="contact.robot_test">
                    <label for="cb11">
                        <span v-if="!contact.robot_test">
                            {{Contact.form.checkbox2}}
                        </span>
                        <span v-else>
                            {{Contact.form.checkbox2Active}}
                        </span>
                    </label>
                </span>
            </div>
            <div class="message">
                <label for="message">&nbsp;</label>
                <textarea name="message" id="message" v-validate="'required|min:20'" :class="{'active': addActive(contact.message)}" :placeholder="Contact.form.message" v-model="contact.message"></textarea>
            </div>
            <input type="text" name="samanira_secure" class="samanira_secure" />
            <input type="submit" :value="Contact.form.button">
        </form>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';

var axios = require('axios');
import {mapGetters} from 'vuex';
export default {
    data(){
        return {
            contact : {
                fullName : '',
                emailAddress : '',
                mobileNumber : '',
                subject : '',
                urgent : '',
                robotTest : '',
                message : '',
            },
            formSubmit : false
        }
    },
    computed: {
        ...mapGetters([
            'Contact',
        ])
    },
    methods:{
        sendEmail: (e) => {
            console.log(e.target)
            return emailjs.sendForm('gmail', 'contact_form', e.target, 'user_QpKRTvucCWKNw4lTdEKuc')
        },
        nextStep(e) {
            var vm = this;
            this.$validator.validateAll().then((result) => {
                if (result) {
                    this.sendEmail(e)
                        .then((res) => {
                            console.log(res)
                            this.formSubmit = true;
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                }
            });
        },
        addActive(value){
            if(value.length > 0){
                return true
            } else{
                return false
            }
        },
        getImgUrl(pic) {
            return require(`@/assets/images/icons/${pic}`);
        }
    }
};
</script>
