<template>
  <div class="contact">
    <!--Created full width container with class b-container-fluid-->
    <b-container fluid class="bv-example-row">
      <b-row class="my-md-3">
        <b-col md="3" offset-md="1" offset-lg="2" class="mb-4 text-uppercase font-italic">
          <!--Section Heading-->
          <h1>Be In Touch</h1>
        </b-col>
        <!--Adding w-100 class to force next columns to break to new line-->
        <div class="w-100"></div>
        <b-col md="10" offset-md="1" lg="8" offset-lg="2">
          <!--Contact Form-->
          <b-form @submit="onSubmit" v-if="show">
            <!--Input box for First Name-->
            <b-form-group id="input-group-1" label="First Name" label-for="input-1" class="style" label-sr-only>
              <b-form-input
                id="input-1"
                v-model="form.fname"
                placeholder="First Name"
                required
              ></b-form-input>
            </b-form-group>
            <!--Input box for Last Name-->
            <b-form-group id="input-group-2" label="Last Name" label-for="input-2" class="style" label-sr-only>
              <b-form-input
                id="input-2"
                v-model="form.lname"
                placeholder="Last Name"
                required
              ></b-form-input>
            </b-form-group>
            <!--Input box for E-mail-->
            <b-form-group id="input-group-3" label="Email" label-for="input-3" class="style" label-sr-only>
              <b-form-input
                id="input-3"
                v-model="form.email"
                type="email"
                placeholder="E-mail"
                required
              ></b-form-input>
            </b-form-group>
            <!--Input box for Country-->
            <b-form-group id="input-group-4" label="Country" label-for="input-4" class="style" label-sr-only>
              <b-form-input
                id="input-4"
                v-model="form.country"
                placeholder="Country"
                required
              ></b-form-input>
            </b-form-group>
            <!--Input box for Subject-->
            <b-form-group id="input-group-5" label="Subject" label-for="input-5" class="style" label-sr-only>
              <b-form-input
                id="input-5"
                v-model="form.subject"
                placeholder="Subject"
                required
              ></b-form-input>
            </b-form-group>
            <!--Input box for Message-->
            <b-form-group id="input-group-6" label="Message" label-for="input-6" class="style" label-sr-only>
              <b-form-input
                id="input-6"
                v-model="form.message"
                placeholder="Enter you message here"
                required
              ></b-form-input>
            </b-form-group>
            <!--Submit button for Cotact Form-->
            <b-button type="submit">Submit</b-button>
          </b-form>
        </b-col>
        <b-col md="10" offset-md="1" lg="8" offset-lg="2" class="text-uppercase font-italic">
          <!--Subscribe Form-->
          <h2>Subscribe Form</h2>
        </b-col>
        <b-col md="10" offset-md="1" lg="8" offset-lg="2" class="text-uppercase font-italic">
          <!--Subscribe via email or phone number - v-if else condition-->
          <b-form-select v-model="selected" :options="options" class="mb-3" id="box"></b-form-select>
        </b-col>
        <b-col md="10" offset-md="1" lg="8" offset-lg="2">
          <div v-if="selected == 'email'">
            <b-form @submit="onSubmitsub" v-if="show">
              <!--Input box for E-mail for Subscribe From-->
              <b-form-group id="input-group-1" label="Email" label-for="input-1" class="style" label-sr-only>
                <b-form-input
                  id="input-1"
                  v-model="form1.field"
                  type="email"
                  placeholder="E-mail"
                  required
                ></b-form-input>
              </b-form-group>
              <!--Submit button for Subscibr Form-->
              <b-button type="submit">Submit</b-button>
            </b-form>
          </div>  
          <div v-else>
            <b-form @submit="onSubmitsub" v-if="show">
              <!--Input box for E-mail for Subscribe From-->
              <b-form-group id="input-group-1" label="Phone Number" label-for="input-1" class="style" label-sr-only>
                <b-form-input
                  id="input-1"
                  v-model="form1.field"
                  type="number"
                  placeholder="Phone Number"
                  required
                ></b-form-input>
              </b-form-group>
              <!--Submit button for Subscibr Form-->
              <b-button type="submit">Submit</b-button>
            </b-form>
          </div>  
        </b-col>
      </b-row>
    </b-container> 
    <!--container for the map-->
    <div class="container-fluid p-0">
      <div class="row">
        <div class="col p-0">
          <!--added iframe of the map here-->
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d154208.22698555348!2d-122.4821484406407!3d47.61294318211764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA!5e1!3m2!1sen!2sus!4v1635662539645!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          fname: '',
          lname: '',
          email: '',
          country: '',
          subject: '',
          message: '',
        },
        form1: {
          field: '',
        },
        options: [
          {value: null, text: '-- Select an option --'},
          {value:'email', text: 'Subscribe via email'},
          {value:'phone', text: 'Subscribe via Phone Number'}
        ],
        show: true,
        selected: null
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        //alert(JSON.stringify(this.form))
      },
      onSubmitsub(event) {
        event.preventDefault()
        //alert(JSON.stringify(this.form1))
      }
    }
  }
</script>

<style scoped lang="scss">

// Importing partials here
@import '@/assets/styles/_base.normalize.scss';
@import '@/assets/styles/_components.content.scss';
@import '@/assets/styles/_settings.responsive.scss';
@import '@/assets/styles/_settings.variables.scss';

//Added style to H1 text Be in touch
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

//Added style to H2 text Subscribe here

h2 {
  font-weight: 100;
  font-size: 2.1em;
  //changed font size of h1 for small screen
  @include media-query("mobile") {
      font-size: 1.5em;
  }
}

//Form styling

//added border-bottom to the input boxes
.style {
  border-bottom: 2px $black solid;
}

//input tag styling
#box , input {
  border: none;
  background: transparent;
  color: $black;
  font-size: 1em;
  width: 100%;
} 

#box {
  color: $gray;
  border-bottom: 1px $black dashed;
}

//placeholder styling
::placeholder {
  font-style: italic;
  font-weight: lighter;
  margin-bottom: 0;
  color: $gray;
  //changed font size of placeholder text for small screen
  @include media-query("mobile") {
    font-size: 1em;
  }
}
*:focus {
  outline: none;
}

//Submit button styling 
button {
  display: block;
  font-size: $font-size;
  font-style: italic;
  font-weight: 500;
  height: 50px;
  border: none;
  background: transparent;
  color: $black;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    background-color: $white;
    color: $gray;
    cursor: pointer;
  }
  //changed font size of submit buttonfor small screen
  @include media-query("mobile") {
    font-size: 1em;
  }
}

// Map Styling 

.col {
  iframe {
  display: block; 
  width: 100%;
  height: 500px;
  margin-top: 25px; 
    //removed iframe for small screen
    @include media-query("mobile") {
      display: none;
    }
  }
}

</style>