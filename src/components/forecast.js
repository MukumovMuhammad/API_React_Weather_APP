import React, { useState } from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'

import "./forecast.css"



const Forecast = ({data}) => {

    return (
        <div>
            <h2>Daily</h2>
            <Accordion allowZeroExpanded className="accordion">
                
                {data.list && data.list.splice(0, 7).map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img />
                                    <label className="day">sdsd</label>
                                    <label className="description">sd</label>
                                    <label className="min-max"></label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label></label>
                                    <label></label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label></label>
                                    <label></label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label></label>
                                    <label></label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label></label>
                                    <label></label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label></label>
                                    <label></label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label></label>
                                    <label></label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>

                ))}

            </Accordion>
        </div>
    )
}

export default Forecast;