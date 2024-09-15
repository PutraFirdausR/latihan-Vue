<template>
  <Form @submit="onSubmit">
    <label for="name">Name</label>
    <Field
      name="name"
      :rules="validateName"
      class="form-control"
      placeholder="input your name here"
    />
    <ErrorMessage name="name" as="div" v-slot="{ message }">
      <div class="alert alert-danger" role="alert">
        {{ message }}
      </div>
    </ErrorMessage>

    <label for="email">Email</label>
    <Field
      name="email"
      :rules="validateEmail"
      v-slot="{ field, errors, errorMessage }"
    >
      <input
        type="text"
        id="email"
        class="form-control"
        v-bind="field"
        :class="{ 'is-invalid': errors.length !== 0 }"
      />
      <div class="alert alert-danger" role="alert" v-if="errors.lenght !== 0">
        {{ errorMessage }}
      </div>
    </Field>

    <button class="btn btn-primary">Submit</button>
  </Form>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  methods: {
    isRequired(value) {
      // isRequired otomatis memikili sebuah value yang menggambil dari name
      if (!value) {
        return "Name is Required";
      }
      return true;
    },
    validateName(value) {
      if (!value) {
        return "Name is Required";
      }
      return true;
    },
    validateEmail(value) {
      if (!value) {
        return "This Email is Required";
      }
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(value)) {
        return "Bad email";
      }
      return true;
    },
    onSubmit(values, { resetForm }) {
      console.log(values);
      resetForm();
    },
  },
};
</script>
