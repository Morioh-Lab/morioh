// import Redirect from "markdown-it-redirect";

import { mapState } from "vuex";
// import { format } from 'timeago.js';
import config from '../config';
import _ from '@morioh/dash';

export default {

    computed: {
        ...mapState({
            session: state => state.member.session
        })
    },

    methods: {

        at(t) {
            return _.ago(t);
        },

        toHTML(txt) {

            if (txt) {
                var html = txt.replace(/((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g, '<a href="$1">$1</a>');
                html = marked(txt, { breaks: true });

                return DOMPurify.sanitize(html, { ADD_TAGS: ['iframe'] });
            }

            return '';

        },

        comment(doc, i) {

            if (i) {
                this.$store.commit('COMMENT_INFO', { tid: doc._id, txt: '' });
                $('#new-comment').modal('show');
            } else {

                this.$router.push({ name: 'post-info', params: { id: doc.id } });
            }

        },
        follow(doc, t) {
            this.$store.dispatch('FOLLOW', { id: doc._id, tp: t }).then(() => {
                doc.fl += 1;
                this.$set(doc, 'followed', true);
                // this.$set(doc, 'fl', doc.fl + 1);
            });

        },
        unfollow(doc, t) {
            this.$store.dispatch('UNFOLLOW', { id: doc._id, tp: t }).then(() => {
                doc.fl -= 1;
                this.$set(doc, 'followed', false);

            });
        },

        like(doc, t) {

            if (this.session) {
                this.$store.dispatch('LIKE_NEW', { id: doc._id, t: doc.t, tp: t || 0 }).then(({ data }) => {
                    if (data)
                        doc.lk++;
                });
            } else {
                this.$router.push({ path: '/login', query: { r: this.$route.fullPath } });
            }

        },

        share(doc, to) {
            this.$store.commit('POST_INFO', doc || { tl: 'Social Network for Developers' });

            if (to) {
                var url = '';
                var lnk = [config.BASE_URL, 'p', doc.id].join('/');
                if (this.session) {
                    lnk = lnk + '?f=' + this.session._id;
                }

                lnk = encodeURIComponent(lnk);

                var tl = encodeURIComponent(doc.tl);

                switch (to) {
                    case 'fb':
                        url = `https://www.facebook.com/sharer/sharer.php?u=${lnk}&text=${tl}`;
                        break;

                    case 'tw':
                        url = `https://twitter.com/intent/tweet?text=${tl}&url=${lnk}&via=codek_tv&hashtags=${doc.t.join(',')}`;
                        break;

                    case 'in':
                        url = `https://www.linkedin.com/sharing/share-offsite/?url=${lnk}`;

                        break;

                    case 'pin':
                        url = `https://pinterest.com/pin/create/button/?url=${lnk}&media=${doc.img}&title=${tl}`;
                        break;

                    case 'blr':
                        url = `https://www.tumblr.com/share/link?canonicalUrl=${lnk}&name=Morioh&description=${tl}`;
                        break;

                    case 'rd':
                        url = `https://www.reddit.com/submit?url=${lnk}&title=${tl}`;
                        break;

                    // case 'hk':
                    //     url = `https://news.ycombinator.com/submitlink?u=${lnk}&t=${tl}`;
                    //     break;

                    // case 'fbb':
                    //     url = `https://share.flipboard.com/bookmarklet/popout?url=${lnk}&title=${tl}&v=2`;

                    //     break;


                }

                window.open(url, "", "toolbar=0, status=0, width=800, height=510");
            }

        },

        host(lnk) {
            const url = new URL(lnk);
            return url.hostname;
        },
        // invite(doc) {
        //     this.$store.commit('CLAIM_INFO', doc || { tl: 'Social Network for Developers' });
        //     $('#invite').modal('show');
        // },

        claim(doc, t) {
            this.$store.commit('CLAIM_INFO', { tl: doc.tl, tp: t, uid: this.session ? this.session._id : null, nm: '', src: [config.BASE_URL, 'p', doc.id].join('/'), tid: doc._id, rl: 0, txt: '' });
            // $('#claim').modal('show');
        },

        reward(doc) {

            return _.numberFormat((doc.v / 20) + (doc.lk / 10), 2);
        },

        isMod() {

            return this.session && this.session.scope && this.session.scope.indexOf('sa') >= 0;
        },

        edit(doc) {

            this.$store.dispatch('POST_INFO', { id: doc.id }).then(data => {
                this.$store.commit('POST_NEW', data);
                // $('#new').modal('show');
            });

        },

        del(doc, f) {

            this.$Msg.confirm("Are you sure want to delete this post?").then(({ data }) => {
                if (data) {
                    if (f) {
                        this.$store.dispatch('POST_FORCE_DEL', { _id: doc._id });
                    } else {
                        this.$store.dispatch('POST_DEL', { _id: doc._id });
                    }
                    this.$set(doc, 'stt', -1);
                    this.$Msg.success("Delete successfully.");
                }
            })

        },

        fdel(doc) {

            this.$Msg.confirm("Are you sure want to delete all posts of this member?").then(({ data }) => {
                if (data) {    
                    this.$store.dispatch('MEMBER_BLOCK', { _id: doc.uid });               
                    this.$store.dispatch('POST_FORCE_DEL', { uid: doc.uid });
                    this.$Msg.success("Delete successfully.");
                }
            })

        },

        block(id) {
            this.$Msg.confirm("Are you sure want to lock this member?").then(({ data }) => {
                if (data) {
                    this.$store.dispatch('MEMBER_BLOCK', { _id: id });
                }
            });
        },

        unblock(id) {
            this.$store.dispatch('MEMBER_UNBLOCK', { _id: id });
        },

        pm(to) {
            if (this.session._id == to._id) return;
            this.$store.dispatch('MSG_PM', { avt: to.avt, nm: to.nm, _id: to._id, cid: [this.session._id, to._id].sort().join('') });
        },

        isVideo(src) {

            // /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/i

            var patterns = [/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/i, /^.*vimeo.com\/(\d+)($|\/|\b)/i, /^.*(?:\/video|dai.ly)\/([A-Za-z0-9]+)([^#\&\?]*).*/i, /^.*coub.com\/(?:embed|view)\/([A-Za-z0-9]+)([^#\&\?]*).*/i];

            for (let i = 0; i < patterns.length; i++) {
                const r = patterns[i];
                if (r.test(src)) {
                    return true;
                }
            }

            return false;

        },

        isImage(f) {
            return (/\.(gif|jpe?g|tiff|png|webp|bmp)$/i).test(f);
        },


        // preview(evt, doc) {

        //     //console.log(evt);

        //     var file = evt.target.files[0];
        //     if (file) {
        //         if (file.size > 500 * 1024) {
        //             this.$Msg.alert('Please select a file smaller than 500 KB');
        //             this.value = '';
        //         }
        //         else {
        //             var reader = new FileReader();
        //             reader.onload = (r) => {

        //                 doc['img'] = doc['avt'] = r.target.result;

        //             };
        //             reader.readAsDataURL(file);

        //         }

        //     }


        // },

        // go(e) {
        //     console.log(e);
        //     e.target.href = _.updateQueryString(e.target.href, 'ref', 'morioh.com');
        // },

        async upload(e, obj, i, data) {

            var result = [];
            for (let x = 0; x < e.target.files.length; x++) {
                const file = e.target.files[x];
                let form = new FormData();
                form.append("file", file);
                if (data) {
                    Object.keys(data).forEach(key => form.append(key, data[key]));
                }

                var f = await this.$store.dispatch("UPLOAD", form);
                if (f) {
                    var t = _.isArray(obj) && !i ? obj.length : i;

                    this.$set(obj, t, f.src);
                    result.push(f);
                }

            }

            return result;

        },

        bg(i) {
            return !_.isBlank(i) ? `background-image: url('${i}')` : '';
        }

    }



}