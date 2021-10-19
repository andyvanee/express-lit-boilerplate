export default [
    {
        path: "/",
        component: "ui-page-home",
        title: "Home",
        layout: "index"
    },
    {
        path: "/pages/:slug",
        component: "ui-page-view",
        title: "Page",
        layout: "index"
    },
    {
        path: "/accounts/login",
        component: "div",
        title: "Login",
        layout: "login"
    }
]
