class Ipc {

    constructor() {
        this.process = window.electronAPI.process();
        this.className;
    }

    route = async (controller, method, request = {}) => {
        return await window.electronAPI.route(controller, method, request);
    }

    close = () => {
        window.electronAPI.close();
    }

    hide = () => {
        window.electronAPI.hide();
    }

    event = (name) => {
        window.electronAPI.event(name);
    }

    toggle = () => {
        window.electronAPI.toggle();
    }

    controller(className) {
        this.className = className;
        return this;
    }

    method = async (method, request = {}) => {
        return await this.route(this.className, method, request);
    }
};

const ipc = new Ipc;
export default ipc;