<template>
  <!-- apapun yang ada didalam form submit mempunyai input dia bakal kebaca ke form @submit-->
  <form @submit="checkForm($event)">
    <div class="row">
      <div class="col-xl-12">
        <h1>Contact Person</h1>
        <hr />

        <div class="form-group">
          <label for="name">Name</label>
          <input
            name="name"
            autocomplete="name"
            type="text"
            id="name"
            class="form-control"
            v-model="formData.name"
          />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            autocomplete="email"
            id="email"
            class="form-control"
            v-model="formData.email"
          />
        </div>

        <div class="form-group">
          <label for="subjek">Subjek</label>
          <input
            type="text"
            id="subjek"
            class="form-control"
            v-model="formData.subjek"
          />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            rows="3"
            class="form-control"
            v-model="formData.message"
          >
          </textarea>
        </div>

        <div class="form-group">
          <h5>Mont to get Promotion</h5>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="Newsletter"
              id="newsletter"
              v-model="formData.extras"
            />
            <label class="form-check-label" for="newsletter">Newsletter</label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="Promotion"
              id="promotion"
              v-model="formData.extras"
            />
            <label class="form-check-label" for="promotion">Promotion</label>
          </div>
        </div>

        <div class="form-group">
          <h5>What Are You</h5>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              value="male"
              id="male"
              v-model="formData.gender"
            />
            <label class="form-check-label" for="male">Male</label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              value="female"
              id="female"
              v-model="formData.gender"
            />
            <label class="form-check-label" for="female">Female</label>
          </div>
        </div>

        <div class="form-group">
          <label for="country">Country</label>
          <select
            v-model="formData.country"
            class="form-control"
            id="country"
            autocomplete="country"
          >
            <option
              v-for="(country, index) in listCountry"
              :key="index + country"
            >
              {{ country }}
            </option>
          </select>
        </div>
        <button class="btn btn-primary">Submit</button>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      errors: [],
      formData: {
        name: "",
        email: "",
        subjek: "",
        message: "",
        extras: [],
        gender: "",
        country: "",
      },
      listCountry: ["Indonesia", "Jepang", "Korea", "China"],
    };
  },
  methods: {
    checkForm(e) {
      e.preventDefault();
      this.errors = [];

      if (!this.formData.name) {
        this.errors.push("name is required");
      }
      console.log(errors);
    },
    submitForm() {
      console.log(this.formData);
    },
  },
};
</script>
