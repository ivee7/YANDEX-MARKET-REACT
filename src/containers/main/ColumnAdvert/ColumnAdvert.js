import React, {Component} from 'react'
import './ColumnAdvert.scss'

class ColumnAdvert extends Component {

    render() {

        return (
            <div className="content-column-advert">
                <div className="content-column-advert__wrapper">
                    <a href={this.props.href}>
                        <div className="content-column-advert__frame">
                            <img
                                className="content-column-advert__image"
                                src={require(`../../../static/images/main/${this.props.image}`)}
                                alt="здесь должна быть рекламная картинка"
                            />
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default ColumnAdvert