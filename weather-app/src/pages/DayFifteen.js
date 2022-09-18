import React, {useEffect, useState} from 'react'
import info from '../weather-data.json'

export default function DayFifteen() {
  const [fifteenthRecord, setFifteenthRecord] = useState({});

  useEffect(() => {
    const fifteenthDetail = info.data.filter((it) => it.rh === 84);
    setFifteenthRecord(fifteenthDetail[0]);
  }, []);

  return (
    <div>
      <h3>Day Fifteen</h3>

      <p>
        Weather code: {fifteenthRecord?.weather?.code}. 
        Weather Description: {fifteenthRecord?.weather?.description}
      </p>

      <p>
        For {fifteenthRecord?.valid_date} at this time {fifteenthRecord?.datetime}
        There is a average temperature of {fifteenthRecord?.temp} and a low temperature 
        of {fifteenthRecord?.low_temp} and a high temperature of {fifteenthRecord?.high_temp}. 
        There's a max temperature of {fifteenthRecord?.max_temp} and a mintemperature 
        of {fifteenthRecord?.min_temp}. The app max temperature is {fifteenthRecord?.app_max_temp} and 
        the app min temperature is {fifteenthRecord?.app_min_temp}.

        The wind CDR is {fifteenthRecord?.wind_cdr} and the full CDR is {fifteenthRecord?.wind_cdr_full}. 
        The wind direction is currently {fifteenthRecord?.wind_dir}. The wind speed is currently 
        at {fifteenthRecord?.wind_spd} with gust speeds expected to be {fifteenthRecord?.wind_gust_spd}.

        Precipitation is {fifteenthRecord?.precip}. Snow is currently at {fifteenthRecord?.snow} and 
        snow depth {fifteenthRecord?.snow_depth}. The clouds are {fifteenthRecord?.clouds}. The hi clouds 
        are currently at {fifteenthRecord?.clouds_hi}and the mid cloudsare  and low clouds are 
        at {fifteenthRecord?.clouds_low}. This means vis is currently {fifteenthRecord?.vis}.

        Sunrise is set for {fifteenthRecord?.sunrise_ts} and sunset for {fifteenthRecord?.sunset_ts}. 
        Moonrise is currently timed for {fifteenthRecord?.moonrise_ts} and scheduled to set
        at {fifteenthRecord?.moonset_ts}. The moon phase is currently {fifteenthRecord?.moon_phase} and 
        the moon phase lunation is {fifteenthRecord?.moon_phase_lunation}.

        Other information: rh is currently {fifteenthRecord?.rh}. The pres is {fifteenthRecord?.pres}. 
        The ozone is currently at {fifteenthRecord?.ozone}. The ts is {fifteenthRecord?.ts}
        and the pop is {fifteenthRecord?.pop}. The slp is at {fifteenthRecord?.slp}. The dewpt 
        is {fifteenthRecord?.dewpt} UV radiation is expected to be {fifteenthRecord?.uv}.
      </p>
    </div>
  )
}
