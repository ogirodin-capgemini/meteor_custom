const authenticatedRedirect = () => {
    if(!Meteor.loggingIn() && !Meteor.userId()){
        console.log("test");
        FlowRouter.redirect( '/' );
    }
};


const guestRoute = FlowRouter.group({
    name:"guest"
});

guestRoute.route('/', {
    action() {
        ReactLayout.render(MainLayout, {content: <BlogHome />});
    }
});

guestRoute.route('/add-new-post', {
    action(params) {
        ReactLayout.render(MainLayout, {content: <AddNewPost />});
    }
});

guestRoute.route('/signup', {
    action(params) {
        ReactLayout.render(MainLayout, {content: <Signup />});
    }
});


guestRoute.route('/_:postId', {
    action(params) {
        ReactLayout.render(MainLayout, {content: <BlogPost {...params} />});
    }
});



const adminRoute = FlowRouter.group({
    name:"admin",
    triggersEnter : [ authenticatedRedirect ]
});

adminRoute.route('/admin', {
    action(){
        ReactLayout.render(AdminLayout, {content: <AddUser />});
    }
});