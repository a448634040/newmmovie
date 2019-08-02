export default {
    path: '/movie',
    component: () =>
        import ('@/components/Movie/'),
    children: [{
            path: 'city',
            component: () =>
                import ('@/components/Movie/City')
        },
        {
            path: 'nowplay',
            component: () =>
                import ('@/components/Movie/NowPlay')
        },
        {
            path: 'playsoon',
            component: () =>
                import ('@/components/Movie/PlaySoon')
        },
        {
            path: 'search',
            component: () =>
                import ('@/components/Movie/Search')
        },
        {
            path: '/movie',
            redirect: 'nowplay'
        }
    ]
}