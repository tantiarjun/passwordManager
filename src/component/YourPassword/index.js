import './index.css'

const YourPassword = props => {
  const {passwordDetails, hideOrShow, passwordDeleted} = props
  const {id, website, userName, password} = passwordDetails

  const deletePassword = () => {
    passwordDeleted(id)
  }

  return (
    <li className="password-storage-container">
      <p className="name first-letter-container">{website[0]}</p>
      <div className="web-user-pass-container">
        <p className="name website">{website}</p>
        <p className="name user-name">{userName}</p>
        {hideOrShow ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            className="star-icon"
            alt="stars"
          />
        ) : (
          <p className="name password">{password}</p>
        )}
      </div>
      <button
        className="delete-button"
        type="button"
        onClick={deletePassword}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          className="delete-icon"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default YourPassword
