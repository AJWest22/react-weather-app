import React from 'react'
import info from '../weather-data.json'

export default function DaySeven() {
  const [seventhRecord, setSeventhRecord] = useState({});

  useEffect(() => {
    const seventhDetail = info.data.filter((it) => it.rh === 74);
    setSeventhRecord(seventhDetail[0]);
  }, []);
  return (
    <div>DaySeven</div>
  )
}

