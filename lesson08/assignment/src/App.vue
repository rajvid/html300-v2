<template>
  <div id="app">
    <b-container fluid class="sticky-top" id="header-container">
      <b-row>
        <b-col md="10" offset-md="1">
          <b-navbar toggleable="lg"  id="navbar-toggle" variant="faded">
            <b-navbar-brand href="#">
              <img src="@/assets/images/logo-img.png" alt="Building Insights Logo">
            </b-navbar-brand>
            <b-navbar-toggle target="navbar-toggle-collapse">
                  <template #default="{ expanded }">
                    <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                    <b-icon v-else icon="chevron-bar-down"></b-icon>
                  </template>
            </b-navbar-toggle>
            <b-collapse id="navbar-toggle-collapse" is-nav>
              <b-navbar-nav id="navbar-toggle-link" class="ml-auto">    
                <b-nav-item to="/">Home</b-nav-item>
                <b-nav-item to="/Portfolio">Portfolio</b-nav-item>
                <b-nav-item to="/Books">Resources</b-nav-item> 
                <b-nav-item to="/Contact">Contact Us</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
          <p class="px-3 font-italic" id="tagline">"Envision a taller and a safer future with us!"</p>
        </b-col>
      </b-row>
    </b-container>
    <router-view/>
    <footer>
      <b-container fluid class="bv-example-row">
        <b-row>
          <b-col md="10" offset-md="1" lg="8" offset-lg="2">
            <b-row class="my-md-4">
              <b-col md="3" id="left-text" class="font-italic">
                  <!--Title, used id=left-text to add some styling to the text-->
                  <p>Be In Touch </p>
              </b-col>
              <b-col md="5" id="middle-text">
                  <!--Contact us info, used id=middle-text to add some styling to the text-->
                  <p>Seattle&#44; WA </p>
                  <p>Thebuildinginsights&#64;gmail&#46;com</p>
                  <p>Tel &#49; &#48;&#48;&#48; &#8211; &#48;&#48;&#48; &#8211; &#54;&#53;&#48;&#50; </p>
                  <p>&#169; &#50;&#48;&#50;&#49; by Building Insights </p>
              </b-col>
              <b-col md="3" lg="4" class="mb-2" id="right-link">
                  <!--Social media icons with a link to the particular pages-->
                  <a v-bind:href="gmail" target="_blank"> <img src="@/assets/images/gmail.png" alt="Gmail icon"> </a> 
                  <a v-bind:href="linkedin" target="_blank"> <img src="@/assets/images/linkedin.png" alt="LinkedIn icon"> </a>
                  <a v-bind:href="youtube" target="_blank"> <img src="@/assets/images/youtube.png" alt="YouTube icon"> </a>
                  <a v-bind:href="fb" target="_blank"> <img src="@/assets/images/facebook.png" alt="Facebook icon"> </a>
                  <a v-bind:href="twitter" target="_blank"> <img src="@/assets/images/twitter.png" alt="Twitter icon"> </a>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        //Link addresses for footer icons. V-binded the links for a tag.
        gmail:'mailto:thebuildinginsights@gmail.com',
        linkedin: 'https://www.linkedin.com/in/jinaldoshi26',
        youtube:'https://www.youtube.com/c/StructuralMadness',
        fb:'https://www.facebook.com/structuralmadness/',
        twitter:'https://twitter.com/jinal_r_doshi?lang=en',
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


//Navbar styling

#header-container {
  background-color: $white;
}

#tagline {
  text-transform: capitalize;
}

#navbar-toggle {
  img {
    height: 100px;
  }

  &-link {
    text-align: right;
    a {
      font-weight: normal;
      color: $black;
      text-decoration: none;
      text-align: start;
      margin: 0 1rem;
      padding: 0 1rem;
      @include media-query("mobile") {
        margin: 0.5rem 0;
        &:hover {
          background-color: $black;
          color: gray;
        }
      }
      &.router-link-exact-active, &:hover {
        color: $gray;
      }
    }
  }
}

//Footer Styling
footer {
  align-items: center;
  color: $white;
  width: 100%;
  bottom: 0;
  background-color: $black;
  //left column text Be in touch styling
  #left-text {
      color: $white;
      font-size: 2em;
      line-height: 1.2;
      @include media-query("mobile") {
          font-size: 1.5em;
          margin: 1rem 0;
      }
      @include media-query("lg") {
          font-size: 2.8em;
      }
  }
  //middle column text Be in touch styling
  #middle-text {
    color: $gray;
  }
  //social media link styling for large and small screen
  #right-link a {
    text-decoration: none;
    @include media-query("mobile") {
      //removed margin and padding from 1st social media icon
      &:nth-child(1) img{
        margin-left: 0;
        padding-left: 0;
      }
    }
  }
  //social media icon styling
  #right-link a img {
    height: 40px;
    padding: 7px;
    margin-left: 5px;
  } 
  @include media-query("mobile") {
    //left column text be in touch styling for smaller screen
    #left-text {
      font-size: 2em;
      margin: 1rem 0 0 ;
    }
    //adding margin bottom for social media icons for smaller screen
    .col-md-4 a img  {
      margin-bottom: 1rem;
    }
  }
}

</style>
