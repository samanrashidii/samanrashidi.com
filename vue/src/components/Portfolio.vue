<template>
    <div id="Portfolio" class="has-shape shape-4 white-color center-aligned">
        <div class="frame">
            <div class="section-title">
                <span>take a look at my</span>
                <h1>Portfolio</h1>
            </div>
            <div class="my-portfolio">
                <h3 class="inner-title website-icon">Websites</h3>
                <ul class="grid effect-8" id="grid">
                    <li v-for="(portfolio, index) in portfolios" :key="index">
                        <div class="portfolio-layer" :class="{'second-bg' : portfolio.secondBG, 'third-bg' : portfolio.thirdBG}">
                            <a class="close" href="javascript:void(0)"></a>
                            <div class="portfolio-inner-layer">
                                <div class="portfolio-layer-content">
                                    <h4>{{portfolio.name}}</h4>
                                    <p>{{portfolio.description}}</p>
                                    <router-link class="bttn has-icon read-more" :to="`/${portfolio.url}`">Read More About This Project</router-link>
                                </div>
                            </div>
                        </div>
                        <img :src="portfolio.image" :alt="portfolio.imageAlt" />
                    </li>
                    <li>
                        <div class="portfolio-layer third-bg">
                            <a class="close" href="javascript:void(0)"></a>
                            <div class="portfolio-inner-layer">
                                <div class="portfolio-layer-content">
                                    <h4>MakianJavAria</h4>
                                    <p>Makian Jav Aria Co has been established in 2014 by experienced managers in poultry industry and the company has put its priority to become responsible for the satisfaction of its customers</p>
                                    <a class="bttn has-icon read-more" href="makianjav.html">Read More About This Project</a>
                                </div><!-- portfolio-layer-content end -->
                            </div><!-- portfolio-inner-layer end -->
                        </div><!-- portfolio-layer end -->
                        <img src="images/portfolio/makianjav-thumb.jpg" alt="MakianJavAria Website by Saman Rashidi" />
                    </li>
                    <li>
                        <div class="portfolio-layer">
                            <a class="close" href="javascript:void(0)"></a>
                            <div class="portfolio-inner-layer">
                                <div class="portfolio-layer-content">
                                    <h4>Flexpass</h4>
                                    <p>Flexpass curated an elite list of fitness classes in Manila and Asia. Empowering you with an unlimited variety of classes from Yoga to Kickboxing, Spinning to Dance, CrossFit to Pilates.</p>
                                    <a class="bttn has-icon read-more" href="flexpass.html">Read More About This Project</a>
                                </div><!-- portfolio-layer-content end -->
                            </div><!-- portfolio-inner-layer end -->
                        </div><!-- portfolio-layer end -->
                        <img src="images/portfolio/flexpass-thumb.jpg" alt="Flexpass Website by Saman Rashidi" />
                    </li>
                    <li>
                        <div class="portfolio-layer second-bg">
                            <a class="close" href="javascript:void(0)"></a>
                            <div class="portfolio-inner-layer">
                                <div class="portfolio-layer-content">
                                    <h4>Esmamkoo</h4>
                                    <p>You can order this book online by typing the name and gender of your sweetheart baby and get the printed version of the book at home</p>
                                    <a class="bttn has-icon read-more" href="esmamkoo.html">Read More About This Project</a>
                                </div><!-- portfolio-layer-content end -->
                            </div><!-- portfolio-inner-layer end -->
                        </div><!-- portfolio-layer end -->
                        <img src="images/portfolio/esmamkoo-thumb.jpg" alt="Esmamkoo Website by Saman Rashidi" />
                    </li>
                    <li>
                        <div class="portfolio-layer third-bg">
                            <a class="close" href="javascript:void(0)"></a>
                            <div class="portfolio-inner-layer">
                                <div class="portfolio-layer-content">
                                    <h4>ZafarOptic Store</h4>
                                    <p>Zafar Optic as one of the core and leading companies in eyewear and optics business in Iran with a main shop and over 60 retail stores. Zafar Optic or Tehran Optic was established by Naser Yavarianfar in 1952</p>
                                    <a class="bttn has-icon read-more" href="zafaroptic-store.html">Read More About This Project</a>
                                </div><!-- portfolio-layer-content end -->
                            </div><!-- portfolio-inner-layer end -->
                        </div><!-- portfolio-layer end -->
                        <img src="images/portfolio/zafaroptic-store-thumb.jpg" alt="ZafarOptic Store Website by Saman Rashidi" />
                    </li>
                    <li>
                        <div class="portfolio-layer second-bg">
                            <a class="close" href="javascript:void(0)"></a>
                            <div class="portfolio-inner-layer">
                                <div class="portfolio-layer-content">
                                    <h4>The Body Challenge v2.0</h4>
                                    <p>The Body Challenge is for anyone and everyone! It doesn't matter how "Out" of shape or "In" shape you are, the Transformation will be SHOCKING! Whether you want to lose fat, gain muscle, trim down or tone up, THE BODY CHALLENGE is for you!!!</p>
                                    <a class="bttn has-icon read-more" href="the-body-challenge-2.html">Read More About This Project</a>
                                </div><!-- portfolio-layer-content end -->
                            </div><!-- portfolio-inner-layer end -->
                        </div><!-- portfolio-layer end -->
                        <img src="images/portfolio/thebodychallenge2-thumb.jpg" alt="The Body Challenge v2.0 Website by Saman Rashidi" />
                    </li>
                    <li>
                        <div class="portfolio-layer third-bg">
                            <a class="close" href="javascript:void(0)"></a>
                            <div class="portfolio-inner-layer">
                                <div class="portfolio-layer-content">
                                    <h4>TowerPal</h4>
                                    <p>Keeping you informed on what is going on in and around your building</p>
                                    <a class="bttn has-icon read-more" href="towerpal.html">Read More About This Project</a>
                                </div><!-- portfolio-layer-content end -->
                            </div><!-- portfolio-inner-layer end -->
                        </div><!-- portfolio-layer end -->
                        <img src="images/portfolio/towerpal-thumb.jpg" alt="TowerPal Website by Saman Rashidi" />
                    </li>
                    <li>
                        <div class="portfolio-layer">
                            <a class="close" href="javascript:void(0)"></a>
                            <div class="portfolio-inner-layer">
                                <div class="portfolio-layer-content">
                                    <h4>Gaboja</h4>
                                    <p>Gaboja is an unique searching website that use google API and provide some nice features for the users</p>
                                    <a class="bttn has-icon read-more" href="gaboja.html">Read More About This Project</a>
                                </div><!-- portfolio-layer-content end -->
                            </div><!-- portfolio-inner-layer end -->
                        </div><!-- portfolio-layer end -->
                        <img src="images/portfolio/gaboja-thumb.jpg" alt="Gaboja Website by Saman Rashidi" />
                    </li>
                    <li>
                        <div class="portfolio-layer second-bg">
                            <a class="close" href="javascript:void(0)"></a>
                            <div class="portfolio-inner-layer">
                                <div class="portfolio-layer-content">
                                    <h4>Farnaz Yavarianfar</h4>
                                    <p>Farnaz Yavarianfar is a professional painter and graduated in Philosophy and Literature from Italy in 2007</p>
                                    <a class="bttn has-icon read-more" href="farnaz-yavarianfar.html">Read More About This Project</a>
                                </div><!-- portfolio-layer-content end -->
                            </div><!-- portfolio-inner-layer end -->
                        </div><!-- portfolio-layer end -->
                        <img src="images/portfolio/farnazyavarianfar-thumb.jpg" alt="Farnaz Yavarianfar Website by Saman Rashidi" />
                    </li>
                    <li>
                        <div class="portfolio-layer third-bg">
                            <a class="close" href="javascript:void(0)"></a>
                            <div class="portfolio-inner-layer">
                                <div class="portfolio-layer-content">
                                    <h4>Edoramedia v5.0</h4>
                                    <p>Edoramedia website got transformed into an awesome website in version 5.0</p>
                                    <a class="bttn has-icon read-more" href="edoramedia5.html">Read More About This Project</a>
                                </div><!-- portfolio-layer-content end -->
                            </div><!-- portfolio-inner-layer end -->
                        </div><!-- portfolio-layer end -->
                        <img src="images/portfolio/edoramedia5-thumb.jpg" alt="Edoramedia v5.0 Website by Saman Rashidi" />
                    </li>
                    <li>
                        <div class="portfolio-layer">
                            <a class="close" href="javascript:void(0)"></a>
                            <div class="portfolio-inner-layer">
                                <div class="portfolio-layer-content">
                                    <h4>Benita v3.0</h4>
                                    <p>Benita decided to imporove their website in both design and development because of their positive feedbacks</p>
                                    <a class="bttn has-icon read-more" href="benita3.html">Read More About This Project</a>
                                </div><!-- portfolio-layer-content end -->
                            </div><!-- portfolio-inner-layer end -->
                        </div><!-- portfolio-layer end -->
                        <img src="images/portfolio/benita3-thumb.jpg" alt="Benita v3.0 Website by Saman Rashidi" />
                    </li>
                    <li>
                        <div class="portfolio-layer second-bg">
                            <a class="close" href="javascript:void(0)"></a>
                            <div class="portfolio-inner-layer">
                                <div class="portfolio-layer-content">
                                    <h4>Petrokabir Co.</h4>
                                    <p>Petro Sanat Kabir (PSK), was established in response to a rising demand for numerous services in oil, gas and petrochemical industries. Our talented people with the supervision of our experienced managers assist us to drive our business forward.</p>
                                    <a class="bttn has-icon read-more" href="petrokabir.html">Read More About This Project</a>
                                </div><!-- portfolio-layer-content end -->
                            </div><!-- portfolio-inner-layer end -->
                        </div><!-- portfolio-layer end -->
                        <img src="images/portfolio/petrokabir-thumb.jpg" alt="Petrokabir Website by Saman Rashidi" />
                    </li>
                    <li>
                        <div class="portfolio-layer third-bg">
                            <a class="close" href="javascript:void(0)"></a>
                            <div class="portfolio-inner-layer">
                                <div class="portfolio-layer-content">
                                    <h4>Branford Training</h4>
                                    <p>Jordan’s experience over the last 15 years transcends all age categories and fitness levels.From training toddlers to tumble, to Plyometric training with World Class track athletes, to helping the elderly rehabilitate after hip surgery.</p>
                                    <a class="bttn has-icon read-more" href="branford.html">Read More About This Project</a>
                                </div><!-- portfolio-layer-content end -->
                            </div><!-- portfolio-inner-layer end -->
                        </div><!-- portfolio-layer end -->
                        <img src="images/portfolio/branford-thumb.jpg" alt="Branford Training Website by Saman Rashidi" />
                    </li>
                    <li>
                        <div class="portfolio-layer">
                            <a class="close" href="javascript:void(0)"></a>
                            <div class="portfolio-inner-layer">
                                <div class="portfolio-layer-content">
                                    <h4>Virtuleap</h4>
                                    <p>They believe in empowering youth and indie teams and our platform here is an expression of that. They want you to be the vanguard of deciding how emergent, immersive, technology like virtual reality takes shape.</p>
                                    <a class="bttn has-icon read-more" href="virtuleap.html">Read More About This Project</a>
                                </div><!-- portfolio-layer-content end -->
                            </div><!-- portfolio-inner-layer end -->
                        </div><!-- portfolio-layer end -->
                        <img src="images/portfolio/virtuleap-thumb.jpg" alt="Virtuleap Website by Saman Rashidi" />
                    </li>
                    <li>
                        <div class="portfolio-layer second-bg">
                            <a class="close" href="javascript:void(0)"></a>
                            <div class="portfolio-inner-layer">
                                <div class="portfolio-layer-content">
                                    <h4>Battle Royale</h4>
                                    <p>Battle Royale began its activities through the @Broyale telegram channel. On this website you can find the latest information of Clash Royale. The main goal of Battle Royale is planning events that you and your friends can battle together.</p>
                                    <a class="bttn has-icon read-more" href="battle-royale.html">Read More About This Project</a>
                                </div><!-- portfolio-layer-content end -->
                            </div><!-- portfolio-inner-layer end -->
                        </div><!-- portfolio-layer end -->
                        <img src="images/portfolio/broyale-thumb.jpg" alt="Battle Royale Website by Saman Rashidi" />
                    </li>
                    <li>
                        <div class="portfolio-layer third-bg">
                            <a class="close" href="javascript:void(0)"></a>
                            <div class="portfolio-inner-layer">
                                <div class="portfolio-layer-content">
                                    <h4>Benita v1.0 &amp; v2.0</h4>
                                    <p>Benita portal provides the latest news in fashion, beauty and lifestyle tips designed. The Web site also provides a forum for women to be able to negotiate freely about their daily problems. Benita was opened in 2016 and aims to provide quality articles in Farsi and become the reference website on the everyday issues of women</p>
                                    <a class="bttn has-icon read-more" href="benita.html">Read More About This Project</a>
                                </div><!-- portfolio-layer-content end -->
                            </div><!-- portfolio-inner-layer end -->
                        </div><!-- portfolio-layer end -->
                        <img src="images/portfolio/benita-thumb.jpg" alt="Benita v1.0 &amp; v2.0 Website by Saman Rashidi" />
                    </li>
                    <li>
                        <div class="portfolio-layer">
                            <a class="close" href="javascript:void(0)"></a>
                            <div class="portfolio-inner-layer">
                                <div class="portfolio-layer-content">
                                    <h4>Primal MD</h4>
                                    <p>Primal MD has the most complete evidence based Age Management model to date and is best suited to face our current healthcare challenge. Currently, lifestyle-acquired disease is the national epidemic despite more and more expensive drugs, increasingly sophisticated medical technology and our economic wealth.</p>
                                    <a class="bttn has-icon read-more" href="primalmd.html">Read More About This Project</a>
                                </div><!-- portfolio-layer-content end -->
                            </div><!-- portfolio-inner-layer end -->
                        </div><!-- portfolio-layer end -->
                        <img src="images/portfolio/primalmd-thumb.jpg" alt="Primal MD Website by Saman Rashidi" />
                    </li>
                    <li>
                        <div class="portfolio-layer second-bg">
                            <a class="close" href="javascript:void(0)"></a>
                            <div class="portfolio-inner-layer">
                                <div class="portfolio-layer-content">
                                    <h4>Sheo Sport</h4>
                                    <p>The mission of SHEO is to develop the sport industry in the UAE. Their goal is to raise the level of the players, master their game and teach them how to compete at their best level.</p>
                                    <a class="bttn has-icon read-more" href="sheo-sport.html">Read More About This Project</a>
                                </div><!-- portfolio-layer-content end -->
                            </div><!-- portfolio-inner-layer end -->
                        </div><!-- portfolio-layer end -->
                        <img src="images/portfolio/sheo-thumb.jpg" alt="Sheo Sport Website by Saman Rashidi" />
                    </li>
                    <li>
                        <div class="portfolio-layer third-bg">
                            <a class="close" href="javascript:void(0)"></a>
                            <div class="portfolio-inner-layer">
                                <div class="portfolio-layer-content">
                                    <h4>Magnihelp</h4>
                                    <p>Magnihelp is the only customer service platform on the Internet with real time audio support. Magnihelp is enables your business to engage with potential customers, ensuring that your customers get the attention they need.</p>
                                    <a class="bttn has-icon read-more" href="magnihelp.html">Read More About This Project</a>
                                </div><!-- portfolio-layer-content end -->
                            </div><!-- portfolio-inner-layer end -->
                        </div><!-- portfolio-layer end -->
                        <img src="images/portfolio/magnihelp-thumb.jpg" alt="Magnihelp Website by Saman Rashidi" />
                    </li>
                    <li>
                        <div class="portfolio-layer">
                            <a class="close" href="javascript:void(0)"></a>
                            <div class="portfolio-inner-layer">
                                <div class="portfolio-layer-content">
                                    <h4>Posh Vault</h4>
                                    <p>Get Credit today and start saving money on all the luxury things in life&hellip; Posh Vault will help you do it</p>
                                    <a class="bttn has-icon read-more" href="poshvault.html">Read More About This Project</a>
                                </div><!-- portfolio-layer-content end -->
                            </div><!-- portfolio-inner-layer end -->
                        </div><!-- portfolio-layer end -->
                        <img src="images/portfolio/poshvault-thumb.jpg" alt="Posh Vault Website by Saman Rashidi" />
                    </li>
                    <li>
                        <div class="portfolio-layer">
                            <a class="close" href="javascript:void(0)"></a>
                            <div class="portfolio-inner-layer">
                                <div class="portfolio-layer-content">
                                    <h4>Emirates American Football League</h4>
                                    <p>Channeling all the noise, energy, and excitement of America’s most popular sport, They are unifying the many distinct communities of the UAE to create a diverse team of players who share a love for American football.</p>
                                    <a class="bttn has-icon read-more" href="eafl.html">Read More About This Project</a>
                                </div><!-- portfolio-layer-content end -->
                            </div><!-- portfolio-inner-layer end -->
                        </div><!-- portfolio-layer end -->
                        <img src="images/portfolio/eafl-thumb.jpg" alt="Emirates American Football League Website by Saman Rashidi" />
                    </li>
                    <li>
                        <div class="portfolio-layer second-bg">
                            <a class="close" href="javascript:void(0)"></a>
                            <div class="portfolio-inner-layer">
                                <div class="portfolio-layer-content">
                                    <h4>Line Info</h4>
                                    <p>Line application is available in 68 countries around the world as the best software and social media communication. Line Company aims to be the best content and latest news about celebrities in Iran to provide his Iranian guests.</p>
                                    <a class="bttn has-icon read-more" href="line-info.html">Read More About This Project</a>
                                </div><!-- portfolio-layer-content end -->
                            </div><!-- portfolio-inner-layer end -->
                        </div><!-- portfolio-layer end -->
                        <img src="images/portfolio/line-thumb.jpg" alt="Line Info Blog by Saman Rashidi" />
                    </li>
                    <li>
                        <div class="portfolio-layer half-text no-bg">
                            <a class="close" href="javascript:void(0)"></a>
                            <div class="portfolio-inner-layer">
                                <div class="portfolio-layer-content">
                                    <h4>TFG Interactive Map</h4>
                                    <p>The First Group’s commitment is to ensure client enjoy the effortless rewards of amazing property investments in Dubai. they have made it their duty to deliver the most innovative opportunities, focusing on the highly lucrative world of hotel investments.</p>
                                    <a class="bttn has-icon read-more" href="tfg-map.html">Read More About This Project</a>
                                </div><!-- portfolio-layer-content end -->
                            </div><!-- portfolio-inner-layer end -->
                        </div><!-- portfolio-layer end -->
                        <img src="images/portfolio/tfgmap-thumb.jpg" alt="The First Group Interactive Map by Saman Rashidi" />
                    </li>
                    <li>
                        <div class="portfolio-layer third-bg">
                            <a class="close" href="javascript:void(0)"></a>
                            <div class="portfolio-inner-layer">
                                <div class="portfolio-layer-content">
                                    <h4>Zafar Optic v1.0</h4>
                                    <p>Zafar Optic as one of the core and leading companies in eyewear and optics business in Iran with a main shop and over 60 retail stores. Zafar Optic or Tehran Optic was established by Naser Yavarianfar in 1952</p>
                                    <a class="bttn has-icon read-more" href="zafaroptic.html">Read More About This Project</a>
                                </div><!-- portfolio-layer-content end -->
                            </div><!-- portfolio-inner-layer end -->
                        </div><!-- portfolio-layer end -->
                        <img src="images/portfolio/zafaroptic-thumb.jpg" alt="Zafar Optic Website by Saman Rashidi" />
                    </li>
                    <li>
                        <div class="portfolio-layer">
                            <a class="close" href="javascript:void(0)"></a>
                            <div class="portfolio-inner-layer">
                                <div class="portfolio-layer-content">
                                    <h4>Edoramedia v3.0</h4>
                                    <p>Edoramedia is an independent digital design and development studio lucky enough to do what they love best. building amazing solutions for their customers and ensuring they perform at levels exceeding expectations.</p>
                                    <a class="bttn has-icon read-more" href="edoramedia.html">Read More About This Project</a>
                                </div><!-- portfolio-layer-content end -->
                            </div><!-- portfolio-inner-layer end -->
                        </div><!-- portfolio-layer end -->
                        <img src="images/portfolio/edoramedia-thumb.jpg" alt="Edoramedia v3.0 Website by Saman Rashidi" />
                    </li>
                    <li>
                        <div class="portfolio-layer second-bg">
                            <a class="close" href="javascript:void(0)"></a>
                            <div class="portfolio-inner-layer">
                                <div class="portfolio-layer-content">
                                    <h4>The Axiom Team</h4>
                                    <p>The Axiom is a Persian Heroes of the Storm Team, they are joining the battle to win the game!</p>
                                    <a class="bttn has-icon read-more" href="theaxiom.html">Read More About This Project</a>
                                </div><!-- portfolio-layer-content end -->
                            </div><!-- portfolio-inner-layer end -->
                        </div><!-- portfolio-layer end -->
                        <img src="images/portfolio/theaxiom-thumb.jpg" alt="The Axiom Team Website by Saman Rashidi" />
                    </li>
                    <li>
                        <div class="portfolio-layer">
                            <a class="close" href="javascript:void(0)"></a>
                            <div class="portfolio-inner-layer">
                                <div class="portfolio-layer-content">
                                    <h4>The Body Challenge v1.0</h4>
                                    <p>The Body Challenge is for anyone and everyone! It doesn't matter how "Out" of shape or "In" shape you are, the Transformation will be SHOCKING! Whether you want to lose fat, gain muscle, trim down or tone up, THE BODY CHALLENGE is for you!!!</p>
                                    <a class="bttn has-icon read-more" href="the-body-challenge.html">Read More About This Project</a>
                                </div><!-- portfolio-layer-content end -->
                            </div><!-- portfolio-inner-layer end -->
                        </div><!-- portfolio-layer end -->
                        <img src="images/portfolio/thebodychallenge-thumb.jpg" alt="The Body Challenge v1.0 Website by Saman Rashidi" />
                    </li>
                    <li>
                        <div class="portfolio-layer second-bg">
                            <a class="close" href="javascript:void(0)"></a>
                            <div class="portfolio-inner-layer">
                                <div class="portfolio-layer-content">
                                    <h4>MonteCristo</h4>
                                    <p>At Monte Cristo no idea is too complicated and no desire impossible. Unlike traditional events production companies Monte Cristo goes beyond the simple planning and execution of events.</p>
                                    <a class="bttn has-icon read-more" href="montecristo.html">Read More About This Project</a>
                                </div><!-- portfolio-layer-content end -->
                            </div><!-- portfolio-inner-layer end -->
                        </div><!-- portfolio-layer end -->
                        <img src="images/portfolio/montecristo-thumb.jpg" alt="Montecristo Website by Saman Rashidi" />
                    </li>
                </ul>
            </div><!-- my-portfolio end -->
        </div><!-- frame end -->
    </div><!-- Portfolio end -->
</template>

<script>
export default {
    data(){
        return {
            portfolios : [
                {
                    name: 'Dripology',
                    description: 'Dripology is the premium medical IV solution service serving the Los Angeles area. Utilizing custom protocols with recommendations by The American Academy of Anti-Aging Medicine, their treatment are tailored to provide clients with a boost in all facets of life.',
                    url: 'dripology',
                    image: 'images/portfolio/dripology-thumb.jpg',
                    imageAlt: 'Dripology Website by Saman Rashidi',
                    secondBg: true
                },
                {
                    name: 'Dripology',
                    description: 'Dripology is the premium medical IV solution service serving the Los Angeles area. Utilizing custom protocols with recommendations by The American Academy of Anti-Aging Medicine, their treatment are tailored to provide clients with a boost in all facets of life.',
                    url: 'dripology',
                    image: 'images/portfolio/dripology-thumb.jpg',
                    imageAlt: 'Dripology Website by Saman Rashidi',
                    thirdBG: true
                },
            ]
        }
    }
}
</script>
