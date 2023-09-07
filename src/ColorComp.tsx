import { observer } from "mobx-react-lite"
import { useState } from "react"

type props = {
    color: string,
    selected: boolean
}

const ColorComp: React.FC<props> = observer(({color, selected}) => {
    const [copied, setCopied] = useState<boolean>(false)
    function copyHandle() {
        navigator.clipboard.writeText(color)
        setCopied(true)        
        setTimeout(()=>setCopied(false), 1000)
    }
    return(
        <>
            <div className={selected ? 'ColorCol border' : 'ColorCol'} style={{backgroundColor: color}}>
                <button onClick={copyHandle} className="ColorCol__text">
                    { copied ? 'Copied!' : color }
                </button>
            </div>
        </>
    )
})

export default ColorComp