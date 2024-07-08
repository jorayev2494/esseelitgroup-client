<template>
  <!-- Footer -->
  <footer class="footer footer-three">
    <!-- Footer Top -->
    <div class="footer-top footer-two-top footer-four-index aos">
      <div class="container">
        <div class="row" data-aos="fade-up">

          <div class="col-lg-5 col-md-6">
            <div class="footer-widget footer-about">

              <h2 class="footer-title">{{ $t('pages.index.footer.contact_us.title') }}</h2>
              <div class="footer-about-content">
                <p class="footer-sub-text">{{ $t('pages.index.footer.contact_us.text') }}</p>
              </div>

              <div class="footer-three-contact">
                <ul>
                  <li v-for="(item, idx) of contactItems" :key="idx">
                    <i :class="item.icon"></i>
                    <template v-if="item.type">
                      <a v-if="item.type === 'link'" :href="item.value" target="_blank" style="color: white;">{{ item.label }}</a>
                      <a v-else :href="`${item.type}:${item.value}`" style="color: white;">{{ item.label }}</a>
                    </template>
                    <template v-else>
                      {{ item.value }}
                    </template>
                  </li>
                </ul>

                <ul class="icon-socials d-flex">
                  <li v-for="({ link, icon }, idx) of socials" :key="idx">
                    <a :href="link" target="_blank">
                      <i :class="icon"></i>
                    </a>
                  </li>
                </ul>

              </div>

            </div>
          </div>

          <div class="col-lg-5 col-md-6">
            <div class="footer-widget footer-menu">
              <h2 class="footer-title">{{ $t('pages.index.footer.documents.title') }}</h2>
              <div class="footer-about-content">
                <p class="footer-sub-text" v-for="(item, idx) of $t('pages.index.footer.documents.text').split(', ')" :key="idx">
                  {{ item }}
                </p>
              </div>
            </div>
          </div>

          <!-- <div class="col-lg-5 col-md-6">
            <div class="footer-widget footer-menu">
              <h2 class="footer-title">For Mentors</h2>
              <ul>
                <li><router-link to="/mentor/appointments">Appointments</router-link></li>
                <li><router-link to="/mentor/chat">Chat</router-link></li>
                <li><router-link :to="$tMakeRoute({ name: 'map-list' })">Login</router-link></li>
                <li><router-link :to="$tMakeRoute({ name: 'mentee-register' })">Register</router-link></li>
                <li><router-link to="/mentor/index">Mentor Dashboard</router-link></li>
              </ul>
            </div>
          </div> -->

          <div class="col-lg-2 col-md-6">
            <!-- Footer Widget -->
            <div class="footer-widget footer-menu">
              <h2 class="footer-title">{{ $t('pages.index.footer.pages.title') }}</h2>
               <ul>
                  <li class="megamenu" v-bind:class="{ active: aboutUsMenu }">
                    <router-link :to="$tMakeRoute({ name: 'about-us' })">
                      {{ $t('navigation.about_us') }}
                    </router-link>
                  </li>

                  <li v-bind:class="{ active: universitiesMenu }">
                    <router-link :to="$tMakeRoute({ name: 'universities' })">
                      {{ $t('navigation.universities') }}
                    </router-link>
                  </li>

                  <li v-bind:class="{ active: departmentsMenu }">
                    <router-link :to="$tMakeRoute({ name: 'department-names' })">
                      {{ $t('navigation.departments') }}
                    </router-link>
                  </li>

                  <li v-bind:class="{ active: listsMenu }">
                    <router-link :to="$tMakeRoute({ name: 'document-lists' })">
                      {{ $t('navigation.lists') }}
                    </router-link>
                  </li>
              </ul>
            </div>
            <!-- /Footer Widget -->
          </div>

          <!-- <div class="col-lg-4 col-md-6">
            <div class="subscriber-two">
              <h2 class="footer-title">Subscribe to get Updates</h2>
              <p>
                Our goal is to translate the positive effects from
                revolutionizing
              </p>
              <form action="/mentee/mentor-search">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your email address"
                  />
                  <a href=""
                    ><img src="@/assets/img/icon/subscribe-icon.svg" alt=""
                  /></a>
                </div>
                <div class="bottom-border-two"></div>
              </form>
            </div>
          </div> -->

        </div>
      </div>
    </div>
    <!-- /Footer Top -->

    <!-- Footer Bottom -->
    <div class="footer-bottom index-four-footer-bottom">
      <div class="container">
        <!-- Copyright -->
        <div class="copyright-border"></div>
        <div class="copyright p-0">
          <div class="row align-items-center">
            <div class="col-lg-4">
              <div class="copyright-text">
                <p class="mb-0">© {{ currentYear }} {{ $store.getters['getAppName'] }}. {{ $t('system.all_rights_reserved') }}.</p>
              </div>
            </div>
            <div class="col-lg-3">
              <!-- <div class="footer-logo text-center">
                <img src="@/assets/img/logo-5.png" class="img-fluid" alt="Logo" />
              </div> -->
            </div>
            <div class="col-lg-5">
              <!-- <div class="term-privacy">
                <div class="terms">
                  <ul class="align-items-center">
                    <li>
                      <a href="javascript:void(0);">Terms & Condition</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Privacy Policy </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Cookie Policy </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Sitemap </a>
                    </li>
                  </ul>
                </div>
              </div> -->
            </div>
          </div>
        </div>
        <!-- /Copyright -->
      </div>
    </div>
    <!-- /Footer Bottom -->
  </footer>
  <!-- /Footer -->
</template>

<script setup>

  const currentYear = new Date().getFullYear();

  const address = 'Şirinevler, Nil Sok. 15-17 D:20, 34188 Bahçelievler/İstanbul, Türkiye';
  const phone = '+90 (505) 145-95-55';
  const phone2 = '+90 (552) 591-46-58';
  const email = 'esseacademy34@gmail.com';

  const contactItems = [
    {
      type: 'tell',
      icon: 'fa fa-phone',
      label: phone,
      value: phone,
    },
    {
      type: 'tell',
      icon: 'fa fa-phone',
      label: phone2,
      value: phone2,
    },
    {
      type: 'mail',
      icon: 'fa fa-envelope',
      label: email,
      value: email,
    },
    {
      type: 'link',
      icon: 'fa fa-map-pin',
      label: address,
      value: `http://maps.google.com/?q=${address}`,
    },
  ];

  const socials = [
    // {
    //   icon: 'fab fa-facebook-f',
    //   link: '#',
    // },
    // {
    //   icon: 'fab fa-linkedin',
    //   link: '#',
    // },
    // {
    //   icon: 'fab fa-behance',
    //   link: '#',
    // },
    // {
    //   icon: 'fab fa-twitter',
    //   link: '#',
    // },
    {
      icon: 'fab fa-instagram',
      link: 'https://www.instagram.com/esse_elite_group/',
    },
    {
      icon: 'fab fa-tiktok',
      link: 'https://www.tiktok.com/@esseelitegroup',
    },
    {
      icon: 'fab fa-youtube',
      link: 'https://www.youtube.com/channel/UCWcL0F1yxSG4mE0-SEm5Wxw',
    },
    // {
    //   icon: 'fab fa-square-whatsapp',
    //   link: 'https://whatsapp.com/channel/0029VaKOqnuFSAsxVJvBjo3O',
    // },
    {
      icon: 'fab fa-whatsapp',
      link: 'https://whatsapp.com/channel/0029VaKOqnuFSAsxVJvBjo3O',
    },
  ];
</script>

