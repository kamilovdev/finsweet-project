<script setup>
    import Newsletter from '@/components/newsletter.vue';
    import Footer from '@/components/footer.vue';
</script>
<template>
    <div class="wrapper">
        <header>
            <div class="posts-container">

                <!-- Trending Post -->
                <article class="trending-post">
                    <p>Trending</p>
                    <h2>Breaking the code: How did we build our Figma plugin</h2>
                    <p class="post-description">
                        It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout.
                        The Maker is a decentralized project. We aim to attain the...
                    </p>

                    <div class="read-more-button">
                        <button>Read more <img src="../../public/section/arrow2.png" alt="arrow icon"></button>
                    </div>

                    <div class="post-meta">
                        <span class="author">
                            <img src="../../public/blog/andrew.png" alt="Andrew Jonson">
                            <p>Andrew Jonson</p>
                        </span>
                        <span class="separator">|</span>
                        <span class="post-date">
                            <p>Posted on 27th January 2021</p>
                        </span>
                    </div>

                    <div class="post-image">
                        <img src="../../public/blog/tennis.png" alt="Tennis blog post image">
                    </div>
                </article>

                <!-- Second Post -->
                <article class="blog-post">
                    <div>
                        <h4>Great design expectations: Prejudice in digital products next year</h4>

                        <div class="post-meta">
                            <span class="author">
                                <img src="../../public/blog/andrew.png" alt="Andrew Jonson">
                            </span>
                            <span class="author-info">
                                <p>Andrew Jonson</p>
                                <p>Jan 19, 2021</p>
                            </span>
                        </div>
                    </div>

                    <div>
                        <h4>Great design expectations: Prejudice in digital products next year</h4>

                        <div class="post-meta">
                            <span class="author">
                                <img src="../../public/blog/andrew.png" alt="Andrew Jonson">
                            </span>
                            <span class="author-info">
                                <p>Andrew Jonson</p>
                                <p>Jan 19, 2021</p>
                            </span>
                        </div>
                    </div>

                    <div>
                        <h4>Great design expectations: Prejudice in digital products next year</h4>

                        <div class="post-meta">
                            <span class="author">
                                <img src="../../public/blog/andrew.png" alt="Andrew Jonson">
                            </span>
                            <span class="author-info">
                                <p>Andrew Jonson</p>
                                <p>Jan 19, 2021</p>
                            </span>
                        </div>
                    </div>
                </article>

            </div>
        </header>

        <section class="recent-post-section">
            <div class="recent-post-container">
                <div class="recent-post-header">
                    <h1>Read Recent Post</h1>
                </div>
                <div class="recent-post-flex">
                    <div class="recent-page-1">
                        <div class="recent-post-item">
                            <span class="recent-post-image-wrapper">
                                <img src="../../public/blog/Image (2).png" alt="Blog Post Image" />
                            </span>
                            <div class="recent-post-details">
                                <h4>Today’s best design trends for digital products</h4>
                                <div class="recent-post-author-info">
                                    <span class="author-avatar-wrapper">
                                        <img src="../../public/blog/andrew.png" alt="Andrew Jonson" />
                                    </span>
                                    <span class="author-info">
                                        <p>Andrew Jonson</p>
                                        <p>Jan 19, 2021</p>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="recent-post-item">
                            <span class="recent-post-image-wrapper">
                                <img src="../../public/blog/Image (3).png" alt="Blog Post Image" />
                            </span>
                            <div class="recent-post-details">
                                <h4>Today’s best design trends for digital products</h4>
                                <div class="recent-post-author-info">
                                    <span class="author-avatar-wrapper">
                                        <img src="../../public/blog/andrew.png" alt="Andrew Jonson" />
                                    </span>
                                    <span class="author-info">
                                        <p>Andrew Jonson</p>
                                        <p>Jan 19, 2021</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="recent-page-1">
                        <div class="recent-post-item">
                            <span class="recent-post-image-wrapper">
                                <img src="../../public/blog/Image (4).png" alt="Blog Post Image" />
                            </span>
                            <div class="recent-post-details">
                                <h4>Today’s best design trends for digital products</h4>
                                <div class="recent-post-author-info">
                                    <span class="author-avatar-wrapper">
                                        <img src="../../public/blog/andrew.png" alt="Andrew Jonson" />
                                    </span>
                                    <span class="author-info">
                                        <p>Andrew Jonson</p>
                                        <p>Jan 19, 2021</p>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="recent-post-item">
                            <span class="recent-post-image-wrapper">
                                <img src="../../public/blog/Image (5).png" alt="Blog Post Image" />
                            </span>
                            <div class="recent-post-details">
                                <h4>Today’s best design trends for digital products</h4>
                                <div class="recent-post-author-info">
                                    <span class="author-avatar-wrapper">
                                        <img src="../../public/blog/andrew.png" alt="Andrew Jonson" />
                                    </span>
                                    <span class="author-info">
                                        <p>Andrew Jonson</p>
                                        <p>Jan 19, 2021</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="all-posts-section">
            <div class="all-posts-container">
                <div class="all-posts-header">
                    <h1 class="all-posts-title">All posts</h1>

                    <div class="all-posts-list">
                        <div class="post-item">
                            <div class="post-content">
                                <span class="post-image-wrapper">
                                    <img src="../../public/blog/Image (6).png" alt="" class="post-image" />
                                </span>

                                <div class="post-details">
                                    <span class="post-text-wrapper">
                                        <h4>We aim to attain the greatest satisfaction for our
                                            clients</h4>
                                        <p class="post-description">It is a long established fact that a reader will be
                                            distracted by the readable content of a page.</p>

                                        <div class="post-author-info">
                                            <span class="author-image-wrapper">
                                                <img src="../../public/blog/andrew.png" alt="Andrew Jonson" />
                                            </span>
                                            <span class="author-details">
                                                <p>Andrew Jonson</p>
                                                <p>Jan 19, 2021</p>
                                            </span>
                                        </div>
                                    </span>
                                </div>
                            </div>

                            <div class="post-content">
                                <span class="post-image-wrapper">
                                    <img src="../../public/blog/Image (7).png" alt="" class="post-image" />
                                </span>

                                <div class="post-details">
                                    <span class="post-text-wrapper">
                                        <h4>We aim to attain the greatest satisfaction for our
                                            clients</h4>
                                        <p class="post-description">It is a long established fact that a reader will be
                                            distracted by the readable content of a page.</p>

                                        <div class="post-author-info">
                                            <span class="author-image-wrapper">
                                                <img src="../../public/blog/andrew.png" alt="Andrew Jonson" />
                                            </span>
                                            <span class="author-details">
                                                <p>Andrew Jonson</p>
                                                <p>Jan 19, 2021</p>
                                            </span>
                                        </div>
                                    </span>
                                </div>
                            </div>

                            <div class="post-content">
                                <span class="post-image-wrapper">
                                    <img src="../../public/blog/Image (8).png" alt="" class="post-image" />
                                </span>

                                <div class="post-details">
                                    <span class="post-text-wrapper">
                                        <h4>We aim to attain the greatest satisfaction for our
                                            clients</h4>
                                        <p class="post-description">It is a long established fact that a reader will be
                                            distracted by the readable content of a page.</p>

                                        <div class="post-author-info">
                                            <span class="author-image-wrapper">
                                                <img src="../../public/blog/andrew.png" alt="Andrew Jonson" />
                                            </span>
                                            <span class="author-details">
                                                <p>Andrew Jonson</p>
                                                <p>Jan 19, 2021</p>
                                            </span>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="post-item">
                            <div class="post-content">
                                <span class="post-image-wrapper">
                                    <img src="../../public/blog/Image (9).png" alt="" class="post-image" />
                                </span>

                                <div class="post-details">
                                    <span class="post-text-wrapper">
                                        <h4>We aim to attain the greatest satisfaction for our
                                            clients</h4>
                                        <p class="post-description">It is a long established fact that a reader will be
                                            distracted by the readable content of a page.</p>

                                        <div class="post-author-info">
                                            <span class="author-image-wrapper">
                                                <img src="../../public/blog/andrew.png" alt="Andrew Jonson" />
                                            </span>
                                            <span class="author-details">
                                                <p>Andrew Jonson</p>
                                                <p>Jan 19, 2021</p>
                                            </span>
                                        </div>
                                    </span>
                                </div>
                            </div>

                            <div class="post-content">
                                <span class="post-image-wrapper">
                                    <img src="../../public/blog/Image (10).png" alt="" class="post-image" />
                                </span>

                                <div class="post-details">
                                    <span class="post-text-wrapper">
                                        <h4>We aim to attain the greatest satisfaction for our
                                            clients</h4>
                                        <p class="post-description">It is a long established fact that a reader will be
                                            distracted by the readable content of a page.</p>

                                        <div class="post-author-info">
                                            <span class="author-image-wrapper">
                                                <img src="../../public/blog/andrew.png" alt="Andrew Jonson" />
                                            </span>
                                            <span class="author-details">
                                                <p>Andrew Jonson</p>
                                                <p>Jan 19, 2021</p>
                                            </span>
                                        </div>
                                    </span>
                                </div>
                            </div>

                            <div class="post-content">
                                <span class="post-image-wrapper">
                                    <img src="../../public/blog/Image (11).png" alt="" class="post-image" />
                                </span>

                                <div class="post-details">
                                    <span class="post-text-wrapper">
                                        <h4>We aim to attain the greatest satisfaction for our
                                            clients</h4>
                                        <p class="post-description">It is a long established fact that a reader will be
                                            distracted by the readable content of a page.</p>

                                        <div class="post-author-info">
                                            <span class="author-image-wrapper">
                                                <img src="../../public/blog/andrew.png" alt="Andrew Jonson" />
                                            </span>
                                            <span class="author-details">
                                                <p>Andrew Jonson</p>
                                                <p>Jan 19, 2021</p>
                                            </span>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Newsletter />
      
    </div>
</template>