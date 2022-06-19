<template>
  <div class="card card-body mt-4">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
          <textarea type="text" v-model="form.name" rows="5" cols="33"></textarea><td></td><br><br>
        <label>Name</label>
        <!-- <input v-model="form.name" class="form-control" required /> -->
      </div>

      <!-- <div class="form-group mt-3">
        <label>Email</label>
        <input
          v-model="form.email"
          class="form-control"
          type="email"
        />
      </div> -->
      <button @click="input = form.name " type="submit">Submit/Create</button>

      <!-- <button type="submit" class="btn btn-success mt-3">
        Create User
      </button> -->
    </form>
  </div>
</template>

<script>
import { createUser } from '@/firebase'
import { reactive } from 'vue'

export default {
  setup() {
    const form = reactive({ name: '', email: '' })

    const onSubmit = async () => {
      await createUser({ ...form })
      form.name = ''
      // form.email = ''
    }

    return { form, onSubmit }
  }
}
</script>
