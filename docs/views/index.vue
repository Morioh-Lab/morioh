<template>
    <div>

        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <v-btn>Hello</v-btn>

        <v-btn v-ripple outlined>Hello</v-btn>
        <v-btn raised v-ripple>Hello</v-btn>
        <v-btn outlined icon="favorite">Hello</v-btn>



        <v-btn v-ripple outlined :to="{name: 'new' }">New</v-btn>


        <v-btn-icon icon="favorite"></v-btn-icon>


        <p>&nbsp;</p>
        <p>&nbsp;</p>

        <v-card class="mdc-card__primary-action">

            <v-card-media src="https://i.ytimg.com/vi/gC0pNkf7qzU/maxresdefault.jpg">
            </v-card-media>

            <h2 class="mdc-typography mdc-typography--headline6">Our Changing Planet</h2>
            <h3 class="mdc-typography mdc-typography--subtitle2">by Kurt Wagner</h3>

            <v-card-action>

                <template #buttons>
                    <v-btn v-ripple>Hello</v-btn>
                </template>
                <template #icons>
                    <v-btn-icon icon="favorite"></v-btn-icon>
                    <v-btn-icon icon="share"></v-btn-icon>
                </template>

            </v-card-action>

        </v-card>


        <!-- <v-dialog title="Message" :open="open">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.

            <template #actions>
                <v-btn raised data-mdc-dialog-action="accept" data-mdc-dialog-button-default>OK</v-btn>
                <v-btn data-mdc-dialog-action="cancel">Cancel</v-btn>                
            </template>

        </v-dialog> -->

        <!-- <v-btn outlined>Hello
            <template #after="{ }">
               <i class="material-icons mdc-icon-button__icon">favorite</i>
            </template>
        </v-btn> -->


        <v-btn v-ripple outlined @click="open=!open">Dialog</v-btn>


        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>

        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>

        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                checked: false,
                open:true
            }
        }
    }

</script>