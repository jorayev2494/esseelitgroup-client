const homeMenu = (value) =>  {
    const pathName = [
        'index',
        'index-2',
        'index-3',
        'index-4',
        'index-5',
        'index-6',
        'index-7',
        'index-8'
    ]
    return !!pathName.some(item => item == value);
}

const aboutUsMenu = (value) =>  {
    const pathName = [
        'about_us'
    ]
    return !!pathName.some(item => item == value);
}

const mentorMenu = (value) =>  {
    const pathName = [
        'mentor-dashboard', 
        'mentor-bookings', 
        'mentor-schedule-timings',
        'mentor-mentee-list',
        'mentor-mentee-profile',
        'mentor-blog',
        'add-blog',
        'edit-blog',
        'mentor-chat',
        'mentor-invoices',
        'mentor-invoice-view',
        'mentor-profile-settings',
        'mentor-reviews',
        'mentor-register'
    ]
    return !!pathName.some(item => item == value);
}
const menteeMenu = (value) =>  {
    const pathName = [
        'map-grid', 
        'map-list', 
        'mentor-search-results',
        'mentee-mentor-profile',
        'mentee-bookings',
        'mentee-checkout',
        'booking-success',
        'mentee-dashboard',
        'mentee-favourites',
        'mentee-chat',
        'mentee-profile-settings',
        'change-password'
    ]
    return !!pathName.some(item => item == value);
}

const pagesMenu = (value) =>  {
    const pathName = [
        'voice-call', 
        'video-call', 
        'page-components',
        'blank-page'
    ]
    return !!pathName.some(item => item == value);
}

const universitiesMenu = (value) =>  {
    const pathName = [
        // 'map-grid', 
        // 'map-list', 
        // 'mentor-search-results',
        // 'mentee-mentor-profile',
        // 'mentee-bookings',
        // 'mentee-checkout',
        // 'booking-success',
        // 'mentee-dashboard',
        // 'mentee-favourites',
        // 'mentee-chat',
        // 'mentee-profile-settings',
        // 'change-password',
        'universities'
    ]
    return !!pathName.some(item => item == value);
}

const departmentsMenu = (value) =>  {
    const pathName = [
        'departments',
    ]

    return !!pathName.some(item => item == value);
}

const blogMenu = (value) =>  {
    const pathName = [
        'mentor-blog-details',
        'blog-list',
        'blog-grid'
    ]
    return !!pathName.some(item => item == value);
}

const listsMenu = (value) =>  {
    const pathName = [
        'mentor-blog-details',
        'blog-list',
        'blog-grid'
    ]
    return !!pathName.some(item => item == value);
}

export default {
    homeMenu,
    aboutUsMenu,
    mentorMenu,
    universitiesMenu,
    departmentsMenu,
    menteeMenu,
    pagesMenu,
    blogMenu,
    listsMenu,
}