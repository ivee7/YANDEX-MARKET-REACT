import React, {Component} from 'react'
import './FormSearch.scss'
import MiniSuggest from './MiniSuggest/MiniSuggest'

class FormSearch extends Component {

    state = {
        inputValue: ''
    }

    formInput = React.createRef()


    changeHandler = value => {
        this.setState({
            inputValue: value
        })
    }

    clearInputHandler = () => {
        this.setState({
            inputValue: ''
        });
        this.formInput.current.focus();
    }

    render() {
        const cls = ['form-search']

        if (this.props.isFocused) {
            cls.push('form-search_focused')
        }

        const clsClear = ['form-search__cross']

        if (this.state.inputValue !== '') {
            clsClear.push('form-search__cross_typing')
        }

        return (
            <form action="#" className={cls.join(' ')}>

                <div className='form-search__wrapper'>
                    <div className='form-search__input-wrapper'>

                        <input
                            className='form-search__input'
                            type='text'
                            placeholder='Искать товары'
                            onFocus={this.props.onFocus}
                            onChange={event => this.changeHandler(event.target.value)}
                            value={this.state.inputValue}
                            ref={this.formInput}
                        />

                        <button
                            onClick={this.clearInputHandler}
                            className={clsClear.join(' ')}
                        >
                        </button>

                    </div>

                    <button className='form-search__button'>
                        <span className='form-search__button-text'>Найти</span>
                    </button>
                </div>

                <MiniSuggest
                    setValue={event => this.changeHandler(event.target.textContent)}
                    isFocused={this.props.isFocused}
                    inputVal={this.state.inputValue}
                />

            </form>
        )
    }
}

export default FormSearch