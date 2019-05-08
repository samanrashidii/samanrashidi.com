<template>
  <div class="index">
    <vue-headful
        :title="pageTitle"
        :description="pageDescription"
        :ogTitle="pageTitle"
        :ogDescription="pageDescription"
        :url="pageUrl"
    />
    <app-navigation></app-navigation>
		<app-home></app-home>
		<app-about></app-about>
		<app-portfolio></app-portfolio>	
			

			<div id="Contact">
				<div class="parallax has-shape shape-4-revert white-color center-aligned is-map">
					<div id="map_canvas"></div><!-- map_canvas end -->
				</div><!-- parallax end -->
				<div id="ContactMe" class="has-shape shape-5 has-slime-3 center-aligned ">
					<div class="frame">
						<div class="section-title">
							<span>feel free to</span>
							<h1>Contact Me</h1>
						</div><!-- section-title end -->
						<div class="section-content">
							<div class="reveal">
								<h3 class="inner-title information-icon">Contact Information</h3>
								<div class="contact-info">
									<ul>
										<li><strong class="mobile-icon">Mobile Number:</strong> <a itemprop="telephone" href="tel:+995599399705">+995 599 399 705</a>  itemprop="telephone" href="tel:+989128996990">+98912 899 699 0</a></li>
										<li><strong class="navigation-icon">Address:</strong> <a target="_blank" href="https://www.google.com/maps/@32.4943981,54.451405,6z">Tbilisi, Georgia.</a></li>
										<li><strong class="email-icon">Email Address:</strong> <a href="mailto:me@samanrashidi.com"><span itemprop="email">Me@samanrashidi.com</span></a></li>
										<li class="socials">
											<a class="social-icon telegram" target="_blank" href="https://telegram.me/samanrashidii"></a>
											<a class="social-icon github" target="_blank" href="https://github.com/samanrashidii"></a>
											<a class="social-icon linkedin" target="_blank" href="https://www.linkedin.com/in/samanrashidii"></a>
											<a class="social-icon instagram" target="_blank" href="https://www.instagram.com/samanrashidii"></a>	
											<a class="social-icon googleplus" target="_blank" href="https://plus.google.com/109638627387819515843"></a>
											<a class="social-icon facebook" target="_blank" href="https://www.facebook.com/samanrashidii"></a>
											<a class="social-icon tumblr" target="_blank" href="https://samanrashidii.tumblr.com"></a>
											<a class="social-icon twitter" target="_blank" href="https://twitter.com/samanrashidii"></a>
											<a class="social-icon pinterest" target="_blank" href="https://www.pinterest.com/samanrashidii"></a>
											<a class="social-icon soundcloud" target="_blank" href="https://soundcloud.com/samanrashidii"></a>
											<a class="social-icon tripadvisor" target="_blank" href="https://www.tripadvisor.com/Profile/SamanRashidii"></a>
										</li>
									</ul>
								</div><!-- contact-info end -->
							</div><!-- reveal end -->
							<div class="reveal">
								<h3 class="inner-title form-icon">Contact Form</h3>
								<form action="#" method="POST" accept-charset="utf-8" class="contact-form">
									<div class="thank-you has-slime-2">
										<div class="thank-you-box">
											<div class="thank-you-inner-box">
												<img src="images/icons/happy.png" alt="Happy Icon" />
												<h2>Thank you for <span class="site-color">contact</span> me</h2>
												<p>I'll call you as soon as possible to discuss together</p>
											</div><!-- thank-you-inner-box end -->
										</div><!-- thank-you-box end -->
									</div><!-- thank-you end -->
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
									</div><!-- field-wrapper end -->
									<div class="message">
										<textarea name="message" placeholder="Type your message for me &hellip;"></textarea>
										<input type="text" name="samanira_secure" class="samanira_secure" />
									</div><!-- message end -->
									<input type="submit" value="Send your message to me">
								</form>
							</div><!-- reveal end -->
						</div><!-- section-content end -->
					</div><!-- frame end -->
				</div><!-- contact-me end -->
			</div><!-- Contact end -->

<!-- ======== Main Content End ======== -->	


<!-- ======== Footer Start ======== -->

			<div id="footer" class="has-shape shape-4 center-aligned">
				<div class="frame">
					<a href="http://www.samanrashidi.com"><img src="images/logo.png" alt="SamanirA Logo" /></a>
					<span>Copyright © <span class="current-year"></span> <a itemprop="url" href="http://www.samanrashidi.com">Saman Rashidi</a>. All rights reserved</span>
				</div><!-- frame end -->
			</div><!-- approach end -->

<!-- ======== Footer End ======== -->
  </div>
</template>

<script>

import Navigation from '@/components/Navigation.vue';
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import Portfolio from '@/components/Portfolio.vue';

export default {
  name: 'index',
  data(){
    return {
      pageTitle: `${this.store.webAuthorFullName} ~ Web Designer and Senior Front-end Developer`,
      pageDescription: `My name is ${this.store.webAuthorFirstName} and I specialize in Front-end Web Development. I started working with Edoramedia company since October 2014 and the owner of SamanirA framework`,
      pageUrl: `${this.$route.fullPath}`
    }
  },
  components: {
		appNavigation: Navigation,
		appHome: Home,
		appAbout: About,
		appPortfolio: Portfolio
  },
};
</script>
