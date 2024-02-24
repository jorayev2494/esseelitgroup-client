<template>
  <section class="trusted-by-sec">
    <div class="container">
      <div class="trusted-by" data-aos="fade-up">
        <div class="row align-items-center">
          <div class="col-md-2">
            <div class="trust-list-title">
              <h5>Trusted by</h5>
            </div>
          </div>
          <div class="col-md-10">
            
              <carousel :autoplay="3000" :loop="true" :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
                <slide class="trusted-list d-flex" v-for="item in IndexSixTrusted" :key="item.id">
                  <li class="carousel__item item">
                    <div class="trust-icon">
                      <img
                        :src="require(`@/assets/img/icon/${item.image}`)"
                        alt=""
                      />
                    </div>
                    <span>{{ item.name }}</span>
                  </li>
                </slide>
                <template #addons>
                 
                </template>
              </carousel>
           
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { defineComponent } from "vue";
import IndexSixTrusted from "@/assets/json/website/indexsixtrusted.json";

export default defineComponent({
  data() {
    return {
      IndexSixTrusted: IndexSixTrusted,
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        575: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        // 700px and up
        767: {
          itemsToShow: 4,
          snapAlign: "center",
        },
        // 991 and up
        991: {
          itemsToShow: 5,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 5,
          snapAlign: "start",
        },
      },
    };
  },
  methods: {},
});
</script>
