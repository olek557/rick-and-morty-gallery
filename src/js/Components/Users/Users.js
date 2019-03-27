import Component from "../../framework/Component";

export default class Users extends Component {

    constructor(host) {
        super(host);
    }

    render() {
        return [
            {
                tag: 'ul',
                children: [
                    {
                        tag: 'li',
                        content: `<a href="${'/user/1'}">User 1</a>`
                    },
                    {
                        tag: 'li',
                        content: `<a href="${'/user/2'}">User 2</a>`
                    },
                    {
                        tag: 'li',
                        content: `<a href="${'/user/3'}">User 3</a>`
                    },
                ]
            }
        ]
    }
}