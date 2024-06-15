// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {imageUrl, appName} = appDetails

  return (
    <li className="listitem">
      <img src={imageUrl} alt={appName} className="image1" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
