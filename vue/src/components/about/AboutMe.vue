<template>
    <div id="about-me" class="has-shape shape-4 white-color center-aligned">
      <div class="frame">
        <div class="reveal">
          <div class="section-title">
            <span>{{sectionSub}}</span>
            <h1>{{sectionTitle}}</h1>
          </div>
          <div class="section-content">
            <p class="justified" v-html="aboutDescription"></p>
          </div>
          <div class="pagination">
            <div class="pagination-content">
              <div class="pagination-item" v-for="(certificate, index) in certificates" :key="index">
                <a :href="certificate.image" :data-lightbox="certificate.name" :data-title="certificate.title"><img :src="certificate.thumb" :alt="getAlt(index)" /></a>
              </div>
            </div>
            <div class="pagination-navigation">
              <div class="pagination-current"></div>
              <div class="pagination-dots">
                <button class="pagination-dot" v-for="(certificate, index) in certificates" :key="index">
                  <span class="pagination-number">{{index+1}}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <img itemprop="image" :class="store.webAuthorFirstName.toLowerCase()" :src="aboutImage" :alt="store.webAuthorFullName" />
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      aboutDescription: `<span itemprop="description">My name is <strong itemprop="name">${this.store.webAuthorFullName}</strong>,
      I’m a persian who lives in Georgia, <strong itemprop="nationality">Tbilisi</strong>, and I specialize in <strong>Web Design and Front-end Web Development</strong>.
      I hold 4 CIW certification from MFT, and have gained <strong itemprop="award">more than 11000 points and 100 achievements in
      <a target="_blank" href="http://www.teamtreehouse.com/samanrashidi">TeamTreeHouse</a> Website</strong>. I started working with <a itemprop="worksFor" target="_blank" href="http://www.edoramedia.com">Edoramedia</a>
      digital solution company from October 2014 until January 2019 as a Front-end Developer.</span> Before entering a career in creating web pages,
      I received my bachelor’s degree in Biology and shortly became highly interested in the science known as Neuromarketing. Due to my passion and education,
      I pursued the Marketing Management certification and worked with Dr. Mohsen Oftadehal (Cognitive Scientist) to concentrate on advertising skills approached using biological methods.
      Today I'm a <strong itemprop="jobTitle">Senior Front-end Developer</strong> and have focus on designing creative and appealing websites, attractive and clean to the viewers’ eyes, and skillfully developed on the back-end.
      In 2017 I have created <a itemprop="owns" href="http://www.samanira.com" target="_blank">SamanirA framework</a> with my partner <a target="_blank" href="http://www.samirasalimian.com">Samira Salimian</a> to have a simple and easy framework for Front-end Developers.`,
      sectionSub: 'a little',
      sectionTitle: 'ABOUT ME',
      certificates: [
        {
          name: 'certificate-1',
          title: 'CIW Design Certificate',
          thumb: '/images/certificates/CIW-Design.jpg',
          image: '/images/certificates/CIW-Design-B.jpg'
        },
        {
          name: 'certificate-2',
          title: 'CIW Development Certificate',
          thumb: '/images/certificates/CIW-Development.jpg',
          image: '/images/certificates/CIW-Development-B.jpg'
        },
        {
          name: 'certificate-3',
          title: 'CIW E-Commerce Certificate',
          thumb: '/images/certificates/CIW-E-Commerce.jpg',
          image: '/images/certificates/CIW-E-Commerce-B.jpg'
        },
        {
          name: 'certificate-4',
          title: 'CIW Foundations Certificate',
          thumb: '/images/certificates/CIW-Foundations.jpg',
          image: '/images/certificates/CIW-Foundations-B.jpg'
        },
        {
          name: 'certificate-5',
          title: 'Marketing Management Certificate',
          thumb: '/images/certificates/MFT-Marketing.jpg',
          image: '/images/certificates/MFT-Marketing-B.jpg'
        },
      ],
      aboutImage: '/images/saman_rashidi.png'
    };
  },
  methods: {
    getAlt(index){
      return this.store.webAuthorFullName + ' ' + this.certificates[index].title;
    }
  },
};
</script>
