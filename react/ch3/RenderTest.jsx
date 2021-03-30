import React, {PureComponent} from 'react';

class test extends PureComponent {
    state = {
        counter: 0,
        string: 'hello',
        number: 1,
        boolean: true,
        object: {a: 'b', c: 'd'},
        array: [5,3,6],
    };

    onClick = () => {
        const obj = this.state.array[0].inside;
        obj.push(4);
        this.setState({
            object: {...this.state.object}, // PureComponent를 사용할 때, 과거 객체를 가져오지 말고 새로운 배열이나 객체 만들 것.
        });
    };  

    render() {
        console.log('렌더링', this.state);
        return (
            <div>
                <button onClick={this.onClick}>클릭</button>
            </div>
        );
    }
}

export default Test;