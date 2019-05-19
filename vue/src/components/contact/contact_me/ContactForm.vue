<template>
    <div class="reveal">
        <h3 class="inner-title form-icon">Contact Form</h3>
        <form action="mail.php" method="POST" accept-charset="utf-8" class="contact-form">
            <div class="thank-you has-slime-2" :class="{'active' : formSubmit}">
                <div class="thank-you-box">
                    <div class="thank-you-inner-box">
                        <img src="images/icons/happy.png" alt="Happy Icon" />
                        <h2>Thank you <span class="site-color">{{contact.fullName}}</span> <br /> for contacting me.</h2>
                        <p>I'll call you as soon as possible on this number : <span class="site-color">{{contact.mobileNumber}}</span></p>
                    </div>
                </div>
            </div>
            <div class="field-wrapper">
                <span class="input input--kozakura">
                    <input type="text" class="input__field input__field--kozakura" v-validate="'required|min:3'" id="full_name" name="full_name" v-model="contact.fullName" />
                    <label class="input__label input__label--kozakura" for="full_name">
                        <span class="input__label-content input__label-content--kozakura" data-content="Full Name">Full Name</span>
                    </label>
                    <svg class="graphic graphic--kozakura" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
                        <path d="M1200,9c0,0-305.005,0-401.001,0C733,9,675.327,4.969,598,4.969C514.994,4.969,449.336,9,400.333,9C299.666,9,0,9,0,9v43c0,0,299.666,0,400.333,0c49.002,0,114.66,3.484,197.667,3.484c77.327,0,135-3.484,200.999-3.484C894.995,52,1200,52,1200,52V9z"/>
                    </svg>
                </span>
                <span class="input input--kozakura">
                    <input type="email" class="input__field input__field--kozakura" v-validate="'required|email'" id="email_address" name="email_address" v-model="contact.emailAddress" />
                    <label class="input__label input__label--kozakura" for="email_address">
                        <span class="input__label-content input__label-content--kozakura" data-content="Email Address">Email Address</span>
                    </label>
                    <svg class="graphic graphic--kozakura" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
                        <path d="M1200,9c0,0-305.005,0-401.001,0C733,9,675.327,4.969,598,4.969C514.994,4.969,449.336,9,400.333,9C299.666,9,0,9,0,9v43c0,0,299.666,0,400.333,0c49.002,0,114.66,3.484,197.667,3.484c77.327,0,135-3.484,200.999-3.484C894.995,52,1200,52,1200,52V9z"/>
                    </svg>
                </span>
                <span class="input input--kozakura">
                    <input type="tel" class="input__field input__field--kozakura" v-validate="'required|decimal|min:11|max:13'" id="mobile_number" name="mobile_number" v-model="contact.mobileNumber" />
                    <label class="input__label input__label--kozakura" for="mobile_number">
                        <span class="input__label-content input__label-content--kozakura" data-content="Mobile Number">Mobile Number</span>
                    </label>
                    <svg class="graphic graphic--kozakura" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
                        <path d="M1200,9c0,0-305.005,0-401.001,0C733,9,675.327,4.969,598,4.969C514.994,4.969,449.336,9,400.333,9C299.666,9,0,9,0,9v43c0,0,299.666,0,400.333,0c49.002,0,114.66,3.484,197.667,3.484c77.327,0,135-3.484,200.999-3.484C894.995,52,1200,52,1200,52V9z"/>
                    </svg>
                </span>
                <span class="input input--kozakura">
                    <input type="text" class="input__field input__field--kozakura" v-validate="'required|min:3'" id="subject" name="subject" v-model="contact.subject" />
                    <label class="input__label input__label--kozakura" for="subject">
                        <span class="input__label-content input__label-content--kozakura" data-content="Message Subject">Message Subject</span>
                    </label>
                    <svg class="graphic graphic--kozakura" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
                        <path d="M1200,9c0,0-305.005,0-401.001,0C733,9,675.327,4.969,598,4.969C514.994,4.969,449.336,9,400.333,9C299.666,9,0,9,0,9v43c0,0,299.666,0,400.333,0c49.002,0,114.66,3.484,197.667,3.484c77.327,0,135-3.484,200.999-3.484C894.995,52,1200,52,1200,52V9z"/>
                    </svg>
                </span>
                <span class="input has-checkbox ac-custom ac-checkbox ac-boxfill">
                    <input id="cb10" name="field_of_activity[]" type="checkbox" value="Website" v-model="contact.request"><label for="cb10">I want a website</label>
                </span>
                <span class="input has-checkbox ac-custom ac-checkbox ac-boxfill">
                    <input id="cb11" name="field_of_activity[]" type="checkbox" value="Newsletter" v-model="contact.request"><label for="cb11">I'm looking for newsletter</label>
                </span>
            </div>
            <div class="message">
                <textarea name="message" v-validate="'required|min:20'" placeholder="Type your message for me &hellip;" v-model="contact.message"></textarea>
            </div>
            <input type="text" name="samanira_secure" class="samanira_secure" />
            <input type="submit" value="Send your message to me" @click.prevent="nextStep">
        </form>
    </div>
</template>

<script>

$(document).ready(function(){
    $('.contact-form input:not([type="checkbox"]), .contact-form textarea').on('keyup', function(){
        if($(this).val().length > 0){
            $(this).addClass('active');
        }
    })
});

var axios = require('axios');

export default {
    data(){
        return {
            contact : {
                fullName : '',
                emailAddress : '',
                mobileNumber : '',
                subject : '',
                request : [],
                message : '',
            },
            formSubmit : false
        }
    },
    methods:{
        nextStep() {
            this.$validator.validateAll().then((result) => {
            if (result) {
                this.formSubmit = true;
                const options = {
                    method: 'POST',
                    headers: { 'content-type': 'application/form-data' },
                    data: this.contact,
                    url: 'mail.php',
                };
                axios(options).then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                    console.log(error.message);
                });
                return;
            }
        });
        }
    }
};
</script>
