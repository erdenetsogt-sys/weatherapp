import React from "react";
import "./forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );
  console.log(forecastDays);
  return (
    <>
      <label className="title">Daily </label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather"
                    className="icon-small"
                  />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}&deg;C/
                    {Math.round(item.main.temp_max)}&deg;C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pressure</label>
                  <label>{item.main.pressure} mPha</label>
                </div>

                <div className="daily-details-grid-item">
                  <label>humidity</label>
                  <label>{item.main.humidity}</label>
                </div>

                <div className="daily-details-grid-item">
                  <label>Cloud</label>
                  <label>{item.clouds.all}</label>
                </div>

                <div className="daily-details-grid-item">
                  <label>Wind</label>
                  <label>{item.wind.speed} m/s</label>
                </div>

                <div className="daily-details-grid-item">
                  <label>Sea level</label>
                  <label>{item.main.sea_level}m</label>
                </div>

                <div className="daily-details-grid-item">
                  <label>Feels like</label>
                  <label>{Math.round(item.main.feels_like)}</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};
