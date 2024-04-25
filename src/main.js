import { createApp } from 'vue';
import { router } from './router';
import store from './services/store'
import translation from './services/translations/index.js';
import globalVariables from './services/globalVariables/index'
import VueYtframe from 'vue3-ytframe'
// import VueMultiselect from 'vue-multiselect'
// import 'vue-multiselect/dist/vue-multiselect.css'

import Vue3Toasity from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

// Flag styles
import "/node_modules/flag-icons/css/flag-icons.min.css";

import { BarChart } from 'vue-morris'
import { LineChart } from 'vue-morris'
import App from "./App.vue";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/fontawesome/css/fontawesome.min.css'
import './assets/fontawesome/css/all.min.css'
import './assets/css/website/input.css'
import Vue3AutoCounter from 'vue3-autocounter';
import '@bhplugin/vue3-datatable/dist/style.css'

// import LayoutHeader from './views/layouts/website/Header'
import LayoutHeader1 from './views/layouts/website/Header1'
import LayoutHeaderTwo from './views/layouts/website/HeaderTwo'
import LayoutHeaderThree from './views/layouts/website/HeaderThree'
// import LayoutHeaderFour from './views/layouts/website/HeaderFour'
import LayoutHeaderFive from './views/layouts/website/HeaderFive'
import LayoutHeaderSix from './views/layouts/website/HeaderSix'
import LayoutHeaderSeven from './views/layouts/website/HeaderSeven'
import LayoutHeaderEight from './views/layouts/website/HeaderEight'
import LayoutFooter from './views/layouts/website/Footer'
import LayoutFooterTwo from './views/layouts/website/FooterTwo'
import LayoutFooterThree from './views/layouts/website/FooterThree'
// import LayoutFooterFour from './views/layouts/website/FooterFour'
import LayoutFooterFive from './views/layouts/website/FooterFive'
import LayoutFooterSix from './views/layouts/website/FooterSix'
import LayoutFooterSeven from './views/layouts/website/FooterSeven'
import LayoutFooterEight from './views/layouts/website/FooterEight'
// import LayoutHeaderAdmin from './views/layouts/admin/Header'
// import LayoutSidebar from './views/layouts/admin/Sidebar'
import Sidebar from './views/layouts/website/mentor/SideBar.vue'
import Sidebar1 from './views/layouts/website/mentee/SideBar.vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import VueSelect from 'vue3-select2-component'
import Datepicker from 'vue3-datepicker'

import Loader from './views/pages/website/Loader'
import LatestPosts from './views/pages/website/mentor/LatestPosts'
import Tags from './views/pages/website/mentor/Tags'
import BlogCategories from './views/pages/website/mentor/BlogCategories'
import SearchBar from './views/pages/website/mentor/SearchBar'

/** Breadcrumbs**/
import Breadcrumb from './components/breadcrumb/Dashboard'
import Breadcrumb1 from './components/breadcrumb/MyBookings'
import Breadcrumb2 from './components/breadcrumb/ScheduleTimings'
import Breadcrumb3 from './components/breadcrumb/MenteeList'
import Breadcrumb4 from './components/breadcrumb/MenteeProfile'
import Breadcrumb5 from './components/breadcrumb/Blog'
import Breadcrumb6 from './components/breadcrumb/BlogDetails'
import Breadcrumb7 from './components/breadcrumb/AddBlog'
import Breadcrumb8 from './components/breadcrumb/EditBlog'
import Breadcrumb9 from './components/breadcrumb/Invoices'
import Breadcrumb10 from './components/breadcrumb/ProfileSettings'
import Breadcrumb11 from './components/breadcrumb/Reviews'
import Breadcrumb12 from './components/breadcrumb/SearchResults'
import Breadcrumb13 from './components/breadcrumb/MentorProfile'
import Breadcrumb14 from './components/breadcrumb/Checkout'
import Breadcrumb15 from './components/breadcrumb/BookingSuccess'
import Breadcrumb16 from './components/breadcrumb/Favourites'
import Breadcrumb17 from './components/breadcrumb/ChangePassword'
import Breadcrumb18 from './components/breadcrumb/BlogList'
import Breadcrumb19 from './components/breadcrumb/BlogGrid'
import Breadcrumb20 from './components/breadcrumb/Components'
import Breadcrumb21 from './components/breadcrumb/BlankPage'
import Breadcrumb22 from './components/breadcrumb/InvoiceView'
import Breadcrumb23 from './components/breadcrumb/Booking'
import Breadcrumb24 from './components/breadcrumb/Appointments'
import Settings from './components/breadcrumb/Settings'
import ReportFilter from './components/breadcrumb/ReportFilter'

// Page Components
// import HomeBanner from "./views/pages/website/index/HomeBanner";
// import MentoringFlow from "./views/pages/website/index/MentoringFlow";
// import PopularMentor from "./views/pages/website/index/PopularMentor";
// import LearningPath from "./views/pages/website/index/LearningPath";
// import Review from "./views/pages/website/index/Review";
// import PopularLocation from "./views/pages/website/index/PopularLocation";
import Faq from "./views/pages/website/index/Faq";
// import Blogs from "./views/pages/website/index/Blogs";
import Statistics from "./views/pages/website/index/Statistics";
import HomeBannerTwo from "./views/pages/website/index-2/HomeBanner";
import CategoriesTwo from "./views/pages/website/index-2/Categories";
import TrendingCourseTwo from "./views/pages/website/index-2/TrendingCourse";
import MentorTwo from "./views/pages/website/index-2/Mentor";
import SelectionCourseTwo from "./views/pages/website/index-2/SelectionCourse";
import TabContent from "./views/pages/website/index-2/TabContent";
import TabProfile from "./views/pages/website/index-2/TabProfile";
import TabSeo from "./views/pages/website/index-2/TabSeo";
import TabSales from "./views/pages/website/index-2/TabSales";
import TabJava from "./views/pages/website/index-2/TabJava";
import TabIt from "./views/pages/website/index-2/TabIt";
import FeaturedInstructorTwo from "./views/pages/website/index-2/FeaturedInstructor";
import JobLocationTwo from "./views/pages/website/index-2/JobLocation";
import FaqTwo from "./views/pages/website/index-2/Faq";
import AboutTwo from "./views/pages/website/index-2/About";
import BlogTwo from "./views/pages/website/index-2/Blog";
import NewCourseTwo from "./views/pages/website/index-2/NewCourse";
import HomeBannerThree from "./views/pages/website/index-3/HomeBanner";
import CategoriesThree from "./views/pages/website/index-3/Categories";
import WorkThree from "./views/pages/website/index-3/Work";
import TrendingCourseThree from "./views/pages/website/index-3/TrendingCourse";
import MentorThree from "./views/pages/website/index-3/Mentor";
import RatingThree from "./views/pages/website/index-3/Rating";
import PopularCourseThree from "./views/pages/website/index-3/PopularCourse";
import TestimonialThree from "./views/pages/website/index-3/Testimonial";
import JobLocationThree from "./views/pages/website/index-3/JobLocation";
import NewCourseThree from "./views/pages/website/index-3/NewCourse";
import FaqThree from "./views/pages/website/index-3/Faq";
import BlogThree from "./views/pages/website/index-3/Blog";

// import NewCourseFour from "./views/pages/website/index-4/NewCourse";
// import IndexFourTabContent from "./views/pages/website/index-4/TabContent";
// import IndexFourTabProfile from "./views/pages/website/index-4/TabProfile";
// import IndexFourTabSeo from "./views/pages/website/index-4/TabSeo";
// import IndexFourTabSales from "./views/pages/website/index-4/TabSales";
import HomeBannerFive from "./views/pages/website/index-5/HomeBanner";
import CategoriesFive from "./views/pages/website/index-5/Categories";
import TrendingCourseFive from "./views/pages/website/index-5/TrendingCourse";
import FeaturedInstructorFive from "./views/pages/website/index-5/FeaturedInstructor";
import FeedbakFive from "./views/pages/website/index-5/Feedbak";
import KnowledgeFive from "./views/pages/website/index-5/Knowledge";
import MostTrendingCourseFive from "./views/pages/website/index-5/MostTrendingCourse";
import NewCourseFive from "./views/pages/website/index-5/NewCourse";
import FaqFive from "./views/pages/website/index-5/Faq";
import BlogFive from "./views/pages/website/index-5/Blog";
import IndexFiveTabContent from "./views/pages/website/index-5/TabContent";
import IndexFiveTabProfile from "./views/pages/website/index-5/TabProfile";
import IndexFiveTabSeo from "./views/pages/website/index-5/TabSeo";
import IndexFiveTabSales from "./views/pages/website/index-5/TabSales";
import HomeBannerSix from "./views/pages/website/index-6/HomeBanner";
import CategoriesSix from "./views/pages/website/index-6/Categories";
import FeatureSix from "./views/pages/website/index-6/Feature";
import TrustedSix from "./views/pages/website/index-6/Trusted";
import MostTrendingCourseSix from "./views/pages/website/index-6/MostTrendingCourse";
import SKillsSix from "./views/pages/website/index-6/SKills";
import MostTrendingCourseTwoSix from "./views/pages/website/index-6/MostTrendingCourseTwo";
import FeedbackSix from "./views/pages/website/index-6/Feedback";
import FaqSix from "./views/pages/website/index-6/Faq";
import PlaceSix from "./views/pages/website/index-6/Place";
import MostTrendingCourseThreeSix from "./views/pages/website/index-6/MostTrendingCourseThree";
import MentorSix from "./views/pages/website/index-6/Mentor";
import HomeBannerSeven from "./views/pages/website/index-7/HomeBanner";
import WorkSeven from "./views/pages/website/index-7/Work";
import MentorSeven from "./views/pages/website/index-7/Mentor";
import PathSeven from "./views/pages/website/index-7/Path";
import ProfileSeven from "./views/pages/website/index-7/Profile";
import TestimonialSeven from "./views/pages/website/index-7/Testimonial";
import StatisticsSeven from "./views/pages/website/index-7/Statistics";
import BlogSeven from "./views/pages/website/index-7/Blog";
import FaqSeven from "./views/pages/website/index-7/Faq";
import HomeBannerEight from "./views/pages/website/index-8/HomeBanner";
import CategoriesEight from "./views/pages/website/index-8/Categories";
import FeaturedCoursesEight from "./views/pages/website/index-8/FeaturedCourses";
import RatingEight from "./views/pages/website/index-8/Rating";
import FaqEight from "./views/pages/website/index-8/Faq";
import BlogEight from "./views/pages/website/index-8/Blog";



// plugins
import jquery from 'jquery';

window.$ = jquery

    require('./assets/css/admin/style.css');
// if (window.location.href.includes("admin")) {
//     require('./assets/css/admin/style.css');
//     require('./assets/css/admin/bootstrap.min.css')
//     require('./assets/css/admin/dataTables.bootstrap.min.css')
//     require('./assets/css/admin/jquery.dataTables.min.js')
//     require('./assets/css/admin/dataTables.bootstrap.min.js')
//     require('./assets/css/feather.css')
// } else {
    require('./assets/css/website/style.css');
    // require('./assets/css/html/css/style.css');
// }

import Raphael from 'raphael/raphael'
global.Raphael = Raphael
const app = createApp(App)

/** Global components    */
// app.component('layout-header', LayoutHeader)
app.component('layout-header1', LayoutHeader1)
app.component('layout-header-two', LayoutHeaderTwo)
app.component('layout-header-three', LayoutHeaderThree)
// app.component('layout-header-four', LayoutHeaderFour)
app.component('layout-header-five', LayoutHeaderFive)
app.component('layout-header-six', LayoutHeaderSix)
app.component('layout-header-seven', LayoutHeaderSeven)
app.component('layout-header-eight', LayoutHeaderEight)
app.component('layout-footer', LayoutFooter)
app.component('layout-footer-two', LayoutFooterTwo)
app.component('layout-footer-three', LayoutFooterThree)
// app.component('layout-footer-four', LayoutFooterFour)
app.component('layout-footer-five', LayoutFooterFive)
app.component('layout-footer-six', LayoutFooterSix)
app.component('layout-footer-seven', LayoutFooterSeven)
app.component('layout-footer-eight', LayoutFooterEight)
// app.component('layout-headeradmin', LayoutHeaderAdmin)
// app.component('layout-sidebar', LayoutSidebar)
app.component('sidebar', Sidebar)
app.component('sidebar1', Sidebar1)
app.component('carousel', Carousel)
app.component('vue-select', VueSelect)
app.component('slide', Slide)
app.component('pagination', Pagination)
app.component('navigation', Navigation)
app.component('datepicker', Datepicker)

app.component('latest-posts', LatestPosts);
app.component('search-bar', SearchBar);
app.component('blog-categories', BlogCategories);
app.component('tags', Tags);
app.component('loader', Loader);

/** Breadcrumbs **/
app.component('breadcrumb', Breadcrumb);
app.component('breadcrumb1', Breadcrumb1);
app.component('breadcrumb2', Breadcrumb2);
app.component('breadcrumb3', Breadcrumb3);
app.component('breadcrumb4', Breadcrumb4);
app.component('breadcrumb5', Breadcrumb5);
app.component('breadcrumb6', Breadcrumb6);
app.component('breadcrumb7', Breadcrumb7);
app.component('breadcrumb8', Breadcrumb8);
app.component('breadcrumb9', Breadcrumb9);
app.component('breadcrumb10', Breadcrumb10);
app.component('breadcrumb11', Breadcrumb11);
app.component('breadcrumb12', Breadcrumb12);
app.component('breadcrumb13', Breadcrumb13);
app.component('breadcrumb14', Breadcrumb14);
app.component('breadcrumb15', Breadcrumb15);
app.component('breadcrumb16', Breadcrumb16);
app.component('breadcrumb17', Breadcrumb17);
app.component('breadcrumb18', Breadcrumb18);
app.component('breadcrumb19', Breadcrumb19);
app.component('breadcrumb20', Breadcrumb20);
app.component('breadcrumb21', Breadcrumb21);
app.component('breadcrumb22', Breadcrumb22);
app.component('breadcrumb23', Breadcrumb23);
app.component('breadcrumb24', Breadcrumb24);
app.component('settings', Settings);
app.component('reportfilter',ReportFilter)

// Page Components
// app.component('HomeBanner', HomeBanner);
// app.component('MentoringFlow', MentoringFlow);
// app.component('PopularMentor', PopularMentor);
// app.component('LearningPath', LearningPath);
// app.component('Review', Review);
// app.component('Blogs', Blogs);
// app.component('PopularLocation', PopularLocation);
app.component('Faq', Faq);
app.component('Statistics', Statistics);
app.component('HomeBannerTwo', HomeBannerTwo);
app.component('TrendingCourseTwo', TrendingCourseTwo);
app.component('CategoriesTwo', CategoriesTwo);
app.component('MentorTwo', MentorTwo);
app.component('SelectionCourseTwo', SelectionCourseTwo);
app.component('FeaturedInstructorTwo', FeaturedInstructorTwo);
app.component('JobLocationTwo', JobLocationTwo);
app.component('FaqTwo', FaqTwo);
app.component('AboutTwo', AboutTwo);
app.component('BlogTwo', BlogTwo);
app.component('NewCourseTwo', NewCourseTwo);
app.component('TabContent', TabContent);
app.component('TabProfile', TabProfile);
app.component('TabSeo', TabSeo);
app.component('TabSales', TabSales);
app.component('TabJava', TabJava);
app.component('TabIt', TabIt);
app.component('HomeBannerThree', HomeBannerThree);
app.component('CategoriesThree', CategoriesThree);
app.component('WorkThree', WorkThree);
app.component('TrendingCourseThree', TrendingCourseThree);
app.component('MentorThree', MentorThree);
app.component('RatingThree', RatingThree);
app.component('PopularCourseThree', PopularCourseThree);
app.component('TestimonialThree', TestimonialThree);
app.component('JobLocationThree', JobLocationThree);
app.component('NewCourseThree', NewCourseThree);
app.component('FaqThree', FaqThree);
app.component('BlogThree', BlogThree);

// app.component('HomeBannerFour', HomeBannerFour);
// app.component('CategoriesFour', CategoriesFour);
// app.component('PopularCourseFour', PopularCourseFour);
// app.component('KnowledgeFour', KnowledgeFour);
// app.component('TrendingCourseFour', TrendingCourseFour);
// app.component('TestimonialFour', TestimonialFour);
// app.component('FeaturedInstructorFour', FeaturedInstructorFour);
// app.component('FaqFour', FaqFour);
// app.component('BlogFour', BlogFour);

// app.component('NewCourseFour', NewCourseFour);
// app.component('IndexFourTabContent', IndexFourTabContent);
// app.component('IndexFourTabProfile', IndexFourTabProfile);
// app.component('IndexFourTabSeo', IndexFourTabSeo);
// app.component('IndexFourTabSales', IndexFourTabSales);
app.component('HomeBannerFive', HomeBannerFive);
app.component('CategoriesFive', CategoriesFive);
app.component('TrendingCourseFive', TrendingCourseFive);
app.component('FeaturedInstructorFive', FeaturedInstructorFive);
app.component('FeedbakFive', FeedbakFive);
app.component('KnowledgeFive', KnowledgeFive);
app.component('MostTrendingCourseFive', MostTrendingCourseFive);
app.component('NewCourseFive', NewCourseFive);
app.component('FaqFive', FaqFive);
app.component('BlogFive', BlogFive);
app.component('IndexFiveTabContent', IndexFiveTabContent);
app.component('IndexFiveTabProfile', IndexFiveTabProfile);
app.component('IndexFiveTabSeo', IndexFiveTabSeo);
app.component('IndexFiveTabSales', IndexFiveTabSales);
app.component('HomeBannerSix', HomeBannerSix);
app.component('CategoriesSix', CategoriesSix);
app.component('FeatureSix', FeatureSix);
app.component('TrustedSix', TrustedSix);
app.component('MostTrendingCourseSix', MostTrendingCourseSix);
app.component('SKillsSix', SKillsSix);
app.component('MostTrendingCourseTwoSix', MostTrendingCourseTwoSix);
app.component('FeedbackSix', FeedbackSix);
app.component('FaqSix', FaqSix);
app.component('PlaceSix', PlaceSix);
app.component('MostTrendingCourseThreeSix', MostTrendingCourseThreeSix);
app.component('MentorSix', MentorSix);
app.component('HomeBannerSeven', HomeBannerSeven);
app.component('WorkSeven', WorkSeven);
app.component('MentorSeven', MentorSeven);
app.component('PathSeven', PathSeven);
app.component('ProfileSeven', ProfileSeven);
app.component('TestimonialSeven', TestimonialSeven);
app.component('StatisticsSeven', StatisticsSeven);
app.component('BlogSeven', BlogSeven);
app.component('FaqSeven', FaqSeven);
// app.component('HomeBannerEight', HomeBannerEight);
app.component('CategoriesEight', CategoriesEight);
app.component('FeaturedCoursesEight', FeaturedCoursesEight);
app.component('RatingEight', RatingEight);
app.component('FaqEight', FaqEight);
app.component('BlogEight', BlogEight);



app.use(Vue3AutoCounter);
app.use(store);
app.use(globalVariables);
app.use(router);
app.use(
    Vue3Toasity,
    {
        autoClose: 3500,
    },
);
app.use(translation);
app.use(VueYtframe);
// app.use(VueMultiselect);
app.mount('#app');
