export default class Message {
    eventListeners: Array<{ type: string, callback: Function }>

    constructor() {
        this.eventListeners = [];   

        figma.ui.onmessage = (msg) => {            
            this.eventListeners.forEach(e => {
                if (msg.action === e.type) { 
                    e.callback(msg.data); 
                    return;
                }

                console.log(msg);
            })
        }
    }

    dispatch(action: string, data?: any) {
        figma.ui.postMessage({ action, data });
    }

    handleEvent(type: string, callback: Function) {
        this.eventListeners.push({ type, callback });
    }
}