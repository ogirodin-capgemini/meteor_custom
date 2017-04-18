AdminLayout = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            user: Meteor.user()
        }
    },
    logout() {
        Meteor.logout();
    },
    getLogoutButton() {
        return <span>
      &nbsp;
            <button onClick={this.logout}>Logout</button>
    </span>
    },
    render() {
        return <div>
            <header><h1>Admin Layout</h1></header>
            <p>
                Navigation:&nbsp;
                <a href="/">Home</a>&nbsp; | &nbsp;
                <a href="/add-new-post">Add New Post</a>&nbsp; | &nbsp;
                <a href="/admin">Admin</a>
                {this.data.user? this.getLogoutButton() : null}
            </p>
            <main>{this.props.content}</main>
            <footer>We love Administration</footer>
        </div>;
    }
});