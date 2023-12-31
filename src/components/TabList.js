import React from "react"
import PropTypes from 'prop-types'
import classNames from "classnames"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './TabList.scss'

const TabList = ({files, activeId, unsaveIds, onTabClick, onCloseTab}) => {
  return (
    <ul className="nav nav-pills tablist-component">
      {files?.map(file => {
        const withUnsavedMark = unsaveIds.includes(file?.id)
        const fClassName = classNames({
          'nav-link': true,
          'active': file?.id === activeId,
          'withUnsaved': withUnsavedMark
        })
        return (
          <li className="nav-item" key={file?.id}>
            <a
              className={fClassName}
              aria-current="page"
              href="#"
              onClick={(e) =>{e.preventDefault(); onTabClick(file?.id)}}
            >
              {file?.title}
              <span className='close-icon' onClick={(e) => {e.stopPropagation(); onCloseTab(file?.id)}}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
              { withUnsavedMark && <span className="rounded-circle unsaved-icon"></span>}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
TabList.propTypes = {
  files: PropTypes.array,
  activeId: PropTypes.string,
  unsaveIds: PropTypes.array,
  onTabClick: PropTypes.func,
  onCloseTab: PropTypes.func
}
TabList.defaultProps = {
  unsaveIds: []
}

export default TabList