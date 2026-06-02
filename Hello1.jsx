function Hello1() {
const isLoggedIn = true;
return(
    <div>
        {
            isLoggedIn ? <h1>Welcome user</h1> : <h2> please Login</h2>
        }
    </div>
)
}

export default Hello1