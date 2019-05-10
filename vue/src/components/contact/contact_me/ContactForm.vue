<template>
    <div class="reveal">
        <h3 class="inner-title form-icon">Contact Form</h3>
        <form action="#" method="POST" accept-charset="utf-8" class="contact-form">
            <div class="thank-you has-slime-2">
                <div class="thank-you-box">
                    <div class="thank-you-inner-box">
                        <img src="images/icons/happy.png" alt="Happy Icon" />
                        <h2>Thank you for <span class="site-color">contact</span> me</h2>
                        <p>I'll call you as soon as possible to discuss together</p>
                    </div>
                </div>
            </div>
            <div class="field-wrapper">
                <span class="input input--kozakura">
                    <input class="input__field input__field--kozakura" type="text" id="full_name" name="full_name" />
                    <label class="input__label input__label--kozakura" for="full_name">
                        <span class="input__label-content input__label-content--kozakura" data-content="Full Name">Full Name</span>
                    </label>
                    <svg class="graphic graphic--kozakura" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
                        <path d="M1200,9c0,0-305.005,0-401.001,0C733,9,675.327,4.969,598,4.969C514.994,4.969,449.336,9,400.333,9C299.666,9,0,9,0,9v43c0,0,299.666,0,400.333,0c49.002,0,114.66,3.484,197.667,3.484c77.327,0,135-3.484,200.999-3.484C894.995,52,1200,52,1200,52V9z"/>
                    </svg>
                </span>
                <span class="input input--kozakura">
                    <input class="input__field input__field--kozakura" type="text" id="email_address" name="email_address" />
                    <label class="input__label input__label--kozakura" for="email_address">
                        <span class="input__label-content input__label-content--kozakura" data-content="Email Address">Email Address</span>
                    </label>
                    <svg class="graphic graphic--kozakura" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
                        <path d="M1200,9c0,0-305.005,0-401.001,0C733,9,675.327,4.969,598,4.969C514.994,4.969,449.336,9,400.333,9C299.666,9,0,9,0,9v43c0,0,299.666,0,400.333,0c49.002,0,114.66,3.484,197.667,3.484c77.327,0,135-3.484,200.999-3.484C894.995,52,1200,52,1200,52V9z"/>
                    </svg>
                </span>
                <span class="input input--kozakura">
                    <input class="input__field input__field--kozakura" type="tel" id="mobile_number" name="mobile_number" />
                    <label class="input__label input__label--kozakura" for="mobile_number">
                        <span class="input__label-content input__label-content--kozakura" data-content="Mobile Number">Mobile Number</span>
                    </label>
                    <svg class="graphic graphic--kozakura" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
                        <path d="M1200,9c0,0-305.005,0-401.001,0C733,9,675.327,4.969,598,4.969C514.994,4.969,449.336,9,400.333,9C299.666,9,0,9,0,9v43c0,0,299.666,0,400.333,0c49.002,0,114.66,3.484,197.667,3.484c77.327,0,135-3.484,200.999-3.484C894.995,52,1200,52,1200,52V9z"/>
                    </svg>
                </span>
                <span class="input input--kozakura">
                    <input class="input__field input__field--kozakura" type="text" id="subject" name="subject" />
                    <label class="input__label input__label--kozakura" for="subject">
                        <span class="input__label-content input__label-content--kozakura" data-content="Message Subject">Message Subject</span>
                    </label>
                    <svg class="graphic graphic--kozakura" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
                        <path d="M1200,9c0,0-305.005,0-401.001,0C733,9,675.327,4.969,598,4.969C514.994,4.969,449.336,9,400.333,9C299.666,9,0,9,0,9v43c0,0,299.666,0,400.333,0c49.002,0,114.66,3.484,197.667,3.484c77.327,0,135-3.484,200.999-3.484C894.995,52,1200,52,1200,52V9z"/>
                    </svg>
                </span>
                <span class="input has-checkbox ac-custom ac-checkbox ac-boxfill">
                    <input id="cb10" name="field_of_activity[]" type="checkbox" value="Website"><label for="cb10">I Want a Website</label>
                </span>
                <span class="input has-checkbox ac-custom ac-checkbox ac-boxfill">
                    <input id="cb11" name="field_of_activity[]" type="checkbox" value="Newsletter"><label for="cb11">I'm Looking For Newsletter</label>
                </span>
            </div>
            <div class="message">
                <textarea name="message" placeholder="Type your message for me &hellip;"></textarea>
                <input type="text" name="samanira_secure" class="samanira_secure" />
            </div>
            <input type="submit" value="Send your message to me">
        </form>
    </div>
</template>

<script>
export default {

};
</script>
