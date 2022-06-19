<template>
  <div>
    <tr v-for="{ id, name, email } in users" :key="id">
      <td>{{ name }}</td>
      <td>{{ email }}</td>
      {{ name }}<button @click="input = name ">Submit</button>
    </tr>
          <!-- -----------
          NAME once
          <input v-model="name">
          {{ name }}<button @click="input = name ">Submit</button>
           -->
    <UserCreate />
    
    <div class="board-container">
      <StringGrid :input="input.toUpperCase()" :columns="20" :rows="4" />
    </div>
    <div class="controls">
      <input type="text" v-model="temp"><td></td><br><br>
      
    </div>
    <UserList />
  </div>
</template>


<script>
import UserCreate from '@/components/UserCreate.vue'
import UserList from '@/components/UserList.vue'
import StringGrid from '@/components/StringGrid.vue'

import { useLoadUsers, deleteUser } from '@/firebase'

export default {
  name: 'Board',
  components: { 
    UserCreate, UserList, StringGrid 
    },
  data() {
    return {
      temp: '',
      // input: '',
      input: 'Welcome to Erik\'s Solari Board',
    }
  },
  setup() {
    const users = useLoadUsers()
    return { users, deleteUser }
  }
}
</script>

<style lang="scss">
@import '~@/scss/design.scss';
html, body {
  padding: 0;
  margin: 0;
  background-color: $grey;
}
.board-container {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  margin-top: 50px;
}
</style>