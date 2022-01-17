<template>
  <div class="books">
    <!--Created full width container with class b-container-fluid-->
    <b-container fluid class="bv-example-row">
      <b-row class="my-md-3">
        <b-col md="3" offset-md="1" offset-lg="2" class="text-uppercase font-italic">
          <!--Section Heading-->
          <h1>Featured Projects</h1>
        </b-col>
        <!--Adding w-100 class to force next columns to break to new line-->
        <div class="w-100"></div>
        <b-col md="10" offset-md="1" lg="8" offset-lg="2">
          <b-row class="my-md-4">
            <b-col lg="4" md="6" class="my-md-3" id="project__tile" v-for="image in portfolioImages" v-bind:key="image.id">
              <!--Project image, used id=project__img to style project images-->
              <img id="project__img" :src="image.link" :alt="image.disc" />
              <!--overlay effect on project tile-->
              <div id="project__overlay"> 
                  <!--name of the project tile-->
                  <div id="project__title">{{image.title}} </div> 
              </div>    
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      portfolioImages: [
        {id:0, link: require('../assets/images/grand-avenue.jpg'), disc: 'Image of The Grand, LA', title: 'The Grand'},
        {id:1, link: require('../assets/images/downtown.jpg'), disc: 'Image of the Downtown', title: 'Downtown'},
        {id:2, link: require('../assets/images/city.jpg'), disc: 'Image of The City', title: 'The City'},
        {id:3, link: require('../assets/images/spaceneedle.jpg'), disc: 'Image of The Space Needle, WA', title: 'The Space Needle'},
        {id:4, link: require('../assets/images/towers.jpg'), disc: 'Image of The Towers', title: 'The Towers'},
        {id:5, link: require('../assets/images/grand-avenue.jpg'), disc: 'Image of The Grand, LA', title: 'The Grand'},
        {id:6, link: require('../assets/images/downtown.jpg'), disc: 'Image of the Downtown', title: 'Downtown'},
        {id:7, link: require('../assets/images/city.jpg'), disc: 'Image of The City', title: 'The City'},
        {id:8, link: require('../assets/images/spaceneedle.jpg'), disc: 'Image of The Space Needle, WA', title: 'The Space Needle'}
      ]
    }
  },
}
</script> 

<style scoped lang="scss">

// Importing partials here
@import '@/assets/styles/_base.normalize.scss';
@import '@/assets/styles/_components.content.scss';
@import '@/assets/styles/_settings.responsive.scss';
@import '@/assets/styles/_settings.variables.scss';

//Added style to H1 text Featured Project 
h1 {
  font-weight: 100;
  font-style: italic;
  font-size: 3.2em;
  line-height: 1.2;
  margin: 0;
  //Added margin top-bottom  and changed font size for small screen
  @include media-query("mobile") {
    font-size: 2.1em;
    margin: 1rem 0;
  }
  @include media-query("lg") {
    font-size: 4.2em;
    margin: 1rem 0;
  }
}

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

</style>