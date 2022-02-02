import React from 'react'
import './DropDownTopicsGallery.scss'
import './DropDownLink.scss'
import TopicsGalleryCell from './TopicsGalleryCell/TopicsGalleryCell'


const DropDownTopicsGallery = (props) => (
    <div className='topics-gallery'>
        <a className='topics-gallery__title drop-down-link' href={props.section.href} >{props.section.title}</a>
        <div className='topics-gallery__block'>

            <div className='topics-gallery__column'>
                { props.section.subsections.firstColumn.map(
                    (subsection, index) => {
                        return (
                            <TopicsGalleryCell subsection={subsection} key={index} />
                        )
                    }
                ) }
            </div>

            <div className='topics-gallery__column'>
                { props.section.subsections.secondColumn.map(
                    (subsection, index) => {
                        return (
                            <TopicsGalleryCell subsection={subsection} key={index} />
                        )
                    }
                ) }
            </div>

            <div className='topics-gallery__column'>
                { props.section.subsections.thirdColumn.map(
                    (subsection, index) => {
                        return (
                            <TopicsGalleryCell subsection={subsection} key={index} />
                        )
                    }
                ) }
            </div>

        </div>
    </div>
)
export default DropDownTopicsGallery