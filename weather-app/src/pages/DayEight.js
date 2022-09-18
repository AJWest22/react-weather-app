import React, {useEffect, useState} from 'react'
import info from '../weather-data.json'

export default function DayEight() {
  const [eighthRecord, setEighthRecord] = useState({});

  useEffect(() => {
    const eighthDetail = info.data.filter((it) => it.wind_cdir === "W");
    setEighthRecord(eighthDetail[0]);
  }, []);

  return (
    <div>
      <h3>Day Eight</h3>

      <p>
        Weather code: {eighthRecord?.weather?.code}. 
        Weather Description: {eighthRecord?.weather?.description}
      </p>

      <p>
        For {eighthRecord?.valid_date} at this time {eighthRecord?.datetime}
        There is a average temperature of {eighthRecord?.temp} and a low temperature 
        of {eighthRecord?.low_temp} and a high temperature of {eighthRecord?.high_temp}. 
        There's a max temperature of {eighthRecord?.max_temp} and a mintemperature 
        of {eighthRecord?.min_temp}. The app max temperature is {eighthRecord?.app_max_temp} and 
        the app min temperature is {eighthRecord?.app_min_temp}.

        The wind CDR is {eighthRecord?.wind_cdr} and the full CDR is {eighthRecord?.wind_cdr_full}. 
        The wind direction is currently {eighthRecord?.wind_dir}. The wind speed is currently 
        at {eighthRecord?.wind_spd} with gust speeds expected to be {eighthRecord?.wind_gust_spd}.

        Precipitation is {eighthRecord?.precip}. Snow is currently at {eighthRecord?.snow} and 
        snow depth {eighthRecord?.snow_depth}. The clouds are {eighthRecord?.clouds}. The hi clouds 
        are currently at {eighthRecord?.clouds_hi}and the mid cloudsare  and low clouds are 
        at {eighthRecord?.clouds_low}. This means vis is currently {eighthRecord?.vis}.

        Sunrise is set for {eighthRecord?.sunrise_ts} and sunset for {eighthRecord?.sunset_ts}. 
        Moonrise is currently timed for {eighthRecord?.moonrise_ts} and scheduled to set
        at {eighthRecord?.moonset_ts}. The moon phase is currently {eighthRecord?.moon_phase} and 
        the moon phase lunation is {eighthRecord?.moon_phase_lunation}.

        Other information: rh is currently {eighthRecord?.rh}. The pres is {eighthRecord?.pres}. 
        The ozone is currently at {eighthRecord?.ozone}. The ts is {eighthRecord?.ts}
        and the pop is {eighthRecord?.pop}. The slp is at {eighthRecord?.slp}. The dewpt 
        is {eighthRecord?.dewpt} UV radiation is expected to be {eighthRecord?.uv}.
      </p>
    </div>
  )
}
