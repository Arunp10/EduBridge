import React from 'react'

export default function ScreenHeading(props) {
  return (
    <div className='heading-container'>
      <div className="screen-heading">
          <span>{props.title}</span>
      </div>

      {
          (props.SubHeading)?(
              <div className="screen-subheading">
                  <span>{props.SubHeading}</span>
              </div>
          ):<div></div>
      }

      <div className="heading-seperator">
          <div className="seperator-line">
              <div className="seperator-blob">
                  <div></div>
              </div>
          </div>
      </div>
    </div>
  )
}
