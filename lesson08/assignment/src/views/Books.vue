<template>
  <div class="books">
    <!--Created full width container with class b-container-fluid-->
    <b-container fluid class="bv-example-row">
      <!--Using bootstrap vue grid layout-->
      <b-row>
        <b-col md="10" offset-md="1">
          <img src="@/assets/images/book.jpg" class="img-fluid"  alt="Image Of the city">
          <!--Using bootstrap vue grid layout to create nested grid columns in a row container-->
          <b-row class="my-md-4">
            <b-col md="10" offset-md="1" lg="8" offset-lg="1">
              <!--Section Heading-->
              <h1 class="text-uppercase">Your Library</h1>
              <!--Section text-->
              <p>Structural engineering is one of the most complicated engineering. It gets so deep that you should learn all the aspects and it is also important that your basics should be crystal clear. Let us start from scratch and understand all the basics.
                  Structural Engineering has 4 aspects&#58;</p>
              <!--Section ordered list-->
              <ol class="px-3 font-italic">
                  <li>Structural Behaviour</li>
                  <li>Structural Analysis</li>
                  <li>Structural Design</li>
                  <li>Sesmic Analysis and Design</li>
              </ol>
              <!--Section text-->
              <p>In order to master structural engineering, you should learn all four aspects. 
                  If you fail to conquer any one, you will fail. So read the post carefully.</p> 
            </b-col>
            <!--Adding w-100 class to force next columns to break to new line-->
            <div class="w-100"></div>
            <b-col md="10" offset-md="1">
              <!--Added nested 2 column layout with bootstrap grids-->
              <b-row class="my-md-4">
                <b-col md="4" class="font-italic text-uppercase">
                  <!--Aspect heading in col-1-->
                  <h2>Structural Behaviour</h2>
                </b-col>
                <b-col md="8" class="text-justify">
                  <!--Aspect info in col-2-->
                  <p>Start with structural behaviour. It is the subject closest to our everyday life 
                      and our understanding. Without getting a deep insight of structural behavior, 
                      you can never perform correct structural analysis. If I pour water on floor, 
                      I know that it will flow from a high point to a low point (Flow under gravity). 
                      Similarly structural behavior will be very simple if you perform some in house tests, 
                      like bend a scale and see what it does. Bend a sponge and see how its pores behave. 
                      In order to understand structural behavior, refer to the following sets of books&#58;</p>
                  <!--Using accrdion to minimize the book list-->
                  <div class="accordion" role="tablist">
                    <!--Created card for accordion-->
                    <b-card no-body class="mb-1">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <h5 class="mb-0">
                          <!--Collapse button for accordion-->
                          <b-button block v-b-toggle.accordion-1 variant="light" id="click__me">
                              <!--Accordion heading-->
                              Click here to view book List
                          </b-button>
                        </h5>
                      </b-card-header>
                      <!--Collapsed info (book list) of accordion-->
                      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="font-italic">
                          <b-card-text v-for="book in sb" :key="book.id"> {{book.name}} </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                  </div>
                </b-col>
                <b-col md="4" class="mt-3 font-italic text-uppercase">
                  <!--Aspect heading in col-1-->
                  <h2>Structural Analysis</h2>
                </b-col>
                <b-col md="8" class="mt-2 text-justify">
                  <!--Aspect info in col-2-->
                  <p>Understanding structural behavior is one thing. That will help you in developing your 
                    intuition to understand the deflected shapes for structures under a set of forces. 
                    But in order to quantify their deflected shape, the forces and moments, the curvature 
                    and deformations you need to valuate it numerically. This numerical evaluation can be 
                    done by either simplified set of equations and simplified structure or a complicated set 
                    of equations with the entire structure. But this phase is called structural analysis. 
                    You either use spreadsheets, software or a pen and a paper to get these values of forces 
                    so that you can design the structure. The best books that you can possibly read&#58;</p>
                  <!--Using accrdion to minimize the book list-->
                  <div class="accordion mb-2" role="tablist">
                    <!--Created card for accordion-->
                    <b-card no-body class="mb-1">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <h5 class="mb-0">
                          <!--Collapse button for accordion-->
                          <b-button block v-b-toggle.accordion-2 variant="light" id="click__me">
                              <!--Accordion heading-->
                              Static Analysis&#58;
                          </b-button>
                        </h5>
                      </b-card-header>
                      <!--Collapsed info (book list) of accordion-->
                      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="font-italic">
                          <b-card-text  v-for="book in sa" :key="book.id"> {{book.name}}</b-card-text>                  
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                  </div>
                  <div class="accordion mb-2" role="tablist">
                    <!--Created card for accordion-->
                    <b-card no-body class="mb-1">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <h5 class="mb-0">
                          <!--Collapse button for accordion-->
                          <b-button block v-b-toggle.accordion-3 variant="light" id="click__me">
                              <!--Accordion heading-->
                              Dynamic Analysis&#58;
                          </b-button>
                        </h5>
                      </b-card-header>
                      <!--Collapsed info (book list) of accordion-->
                      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="font-italic">
                          <b-card-text v-for="book in da" :key="book.id"> {{book.name}} </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                  </div>
                  <div class="accordion mb-2" role="tablist">
                    <!--Created card for accordion-->
                    <b-card no-body class="mb-1">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <h5 class="mb-0">
                          <!--Collapse button for accordion-->
                          <b-button block v-b-toggle.accordion-4 variant="light" id="click__me">
                              <!--Accordion heading-->
                              Finite Element Analysis&#58;
                          </b-button>
                        </h5>
                      </b-card-header>
                      <!--Collapsed info (book list) of accordion-->
                      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="font-italic">
                          <b-card-text v-for="book in fea" :key="book.id"> {{book.name}} </b-card-text>                   
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                  </div>
                </b-col>
              </b-row>
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
    <!--Created full width container with class container-fluid-->
    <b-container fluid class="bv-example-row">
      <b-row>
        <b-col md="10" offset-md="1">
          <!--Using bootstrap grid layout to create nested grid columns in a row container-->
          <b-row class="my-md-4">
            <b-col md="10" offset-md="1">
              <!--Added nested 2 column layout with bootstrap grids-->
              <b-row class="my-md-4">
                <b-col md="4" class="mt-2 font-italic text-uppercase">
                  <!--Aspect heading in col-1-->
                  <h2 class="pr-3">Structural Design</h2>
                </b-col>
                <b-col md="8" class="mt-2 text-justify">
                  <!--Aspect info in col-2-->
                  <p>Now once you evaluate the forces in the structures you are 20% there in completing the structure. Rest all is structural design. 
                    It is important to thoroughly understand structural analysis, because if you evaluate the forces wrong, 
                    then your design has already failed. It is like opening up a broken umbrella. You know that it is not going to work. 
                    So make sure you are good at analysis before you start designing structure. Now design is different for different materials. 
                    There is steel and there is reinforced concrete. So here are a few books to understand design of structures.</p>
                  <!--Using accrdion to minimize the book list-->
                  <div class="accordion" role="tablist">
                    <!--Created card for accordion-->
                    <b-card no-body class="mb-1">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <h5 class="mb-0">
                          <!--Collapse button for accordion-->
                          <b-button block v-b-toggle.accordion-1 variant="light" id="click__me">
                              <!--Accordion heading-->
                              Click here to view book List
                          </b-button>
                        </h5>
                      </b-card-header>
                      <!--Collapsed info (book list) of accordion-->
                      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="font-italic">
                          <b-card-text v-for="book in sd" :key="book.id"> {{book.name}} </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                  </div>
                </b-col>
                <b-col md="4" class="mt-3 font-italic text-uppercase">
                  <!--Aspect heading in col-1-->
                  <h2>Seismic Analysis and Design</h2>
                </b-col>
                <b-col md="8" class="my-2 text-justify">
                  <!--Aspect info in col-2-->
                  <p>Oh boy, this is my favorite part. I love designing buildings to resist earthquakes. I am living near one of the world’s most 
                    dangerous fault (Cascadia subduction zone). Dynamic analysis and design of structure is my favorite topic. I love doing this 
                    thing and I could do it forever. Just because it can present the biggest challenges ever. So in order to understand designing 
                    of structures in earthquakes you have to study dynamic analysis. You have to be good at mathematics. So here are some books on 
                    seismic analysis and design.</p>
                  <!--Using accrdion to minimize the book list-->
                  <div class="accordion" role="tablist">
                    <!--Created card for accordion-->
                    <b-card no-body class="mb-1">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <h5 class="mb-0">
                          <!--Collapse button for accordion-->
                          <b-button block v-b-toggle.accordion-6 variant="light" id="click__me">
                              <!--Accordion heading-->
                              Click here to view book List
                          </b-button>
                        </h5>
                      </b-card-header>
                      <!--Collapsed info (book list) of accordion-->
                      <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
                        <b-card-body class="font-italic">
                          <b-card-text v-for="book in eq" :key="book.id"> {{book.name}} </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                  </div>
                </b-col>
              </b-row>
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
      sb: [
        {id: 0, name: '- The Elements of Structures by W Morgan edited by I.Buckle'},
        {id: 1, name: '- Structures by Schodek and Bechthold'}
      ],
      sa: [
        {id: 0, name: '- Structural Analysis by Devdas Menon'},
        {id: 1, name: '- Advanced Structural Analysis by Devdas Menon'},
        {id: 2, name: '- Strength of Materials by Stephen Timoshenko'},
        {id: 3, name: '- Structural Analysis: A unified classical matrix approach by A. Ghali, A.M.Neville and T.G.Brown'},
        {id: 4, name: '- Fundamentals of Structural Stability by Simitses and Hodges'},
        {id: 5, name: '- Theory of Elastic Stability by Timoshenko'},
        {id: 6, name: '- Theory of Plates and Shells by Reddy'}
      ],
      da: [
        {id: 0, name: '- Dynamics of structures by A.K.Chopra'},
        {id: 1, name: '- Fundamentals of Vibrations by Leonard Meirovitch'}
      ],
      fea: [
        {id: 0, name: '- Fundamentals of Finite element analysis by David Hutton'},
        {id: 1, name: '- Nonlinear finite element analysis by Bathe'}
      ],
      sd: [
        {id: 0, name: '- Reinforced Concrete Design by Park and Paulay'},
        {id: 1, name: '- Reinforced Concrete: Mechanics and Design by Wight and MacGregor'},
        {id: 2, name: '- Reinforced Concrete Design by Devdas Menon'},
        {id: 3, name: '- Steel Structures Design by Alan Williams'},
        {id: 4, name: '- Ductile Design of Steel Structures by Michael Bruneau'},
        {id: 5, name: '- Structural Analysis: A unified classical matrix approach by A. Ghali, A.M.Neville and T.G.Brown'},
      ],
      eq: [
        {id: 0, name: '- Modelling for Structural Analysis : Behavior and Basics by Powell'},
        {id: 1, name: '- Seismic Design of reinforced concrete buildings by Jack Moehle'},
        {id: 2, name: '- Seismic Design of Reinforced Concrete and Masonry Buildings by Paulay and Priestley'},
        {id: 3, name: '- Displacement Based Seismic Design by Priestley'},
        {id: 4, name: '- Plastic analysis of steel structures by M Bill wong'},
        {id: 5, name: '- Plasticity in reinforced concrete by Wai Fah Chen'}
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

//Chanaged font size of h1 for small screen
h1 {
  @include media-query("mobile") {
    font-size: 1.5em;
  } 
}

//Added font styling for h2 tag
h2 {
  font-size: 1.8em;
  //changed font size for small screen
  @include media-query("mobile") {
    font-size: 1.3em;
  }
}

//Added styling to the accordion collapse button

.card {
  border: none;
}

.card-header {
  background-color: $white;
  border: none;
}

#click__me {
  font-size: .7em;
  color: $black;
  background-color: $white;
  outline: none;
  text-decoration: none;
  text-align: start;
  text-transform: uppercase;
}

//Parallax effect styling for large and small screens
#parallax__container {
  background-image: url("../assets/images/library.jpg");
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

</style>