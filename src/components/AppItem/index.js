// Write your code here
import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {appName, imageUrl} = appsList

  return (
    <>
      <li>
        <div className="app-item">
          <img src={imageUrl} alt="" className="image-item" />
          <p className="app-name">{appName}</p>
        </div>
      </li>
    </>
  )
}

export default AppItem
