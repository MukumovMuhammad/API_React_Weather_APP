import React, { useState } from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'

import "./forecast.css"

const week = [ "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday", "Sunday"]

const Forecast = ({data}) => {
let show = false;
if(!show){
    console.log("-------------Data List-------------")
    console.log(data.list);
    show = true;
}
    return (
        <div>
            <h2>Daily</h2>
            <Accordion allowZeroExpanded className="accordion">
                
                {data.list && data.list.splice(0, 7).map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img src={`icons/${item.weather[0].icon}.png`}/>
                                    <label className="day">{week[index]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="min-max">{item.main.temp_min} ~ {item.main.temp_min}</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label>Pressure: </label>
                                    <label>{item.main.pressure}</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Clouds :</label>
                                    <label>{item.clouds.all}</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Sea level: </label>
                                    <label>{item.main.sea_level}</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Humidity: </label>
                                    <label>{item.main.humidity}</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Wind speed: </label>
                                    <label>{item.wind.speed}</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Feels like: </label>
                                    <label>{item.main.feels_like}</label>
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