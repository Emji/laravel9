class Store {

    constructor() {


        this.state = {

            question: false,
            tweak: false,
            show: false

        }



    }
    Show2() {

        this.state.show = !this.state.show;

    }

    cons() {
        this.state.tweak = true

    }
    uncons() {
        this.state.tweak = false
    }
}

export default new Store()