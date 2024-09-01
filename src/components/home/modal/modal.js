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
      description: 'Create inputs and ouputs by clicking on the left and right edges, respectively.'
    },
    {
      name: 'Rule 2',
      description: 'Toggle between HIGH and LOW inputs by clicking on the inputs respetively.'
    },
    {
      name: 'Rule 3',
      description: 'Set the input and output pins first.'
    },
    {
      name: 'Rule 4',
      description: 'Remove the inputs/outputs by holding "Ctrl" and clicking them and the other elements by "Ctrl" + "Shift" and clicking them.'
    },
    {
      name: 'Rule 5',
      description: "Drag and drop the chips from the bottom bar that works as selector."
    },
    {
      name: 'Rule 6',
      description: 'Create custom chips by creating a circuit and saving it.'
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
