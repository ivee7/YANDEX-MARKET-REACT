import React, {Component} from 'react'
import './TopicsGalleryCell.scss'
import '../DropDownLink.scss'

class TopicsGalleryCell extends Component {

    state = {
        wrapped: true
    }

    toggleWrapHandler = () => {
        this.setState({
            wrapped: !this.state.wrapped
        })
    }

    render() {

        let topicsList

        if (this.props.subsection.topics.length !== 0) {
                topicsList = this.props.subsection.topics.length >= 5 && this.state.wrapped
                ? this.props.subsection.topics.slice(0, 5)
                : this.props.subsection.topics
        }

        return (
            <div className='topics-gallery-cell'>
                <a className='topics-gallery-cell__link drop-down-link' href="#">{this.props.subsection.subsection}</a>
                <ul className='topics-gallery-cell__ul'>

                    { this.props.subsection.topics.length === 0 ? null : topicsList.map((topic, index) => {
                        return (
                            <li className='topics-gallery-cel__li' key={index}>
                                <a className='topics-gallery-cell__li-link' href={topic.href} >{topic.topic}</a>
                            </li>
                        )
                    }) }

                    {
                        this.props.subsection.topics.length <= 5 ? null : this.state.wrapped ?
                        <li onClick={this.toggleWrapHandler} className='topics-gallery__cel-li'>
                           <span className='topics-gallery-cell__more'>
                               <span className='topics-gallery-cell__more-text'>Ещё</span>
                                <img
                                    className='topics-gallery-cell__more-arrow'
                                    src={require('../../../../../static/images/authorization/arrow-down-36dp.png')}
                                    alt='image'
                                />
                           </span>
                        </li>
                        :
                        <li onClick={this.toggleWrapHandler} className='topics-gallery-cel__li'>
                           <span className='topics-gallery-cell__more'>
                               <span className='topics-gallery-cell__more-text'>Свернуть</span>
                                <img
                                    className='topics-gallery-cell__more-arrow'
                                    src={require('../../../../../static/images/authorization/arrow-up-36dp.png')}
                                    alt='image'
                                />
                           </span>
                        </li>
                    }
                </ul>
            </div>
        )
    }
}

export default TopicsGalleryCell