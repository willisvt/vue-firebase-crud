<template>
  <div>
    <!-- <tr v-for="{ id, name } in users" :key="id">
      <td>{{ get_master_shake }}</td> 
      <button @click="input = name ">Submit</button>
    </tr> -->
          <!-- -----------
          NAME once
          <input v-model="name">
          {{ name }}<button @click="input = name ">Submit</button>
           -->
    <td>get_master_shake= {{ get_master_shake }}</td>
    <UserCreate />
    
    <div class="board-container">
      <StringGrid :input="input.toUpperCase()" :columns="20" :rows="4" />
    </div>
    <div class="controls">
      <textarea type="text" v-model="temp" rows="5" cols="33"></textarea><td></td><br><br>
      <button @click="input = temp ">Submit</button>
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
      lastName: 'Doe'
    }
  },
  setup() {
    const users = useLoadUsers()
    return { users, deleteUser }
  },
  computed: {
    // a computed getter
    get_master_shake() {
      let master_shake = ''
      //or whatever field indicates the most recent message in the list of messages
      for(let i=0; i < this.users.length; i++){
        if(this.users[i].name === "Master Shake")
          master_shake = this.users[i].name
      }
      return master_shake
    }
  }
}
</script>

<style lang="scss">
@import '~@/scss/design.scss';
html, body {
  font-family: sans-serif;
  color: rgba(255,255,255,.6);
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