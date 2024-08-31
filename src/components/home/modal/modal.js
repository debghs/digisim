import './modal.css'
import React, {useState, useContext} from 'react'

import globalContext from '../../../services/globalContext'

function Modal (props) {

  const {customProps} = useContext(globalContext);
  const {toggleModal} = customProps;

  const [pointer, setPointer] = useState(0)

  const rules = [
    {
      name: 'Rule 1',
      description: 'Create inputs and ouputs clicking on the left and right edges, respectively.'
    },
    {
      name: 'Rule 2',
      description: 'Toggle between HIGH and LOW inputs by clicking on them.'
    },
    {
      name: 'Rule 3',
      description: 'You can remove the inputs or outputs by holding "Ctrl" and clicking them and the other elements by "Ctrl" + "Shift and clicking them.'
    },
    {
      name: 'Rule 4',
      description: "You can drag and drop the chips from the bottom bar that works as selector."
    },
    {
      name: 'Rule 5',
      description: 'You can create custom chips that stores the logic you create.'
    },
    {
      name: 'Rule 6',
      description: 'Get crazy!!'
    }
  ]

  const changeDescription = (i) => {
    setPointer(i)
  }

  return (
    <div className="modal">
      <div className="modal_wrapper">
        <div className="modal_close" onClick={() => toggleModal()}>x</div>
        <div className="modal_selector">
          {rules.map((rule, i) => {
            return <div key={i} className={pointer === i ? 'modal_option option_selected' : 'modal_option'} onClick={() =>{changeDescription(i)}}>{rule.name}</div>;
          })}
        </div>
        <div className="modal_description">
          {rules[pointer].description}
        </div>
      </div>
    </div>
  )
}

export default Modal;
