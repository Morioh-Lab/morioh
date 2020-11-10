<template>
   <div>Submit</div>
</template>



<script>

    export default {



        data() {
            return {
                t: null,
                // doc: null,

                kwd: '',
                old: ''
            }
        },

        methods: {



            search() {

                clearTimeout(this.t);

                this.t = setTimeout(() => {

                    if (this.old != this.kwd) {

                        this.old = this.kwd;
                        this.$router.push({ name: 'search', query: { k: this.kwd.replace(/\s+/g, ' ').toLowerCase() } });
                    }
                }, 800)

            }

        }

    }

</script>