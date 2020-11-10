<template>




    <div>


        <!-- <div class="entry clearfix">


            <div class="entry-item"
                style="background-image: url(https://demo.tagdiv.com/newspaper_gadgets/wp-content/uploads/2017/03/37-485x360.jpg)">


            </div>


            <div class="entry-item entry-next">


            </div>

            <div class="entry-item entry-next">


            </div>
            <div class="entry-item entry-next">


            </div>

            <div class="entry-item entry-next">


            </div>


        </div> -->








        <div class="entry clearfix d-none d-lg-block">


            <div class="entry-item" :class="{'entry-next': index>0}" v-if="index<5" v-for="(doc, index) in recommended"
                :style="bg(doc.img)">

                <router-link class="entry-overlay" :to="{name:'post-info', params: {id: doc.id}}" :title="doc.tl">
                    <div class="entry-meta">

                        <router-link class="entry-tag text-uppercase" :to="{name:'topic-info', params: {id: doc.t[0]}}"
                            :title="doc.t[0]" v-if="doc.t.length>0">
                            {{doc.t[0]}}
                        </router-link>
                        <div class="my-10">
                            <router-link class="entry-title" :to="{name:'post-info', params: {id: doc.id}}"
                                :title="doc.tl">
                                {{doc.tl}}
                            </router-link>
                        </div>

                        by <router-link :to="{name:'member-info', params: {id: doc.uid}}">{{doc.u.nm}}
                        </router-link>
                    </div>
                </router-link>
            </div>


            <!-- <div class="entry-item entry-next"
                    style="background-image: url(https://i.morioh.com/2020/03/16/60fca23c22c4.jpg)">


                    <a class="entry-overlay" href="/p/9080809809">

                        <div class="entry-meta">
                            <a href="/topic/nodejs" class="entry-tag">nodejs</a>
                            <div class="my-10">
                                <a href="/p/08980980" class="entry-title">
                                    Of course Uber is working on a flying car project
                                </a>
                            </div>

                            by <a href="/">Nasa Nguyen</a>
                        </div>
                    </a>
                </div> -->

            <!-- <div class="entry-item entry-next">

                    <a class="entry-overlay" href="/p/9080809809">

                        <div class="entry-meta">
                            <a href="/topic/nodejs" class="entry-tag">nodejs</a>
                            <div class="my-10">
                                <a href="/p/08980980" class="entry-title">
                                    Of course Uber is working on a flying car project
                                </a>
                            </div>

                            by <a href="/">Nasa Nguyen</a>
                        </div>
                    </a>

                </div> -->



        </div>

        <!-- <div class="container mb-15">
            <div class="row">
                <div class="col-4">
                    <img style="height: 150px;"
                        src="https://public.bnbstatic.com/20190320/095c6ead-7012-4a38-ae11-d96f12b6db34.png">
                </div>
                <div class="col-4">
                    <a href="https://www.vultr.com/?ref=8429401-6G"><img
                            src="https://www.vultr.com/media/banners/banner_1200x800.png" class="img-full"
                            height="150"></a>
                </div>
            </div>
        </div> -->

        <div class="container">

            <ul class="nav nav-pills my-15">
                <li class="nav-item mr-10" role="presentation">
                    <router-link to="/explore/trending" class="nav-link" :class="{active: id=='trending'}">
                        Trending</router-link>
                </li>
                <li class="nav-item" role="presentation">
                    <router-link to="/explore/newest" class="nav-link" :class="{active: id=='newest'}"> Newest
                    </router-link>
                </li>

            </ul>

            <div class="thumb-view row">
                <list-item :doc="doc" v-for="(doc, index) in data.docs" v-if="doc.stt==1" :key="doc._id"></list-item>
            </div>

            <infinite-loading @infinite="fetch" ref="a724a6" spinner="waveDots"> </infinite-loading>

        </div>
    </div>
</template>

<script>

    import { mapState } from "vuex";
    export default {

        props: {
            id: {
                type: String,
                default: 'trending'
            }
        },

        // data() {
        //     return {
        //         mode: 'trending',
        //     }
        // },

        components: {
            'list-item': () => import('./post/list-item.vue'),
            // 'loading': () => import('./loading.vue'),           

        },

        computed: {

            ...mapState({
                data: state => state.post.data,
                recommended: state => state.post.recommended

            })
        },


        methods: {


            fetch($state) {

                // var act = this.$route.params.id || 'trending';

                this.$store.dispatch('POST_FETCH', { act: this.id, offset: this.data.offset }).then(data => {

                    if (data.docs.length > 0) {
                        $state.loaded();
                    }
                    else {
                        $state.complete();
                    }
                });


            },

            clean() {

                this.$store.commit("POST_CLEAN");
                if (this.$refs.a724a6)
                    this.$refs.a724a6.$emit("$InfiniteLoading:reset");
            }
        },

        created() {
            this.clean();
            this.$store.dispatch('POST_SUGGEST', { act: 'post', tp: 1, limit: 5 });
        }
    }
</script>