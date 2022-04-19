<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import leaflet from "leaflet";
import IpInfo from "./IpInfo.vue";

const ip = ref("");
onMounted(() => {
  let map;
  map = leaflet.map("map").setView([51.505, -0.09], 13);
  leaflet
    .tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGFibG9kYWxwaGEiLCJhIjoiY2wxaGN5dGZtMDNuNjNjcWx2ZHJ6bmMzbSJ9.lzihlzjJGb0E_B0viYNQyw",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoicGFibG9kYWxwaGEiLCJhIjoiY2wxaGN5dGZtMDNuNjNjcWx2ZHJ6bmMzbSJ9.lzihlzjJGb0E_B0viYNQyw",
      }
    )
    .addTo(map);
});
</script>

<template>
  <main>
    <div class="flex flex-col h-screen max-h-screen">
      <!-- search / result -->
      <div
        class="z-20 flex justify-center bg-[hsl(5,87%,31%)] relative px-[1rem] pt-8 pb-32"
      >
        <!-- search -->
        <div class="w-full max-w-screen-sm">
          <h1 class="text-white text-center text-3xl pb-4">
            Ip Address Tracker
          </h1>
          <div class="flex">
            <input
              type="text"
              v-model="ip"
              class="flex-1 py-3 px-2 rounded-tl-md rounded-bl-md outline-[0]"
              placeholder="Search for any IP address or leave empty to get your ip address info"
            />
            <i
              class="fa-solid fa-angles-right cursor-pointer text-white bg-black px-4 py-4 rounded-tr-md flex items-center rounded-br-md"
            ></i>
          </div>
        </div>
        <!-- info -->
        <IpInfo />
      </div>

      <div id="map" class="h-full z-10"></div>
    </div>
  </main>
</template>
