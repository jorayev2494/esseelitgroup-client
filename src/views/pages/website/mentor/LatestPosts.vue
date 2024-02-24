<template>
    <div class="card post-widget">
        <div class="card-header">
            <h4 class="card-title">Latest Posts</h4>
        </div>
        <div class="card-body">
            <ul class="latest-posts">
                <li>
                    <div class="post-thumb">
                        <router-link  to="/mentor/blog-details">
                            <img class="img-fluid" src="@/assets/img/website/blog/blog-thumb-01.jpg" alt="">
                        </router-link >
                    </div>
                    <div class="post-info">
                        <h4>
                            <router-link  to="/mentor/blog-details">Lorem Ipsum is simply dummy text of the printing</router-link >
                        </h4>
                        <p>4 Dec 2019</p>
                    </div>
                </li>
                <li>
                    <div class="post-thumb">
                        <router-link  to="/mentor/blog-details">
                            <img class="img-fluid" src="@/assets/img/website/blog/blog-thumb-02.jpg" alt="">
                        </router-link >
                    </div>
                    <div class="post-info">
                        <h4>
                            <router-link  to="/mentor/blog-details">It is a long established fact that a reader will be</router-link >
                        </h4>
                        <p>3 Dec 2019</p>
                    </div>
                </li>
                <li>
                    <div class="post-thumb">
                        <router-link  to="/mentor/blog-details">
                            <img class="img-fluid" src="@/assets/img/website/blog/blog-thumb-03.jpg" alt="">
                        </router-link >
                    </div>
                    <div class="post-info">
                        <h4>
                            <router-link  to="/mentor/blog-details">here are many variations of passages of Lorem Ipsum</router-link >
                        </h4>
                        <p>3 Dec 2019</p>
                    </div>
                </li>
                <li>
                    <div class="post-thumb">
                        <router-link  to="/mentor/blog-details">
                            <img class="img-fluid" src="@/assets/img/website/blog/blog-thumb-04.jpg" alt="">
                        </router-link >
                    </div>
                    <div class="post-info">
                        <h4>
                            <router-link  to="/mentor/blog-details">The standard chunk of Lorem Ipsum used since the</router-link >
                        </h4>
                        <p>2 Dec 2019</p>
                    </div>
                </li>
                <li>
                    <div class="post-thumb">
                        <router-link  to="/mentor/blog-details">
                            <img class="img-fluid" src="@/assets/img/website/blog/blog-thumb-05.jpg" alt="">
                        </router-link >
                    </div>
                    <div class="post-info">
                        <h4>
                            <router-link  to="/mentor/blog-details">to generate Lorem Ipsum which looks reasonable.</router-link >
                        </h4>
                        <p>1 Dec 2019</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>