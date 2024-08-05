// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsList, updateApp, isActive} = props
  const {tabId, displayText} = tabsList
  const onClickTab = () => {
    updateApp(tabId)
  }

  const activeButton = isActive ? 'name' : ''

  return (
    <li>
      <button
        type="button"
        className={`heading ${activeButton}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
