<template>
    <div id="about-me" class="has-shape shape-4 white-color center-aligned">
      <div class="frame">
        <div class="reveal">
          <div class="section-title">
            <span>a little</span>
            <h1>ABOUT ME</h1>
          </div>
          <div class="section-content">
            <p class="justified" v-html="aboutDescription"></p>
          </div>
          <div class="pagination">
            <div class="pagination-content">
              <div class="pagination-item">
                <a href="images/certificates/CIW-Design-B.jpg" data-lightbox="certificate-1" data-title="CIW Design Certificate"><img src="images/certificates/CIW-Design.jpg" alt="Saman Rashidi CIW Design Certificate" /></a>
              </div>
              <div class="pagination-item">
                <a href="images/certificates/CIW-Development-B.jpg" data-lightbox="certificate-2" data-title="CIW Development Certificate"><img src="images/certificates/CIW-Development.jpg" alt="Saman Rashidi CIW Development Certificate" /></a>
              </div>
              <div class="pagination-item">
                <a href="images/certificates/CIW-E-Commerce-B.jpg" data-lightbox="certificate-3" data-title="CIW E-Commerce Certificate"><img src="images/certificates/CIW-E-Commerce.jpg" alt="Saman Rashidi CIW E-Commerce Certificate" /></a>
              </div>
              <div class="pagination-item">
                <a href="images/certificates/CIW-Foundations-B.jpg" data-lightbox="certificate-4" data-title="CIW Foundations Certificate"><img src="images/certificates/CIW-Foundations.jpg" alt="Saman Rashidi CIW Foundations Certificate" /></a>
              </div>
              <div class="pagination-item">
                <a href="images/certificates/MFT-Marketing-B.jpg" data-lightbox="certificate-5" data-title="Marketing Management Certificate"><img src="images/certificates/MFT-Marketing.jpg" alt="Saman Rashidi Marketing Management Certificate" /></a>
              </div>
            </div>
            <div class="pagination-navigation">
              <div class="pagination-current"></div>
              <div class="pagination-dots">
                <button class="pagination-dot" v-for="(number, index) in 5" :key="index">
                  <span class="pagination-number">{{number}}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <img itemprop="image" :class="store.webAuthorFirstName.toLowerCase()" src="images/saman_rashidi.png" :alt="store.webAuthorFullName" />
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      aboutDescription: `<span itemprop="description">My name is <strong itemprop="name">${this.store.webAuthorFullName}</strong>, I’m a persian who lives in Georgia, <strong itemprop="nationality">Tbilisi</strong>, and I specialize in <strong>Web Design and Front-end Web Development</strong>. I hold 4 CIW certification from MFT, and have gained <strong itemprop="award">more than 11000 points and 100 achievements in <a target="_blank" href="http://www.teamtreehouse.com/samanrashidi">TeamTreeHouse</a> Website</strong>. I started working with <a itemprop="worksFor" target="_blank" href="http://www.edoramedia.com">Edoramedia</a> digital solution company since October 2014 as a front-end developer.</span> Before entering a career in creating web pages, I received my bachelor’s degree in Biology and shortly became highly interested in the science known as Neuromarketing. Due to my passion and education, I pursued the Marketing Management certification and worked with Dr. Mohsen Oftadehal (Cognitive Scientist) to concentrate on advertising skills approached using biological methods. Today I am a <strong itemprop="jobTitle">Senior Front-end Developer</strong> in Edoramedia focus on designing creative and appealing websites, attractive and clean to the viewers’ eyes, and skillfully developed on the back-end. I am the owner of <a itemprop="owns" href="http://www.samanira.com" target="_blank">SamanirA framework</a> with my partner <a target="_blank" href="http://www.samirasalimian.com">Samira Salimian</a> to make a better and simpler framework for front-end developers.`,
    };
  },
};
</script>
