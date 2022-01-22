<template>
  <div class="home">
    <!--Created full width container with class b-container-fluid, used id=divider to add bottom border at the end-->
    <b-container fluid class="bv-example-row" id="divider">
      <!--Using bootstrap vue grid layout-->
      <b-row>
        <b-col md="10" offset-md="1">
          <img src="@/assets/images/city.jpg" class="img-fluid"  alt="Image Of the city">
          <!--Using bootstrap vue grid layout to create nested grid columns in a row container-->
          <b-row class="my-md-4">
            <b-col md="10" offset-md="1" class="text-uppercase">
              <!--Section Heading-->
              <h1>Featured Projects</h1>
            </b-col>
            <!--Adding w-100 class to force next columns to break to new line-->
            <div class="w-100"></div>
            <b-col md="10" offset-md="1">
              <b-row class="my-md-4">
                <b-col md="4" class="font-italic text-md-left text-uppercase">
                  <!--Project title-->
                  <h2>{{projectTitle}}</h2>
                </b-col>
                <b-col md="4" class="text-justify">
                  <!--Project info-->
                  <p>{{projectInfo}}</p>
                </b-col>
                <b-col md="4">
                  <!--Project image, used id=project__img to style project images-->
                  <img id="project__img" src="@/assets/images/grand-avenue.jpg" alt="Image Of The Grand&#44; LA">
                </b-col>
              </b-row>
              <b-row class="my-md-4">
                <!--Set project title order to push it to the last position, used other font property to style and position the text-->
                <b-col md="4" class="font-italic text-md-right text-uppercase order-md-12">
                  <!--Project title-->
                  <h2>{{projectTitle}}</h2>
                </b-col>
                <b-col md="4" class="text-justify">
                  <!--Project info-->
                  <p>{{projectInfo}}</p>
                </b-col>
                <b-col md="4" class="order-md-first">
                  <!--Project image, used id=project__img to style project images-->
                  <img id="project__img" src="@/assets/images/grand-avenue.jpg" alt="Image Of The Grand&#44; LA">
                </b-col>
              </b-row>
              <b-row class="my-md-4">
                <b-col md="4" class="font-italic text-md-left text-uppercase">
                  <!--Project title-->
                  <h2>{{projectTitle}}</h2>
                </b-col>
                <b-col md="4" class="text-justify">
                  <!--Project info-->
                  <p>{{projectInfo}}</p>
                </b-col>
                <b-col md="4">
                  <!--Project image, used id=project__img to style project images-->
                  <img id="project__img" src="@/assets/images/grand-avenue.jpg" alt="Image Of The Grand&#44; LA">
                </b-col>
              </b-row>
              <div id="portfolio__link" md="8" offset-md="2" class="my-md-3 text-uppercase">
                <!--Navigation link for the portfolio page, used id=portfolio__link to remove styling-->
                <a href="portfolio.html">View All Projects</a>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <!--Created parallax effect using bootstrap grid layout, used id=parallax__conatiner to add background image and styling-->
    <div id="parallax__container"> 
        <b-row class="h-100">
            <b-col col-md-12 class="align-self-center">
            </b-col>
        </b-row>
    </div>
    <!--Created full width container with class b-container-fluid-->
    <b-container fluid class="bv-example-row">
      <b-row class="my-md-4">
        <b-col md="10" offset-md="1" lg="8" offset-lg="2" class="text-uppercase">
          <!--Section Heading-->
          <h1>Recent Blogs</h1>
        </b-col>
        <!--Adding w-100 class to force next columns to break to new line-->
        <div class="w-100"></div>
        <b-col md="10" offset-md="1" lg="8" offset-lg="2">
          <b-row class="my-md-3" id="blog__content">
            <b-col md="4" class="font-italic text-md-left" v-for="id in blogId" v-bind:key="id.id">
              <!--Blog title-->
              <h2 class="mb-3 font-italic" id="blog__title">{{id.title}}</h2>
              <!--Blog post date, used id=date to create letter spacing-->
              <p id="date">{{id.date}}</p>
              <!--Blog info-->
              <p class="text-justify">{{blogInfo}}</p>
              <!--Navigation link to the full blog post, used id=link to remove styling-->
              <div id="link">
                  <a href="#">Read More</a>
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
        //Variables defined for repetative content in the HTML.
        projectTitle: 'The Grand, LA',
        projectInfo:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis consectetur fugit beatae dolorum hic nulla quasi fuga ratione sint tempora ea quia praesentium eum, qui laudantium, illo voluptate perspiciatis recusandae, dolores impedit deserunt! Laudantium, eius earum sint repellat officiis natus, ex adipisci beatae repudiandae quaerat dolor vero.',
        blogInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio officia nostrum commodi. Fuga voluptatum voluptate quidem, labore ex sit asperiores!',
        blogId: [
          {id: 1, date: 'July 23, 2021', title: 'Camplain Towers South, Florida'}, 
          {id: 2, date: 'Aug 25, 2021', title: '101 Fremont, Seismic Resiliency'}, 
          {id: 3, date: 'Sep 15, 2021', title: 'Ductility vs Elasticity'}
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

//Section title H1 styling for large and small screen 
h1 {
  font-size: 1.5em;
  @include media-query("mobile") {
    font-size: $font-size;
    margin: 1rem 0 0;
  }
}

//Project and Blog title H2 styling for large and small screen 
h2 {
  font-size: 2.3em;
  @include media-query("mobile") {
    font-size: 1.5em;
    margin: 1rem 0;
  }
  @include media-query("lg") {
    font-size: 3.8em;
  }
}

//Project image stling to transform image into a square shape
#project__img {
  object-fit: cover;
  height: 260px;
  width: 100%;
  @include media-query("mobile") {
    object-fit: fill;
  }
}

//Adding bottom border at the end of Section for small screen
#divider {
  @include media-query("mobile") {
    border-bottom: 1px dashed $gray;
  }
}

//Added top and bottom margin to the view all projects link
#portfolio__link {
  @include media-query("mobile") {
    margin: 1rem 0;
  }
}

//Styling for the view all projects link
#portfolio__link a {
  color: $black;
  font-size: $font-size;
  text-decoration: underline;
  @include media-query("mobile") {
    //smaller screen text styling for link text
    font-size: 1rem;
  }
  &:hover {
    color: $gray;
  }
}

//Parallax effect styling for large and small screens
#parallax__container {
  background-image: url("../assets/images/spaceneedle.jpg");
  height: 600px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @include media-query("mobile") {
    //removing parallax effect for small screen
    display: none;
  }
}

//Recent blog content styling
#blog__content{
  //blog title styling
  #blog__title {
    font-size: 2.1em;
  }
  //blog post date styling
  #date {
    letter-spacing: 6px;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
  }
  //read more link of the blog styling
  #link {
    margin-bottom: 0.5rem;
  }

  #link a {
    color: $black;
    font-size: $font-size;
    text-decoration: underline;
    text-transform: uppercase;
    @include media-query("mobile") {
      //smaller screen text styling for link text
      font-size: 1rem;
    }
    &:hover {
      color: $gray;
    }
  }
  @include media-query("mobile") {
    //smaller screen text styling for blog title
    #blog__title {
      font-size: 1.5em;
    }
  }
}

</style>
