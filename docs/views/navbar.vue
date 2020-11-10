<template>
  <!-- <header class="mdc-top-app-bar">
    <div class="mdc-top-app-bar__row">
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button" aria-label="Open navigation menu">menu</button>
        <span class="mdc-top-app-bar__title">Page title</span>
      </section>
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
        <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Favorite">favorite</button>
        <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Search">search</button>
        <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Options">more_vert</button>
      </section>
    </div>
  </header> -->


  <!-- <header class="mdc-top-app-bar mdc-top-app-bar--fixed">
    <div class="mdc-top-app-bar__row">
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button" aria-label="Open navigation menu">menu</button>
        <span class="mdc-top-app-bar__title">Page title</span>
      </section>
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
        
      
          <v-btn class="mdc-top-app-bar__action-item"  raised>Hello</v-btn>
        
        <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Search">search</button>
        <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Options">more_vert</button>
      </section>
    </div>
  </header> -->

  <v-navbar shrink-on-scroll fixed>
    <template #start>
      <!-- <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button"
        aria-label="Menu">menu</button> -->
      <v-btn-icon class="mdc-top-app-bar__action-item" icon="menu" @click="toggle"></v-btn-icon>
    </template>
    <template #end>
      <v-btn-icon icon="favorite"></v-btn-icon>
      <v-btn-icon icon="search"></v-btn-icon>
      <v-btn-icon icon="more_vert"></v-btn-icon>
      <v-btn-icon icon="favorite"></v-btn-icon>
      <v-btn-icon icon="search"></v-btn-icon>
      <v-btn-icon icon="more_vert"></v-btn-icon>
      <v-btn-icon icon="favorite"></v-btn-icon>
      <v-btn-icon icon="search"></v-btn-icon>
      <v-btn-icon icon="more_vert"></v-btn-icon>
<!--       
      <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button"
        aria-label="Favorite">favorite</button>
      <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Search">search</button>
      <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button"
        aria-label="Options">more_vert</button> -->
    </template>
  </v-navbar>
</template>

<script>
  // import { MDCTopAppBar } from '@material/top-app-bar';

  import { inject } from 'vue';

  export default {

    setup(props) {
     // var drawer = inject('drawer');

      const toggle = inject('toggle');

      // var toggle = () => {

      //   console.log(drawer)

      //   drawer.value = !drawer.value;
      // }

      return {
        toggle
      }

    }

    // inject: ['drawer'],

    // mounted() {


    //   // // Instantiation
    //   // const topAppBarElement = document.querySelector('.mdc-top-app-bar');
    //   // const topAppBar = new MDCTopAppBar(topAppBarElement);

    //   // // console.log('call')
    // },
    // methods: {
    //   click() {
    //     console.log(this.drawer);
    //     this.drawer.open = !this.drawer.open;
    //     console.log(this.drawer);
    //   }
    // }

  }
</script>