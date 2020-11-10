<template>
    <form class="d-flex quick-search" role="search">

        <div class="input-group">
            <input class="form-control" v-model="kwd" v-on:keyup="search()" placeholder="Quick search"
                aria-label="Search" type="text">
          
                <button type="button" aria-label="Search" v-on:click="search()" class="btn btn-primary btn-search"
                    role="button">
                    <i class="far fa-search"></i>
                </button>
           
        </div>


    </form>
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