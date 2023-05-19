const state = {
    supports: {
        data: [],         
        links: {
            first: "",
            last: "",
            prev: "",
            next: ""
        },
        meta: {
            current_page: 0,
            from: 0,
            last_page: 0,
            links: [],
            path: "",
            per_page: 0,
            to: 0,
            total: 0
        }
    }
}

export default state