<template>
  <div id="app" class="container">
    <nav id="navbar-example2" class="navbar navbar-light bg-dark mt-5">
      <a class="navbar-brand text-white"  href="#">
        MarketCoin
      </a>
    </nav>
   
    <div class="card" >
      <div class="card-body" >
        <h2>Listado de Monedas</h2>
        <button class="btn btn-primary" @click="refresh">Refresh Page</button>
        <table id="search" class="table mt-2" >
          <thead>
            <tr>
              <th scope='col'>image</th>
              <th scope='col'>name</th>
              <th scope="col">symbol</th>
              <th scope="col">price</th>
             <!-- <th scope="col">last 7d</th>-->
            </tr>
          </thead>
          <tbody >
            <tr v-for="statecoin in statecoins" :key="statecoin.id" >
              <td>
                <img width="30" :src="statecoin.image" >
              </td>
              <td>{{ statecoin.name }} </td>
              <td>{{ statecoin.symbol }} </td>
              <td>$ {{ statecoin.current_price }} </td>
            </tr> 
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  
  //import io from "socket.io-client";
  //var socket = io.connect("http://localhost:8080");
  export default {
    name: 'App',
    computed: {
      statecoins() {
        return this.$store.state.coins
      }
    },
    methods: {
      refresh(event){
        if (event){
          location.reload();
        }
      }
    },
    mounted() {
      this.$store.dispatch("getcoins");

      setInterval(function () {
        this.$store.dispatch("getcoins");
      }.bind(this), 1000);
    }
    
  }

</script>


