<script setup>
  import expertise from '@/components/expertise.vue';
  import process from '@/components/process.vue';
  import blog from '@/components/blog.vue';
  import newsletter from '@/components/newsletter.vue';
  import contact from '@/components/footer.vue';
</script>
<template>
  <div class="wrapper">

    <header>
      <div class="container">
        <div class="header-card">
          <div class="header__left">
            <div class="mini-card"></div>
            <h1>Transform Your Idea Into Reality with Finsweet</h1>
            <p>
              The entire Finsweet team knows what's good with Webflow and<br />
              you can too with 1 week and a good attitude.
            </p>
            <button>
              <span class="shapes">
                <img src="../../public/header/svg/shapes.svg" alt="shapes" />
              </span>
              Request Quote
              <img src="../../public/navbar/arrow.svg" alt="arrow" class="arrow" />
            </button>
          </div>
          <div class="header__right">
            <img src="../../public/header/header-image.png" alt="header-image" />
          </div>
        </div>

        <div class="header-clients">
          <div class="clients-title">
            <span>Our Clients</span>
            <h5>We've Worked with</h5>
          </div>

          <div class="clients-logo">
            <div class="logo-img">
              <img src="../../public/header/svg/logo-client.svg" alt="logo-client" />
            </div>
            <div class="logo-img">
              <img src="../../public/header/svg/logo-client2.svg" alt="logo-client" />
            </div>
            <div class="logo-img">
              <img src="../../public/header/svg/logo-client3.svg" alt="logo-client" />
            </div>
            <div class="logo-img">
              <img src="../../public/header/svg/logo-client4.svg" alt="logo-client" />
            </div>
            <div class="logo-img">
              <img src="../../public/header/svg/logo-client5.svg" alt="logo-client" />
            </div>
          </div>
        </div>
      </div>
    </header>
    <section>
      <div class="about-section">
        <span>
          <p>ABOUT US</p>
        </span>
        <div class="main-content">
          <div class="concept-delivery">
            <h1>The company leads entire webdesign process from concept to delivery.</h1>
          </div>
          <div class="era-technology">
            <h1>The Era Of Technology.</h1>
            <p>Through True Rich Attended does no end it his mother since real had half every him case in packages
              enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.</p>
          </div>
        </div><br><br><br>
        <div class="images-section">
          <img src="../../public/section/Image 1.png" alt="">
          <img src="../../public/section/Image 2.png" alt="">
          <img src="../../public/section/Image 3.png" alt="">
        </div>


        <div class="stats-section">
          <div class="stats-container">
            <div class="stat-item">
              <h1>1560+</h1>
              <img src="../../public/section/shapes.png" alt="">
              <p>Project Delivered</p>
            </div>
            <div class="stat-item">
              <h1>100+</h1>
              <img src="../../public/section/shapes.png" alt="">
              <p>Professional</p>
            </div>
            <div class="stat-item">
              <h1>950+</h1>
              <img src="../../public/section/shapes.png" alt="">
              <p>Happy Client</p>
            </div>
            <div class="stat-item">
              <h1>10 yrs</h1>
              <img src="../../public/section/shapes.png" alt="">
              <p>Experience</p>
            </div>
          </div>

          <div class="read-more-button">
            <button>Read about us <img src="../../public/section/arrow2.png" alt=""></button>
          </div>
        </div>
      </div>
    </section>
    <expertise />

    <section class="services-section">
      <div class="services-container">
        <div class="services-header">
          <p>Our Services</p>
          <h1>We build software solutions that solve client's business challenges</h1>
          <button class="start-project-btn">
            <span class="shapes">
              <img src="../../public/header/svg/shapes.svg" alt="shapes" />
            </span>
            Start a Project
            <img src="../../public/navbar/arrow.svg" alt="arrow" class="arrow" />
          </button>
        </div>

        <div class="services-list">
          <div class="service-item">
            <span class="service-icon">
              <img src="../../public/section/icon div (1).png" alt="">
            </span>
            <div class="service-description">
              <h1>Technical support</h1>
              <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it
                comes to world-class service</p>
              <button class="read-more-btn">Read more <img src="../../public/section/arrow2.png" alt=""></button>
            </div>
          </div>

          <div class="service-item">
            <span class="service-icon">
              <img src="../../public/section/icon div (2).png" alt="">
            </span>
            <div class="service-description">
              <h1>Testing Management</h1>
              <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it
                comes to world-class service</p>
              <button class="read-more-btn">Read more <img src="../../public/section/arrow2.png" alt=""></button>
            </div>
          </div>

          <div class="service-item">
            <span class="service-icon">
              <img src="../../public/section/icon div (3).png" alt="">
            </span>
            <div class="service-description">
              <h1>Development</h1>
              <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it
                comes to world-class service</p>
              <button class="read-more-btn">Read more <img src="../../public/section/arrow2.png" alt=""></button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <process />
    <section class="customer-section">
      <div class="customer-container">
        <div class="customer-header">
          <span class="customer-header-image">
            <img src="../../public/section/blueKvadrat.png" alt="">
          </span>
          <span class="customer-header-text">
            <h1>Our customers love what we do</h1>
            <p>Transform your idea into reality with finsweet</p>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout.</p>
          </span>

          <div class="customer-reviews">
            <span class="customer-images">
              <img src="../../public/section/image 3 (1).png" alt="">
              <img src="../../public/section/image 3 (1).png" alt="">
              <img src="../../public/section/image 3 (1).png" alt="">
            </span>
            <p>30+ Customer Reviews</p>
          </div>
        </div>

        <div class="customer-testimonial">
          <div class="testimonial-logo">
            <img src="../../public/section/Group 1710.png" alt="">
          </div>

          <div class="testimonial-content">
            <span class="testimonial-text">
              <h1>Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months
                and I have had nothing but positive experiences!</h1>
            </span>

            <div class="testimonial-author-container">
              <div class="testimonial-author">
                <span class="author-image">
                  <img src="../../public/section/image 3 (1).png" alt="">
                </span>
                <span class="author-info">
                  <h1>Johnny Andro</h1>
                  <p>Director, Company</p>
                </span>
              </div>

              <div class="testimonial-logo-client">
                <img src="../../public/header/svg/logo-client2.svg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <blog />
    <newsletter />
    <contact />
    

  </div>

</template>
<style scoped lang="scss">
  header {
    background-color: #232536;
  }

  .header-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    padding-top: 96px;
  }

  .header__left {
    .mini-card {
      width: 24px;
      height: 24px;
      background-color: #ffffff10;
    }

    h1 {
      font-size: 56px;
      line-height: 56px;
      font-weight: 500;
      margin: 24px 0;
    }

    p {
      font-style: 16px;
      line-height: 24px;
      color: #ffffff88;
      margin-bottom: 32px;
    }

    button {
      padding: 20px 32px;
      background-color: #444cfc;
      border: none;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
      transition: all 0.5s ease;

      &:hover {
        background-color: #444dfcc6;
      }

      .shapes {
        position: relative;

        img {
          position: absolute;
          top: -20px;
          left: -32px;
        }
      }

      .arrow {
        margin-left: 16px;
      }
    }
  }

  .header-clients {
    display: flex;
    align-items: center;
    gap: 32px;
    margin-top: 23px;

    .clients-title {
      h5 {
        font-size: 14px;
        color: #fff;
      }

      span {
        font-size: 12px;
        color: #ffffff76;
      }
    }

    .clients-logo {
      display: flex;
      align-items: center;
      gap: 32px;

      .logo-img {
        cursor: pointer;
        transition: all 0.5s ease;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
</style>