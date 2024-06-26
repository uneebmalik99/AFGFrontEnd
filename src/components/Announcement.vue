<template>
    <div class="container-fluid" style="background-color: #f4fffd;">
        <div class="row justify-content-end">
            <p class="text mt-5">
                <span class="home">HOME</span>
                <span class="arrow"> &gt; </span>
                <span class="services">ANNOUNCEMENTS</span>
            </p>
        </div>
        <div class="row justify-content-center mt-3">
            <h1 class="Heading mb-4 text-center">News and Announcements</h1>
        </div>
        <div class="row">
            <div class="col-12 mb-4">
                <swiper :scrollbar="{ hide: false, draggable: true }" :modules="modules" :initial-slide="1"
                    class="mySwiper mb-5">
                    <swiper-slide v-for="(card, index) in featuredPosts" :key="index" class="swiper-slide-custom"
                        style="background-color: #f4fffd;">
                        <div class="card mb-5 swiper-card" style="background-color: #f4fffd;">
                            <img :src="'http://trackvinapi.afgshipping.com/' + card.image" class="swiper-slide-img"
                                :alt="card.title">
                            <div class="overlay">
                                <h5 class="card-title">{{ card.title }}</h5>
                                <p class="card-text">{{ card.description }}</p>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div>
            <h4 class="h4-title">Latest Post</h4>
        </div>
        <div class="container justify-content-start">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4" v-for="(post, index) in posts" :key="index">
                    <div class="card2 mb-4 mt-3 mx-auto">
                        <img :src="'http://trackvinapi.afgshipping.com/' + post.image" class="card-img-top"
                            :alt="post.title">
                        <div class="card-body">
                            <h5 class="card-title2">{{ post.type }}</h5>
                            <!-- <a :href="'/blog/' + generateSlug(post.title)" class="card-text2">{{ post.title }}</a> -->
                            <router-link :to="{ name: 'BlogDetails', params: { slug: generateSlug(post.title), props: { post: post } } }" class="card-text2">{{ post.title }}</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center ">
                <button class="button mb-4" @click="loadMore">Load More</button>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import axios from 'axios';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },

    setup() {
        return {
            modules: [Scrollbar],
        };
    },
    data() {
        return {
            featuredPosts: [],
            posts: [],
            currentPage: 1,
            perPage: 6,
        };
    },
    methods: {
        fetchPosts() {
            axios.get(`http://trackvinapi.afgshipping.com/blog_api.php?page=${this.currentPage}&limit=${this.perPage}`)
                .then(response => {
                    if (response.data.status === 'success') {
                        const allPosts = response.data.data;
                        this.posts = allPosts;
                        this.featuredPosts = allPosts.filter(post => post.featured);
                    } else {
                        console.error('Error fetching posts:', response.data.message);
                    }
                })
                .catch(error => {
                    console.error('Error fetching posts:', error);
                });
        },
        loadMore() {
            this.currentPage++;
            axios.get(`http://trackvinapi.afgshipping.com/blog_api.php?page=${this.currentPage}&limit=${this.perPage}`)
                .then(response => {
                    if (response.data.status === 'success') {
                        const allPosts = response.data.data;
                        this.posts = [...this.posts, ...allPosts.filter(post => !post.featured)];
                        this.featuredPosts = [...this.featuredPosts, ...allPosts.filter(post => post.featured)];
                    } else {
                        console.error('Error fetching posts:', response.data.message);
                    }
                })
                .catch(error => {
                    console.error('Error fetching posts:', error);
                });
        },
        generateSlug(title) {
            // Function to generate a URL-friendly slug from the title
            return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        }
    },
    mounted() {
        this.fetchPosts();
    }
};
</script>

<style scoped>
.text {
    margin: 0;
    padding: 0;
    text-align: right;
}

.home,
.arrow,
.services {
    display: inline-block;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 700;
    line-height: 24.38px;
    text-align: left;
    margin-right: 17px;
}

.home,
.arrow {
    color: #333333;
}

.services {
    color: #011936;
}

.Heading {
    font-family: Montserrat;
    font-size: 56px;
    font-weight: 700;
    line-height: 68.26px;
    text-align: center;
    color: #011936;
}

.swiper {
    width: 100%;
    height: 100%;
    padding: 0 6%;
}


.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-card {
    position: relative;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    border-radius: 50px;
}

.swiper-slide-img {
    width: 100%;
    height: auto;
    border-radius: 20px;
}

.overlay {
    position: absolute;
    bottom: 30px;
    left: 50px;
    color: #fff;
    font-size: 12px;
    background-color: transparent;
}

.card-title {
    font-family: Montserrat;
    font-size: 38px;
    font-weight: 700;
    text-align: left;
    line-height: 18px;
    color: #FFFFFF;
    margin-top: 34%;
}

.card-text {
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 500;
    text-align: left;
    color: #FFFFFF;
    padding-top: 0.5%;

}

.h4-title {
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 700;
    line-height: 27.56px;
    text-align: start;
    color: #011936;
    margin-left: 5%;
}

.card-title2 {
    font-family: Work Sans;
    font-size: 13.76px;
    font-weight: 500;
    text-align: left;
    color: #4B6BFB;
}

.card-text2 {
    font-family: Work Sans;
    font-size: 20px;
    font-weight: 600;
    text-align: left;
    color: #181A2A;
    text-decoration: none;
}

.card2 {
    width: 100%;
    max-width: 385px;
    height: auto;
    padding: 15px;
    border-radius: 12px;
    border: 1px solid #E8E8EA;
    background-color: white;
}

.button {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    padding: 12px 20px;
    border-radius: 6px;
    background: #ED254E;
    border: #ED254E;
    color: #FFFFFF;
}

@media (max-width: 1100px) {
    .text {
        text-align: center;
        margin-right: 0;
    }

    .Heading {
        font-size: 36px;
        line-height: 44px;
    }

    .swiper {
        padding: 0 4%;
    }

    .swiper-scrollbar {
        height: 3px;
        top: auto;
        bottom: 10px;
        transform: translateY(0);
    }

    .swiper-card {
        width: 100%;
        border-radius: 50px;
    }

    .swiper-slide-img {
        width: 100%;
        height: auto;
    }

    .card2 {
        max-width: 100%;
        padding: 10px;
        border-radius: 10px;
    }

    .button {
        font-size: 14px;
        padding: 10px 15px;
    }
}

@media (max-width: 767.98px) {
    .card-title {
        font-size: 18px;

    }

    .card-text {
        font-size: 8px;
    }

    .overlay {
        bottom: 10px;
        left: 5px;
        font-size: 10px;
        padding: 3px;
    }

    .h4-title {
        font-size: 20px;
    }

    .card-title2 {
        font-size: 12px;
    }

    .card-text2 {
        font-size: 18px;
    }

    .card2 {
        padding: 8px;
        border-radius: 8px;
    }
}
</style>