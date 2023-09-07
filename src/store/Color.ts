import { makeAutoObservable } from 'mobx'

export function colorGenerator(): string {
    let r = Math.floor(Math.random()*255)
    let g = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255)
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

class Color {
    colors: string[] = [colorGenerator(), colorGenerator(), colorGenerator(), colorGenerator(), colorGenerator()]
    index: number = 0
    constructor() {
        makeAutoObservable(this)
    }
    setColor(color: string) {
        this.colors[this.index] = color
    }
    nextIndex() {
        if(this.index !== 4) this.index++
        else this.index = 0
    }
}

export default new Color()