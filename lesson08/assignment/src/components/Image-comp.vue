<template>
  <!--Columns are generated based on the number of image data and size of an array-->
  <b-col lg="4" md="6" class="my-md-3" id="project__tile">
    <!-- Created div container with border class toggle -->
    <div v-bind:class="[isActive ? 'borderclass' : 'noborderclass']" id="border_toggle" @click="toggleShowHide()">
      <!--Project image, used id=project__img to style project images-->
      <img id="project__img" :src="portfolioImage.link" :alt="portfolioImage.disc" />
      <!--overlay effect on project tile-->
      <div id="project__overlay"> 
          <!--name of the project tile-->
          <div id="project__title">{{portfolioImage.title}} </div> 
      </div> 
    </div>
  </b-col>
</template>

<script>
//Importing mixin file to toggle image border
import myToggleMixin from '../mixins/mymixins'

export default {
  //creating mixin here.
  mixins: [myToggleMixin],
  //creating name and prop for images
  name: 'portfolioImage',
  props: {
    portfolioImage: {
      //validation of the props for image object
      type: Object,
      required: true
    }
  },
}
</script>

<style lang="scss">

// Importing partials here
@import '@/assets/styles/_base.normalize.scss';
@import '@/assets/styles/_components.content.scss';
@import '@/assets/styles/_settings.responsive.scss';
@import '@/assets/styles/_settings.variables.scss';

//Added styling for the project tiles 
#project__tile {
  //added style for the project image
  #project__img {
    object-fit: cover;
    width: 100%;
    height: 260px;
    //added margin top and bottom for small screen
    @include media-query("mobile") {
      margin: 1rem 0;
    }
  }
  //added text overlay effect on the project image
  #project__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.6);
    color: #2f2e2e; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.25s;
    text-align: center;
    //added text and background animation on the project tile
    & > * {
      transform: translateY(20px);
      transition: transform 0.25s;
    }
    &:hover {
      opacity: 1;
    }
    &:hover > * {
      transform: translateY(0);
    }
  }
  //added styling to the project overlay text 
  #project__title {
    text-transform: uppercase;
    font-weight: 100;
    font-style: italic;
    font-size: 2.5em;
    padding: 15px;
    //changed font size of project overlay text for small screen
    @include media-query("mobile") {
      font-size: 1.4em;
    }
  }
}

//Image border styling
.borderclass {
  border: 3px solid $black;
}

//removing border styling
.noborderclass {
  border: none;
}

</style>