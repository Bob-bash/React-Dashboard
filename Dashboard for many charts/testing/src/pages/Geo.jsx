import React from 'react'
import {useSelector} from 'react-redux'
import {Header} from '../components'
import { ResponsiveChoropleth } from '@nivo/geo'
import {geodata as data,geofeatures} from '../data/geodata'
import './geo.css'
function Geo() {
  const darkcolors=useSelector(state=>state.darkcolors);
  return (
    <div className='geoww geomove'>
      <Header title='Geo Chart' subtitle='Simple Geo Chart'/>
    <div className="geow"
    style={{height:'75vh',
    outline:`1px solid ${darkcolors.whitecolor}`,
    marginTop:'20px'    
    }}
    >
      <ResponsiveChoropleth
        theme={{
          legends:{
            text:{
              fontSize:13
            }
          }
        }}
        data={data}
        features={geofeatures.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="blues"
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionScale={105}
        projectionTranslation={[ 0.52, 0.65 ]}
        projectionRotation={[ 0, 0, 0 ]}
        graticuleLineWidth={0}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            },
            {
                id: 'gradient',
                type: 'linearGradient',
                colors: [
                    {
                        offset: 0,
                        color: '#000'
                    },
                    {
                        offset: 100,
                        color: 'inherit'
                    }
                ]
            }
        ]}
        fill={[
            {
                match: {
                    id: 'CAN'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'CHN'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'ATA'
                },
                id: 'gradient'
            }
        ]}
        legends={[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 15,
                itemWidth: 106,
                itemHeight: 10,
                itemDirection: 'left-to-right',
                itemTextColor: '#999',
                itemOpacity: 0.85,
                symbolSize: 17,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1,
                            itemTextColor:`${darkcolors.whitecolor}`
                        }
                    }
                ]
            }
        ]}
    />
    </div>
  </div>
  )
}

export default Geo