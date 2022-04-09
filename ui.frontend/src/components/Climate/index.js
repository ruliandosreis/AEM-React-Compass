import React, { useEffect, useState } from "react";
import { ClimateStyle } from "./style";
import { getClimate } from "../../helpers/devsAPI";
import { getLocal } from "../../helpers/devsAPI";

const Climate = (props) => {

    const coordDefault = { lat: -28.2628, lng: -52.4067, region: 'Passo Fundo - RS' };
    let { lat, lng } = props;
    const [region, setRegion] = useState(null)
    const [temp, setTemp] = useState(null)
    const [codImage, setCodImage] = useState(null)

    function getState(state) {
        const jsonDataStates = require('../../states.json');
        const region = jsonDataStates.states.find(e => e.state === state);
        return region.cod_state;
    }

    function getDataLocal(lat, lng) {
        getLocal(lat, lng).then(response => {
            let city = response.data.address.city;
            let state = getState(response.data.address.state);
            setRegion(`${city} - ${state}`);
        }).catch(error => console.log(error))
    }

    function getDataClimate() {
        if (!lat && !lng) {
            lat = coordDefault.lat;
            lng = coordDefault.lng
        }
        getClimate(lat, lng).then(response => {
            if (response.data.cod === 200) {
                setTemp(`${response.data.main.temp.toFixed(0)}°`);
                setCodImage(response.data.weather[0].icon);
                if (response.data.sys.country === 'BR') getDataLocal(lat, lng);
                else setRegion(`${response.data.name} - ${response.data.sys.country}`);
            }
        }).catch(error => console.log(error))
    };

    useEffect(() => {
        getDataClimate();
    }, [lat,lng]);

    return (
        temp && region ?
            <ClimateStyle>
                <span>{region}</span>
                <div>
                    <img alt="" src={`http://openweathermap.org/img/wn/${codImage}@4x.png`} />
                    <h1>{temp}</h1>
                </div>
            </ClimateStyle>
            : <span>Aguade...</span>
    );
};

export default Climate