function Register() {
    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center" >
            <div className="card p-4" style={{width: '100%', maxWidth: '400px'}}>
                <div className="text-center mb-4">
                    <img
                        src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
                        alt="Bootstrap Logo"
                        style={{width: '80px', height: '80px'}}
                    />
                </div>
                <h2 className="text-center mb-4">Please Sign in</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label"></label>
                        <input type="email" className="form-control" id="email" placeholder="Email Address"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label"></label>
                        <input type="password" className="form-control" id="password" placeholder="Password"/>
                    </div>
                    <div className="mb-3 form-check d-flex justify-content-center align-items-center">
                        <input type="checkbox" className="form-check-input" id="remember"/>
                        <label className="form-check-label">Remember me</label>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 d-flex justify-content-center align-items-center">Sign in</button>
                    <p className="mt-5 mb-3 text-muted text-center" >© 2017–2021</p>
                </form>
            </div>
        </div>
    )
}
export default Register;