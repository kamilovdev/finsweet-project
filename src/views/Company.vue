<script setup>
    import Expertise from '@/components/expertise.vue';
    import Newsletter from '@/components/newsletter.vue';
    import Footer from '@/components/footer.vue';
</script>
<template>
    <div class="wrapper">
        <header class="company-header">
            <div class="company-container">
                <div class="company-content">
                    <div class="company-icons">
                        <img src="../../public/company/Shape choco.png" alt="Shape Icon 1" />
                        <img src="../../public/company/Shapes (1).png" alt="Shape Icon 2" />
                    </div>

                    <div class="company-info">
                        <p>Company</p>
                        <h2>Award-winning Company seen and used by millions around the world.</h2>
                        <p class="company-description">
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The Maker is decentralized.
                        </p>
                    </div>

                    <div class="company-images">
                        <img src="../../public/company/Image 1.png" alt="Company Image 1" />
                        <img src="../../public/company/Image 2.png" alt="Company Image 2" />
                        <img src="../../public/company/Image 3.png" alt="Company Image 3" />
                    </div>
                </div>
            </div>
        </header>

        <section class="our-story-section">
            <div class="our-story-container">
                <div class="our-story-content">
                    <div class="our-story-info">
                        <div class="our-story-header">
                            <span class="our-story-icon">
                                <img src="../../public/section/blueKvadrat.png" alt="Icon" class="our-story-icon-img" />
                            </span>
                            <p class="our-story-subtitle">Our Story 👇</p>
                            <h3 class="our-story-title">From Startups to Titans of Industry</h3>
                            <p class="our-story-description">
                                Through True Rich Attended does no end it his mother since favourable real had half
                                every him case in packages enquire we up ecstatic unsatiable saw his giving. Remain
                                expense of gay produce excited perceived do an a china mean its so ye when in explained
                                Hearts am next over match mr partiality not should latter thus as out no passed forming
                                Middleton exercise up.
                            </p>
                        </div>

                        <div class="our-story-stats">
                            <div class="our-story-stat-group">
                                <span class="our-story-stat">
                                    <h1 class="our-story-stat-number">1560+</h1>
                                    <span class="our-story-stat-icon">
                                        <img src="../../public/section/palasa.svg" alt="Icon" />
                                    </span>
                                    <p>Projects Delivered</p>
                                </span>

                                <span class="our-story-stat">
                                    <h1>100+</h1>
                                    <span class="our-story-stat-icon">
                                        <img src="../../public/section/palasa.svg" alt="Icon"
                                            class="our-story-stat-icon-img" />
                                    </span>
                                    <p>Professionals</p>
                                </span>
                            </div>

                            <div class="our-story-stat-group">
                                <span class="our-story-stat">
                                    <h1>950+</h1>
                                    <span class="our-story-stat-icon">
                                        <img src="../../public/section/palasa.svg" alt="Icon" />
                                    </span>
                                    <p>Projects Delivered</p>
                                </span>

                                <span class="our-story-stat">
                                    <h1>10 yrs</h1>
                                    <span class="our-story-stat-icon">
                                        <img src="../../public/section/palasa.svg" alt="Icon" />
                                    </span>
                                    <p>Experience</p>
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Clients' logos -->
                    <div class="our-story-clients">
                        <img src="../../public/company/logoipsum.svg" alt="">
                        <img src="../../public/company/logoipsum.svg" alt="">
                        <img src="../../public/company/logoipsum.svg" alt="">
                        <img src="../../public/company/logoipsum.svg" alt="">
                        <img src="../../public/company/logoipsum.svg" alt="">

                    </div>
                </div>
            </div>
        </section>
        <Expertise />

        <section class="vision-section">
            <div class="vision-container">
                <div class="vision-content">
                    <div class="vision-info">
                        <p class="vision-subtitle">Our VISION</p>
                        <h3 class="vision-title">We want to get local identification in every corner of the world in
                            this era of global citizenship.</h3>
                        <p class="vision-description">
                            Through True Rich Attended does no end it his mother since real had half every him case in
                            packages enquire we up ecstatic unsatiable saw his giving Remain expense you position
                            concluded.
                        </p>
                    </div>

                    <div class="vision-image-container">
                        <img src="../../public/company/Image full.png" alt="Vision Image" class="vision-image" />
                    </div>
                </div>
            </div>
        </section>

        <section class="meet-team-section">
            <div class="meet-team-container">
                <div class="meet-team-content">
                    <div class="meet-team-info">
                        <p class="meet-team-subtitle">MEET OUR TEAM</p>
                        <h2 class="meet-team-title">Teamwork is the only way we work</h2>
                        <p class="meet-team-description">
                            Through True Rich Attended does no end it his mother since real had half every him case in
                            packages enquire we up ecstatic unsatiable.
                        </p>
                    </div>

                    <div class="meet-team-images">
                        <span class="meet-team-image-group">
                            <img src="../../public/company/Team 1.png" alt="Team Member 1" class="meet-team-image" />
                            <img src="../../public/company/Team 2.png" alt="Team Member 2" class="meet-team-image" />
                            <img src="../../public/company/Team 3.png" alt="Team Member 3" class="meet-team-image" />
                            <img src="../../public/company/Team 4.png" alt="Team Member 4" class="meet-team-image" />
                            <img src="../../public/company/Team 5.png" alt="Team Member 5" class="meet-team-image" />
                            <img src="../../public/company/Team 6.png" alt="Team Member 6" class="meet-team-image" />
                            <img src="../../public/company/Team 7.png" alt="Team Member 7" class="meet-team-image" />
                            <img src="../../public/company/Team 8.png" alt="Team Member 8" class="meet-team-image" />
                        </span>

                    </div>
                </div>
            </div>
        </section>
        <Newsletter/>
    


    </div>
</template>