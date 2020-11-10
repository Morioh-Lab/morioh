<template>


  <v-drawer dismissible title="Morioh UI" subtitle="support@morioh.com" :open="open">

    <v-list>
      <v-list-item v-ripple>
        <template #graphic>
          <i class="material-icons" aria-hidden="true">inbox</i>
        </template>
        <template #text>Getting started</template>
      </v-list-item>

      <v-list-item v-ripple>
        <template #graphic>
          <i class="material-icons" aria-hidden="true">star</i>
        </template>
        <template #text>Typography</template>
      </v-list-item>

      <v-list-item v-ripple>
        <template #graphic>
          <i class="material-icons" aria-hidden="true">opacity</i>
        </template>
        <template #text>Colors</template>
      </v-list-item>

      <v-list-item v-ripple>
        <template #graphic>
          <i class="material-icons" aria-hidden="true">send</i>
        </template>
        <template #text>Sent Mail</template>
      </v-list-item>

      <v-list-divider></v-list-divider>
      <v-list-header>Components</v-list-header>

      <v-list-item v-ripple>
        <template #text>Button</template>
      </v-list-item>
      <v-list-item v-ripple>
        <template #text>Button Icon</template>
      </v-list-item>
      <v-list-item v-ripple>
        <template #text>Avatar</template>
      </v-list-item>
      <v-list-item v-ripple>
        <template #text>Grid</template>
      </v-list-item>
      <v-list-item v-ripple>
        <template #text>List</template>
      </v-list-item>


    </v-list>


  </v-drawer>
  <!-- 

  <aside class="mdc-drawer mdc-drawer--dismissible mdc-top-app-bar--fixed-adjust">
    <div class="mdc-drawer__header">
      <h3 class="mdc-drawer__title">Morioh UI</h3>
      <h6 class="mdc-drawer__subtitle">support@morioh.com</h6>
    </div>
    <div class="mdc-drawer__content">

      <v-list>
        <v-list-item>
          <template #graphic>
            <i class="material-icons" aria-hidden="true">inbox</i>
          </template>
          <template #text>Inbox</template>
        </v-list-item>
      </v-list>

      <div class="mdc-list">
        <a class="mdc-list-item mdc-list-item--activated" href="#" aria-current="page">
          <span class="mdc-list-item__ripple"></span>
          <i class="material-icons mdc-list-item__graphic" aria-hidden="true">inbox</i>
          <span class="mdc-list-item__text">Inbox</span>
        </a>
        <a class="mdc-list-item" href="#">
          <span class="mdc-list-item__ripple"></span>
          <i class="material-icons mdc-list-item__graphic" aria-hidden="true">star</i>
          <span class="mdc-list-item__text">Star</span>
        </a>
        <a class="mdc-list-item" href="#">
          <span class="mdc-list-item__ripple"></span>
          <i class="material-icons mdc-list-item__graphic" aria-hidden="true">send</i>
          <span class="mdc-list-item__text">Sent Mail</span>
        </a>
        <a class="mdc-list-item" href="#">
          <span class="mdc-list-item__ripple"></span>
          <i class="material-icons mdc-list-item__graphic" aria-hidden="true">drafts</i>
          <span class="mdc-list-item__text">Drafts</span>
        </a>

        <hr class="mdc-list-divider">
        <h6 class="mdc-list-group__subheader">Labels</h6>
        <a class="mdc-list-item" href="#">
          <span class="mdc-list-item__ripple"></span>
          <i class="material-icons mdc-list-item__graphic" aria-hidden="true">bookmark</i>
          <span class="mdc-list-item__text">Family</span>
        </a>
        <a class="mdc-list-item" href="#">
          <span class="mdc-list-item__ripple"></span>
          <i class="material-icons mdc-list-item__graphic" aria-hidden="true">bookmark</i>
          <span class="mdc-list-item__text">Friends</span>
        </a>
        <a class="mdc-list-item" href="#">
          <span class="mdc-list-item__ripple"></span>
          <i class="material-icons mdc-list-item__graphic" aria-hidden="true">bookmark</i>
          <span class="mdc-list-item__text">Work</span>
        </a>
      </div>
    </div>
  </aside> -->
</template>

<script>

  import { provide, ref, watch, react } from 'vue';

  export default {

    // props:{
    //   open:Boolean
    // }


    setup(props) {

      const open = ref(props.open);

      watch(() => props.open, (first, second) => {
        console.log(
          "Watch props.selected function called with args:",
          first,
          second
        );
      });
    },


    // data() {
    //   return {
    //     open: false
    //   }
    // },

    // provide: {
    //   drawer: this.$refs.drawer
    // },
    props: {
      open: {
        type: Boolean,
        default: true
      }
    }

    // data() {
    //   return {
    //     open: false
    //   }
    // },

    // mounted() {

    //   // this.root.$on('nav', () => {
    //   //   this.open = !this.open;
    //   // });

    // }
  }
</script>