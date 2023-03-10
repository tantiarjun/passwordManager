import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import YourPassword from '../YourPassword'

import './index.css'

class PasswordManager extends Component {
  state = {
    website: '',
    userName: '',
    password: '',
    passwordList: [],
    hideOrShow: true,
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  OnToggling = () => {
    this.setState(prevState => {
      const {hideOrShow} = prevState
      return {
        hideOrShow: !hideOrShow,
      }
    })
  }

  addPassword = event => {
    event.preventDefault()
    const {website, userName, password} = this.state

    const newPassword = {
      id: uuidv4(),
      website,
      userName,
      password,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassword],
      website: '',
      userName: '',
      password: '',
    }))
  }

  passwordDeleted = id => {
    const {passwordList} = this.state

    const filteredList = passwordList.filter(
      eachPassword => eachPassword.id !== id,
    )

    this.setState({passwordList: filteredList})
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {
      website,
      userName,
      password,
      passwordList,
      hideOrShow,
      searchInput,
    } = this.state

    const searchResults = passwordList.filter(eachPassword =>
      eachPassword.password.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="add-password-image-container">
          <form className="add-password-container" onSubmit={this.addPassword}>
            <h1 className="heading">Add New Password</h1>
            <div className="website-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="website-icon"
              />
              <input
                type="text"
                value={website}
                placeholder="Enter Website"
                className="website-input"
                onChange={this.onChangeWebsite}
              />
            </div>

            <div className="website-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="website-icon"
              />
              <input
                type="text"
                value={userName}
                placeholder="Enter Username"
                onChange={this.onChangeUsername}
                className="website-input"
              />
            </div>

            <div className="website-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="website-icon"
              />
              <input
                type="password"
                value={password}
                placeholder="Enter Password"
                onChange={this.onChangePassword}
                className="website-input"
              />
            </div>

            <div className="button-container">
              <button type="submit" className="button" data-testid="delete">
                Add
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-image"
          />
        </div>

        <div className="your-password-container">
          <div className="password-icon-search-icon-container">
            <div className="your-password-text-count-container">
              <h1 className="count-of-password">Your Passwords</h1>
              <p className="count-of-password"> {searchResults.length}</p>
            </div>
            <div className="website-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="website-icon"
              />
              <input
                type="search"
                onChange={this.onChangeSearchInput}
                placeholder="Search"
                className="website-input"
              />
            </div>
          </div>
          <hr />
          <div className="show-password-container">
            <input
              id="showPassword"
              type="checkbox"
              className="checkbox"
              onClick={this.OnToggling}
            />
            <label htmlFor="showPassword">Show Passwords</label>
          </div>
          <div className="no-password-container">
            {searchResults.length === 0 && (
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-password-image"
                />
                <p className="no-password-text">No Passwords</p>
              </div>
            )}
          </div>
          <ul className="list-of-password">
            {searchResults.map(eachPassword => (
              <YourPassword
                key={eachPassword.id}
                hideOrShow={hideOrShow}
                passwordDeleted={this.passwordDeleted}
                passwordDetails={eachPassword}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default PasswordManager
