<template>
  <!-- Header -->
  <header class="header header-three">
    <div class="header-fixed">
      <nav class="navbar navbar-expand-lg header-nav scroll-sticky-three">
        <div class="container">

          <div class="navbar-header">
            <a id="mobile_btn" href="javascript:void(0);">
              <span class="bar-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </a>
            <router-link to="/" class="navbar-brand logo">
              <img src="@/assets/img/website/logo.png" class="img-fluid" alt="Logo" />
            </router-link>
          </div>

          <div class="main-menu-wrapper">

            <div class="menu-header">
              <router-link to="/" class="menu-logo">
                <img src="@/assets/img/website/logo.png" class="img-fluid" alt="Logo" />
              </router-link>
              <a id="menu_close" class="menu-close" href="javascript:void(0);">
                <i class="fas fa-times"></i>
              </a>
            </div>

            <ul class="main-nav">

              <li class="has-submenu" v-bind:class="{ active: universitiesMenu }">
                <a href="">{{ $t('navigation.university.universities') }} <i class="fas fa-chevron-down"></i></a>

                <ul class="submenu">

                  <li>
                    <router-link :to="$tMakeRoute({ name: 'universities' })" v-bind:class="{ active: currentPath == 'universities' }">
                      {{ $t('navigation.university.all_universities') }}
                    </router-link>
                  </li>

                  <li v-bind:class="{ active: currentPath == 'universities-for-foreign-students' }">
                    <router-link :to="$tMakeRoute({ name: 'universities-for-foreign-students' })">
                      {{ $t('navigation.university.universities-for-foreign-students') }}
                    </router-link>
                  </li>

                </ul>
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

              <li class="megamenu" v-bind:class="{ active: aboutUsMenu }">
                <router-link :to="$tMakeRoute({ name: 'about-us' })">
                  {{ $t('navigation.about_us') }}
                </router-link>
              </li>

              <LanguageSwitcher />

              <NavButtons />

            </ul>
          </div>

        </div>
      </nav>
    </div>
  </header>
  <!-- /Header -->
</template>

<script>
  import Util from "@/assets/utils/utils";
  import { onMounted, computed } from "vue";
  import { useRoute } from "vue-router";
  import LanguageSwitcher from './LanguageSwitcher.vue'
  import NavButtons from './NavButtons.vue'

  export default {
  setup() {
    const currentPath = computed(() => {
      return useRoute().name;
    });

    const homeMenu = computed(() => {
      return Util.homeMenu(useRoute().name);
    });

    const mentorMenu = computed(() => {
      return Util.mentorMenu(useRoute().name);
    });

    const menteeMenu = computed(() => {
    return Util.menteeMenu(useRoute().name);
    });

    const pagesMenu = computed(() => {
    return Util.pagesMenu(useRoute().name);
    });

    const blogMenu = computed(() => {
      return Util.blogMenu(useRoute().name);
    });

    // const { t } = useI18n()

    const aboutUsMenu = computed(() => {
      return Util.aboutUsMenu(useRoute().name);
    });

    const universitiesMenu = computed(() => {
      return Util.universitiesMenu(useRoute().name);
    });

    const departmentsMenu = computed(() => {
      return Util.departmentsMenu(useRoute().name);
    });

    const listsMenu = computed(() => {
      return Util.listsMenu(useRoute().name);
    });

    onMounted(() => {
      $(".header-fixed").append('<div class="sidebar-overlay"></div>');
      $(document).on("click", "#mobile_btn", function () {
        $("main-wrapper").toggleClass("slide-nav");
        $(".sidebar-overlay").toggleClass("opened");
        $("html").addClass("menu-opened");
        return false;
      });

      $(document).on("click", ".sidebar-overlay", function () {
        $("html").removeClass("menu-opened");
        $(this).removeClass("opened");
        $("main-wrapper").removeClass("slide-nav");
      });

      $(document).on("click", "#menu_close", function () {
        $("html").removeClass("menu-opened");
        $(".sidebar-overlay").removeClass("opened");
        $("main-wrapper").removeClass("slide-nav");
      });

      if ($(window).width() <= 991) {
        var Sidemenu = function () {
          this.$menuItem = $(".main-nav a");
        };
      }

      let $wrapper = $(".main-wrapper");

      $(".main-nav a").on("click", function (e) {
        if ($(this).parent().hasClass("has-submenu")) {
          e.preventDefault();
        } else {
          $wrapper.removeClass("slide-nav");
          $(".sidebar-overlay").removeClass("opened");
          $("html").removeClass("menu-opened");
        }

        if (!$(this).hasClass("submenu")) {
          $("ul", $(this).parents("ul:first")).slideUp(350);
          $("a", $(this).parents("ul:first")).removeClass("submenu");
          $(this).next("ul").slideDown(350);
          $(this).addClass("submenu");
        } else if ($(this).hasClass("submenu")) {
          $(this).removeClass("submenu");
          $(this).next("ul").slideUp(350);
        }
      });
    });
    return {
      currentPath,
      homeMenu,
      mentorMenu,
      menteeMenu,
      pagesMenu,
      blogMenu,
    };
  },
  components: {
    LanguageSwitcher,
    NavButtons,
  },
};
</script>