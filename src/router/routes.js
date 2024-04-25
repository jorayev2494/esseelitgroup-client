import company from './company'

/** For  Website**/
import Index from '../views/pages/website/index/Index'
import Index2 from '../views/pages/website/index-2/Index2'
import Index3 from '../views/pages/website/index-3/Index3'
import Index5 from '../views/pages/website/index-5/Index5'
import Index6 from '../views/pages/website/index-6/Index6'
import Index7 from '../views/pages/website/index-7/Index7'
import Index8 from '../views/pages/website/index-8/Index8'
import MentorDashboard from '../views/pages/website/mentor/Index'
import BookingSummary from '../views/pages/website/mentor/BookingSummary'
import ScheduleTimings from '../views/pages/website/mentor/ScheduleTimings'
import MentorChat from '../views/pages/website/mentor/Chat'
import MenteeList from '../views/pages/website/mentor/MenteeList'
import MenteeProfile from '../views/pages/website/mentor/MenteeProfile'
import MentorBlog from '../views/pages/website/mentor/Blog'
import MentorBlogDetails from '../views/pages/website/mentor/BlogDetails'
import MentorAddBlog from '../views/pages/website/mentor/AddBlog'
import MentorEditBlog from '../views/pages/website/mentor/EditBlog'
import Invoices from '../views/pages/website/mentor/Invoices'
import InvoiceView from '../views/pages/website/mentor/InvoiceView'
import MentorProfileSettings from '../views/pages/website/mentor/ProfileSettings'
import Reviews from '../views/pages/website/mentor/Reviews'
import MentorRegister from '../views/pages/website/mentor/Register'
import SearchMentor from '../views/pages/website/mentee/SearchMentor'
import MentorProfile from '../views/pages/website/mentee/MentorProfile'
import Bookings from '../views/pages/website/mentee/Bookings'
import Checkout from '../views/pages/website/mentee/Checkout'
import BookingSuccess from '../views/pages/website/mentee/BookingSuccess'
import MenteeDashboard from '../views/pages/website/mentee/Index'
import Favourites from '../views/pages/website/mentee/Favourites'
import MenteeChat from '../views/pages/website/mentee/Chat'
import MenteeProfileSettings from '../views/pages/website/mentee/ProfileSettings'
import ChangePassword from '../views/pages/website/mentee/ChangePassword'
import MapGrid from '../views/pages/website/mentee/MapGrid'
import MapList from '../views/pages/website/mentee/MapList'
import MenteeRegister from '../views/pages/website/mentee/Register'
import Bloglist from '../views/pages/website/blog/BlogList'
import Bloggrid from '../views/pages/website/blog/BlogGrid'
import VoiceCall from '../views/pages/website/pages/Voicecall'
import VideoCall from '../views/pages/website/pages/Videocall'
import Component from '../views/pages/website/pages/Components'
import WebsiteBlankpage from '../views/pages/website/pages/BlankPage'
import WebSiteLogin from '../views/pages/website/pages/Login'
import RegisterPage from '../views/pages/website/pages/Register'
import WebsiteForgotPassword from '../views/pages/website/pages/ForgotPassword'
import Booking from '../views/pages/website/Booking'
import Appointments from '../views/pages/website/mentor/Appointments'

// Project pages
import Home from '../views/pages/website/public/home/Index.vue'
import UniversityForm from '../views/pages/website/public/university/Index.vue'
import Faculty from '../views/pages/website/public/faculty/Index.vue'

const routes = [
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: 'universities',
    name: 'universities',
    component: () => import('../views/pages/website/public/search/Index.vue'),
  },
  {
    path: 'universities/:uuid',
    name: 'university-show',
    component: UniversityForm,
  },
  {
    path: 'faculty/:uuid',
    name: 'faculty',
    component: Faculty,
  },

  ...company,

  {
    path: 'index',
    name: 'dashboard',
    component: Index
  },
  {
    path: 'index-2',
    name: 'index-2',
    component: Index2
  },
  {
    path: 'index-3',
    name: 'index-3',
    component: Index3
  },
  {
    path: 'index-5',
    name: 'index-5',
    component: Index5
  },
  {
    path: 'index-6',
    name: 'index-6',
    component: Index6
  },
  {
    path: 'index-7',
    name: 'index-7',
    component: Index7
  },
  {
    path: 'index-8',
    name: 'index-8',
    component: Index8
  },
  {
    path: 'mentor/index',
    name: 'mentor-dashboard',
    component: MentorDashboard
  },
  {
    path: 'mentor/mentee-list',
    name: 'mentor-mentee-list',
    component: MenteeList
  },
  {
    path: 'mentor/mentee-profile',
    name: 'mentor-mentee-profile',
    component: MenteeProfile
  },
  {
    path: 'mentor/my-bookings',
    name: 'mentor-bookings',
    component: BookingSummary
  },
  {
    path: 'mentor/schedule-timings',
    name: 'mentor-schedule-timings',
    component: ScheduleTimings
  },
  {
    path: 'mentor/chat',
    name: 'mentor-chat',
    component: MentorChat
  },
  {
    path: 'mentor/blog',
    name: 'mentor-blog',
    component: MentorBlog
  },
  {
    path: 'mentor/blog-details',
    name: 'mentor-blog-details',
    component: MentorBlogDetails
  },
  {
    path: 'mentor/add-blog',
    name: 'add-blog',
    component: MentorAddBlog
  },
  {
    path: 'mentor/invoices',
    name: 'mentor-invoices',
    component: Invoices
  },
  {
    path: 'mentor/invoice-view',
    name: 'mentor-invoice-view',
    component: InvoiceView
  },
  {
    path: 'mentor/edit-blog',
    name: 'edit-blog',
    component: MentorEditBlog
  },
  {
    path: 'mentor/profile-settings',
    name: 'mentor-profile-settings',
    component: MentorProfileSettings
  },
  {
    path: 'mentor/reviews',
    name: 'mentor-reviews',
    component: Reviews
  },
  {
    path: 'mentor/register',
    name: 'mentor-register',
    component: MentorRegister
  },
  {
    path: 'mentee/mentor-search',
    name: 'mentor-search-results',
    component: SearchMentor
  },
  {
    path: 'blog/blog-list',
    name: 'blog-list',
    component: Bloglist
  },
  {
    path: 'blog/blog-grid',
    name: 'blog-grid',
    component: Bloggrid
  },
  {
    path: 'pages/login',
    name: 'website-login',
    component: WebSiteLogin
  },
  {
    path: 'pages/voice-call',
    name: 'voice-call',
    component: VoiceCall
  },
  {
    path: 'pages/video-call',
    name: 'video-call',
    component: VideoCall
  },
  {
    path: 'pages/components',
    name: 'page-components',
    component: Component
  },
  {
    path: 'pages/blank-page',
    name: 'blank-page',
    component: WebsiteBlankpage
  },

  {
    path: 'pages/register',
    name: 'register-page',
    component: RegisterPage
  },
  {
    path: 'pages/forgot-password',
    name: 'website-forgot-password',
    component: WebsiteForgotPassword
  },
  {
    path: 'booking',
    name: 'booking',
    component: Booking
  },
  {
    path: 'mentor/appointments',
    name: 'mentor-appointments',
    component: Appointments
  },
  {
    path: 'mentee/mentor-profile',
    name: 'mentee-mentor-profile',
    component: MentorProfile
  },
  {
    path: 'mentee/bookings',
    name: 'mentee-bookings',
    component: Bookings
  },
  {
    path: 'mentee/checkout',
    name: 'mentee-checkout',
    component: Checkout
  },
  {
    path: 'mentee/booking-success',
    name: 'booking-success',
    component: BookingSuccess
  },
  {
    path: 'mentee/index',
    name: 'mentee-dashboard',
    component: MenteeDashboard
  },
  {
    path: 'mentee/favourites',
    name: 'mentee-favourites',
    component: Favourites
  },
  {
    path: 'mentee/chat',
    name: 'mentee-chat',
    component: MenteeChat
  },
  {
    path: 'mentee/profile-settings',
    name: 'mentee-profile-settings',
    component: MenteeProfileSettings
  },
  {
    path: 'mentee/change-password',
    name: 'change-password',
    component: ChangePassword
  },
  {
    path: 'mentee/map-grid',
    name: 'map-grid',
    component: MapGrid
  },
  {
    path: 'mentee/map-list',
    name: 'map-list',
    component: MapList
  },
  {
    path: 'mentee/register',
    name: 'mentee-register',
    component: MenteeRegister
  },
];

export default routes;
