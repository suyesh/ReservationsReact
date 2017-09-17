import React from 'react'
import Guest from '../Guest'
import PropTypes from 'prop-types'

const GuestList = (props) =>
      <ul>
        {props.guests
          .map((guest, index) =>
          <Guest
            key={index}
            name={guest.name}
            isConfirmed={guest.isConfirmed}/>
          )}
      </ul>


GuestList.propsTypes = {
  guests: PropTypes.array.isRequired
}

export default GuestList;
