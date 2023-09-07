import { observer } from "mobx-react-lite"
import Color, { colorGenerator } from "./store/Color"
import ColorComp from "./ColorComp"

const App: React.FC = observer(() => {
  return (
    <>
      <div className="Colors">
        {
          Color.colors.map((el, index)=>{
            return(
              <ColorComp key={index} selected={index === Color.index} color={el} />
            )
          })
        }
      </div>     
      <div className="buttons">
        <div className="buttons__container">
          <button className="buttons__btn" onClick={()=>Color.setColor(colorGenerator())}>
            Change
          </button>
          <button className="buttons__btn" onClick={()=>Color.nextIndex()}>
            Next
          </button>
        </div>
      </div>
    </>
  )
})

export default App